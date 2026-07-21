# 04 — SURFACE, GLASS, GLOW & ELEVATION SYSTEM

**Belge durumu:** CANONICAL SUPPORTING SPECIFICATION  
**Bağlı belgeler:**  
- `00_VISUAL_SYSTEM_CANONICAL.md`
- `01_VISUAL_DIRECTION.md`
- `02_COLOR_AND_GRADIENT_TOKENS.md`
- `03_TYPOGRAPHY_SYSTEM.md`

**Proje:** Wellness Mobile App  
**Sürüm:** 1.0  
**Tarih:** 2026-07-20  
**Hedef ortam:** React Native + Expo + TypeScript  
**Durum:** V1 için kilitli

---

## 1. Amaç

Bu belge, `Luminous Botanical Cosmos` görsel sisteminin:

- surface,
- card,
- sheet,
- glass,
- blur,
- border,
- radius,
- shadow,
- glow,
- elevation,
- scrim,
- modal,
- dusk/night surface

kararlarını bağlayıcı biçimde tanımlar.

Amaç:

- uygulamanın generic pastel kart yığını gibi görünmesini önlemek,
- her yüzeyin aynı cam panel olmamasını sağlamak,
- soft glow hissini korurken çocuk kitabı estetiğini engellemek,
- akşam koyulaşan atmosferde okunabilirliği korumak,
- iOS ve Android performansını kontrol etmek,
- Claude Code’un her karta rastgele blur, shadow veya gradient eklemesini engellemek.

Bu belgeye uymayan yüzey ve elevation stilleri production sistemine eklenemez.

---

## 2. Kanonik materyal dili

Uygulamanın materyal sistemi şu dört karakterin dengesi üzerine kuruludur:

1. **Mineral:** temiz, mat, nötr, güvenilir
2. **Botanical:** doğal, dokulu, canlı ama sakin
3. **Celestial:** hafif ışıltılı, katmanlı, atmosferik
4. **Editorial:** rafine, kontrollü, düzenli

Ana yön:

> Düz beyaz kartlar ile yoğun cam paneller arasında kontrollü bir hiyerarşi.

Kullanılmayacak yönler:

- her kartta blur,
- her yüzeyde pembe-lila gradient,
- güçlü neon glow,
- oyuncak gibi kabarık kartlar,
- fazla yuvarlak, baloncuk benzeri yüzeyler,
- fazla shadow,
- text üzerinde glow,
- koyu siyah cam paneller,
- her ekranda kristal / sparkle border.

---

## 3. Surface taxonomy

V1 yüzey sistemi altı ana sınıfa ayrılır:

1. `base`
2. `quiet`
3. `card`
4. `elevated`
5. `glass`
6. `ceremonial`

### 3.1 Base surface

Kullanım:

- ekran ana zemini,
- uzun okuma,
- form,
- ayarlar,
- journal editörü,
- bilimsel içerik.

Özellik:

- blur yok,
- glow yok,
- düz nötr veya çok hafif tint,
- yüksek okunabilirlik.

### 3.2 Quiet surface

Kullanım:

- secondary section,
- grouped content,
- low-priority summary,
- muted container.

Özellik:

- hafif tinted,
- çok az border,
- shadow yok veya minimum.

### 3.3 Card surface

Kullanım:

- plant card,
- ritual card,
- insight card,
- mood card,
- journal preview,
- skin routine step.

Özellik:

- opak,
- okunaklı,
- medium radius,
- yumuşak border,
- sınırlı shadow.

### 3.4 Elevated surface

Kullanım:

- modal,
- floating action,
- selected panel,
- active detail card,
- sticky player/control.

Özellik:

- daha güçlü shadow,
- daha belirgin separation,
- yine de glow yerine elevation.

### 3.5 Glass surface

Kullanım:

- hero overlay,
- atmospheric summary,
- celestial insight,
- ambient nav island,
- ceremonial overlay.

Özellik:

- kontrollü blur,
- opaklık yeterli,
- body text güvenli,
- sınırlı sayıda.

