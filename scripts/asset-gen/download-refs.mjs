// download-refs.mjs — batch1-recete.json'daki PD referans plakalarını Commons'tan
// indirir, extmetadata ile lisansı TEYİT eder ve kalıcı çalışma klasörüne yazar
// (A0 brief §13: Temp'e YAZILMAZ). Her bitki klasörüne license.json bırakılır.
//
// Kullanım: node scripts/asset-gen/download-refs.mjs [herb_id ...]  (boş = tümü)

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const RECETE = JSON.parse(readFileSync(join(HERE, 'batch1-recete.json'), 'utf8'));
const DEST_ROOT = RECETE._meta.calisma_klasoru.replace(/\//g, '\\') + '\\references';
const UA = { 'User-Agent': 'wellness-app-asset-pipeline/1.0 (PD reference fetch)' };

// PD/serbest sayılan lisans kısa adları (extmetadata.LicenseShortName).
const OK_LICENSES = /public domain|pd-|cc0|no restrictions/i;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Commons 429 verirse artan beklemeyle yeniden dener (nazik istemci: istekler arası da beklenir).
async function politeFetch(url) {
  for (let i = 0; i < 9; i++) {
    const res = await fetch(url, { headers: UA });
    if (res.status !== 429) return res;
    const wait = 20_000 * (i + 1);
    console.log(`  · 429 — ${wait / 1000}s bekleniyor...`);
    await sleep(wait);
  }
  throw new Error('429 kalıcı: Commons rate limit');
}

const wanted = process.argv.slice(2);
const herbs = RECETE.bitkiler.filter((b) => !wanted.length || wanted.includes(b.herb_id));

let fail = 0;
for (const herb of herbs) {
  try {
    await downloadOne(herb);
  } catch (e) {
    console.log(`✗ ${herb.herb_id}: ${e.message}`); fail++;
  }
}
console.log(fail ? `\n${fail} HATA — precheck'e geçmeden çöz.` : '\nTüm referanslar indirildi + lisans teyitli.');
process.exit(fail ? 1 : 0);

async function downloadOne(herb) {
  const title = 'File:' + herb.ref.commonsFile;
  const api = new URL('https://commons.wikimedia.org/w/api.php');
  api.search = new URLSearchParams({
    action: 'query', format: 'json', origin: '*', titles: title,
    prop: 'imageinfo', iiprop: 'url|size|sha1|extmetadata',
    iiextmetadatafilter: 'LicenseShortName|License|Artist|Credit|DateTimeOriginal',
  }).toString();

  await sleep(15_000); // istekler arası nezaket aralığı (Commons 429'a agresif)
  const page = Object.values((await (await politeFetch(api)).json()).query?.pages ?? {})[0];
  const ii = page?.imageinfo?.[0];
  if (!ii) throw new Error(`'${title}' Commons'ta bulunamadı`);

  const licShort = ii.extmetadata?.LicenseShortName?.value ?? '';
  if (!OK_LICENSES.test(licShort)) throw new Error(`lisans PD/CC0 değil ('${licShort}') — İNDİRİLMEDİ`);

  const dir = join(DEST_ROOT, herb.herb_id);
  mkdirSync(dir, { recursive: true });
  const ext = extname(new URL(ii.url).pathname) || '.jpg';
  const outFile = join(dir, `ref-plate${ext}`);

  if (!existsSync(outFile)) {
    const img = await politeFetch(ii.url);
    if (!img.ok) throw new Error(`indirme hatası ${img.status}`);
    writeFileSync(outFile, Buffer.from(await img.arrayBuffer()));
  }

  writeFileSync(join(dir, 'license.json'), JSON.stringify({
    herb_id: herb.herb_id,
    scientificName: herb.scientificName,
    commonsTitle: title,
    sourceUrl: ii.url,
    descriptionUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(title)}`,
    width: ii.width, height: ii.height, sha1: ii.sha1,
    license: licShort,
    artist: (ii.extmetadata?.Artist?.value ?? '').replace(/<[^>]+>/g, '').trim(),
    checkedAt: new Date().toISOString().slice(0, 10),
    note: herb.ref.not ?? '',
  }, null, 2));

  const short = Math.min(ii.width, ii.height);
  const warn = short < 700 ? ' ⚠ kısa kenar <700px (A0 §12.3 uyarısı)' : '';
  console.log(`✓ ${herb.herb_id}: ${ii.width}x${ii.height} · ${licShort}${warn}`);
}
