// env.mjs — .env okuma + Supabase URL normalize/doğrulama (ortak yardımcı).
//
// push-chunks.mjs, test-retrieval.mjs vb. hepsi buradan okur. URL normalize:
// trim + çevreleyen tırnak + sondaki slash(ler) kırpılır, sonra biçim doğrulanır.
// (Bozuk URL → Kong "Invalid path specified in request URL" der; burada erken,
//  NET bir hatayla dururuz — harici dotenv bağımlılığı yok.)

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// scripts/lib → repo kökü iki üst dizin.
export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

export function readEnv() {
  const env = {};
  try {
    for (const line of readFileSync(join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2];
    }
  } catch {
    throw new Error('.env okunamadı (repo kökünde .env olmalı).');
  }
  return env;
}

export function normalizeUrl(raw) {
  const url = (raw || '')
    .trim()
    .replace(/^["']|["']$/g, '')
    .replace(/\/+$/, '');
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(url)) {
    throw new Error(
      `SUPABASE_URL biçimi hatalı: "${url}" — beklenen: https://<ref>.supabase.co (sonda / veya boşluk olmadan)`,
    );
  }
  return url;
}

/** .env'den url + anahtarları normalize edip döndürür. */
export function getConfig() {
  const env = readEnv();
  return {
    url: normalizeUrl(env.SUPABASE_URL || env.EXPO_PUBLIC_SUPABASE_URL),
    anonKey: env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    serviceKey: env.SUPABASE_SERVICE_ROLE_KEY,
  };
}
