# 15 — PRODUCT LOCKS & VISUAL OVERRIDES

**Belge durumu:** HIGHEST-PRIORITY CANONICAL OVERRIDE  
**Sürüm:** 1.0  
**Tarih:** 2026-07-21  
**Hedef:** React Native + Expo + TypeScript

## 1. Öncelik kuralı

Bu belge, `00–14` arasındaki tüm tasarım belgelerinin üzerinde çalışır. Çelişki halinde bu belge geçerlidir.

**BİLİNÇLİ DEĞİŞİKLİKLER:**
- 5 tab önerisinin iptali
- Inter’in ana body fontu olmaktan çıkarılması
- genel UI yüzeylerinin gece koyulaştırılmasının iptali
- toksik bitkilerin ürün envanteri ve öneri zincirinden dışlanması
- Free/Pro teaser desenlerinin zorunlu hale getirilmesi

## 2. Sabit platform ve bilgi mimarisi

Platform: React Native + Expo + TypeScript.

Ana navigasyon yalnızca dört tab içerir:

1. Ana Sayfa
2. Keşif
3. Bahçe
4. Sohbet

```ts
type MainTab = 'home' | 'explore' | 'garden' | 'chat'
```

Mood, Cycle, Skin Care, Journal, Astrology, Rituals, Plants/Herbal Library, Profile, Settings, Saved ve Pro yalnızca alt ekranlardır. Yeni ana tab oluşturulamaz.

## 3. Ana görsel kimlik

Ana uygulama kromu açık krem-pudra kalır:

- warm cream
- pearl
- powder blush
- pale stone
- soft parchment
- muted sage
- soft celestial blue

Koyuluk yalnızca:
- hero görsel paneli
- ritual cover
- astrology chart paneli
- garden dusk vignette
- night illustration
- modal içindeki görsel alan
- image-backed teaser

içinde kullanılabilir.

Navigation, forms, journal editor, settings, legal, long-form text ve ana background koyulaştırılamaz.

## 4. Kesin renk tokenları

```ts
export const chrome = {
  background: '#F8F2EC',
  backgroundAlt: '#FCF8F4',
  surface: '#FFFDFC',
  surfaceTint: '#F5ECE7',
  powder: '#EFD9DD',
  parchment: '#F6EEE4',
  stone: '#E7E0D8',
  border: '#D8CEC5',
  textPrimary: '#2E2926',
  textSecondary: '#625954',
  textMuted: '#827771',
} as const

export const botanical = {
  sage: '#879A7A',
  moss: '#687655',
  fern: '#55735D',
  eucalyptus: '#78968B',
  olive: '#8D8A58',
  bark: '#765B49',
  ochre: '#B68943',
  terracotta: '#A45F48',
  calendula: '#D9982F',
  borage: '#4D78A6',
  hypericum: '#D2B42C',
} as const

export const celestial = {
  moon: '#A9B8C2',
  sky: '#7C9DB3',
  dusk: '#65728D',
  indigo: '#4B5374',
  violet: '#827394',
  plum: '#67505F',
  gold: '#C5A260',
  copper: '#A66F52',
} as const

export const visualPanels = {
  dusk: '#3F4A5D',
  night: '#222B38',
  ritual: '#31303D',
  astrology: '#293346',
  gardenNight: '#26392F',
} as const
```

`visualPanels` tokenları ana screen background olarak kullanılamaz.

## 5. Tipografi kilidi

Font rolleri:

```ts
export const fontRoles = {
  display: 'Fraunces',
  reading: 'Lora',
  quote: 'Caveat',
  ceremonial: 'Playfair Display',
  ui: 'System',
} as const
```

- Fraunces: hero, screen title, section title, plant common name, ritual title
- Lora: journal prompt, editorial article, plant lore, reflective paragraph
- Caveat: yalnız kısa söz; maksimum 32 kelime ve 2 satır
- Playfair Display: nadir premium/ceremonial vurgu; ekran başına maksimum bir kullanım
- System sans: controls, metadata, forms, navigation

`Fraunces + Inter only` kararı iptal edilmiştir.

Türkçe karakter desteği zorunludur:

```text
Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü
```

Locale dönüşümü:

```ts
text.toLocaleUpperCase('tr-TR')
text.toLocaleLowerCase('tr-TR')
```

## 6. Global ölçü tokenları

```ts
export const layout = {
  screenPadding: 20,
  compactScreenPadding: 16,
  topPadding: 16,
  sectionGap: 28,
  denseSectionGap: 20,
  cardGap: 12,
  largeCardGap: 16,
  inlineGap: 8,
  heroRadius: 24,
  cardRadius: 16,
  compactRadius: 12,
  buttonHeight: 48,
  touchTarget: 44,
} as const
```

Her ekran şu sözleşmeyi içermelidir:

```ts
type ScreenVisualSpec = {
  screenId: string
  backgroundHex: string
  surfaceHex: string
  accentHex: string
  visualPanelHex?: string
  horizontalPadding: number
  topPadding: number
  sectionGap: number
  cardGap: number
  heroHeight?: number
  cardRadius: number
  panelRadius: number
  motionLevel: 'M0' | 'M1' | 'M2' | 'M3'
  maxAnimatedElements: 0 | 1 | 2
}
```

## 7. Ana ekran spesifikasyonları

### Ana Sayfa

```ts
export const homeSpec = {
  screenId: 'home',
  backgroundHex: '#F8F2EC',
  surfaceHex: '#FFFDFC',
  accentHex: '#879A7A',
  visualPanelHex: '#3F4A5D',
  horizontalPadding: 20,
  topPadding: 16,
  sectionGap: 28,
  cardGap: 12,
  heroHeight: 280,
  cardRadius: 16,
  panelRadius: 24,
  motionLevel: 'M1',
  maxAnimatedElements: 2,
} as const
```

Sıra:
1. Tarih + moon chip
2. Daily plant hero
3. Mood shortcut
4. Daily celestial insight
5. Slot ladder
6. Free/Pro teaser
7. Save/share

### Keşif

```ts
export const exploreSpec = {
  screenId: 'explore',
  backgroundHex: '#FCF8F4',
  surfaceHex: '#FFFDFC',
  accentHex: '#7C9DB3',
  visualPanelHex: '#293346',
  horizontalPadding: 20,
  topPadding: 16,
  sectionGap: 32,
  cardGap: 16,
  heroHeight: 220,
  cardRadius: 16,
  panelRadius: 24,
  motionLevel: 'M1',
  maxAnimatedElements: 1,
} as const
```

### Bahçe

```ts
export const gardenSpec = {
  screenId: 'garden',
  backgroundHex: '#F6EEE4',
  surfaceHex: '#FFFDFC',
  accentHex: '#687655',
  visualPanelHex: '#26392F',
  horizontalPadding: 16,
  topPadding: 12,
  sectionGap: 24,
  cardGap: 12,
  heroHeight: 360,
  cardRadius: 16,
  panelRadius: 24,
  motionLevel: 'M1',
  maxAnimatedElements: 2,
} as const
```

### Sohbet

```ts
export const chatSpec = {
  screenId: 'chat',
  backgroundHex: '#F8F2EC',
  surfaceHex: '#FFFDFC',
  accentHex: '#827394',
  visualPanelHex: '#31303D',
  horizontalPadding: 16,
  topPadding: 12,
  sectionGap: 20,
  cardGap: 10,
  cardRadius: 16,
  panelRadius: 20,
  motionLevel: 'M0',
  maxAnimatedElements: 0,
} as const
```

## 8. Alt ekran spesifikasyonları

### Mood

```ts
{
  backgroundHex: '#FCF8F4',
  surfaceHex: '#FFFDFC',
  accentHex: '#78968B',
  horizontalPadding: 20,
  sectionGap: 24,
  heroHeight: 180,
  cardRadius: 16,
  motionLevel: 'M2',
  maxAnimatedElements: 1
}
```

### Cycle

```ts
{
  backgroundHex: '#F8F2EC',
  surfaceHex: '#FFFDFC',
  accentHex: '#A45F48',
  visualPanelHex: '#4B5374',
  horizontalPadding: 20,
  sectionGap: 24,
  heroHeight: 220,
  cardRadius: 16,
  motionLevel: 'M1',
  maxAnimatedElements: 1
}
```

### Skin Care

```ts
{
  backgroundHex: '#FCF8F4',
  surfaceHex: '#FFFDFC',
  accentHex: '#78968B',
  horizontalPadding: 20,
  sectionGap: 24,
  heroHeight: 180,
  cardRadius: 16,
  motionLevel: 'M0',
  maxAnimatedElements: 0
}
```

### Journal

```ts
{
  backgroundHex: '#F6EEE4',
  surfaceHex: '#FFFDFC',
  accentHex: '#765B49',
  horizontalPadding: 20,
  sectionGap: 24,
  cardRadius: 16,
  motionLevel: 'M0',
  maxAnimatedElements: 0
}
```

### Plants

```ts
{
  backgroundHex: '#F8F2EC',
  surfaceHex: '#FFFDFC',
  accentHex: '#879A7A',
  horizontalPadding: 20,
  sectionGap: 24,
  heroHeight: 260,
  cardRadius: 16,
  motionLevel: 'M1',
  maxAnimatedElements: 1
}
```

### Astrology

```ts
{
  backgroundHex: '#FCF8F4',
  surfaceHex: '#FFFDFC',
  accentHex: '#65728D',
  visualPanelHex: '#293346',
  horizontalPadding: 20,
  sectionGap: 24,
  heroHeight: 260,
  cardRadius: 16,
  motionLevel: 'M1',
  maxAnimatedElements: 1
}
```

### Rituals