### 3.6 Ceremonial surface

Kullanım:

- ritual start,
- ritual complete,
- astrology reveal,
- milestone,
- daily plant reveal.

Özellik:

- geçici,
- daha güçlü ışık,
- kısa süreli,
- sürekli görünmez.

---

## 4. Core surface tokens

### 4.1 Light surfaces

| Token | Value | Kullanım |
|---|---:|---|
| `surface.base.light` | `#F8F5EF` | Ana light background |
| `surface.base.alt` | `#FCFBF8` | Alternatif açık zemin |
| `surface.quiet.light` | `#F3EFE7` | Sessiz section |
| `surface.card.light` | `#FCFBF8` | Standard card |
| `surface.card.tint` | `#F4F1EA` | Tinted card |
| `surface.elevated.light` | `#FFFFFF` | Modal / elevated card |
| `surface.parchment` | `#FBF7EE` | Journal / editorial |
| `surface.scientific` | `#F5F6F2` | Plant / data info |
| `surface.skin` | `#F8F8F5` | Skin care |
| `surface.cycle` | `#F7F1ED` | Cycle |
| `surface.astrology` | `#F2F5F7` | Astrology data |

### 4.2 Dusk surfaces

| Token | Value |
|---|---:|
| `surface.base.dusk` | `#E7E6EA` |
| `surface.quiet.dusk` | `#DDDCE2` |
| `surface.card.dusk` | `#F1EEF1` |
| `surface.elevated.dusk` | `#F7F4F6` |
| `surface.glass.dusk` | `rgba(244,241,245,0.78)` |

### 4.3 Night surfaces

| Token | Value |
|---|---:|
| `surface.base.night` | `#1B2430` |
| `surface.quiet.night` | `#222D38` |
| `surface.card.night` | `#26313D` |
| `surface.elevated.night` | `#303C48` |
| `surface.glass.night` | `rgba(38,49,61,0.82)` |
| `surface.reading.night` | `#EDE9E1` |
| `surface.readingText.night` | `#302D2A` |

### 4.4 Night reading rule

Aşağıdaki ekranlar gece tamamen koyu olmak zorunda değildir:

- Journal
- Legal
- Privacy
- Long-form articles
- Forms
- Plant scientific information
- Skin care safety
- Cycle health notes

Bu alanlar `surface.reading.night` kullanabilir.

---

## 5. Glass levels

Glassmorphism dört kontrollü seviyeye ayrılır.

### Glass 0 — No Glass

```ts
{
  backgroundColor: '#FCFBF8',
  blur: 0,
  opacity: 1,
}
```

Kullanım:

- listeler,
- long-form content,
- forms,
- settings,
- scientific data.

### Glass 1 — Mist

```ts
{
  backgroundColor: 'rgba(252,251,248,0.88)',
  blur: 8,
  borderColor: 'rgba(255,255,255,0.54)',
}
```

Kullanım:

- hero metadata,
- small floating chip group,
- subtle overlay.

### Glass 2 — Frost

```ts
{
  backgroundColor: 'rgba(252,251,248,0.78)',
  blur: 16,
  borderColor: 'rgba(255,255,255,0.62)',
}
```

Kullanım:

- celestial insight panel,
- garden quick actions,
- ritual prep summary,
- selected atmospheric card.

### Glass 3 — Deep Frost

```ts
{
  backgroundColor: 'rgba(248,245,239,0.72)',
  blur: 24,
  borderColor: 'rgba(255,255,255,0.72)',
}
```

Kullanım:

- ceremonial reveal overlay,
- one-off hero overlay.

### Glass 4 — Heavy Glass

V1 production’da default olarak kullanılmaz.

Yalnızca:

- design exploration,
- static mockup,
- çok sınırlı ceremonial use

için düşünülebilir.

### 5.1 Glass usage limits

Bir ekranda:

