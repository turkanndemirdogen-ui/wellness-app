# 09 — MOTION, HAPTICS & LIVING WORLD

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli

## 1. Motion ilkesi

Hareket sürekli gösteri değil, yaşam hissidir.

- doğal
- düşük genlikli
- anlamlı
- kullanıcı eylemine bağlı
- reduced-motion uyumlu

## 2. Motion seviyeleri

### M0 Static
Settings, legal, forms, long reading.

### M1 Ambient
Home, Garden, Plant Detail, Journal.
Maksimum 1 ana + 1 ikincil ambient hareket.

### M2 Responsive
Chip, save, filter, mood selection, accordion.

### M3 Moment
Daily plant reveal, astro result, ritual start/end, milestone.

M3 3–6 saniye, sık tekrarlanmaz.

## 3. Standard durations

| Token | Duration |
|---|---:|
| `motion.instant` | 80ms |
| `motion.fast` | 140ms |
| `motion.normal` | 220ms |
| `motion.slow` | 360ms |
| `motion.reveal` | 600ms |
| `motion.ceremonial` | 3000–6000ms |
| `motion.ambient` | 12000–30000ms |

## 4. Easing

- Standard: `cubic-bezier(0.2, 0, 0, 1)`
- Enter: `cubic-bezier(0.16, 1, 0.3, 1)`
- Exit: `cubic-bezier(0.4, 0, 1, 1)`
- Spring: düşük bounce

## 5. Living World behaviors

### Breathing leaf
- Scale max 1.012
- Rotation ±1.5°
- 8–14 sec
- Stem ve leaf tip farklı delay
- Reduce Motion: static

### Orbit on tap
- Yalnız seçilen planet
- 600–900ms
- Tüm gezegenler dönmez

### Dusk ambience
- 20–40 dakikalık palette geçiş
- Ani switch yok

### Garden
- Hafif parallax
- Nadiren ışık tozu
- Water refraction
- Seasonal visual changes

## 6. Interaction motion

- Press: scale 0.98
- Chip select: 160–220ms
- Save: glyph fill / fold 180ms
- Expand: 220–300ms
- Modal: 300–360ms
- Tab: 180–240ms
- Success: 400–700ms

## 7. Haptics

| Event | Haptic |
|---|---|
| Chip selection | Light |
| Save/favorite | Light |
| Mood log success | Medium |
| Ritual start | Light |
| Ritual completion | Success |
| Error | Warning |
| Destructive confirmation | Warning |

Haptic spam yasaktır.

## 8. Reduced Motion

- Ambient loops static
- Parallax off
- Orbit transition fade
- Ceremonial reveal crossfade
- Shimmer off
- Scale pulse off
- Haptics kullanıcı ayarına bağlı

## 9. Performance

- Reanimated/native transforms
- Opacity/transform preferred
- Blur animation avoided
- JS frame loops yok
- Particle count sınırlı
- Screen unmount’ta animation cleanup

## 10. Yasaklar

- Sürekli dönen tüm gezegenler
- Sürekli sallanan tüm yapraklar
- Confetti default
- Flower explosion
- Fast parallax
- Bounce-heavy motion
- Scroll hijacking
- 60fps testi olmadan production
- Reduced Motion ignore etmek

## 11. Kilitlenen karar

Motion sistemi: **subtle ambient life + meaningful responsive motion + rare ceremonial moments**.
