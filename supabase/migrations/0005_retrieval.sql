-- =====================================================================
-- 0005_retrieval.sql  ·  Adım 4: iki-mod retrieval + rol duvarı + engine eşleştirme
-- Kaynak: rag-base-spec.md §5 (retrieval), §7 (görünürlük duvarı, defense-in-depth)
--
-- Bu migration ÜÇ fonksiyon kurar + engine_rules'ta zorunlu nullable düzeltmesi:
--   1) match_chunks_user  — kullanıcı-yolu vektör arama (SABİT visibility='user').
--   2) match_chunks_agent — sunucu-içi (service_role) vektör arama (user + agent_only).
--   3) match_engine_rules — ilişkisel (RAG-DIŞI) transit→kural eşleştirme.
--
-- *** ROL DUVARI (Kat 1, yapısal) ***
-- match_chunks_user  → yalnız `authenticated` EXECUTE alır (anon bile çağıramaz).
-- match_chunks_agent → PUBLIC/anon/authenticated'tan REVOKE; yalnız `service_role`.
-- Böylece kullanıcı isteğiyle çalışan hiçbir istemci agent_only içeriğe erişemez.
-- (Kat 2 = Claude API guardrail, bu base'in dışında.)
-- =====================================================================

-- ---------------------------------------------------------------------
-- ZORUNLU ŞEMA DÜZELTMESİ — engine_rules
-- Katman-1a kuralları (Ay'ın burcu) yalnız sign_modifier ile tetiklenir;
-- aspect_quality / natal_target NULL olur. 0002'deki NOT NULL bu satırları
-- engeller → gevşetiyoruz. (transit_planet hâlâ NOT NULL: her kuralda var.)
-- ---------------------------------------------------------------------
alter table public.engine_rules alter column aspect_quality drop not null;
alter table public.engine_rules alter column natal_target  drop not null;

-- ---------------------------------------------------------------------
-- 1) match_chunks_user — KULLANICI MODU (Keşif + kullanıcıya dönen yanıt)
-- Gövdede SABİT visibility='user' filtresi + app_safe + app_disi kesme.
-- source_id / source_chunk_refs DÖNMEZ (§7: yazar/kaynak kullanıcıya sızmaz).
-- SECURITY INVOKER → çağıranın RLS'i de geçerli (vault_chunks_user_visible) =
-- çift bariyer: gövde filtresi + RLS aynı sonucu verir.
-- ---------------------------------------------------------------------
create or replace function public.match_chunks_user(
  query_embedding vector(1536),
  match_count     int
)
returns table (
  chunk_id   text,
  bolum      text,
  text       text,
  tema       jsonb,
  guven_tier text,
  similarity float
)
language sql
stable
security invoker
set search_path = public, pg_temp
as $$
  select
    c.chunk_id,
    c.bolum,
    c.text,
    c.tema,
    c.guven_tier,
    1 - (c.embedding <=> query_embedding) as similarity
  from public.vault_chunks c
  where c.visibility = 'user'          -- ← SABİT gömülü filtre (duvar)
    and c.app_safe = true
    and c.guven_tier <> 'app_disi'
  order by c.embedding <=> query_embedding
  limit match_count;
$$;

-- ---------------------------------------------------------------------
-- 2) match_chunks_agent — AGENT MODU (sunucu-içi içerik üretim pipeline'ı)
-- user + agent_only döner; source_id dahil (sunucu-içi provenance).
-- SECURITY INVOKER + yalnız service_role EXECUTE → service_role RLS'i
-- baypasladığı için agent_only satırları görür; başka rol çağıramaz.
-- KULLANICI İSTEĞİNE ASLA BAĞLANMAZ (yalnız cron/edge, service_role anahtarı).
-- ---------------------------------------------------------------------
create or replace function public.match_chunks_agent(
  query_embedding vector(1536),
  match_count     int
)
returns table (
  chunk_id   text,
  source_id  text,
  bolum      text,
  text       text,
  tema       jsonb,
  guven_tier text,
  visibility text,
  similarity float
)
language sql
stable
security invoker
set search_path = public, pg_temp
as $$
  select
    c.chunk_id,
    c.source_id,
    c.bolum,
    c.text,
    c.tema,
    c.guven_tier,
    c.visibility,
    1 - (c.embedding <=> query_embedding) as similarity
  from public.vault_chunks c
  where c.visibility in ('user', 'agent_only')
    and c.app_safe = true
  order by c.embedding <=> query_embedding
  limit match_count;
$$;

-- ---------------------------------------------------------------------
-- 3) match_engine_rules — İLİŞKİSEL transit→kural eşleştirme (RAG DEĞİL)
-- Girdi: güncel transit olayları (astro motoru Faz 5 üretir; base'de parametre).
--   p_events = [{transit_planet, aspect_quality?, natal_target?,
--                sign_modifier?, house_modifier?}, ...]
-- Çıktı: eşleşen engine_rules satırları, priority'ye göre (yüksek önce).
-- IS NOT DISTINCT FROM → null=null da eşleşir (katman-1a: aspect/target null).
-- ---------------------------------------------------------------------
create or replace function public.match_engine_rules(p_events jsonb)
returns setof public.engine_rules
language sql
stable
set search_path = public, pg_temp
as $$
  select r.*
  from public.engine_rules r
  join lateral jsonb_array_elements(p_events) e on true
  where r.transit_planet =                    (e ->> 'transit_planet')
    and r.aspect_quality is not distinct from (e ->> 'aspect_quality')
    and r.natal_target   is not distinct from (e ->> 'natal_target')
    and r.sign_modifier  is not distinct from (e ->> 'sign_modifier')
    and r.house_modifier is not distinct from (e ->> 'house_modifier')
  order by r.priority desc;
$$;

-- =====================================================================
-- GRANT / REVOKE — ROL DUVARI (Kat 1)
-- Postgres yeni fonksiyona varsayılan PUBLIC EXECUTE verir → önce revoke.
-- =====================================================================

-- match_chunks_user: yalnız authenticated (anon dahil kimse değil)
revoke all on function public.match_chunks_user(vector, int) from public, anon;
grant execute on function public.match_chunks_user(vector, int) to authenticated;

-- match_chunks_agent: herkesten al, yalnız service_role'e ver
revoke all on function public.match_chunks_agent(vector, int) from public, anon, authenticated;
grant execute on function public.match_chunks_agent(vector, int) to service_role;

-- match_engine_rules: metin güvenli (source_chunk_refs kolon-içi, fonksiyon
-- setof engine_rules döndürür ama kullanıcı-yolu yalnız user_text kullanır);
-- okuma herkese açık (engine_rules_read RLS zaten böyle).
grant execute on function public.match_engine_rules(jsonb) to anon, authenticated, service_role;
