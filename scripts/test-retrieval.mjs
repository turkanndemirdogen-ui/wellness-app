// test-retrieval.mjs — İki-mod retrieval + ROL DUVARI + engine + content upsert.
// Çalıştır: npm run test:retrieval   (0005 + 0006 UYGULANMIŞ olmalı)
//
// OpenAI MALİYETİ YOK: sorguyu embed etmek yerine DB'de KAYITLI bir chunk'ın
// embedding'ini sorgu vektörü olarak kullanır (deterministik + bedava).
//
// Kanıtladıkları (rag-base-spec §7 kabul #7 + rol ayrımı):
//   1) anon → match_chunks_user REDDEDİLİR (yalnız authenticated).
//   2) authenticated → match_chunks_user çalışır; source_id DÖNMEZ.
//   3) SIZINTI: agent_only chunk'ın kendi embedding'iyle bile kullanıcı-yolu
//      o chunk'ı DÖNDÜRMEZ (visibility='user' duvarı).
//   4) authenticated → match_chunks_agent REDDEDİLİR.  ← ZORUNLU DUVAR KANITI
//   5) service_role → match_chunks_agent agent_only chunk'ı döndürebilir.
//   6) match_engine_rules ilişkisel eşleştirme doğru.
//   7) upsertDerivedContent idempotent (ikinci yazım çift satır üretmez).

import { createClient } from '@supabase/supabase-js';
import { getConfig } from './lib/env.mjs';
import {
  userClient, serviceClient, matchChunksUser, matchChunksAgent, matchEngineRules,
} from './lib/retrieve.mjs';
import { upsertDerivedContent } from './lib/content-cache.mjs';

let failed = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? '  ✓' : '  ✗ BAŞARISIZ:'} ${msg}`);
  if (!cond) failed++;
};
const isDenied = (error) =>
  !!error && (error.code === '42501' || /permission denied/i.test(error.message || ''));

console.log('\n== Retrieval + rol duvarı testi ==\n');

const { url, anonKey } = getConfig();
const service = serviceClient();       // service_role — sunucu-içi
const anon = userClient();             // anon (giriş yapılmamış)

// --- Hazırlık: birer user ve agent_only chunk'ın embedding'ini çek ---
const { data: uc, error: ucErr } = await service
  .from('vault_chunks').select('chunk_id, embedding')
  .eq('visibility', 'user').eq('app_safe', true).limit(1);
const { data: ac, error: acErr } = await service
  .from('vault_chunks').select('chunk_id, embedding')
  .eq('visibility', 'agent_only').limit(1);
if (ucErr || acErr) { console.error('✗ hazırlık okuması başarısız:', (ucErr || acErr).message); process.exit(1); }
if (!uc?.length || !ac?.length) {
  console.error('✗ user/agent_only chunk bulunamadı — önce npm run push:chunks.'); process.exit(1);
}
const userChunk = uc[0];
const agentChunk = ac[0];
console.log(`Örnek chunk'lar: user=${userChunk.chunk_id} · agent_only=${agentChunk.chunk_id}\n`);

// --- (1) anon → user fonksiyonu REDDEDİLMELİ (yalnız authenticated) ---
{
  const { error } = await anon.rpc('match_chunks_user',
    { query_embedding: userChunk.embedding, match_count: 5 });
  ok(isDenied(error), `anon → match_chunks_user reddedildi (${error?.code || error?.message || 'HATA: izin verildi!'})`);
}

