# 03 — TYPOGRAPHY SYSTEM

**Belge durumu:** CANONICAL SUPPORTING SPECIFICATION  
**Bağlı belgeler:**  
- `00_VISUAL_SYSTEM_CANONICAL.md`
- `01_VISUAL_DIRECTION.md`
- `02_COLOR_AND_GRADIENT_TOKENS.md`

**Proje:** Wellness Mobile App  
**Sürüm:** 1.0  
**Tarih:** 2026-07-20  
**Hedef ortam:** React Native + Expo + TypeScript  
**Durum:** V1 için kilitli

---

## 1. Amaç

Bu belge, `Luminous Botanical Cosmos` görsel sisteminin tipografi kararlarını bağlayıcı biçimde tanımlar.

Amaç:

- Uygulamanın editoryal, yetişkin ve premium karakterini korumak
- “Çocuk defteri”, fazla romantik veya dekoratif görünümü önlemek
- Türkçe karakterlerde ve bilimsel bitki adlarında doğru render sağlamak
- iOS ve Android arasında tutarlı tipografik hiyerarşi kurmak
- Uzun okuma, form, veri, grafik ve içerik kartlarında okunabilirliği korumak
- Claude Code’un rastgele font, font-size veya line-height üretmesini engellemek
- Dinamik yazı boyutu ve erişilebilirlik desteğini sistem seviyesinde tanımlamak

Bu dosyada tanımlanmayan font ailesi, ölçü veya kullanım tipi production arayüzüne eklenemez.

---

## 2. Kanonik tipografi yönü

### 2.1 Görsel karakter

Tipografi:

- zarif,
- editoryal,
- sakin,
- yüksek kaliteli,
- doğal,
- çağdaş,
- bilimsel içerikte güvenilir,
- astrolojik içerikte şiirsel ama ölçülü

olmalıdır.

Tipografi:

- çocuk kitabı gibi,
- aşırı romantik,
- gotik,
- “witchy”,
- aşırı ince,
- süslü script,
- tam büyük harfli ağır marka dili,
- moda dergisi uğruna okunamaz

olmamalıdır.

### 2.2 Temel kombinasyon

V1 için iki ana aile kullanılacaktır:

1. **Display / Editorial Serif:** `Fraunces`
2. **Body / UI Sans:** `Inter`

Bu kombinasyonun gerekçesi:

- `Fraunces`, Playfair Display kadar klasik ve romantik görünmeden editoryal karakter sağlar.
- Optik olarak daha organik, sıcak ve çağdaş görünür.
- Botanik, journal, ritual ve hero başlıklarında güçlüdür.
- `Inter`, arayüz, form, veri ve uzun metinde yüksek okunabilirlik sağlar.
- Her iki aile de Latin Extended ve Türkçe karakter kullanımına uygundur.
- Expo/Google Fonts ekosisteminde uygulanabilir.
- Android render performansı yönetilebilir.

### 2.3 Font kullanım sınırı

V1’de:

- En fazla 2 font ailesi
- En fazla 6 font weight
- Script font yok
- Decorative display font yok
- Glyph font yok
- Scientific names için ayrı font ailesi yok

---

## 3. Font aileleri

### 3.1 Display / Editorial

**Font family:** `Fraunces`

Kullanılacak weight’ler:

- 400 — Regular
- 500 — Medium
- 600 — SemiBold

Kullanılmayacak:

- 100–300 ultra light
- 700–900 heavy
- aşırı italik hero metinleri
- çok uzun body metinleri

Önerilen Expo paketleri:

```bash
npx expo install expo-font expo-splash-screen
npx expo install @expo-google-fonts/fraunces @expo-google-fonts/inter
```

Önerilen import:

```ts
import {
  Fraunces_400Regular,
  Fraunces_500Medium,
  Fraunces_600SemiBold,
  Fraunces_400Regular_Italic,
} from '@expo-google-fonts/fraunces'
```

### 3.2 Body / UI

**Font family:** `Inter`

Kullanılacak weight’ler:

- 400 — Regular
- 500 — Medium
- 600 — SemiBold
- 700 — Bold, yalnızca sınırlı durumlarda

Önerilen import:

```ts
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
```

### 3.3 Italic kullanım

Italic yalnızca:

- bilimsel bitki adları,
- kısa editoryal alıntılar,
- botanical lore / historical note,
- sınırlı journal vurgu

için kullanılabilir.

Italic:

- butonda,
- navigation’da,
- chip’te,
- form label’ında,
- veri tablosunda,
- uzun paragrafta

kullanılmaz.

---

## 4. Font family tokenları

