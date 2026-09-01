// search-refs.mjs — Commons'ta PD referans plakası ADAYLARINI listeler.
// Kullanım: node scripts/asset-gen/search-refs.mjs "Foeniculum vulgare Köhler"
// Aday seçimi İNSAN/model gözüyle yapılır; seçilen dosya adı batch1-recete.json'a
// yazılır ve download-refs.mjs ile indirilir. (A0 brief §12.3: yüksek çözünürlüklü
// varyant — ör. "- 001x.jpg" — tercih edilir.)

const q = process.argv.slice(2).join(' ');
if (!q) {
  console.error('Kullanım: node search-refs.mjs "<arama terimi>"');
  process.exit(1);
}

const api = new URL('https://commons.wikimedia.org/w/api.php');
api.search = new URLSearchParams({
  action: 'query', format: 'json', origin: '*',
  list: 'search', srsearch: q, srnamespace: '6', srlimit: '12',
}).toString();

const res = await fetch(api, { headers: { 'User-Agent': 'wellness-app-asset-pipeline/1.0' } });
const data = await res.json();
const titles = (data.query?.search ?? []).map((s) => s.title);
if (!titles.length) { console.log('Sonuç yok.'); process.exit(0); }

// Boyut + lisans bilgisi (extmetadata) topluca çekilir.
const info = new URL('https://commons.wikimedia.org/w/api.php');
info.search = new URLSearchParams({
  action: 'query', format: 'json', origin: '*',
  titles: titles.join('|'), prop: 'imageinfo',
  iiprop: 'size|extmetadata', iiextmetadatafilter: 'LicenseShortName|Artist|DateTimeOriginal',
}).toString();
const infoRes = await fetch(info, { headers: { 'User-Agent': 'wellness-app-asset-pipeline/1.0' } });
const infoData = await infoRes.json();

for (const page of Object.values(infoData.query?.pages ?? {})) {
  const ii = page.imageinfo?.[0];
  if (!ii) continue;
  const lic = ii.extmetadata?.LicenseShortName?.value ?? '?';
  console.log(`${page.title}\n    ${ii.width}x${ii.height} · lisans: ${lic}`);
}
