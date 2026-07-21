# 05 — ICON, ZODIAC, PLANET & MOON GLYPH SYSTEM

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli  
**Hedef:** React Native + Expo + TypeScript

## 1. Amaç

Bu belge uygulamanın tüm ikon, burç, gezegen ve ay fazı sembollerini tek bir görsel ve teknik sistem altında toplar.

## 2. Temel ikon karakteri

- Monoline
- Yuvarlatılmış cap ve join
- Yetişkin, editoryal ve sakin
- Oyuncak, sticker, kawaii veya aşırı mistik değil
- Varsayılan stroke: `1.5`
- Küçük boyutta minimum stroke: `1.4`
- Büyük hero glyph’lerinde maksimum stroke: `1.8`
- Dolgulu ikon yalnızca seçili durum veya semantic feedback için

## 3. Standart ölçüler

| Token | Ölçü | Kullanım |
|---|---:|---|
| `icon.xs` | 14 | Micro metadata |
| `icon.sm` | 16 | Caption / inline |
| `icon.md` | 20 | Standard control |
| `icon.lg` | 24 | Tab / button |
| `icon.xl` | 32 | Feature tile |
| `icon.2xl` | 48 | Hero / empty state |
| `glyph.hero` | 72–112 | Ceremonial / astrology reveal |

Minimum touch target: `44×44`.

## 4. SVG teknik sözleşmesi

- Tüm glyphler SVG component olarak saklanır.
- Ortak `viewBox`: `0 0 24 24`
- `fill="none"` varsayılan
- `stroke="currentColor"`
- `strokeLinecap="round"`
- `strokeLinejoin="round"`
- Decorative detail dışarı taşmaz.
- Glyph geometrisi optik olarak ortalanır.
- Unicode yalnızca text fallback olarak kullanılabilir.

## 5. Dosya yapısı

```text
design-system/glyphs/
├── planets/
│   ├── SunGlyph.tsx
│   ├── MoonGlyph.tsx
│   ├── MercuryGlyph.tsx
│   ├── VenusGlyph.tsx
│   ├── MarsGlyph.tsx
│   ├── JupiterGlyph.tsx
│   ├── SaturnGlyph.tsx
│   ├── UranusGlyph.tsx
│   ├── NeptuneGlyph.tsx
│   └── PlutoGlyph.tsx
├── zodiac/
│   ├── AriesGlyph.tsx
│   ├── TaurusGlyph.tsx
│   ├── GeminiGlyph.tsx
│   ├── CancerGlyph.tsx
│   ├── LeoGlyph.tsx
│   ├── VirgoGlyph.tsx
│   ├── LibraGlyph.tsx
│   ├── ScorpioGlyph.tsx
│   ├── SagittariusGlyph.tsx
│   ├── CapricornGlyph.tsx
│   ├── AquariusGlyph.tsx
│   └── PiscesGlyph.tsx
├── moon-phases/
│   ├── NewMoon.tsx
│   ├── WaxingCrescent.tsx
│   ├── FirstQuarter.tsx
│   ├── WaxingGibbous.tsx
│   ├── FullMoon.tsx
│   ├── WaningGibbous.tsx
│   ├── LastQuarter.tsx
│   └── WaningCrescent.tsx
└── index.ts
```

## 6. Planet glyphleri

Zorunlu set:

- Sun
- Moon
- Mercury
- Venus
- Mars
- Jupiter
- Saturn
- Uranus
- Neptune
- Pluto

Renkler `02_COLOR_AND_GRADIENT_TOKENS.md` içindeki `planet.*` tokenlarından gelir.

Kurallar:

- Gezegen rengi içerik boyunca tutarlı kalır.
- Tek mor set kullanılmaz.
- Seçili gezegen: `1.5px border + label emphasis + subtle glow`.
- Sürekli neon aura yok.
- Gezegen glyphi gerçek astrolojik veriye bağlıysa label ve derece ile gösterilir.

## 7. Zodiac glyphleri

Zorunlu set:

- Aries
- Taurus
- Gemini
- Cancer
- Leo
- Virgo
- Libra
- Scorpio
- Sagittarius
- Capricorn
- Aquarius
- Pisces

Kullanım modları:

1. `default`
2. `element`
3. `profile`

Renk tanımları renk token belgesinden alınır.

## 8. Ay fazları

Ay fazları dekoratif illüstrasyon ve veri glyphi olarak ayrılır.

### Veri glyphi

- Düz, açık, tek renkli
- Fazı doğru temsil eder
- Label ile birlikte kullanılır
- Ay fazı yanlış veya yaklaşık gösterilemez

### Decorative moon

- Hero veya ambient alanda kullanılabilir
- Gerçek faz verisi iddiası yoksa `decorative` olarak işaretlenir
- Data layer ile karıştırılmaz

## 9. Ek astrolojik semboller

V1 genişleme rezervi:

- Ascendant
- Midheaven
- North Node
- South Node
- Chiron
- Retrograde
- Conjunction
- Opposition
- Trine
- Square
- Sextile

Bu semboller V1 ana glyph setinin parçası değildir; mimari alan bırakılır.

## 10. Genel UI ikonları

Zorunlu aile:

- Home
- Garden
- Plants
- Mood
- Journal
- Search
- Filter
- Save
- Share
- Add
- Close
- Back
- More
- Calendar
- Bell
- Water
- Sun
- Moon
- Leaf
- Flower
- Spark
- Check
- Warning
- Info
- Lock
- Play
- Pause
- Timer
- Edit
- Trash

Tek bir ikon kütüphanesi seçilmeli; Lucide veya Phosphor aynı anda kullanılmamalıdır.

Kanonik öneri: **Lucide React Native**, ancak astro glyphleri özel SVG setidir.

## 11. Active / inactive states

### Inactive

- Outline
- `text.tertiary`
- Glow yok

### Active

- Aynı glyph
- Module accent color
- `1.1×` optik vurgu
- Label semi-bold
- Gerekirse çok hafif tint background

### Pressed

- Scale `0.96–0.98`
- Opacity düşmez
- Shadow/glow azalır

## 12. Accessibility

Her glyph:

- `accessibilityRole="image"` veya ilgili control role
- `accessibilityLabel`
- Decorative ise `accessible={false}`
- Tek başına anlam taşımaz
- Planet, sign ve moon phase label ile desteklenir

Örnek:

```tsx
<PlanetGlyph
  planet="saturn"
  size={24}
  accessibilityLabel="Satürn"
/>
```

## 13. Yasaklar

- Emoji’yi production glyphi olarak kullanmak
- Unicode’a font bağımlı görünüm bırakmak
- Tüm glyphleri farklı stroke ile çizmek
- Neon zodiac seti
- Sticker ikonlar
- Dolgulu ve outline setleri rastgele karıştırmak
- Decoration glyphini gerçek veri gibi göstermek
- Glyph içine text gömmek
- Raster PNG ikon kullanmak
- Aynı glyphin farklı ekranlarda farklı geometriyle görünmesi

## 14. Claude Code özeti

Claude Code:

1. Astro glyphlerini özel SVG component olarak oluşturmalı.
2. UI ikonları için tek ikon kütüphanesi kullanmalı.
3. Tüm glyphleri ortak size/stroke sistemiyle üretmeli.
4. Unicode’u yalnızca fallback olarak bırakmalı.
5. Planet ve zodiac renklerini merkezi tokenlardan almalı.
6. Accessibility label eklemeli.
7. Yeni glyph eklemeden önce bu belgeyi güncellemeli.

## 15. Kilitlenen karar

V1 ikon sistemi: **monoline UI icons + custom SVG astrology glyph set**.