```ts
export const fontFamilies = {
  display: 'Fraunces_500Medium',
  displayRegular: 'Fraunces_400Regular',
  displaySemibold: 'Fraunces_600SemiBold',
  displayItalic: 'Fraunces_400Regular_Italic',

  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemibold: 'Inter_600SemiBold',
  bodyBold: 'Inter_700Bold',
} as const
```

Fallback yaklaşımı:

```ts
export const fontFallbacks = {
  ios: {
    display: 'Georgia',
    body: 'System',
  },
  android: {
    display: 'serif',
    body: 'sans-serif',
  },
} as const
```

Fallback yalnızca font yükleme hatasında geçici olarak kullanılmalıdır.

---

## 5. Typography scale

V1, 4pt tabanlı ve erişilebilirlik uyumlu bir ölçek kullanır.

| Token | Font | Weight | Size | Line Height | Letter Spacing |
|---|---|---:|---:|---:|---:|
| `display.hero` | Fraunces | 500 | 44 | 50 | -0.6 |
| `display.h1` | Fraunces | 500 | 36 | 42 | -0.4 |
| `display.h2` | Fraunces | 500 | 30 | 36 | -0.3 |
| `display.h3` | Fraunces | 500 | 24 | 30 | -0.2 |
| `display.h4` | Fraunces | 500 | 20 | 26 | -0.1 |
| `body.xl` | Inter | 400 | 18 | 28 | 0 |
| `body.lg` | Inter | 400 | 17 | 26 | 0 |
| `body.md` | Inter | 400 | 16 | 24 | 0 |
| `body.sm` | Inter | 400 | 14 | 21 | 0 |
| `body.xs` | Inter | 400 | 13 | 18 | 0 |
| `label.lg` | Inter | 600 | 15 | 20 | 0.1 |
| `label.md` | Inter | 600 | 14 | 18 | 0.1 |
| `label.sm` | Inter | 600 | 12 | 16 | 0.2 |
| `caption` | Inter | 500 | 12 | 16 | 0.1 |
| `overline` | Inter | 600 | 11 | 14 | 0.8 |
| `micro` | Inter | 500 | 10 | 13 | 0.5 |
| `number.hero` | Fraunces | 500 | 40 | 44 | -0.4 |
| `number.stat` | Inter | 600 | 24 | 28 | -0.2 |

### 5.1 Minimum size

- Body minimum: 14
- Caption minimum: 12
- Micro yalnızca yardımcı dekoratif metadata için: 10
- Scientific name minimum: 13
- Tab label minimum: 11
- Button label minimum: 14

Kritik bilgi 12’den küçük gösterilemez.

---

## 6. Semantic typography tokens

```ts
export const typography = {
  heroTitle: {
    fontFamily: fontFamilies.display,
    fontSize: 44,
    lineHeight: 50,
    letterSpacing: -0.6,
  },
  screenTitle: {
    fontFamily: fontFamilies.display,
    fontSize: 36,
    lineHeight: 42,
    letterSpacing: -0.4,
  },
  sectionTitle: {
    fontFamily: fontFamilies.display,
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.2,
  },
  cardTitle: {
    fontFamily: fontFamilies.display,
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: -0.1,
  },
  body: {
    fontFamily: fontFamilies.body,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  bodySmall: {
    fontFamily: fontFamilies.body,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
  },
  label: {
    fontFamily: fontFamilies.bodySemibold,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.1,
  },
  caption: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.1,
  },
  overline: {
    fontFamily: fontFamilies.bodySemibold,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
} as const
```

---

## 7. Başlık kullanım kuralları

### 7.1 Hero title

Kullanım:

- Home hero
- Garden hero
- Ritual reveal
- Astro result reveal
- Milestone

Kurallar:

- Maksimum 2 satır
- Satır başına ideal 16–24 karakter
- 3 satır yasak
- Tamamı uppercase yasak
- Text glow yasak
- Görsel üzerinde scrim zorunlu olabilir
- Hero title ile aynı viewportta ikinci büyük serif başlık kullanılmaz

### 7.2 Screen title

Kullanım:

- Ekran ana başlığı
- Plant detail
- Journal
- Cycle
- Skin Care
- Astrology

Kurallar:

- Maksimum 2 satır
- 36pt default
- Küçük cihazlarda 32pt minimum
- Navigation bar içinde kullanılmaz
- Uzun Türkçe başlıklarda responsive size uygulanabilir

### 7.3 Section title

Kullanım:

- “Bugünün Bitkisi”
- “Ritüeller”
- “Gökyüzü”
- “Son Kayıtlar”
- “Bahçen”