- aynı anda maksimum 2 aktif gerçek blur surface,
- scroll listesinde gerçek blur kullanılmaz,
- listelerde pre-tinted surface kullanılır,
- nested glass yasaktır,
- glass içinde glass yasaktır,
- body text için opacity minimum %78,
- dark glass için opacity minimum %82.

---

## 6. Platform implementation

### 6.1 iOS

Tercih:

- `expo-blur`
- `BlurView`
- intensity token mapping
- animated blur sınırlı

Önerilen mapping:

| Level | BlurView intensity |
|---|---:|
| Glass 1 | 18 |
| Glass 2 | 32 |
| Glass 3 | 48 |

### 6.2 Android

Android’de:

- gerçek blur yalnızca desteklenen ve performans kabulü geçen alanlarda,
- fallback olarak pre-tinted translucent surface,
- büyük scroll listelerinde blur yok,
- low-end device mode’da blur disable edilebilir.

Fallback örneği:

```ts
const androidGlassFallback = {
  backgroundColor: 'rgba(248,245,239,0.94)',
  borderColor: 'rgba(255,255,255,0.56)',
}
```

### 6.3 Reduce transparency

Reduce Transparency aktifse:

- Glass 1 → `surface.card.light`
- Glass 2 → `surface.elevated.light`
- Glass 3 → `surface.elevated.light`
- dark glass → `surface.elevated.night`
- blur tamamen kaldırılır.

---

## 7. Border system

### 7.1 Border tokens

| Token | Value |
|---|---|
| `border.hairline.light` | `rgba(46,43,41,0.08)` |
| `border.soft.light` | `rgba(46,43,41,0.12)` |
| `border.medium.light` | `rgba(46,43,41,0.18)` |
| `border.glass.light` | `rgba(255,255,255,0.62)` |
| `border.selected.light` | `rgba(82,124,137,0.58)` |
| `border.focus.light` | `#527C89` |
| `border.hairline.dark` | `rgba(255,255,255,0.08)` |
| `border.soft.dark` | `rgba(255,255,255,0.14)` |
| `border.medium.dark` | `rgba(255,255,255,0.22)` |
| `border.glass.dark` | `rgba(255,255,255,0.18)` |
| `border.selected.dark` | `rgba(167,201,210,0.68)` |
| `border.focus.dark` | `#A7C9D2` |

### 7.2 Border widths

```ts
export const borderWidths = {
  none: 0,
  hairline: 0.5,
  thin: 1,
  medium: 1.5,
  focus: 2,
} as const
```

### 7.3 Border rules

- Standard card: 1px soft border
- Glass: 1px glass border
- Focus: 2px
- Decorative gold hairline: maximum 1px
- Aynı kartta hem strong border hem strong shadow kullanılmaz
- Gradient border V1’de yok
- Dashed border yalnızca empty/upload state için
- Celestial orbit çizgileri component border sayılmaz

---

## 8. Corner radius system

### 8.1 Tokens

| Token | Value | Kullanım |
|---|---:|---|
| `radius.xs` | 6 | Micro badge |
| `radius.sm` | 10 | Input inner, compact control |
| `radius.md` | 12 | Chip, small card |
| `radius.lg` | 16 | Standard card |
| `radius.xl` | 20 | Feature card |
| `radius.2xl` | 24 | Hero / modal |
| `radius.3xl` | 28 | Rare immersive container |
| `radius.pill` | 999 | Chip / CTA / segmented control |

### 8.2 Radius rules

- Standard card: 16
- Feature card: 20
- Hero: 24
- Modal/bottom sheet: 24 top corners
- Button: 14 veya pill
- Input: 12
- Chip: pill
- Her şey 24–32 radius olmaz
- Aynı ekran içinde ideal maksimum 3 ana radius
- Childlike bubble look yaratan aşırı radius yasaktır

---

## 9. Shadow system

### 9.1 Light shadows

