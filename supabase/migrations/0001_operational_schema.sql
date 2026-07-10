-- =====================================================================
-- 0001_operational_schema.sql  ·  Faz 1: operasyonel (per-user) şema
-- Kaynak: rag-base-spec.md §2 + ARCHITECTURE_DECISIONS §6 (D1.1, D1.2)
--
-- NASIL ÇALIŞTIRILIR: Supabase panel > SQL Editor > bu dosyanın tamamını
-- yapıştır > RUN. Yeniden çalıştırılabilir (idempotent): tablolar "if not
-- exists", politikalar "drop ... if exists" ile korunur.
--
-- İLKE: her per-user tablo RLS ile korunur — kullanıcı yalnız kendi satırını
-- görür. birth_data en sıkı (KVKK). Hesap silinince tüm veri cascade temizlenir.
-- =====================================================================

create extension if not exists pgcrypto;   -- gen_random_uuid()

-- ---------------------------------------------------------------------
-- profiles — genel kullanıcı profili (sık okunur)
-- ---------------------------------------------------------------------
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  locale       text not null default 'tr',
  prefs        jsonb not null default '{}'::jsonb,
  created_at   timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- birth_data — doğum verisi (İZOLE, en sıkı RLS, KVKK). D1.2
-- Doğum saati çoğu kullanıcıda bilinmez → birth_time null olabilir,
-- birth_time_known=false ise natal hesap Güneş-burcu fallback ile çalışır.
-- ---------------------------------------------------------------------
create table if not exists public.birth_data (
  user_id          uuid primary key references auth.users (id) on delete cascade,
  birth_date       date,
  birth_time       time,
  birth_time_known boolean not null default false,
  birth_place      jsonb,          -- { lat, lon, tz, label }
  created_at       timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- natal_charts — hesaplanmış natal harita (kullanıcı başına 1, statik)
-- Ham doğum verisine değil hep buna bakılır. (Üretici = Faz 5 astro motoru.)
-- ---------------------------------------------------------------------
create table if not exists public.natal_charts (
  user_id          uuid primary key references auth.users (id) on delete cascade,
  chart            jsonb,          -- gezegen/ev/açı tam yapı
  sun_sign         text,
  moon_sign        text,
  asc_sign         text,
  dominant_element text,
  created_at       timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- astro_context_daily — günlük transit bağlamı (kullanıcı × gün)
-- Üretici = astro servisi (Faz 5). Base'de tablo hazır, boş.
-- ---------------------------------------------------------------------
create table if not exists public.astro_context_daily (
  user_id    uuid not null references auth.users (id) on delete cascade,
  date       date not null,
  context    jsonb,               -- aktif transitler, ay fazı/burcu, temalar
  created_at timestamptz not null default now(),
  primary key (user_id, date)
);

-- ---------------------------------------------------------------------
-- Loglar — modül başına ayrı tablo (D1.1). Modüle özel alanlar +
-- ileri esneklik için payload jsonb. Çekirdek alanlar modules/*.json'dan.
-- ---------------------------------------------------------------------
create table if not exists public.mood_logs (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users (id) on delete cascade,
  created_at    timestamptz not null default now(),
  emotion_id    text,             -- modules/mood.json emotions[].id
  valence       text,             -- pozitif | negatif | nötr
  arousal       text,             -- yüksek | düşük | orta
  factors       jsonb,            -- seçili faktör id'leri (uyku, stres, ...)
  regulation_id text,             -- uygulanan düzenleme stratejisi (pro)
  note          text,
  payload       jsonb not null default '{}'::jsonb
);

create table if not exists public.journal_entries (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users (id) on delete cascade,
  created_at       timestamptz not null default now(),
  mode             text,          -- gratitude | reflective
  prompt           text,
  prompt_category  text,          -- sukran | yansitici | anlam_yapimi | perspektif_kaydirma
  body             text,
  payload          jsonb not null default '{}'::jsonb
);

create table if not exists public.cycle_logs (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  phase      text,                -- ic-mevsim / faz etiketi
  payload    jsonb not null default '{}'::jsonb
);

create table if not exists public.goal_logs (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  goal_key   text,
  status     text,
  payload    jsonb not null default '{}'::jsonb
);

-- ---------------------------------------------------------------------
-- reminder_settings — log değil, ayar (kullanıcı başına 1)
-- ---------------------------------------------------------------------
create table if not exists public.reminder_settings (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  settings   jsonb not null default '{}'::jsonb,   -- su/hareket/uyku/takviye + saatler
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- subscriptions — RevenueCat entitlement (gating buradan okunur)
-- ---------------------------------------------------------------------
create table if not exists public.subscriptions (
  user_id       uuid primary key references auth.users (id) on delete cascade,
  entitlement   text not null default 'free',   -- free | pro
  status        text,
  valid_until   timestamptz,
  revenuecat_id text,
  updated_at    timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- derived_content_cache — pahalı günlük AI çıktısı (günün sözü, denge...)
-- Anahtar: user_id + date + content_type. Strateji Faz 5; base'de boş.
-- ---------------------------------------------------------------------
create table if not exists public.derived_content_cache (
  user_id      uuid not null references auth.users (id) on delete cascade,
  date         date not null,
  content_type text not null,
  payload      jsonb,
  created_at   timestamptz not null default now(),
  primary key (user_id, date, content_type)
);

-- ---------------------------------------------------------------------
-- user_timeline — cross-modül read-only view (D1.1). Fiziksel tablo yok.
-- security_invoker=true → altı tabloların RLS'i view üzerinden de geçerli.
-- ---------------------------------------------------------------------
create or replace view public.user_timeline
  with (security_invoker = true) as
    select user_id, created_at, 'mood'::text    as type, id from public.mood_logs
    union all
    select user_id, created_at, 'journal'::text as type, id from public.journal_entries
    union all
    select user_id, created_at, 'cycle'::text   as type, id from public.cycle_logs
    union all
    select user_id, created_at, 'goal'::text    as type, id from public.goal_logs;

-- =====================================================================
-- RLS — tüm per-user tablolarda. Kullanıcı yalnız kendi satırını görür.
-- =====================================================================
alter table public.profiles              enable row level security;
alter table public.birth_data            enable row level security;
alter table public.natal_charts          enable row level security;
alter table public.astro_context_daily   enable row level security;
alter table public.mood_logs             enable row level security;
alter table public.journal_entries       enable row level security;
alter table public.cycle_logs            enable row level security;
alter table public.goal_logs             enable row level security;
alter table public.reminder_settings     enable row level security;
alter table public.subscriptions         enable row level security;
alter table public.derived_content_cache enable row level security;

-- profiles: satır anahtarı id (= auth.uid())
drop policy if exists profiles_own on public.profiles;
create policy profiles_own on public.profiles
  for all to authenticated
  using (auth.uid() = id) with check (auth.uid() = id);

-- Diğer tüm per-user tablolar: satır anahtarı user_id
-- (Aynı desen; her tablo için tek "for all" politikası yeterli.)
drop policy if exists birth_data_own on public.birth_data;
create policy birth_data_own on public.birth_data
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists natal_charts_own on public.natal_charts;
create policy natal_charts_own on public.natal_charts
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists astro_context_daily_own on public.astro_context_daily;
create policy astro_context_daily_own on public.astro_context_daily
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists mood_logs_own on public.mood_logs;
create policy mood_logs_own on public.mood_logs
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists journal_entries_own on public.journal_entries;
create policy journal_entries_own on public.journal_entries
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists cycle_logs_own on public.cycle_logs;
create policy cycle_logs_own on public.cycle_logs
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists goal_logs_own on public.goal_logs;
create policy goal_logs_own on public.goal_logs
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists reminder_settings_own on public.reminder_settings;
create policy reminder_settings_own on public.reminder_settings
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists subscriptions_own on public.subscriptions;
create policy subscriptions_own on public.subscriptions
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists derived_content_cache_own on public.derived_content_cache;
create policy derived_content_cache_own on public.derived_content_cache
  for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Yetkiler: yalnız authenticated (giriş yapmış kullanıcı) erişir; anon erişemez.
grant select, insert, update, delete on
  public.profiles, public.birth_data, public.natal_charts,
  public.astro_context_daily, public.mood_logs, public.journal_entries,
  public.cycle_logs, public.goal_logs, public.reminder_settings,
  public.subscriptions, public.derived_content_cache
  to authenticated;

grant select on public.user_timeline to authenticated;