Kurallar:

- 24pt default
- Maksimum 2 satır
- “View all” gibi action aynı satırda sans-serif olur
- Section title altına dekoratif çizgi zorunlu değildir

### 7.4 Card title

Kullanım:

- Plant card
- Ritual card
- Journal card
- Insight card

Kurallar:

- Maksimum 2 satır
- 20pt
- Fazla uzun metin ellipsis veya layout varyantı ile çözülür
- Card title’ın tamamı uppercase olmaz

---

## 8. Body text rules

### 8.1 Uzun metin

- Maksimum satır uzunluğu: yaklaşık 45–68 karakter
- Line height: font size × 1.45–1.55
- Tam ortalı uzun paragraf yok
- Uzun açıklamalarda serif yok
- Body metin gradient veya glass overlay üzerinde doğrudan kullanılmaz
- 3 paragraftan uzun içerik ayrı okuma surface’ine alınır

### 8.2 Kısa açıklama

Card description:

- 14–16pt
- Maksimum 3–4 satır
- En fazla 240 karakter
- Devamı detail screen’de açılır

### 8.3 Metadata

Metadata örnekleri:

- süre,
- tarih,
- familya,
- kullanılan bölüm,
- cycle phase,
- planetary association,
- mood intensity.

Kurallar:

- 12–13pt
- Inter Medium
- Renk tertiary’den düşük değil
- Sadece ikonla verilmez
- Bir satırda en fazla 3 metadata öğesi

---

## 9. Bilimsel bitki isimleri

### 9.1 Zorunlu görünüm

Önemli bitki kartlarında:

```text
Papatya
Matricaria chamomilla
```

Detay ekranında:

```text
Papatya
Matricaria chamomilla
ASTERACEAE
```

### 9.2 Stil

Yaygın ad:

- Fraunces Medium
- 20–30pt bağlama göre

Bilimsel ad:

- Fraunces Regular Italic veya Inter Regular Italic
- 13–16pt
- `text.scientific`
- İlk harf genus için büyük
- species epithet küçük
- hybrid sign `×` korunur

Familya:

- Inter SemiBold
- 11–12pt
- overline
- uppercase
- letter spacing 0.6–0.8

### 9.3 Kurallar

- Bilimsel ad italik yazılır.
- Familya italik yazılmaz.
- Hybrid işareti normal `x` ile değiştirilmez.
- Bitki türü belirsizse yanlış species adı yazılmaz.
- Sadece genus biliniyorsa `Salvia sp.` gibi doğru format kullanılır.
- Sinonim varsa detail screen’de “Sinonim” alanında gösterilir.
- Kart üzerinde çok küçük veya dekoratif hale getirilmez.
- Bilimsel isim truncated ise erişilebilir label tam metni içerir.

---

## 10. Astroloji metni

### 10.1 Glyph + label

Glyph tek başına veri taşımamalıdır.

Doğru:

```text
☉ Güneş
♌ Aslan
```

Tercih edilen production yaklaşımı:

- SVG glyph
- yanında metin label
- accessibility label

### 10.2 Veri hiyerarşisi

Örnek:

```text
Güneş
Aslan · 15°42′
2. Ev
```

Stil:

- Planet name: label.md
- Sign: body.md
- Degree: body.sm
- House: caption

### 10.3 Astro copy

Şiirsel yorum:

- Fraunces yalnızca kısa başlık veya tek cümle
- Açıklama Inter
- Gerçek veri ile yorum tipografik olarak ayrılır
- Dekoratif başlık veri kadar güçlü gösterilmez

---

## 11. Mood typography

Mood chip:

- Inter Medium
- 13–14pt
- Sentence case
- Emoji zorunlu değil
- Icon + text

Mood result:

- State name: Fraunces 24–30
- Explanation: Inter 14–16
- Intensity: Inter Medium 12–14

Tam uppercase mood label kullanılmaz.

---

## 12. Cycle typography

Cycle phase name:

- Fraunces Medium
- 24–30pt

Day number:

- Fraunces Medium veya Inter SemiBold
- 32–40pt

Medical/health disclaimer:

- Inter Regular
- minimum 13pt
- yüksek kontrast
- italik değil
- decorative surface üzerinde değil

Cycle data, şiirsel copy’den daha net ve güçlü görünmelidir.

---

## 13. Skin Care typography

Skin Care bölümü:

- Daha klinik ve temiz
- Serif yalnızca ekran başlığı ve kısa editorial intro
- Ürün adları, ingredient, routine steps → Inter
- Ingredient names → Inter SemiBold
- Concentration / frequency → Inter Medium
- Safety notes → Inter Regular, minimum 13pt

