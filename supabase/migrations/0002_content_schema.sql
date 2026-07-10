-- =====================================================================
-- 0002_content_schema.sql  ·  Faz 2: içerik / RAG (paylaşılan bilgi)
-- Kaynak: rag-base-spec.md §3, §5, §7 + ARCHITECTURE_DECISIONS (D2.4 görünürlük)
--
-- Bu şema per-user DEĞİL — herkese ait paylaşılan içerik. İki grup:
--   (a) UI içeriği: herbs, quizzes   → herkese açık okuma (anon key ile).
--   (b) RAG çekirdeği: vault_sources, vault_chunks, engine_rules.
--
-- *** GÖRÜNÜRLÜK DUVARI (kritik, D2.4) ***
-- vault_sources / vault_chunks.visibility ∈ (user | agent_only | excluded).
-- FAIL-CLOSED: sütun "not null default 'agent_only'" — visibility atanmamış
-- her satır otomatik agent_only olur (kullanıcıya GÖRÜNMEZ). Kullanıcı-yolu
-- RLS politikası yalnız visibility='user' döndürür; agent_only/excluded asla
-- anon/authenticated'a sızmaz. agent_only içerik yalnız sunucu tarafı
-- (service_role) + guardrail arkasında agent iç-içgörüsüne girer.
-- =====================================================================

create extension if not exists vector;   -- pgvector (embedding, Faz 3)

-- ---------------------------------------------------------------------
-- vault_sources — 46 kaynağın kayıt-düzeyi metası + GÖRÜNÜRLÜK.
-- (Chunk metni Faz 3'te vault_chunks'a; bu tablo kaynak-düzeyi duvar.)
-- ---------------------------------------------------------------------
create table if not exists public.vault_sources (
  source_id     text primary key,
  dosya         text,
  baslik        text,
  tema          jsonb,
  guven_tier    text,             -- dogrulanmis_cekirdek|tekil_gelenek|anlati_only|app_disi
  riskli_madde  jsonb,
  visibility    text not null default 'agent_only'        -- ← FAIL-CLOSED varsayılan
                  check (visibility in ('user','agent_only','excluded')),
  updated_at    timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- vault_chunks — RAG çekirdeği (embedding Faz 3'te dolar; base'de boş).
-- visibility aynı fail-closed varsayılanla; app_safe toksik/app_disi filtresi.
-- ---------------------------------------------------------------------
create table if not exists public.vault_chunks (
  chunk_id      text primary key,
  source_id     text references public.vault_sources (source_id) on delete cascade,
  bolum         text,
  text          text,
  embedding     vector(1536),     -- OpenAI text-embedding-3-large @1536 (Faz 3)
  guven_tier    text,
  tema          jsonb,
  planet_keys   jsonb,
  sign_keys     jsonb,
  riskli_madde  boolean not null default false,
  app_safe      boolean not null default true,
  visibility    text not null default 'agent_only'        -- ← FAIL-CLOSED varsayılan
                  check (visibility in ('user','agent_only','excluded')),
  meta          jsonb,
  updated_at    timestamptz not null default now()
);

-- HNSW / kosinüs index (korpus küçük; boş tabloda da güvenli). rag-base-spec §6.
create index if not exists vault_chunks_embedding_hnsw
  on public.vault_chunks using hnsw (embedding vector_cosine_ops);

-- ---------------------------------------------------------------------
-- engine_rules — gökyüzü metin motoru (Keşif). Tetik anahtarı D2.3.
-- source_chunk_refs = vault_chunks'a köprü/provenance (D2.1). Base'de boş/örnek.
-- ---------------------------------------------------------------------
create table if not exists public.engine_rules (
  rule_id            text primary key,
  transit_planet     text not null,
  aspect_quality     text not null,        -- sert | yumusak
  natal_target       text not null,
  sign_modifier      text,                 -- nullable
  house_modifier     text,                 -- nullable
  theme_internal     text,
  user_text_variants jsonb,                -- K4-2: kural başına 2-3 varyant
  body_zone          text,
  herb_motif         text,
  evidence_label     text,
  priority           integer not null default 0,
  source_chunk_refs  jsonb,                -- uuid/chunk_id listesi → vault_chunks
  updated_at         timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- herbs — 37 bitki (motor tablo + kart metni birleşik). UI içeriği (public read).
-- Listeleme/filtre için birkaç skaler sütun + tam nesne `data` jsonb'de.
-- ---------------------------------------------------------------------
create table if not exists public.herbs (
  herb_id          text primary key,
  name_tr          text,
  gezegen_birincil text,
  app_safe         boolean not null default true,
  guven_tier       text,                  -- null | T2_INTERACTION | T3_CAUTION ...
  data             jsonb not null,        -- tam birleşik nesne (motor + kart)
  updated_at       timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- quizzes — 12 aylık quiz. UI içeriği (public read).
-- ---------------------------------------------------------------------
create table if not exists public.quizzes (
  quiz_id    text primary key,
  ay         integer,
  title      text,
  data       jsonb not null,             -- tam quiz (arketipler + sorular ...)
  updated_at timestamptz not null default now()
);

-- =====================================================================
-- RLS + yetkiler
-- =====================================================================
alter table public.vault_sources enable row level security;
alter table public.vault_chunks  enable row level security;
alter table public.engine_rules  enable row level security;
alter table public.herbs         enable row level security;
alter table public.quizzes       enable row level security;

-- --- GÖRÜNÜRLÜK DUVARI: kullanıcı-yolu yalnız visibility='user' görür ---
drop policy if exists vault_sources_user_visible on public.vault_sources;
create policy vault_sources_user_visible on public.vault_sources
  for select to anon, authenticated
  using (visibility = 'user');                       -- agent_only/excluded sızmaz

drop policy if exists vault_chunks_user_visible on public.vault_chunks;
create policy vault_chunks_user_visible on public.vault_chunks
  for select to anon, authenticated
  using (visibility = 'user' and app_safe = true);   -- teşhis/toksik sızmaz

-- engine_rules: kullanıcı metni güvenli (source_chunk_refs sunucu-içi provenance).
drop policy if exists engine_rules_read on public.engine_rules;
create policy engine_rules_read on public.engine_rules
  for select to anon, authenticated using (true);

-- herbs / quizzes: herkese açık okuma (paylaşılan UI içeriği).
drop policy if exists herbs_read on public.herbs;
create policy herbs_read on public.herbs
  for select to anon, authenticated using (true);

drop policy if exists quizzes_read on public.quizzes;
create policy quizzes_read on public.quizzes
  for select to anon, authenticated using (true);

-- Yetkiler: yalnız SELECT. Yazma yok (içerik service_role/panel ile yüklenir).
-- vault_sources/chunks'ta SELECT verilir AMA RLS agent_only/excluded'ı keser →
-- iki bariyer (grant + RLS). Yazma yetkisi anon/authenticated'a HİÇ verilmez.
grant select on
  public.vault_sources, public.vault_chunks, public.engine_rules,
  public.herbs, public.quizzes
  to anon, authenticated;
