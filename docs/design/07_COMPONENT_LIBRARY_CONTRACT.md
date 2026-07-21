# 07 — COMPONENT LIBRARY CONTRACT

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli

## 1. Amaç

Bu belge, uygulamanın tekrar kullanılabilir component ailesini, varyantlarını ve sınırlarını tanımlar.

## 2. Core primitives

Zorunlu primitive’ler:

- `AppText`
- `Surface`
- `Stack`
- `Inline`
- `Spacer`
- `Icon`
- `Glyph`
- `Divider`
- `Scrim`
- `PressableScale`
- `SkeletonBlock`

## 3. Core components

### Navigation

- `AppHeader`
- `BottomTabs`
- `TabItem`
- `BackButton`
- `HeaderAction`

### Content

- `SectionHeader`
- `HeroCard`
- `FeatureCard`
- `PlantCard`
- `PlantListItem`
- `AstroInsightCard`
- `PlanetChip`
- `ZodiacChip`
- `MoonPhaseChip`
- `RitualCard`
- `JournalCard`
- `MoodChip`
- `CyclePhaseCard`
- `SkinIngredientCard`
- `StatBadge`

### Controls

- `PrimaryButton`
- `SecondaryButton`
- `TertiaryButton`
- `IconButton`
- `TextField`
- `TextArea`
- `SearchField`
- `FilterChip`
- `SegmentedControl`
- `Slider`
- `Switch`
- `Checkbox`

### Feedback

- `Toast`
- `InlineNotice`
- `ErrorState`
- `EmptyState`
- `LoadingState`
- `SkeletonCard`
- `SuccessMoment`

### Overlay

- `Modal`
- `BottomSheet`
- `ActionSheet`
- `Tooltip`

## 4. Component density

- Compact: dense metadata
- Standard: default
- Comfortable: hero/editorial
- Immersive: limited hero/ceremonial

Aynı component random padding kullanamaz.

## 5. Spacing rules

4pt base:

```ts
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
} as const
```

## 6. PlantCard contract

Zorunlu alanlar:

- common name
- scientific name
- image/placeholder
- optional family
- optional tags
- optional toxicity badge
- save action

Varyantlar:

- `grid`
- `list`
- `feature`
- `compact`

Scientific name hiçbir varyantta tamamen gizlenmez; compact varyantta accessibility label’da tam görünür.

## 7. Astro components

### PlanetChip

- glyph
- planet label
- central color token
- selected state

### ZodiacChip

- glyph
- sign label
- optional element mode
- selected state

### AstroInsightCard

- title
- actual data
- interpretation
- source timestamp
- decorative/data distinction

## 8. MoodChip

- icon
- label
- semantic color
- selected state
- accessible label

Emoji zorunlu değildir.

## 9. Buttons

### Primary

- yüksek önem
- tek satır
- min height 48
- max one per viewport section

### Secondary

- outline/tint
- min height 44

### Tertiary

- text action
- min touch target 44

## 10. Inputs

- min height 48
- label her zaman görünür
- placeholder label yerine geçmez
- error state icon + text
- night contrast
- Dynamic Type ile genişleme

## 11. Card limits

- Aynı ekranda ideal 2–3 card family
- Her kart glass olmaz
- Her kart gradient olmaz
- Her kart ayrı radius kullanmaz
- Card title max 2 satır
- Description max 4 satır
- Repeated list row shadow içermez

## 12. Skeletons

- Final component ile aynı fixed block height
- Layout shift yok
- Shimmer düşük opaklık
- Reduce Motion’da pulse/shimmer yok
- Hero skeleton ayrı
- List skeleton ayrı

## 13. Empty states

- Yetişkin, sakin, motive edici
- Tek küçük illustration
- Tek ana CTA
- No confetti
- No childish character
- Actionable copy

## 14. Component API standard

Her component:

- `variant`
- `size`
- `state`
- `testID`
- accessibility props
- theme/atmosphere compatibility

desteklemelidir.

## 15. Yasaklar

- Screen-local duplicate components
- Inline HEX
- Inline typography
- Random radius
- Random shadow
- Kopya chip implementations
- Bir component içinde hard-coded Turkish copy
- Accessibility label olmadan icon-only button
- Fixed text height
- Nested Pressable
- Touch target 44 altı

## 16. Claude Code özeti

Claude Code önce primitives’i, sonra componentleri, sonra ekranları uygulamalıdır. Screen içinde yeni yüzey veya tipografi sistemi yaratmamalıdır.

## 17. Kilitlenen karar

V1 component library bu belge ile tanımlanan tek merkezi sistem üzerinden yürütülür.
