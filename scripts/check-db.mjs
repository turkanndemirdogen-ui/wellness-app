// check-db.mjs — Seed sonrası CANLI doğrulama (anon key ile, kullanıcı gözünden).
// Çalıştır: npm run db:check   (önce 0001+0002+0003 SQL panelde çalıştırılmış olmalı)
//
// Kanıtladıkları (gerçek Supabase üzerinde):
//  · herbs = 37, quizzes = 12 okunabiliyor.
//  · vault_sources kullanıcı-yolundan yalnız visibility='user' geliyor.
//  · agent_only kaynak anon istemciye ASLA gelmiyor (RLS duvarı canlı).

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// .env'i elle oku (harici dotenv'e gerek yok).
function readEnv() {
  const env = {};
  try {
    for (const line of readFileSync(join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2];
    }
  } catch {
    console.error('✗ .env okunamadı (repo kökünde .env olmalı).');
    process.exit(1);
  }
  return env;
}

const env = readEnv();
const url = env.EXPO_PUBLIC_SUPABASE_URL;
const key = env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error('✗ EXPO_PUBLIC_SUPABASE_URL / _ANON_KEY .env içinde yok.');
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

let failed = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? '  ✓' : '  ✗ BAŞARISIZ:'} ${msg}`);
  if (!cond) failed++;
};

async function count(table, filter) {
  let q = supabase.from(table).select('*', { count: 'exact', head: true });
  if (filter) q = filter(q);
  const { count: c, error } = await q;
  if (error) return { error };
  return { c };
}

console.log('\n== Canlı DB doğrulaması (anon key) ==\n');

const herbs = await count('herbs');
if (herbs.error) ok(false, `herbs okunamadı: ${herbs.error.message}`);
else ok(herbs.c === 37, `herbs = ${herbs.c} (beklenen 37)`);

const quizzes = await count('quizzes');
if (quizzes.error) ok(false, `quizzes okunamadı: ${quizzes.error.message}`);
else ok(quizzes.c === 12, `quizzes = ${quizzes.c} (beklenen 12)`);

// Görünürlük duvarı — CANLI: anon yalnız 'user' görmeli.
const allSrc = await count('vault_sources');
const userSrc = await count('vault_sources', (q) => q.eq('visibility', 'user'));
const agentSrc = await count('vault_sources', (q) => q.eq('visibility', 'agent_only'));

if (allSrc.error) {
  ok(false, `vault_sources okunamadı: ${allSrc.error.message}`);
} else {
  ok(agentSrc.c === 0, `anon istemciye agent_only kaynak GELMİYOR (görülen: ${agentSrc.c})`);
  ok(allSrc.c === userSrc.c, `görülen tüm kaynaklar 'user' (${allSrc.c} = ${userSrc.c})`);
  console.log(`  · anon'un gördüğü kaynak: ${allSrc.c} (manifest'te 39 user bekleniyor)`);
}

// vault_chunks — RAG ingest sonrası (0004 uygulandıysa). Boşsa bilgilendirir, hata saymaz.
const allChunk = await count('vault_chunks');
const agentChunk = await count('vault_chunks', (q) => q.eq('visibility', 'agent_only'));
if (allChunk.error) {
  console.log(`  · vault_chunks okunamadı (0004 henüz uygulanmadıysa normal): ${allChunk.error.message}`);
} else if (allChunk.c === 0) {
  console.log('  · vault_chunks boş — RAG ingest (0004) henüz uygulanmadı (bu adım opsiyonel).');
} else {
  ok(agentChunk.c === 0, `anon istemciye agent_only CHUNK gelmiyor (görülen: ${agentChunk.c})`);
  console.log(`  · anon'un gördüğü chunk: ${allChunk.c} (yalnız visibility='user' + app_safe)`);
}

console.log(`\n${failed === 0 ? '✅ CANLI DOĞRULAMA GEÇTİ' : `❌ ${failed} KONTROL BAŞARISIZ`}\n`);
process.exit(failed === 0 ? 0 : 1);
