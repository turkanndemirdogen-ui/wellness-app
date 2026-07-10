// ingest.mjs — RAG ingest pipeline (rag-base-spec §4). Kaynak MD → chunk →
// metadata + görünürlük → (embed) → supabase/migrations/0004_seed_chunks.sql.
//
// Kullanım:
//   node scripts/ingest.mjs --dry            # embed YOK (anahtar gerekmez); chunk+sınıflandır+rapor
//   node scripts/ingest.mjs --dry --limit 2  # yalnız ilk 2 uygun kaynak (pilot)
//   node scripts/ingest.mjs --limit 2        # PİLOT: 2 kaynağı gerçekten embed'le (OPENAI_API_KEY gerekir)
//   node scripts/ingest.mjs --all            # 46 kaynağın tamamı
//
// Çıktı SQL idempotent: kaynak başına delete + insert (yeniden çalıştırınca
// çift kayıt olmaz). Panelde/db push ile uygulanır (service_role gerekmez).

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, SOURCES, loadSources } from './lib/content-io.mjs';
import { chunkMarkdown } from './lib/chunk.mjs';
import { decideSourceIngest } from './lib/source-visibility.mjs';
import { embed } from './lib/embed.mjs';

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const ALL = args.includes('--all');
const limIdx = args.indexOf('--limit');
const LIMIT = limIdx !== -1 ? Number(args[limIdx + 1]) : ALL ? Infinity : 2;
const TAG = '$wchunks$';

// --- 1) Kaynakları planla ---
const sources = loadSources();
const plan = sources.map((s) => ({ src: s, decision: decideSourceIngest(s) }));
const excludedSources = plan.filter((p) => !p.decision.ingest);
const eligible = plan.filter((p) => p.decision.ingest);
const selected = eligible.slice(0, LIMIT);

console.log(`\n== RAG ingest (${DRY ? 'DRY — embed yok' : 'CANLI'}) ==`);
console.log(`Kaynak: ${sources.length} · excluded (kaynak-düzeyi): ${excludedSources.length} · uygun: ${eligible.length} · seçilen: ${selected.length}`);
for (const p of excludedSources) {
  console.log(`  excluded → ${p.src.id}: ${p.decision.reason}`);
}

// --- 2) Chunk'la ---
const records = [];
const perVis = { user: 0, agent_only: 0, excluded: 0 };
for (const { src, decision } of selected) {
  const path = join(SOURCES, src.dosya);
  if (!existsSync(path)) {
    console.warn(`  ⚠ dosya yok, atlanıyor: ${src.dosya}`);
    continue;
  }
  const raw = readFileSync(path, 'utf8');
  const chunks = chunkMarkdown(src.id, raw);
  const appSafe = src.guven_tier !== 'app_disi';
  for (const ch of chunks) {
    records.push({
      chunk_id: ch.chunk_id,
      source_id: src.id,
      bolum: ch.bolum,
      text: ch.text,
      guven_tier: src.guven_tier ?? null,
      tema: src.tema ?? [],
      planet_keys: [],
      sign_keys: [],
      riskli_madde: Array.isArray(src.riskli_madde) && src.riskli_madde.length > 0,
      app_safe: appSafe,
      visibility: decision.visibility, // fail-closed: kaynak kararından
      meta: { bolum: ch.bolum },
    });
    perVis[decision.visibility] = (perVis[decision.visibility] ?? 0) + 1;
  }
  console.log(`  · ${src.id}: ${chunks.length} chunk · visibility=${decision.visibility}`);
}

console.log(`\nToplam chunk: ${records.length}  (user ${perVis.user} · agent_only ${perVis.agent_only} · excluded ${perVis.excluded})`);

// Güvenlik doğrulaması: kaynak-düzeyi excluded olan hiçbir kaynağın chunk'ı üretilmemeli.
const excludedIds = new Set(excludedSources.map((p) => p.src.id));
const leak = records.filter((r) => excludedIds.has(r.source_id));
if (leak.length > 0) {
  console.error(`✗ GÜVENLİK: excluded kaynaktan ${leak.length} chunk sızdı — durduruluyor.`);
  process.exit(1);
}

if (DRY) {
  console.log('\n[dry] embed atlandı, SQL yazılmadı. Gerçek embedding için --dry olmadan çalıştır (OPENAI_API_KEY gerekir).\n');
  process.exit(0);
}

