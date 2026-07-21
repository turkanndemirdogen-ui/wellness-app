# 11 — ACCESSIBILITY & PERFORMANCE BUDGET

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli

## 1. Accessibility

### Contrast
- Normal text: 4.5:1
- Large text: 3:1
- Essential icon: 3:1
- Focus indicator: 3:1

### Touch
- Minimum touch target: 44×44
- Control spacing minimum 8

### Screen reader
- Icon-only controls label alır
- Decorative assets hidden
- Glyph + label
- Dynamic status announced
- Errors field ile ilişkilendirilir

### Dynamic Type
- Body max multiplier 1.4
- Navigation 1.25
- Hero 1.2
- Fixed text heights yasak

### Reduced settings
- Reduce Motion
- Reduce Transparency
- High contrast fallback
- Haptic toggle

### Color
- State yalnız renk değildir
- Cycle/mood/planet/zodiac label içerir

## 2. Performance targets

### Startup
- Cold start hedef: 3s altı orta cihaz
- Font load layout shift yok

### Interaction
- UI response: 100ms algısal hedef
- Animation: 60fps
- Long lists virtualized

### Screen budgets
- Max 2 blur
- Max 2 live glow
- Max 1 animated gradient
- Max 1 large hero
- No shadow repeated rows
- Max transparency stack depth 2

### Asset budgets
`10_ASSET_PIPELINE_AND_NAMING.md` ile uyumlu.

## 3. React Native rules

- `FlatList` / `FlashList` for large lists
- Memoization only measured
- Stable keys
- Avoid inline object churn in large lists
- Reanimated for motion
- No JS interval animation
- Image cache
- Lazy-load below fold

## 4. Low-end mode

- Blur off
- Glow off
- Static gradients
- Reduced image resolution
- No particles
- Simplified garden ambience

## 5. Offline

- Core tabs render
- Cached plant metadata
- Placeholder assets
- Clear offline notices
- No broken empty canvas

## 6. Testing matrix

- iPhone small
- iPhone current
- Android low-mid
- Android current
- Dynamic Type large
- Reduce Motion
- Reduce Transparency
- Dark/dusk
- Slow network
- Offline

## 7. Yasaklar

- Accessibility label olmadan icon buttons
- 44 altı touch
- Color-only feedback
- Blur-heavy lists
- Full-res hero eager loading
- Layout shift
- Screen reader sırasını bozmak
- Fixed heights in text cards
- Low-end fallback olmaması

## 8. Kilitlenen karar

Accessibility ve performans kalite kriteri değil, release gate’tir.
