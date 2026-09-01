// refetch-outputs.mjs — run.json'lardaki prediction id'lerden TÜM output öğelerini indirir.
// (İlk indirme output[0] almıştı; edge_canny modunda output[0] canny haritası çıktı.)
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');
const RECETE = JSON.parse(readFileSync(join(HERE, 'batch1-recete.json'), 'utf8'));
const STAGING = join(RECETE._meta.calisma_klasoru.replace(/\//g, '\\'), 'staging');

const env = {};
for (const line of readFileSync(join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m) env[m[1]] = m[2];
}
const H = { Authorization: `Bearer ${env.REPLICATE_API_TOKEN}` };

for (const hid of readdirSync(STAGING)) {
  const runPath = join(STAGING, hid, 'run.json');
  let run;
  try { run = JSON.parse(readFileSync(runPath, 'utf8')); } catch { continue; }
  const r = await fetch(`https://api.replicate.com/v1/predictions/${run.predictionId}`, { headers: H });
  const p = await r.json();
  const outs = Array.isArray(p.output) ? p.output : (p.output ? [p.output] : []);
  console.log(`${hid}: ${outs.length} çıktı öğesi · data_removed=${p.data_removed ?? false}`);
  for (let i = 0; i < outs.length; i++) {
    const img = await fetch(outs[i]);
    if (!img.ok) { console.log(`  ✗ öğe ${i}: ${img.status}`); continue; }
    const f = join(STAGING, hid, `out-${i}.png`);
    writeFileSync(f, Buffer.from(await img.arrayBuffer()));
    console.log(`  ✓ öğe ${i} → out-${i}.png (${((await import('node:fs')).statSync(f).size / 1024).toFixed(0)} KB)`);
  }
  run.outputUrls = outs;
  writeFileSync(runPath, JSON.stringify(run, null, 2));
}
