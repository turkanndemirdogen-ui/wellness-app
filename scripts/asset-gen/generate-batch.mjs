// generate-batch.mjs — Batch-1 kart üretimi (Replicate, A0 brief kilitleri).
// - PRECHECK kapısı geçmeyen bitki İÇİN ÜRETİM YAPMAZ (A0 §12.2).
// - Çıktı DOĞRUDAN kalıcı staging'e yazılır (A0 §13: Temp'e YAZILMAZ) ve
//   prediction verisi Replicate'te ~1 saat sonra silindiği için indirme HEMEN yapılır.
// - Her üretim run.json ile mühürlenir (model sürümü + tam input + prediction id).
//
// Kullanım:
//   node scripts/asset-gen/generate-batch.mjs --schema      -> model input şemasını yazdır
//   node scripts/asset-gen/generate-batch.mjs [herb_id ...] -> üretim (boş = tümü)

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');
const RECETE = JSON.parse(readFileSync(join(HERE, 'batch1-recete.json'), 'utf8'));
const WORK = RECETE._meta.calisma_klasoru.replace(/\//g, '\\');
const REF_ROOT = join(WORK, 'references');
const STAGING = join(WORK, 'staging');

const MODEL = 'fofr/sdxl-multi-controlnet-lora';

// .env'i elle oku (harici dotenv yok; check-db.mjs kalıbı).
const env = {};
for (const line of readFileSync(join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m) env[m[1]] = m[2];
}
const H = { Authorization: `Bearer ${env.REPLICATE_API_TOKEN}` };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function latestVersion() {
  const r = await fetch(`https://api.replicate.com/v1/models/${MODEL}`, { headers: H });
  if (!r.ok) throw new Error(`model sorgusu ${r.status}`);
  return (await r.json()).latest_version;
}

if (process.argv.includes('--schema')) {
  const v = await latestVersion();
  const props = v.openapi_schema?.components?.schemas?.Input?.properties ?? {};
  console.log(`Sürüm: ${v.id}`);
  for (const [k, p] of Object.entries(props)) {
    console.log(`  ${k}: ${p.type ?? p.allOf?.[0]?.$ref ?? '?'}${p.default !== undefined ? ` (default ${JSON.stringify(p.default)})` : ''}`);
  }
  process.exit(0);
}

// --- PRECHECK kapısı (A0 §12.2: dört madde true + checked_by dolu, yoksa ÜRETİM YOK) ---
const MADDELER = ['a_dogru_tur', 'b_teshis_kadrajda', 'c_metin_semasi_yok', 'd_renk_uyumlu'];
const precheckPath = join(REF_ROOT, 'PRECHECK.json');
const precheck = existsSync(precheckPath) ? JSON.parse(readFileSync(precheckPath, 'utf8')) : {};

function refFile(herbId) {
  for (const name of ['ref-crop.png', 'ref-crop.jpg', 'ref-plate.jpg', 'ref-plate.png', 'ref-plate.jpeg']) {
    const p = join(REF_ROOT, herbId, name);
    if (existsSync(p)) return p;
  }
  return null;
}

// Referans görselini Replicate Files API'ye yükler; prediction'a URL verilir.
async function uploadRef(path) {
  const buf = readFileSync(path);
  const type = extname(path) === '.png' ? 'image/png' : 'image/jpeg';
  const form = new FormData();
  form.append('content', new Blob([buf], { type }), 'ref' + extname(path));
  const r = await fetch('https://api.replicate.com/v1/files', { method: 'POST', headers: H, body: form });
  if (!r.ok) throw new Error(`dosya yükleme ${r.status}: ${await r.text()}`);
  return (await r.json()).urls.get;
}

const wanted = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const herbs = RECETE.bitkiler.filter((b) => !wanted.length || wanted.includes(b.herb_id));

const version = await latestVersion();
console.log(`Model: ${MODEL} · sürüm ${version.id}\n`);

let fail = 0;
for (const herb of herbs) {
  const hid = herb.herb_id;
  const gate = precheck[hid] ?? {};
  if (MADDELER.some((m) => gate[m] !== true) || !gate.checked_by) {
    console.log(`✗ ${hid}: PRECHECK kapısı geçilmedi — üretim YAPILMADI (A0 §12.2)`); fail++; continue;
  }
  const ref = refFile(hid);
  if (!ref) { console.log(`✗ ${hid}: referans dosyası yok`); fail++; continue; }

  const atmosfer = herb.atmosfer === 'KISIK' ? RECETE._meta.atmosfer_KISIK : RECETE._meta.atmosfer_ORTA;
  const input = {
    prompt: atmosfer + herb.konu,
    negative_prompt: herb.negatif_ozel + ', ' + RECETE._meta.negatif_kuyruk,
    width: 1024,
    height: 1280,
    num_outputs: 1,
    scheduler: 'KarrasDPM',
    num_inference_steps: RECETE._meta.sabitler.steps,
    guidance_scale: RECETE._meta.sabitler.cfg,
    seed: herb.seed,
    apply_watermark: false,
    controlnet_1: 'edge_canny',
    controlnet_1_image: await uploadRef(ref),
    controlnet_1_conditioning_scale: herb.cond,
  };

  console.log(`→ ${hid}: cond ${herb.cond} · seed ${herb.seed} · ref ${ref.split('\\').pop()}`);
  const create = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: { ...H, 'Content-Type': 'application/json' },
    body: JSON.stringify({ version: version.id, input }),
  });
  if (!create.ok) { console.log(`  ✗ üretim isteği ${create.status}: ${await create.text()}`); fail++; continue; }
  let pred = await create.json();

  while (['starting', 'processing'].includes(pred.status)) {
    await sleep(4000);
    pred = await (await fetch(`https://api.replicate.com/v1/predictions/${pred.id}`, { headers: H })).json();
  }
  if (pred.status !== 'succeeded') {
    console.log(`  ✗ ${pred.status}: ${(pred.error ?? '').toString().slice(0, 300)}`); fail++; continue;
  }

  // Çıktıyı HEMEN indir (Replicate ~1 saatte siler — Batch-1 kaybının ikinci yarısı).
  const outUrl = Array.isArray(pred.output) ? pred.output[0] : pred.output;
  const img = await fetch(outUrl);
  if (!img.ok) { console.log(`  ✗ çıktı indirme ${img.status}`); fail++; continue; }
  const dir = join(STAGING, hid);
  mkdirSync(dir, { recursive: true });
  const raw = join(dir, 'raw-1024x1280.png');
  writeFileSync(raw, Buffer.from(await img.arrayBuffer()));
  writeFileSync(join(dir, 'run.json'), JSON.stringify({
    predictionId: pred.id, model: MODEL, version: version.id,
    createdAt: pred.created_at, metrics: pred.metrics, input,
  }, null, 2));
  console.log(`  ✓ indirildi → ${raw} (${pred.metrics?.predict_time?.toFixed(1)}s)`);
}
console.log(fail ? `\n${fail} bitki BAŞARISIZ/BLOKE.` : '\nTüm üretimler tamam ve staging\'e indirildi.');
process.exit(fail ? 1 : 0);