// --- 3) Embed ---
if (records.length === 0) {
  console.log('Chunk yok; çıkılıyor.');
  process.exit(0);
}
console.log(`\n[embed] ${records.length} chunk embed ediliyor…`);
const vectors = await embed(records.map((r) => r.text));
if (vectors.length !== records.length) {
  console.error(`✗ embedding sayısı chunk sayısıyla uyuşmuyor (${vectors.length} ≠ ${records.length}).`);
  process.exit(1);
}
records.forEach((r, i) => (r.embedding = vectors[i]));

// --- 4) Idempotent seed SQL üret ---
const sourceIds = [...new Set(records.map((r) => r.source_id))];
const payload = records.map((r) => ({
  chunk_id: r.chunk_id, source_id: r.source_id, bolum: r.bolum, text: r.text,
  embedding: `[${r.embedding.join(',')}]`,
  guven_tier: r.guven_tier, tema: r.tema, planet_keys: r.planet_keys,
  sign_keys: r.sign_keys, riskli_madde: r.riskli_madde, app_safe: r.app_safe,
  visibility: r.visibility, meta: r.meta,
}));
const idsSql = sourceIds.map((id) => `'${id.replace(/'/g, "''")}'`).join(', ');
const BATCH = 40; // parçalı INSERT: dev tek statement yerine güvenli parçalar

function insertBlock(slice, n, total) {
  const json = JSON.stringify(slice);
  if (json.includes(TAG)) {
    console.error(`✗ içerik dollar-quote etiketini (${TAG}) içeriyor.`);
    process.exit(1);
  }
  return `-- batch ${n}/${total} (${slice.length} chunk)
insert into public.vault_chunks
  (chunk_id, source_id, bolum, text, embedding, guven_tier, tema,
   planet_keys, sign_keys, riskli_madde, app_safe, visibility, meta)
select
  e->>'chunk_id', e->>'source_id', e->>'bolum', e->>'text',
  (e->>'embedding')::vector,
  e->>'guven_tier', e->'tema', e->'planet_keys', e->'sign_keys',
  (e->>'riskli_madde')::boolean, (e->>'app_safe')::boolean, e->>'visibility',
  e->'meta'
from jsonb_array_elements(${TAG}${json}${TAG}::jsonb) as e
on conflict (chunk_id) do update set
  source_id = excluded.source_id, bolum = excluded.bolum, text = excluded.text,
  embedding = excluded.embedding, guven_tier = excluded.guven_tier,
  tema = excluded.tema, planet_keys = excluded.planet_keys,
  sign_keys = excluded.sign_keys, riskli_madde = excluded.riskli_madde,
  app_safe = excluded.app_safe, visibility = excluded.visibility,
  meta = excluded.meta, updated_at = now();`;
}

const totalBatches = Math.ceil(payload.length / BATCH);
const blocks = [];
for (let i = 0; i < payload.length; i += BATCH) {
  blocks.push(insertBlock(payload.slice(i, i + BATCH), blocks.length + 1, totalBatches));
}

const sql = `-- =====================================================================
-- 0004_seed_chunks.sql  ·  ÜRETİLMİŞ — elle düzenleme.
-- Üretici: scripts/ingest.mjs  (yeniden üret: npm run ingest -- --all)
-- ${records.length} chunk · ${sourceIds.length} kaynak · ${totalBatches} batch · embed=${process.env.EMBED_MODEL || 'text-embedding-3-large'}@${process.env.EMBED_DIMENSIONS || 1536}
-- Ön koşul: 0001 + 0002 çalıştırılmış (vault_chunks + pgvector).
-- Idempotent: bu kaynakların eski chunk'ları silinip yeniden yazılır.
-- =====================================================================

delete from public.vault_chunks where source_id in (${idsSql});

${blocks.join('\n\n')}
`;

const outPath = join(ROOT, 'supabase', 'migrations', '0004_seed_chunks.sql');
writeFileSync(outPath, sql, 'utf8');
console.log(`\n[ingest] üretildi → ${outPath}`);
console.log(`[ingest] ${records.length} chunk · ${sourceIds.length} kaynak. Panelde çalıştır ya da: npx supabase db push\n`);