```ts
export const lightShadows = {
  none: {
    shadowOpacity: 0,
  },
  soft: {
    shadowColor: '#2E2B29',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  card: {
    shadowColor: '#2E2B29',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.10,
    shadowRadius: 20,
    elevation: 4,
  },
  elevated: {
    shadowColor: '#20283A',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.14,
    shadowRadius: 30,
    elevation: 8,
  },
} as const
```

### 9.2 Dark shadows

```ts
export const darkShadows = {
  soft: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 3,
  },
  elevated: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.26,
    shadowRadius: 32,
    elevation: 9,
  },
} as const
```

### 9.3 Shadow rules

- List item’larında shadow yok
- Standard card yalnızca `soft`
- Feature card en fazla `card`
- Modal `elevated`
- Aynı ekranda tüm kartlar elevated olmaz
- Shadow opacity %14’ü light theme’de geçmez
- Android elevation görünümü QA ile kontrol edilir
- Shadow, border yerine kullanılmaz
- Shadow renkleri modül accent renginden türetilmez

---

## 10. Glow system

Glow, uygulamanın kimliğinde vardır fakat ana elevation yöntemi değildir.

### 10.1 Glow taxonomy

1. `ambient`
2. `selection`
3. `celestial`
4. `ceremonial`

### 10.2 Tokens

```ts
export const glows = {
  ambientWarm: {
    color: 'rgba(213,161,60,0.18)',
    radius: 24,
  },
  ambientCool: {
    color: 'rgba(127,166,193,0.16)',
    radius: 28,
  },
  botanical: {
    color: 'rgba(127,154,118,0.16)',
    radius: 22,
  },
  selection: {
    color: 'rgba(82,124,137,0.20)',
    radius: 18,
  },
  celestial: {
    color: 'rgba(126,109,154,0.18)',
    radius: 30,
  },
  ceremonial: {
    color: 'rgba(203,167,93,0.28)',
    radius: 42,
  },
} as const
```

### 10.3 Glow rules

Glow:

- yalnızca selected, active, celestial veya ceremonial durumda,
- metnin arkasında değil,
- kartın tamamını neon hale getirmeden,
- kısa süreli veya düşük opaklıkta,
- en fazla iki glow source aynı viewportta

kullanılır.

### 10.4 Forbidden glow

- Her aktif chip’te glow
- Her kartta glow
- Button text glow
- Zodiac glyph etrafında sürekli neon
- Plant image etrafında güçlü aura
- Error state glow
- Long-form reading surface glow

---

## 11. Inner light and highlight

Soft ışıltı hissi yalnızca dış glow ile verilmez.

Kullanılabilecek yöntemler:

- subtle top highlight,
- inner border,
- radial light wash,
- image light bloom,
- local specular point,
- small iridescent edge.

### 11.1 Inner highlight token

```ts
export const innerHighlights = {
  light: 'rgba(255,255,255,0.56)',
  soft: 'rgba(255,255,255,0.32)',
  dark: 'rgba(255,255,255,0.10)',
  gold: 'rgba(233,216,168,0.30)',
} as const
```

### 11.2 Rule

Inner highlight:

- 1px veya yumuşak radial wash,
- tüm yüzeye parlak plastik görünümü vermez,
- especially glass and hero surfaces,
- standard scientific card’da kullanılmaz.

---

## 12. Surface recipes

### 12.1 Standard card

```ts
{
  backgroundColor: '#FCFBF8',
  borderColor: 'rgba(46,43,41,0.10)',
  borderWidth: 1,
  borderRadius: 16,
  ...lightShadows.soft,
}
```

### 12.2 Quiet card

```ts
{
  backgroundColor: '#F3EFE7',
  borderColor: 'rgba(46,43,41,0.06)',
  borderWidth: 1,
  borderRadius: 16,
}
```

### 12.3 Scientific plant card

```ts
{
  backgroundColor: '#F5F6F2',
  borderColor: 'rgba(76,81,74,0.14)',
  borderWidth: 1,
  borderRadius: 16,
}
```

### 12.4 Journal card

```ts
{
  backgroundColor: '#FBF7EE',
  borderColor: 'rgba(76,64,54,0.10)',
  borderWidth: 1,
  borderRadius: 16,
}
```

