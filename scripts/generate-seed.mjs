// generate-seed.mjs — content/*.json → supabase/migrations/0003_seed_content.sql
//
// Bu, "content/*.json için idempotent upsert komutu"dur. İçerik değişince
// yeniden çalıştır: `npm run seed:generate`. Ürettiği SQL, panelde (SQL Editor)
// çalıştırılır ve ON CONFLICT DO UPDATE sayesinde idempotenttir (ikinci
// çalıştırma çift kayıt üretmez, yalnız günceller).
//
// Escaping tuzağından kaçınmak için tüm JSON, dollar-quote ($wseed$...$wseed$)
// içinde tek blok olarak gömülür ve Postgres tarafında ::jsonb ile açılır.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadHerbs, loadQuizzes, loadSources } from './lib/content-io.mjs';
import { normalizeVisibility } from './lib/visibility.mjs';

const TAG = '$wseed$';

function dq(value) {
  const json = JSON.stringify(value);
  if (json.includes(TAG)) {
    throw new Error(`İçerik dollar-quote etiketini (${TAG}) içeriyor; üretici güvenli değil.`);
  }
  return `${TAG}${json}${TAG}`;
}

// --- Verileri yükle ---
const { herbs, cardMatched } = loadHerbs();
const quizzes = loadQuizzes();
const sources = loadSources().map((s) => ({
  id: s.id,
  dosya: s.dosya ?? null,
  baslik: s.baslik ?? null,
  tema: s.tema ?? [],
  guven_tier: s.guven_tier ?? null,
  riskli_madde: s.riskli_madde ?? [],
  visibility: normalizeVisibility(s.visibility), // FAIL-CLOSED (kod katmanı)
}));

const agentOnly = sources.filter((s) => s.visibility === 'agent_only');
const userVis = sources.filter((s) => s.visibility === 'user');
const excluded = sources.filter((s) => s.visibility === 'excluded');

// --- SQL üret ---
const sql = `-- =====================================================================
-- 0003_seed_content.sql  ·  ÜRETİLMİŞ DOSYA — elle düzenleme.
-- Üretici: scripts/generate-seed.mjs  (yeniden üret: npm run seed:generate)
--
-- İçerik: ${herbs.length} bitki · ${quizzes.length} quiz · ${sources.length} kaynak.
-- Idempotent: ON CONFLICT DO UPDATE (panelde tekrar tekrar çalıştırılabilir).
-- Ön koşul: 0001 + 0002 migrationları çalıştırılmış olmalı.
-- =====================================================================

-- ---------- herbs (${herbs.length}) ----------
insert into public.herbs (herb_id, name_tr, gezegen_birincil, app_safe, guven_tier, data)
select
  e->>'herb_id',
  e#>>'{names,tr}',
  e->>'gezegen_birincil',
  coalesce((e#>>'{guvenlik,app_safe}')::boolean, true),
  e#>>'{guvenlik,guven_tier}',
  e
from jsonb_array_elements(${dq(herbs)}::jsonb) as e
on conflict (herb_id) do update set
  name_tr          = excluded.name_tr,
  gezegen_birincil = excluded.gezegen_birincil,
  app_safe         = excluded.app_safe,
  guven_tier       = excluded.guven_tier,
  data             = excluded.data,
  updated_at       = now();

-- ---------- quizzes (${quizzes.length}) ----------
insert into public.quizzes (quiz_id, ay, title, data)
select
  e->>'quiz_id',
  (e->>'ay')::int,
  e->>'title',
  e->'data'
from jsonb_array_elements(${dq(quizzes)}::jsonb) as e
on conflict (quiz_id) do update set
  ay         = excluded.ay,
  title      = excluded.title,
  data       = excluded.data,
  updated_at = now();

-- ---------- vault_sources (${sources.length}: ${userVis.length} user · ${agentOnly.length} agent_only · ${excluded.length} excluded) ----------
-- FAIL-CLOSED: visibility boş/eksikse coalesce → 'agent_only' (ikinci katman).
insert into public.vault_sources (source_id, dosya, baslik, tema, guven_tier, riskli_madde, visibility)
select
  e->>'id',
  e->>'dosya',
  e->>'baslik',
  e->'tema',
  e->>'guven_tier',
  e->'riskli_madde',
  coalesce(nullif(e->>'visibility', ''), 'agent_only')
from jsonb_array_elements(${dq(sources)}::jsonb) as e
on conflict (source_id) do update set
  dosya        = excluded.dosya,
  baslik       = excluded.baslik,
  tema         = excluded.tema,
  guven_tier   = excluded.guven_tier,
  riskli_madde = excluded.riskli_madde,
  visibility   = excluded.visibility,
  updated_at   = now();
`;

const outPath = join(ROOT, 'supabase', 'migrations', '0003_seed_content.sql');
writeFileSync(outPath, sql, 'utf8');

// --- Özet (gözlemlenebilirlik) ---
console.log('[seed] üretildi →', outPath);
console.log(`[seed] bitki: ${herbs.length} (kart eşleşen: ${cardMatched})`);
console.log(`[seed] quiz:  ${quizzes.length}`);
console.log(`[seed] kaynak: ${sources.length}  = user ${userVis.length} · agent_only ${agentOnly.length} · excluded ${excluded.length}`);
if (herbs.length !== 37) console.warn(`[seed] ⚠ bitki sayısı 37 değil (${herbs.length}) — beklenen envanterle karşılaştır.`);
if (quizzes.length !== 12) console.warn(`[seed] ⚠ quiz sayısı 12 değil (${quizzes.length}).`);