Örnek:

```text
Niacinamide
Barrier support · Tone balance
5%
```

---

## 14. Journal typography

Journal editöründe:

- Body font: Inter Regular
- Varsayılan size: 17
- Line height: 28
- Long-form writing için serif kullanılmaz
- Placeholder opacity minimum %60
- Selected text ve caret native davranışı korunur

Journal title:

- Fraunces Medium
- 28–32

Prompt:

- Fraunces Regular veya Inter Medium
- Maksimum 2–3 satır

Journal içinde kullanıcıya script font seçeneği V1’de sunulmaz.

---

## 15. Button typography

### Primary button

- Inter SemiBold
- 15–16pt
- Line height 20
- Sentence case
- Maksimum 26 karakter
- Tam uppercase yok

### Secondary button

- Inter Medium
- 14–15pt

### Tertiary / text action

- Inter Medium
- 14pt
- Underline yalnızca gerçek linklerde

### Button restrictions

- Serif button label yok
- Italic yok
- 2 satırlı primary CTA yok
- Icon varsa label’dan 8px uzak
- Decorative sparkle metin karakteri olarak eklenmez; gerekiyorsa icon olur

---

## 16. Navigation typography

Bottom navigation:

- Inter Medium
- 11–12pt
- Max 1 line
- Active label visible
- Inactive labels V1’de görünür kalır
- Glyph label’ın yerini almaz

Tab header:

- Inter SemiBold
- 14pt

Navigation title:

- Inter SemiBold veya Fraunces Medium
- Ekran tipine göre
- Native header içinde 20–22pt üstü kullanılmaz

---

## 17. Chip and tag typography

Chip:

- Inter Medium
- 12–14pt
- Tek satır
- Sentence case
- Max 18–22 karakter

Tag:

- Inter Medium
- 11–12pt

Scientific / safety tag:

- Inter SemiBold
- minimum 12pt

Tag içinde:

- 2’den fazla icon yok
- glyph tek başına yok
- çok sık letter spacing yok

---

## 18. Number typography

### Metric numbers

Örnek:

- cycle day
- streak
- completed rituals
- water amount
- mood intensity

Kullanım:

- Inter SemiBold
- tabular numerals mümkünse açık
- 20–32pt

### Editorial numbers

Hero statistic veya ceremonial result:

- Fraunces Medium
- 32–44pt

### Degree and time

- Astro degree → Inter Medium
- Time → Inter Medium
- Date → Inter Regular
- Decimal separator yerel ayara bağlı
- Türkçe locale ile gün/ay formatı doğru uygulanır

---

## 19. Turkish language rules

### 19.1 Karakter desteği

Aşağıdaki karakterler test edilmelidir:

```text
Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü
```

### 19.2 Büyük harf dönüşümü

JavaScript `toUpperCase()` yerine locale-aware yaklaşım:

```ts
text.toLocaleUpperCase('tr-TR')
```

Aynı şekilde:

```ts
text.toLocaleLowerCase('tr-TR')
```

### 19.3 Satır kırılımı

Türkçe kelimelerde:

- keyfi hyphenation yok
- kısa başlıklarda kelime bölünmez
- butonlarda kırılım yok
- bilimsel adlarda genus ve species gereksiz ayrılmaz

### 19.4 Noktalama

- Türkçe tırnak: “ ”
- Apostrof doğru kullanılır
- Derece: `°`
- Dakika: `′`
- Hybrid: `×`
- En dash: `–`
- Bullet: `•`

---

## 20. Dynamic Type and accessibility

### 20.1 Font scaling

React Native:

```tsx
<Text allowFontScaling maxFontSizeMultiplier={1.4} />
```

Varsayılan:

- body: 1.4
- caption: 1.3
- navigation: 1.25
- hero title: 1.2
- button: 1.25

### 20.2 Large text behavior

Büyük fontta:

- Card height sabit tutulmaz
- Text clip edilmez
- Horizontal chip list scroll olabilir
- CTA minimum 2 satır yerine genişler; primary CTA iki satır olmadan full width’e geçer
- Bottom navigation label gerekirse accessible alternate layout kullanır
- Hero görsel alanı küçülebilir

### 20.3 Reduce transparency

Reduce Transparency durumunda:

- Metin opak yüzeye taşınır
- Gradient üstü text kullanılmaz
- Scientific label kontrastı artırılır

---

## 21. Font loading strategy

### 21.1 Uygulama başlangıcı