// --- Geçici authenticated kullanıcı oluştur + giriş yap ---
const email = `retrieval-test-${Date.now()}@example.test`;
const password = `Rt-${Date.now()}-Xy9!`;
let userId = null;
try {
  const { data: created, error: cErr } = await service.auth.admin.createUser({
    email, password, email_confirm: true,
  });
  if (cErr) throw new Error(`createUser: ${cErr.message}`);
  userId = created.user.id;

  const authClient = createClient(url, anonKey, { auth: { persistSession: false } });
  const { error: sErr } = await authClient.auth.signInWithPassword({ email, password });
  if (sErr) throw new Error(`signIn: ${sErr.message} (e-posta/şifre girişi kapalı olabilir)`);

  // --- (2) authenticated → user fonksiyonu çalışır; source_id DÖNMEZ ---
  {
    const rows = await matchChunksUser(authClient, userChunk.embedding, 5);
    ok(Array.isArray(rows) && rows.length > 0, `authenticated → match_chunks_user çalışıyor (${rows?.length ?? 0} satır)`);
    ok(rows.length > 0 && !('source_id' in rows[0]), `kullanıcı sonucunda source_id YOK (§7 yazar sızmaz)`);
  }

  // --- (3) SIZINTI TESTİ: agent_only chunk'ın embedding'iyle bile dönmüyor ---
  {
    const rows = await matchChunksUser(authClient, agentChunk.embedding, 10);
    const leaked = rows.some((r) => r.chunk_id === agentChunk.chunk_id);
    ok(!leaked, `SIZINTI YOK: agent_only chunk kullanıcı-yoluna gelmiyor (kendi vektörüyle bile)`);
  }

  // --- (4) authenticated → agent fonksiyonu REDDEDİLMELİ  (ZORUNLU) ---
  {
    const { error } = await authClient.rpc('match_chunks_agent',
      { query_embedding: agentChunk.embedding, match_count: 5 });
    ok(isDenied(error), `authenticated → match_chunks_agent reddedildi (${error?.code || error?.message || 'HATA: izin verildi!'})`);
  }

  // --- (5) service_role → agent fonksiyonu agent_only döndürebilir ---
  {
    const rows = await matchChunksAgent(service, agentChunk.embedding, 10);
    const found = rows.find((r) => r.chunk_id === agentChunk.chunk_id);
    ok(!!found, `service_role → match_chunks_agent agent_only chunk'ı görüyor`);
    ok(!!found && 'source_id' in found, `agent sonucunda source_id VAR (sunucu-içi provenance)`);
  }

  // --- (6) engine eşleştirme (ilişkisel) ---
  {
    const rules = await matchEngineRules(anon, [
      { transit_planet: 'saturn', aspect_quality: 'sert', natal_target: 'gunes' },
      { transit_planet: 'ay', sign_modifier: 'koc' },
      { transit_planet: 'saturn', aspect_quality: 'sert', natal_target: 'yok' }, // eşleşmez
    ]);
    const ids = rules.map((r) => r.rule_id);
    ok(ids.includes('k2_saturn_sert_gunes') && ids.includes('k1a_ay_koc'),
      `match_engine_rules doğru eşleşti (${ids.join(', ')})`);
    ok(!ids.some((id) => id === undefined) && rules.length === 2,
      `eşleşmeyen olay elendi (yanlış-pozitif yok · ${rules.length} kural)`);
  }

  // --- (7) content upsert idempotent → derived_content_cache ---
  {
    const date = '2026-07-10';
    const ct = 'gunun_sozu';
    await upsertDerivedContent(service, { user_id: userId, date, content_type: ct, payload: { v: 1 } });
    await upsertDerivedContent(service, { user_id: userId, date, content_type: ct, payload: { v: 2 } });
    const { data: rows } = await service.from('derived_content_cache')
      .select('payload').eq('user_id', userId).eq('date', date).eq('content_type', ct);
    ok(rows.length === 1, `derived_content_cache idempotent: tek satır (${rows.length})`);
    ok(rows[0]?.payload?.v === 2, `ikinci upsert payload'ı güncelledi (v=${rows[0]?.payload?.v})`);
  }
} finally {
  // --- Temizlik: geçici kullanıcı (cascade derived_content_cache'i temizler) ---
  if (userId) {
    const { error } = await service.auth.admin.deleteUser(userId);
    console.log(error ? `\n⚠ temizlik: kullanıcı silinemedi (${error.message})` : `\n· temizlik: geçici kullanıcı silindi`);
  }
}

console.log(`\n${failed === 0 ? '✅ TÜM TESTLER GEÇTİ' : `❌ ${failed} TEST BAŞARISIZ`}\n`);
process.exit(failed === 0 ? 0 : 1);
