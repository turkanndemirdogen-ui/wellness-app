-- =====================================================================
-- 0007_herb_images.sql  ·  Bitki kartı görsel referansı (kalıcı ürün alanı)
-- Kaynak: 10_ASSET_PIPELINE_AND_NAMING §10 (Storage) + A0 brief (Batch-1)
--
-- Neden JSONB değil GERÇEK SÜTUN (ürün sahibi kararı, 2026-07-31):
--   Görsel yolu kalıcı bir ürün alanıdır; 37 bitki + gelecekteki varyantlar
--   (thumbnail / leaf-detail / hero) bu alan üzerinden sorgulanacak. JSONB
--   içinde tutmak tip güvencesini ve sorgulanabilirliği kaybettirir
--   ("görseli olmayan bitkiler" gibi sorgular indekslenemez).
--
-- Kanon kuralı (10 §10): TAM URL YAZILMAZ. Yalnız bucket-içi yol + sürüm
-- tutulur; public URL'i istemci Storage SDK'sıyla üretir. Cache anahtarı
-- image_version içerir → yeni sürüm yüklenince istemci cache'i doğal geçer.
--
-- Idempotent: add column if not exists / drop-create constraint.
-- Ön koşul: 0002_content_schema.sql çalıştırılmış olmalı.
-- =====================================================================

-- ---------------------------------------------------------------------
-- Sütunlar
-- ---------------------------------------------------------------------
alter table public.herbs
  add column if not exists image_path    text,
  add column if not exists image_version integer;

comment on column public.herbs.image_path is
  'botanicals bucket icindeki yol, or. "papatya/card-01.webp". TAM URL DEGIL (10 §10). null = gorsel yok, istemci placeholder gosterir (10 §11).';
comment on column public.herbs.image_version is
  'Gorsel surumu; cache anahtarina girer. Yeni dosya yuklenince artirilir (card-02.webp -> 2).';

-- ---------------------------------------------------------------------
-- Bütünlük kuralları
-- ---------------------------------------------------------------------

-- İkisi birlikte dolu ya da birlikte boş olmalı (yarım kayıt = istemcide
-- bozuk görsel). Ayrıca sürüm pozitif olmalı.
alter table public.herbs drop constraint if exists herbs_image_pair_ck;
alter table public.herbs add constraint herbs_image_pair_ck check (
  (image_path is null and image_version is null)
  or (image_path is not null and image_version is not null and image_version > 0)
);

-- Yol biçimi: "<herb_id>/<dosya>.webp" — bucket adı YOL İÇİNDE OLMAZ,
-- baştaki "/" olmaz, uzantı webp'dir (10 §5 production raster).
alter table public.herbs drop constraint if exists herbs_image_path_shape_ck;
alter table public.herbs add constraint herbs_image_path_shape_ck check (
  image_path is null
  or image_path ~ '^[a-z0-9_]+/[a-z0-9_-]+\.webp$'
);

-- ---------------------------------------------------------------------
-- İndeks — "görseli olan / olmayan bitkiler" sorgusu (asset kapsam takibi)
-- ---------------------------------------------------------------------
create index if not exists herbs_image_path_idx
  on public.herbs (image_path)
  where image_path is not null;

-- ---------------------------------------------------------------------
-- Not: RLS/grant değişmez. herbs zaten anon+authenticated'a SELECT açık
-- (0002); yeni sütunlar aynı politikaya tabidir. Yazma yetkisi yoktur —
-- görsel alanları panel/seed ile doldurulur.
-- ---------------------------------------------------------------------
