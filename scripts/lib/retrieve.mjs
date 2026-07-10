// retrieve.mjs — RAG retrieval BASE fonksiyonları (rag-base-spec §5).
//
// İki-mod retrieval + engine eşleştirme, DB fonksiyonlarının (0005) üstünde ince
// bir sarmalayıcı. GÖRÜNÜRLÜK DUVARI istemci seçiminde görünür:
//   • Kullanıcı-yolu → userClient() (anon/authenticated anahtarı) → match_chunks_user.
//   • Agent-yolu     → serviceClient() (service_role) → match_chunks_agent.
// Yanlış istemci verilse bile DB tarafı (GRANT + gövde filtresi) reddeder.
//
// KVKK: retrieveUser/retrieveAgent sorguyu embed etmek için OpenAI'a gönderir
// (embed.mjs'te işaretli). matchChunks* ise HAZIR bir vektör alır (test/sunucu-içi
// tekrar-kullanım için embed etmeden çağrılabilir).

import { createClient } from '@supabase/supabase-js';
import { embed } from './embed.mjs';
import { getConfig } from './env.mjs';

// pgvector param'ı: DB'den gelen "[...]" string'i olduğu gibi geçer; dizi ise
// JSON'a çevirir (ikisi de pgvector metin girişi olarak geçerli).
const asVec = (e) => (typeof e === 'string' ? e : JSON.stringify(e));

// --- İstemci fabrikaları ---
export function userClient() {
  const { url, anonKey } = getConfig();
  if (!anonKey) throw new Error('EXPO_PUBLIC_SUPABASE_ANON_KEY yok.');
  return createClient(url, anonKey, { auth: { persistSession: false } });
}

export function serviceClient() {
  const { url, serviceKey } = getConfig();
  if (!serviceKey) throw new Error('SUPABASE_SERVICE_ROLE_KEY yok (yalnız sunucu tarafı).');
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}

// --- Vektör arama (hazır embedding ile) ---
export async function matchChunksUser(client, embedding, matchCount = 8) {
  const { data, error } = await client.rpc('match_chunks_user', {
    query_embedding: asVec(embedding),
    match_count: matchCount,
  });
  if (error) throw new Error(`match_chunks_user: ${error.message}`);
  return data;
}

export async function matchChunksAgent(client, embedding, matchCount = 8) {
  const { data, error } = await client.rpc('match_chunks_agent', {
    query_embedding: asVec(embedding),
    match_count: matchCount,
  });
  if (error) throw new Error(`match_chunks_agent: ${error.message}`);
  return data;
}

// --- Uçtan uca retrieval (sorgu metni → embed → arama) ---
// KVKK: query burada 3. tarafa (OpenAI) gider.
export async function retrieveUser(client, query, matchCount = 8) {
  const [vec] = await embed([query]);
  return matchChunksUser(client, vec, matchCount);
}

export async function retrieveAgent(client, query, matchCount = 8) {
  const [vec] = await embed([query]);
  return matchChunksAgent(client, vec, matchCount);
}

// --- Engine eşleştirme (ilişkisel, RAG-DIŞI) ---
// events: [{transit_planet, aspect_quality?, natal_target?, sign_modifier?, house_modifier?}, ...]
export async function matchEngineRules(client, events) {
  if (!Array.isArray(events)) throw new Error('matchEngineRules(events): dizi bekleniyor.');
  const { data, error } = await client.rpc('match_engine_rules', { p_events: events });
  if (error) throw new Error(`match_engine_rules: ${error.message}`);
  return data;
}
