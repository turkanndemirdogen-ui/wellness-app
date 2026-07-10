// test-visibility.mjs — Görünürlük duvarının FAIL-CLOSED testi (DB'siz, hemen çalışır).
// Çalıştır: npm run test:visibility
//
// Kanıtladıkları:
//  1) manifest'teki agent_only kaynaklar kullanıcı-yolundan DIŞLANIR (sızmaz).
//  2) visibility eksik/boş/bozuk → agent_only'e düşer (kullanıcıya görünmez).
//  3) Yalnız tam olarak 'user' olan kaynaklar kullanıcıya geçer.

import { loadSources } from './lib/content-io.mjs';
import { normalizeVisibility, filterUserVisible, isUserVisible } from './lib/visibility.mjs';

let failed = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? '  ✓' : '  ✗ BAŞARISIZ:'} ${msg}`);
  if (!cond) failed++;
};

console.log('\n== Görünürlük duvarı testi ==\n');

// --- Gerçek manifest üzerinden ---
const sources = loadSources();
const rawAgentOnly = sources.filter((s) => s.visibility === 'agent_only');
const userVisible = filterUserVisible(sources);

console.log(`Manifest: ${sources.length} kaynak · ham agent_only: ${rawAgentOnly.length}`);
console.log(`Kullanıcı-yolu sonucu: ${userVisible.length} kaynak\n`);

ok(sources.length > 0, `manifest yüklendi (${sources.length} kaynak)`);
ok(rawAgentOnly.length >= 1, `manifest'te en az bir agent_only kaynak var (${rawAgentOnly.length})`);

// (1) Hiçbir agent_only kaynak kullanıcı sonucunda olmamalı.
const leaked = userVisible.filter((s) => s.visibility === 'agent_only');
ok(leaked.length === 0,
  `agent_only kaynaklar kullanıcı-yoluna SIZMIYOR (sızan: ${leaked.length})`);

// (1b) Kullanıcı sonucundaki her kaynak gerçekten 'user' olmalı.
const nonUserInResult = userVisible.filter((s) => s.visibility !== 'user');
ok(nonUserInResult.length === 0,
  `kullanıcı sonucundaki her kaynak visibility='user' (aykırı: ${nonUserInResult.length})`);

// --- (2) FAIL-CLOSED sentetik testler ---
const badValues = [
  ['visibility yok (undefined)', {}],
  ['visibility: null', { visibility: null }],
  ['visibility: ""', { visibility: '' }],
  ['visibility: "User" (yanlış kutu)', { visibility: 'User' }],
  ['visibility: "public" (bilinmeyen)', { visibility: 'public' }],
  ['visibility: 1 (sayı)', { visibility: 1 }],
];
for (const [label, src] of badValues) {
  ok(normalizeVisibility(src.visibility) === 'agent_only' && !isUserVisible(src),
    `FAIL-CLOSED — ${label} → agent_only (kullanıcıya görünmez)`);
}

// (3) Geçerli 'user' geçer, 'excluded' geçmez.
ok(isUserVisible({ visibility: 'user' }), `visibility='user' kullanıcıya görünür`);
ok(!isUserVisible({ visibility: 'excluded' }), `visibility='excluded' kullanıcıya görünmez`);

console.log(`\n${failed === 0 ? '✅ TÜM TESTLER GEÇTİ' : `❌ ${failed} TEST BAŞARISIZ`}\n`);
process.exit(failed === 0 ? 0 : 1);
