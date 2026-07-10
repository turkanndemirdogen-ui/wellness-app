// generate-engine-seed.mjs — content/engine-rules-katman*.json → 0006_seed_engine_rules.sql
//
// 40 gökyüzü kuralını (katman 1a/1b/2) engine_rules'a yükleyen idempotent seed
// üretir. Yeniden üret: `npm run engine:generate`. Ürettiği SQL panelde çalışır
// ve ON CONFLICT (rule_id) DO UPDATE sayesinde idempotenttir.
//
// generate-seed.mjs ile aynı desen: tüm satırlar tek dollar-quote JSON bloğu
// içinde gömülür, Postgres tarafında jsonb_array_elements ile açılır (escaping
// tuzağı yok). trigger.* alanları sütunlara düzleştirilir.
//
// ÖN KOŞUL: 0005_retrieval.sql uygulanmış olmalı — orada aspect_quality ve
// natal_target NOT NULL kaldırılır (katman-1a kuralları bu alanları null bırakır).

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './lib/content-io.mjs';

const TAG = '$weng$';
const FILES = [
  'engine-rules-katman1a.json',
  'engine-rules-katman1b.json',
  'engine-rules-katman2.json',
];

function dq(value) {
  const json = JSON.stringify(value);
  if (json.includes(TAG)) {
    throw new Error(`İçerik dollar-quote etiketini (${TAG}) içeriyor; üretici güvenli değil.`);
  }
  return `${TAG}${json}${TAG}`;
}

// --- Kuralları yükle + trigger.* alanlarını düzleştir ---
const rows = [];
const perFile = [];
for (const f of FILES) {
  const doc = JSON.parse(readFileSync(join(ROOT, 'content', f), 'utf8'));
  const rules = Array.isArray(doc.rules) ? doc.rules : [];
  for (const r of rules) {
    const t = r.trigger ?? {};
    if (!t.transit_planet) {
      throw new Error(`${f}: ${r.rule_id ?? '(rule_id yok)'} — transit_planet zorunlu, boş.`);
    }
    rows.push({
      rule_id: r.rule_id,
      transit_planet: t.transit_planet,
      aspect_quality: t.aspect_quality ?? null,
      natal_target: t.natal_target ?? null,
      sign_modifier: t.sign_modifier ?? null,
      house_modifier: t.house_modifier ?? null,
      theme_internal: r.theme_internal ?? null,
      user_text_variants: r.user_text_variants ?? [],
      body_zone: r.body_zone ?? null,
      herb_motif: r.herb_motif ?? null,
      evidence_label: r.evidence_label ?? null,
      priority: Number.isFinite(r.priority) ? r.priority : 0,
      source_chunk_refs: r.source_chunk_refs ?? [], // A1: şimdilik boş (provenance ertelendi)
    });
  }
  perFile.push(`${f}=${rules.length}`);
}

// Bütünlük: rule_id benzersiz olmalı (çakışma seed'i sessizce ezerdi).
const ids = new Set();
for (const r of rows) {
  if (ids.has(r.rule_id)) throw new Error(`Tekrarlı rule_id: ${r.rule_id}`);
  ids.add(r.rule_id);
}

// --- SQL üret ---
const sql = `-- =====================================================================
-- 0006_seed_engine_rules.sql  ·  ÜRETİLMİŞ DOSYA — elle düzenleme.
-- Üretici: scripts/generate-engine-seed.mjs  (yeniden üret: npm run engine:generate)
--
-- İçerik: ${rows.length} gökyüzü kuralı (${perFile.join(' · ')}).
-- Idempotent: ON CONFLICT (rule_id) DO UPDATE (panelde tekrar çalıştırılabilir).
-- ÖN KOŞUL: 0005_retrieval.sql UYGULANMIŞ olmalı (aspect_quality/natal_target
--           NOT NULL kaldırılmış) — yoksa katman-1a satırları eklenemez.
--
-- Not (A1 kararı): source_chunk_refs hepsi boş; provenance köprüsü (kabul #6)
-- refine fazına ertelendi — engine eşleştirmesi ilişkisel/RAG-dışı.
-- =====================================================================

insert into public.engine_rules (
  rule_id, transit_planet, aspect_quality, natal_target,
  sign_modifier, house_modifier, theme_internal, user_text_variants,
  body_zone, herb_motif, evidence_label, priority, source_chunk_refs
)
select
  e->>'rule_id',
  e->>'transit_planet',
  e->>'aspect_quality',
  e->>'natal_target',
  e->>'sign_modifier',
  e->>'house_modifier',
  e->>'theme_internal',
  coalesce(e->'user_text_variants', '[]'::jsonb),
  e->>'body_zone',
  e->>'herb_motif',
  e->>'evidence_label',
  (e->>'priority')::int,
  coalesce(e->'source_chunk_refs', '[]'::jsonb)
from jsonb_array_elements(${dq(rows)}::jsonb) as e
on conflict (rule_id) do update set
  transit_planet     = excluded.transit_planet,
  aspect_quality     = excluded.aspect_quality,
  natal_target       = excluded.natal_target,
  sign_modifier      = excluded.sign_modifier,
  house_modifier     = excluded.house_modifier,
  theme_internal     = excluded.theme_internal,
  user_text_variants = excluded.user_text_variants,
  body_zone          = excluded.body_zone,
  herb_motif         = excluded.herb_motif,
  evidence_label     = excluded.evidence_label,
  priority           = excluded.priority,
  source_chunk_refs  = excluded.source_chunk_refs,
  updated_at         = now();
`;

const outPath = join(ROOT, 'supabase', 'migrations', '0006_seed_engine_rules.sql');
writeFileSync(outPath, sql, 'utf8');

// --- Özet (gözlemlenebilirlik) ---
console.log('[engine-seed] üretildi →', outPath);
console.log(`[engine-seed] kural: ${rows.length}  (${perFile.join(' · ')})`);
if (rows.length !== 40) {
  console.warn(`[engine-seed] ⚠ kural sayısı 40 değil (${rows.length}) — kaynak dosyaları kontrol et.`);
}
