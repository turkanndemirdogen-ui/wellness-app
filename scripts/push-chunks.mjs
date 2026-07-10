// push-chunks.mjs — 0004_seed_chunks.sql içindeki chunk'ları (embedding'leriyle)
// doğrudan Supabase'e yazar. 12 MB SQL panele/db push'a sığmadığı için batch insert.
//
// Çalıştır: npm run push:chunks
// Gerekli .env alanları:
//   EXPO_PUBLIC_SUPABASE_URL   (veya SUPABASE_URL)
//   SUPABASE_SERVICE_ROLE_KEY  (RLS'i aşar — yalnız sunucu/CLI tarafı; .env gitignore'da)
//
// Embedding'ler YENİDEN üretilmez: 0004'teki $wchunks$...$wchunks$ JSON blokları
// okunur (OpenAI maliyeti/anahtarı gerekmez). Idempotent: kaynak başına delete + insert.

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';
import { getConfig } from './lib/env.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TAG = '$wchunks$';
const SQL_PATH = join(ROOT, 'supabase', 'migrations', '0004_seed_chunks.sql');
const INSERT_BATCH = 50;

// --- .env oku + URL normalize/doğrula (ortak yardımcı: scripts/lib/env.mjs) ---
let url, serviceKey;
try {
  ({ url, serviceKey } = getConfig());
} catch (e) {
  console.error(`✗ ${e.message}`);
  process.exit(1);
}
if (!serviceKey) {
  console.error('✗ SUPABASE_SERVICE_ROLE_KEY .env içinde yok.');
  console.error('  Supabase panel → Project Settings → API Keys → service_role (secret) → .env\'e ekle:');
  console.error('  SUPABASE_SERVICE_ROLE_KEY=eyJ...');
  process.exit(1);
}

// --- 0004'ten kayıtları çıkar (embedding'ler dahil) ---
function loadRecords() {
  const sql = readFileSync(SQL_PATH, 'utf8');
  const parts = sql.split(TAG);
  // TAG çiftler halinde: JSON blokları 1,3,5,... (tek indeksler).
  const records = [];
  for (let i = 1; i < parts.length; i += 2) {
    const arr = JSON.parse(parts[i]);
    for (const r of arr) records.push(r);
  }
  return records;
}

const records = loadRecords();
if (records.length === 0) {
  console.error('✗ 0004_seed_chunks.sql içinde chunk bulunamadı. Önce: npm run ingest -- --all');
  process.exit(1);
}
const sourceIds = [...new Set(records.map((r) => r.source_id))];

// Güvenlik doğrulaması: excluded görünürlüklü chunk yazılmamalı.
const badVis = records.filter((r) => !['user', 'agent_only'].includes(r.visibility));
if (badVis.length > 0) {
  console.error(`✗ GÜVENLİK: beklenmeyen visibility'li ${badVis.length} chunk — durduruluyor.`);
  process.exit(1);
}

console.log(`\n== push-chunks ==`);
console.log(`Kaynak: ${sourceIds.length} · chunk: ${records.length} (user ${records.filter(r=>r.visibility==='user').length} · agent_only ${records.filter(r=>r.visibility==='agent_only').length})`);

const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });

// --- 1) İlgili kaynakların eski chunk'larını sil (idempotent) ---
{
  const { error } = await supabase.from('vault_chunks').delete().in('source_id', sourceIds);
  if (error) {
    console.error(`✗ delete hatası: ${error.message}`);
    process.exit(1);
  }
  console.log(`  · eski chunk'lar silindi (${sourceIds.length} kaynak)`);
}

// --- 2) Batch insert ---
let inserted = 0;
for (let i = 0; i < records.length; i += INSERT_BATCH) {
  const batch = records.slice(i, i + INSERT_BATCH).map((r) => ({
    chunk_id: r.chunk_id,
    source_id: r.source_id,
    bolum: r.bolum,
    text: r.text,
    embedding: r.embedding, // "[0.1,0.2,...]" string → pgvector text girişi
    guven_tier: r.guven_tier,
    tema: r.tema,
    planet_keys: r.planet_keys,
    sign_keys: r.sign_keys,
    riskli_madde: r.riskli_madde,
    app_safe: r.app_safe,
    visibility: r.visibility,
    meta: r.meta,
  }));
  const { error } = await supabase.from('vault_chunks').insert(batch);
  if (error) {
    console.error(`✗ insert hatası (batch ${Math.floor(i / INSERT_BATCH) + 1}): ${error.message}`);
    process.exit(1);
  }
  inserted += batch.length;
  console.log(`  · insert ${inserted}/${records.length}`);
}

console.log(`\n✅ ${inserted} chunk yazıldı. Doğrula: npm run db:check\n`);
