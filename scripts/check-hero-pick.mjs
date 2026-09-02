// check-hero-pick.mjs — Ana Sayfa hero'sunda BUGÜN hangi bitki görünüyor ve
// görseli gerçekten yükleniyor mu?
//
// Çalıştır: npm run db:check:hero  [--date=YYYY-MM-DD] [--days=N]
//
// Neden: hero'da yer tutucu görülüyorsa sorun katmanlarda değil VERİDEDİR —
// ya günün seçimi görseli olmayan 26 bitkiden birine düşmüştür ya da URL
// erişilemiyordur. Bu script ekrandaki seçimi birebir yeniden üretir
// (mobile/src/lib/home.ts pickDailyHerb ile aynı: app_safe + uyarı çipsiz
// havuz, herb_id'ye göre sıralı, FNV-1a gün karması) ve görseli anon olarak
// indirmeyi dener.

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BUCKET = 'botanicals';

function readEnv() {
  const env = {};
  try {
    for (const line of readFileSync(join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2];
    }
  } catch {
    console.error('.env okunamadi (repo kokunde .env olmali).');
    process.exit(1);
  }
  return env;
}

/** mobile/src/lib/home.ts ile BİREBİR aynı gün anahtarı. */
function todayKey(d = new Date()) {
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

/** mobile/src/lib/home.ts ile BİREBİR aynı FNV-1a. */
function hashDateKey(key) {
  let h = 0x811c9dc5;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** mobile/src/lib/home.ts pickDailyHerb ile BİREBİR aynı havuz + seçim. */
function pickDailyHerb(herbs, dateKey) {
  const pool = herbs
    .filter((h) => h.app_safe === true && !h.data?.guvenlik?.uyari_chip)
    .sort((a, b) => a.herb_id.localeCompare(b.herb_id));
  if (pool.length === 0) return { herb: null, pool };
  return { herb: pool[hashDateKey(dateKey) % pool.length], pool };
}

const env = readEnv();
const url = env.EXPO_PUBLIC_SUPABASE_URL;
const key = env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error('EXPO_PUBLIC_SUPABASE_URL / _ANON_KEY .env icinde yok.');
  process.exit(1);
}

const arg = (name) => {
  const found = process.argv.find((a) => a.startsWith(`--${name}=`));
  return found ? found.split('=')[1] : null;
};

const supabase = createClient(url, key, { auth: { persistSession: false } });

const { data, error } = await supabase
  .from('herbs')
  .select('herb_id,name_tr,app_safe,image_path,image_version,data')
  .order('name_tr', { ascending: true });

if (error) {
  console.error('herbs okunamadi:', error.message);
  process.exit(1);
}

const herbs = data ?? [];
const startDate = arg('date') ? new Date(`${arg('date')}T12:00:00`) : new Date();
const days = Number(arg('days') ?? 1);

console.log('\n== Ana Sayfa hero secimi (canli veri, anon key) ==\n');
console.log(`  havuz: ${herbs.length} bitki okundu`);

const { pool } = pickDailyHerb(herbs, todayKey(startDate));
const withImage = pool.filter((h) => h.image_path);
console.log(`  gunun karti havuzu (app_safe + uyari cipsiz): ${pool.length}`);
console.log(`  bunlardan gorseli olan: ${withImage.length}`);
console.log(
  `  gorselli cikma olasiligi: %${((withImage.length / pool.length) * 100).toFixed(0)}\n`,
);

let fail = 0;
for (let i = 0; i < days; i++) {
  const d = new Date(startDate);
  d.setDate(d.getDate() + i);
  const dateKey = todayKey(d);
  const { herb } = pickDailyHerb(herbs, dateKey);
  if (!herb) {
    console.log(`  ${dateKey}  SECIM YOK (havuz bos)`);
    fail++;
    continue;
  }
  if (!herb.image_path || !herb.image_version) {
    console.log(
      `  ${dateKey}  ${(herb.name_tr ?? herb.herb_id).padEnd(16)} GORSEL YOK -> ekranda YER TUTUCU`,
    );
    fail++;
    continue;
  }
  const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(herb.image_path);
  const publicUrl = `${pub.publicUrl}?v=${herb.image_version}`;
  let status = 'ERISILEMEDI';
  let bytes = 0;
  try {
    const res = await fetch(publicUrl);
    status = `HTTP ${res.status}`;
    if (res.ok) {
      bytes = (await res.arrayBuffer()).byteLength;
    } else {
      fail++;
    }
  } catch (e) {
    fail++;
    status = `HATA ${e.message}`;
  }
  console.log(
    `  ${dateKey}  ${(herb.name_tr ?? herb.herb_id).padEnd(16)} ${herb.image_path.padEnd(28)} ${status}${
      bytes ? ` ${(bytes / 1024).toFixed(0)} KB` : ''
    }`,
  );
}

if (fail > 0) {
  console.log(`\n[DIKKAT] ${fail} gunde hero gorseli gosterilemiyor (yer tutucu).`);
  process.exit(1);
}
console.log('\n[OK] Secilen gunlerde hero gorseli gercekten yukleniyor.');