```ts
{
  backgroundHex: '#F8F2EC',
  surfaceHex: '#FFFDFC',
  accentHex: '#C5A260',
  visualPanelHex: '#31303D',
  horizontalPadding: 20,
  sectionGap: 24,
  heroHeight: 280,
  cardRadius: 16,
  motionLevel: 'M3',
  maxAnimatedElements: 2
}
```

## 9. Motion kilidi

```ts
export const motionLimits = {
  maxScale: 1.02,
  pressScale: 0.98,
  maxAnimatedElementsPerScreen: 2,
} as const
```

- Ekran başına maksimum 1–2 animasyonlu öğe
- Ambient duration: 8–16 saniye
- Responsive duration: 160–300ms
- Ceremonial duration: 3–5 saniye

Reduced Motion açıkken tüm ambient hareketler tamamen durur.

## 10. Erişilebilirlik

- Normal text: WCAG AA, minimum 4.5:1
- Large text: minimum 3:1
- Essential icon: minimum 3:1
- Touch target: minimum 44×44
- Durumlar yalnız renkle anlatılmaz
- Dynamic Type desteklenir
- Caveat kritik metinde kullanılmaz
- Koyu visual panel üstünde scrim zorunludur

## 11. Toksik bitki güvenlik kilidi

Datura, Atropa belladonna, Aconitum, Digitalis, Ricinus communis, Nerium oleander, Conium maculatum ve benzeri yüksek riskli toksik bitkiler yalnızca tarihsel, kültürel, sanatsal, sembolik veya estetik referans olabilir.

Toksik bitkiler:

- ürün envanterine giremez
- kişisel öneriye giremez
- ritüel bileşeni olamaz
- Garden collectible olamaz
- tüketim/uygulama CTA’sı alamaz
- affiliate ürüne bağlanamaz
- doz veya kullanım talimatı içeremez

UI etiketi:

```text
Tarihsel / sembolik referans
Kullanım önerisi değildir
```

## 12. Sağlık dili

Yasak:

- tedavi eder
- iyileştirir
- önler
- tanı koyar
- doz
- reçete
- kesin etki
- garantili sonuç

Kullanılabilir:

- geleneksel olarak ilişkilendirilir
- destekleyici bağlamda ele alınır
- bazı kullanıcılar tarafından rahatlatıcı bulunabilir
- profesyonel değerlendirme gerekebilir
- kanıt düzeyi sınırlıdır

## 13. Astroloji dili

Yasak:

- kesin kader
- olacak
- yaşayacaksın
- ruh eşi kesinliği
- kesin sonuç
- evlilik/ayrılık/ölüm kesinliği

Kullanılabilir:

- temayı vurgulayabilir
- farkındalık alanı açabilir
- şu konuya dikkat çekebilir
- içgörü amacıyla değerlendirilebilir
- kesin öngörü değildir

## 14. Free / Pro teaser

İlk anlamlı sonuç ücretsizdir.

```ts
type ProTeaserProps = {
  title: string
  preview: string
  lockedDetailCount?: number
  ctaLabel: string
  visualPanel?: boolean
}

export const proTeaser = {
  backgroundHex: '#FFFDFC',
  accentHex: '#C5A260',
  borderHex: '#D8CEC5',
  lockedPanelHex: '#31303D',
  radius: 16,
  padding: 16,
  gap: 12,
} as const
```

Kurallar:

- Sonucun tamamını kilitleme
- Aynı viewportta maksimum 1 teaser
- Teaser ekranı domine etmez
- CTA dürüst ve nettir
- Sahte blur ile manipülasyon yok
- Free/Pro farkı işlevsel olarak açıklanır

## 15. Claude Code bağlayıcı özeti

Claude Code:

1. Ana tab sayısını 4 olarak korur.
2. Mood/Cycle/Skin/Journal için tab oluşturmaz.
3. Ana UI kromunu açık krem-pudra tutar.
4. Koyu renkleri yalnız visual panel tokenlarından kullanır.
5. Fraunces/Lora/Caveat/Playfair rollerini korur.
6. Türkçe karakter desteğini test eder.
7. Her ekran için açık HEX ve spacing spec kullanır.
8. Toksik bitkileri envanter ve öneri zincirinden dışlar.
9. Tıbbi iddia ve doz dili üretmez.
10. Astrolojide kesin kader dili üretmez.
11. Free/Pro teaser desenlerini component ve screen contractlarına ekler.
12. Reduced Motion’da tüm ambient hareketleri durdurur.
13. Bu belgeyi `00–14` üzerinde en yüksek öncelikli kaynak kabul eder.

## 16. Kilitlenen karar

Tasarım sistemi:

- 4 sabit tab
- açık krem-pudra krom
- koyuluk yalnız görsel panellerde
- Fraunces/Lora/Caveat/Playfair rol sistemi
- kesin ekran tokenları
- minimal ve durdurulabilir motion
- toksik bitkiler için tam ürün dışlama
- güvenli sağlık ve astroloji dili
- Free/Pro teaser desenleri

ile kilitlenmiştir.