### 12.5 Hero glass

```ts
{
  backgroundColor: 'rgba(252,251,248,0.78)',
  borderColor: 'rgba(255,255,255,0.62)',
  borderWidth: 1,
  borderRadius: 24,
  blur: 16,
  ...lightShadows.soft,
}
```

### 12.6 Night card

```ts
{
  backgroundColor: '#26313D',
  borderColor: 'rgba(255,255,255,0.12)',
  borderWidth: 1,
  borderRadius: 16,
  ...darkShadows.soft,
}
```

### 12.7 Selected card

```ts
{
  backgroundColor: '#FCFBF8',
  borderColor: 'rgba(82,124,137,0.58)',
  borderWidth: 1.5,
  borderRadius: 16,
  ...lightShadows.card,
}
```

---

## 13. Component surface mapping

### 13.1 Home

- hero → hero glass veya image + scrim
- daily plant → card
- mood chips → quiet/tint
- insight → glass 1
- slot ladder → no blur, fixed surface

### 13.2 Garden

- garden canvas → base + layered image
- quick actions → glass 1
- plant status → quiet card
- collectible reveal → ceremonial
- inventory list → standard card, no blur

### 13.3 Plants

- library list → flat/quiet cards
- plant detail hero → image + solid metadata surface
- scientific sections → scientific card
- safety warning → semantic surface
- symbolism/lore → parchment or tinted editorial surface

### 13.4 Astrology

- chart canvas → base astrology surface
- planet details → quiet/elevated
- selected planet → selected border + subtle glow
- glyph grid → no shadow
- daily celestial insight → glass 1

### 13.5 Skin Care

- routine step → card
- ingredient detail → scientific/skin surface
- safety note → semantic info/warning surface
- skin check-in → quiet
- no glass in dense routine list

### 13.6 Cycle

- cycle ring → base surface
- phase summary → card
- symptom log → quiet
- health disclaimer → solid reading surface
- phase reveal → limited ceremonial

### 13.7 Mood

- mood wheel → base or hero surface
- selected emotion → selected border
- reflection prompt → parchment/quiet
- recent check-ins → flat list
- success moment → short glow

### 13.8 Journal

- editor → base parchment
- entry preview → card
- prompt → quiet editorial
- no frosted glass behind writing
- night reading can stay parchment-light

### 13.9 Rituals

- ritual hero → image + scrim
- preparation → glass 1
- steps → solid card
- active ritual player → elevated
- completion → ceremonial surface, then settles

---

## 14. Bottom navigation surface

### 14.1 Default

Bottom navigation:

- full-width or slightly inset,
- solid/elevated surface,
- glass optional only Home/Garden,
- content readability first.

Default light:

```ts
{
  backgroundColor: 'rgba(252,251,248,0.94)',
  borderTopColor: 'rgba(46,43,41,0.08)',
  borderTopWidth: 1,
}
```

Night:

```ts
{
  backgroundColor: 'rgba(38,49,61,0.94)',
  borderTopColor: 'rgba(255,255,255,0.10)',
  borderTopWidth: 1,
}
```

### 14.2 Rules

- Floating bubble nav V1 default değil
- Active tab glow yerine tint + label emphasis
- Nav altında içerik görünse bile contrast korunur
- Blur düşük cihazda kaldırılabilir
- Safe area tam desteklenir

---

## 15. Modal and bottom sheet

### 15.1 Modal

- elevated surface
- radius 24
- strong scrim
- no heavy glow
- max width tablet için sınırlı

### 15.2 Bottom sheet

```ts
{
  backgroundColor: '#FCFBF8',
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  borderColor: 'rgba(46,43,41,0.08)',
  borderWidth: 1,
}
```

Night:

```ts
{
  backgroundColor: '#303C48',
  borderColor: 'rgba(255,255,255,0.12)',
}
```

### 15.3 Sheet rules

