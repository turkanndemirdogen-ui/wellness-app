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

---

# EK-A — "BÜYÜLÜ" HERO YÖNÜ (2026-09-02, ürün sahibi kararı)

**Durum:** Bu ek belgenin GÖVDESİNİ değiştirmez; §3-§7'nin Ana Sayfa hero
katmanına uygulanışını genişletir ve genişlemenin sınırını çizer. Ürün sahibi
"Büyülü" (C) yönünü onayladı: hero düz/açık dil yerine dreamy-sinematik olacak.

## A.1 Düzeltme — koyu hero scrim zaten izinliydi

Karar "koyuluk yalnız VisualPanel'de" kuralını genişletiyor gibi sunuldu; ancak
**§3 zaten "hero görsel paneli"ni koyuluğa izinli yerler arasında sayıyor.**
Atmosferik scrim taşıyan hero, mevcut kanona AYKIRI DEĞİLDİ. Bu ekin genişlettiği
şey scrim'in kendisi değil, aşağıdaki beş maddedir.

## A.2 Genişleyen beş madde

1. **Koyu panel üstü metin renkleri.** §5 ve §10 yalnız açık krom üstü metni
   tanımlıyordu. Hero artık metni doğrudan koyu scrim üzerinde taşıyor; bunun
   için `material.onPanel` grubu eklendi: `primary` ve `secondary` 02 §12
   "Text colors — Dark" tablosundan BİREBİR, `lilac` (#CBBEDA) bilimsel ad için
   `celestial.violet`ten türetildi. Bu renkler KROMA sızamaz — yalnız hero
   görsel katmanında geçerlidir.
2. **Hero tam genişlik.** §6 `screenPadding: 20` ekran kolonunu tanımlar; hero
   artık bu kolondan negatif marjla taşıp ekran kenarına dayanır. Köşe
   yuvarlaması yalnız ALT iki köşededir (üst kenar ekranla birleşir).
3. **Hero yüksekliği taban oldu.** §7 `heroHeight: 280` artık sabit değil
   TABAN'dır: panel `max(280, ekran yüksekliği × 0.40)` kadar yer kaplar.
   Spec token'ı değişmedi; ekran onu alt sınır olarak okur.
4. **Ekran zemini düz renk değil.** §7 `backgroundHex: '#F8F2EC'` korunuyor ama
   üzerine çok hafif lila-krem dikey geçiş (`material.ambientTint`) ve %2.5
   tanecik dokusu (04 §17.2) biniyor. Bu bir TONLAMA'dır, koyulaşma değil:
   krom açık kalır.
5. **Standart kart yüzeyi yarı saydam.** §4 `chrome.surface (#FFFDFC)` artık
   kartlarda 0.88 alfa ile (glass mist tint'i) ve ince altın saç çizgisiyle
   kullanılıyor; zemin tonlaması kartın altından hafifçe okunur.

Ayrıca Ana Sayfa sekmesinde navigasyon başlık çubuğu KAPATILDI: hero ekranın en
üstünden başlar, başlığın taşıdığı bağlam (tarih + ay çipi) panelin içine indi.
Diğer sekmeler başlıklı ve açık kalır.

## A.3 Değişmeyen sınır

Aşağıdakiler bu ekle **genişlemedi** ve genişletilemez:

- Navigation (tab bar), form yüzeyleri, journal editörü, settings, legal ve
  uzun okuma yüzeyleri **açık krem-pudra** kalır (§3).
- `visualPanels` token'ları hâlâ screen background olamaz (§4); hero scrim'i
  ayrı bir token grubudur (`material.heroAtmosphere`) ve yalnız hero görsel
  katmanında tüketilir.
- Dört sabit tab (§2), font rol sistemi (§5), motion sınırları (§9) ve
  erişilebilirlik eşikleri (§10) aynen geçerlidir.
- **§10 AA eşiği hero'da da geçerlidir:** scrim'in alt durağı 0.90 opaklıktadır;
  adın oturduğu bantta kontrast alttaki görselden bağımsız hesaplanır ve
  `__tests__/contrast-aa.test.ts` en kötü hâli (beyaz görsel) test eder.

## A.4 Uygulandığı yer

`mobile/src/domain-ui/daily-herb-hero.tsx` (panel) ·
`mobile/src/design-system/tokens/tokens.json` → `material.heroAtmosphere`,
`material.onPanel`, `material.ambientTint`, `material.texture`,
`material.borderTone.gold` · `theme/semantic.ts` (semantic eşleme) ·
`components/ambient-background.tsx` (zemin tonlaması + doku) ·
`components/card.tsx` (yarı saydam yüzey + altın kenar + parşömen dokusu).

---

# EK-B — TİPOGRAFİ SİSTEMİ DEĞİŞİMİ (2026-09-02, ürün sahibi kararı)

**Durum:** Bu ek §5'in **font ailesi tablosunu değiştirir**; §5'in kuralları
(Türkçe karakter zorunluluğu, `tr-TR` locale dönüşümü, rol disiplini, Caveat'ın
yalnız kısa sözde kullanımı) aynen geçerlidir. Çelişki halinde bu ek uygulanır.

## B.1 Yeni rol tablosu

```ts
export const fontRoles = {
  display: 'Cinzel',      // Cinzel 600
  body:    'Jost',        // Jost 400
  ui:      'Jost',        // Jost 500
  sci:     'Jost Italic', // Jost 400 italic
  quote:   'Caveat',      // Caveat 500 — korundu
} as const
```

| Rol | Aile / kesim | Kural |
|---|---|---|
| `display` | Cinzel 600 | **YALNIZCA ≥20px**, en fazla **2 satır**, `letterSpacing 0.03em`. Kullanım: hero bitki adı, ekran başlıkları, bölüm başlıkları. Buton, form, kart altyazısı ve uzun metinde **KESİNLİKLE** kullanılmaz. |
| `body` | Jost 400 | Minimum **15px**, `lineHeight 1.7`. Editoryal paragraf, bitki cümlesi, gövde metni. |
| `ui` | Jost 500 | Tab bar, buton, çip, form etiketi. |
| `sci` | Jost 400 italic | Bilimsel ad. **Hiçbir kart varyantında gizlenmez** (07 §6 kilidi sürüyor). |
| `quote` | Caveat 500 | Yalnız kısa söz: maksimum 32 kelime, 2 satır (§5 kuralı korundu). |

## B.2 Çıkarılanlar

- **Fraunces** ve **Lora** token haritasından çıkarıldı; hiçbir variant'ta ve
  hiçbir eski `Text role` alias'ında kalmadı (test: `typography-role-mapping`).
- **Playfair Display** kaldırıldı: `ceremonial` variant'ı hiçbir yüzeyde
  kullanılmıyordu, splash font bütçesini boşuna tüketiyordu. `ceremonial`
  variant'ı korundu ama artık Cinzel 400'e bakar.
- `Fraunces + Inter only` kararı zaten §5'te iptal edilmişti; Inter hâlâ yok.

## B.3 Cinzel alt sınırı — bilinçli sapma

Cinzel 20px altında oranlarını kaybediyor. Eski `Text role` alias'ındaki
`heading.s` (16px) bu yüzden display ailesine **giremez** ve `ui` ailesine
(Jost 500) düşürülür. Kural hem çalışma anında (`__DEV__` uyarısı) hem testte
(`typography-role-mapping` → "display ailesi 20px altında kullanılamaz")
bağlanmıştır.

## B.4 Türkçe kapsam — kabul kriteri ve nasıl doğrulandığı

Ürün sahibi kabul kriteri: *"Öksürük Otu Çiçeği" ve "Şeytan Pençesi" hem
başlıkta hem gövdede doğru render olmalı; harfler sistem yedeğine düşerse
fontun TTF'i genişletilmiş latin içermiyor demektir.*

Doğrulama yapısal varsayımla değil, **yüklenen TTF dosyalarının cmap tablosu
okunarak** yapılır (`__tests__/turkish-font-characters.test.ts`). Yüklenen beş
kesimin (Cinzel 400/600, Jost 400/500/400-italic) ve Caveat 500'ün hepsinde
`Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü` **tam** kapsanıyor; `Â â Î î Û û` de mevcut. Font
paketi sürümü değişip kapsam daralırsa test kırmızıya döner.

## B.5 Açık kalem — Cinzel'in küçük harf karakteri

Cinzel, Roma yazıtlarından türemiş bir **majüskül** ailesidir: küçük harfleri
gerçek minüskül değil, **küçük büyük harf (small caps)** biçimindedir. Yani
"Papatya" ekranda büyük harf ritmiyle okunur. Bu, 03 §7.1'in "tamamı uppercase
yasak" kuralına metin dönüşümüyle DEĞİL, fontun kendi karakteriyle yaklaşan bir
görünümdür — `textTransform` uygulanmıyor, metin olduğu gibi yazılıyor.
Ürün sahibi telefonda görüp onaylamalı; istenmezse display ailesi minüskülü olan
bir majüskül-alternatifiyle (ör. Cormorant, Spectral) değiştirilir.

---

# EK-C — HERO SCRIM YÖNÜ: VİNYET + LİLA (2026-09-02, ürün sahibi kararı)

**Durum:** EK-A'nın hero katmanını değiştirir; EK-A'nın sınırları (krom açık
kalır, `visualPanels` screen background olamaz, AA eşiği geçerli) aynen durur.

## C.1 Neden değişti

EK-A'nın tam boy dikey scrim'i bitki görselini üstten aşağı karartıyordu:
atmosfer vardı ama **bitkinin kendisi görünmüyordu.** Ürün sahibi kararı:
görsel merkezde tam netlikte kalsın, atmosfer kenarlardan gelsin.

## C.2 Yeni katman düzeni

1. **Vinyet** — elips radyal (merkez %50/%38, yarıçap %80): `%30 şeffaf →
   %78 rgba(74,42,110,0.42) → %100 rgba(40,20,64,0.78)`. Koyulaşma yalnız
   kenarlarda; görselin ortası dokunulmadan kalır.
2. **Lila sis** — tüm hero üstünde düz katman `rgba(140,96,190,0.18)`.
3. **Adaptif bulut** — yalnız metin bandı açık olan görsellerde (bkz. C.3).
4. **Altın ışık huzmesi** — üst köşeden radyal, en üstteki katman; korundu.

Tam boy dikey scrim (`heroAtmosphere.top/upper/mid/bottom`) KALDIRILDI.

## C.3 Metin emniyeti — ölçüme bağlı, göz kararı değil

Koyu taban kalkınca beyaz yazı açık zeminli görsellerde okunmaz hale geliyordu.
İki katmanlı emniyet:

1. **Metin gölgesi** — ad ve bilimsel adda `0 1px 10px rgba(30,12,45,0.55)`,
   her zaman.
2. **Adaptif bulut** — sol-alt merkezli, kenarları tamamen yumuşak koyu radyal.
   **Gücü görsel başına ÇÖZÜLÜR:** `scripts/measure-hero-contrast.py` gerçek
   WebP piksellerini okur, hero'nun cover kırpmasını modeller, metin
   dikdörtgenindeki EN AÇIK pikseli bulur, katmanları bindirir ve eşiği geçen
   en küçük bulut alfasını ikili aramayla bulur. Sonuç varlık kaydına
   (`content/bitki-gorselleri.json`) ve üretilmiş haritaya
   (`herb-hero-luma.generated.ts`) yazılır — **cihazda hesaplanmaz.**

**Ölçüm sonucu (11 canlı görsel):** vinyet + sis tek başına hiçbir görselde
yetmiyordu (1.60–3.25:1). Çözülen bulut alfalarıyla hepsi **4.60:1**. En zoru
karahindiba (parlak sarı çiçek, α=0.80), en kolayı biberiye (α=0.36).
Görseli olmayan bitkide yer tutucu yüzeyi de açık olduğu için o hâl de
ölçülüyor (α=0.84 → 4.60:1).

## C.4 Bağlam şeridi — görselden bağımsız

Tarih ve ay çipi görsele göre DEĞİŞMEZ: sabit koyu-altın metin (`#7A5C1E`),
aynı tonda %45 hairline. **Beyaz çip kullanılmaz.**

Ölçülen sapma: koyu-altın metin doğrudan fotoğraf üstünde **2.63:1** veriyordu
(AA fail). Bu yüzden çipe aynı altın ailesinin açık ucundan ince bir yüzey
eklendi (`rgba(247,236,208,0.82)`) → **4.71:1**. Yüzey beyaz değildir; kural
"beyaz çip kullanma" olduğu için altın ailesinde kalındı. Ürün sahibi isterse
yüzey kaldırılır — o durumda çip AA'yı geçmez ve bu bilinçli bir kabul olur.

## C.5 Kalıcı kapı

`__tests__/hero-text-contrast.test.ts` üç şeyi bağlar: (1) varlık kaydındaki
her görselin ölçümü var mı — **ölçülmemiş görsel eklenemez**; (2) ölçülen
kontrastların hepsi ≥4.5:1 mi; (3) ölçümün yapıldığı katman değerleri bugünkü
token'larla aynı mı — vinyet/sis/bulut değeri değişirse ölçüm bayatlar ve test
kırmızıya döner. Yeniden ölçüm: `npm run check:hero-contrast`.
