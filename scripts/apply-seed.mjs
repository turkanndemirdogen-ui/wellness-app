// apply-seed.mjs — content/*.json içeriğini doğrudan Supabase'e upsert eder.
// 0003_seed_content.sql'in birebir eşdeğeri; panel/SQL Editor gerektirmez.
//
// Çalıştır: npm run db:upsert
// Gerekli .env alanları (push-chunks ile aynı):
//   EXPO_PUBLIC_SUPABASE_URL   (veya SUPABASE_URL)
//   SUPABASE_SERVICE_ROLE_KEY  (RLS'i aşar — yalnız sunucu/CLI tarafı; .env gitignore'da)
//
// Idempotent: ON CONFLICT DO UPDATE eşdeğeri (herb_id / quiz_id / source_id üzerinde
// upsert) — tekrar çalıştırma çift kayıt üretmez, yalnız günceller.
// Alan eşlemesi generate-seed.mjs ile birebir aynıdır; içerik değişince önce
// `npm run seed:generate` ile SQL'i de tazele ki repo ve DB izi aynı kalsın.

import { createClient } from '@supabase/supabase-js';
import { loadHerbs, loadQuizzes, loadSources } from './lib/content-io.mjs';
import { normalizeVisibility } from './lib/visibility.mjs';
import { getConfig } from './lib/env.mjs';

let url, serviceKey;
try {
  ({ url, serviceKey } = getConfig());
} catch (e) {
  console.error(`✗ ${e.message}`);
  process.exit(1);
}
if (!serviceKey) {
  console.error('✗ SUPABASE_SERVICE_ROLE_KEY .env içinde yok.');
  process.exit(1);
}
const db = createClient(url, serviceKey, { auth: { persistSession: false } });
const now = new Date().toISOString();

// --- herbs (generate-seed.mjs ile aynı alan eşlemesi) ---
const { herbs, cardMatched } = loadHerbs();
const herbRows = herbs.map((e) => ({
  herb_id: e.herb_id,
  name_tr: e?.names?.tr ?? null,
  gezegen_birincil: e.gezegen_birincil ?? null,
  app_safe: e?.guvenlik?.app_safe ?? true,
  guven_tier: e?.guvenlik?.guven_tier ?? null,
  data: e,
  updated_at: now,
}));

// --- quizzes ---
const quizRows = loadQuizzes().map((q) => ({
  quiz_id: q.quiz_id, ay: q.ay, title: q.title, data: q.data, updated_at: now,
}));

// --- vault_sources (FAIL-CLOSED normalize — kod katmanı) ---
const sourceRows = loadSources().map((s) => ({
  source_id: s.id,
  dosya: s.dosya ?? null,
  baslik: s.baslik ?? null,
  tema: s.tema ?? [],
  guven_tier: s.guven_tier ?? null,
  riskli_madde: s.riskli_madde ?? [],
  visibility: normalizeVisibility(s.visibility),
  updated_at: now,
}));

console.log(`[upsert] bitki ${herbRows.length} (kart eşleşen ${cardMatched}) · quiz ${quizRows.length} · kaynak ${sourceRows.length}`);
if (herbRows.length !== 37) console.warn(`[upsert] ⚠ bitki sayısı 37 değil (${herbRows.length}).`);
if (quizRows.length !== 12) console.warn(`[upsert] ⚠ quiz sayısı 12 değil (${quizRows.length}).`);

async function upsert(table, rows, onConflict) {
  const { error, count } = await db.from(table).upsert(rows, { onConflict, count: 'exact' });
  if (error) { console.error(`✗ ${table}: ${error.message}`); process.exit(1); }
  console.log(`  ✓ ${table}: ${count ?? rows.length} satır upsert`);
}

await upsert('herbs', herbRows, 'herb_id');
await upsert('quizzes', quizRows, 'quiz_id');
await upsert('vault_sources', sourceRows, 'source_id');
console.log('✅ İçerik upsert tamamlandı (idempotent). Doğrulama: npm run db:check');