- Drag handle muted
- Sheet içinde nested glass yok
- Form sheet solid
- Ritual ceremonial sheet limited glow
- Sheet arkasında scrim minimum %42

---

## 16. Scrim system

### Light backdrop scrims

- `backdrop.light.soft = rgba(29,27,26,0.16)`
- `backdrop.light.medium = rgba(29,27,26,0.28)`
- `backdrop.light.strong = rgba(29,27,26,0.42)`

### Dark backdrop scrims

- `backdrop.dark.soft = rgba(0,0,0,0.24)`
- `backdrop.dark.medium = rgba(0,0,0,0.42)`
- `backdrop.dark.strong = rgba(0,0,0,0.58)`

Kullanım:

- modal,
- bottom sheet,
- image text contrast,
- ritual focus mode,
- ceremonial reveal.

---

## 17. Texture system

### 17.1 Allowed textures

- ultra-light paper grain
- mineral wash
- botanical shadow
- subtle water refraction
- soft atmospheric noise
- pressed botanical imprint

### 17.2 Texture opacity

- background grain: %1–3
- card texture: %0–2
- hero atmosphere: %3–8
- parchment: %2–4

### 17.3 Restrictions

- visible film grain yok
- repeating pattern yok
- yıldız sticker pattern yok
- glitter texture yok
- botanical wallpaper yok
- texture body text altında görünür olmamalı

---

## 18. State styling

### 18.1 Default

- standard surface
- soft border
- no glow

### 18.2 Pressed

- scale 0.985–0.99
- surface tint darkens/lightens %2–4
- shadow decreases
- no flash

### 18.3 Selected

- 1.5px selected border
- subtle module tint
- optional selection glow
- label/icon emphasis

### 18.4 Disabled

- neutral 100/200 surface
- reduced contrast
- no shadow
- no glow
- label remains readable

### 18.5 Focus

- 2px focus outline
- no reliance on glow
- outline outside component bounds
- contrast minimum 3:1

### 18.6 Error

- semantic error border
- error background tint
- icon + message
- no red glow

### 18.7 Success

- semantic success tint
- short haptic
- optional micro botanical motion
- no confetti default

---

## 19. Motion interaction with surfaces

- Shadow interpolation allowed
- Glow pulse only M2/M3
- Blur animation avoided
- Surface opacity transition preferred
- Glass surface reveal max 300ms
- Modal elevation transition max 360ms
- Ceremonial glow max 6 seconds then settles
- Reduce Motion: no scale pulse, no blur animation, static state

---

## 20. Performance budget

### 20.1 Per screen

- max 2 real blur surfaces
- max 2 live glow layers
- max 1 animated gradient
- max 1 large shadowed hero
- no shadow on repeated list rows
- no nested transparency stack deeper than 2

### 20.2 Low-end fallback

Low-end mode:

- real blur → opaque tint
- large shadow radius reduced
- ambient glow disabled
- texture removed
- animated gradient static
- image bloom removed

### 20.3 Rendering rules

- Avoid expensive alpha overdraw
- Avoid full-screen semi-transparent overlays stacked together
- Use rasterized static atmospheric assets where appropriate
- Measure Android elevation differences
- Avoid per-frame blur updates
- Avoid SVG filters unsupported by RN

---

## 21. TypeScript tokens

```ts
export const radii = {
  xs: 6,
  sm: 10,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  pill: 999,
} as const

export const borders = {
  light: {
    hairline: 'rgba(46,43,41,0.08)',
    soft: 'rgba(46,43,41,0.12)',
    medium: 'rgba(46,43,41,0.18)',
    glass: 'rgba(255,255,255,0.62)',
    selected: 'rgba(82,124,137,0.58)',
    focus: '#527C89',
  },
  dark: {
    hairline: 'rgba(255,255,255,0.08)',
    soft: 'rgba(255,255,255,0.14)',
    medium: 'rgba(255,255,255,0.22)',
    glass: 'rgba(255,255,255,0.18)',
    selected: 'rgba(167,201,210,0.68)',
    focus: '#A7C9D2',
  },
} as const

export const glassLevels = {
  none: {
    blur: 0,
    backgroundColor: '#FCFBF8',
  },
  mist: {
    blur: 8,
    backgroundColor: 'rgba(252,251,248,0.88)',
  },
  frost: {
    blur: 16,
    backgroundColor: 'rgba(252,251,248,0.78)',
  },
  deepFrost: {
    blur: 24,
    backgroundColor: 'rgba(248,245,239,0.72)',
  },
} as const
```

