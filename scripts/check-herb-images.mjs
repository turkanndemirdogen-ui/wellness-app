// check-herb-images.mjs — Aşama-2 adım 5: bitki görselleri CANLI doğrulaması (anon key, kullanıcı gözünden).
// Çalıştır: npm run db:check:images   (önce 0007 migration + bucket yükleme + UPDATE SQL panelde yapılmış olmalı)
//
// Kanıtladıkları:
//  · herbs.image_path / image_version dolu satır sayısı beklenenle eşit (varsayılan 11; --expect=N ile değiştir).
//  · Her yol 10 §10 kuralına uygun (<herb_id>/card-01.webp) ve image_version >= 1.
//  · Her görsel `botanicals` public bucket'ından anon olarak indirilebiliyor (HTTP 200, image/webp, <=220 KB).
//  · Beklenen dolu olmayan bitkiler (ör. zencefil yer tutucu) NULL.

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BUCKET = 'botanicals';
const BUDGET = 220 * 1024;

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
const expectArg = process.argv.find((a) => a.startsWith('--expect='));
const EXPECT = expectArg ? parseInt(expectArg.split('=')[1], 10) : 11;

const supabase = createClient(url, key, { auth: { persistSession: false } });
let fail = 0;
const ok = (c, msg) => { console.log(`  ${c ? '✓' : '✗'} ${msg}`); if (!c) fail++; };

console.log('\n== Bitki görselleri canlı doğrulaması (anon key) ==\n');
const { data, error } = await supabase.from('herbs').select('herb_id, image_path, image_version').order('herb_id');
if (error) { console.error('✗ herbs okunamadı:', error.message); process.exit(1); }

const withImg = data.filter((r) => r.image_path);
ok(withImg.length === EXPECT, `image_path dolu satır = ${withImg.length} (beklenen ${EXPECT})`);
const nulls = data.filter((r) => !r.image_path).map((r) => r.herb_id);
console.log(`  · image_path NULL olan ${nulls.length} bitki${nulls.length <= 30 ? ': ' + nulls.join(', ') : ''}`);

for (const r of withImg) {
  const pathOk = r.image_path === `${r.herb_id}/card-01.webp`;
  const verOk = Number.isInteger(r.image_version) && r.image_version >= 1;
  const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(r.image_path);
  const u = `${pub.publicUrl}?v=${r.image_version}`;
  let http = 0, type = '', size = 0;
  try {
    const res = await fetch(u);
    http = res.status; type = res.headers.get('content-type') ?? '';
    if (res.ok) size = (await res.arrayBuffer()).byteLength;
  } catch (e) { type = String(e.message); }
  const fetchOk = http === 200 && type.startsWith('image/webp') && size > 0 && size <= BUDGET;
  ok(pathOk && verOk && fetchOk, `${r.herb_id.padEnd(14)} ${r.image_path} v${r.image_version} → HTTP ${http} ${type} ${(size / 1024).toFixed(0)} KB`);
}

console.log(fail ? `\n❌ ${fail} sorun.` : '\n✅ GÖRSEL DOĞRULAMA GEÇTİ');
process.exit(fail ? 1 : 0);