```ts
const [fontsLoaded, fontError] = useFonts({
  Fraunces_400Regular,
  Fraunces_500Medium,
  Fraunces_600SemiBold,
  Fraunces_400Regular_Italic,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
})
```

### 21.2 Splash behavior

- Fontlar yüklenmeden ana UI gösterilmez
- Splash gereksiz uzatılmaz
- Font error loglanır
- Fallback ile açılma mümkündür
- Layout shift kabul edilmez

### 21.3 Font asset policy

- Font dosyaları repoya eklenebilir veya Expo Google Fonts kullanılabilir
- Lisans metni `THIRD_PARTY_NOTICES.md` içinde tutulmalıdır
- Font dosyaları kullanıcıya dağıtılmaz
- Kullanılmayan weight bundle’a dahil edilmez

---

## 22. Performance rules

- Maksimum 8 font asset
- Variable font V1’de zorunlu değil
- Font preload uygulama açılışında yapılır
- Runtime font switch yok
- Her component inline font config üretmez
- Typography tokenları merkezi kullanılır
- Text shadow kullanılmaz
- Animated text gradient yok
- Large list’lerde aynı Text component variant sistemi kullanılır

---

## 23. Component contract

Önerilen API:

```ts
type TextVariant =
  | 'heroTitle'
  | 'screenTitle'
  | 'sectionTitle'
  | 'cardTitle'
  | 'body'
  | 'bodySmall'
  | 'label'
  | 'caption'
  | 'overline'
  | 'scientificName'
  | 'stat'
  | 'button'

type AppTextProps = {
  variant: TextVariant
  color?: keyof typeof textColors
  align?: 'left' | 'center' | 'right'
  numberOfLines?: number
  italic?: boolean
  allowFontScaling?: boolean
  children: React.ReactNode
}
```

Kullanım:

```tsx
<AppText variant="cardTitle">
  Papatya
</AppText>

<AppText variant="scientificName">
  Matricaria chamomilla
</AppText>
```

---

## 24. Forbidden patterns

Aşağıdakiler yasaktır:

- Script font
- Decorative handwritten body font
- Her yerde serif
- Her yerde Inter
- Çok ince light font
- Serif buton
- Glow text
- Gradient text
- Tam uppercase uzun başlık
- 10pt kritik metadata
- Bilimsel ismi okunamaz küçük göstermek
- İtalik body paragrafları
- Kart başlıklarını 3–4 satır bırakmak
- Her modülde farklı font
- Random font-size
- Inline font family
- Android ve iOS’ta farklı hiyerarşi
- Font yüklenmeden layout render etmek
- Çocuk kitabı estetiği yaratan fazla yuvarlak ve büyük dekoratif yazı

---

## 25. Visual QA checklist

Her ekran için:

- Başlık maksimum iki satır mı?
- Body metin Inter mi?
- Editorial serif yalnızca gerekli yerde mi?
- Bilimsel ad doğru italik mi?
- Familya uppercase ve okunur mu?
- Türkçe karakterlerde bozulma var mı?
- Font scaling ile clip oluyor mu?
- Text contrast yeterli mi?
- Metin üzerine glow uygulanmış mı?
- CTA tek satır mı?
- Caption 12pt altında mı?
- Navigation label okunuyor mu?
- Astro data ile yorum tipografik olarak ayrılıyor mu?
- Journal uzun yazı için rahat mı?
- Skin/Cycle sağlık bilgisi dekoratif görünmüyor mu?

---

## 26. Claude Code bağlayıcı özeti

Claude Code:

1. `Fraunces` ve `Inter` dışında yeni font eklememelidir.
2. Tüm tipografi değerlerini merkezi tokenlardan almalıdır.
3. Inline `fontSize`, `lineHeight`, `fontFamily` kullanımını minimize etmelidir.
4. Bilimsel adlar için `scientificName` variantı oluşturmalıdır.
5. Türkçe locale-aware case dönüşümü kullanmalıdır.
6. Font loading tamamlanmadan UI’ı görünür yapmamalıdır.
7. Dynamic Type desteğini bozacak sabit yükseklik kullanmamalıdır.
8. Serif fontu form, navigation, chip ve uzun body metinde kullanmamalıdır.
9. Glow veya gradient text üretmemelidir.
10. Yeni typography variantı eklemeden önce bu belgeyi güncellemelidir.

---

## 27. Kilitlenen karar

V1 tipografi sistemi:

- **Fraunces** — display/editorial
- **Inter** — body/UI
- Bilimsel adlarda kontrollü italic
- Türkçe locale desteği
- Dynamic Type uyumu
- Merkezi variant sistemi

olarak kilitlenmiştir.