---

## 22. Component API contract

Önerilen surface component:

```ts
type SurfaceVariant =
  | 'base'
  | 'quiet'
  | 'card'
  | 'elevated'
  | 'glassMist'
  | 'glassFrost'
  | 'scientific'
  | 'parchment'
  | 'skin'
  | 'cycle'
  | 'astrology'
  | 'nightCard'
  | 'ceremonial'

type SurfaceProps = {
  variant: SurfaceVariant
  radius?: keyof typeof radii
  selected?: boolean
  focused?: boolean
  disabled?: boolean
  reduceTransparency?: boolean
  children: React.ReactNode
}
```

Örnek:

```tsx
<Surface variant="scientific" radius="lg">
  <PlantTaxonomy />
</Surface>
```

---

## 23. Forbidden patterns

Aşağıdakiler yasaktır:

- Her karta glass uygulamak
- Nested blur
- Her aktif state’e glow
- Text shadow
- Neon border
- Gradient border
- Bubble-like 32px radius kartlar
- Tüm kartlarda büyük shadow
- Scroll listesinde blur
- Dark theme’de saf siyah yüzey
- Journal editöründe cam yüzey
- Scientific content’te glow
- Error state’te kırmızı aura
- Peri defteri gibi sparkle border
- Her kartın farklı pastel tint kullanması
- Tek ekranda üçten fazla ana surface stili
- Utility ekranlarda ceremonial surface
- Android performansını test etmeden iOS blur’unu kopyalamak

---

## 24. Visual QA checklist

Her ekran için:

- Gerçek blur sayısı 2’yi geçiyor mu?
- Kartlar birbirinden sadece renk ile mi ayrılıyor?
- Tüm kartlar aynı derecede elevated mı?
- Radius sistemi tutarlı mı?
- Aynı ekranda üçten fazla ana radius var mı?
- Metin cam yüzeyde yeterince okunuyor mu?
- Glow metnin arkasında mı?
- Liste item’larında gereksiz shadow var mı?
- Night yüzey saf siyah mı?
- Journal ve scientific content sakin yüzeyde mi?
- Selected state border + label ile anlaşılır mı?
- Reduce Transparency fallback’i var mı?
- Android low-end fallback’i var mı?
- Çocuk kitabı / sticker görünümü oluşuyor mu?
- Ceremonial surface sürekli görünür mü?

---

## 25. Claude Code bağlayıcı özeti

Claude Code:

1. Yüzeyleri `Surface` component ve merkezi tokenlardan üretmelidir.
2. Her karta glass veya shadow eklememelidir.
3. Gerçek blur kullanımını ekran başına maksimum 2 ile sınırlandırmalıdır.
4. Android’de tint fallback sağlamalıdır.
5. Reduce Transparency durumunda blur’u kaldırmalıdır.
6. Surface, border, radius, shadow ve glow değerlerini inline üretmemelidir.
7. Night mode’da saf siyah kullanmamalıdır.
8. Journal, forms ve scientific content’te solid/readable surface kullanmalıdır.
9. Selected/focus/error/success state’lerini bu sözleşmeye göre uygulamalıdır.
10. Yeni surface variant eklemeden önce bu belgeyi güncellemelidir.

---

## 26. Kilitlenen karar

V1 materyal sistemi:

- solid mineral surfaces,
- controlled quiet cards,
- limited glass,
- soft elevation,
- restrained glow,
- adaptive dusk/night surfaces,
- performance fallback

olarak kilitlenmiştir.
