# 10 — ASSET PIPELINE & NAMING

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli

## 1. Amaç

Asset üretimi, doğrulama, isimlendirme, optimizasyon ve depolama standartlarını tanımlar.

## 2. Klasör yapısı

```text
assets/
├── botanicals/
│   └── <plant-id>/
├── celestial/
│   ├── planets/
│   ├── zodiac/
│   └── moon-phases/
├── garden/
├── rituals/
├── skin/
├── cycle/
├── journal/
├── backgrounds/
└── placeholders/
```

## 3. Plant asset paketi

```text
<plant-id>/
├── scientific-reference.webp
├── editorial-hero.webp
├── card-thumbnail.webp
├── leaf-detail.webp
├── silhouette.svg
└── metadata.json
```

## 4. Naming

Format:

```text
<domain>-<entity>-<variant>-<index>.<ext>
```

Örnek:

```text
plant-matricaria-chamomilla-editorial-01.webp
planet-saturn-glyph-v1.svg
garden-dusk-wide-01.webp
ritual-sleep-cover-02.webp
```

- lowercase
- kebab-case
- Türkçe karakter yok
- boşluk yok
- `final`, `new`, `latest` yok

## 5. Formatlar

- SVG: icons/glyphs/silhouettes
- WebP: production raster
- PNG: transparency zorunluysa
- JPG: yalnız fotoğraf kaynak arşivi
- Lottie/Rive: sınırlı motion assets
- AVIF V1 zorunlu değil

## 6. Boyut bütçeleri

| Asset | Max |
|---|---:|
| Icon SVG | 10 KB |
| Glyph SVG | 8 KB |
| Thumbnail | 120 KB |
| Card image | 220 KB |
| Hero | 500 KB |
| Garden wide | 700 KB |
| Motion asset | 350 KB ideal |

## 7. Resolution

- Thumbnail: 512×512
- Card portrait: 800×1000
- Feature: 1200×900
- Hero: 1600×1000
- Garden wide: 1920×1080

## 8. Verification workflow

1. Source/licence check
2. Botanical morphology check
3. Scientific name check
4. Color accuracy check
5. Crop check
6. Accessibility/contrast check
7. Compression
8. Metadata creation
9. QA approval
10. Production publish

## 9. Metadata schema

```json
{
  "assetId": "",
  "domain": "botanical",
  "entityId": "",
  "assetType": "",
  "scientificName": "",
  "commonNameTr": "",
  "family": "",
  "morphologyVerified": false,
  "colorAccuracy": "unknown",
  "sourceStatus": "licensed",
  "licenseReference": "",
  "aiGenerated": false,
  "symbolicEnhancement": false,
  "createdAt": "",
  "approvedBy": ""
}
```

## 10. Storage

- Source assets private archive
- Production assets CDN/Supabase Storage
- Metadata version controlled
- URLs hard-coded edilmez
- Cache key asset version içerir

## 11. Placeholder strategy

Yanlış görsel yerine:

- botanical silhouette
- scientific name
- neutral gradient
- verified pending label

kullanılır.

## 12. AI-generated asset policy

- AI-generated botanical image production’a doğrudan girmez.
- Botanik doğrulama gerekir.
- Metadata’da `aiGenerated: true`.
- Kaynak prompt ve revizyon bilgisi arşivlenir.
- İnsan yüzü/kişisel veri yoksa standard pipeline.
- Yanlış morfoloji varsa reddedilir.

## 13. Yasaklar

- Tek görseli farklı bitkilere kopyalamak
- Unsplash/random URL hard-code
- Lisans kaydı olmadan asset
- PNG ikon
- `image1.png`
- Metadata olmadan production botanical
- Wrong crop
- 2MB hero
- Kaynak ile production dosyasını aynı klasörde karıştırmak

## 14. Kilitlenen karar

Asset pipeline: **verified, versioned, compressed, metadata-backed**.
