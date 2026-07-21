# 02 — COLOR AND GRADIENT TOKENS

**Belge durumu:** CANONICAL SUPPORTING SPECIFICATION  
**Bağlı belgeler:** `00_VISUAL_SYSTEM_CANONICAL.md`, `01_VISUAL_DIRECTION.md`  
**Proje:** Wellness Mobile App  
**Sürüm:** 1.0  
**Tarih:** 2026-07-20  
**Hedef ortam:** React Native + Expo + TypeScript

---

## 1. Amaç

Bu belge `Luminous Botanical Cosmos` sisteminin renk, gradient, atmosfer ve semantik durum kararlarını kilitler.

Bağlayıcı ilkeler:

- Lila ana yüzey rengi değildir.
- Bitkinin gerçek rengi marka paletine zorla uyarlanmaz.
- Renk sırası: içerik gerçekliği → gün atmosferi → modül kimliği → celestial accent.
- Gün ışığı ile akşam atmosferi kademeli değişir.
- Gece yüzeyi düz siyah olmaz.
- Renk tek başına durum veya veri taşımaz.
- Ekran içine rastgele HEX yazılmaz.

---

## 2. Genel kullanım oranı

Tipik bir ekran:

- **%52–60:** nötr ve açık yüzey
- **%18–25:** gerçek botanik veya içerik rengi
- **%10–15:** modül/durum vurgusu
- **%5–8:** celestial/glyph rengi
- **%2–4:** soft gold, copper veya iridescent highlight

Aynı viewportta en fazla iki accent family bulunur.

---

## 3. Core neutrals

| Token | HEX | Kullanım |
|---|---:|---|
| `neutral.0` | `#FFFFFF` | Saf beyaz, yalnızca elevated mikro yüzey |
| `neutral.25` | `#FCFBF8` | Pearl |
| `neutral.50` | `#F8F5EF` | Warm ivory, ana light background |
| `neutral.75` | `#F3EFE7` | Mineral cream |
| `neutral.100` | `#ECE7DD` | Pale stone |
| `neutral.150` | `#E4DED2` | Warm mist |
| `neutral.200` | `#D9D2C5` | Hairline / disabled surface |
| `neutral.300` | `#C5BCAF` | Muted border |
| `neutral.400` | `#A89F94` | Muted metadata |
| `neutral.500` | `#817A73` | Tertiary text |
| `neutral.600` | `#625D58` | Secondary text |
| `neutral.700` | `#46423F` | Strong body |
| `neutral.800` | `#2E2B29` | Heading |
| `neutral.900` | `#1D1B1A` | En koyu metin |

### Parchment

| Token | HEX |
|---|---:|
| `parchment.50` | `#FBF7EE` |
| `parchment.100` | `#F3EAD9` |
| `parchment.200` | `#E7D9C2` |
| `parchment.300` | `#D6C3A5` |
| `parchment.ink` | `#4C4036` |

### Cool mist

| Token | HEX |
|---|---:|
| `mist.50` | `#F5F8FA` |
| `mist.100` | `#EAF0F3` |
| `mist.200` | `#D8E2E7` |
| `mist.300` | `#BECED6` |
| `mist.500` | `#78909C` |

---

## 4. Botanical family

### Greens

| Token | HEX |
|---|---:|
| `botanical.sage.100` | `#DCE6D7` |
| `botanical.sage.300` | `#AFC3A7` |
| `botanical.sage.500` | `#7F9A76` |
| `botanical.moss.300` | `#A4B08A` |
| `botanical.moss.500` | `#738158` |
| `botanical.moss.700` | `#4E5A3A` |
| `botanical.fern.300` | `#8FAE8C` |
| `botanical.fern.500` | `#5E8362` |
| `botanical.olive.300` | `#B6B37C` |
| `botanical.olive.500` | `#89884F` |
| `botanical.eucalyptus.300` | `#A8C1B7` |
| `botanical.eucalyptus.500` | `#6E9487` |
| `botanical.laurel.500` | `#486D52` |
| `botanical.forest.700` | `#264A3C` |
| `botanical.forest.900` | `#173329` |

### Earth / dried herb

| Token | HEX |
|---|---:|
| `earth.beige.100` | `#E8DECA` |
| `earth.beige.300` | `#CDBD9E` |
| `earth.ochre.300` | `#D6B26C` |
| `earth.ochre.500` | `#B5863E` |
| `earth.bark.400` | `#8C6E55` |
| `earth.bark.600` | `#654B3B` |
| `earth.clay.400` | `#B86E50` |
| `earth.terracotta.500` | `#A8583E` |

### Flora accents

| Token | HEX |
|---|---:|
| `flora.marigold` | `#E5A42E` |
| `flora.saffron` | `#C98A22` |
| `flora.citrus` | `#E6C94A` |
| `flora.poppy` | `#B64B3F` |
| `flora.rosewood` | `#8E4F56` |
| `flora.peony` | `#D9859E` |
| `flora.berry` | `#8C3F62` |
| `flora.plum` | `#68415D` |
| `flora.iris` | `#6D5A8F` |
| `flora.cornflower` | `#557FB6` |
| `flora.borage` | `#416E9F` |
| `flora.peach` | `#E4A37F` |
| `flora.whiteBlossom` | `#F4F1E8` |

**Kural:** UI accent bitkinin gerçek görselinden türeyebilir; bitki görseli recolor edilmez.

---

## 5. Celestial family

| Token | HEX |
|---|---:|
| `celestial.sky.200` | `#C9DAE7` |
| `celestial.sky.400` | `#7FA6C1` |
| `celestial.dusk.400` | `#6A7C9D` |
| `celestial.dusk.600` | `#445676` |
| `celestial.teal.400` | `#3F7F82` |
| `celestial.teal.700` | `#1F5558` |
| `celestial.indigo.400` | `#59638F` |
| `celestial.indigo.700` | `#313A67` |
| `celestial.violet.300` | `#A99AC1` |
| `celestial.violet.500` | `#7E6D9A` |
| `celestial.plum.500` | `#684D68` |
| `celestial.aubergine.700` | `#402F47` |
| `celestial.silver.200` | `#DCE3E7` |
| `celestial.silver.400` | `#AEBCC4` |
| `celestial.ink.800` | `#20283A` |
| `celestial.ink.900` | `#151B2B` |

### Metallic accents

| Token | HEX |
|---|---:|
| `metal.gold.200` | `#E9D8A8` |
| `metal.gold.400` | `#CBA75D` |
| `metal.gold.600` | `#A27B35` |
| `metal.copper.300` | `#CE9773` |
| `metal.copper.500` | `#A86643` |
| `metal.silver.300` | `#C9D0D4` |

Metallic colors yalnızca hairline, glyph accent, orbit, ceremonial highlight ve premium state için kullanılır.

---

## 6. Planet colors

| Planet | Token | HEX |
|---|---|---:|
| Sun | `planet.sun` | `#D5A13C` |
| Moon | `planet.moon` | `#93A9B8` |
| Mercury | `planet.mercury` | `#6F777D` |
| Venus | `planet.venus` | `#B7747E` |
| Mars | `planet.mars` | `#A64F3D` |
| Jupiter | `planet.jupiter` | `#4D6F9D` |
| Saturn | `planet.saturn` | `#6C6256` |
| Uranus | `planet.uranus` | `#5B9EB5` |
| Neptune | `planet.neptune` | `#3F6E9D` |
| Pluto | `planet.pluto` | `#60435E` |

Planet glyphleri tek mor renkte gösterilmez. Hero içinde yalnızca sınırlı lightness adaptasyonu yapılabilir.

---

## 7. Zodiac colors

### Default system

- `zodiac.default.light = #5F665E`
- `zodiac.default.dark = #D9DED6`

### Element mode

| Element | HEX | Signs |
|---|---:|---|
| Fire | `#B86A42` | Aries, Leo, Sagittarius |
| Earth | `#738158` | Taurus, Virgo, Capricorn |
| Air | `#6D8DA7` | Gemini, Libra, Aquarius |
| Water | `#4F7486` | Cancer, Scorpio, Pisces |

### Profile mode

- Sun → `planet.sun`
- Moon → `planet.moon`
- Rising → `metal.copper.500`

Tüm zodiac seti gökkuşağı-neon gösterilmez.

---

## 8. Time-of-day palettes

### Dawn

| Token | HEX |
|---|---:|
| `time.dawn.background` | `#F8F2E9` |
| `time.dawn.surface` | `#FBF7F0` |
| `time.dawn.sky` | `#D9E6EC` |
| `time.dawn.peach` | `#EAB99A` |
| `time.dawn.gold` | `#D8B46A` |
| `time.dawn.text` | `#3E3A36` |

```ts
dawnGlow: ['#F8F2E9', '#F2E4DA', '#DCE8EC']
```

### Day

| Token | HEX |
|---|---:|
| `time.day.background` | `#F8F5EF` |
| `time.day.surface` | `#FCFBF8` |
| `time.day.sky` | `#D8E7EF` |
| `time.day.green` | `#7F9A76` |
| `time.day.text` | `#2E2B29` |

```ts
dayClear: ['#FCFBF8', '#EEF3EE', '#DDEAF0']
```

### Golden Hour

| Token | HEX |
|---|---:|
| `time.golden.background` | `#F4E9DA` |
| `time.golden.apricot` | `#DEA077` |
| `time.golden.ochre` | `#C18E46` |
| `time.golden.olive` | `#8D8A58` |
| `time.golden.copper` | `#A86643` |
| `time.golden.text` | `#3E332C` |

```ts
goldenHour: ['#F4E9DA', '#E9C8A9', '#D39A72']
```

### Dusk

| Token | HEX |
|---|---:|
| `time.dusk.background` | `#E7E6EA` |
| `time.dusk.blue` | `#6A7C9D` |
| `time.dusk.teal` | `#3F7478` |
| `time.dusk.mauve` | `#8D7387` |
| `time.dusk.plum` | `#684D68` |
| `time.dusk.surface` | `#F1EEF1` |
| `time.dusk.text` | `#302D34` |

```ts
duskVeil: ['#E9E5E7', '#A8A4B5', '#5E6E8F']
```

### Night

| Token | HEX |
|---|---:|
| `time.night.background` | `#1B2430` |
| `time.night.surface` | `#26313D` |
| `time.night.elevated` | `#303C48` |
| `time.night.indigo` | `#313A67` |
| `time.night.teal` | `#1F5558` |
| `time.night.aubergine` | `#402F47` |
| `time.night.candle` | `#D2A45E` |
| `time.night.text` | `#F3F1EC` |
| `time.night.textMuted` | `#C7CBCB` |

```ts
nightSanctuary: ['#1B2430', '#222D3C', '#303A54']
```

### Night restrictions

- `#000000` kullanılmaz.
- Journal, legal, forms ve uzun okuma yüzeyleri açık kalabilir.
- Body text opacity %86’dan düşük olamaz.
- Decorative glow metnin arkasına yerleştirilemez.

---

## 9. Atmosphere timing

V1 varsayılan saatleri:

- Dawn: 05:30–08:30
- Day: 08:30–16:30
- Golden Hour: 16:30–19:00
- Dusk: 19:00–21:30
- Night: 21:30–05:30

Geçiş:

- minimum 20 dakika
- hedef 30 dakika
- maksimum 40 dakika
- ani tema değişimi yok
- kullanıcı tercihi: `adaptive` veya `fixedDay`

---

## 10. Module color directions

### Home
Warm ivory + gün atmosferi + günlük bitkinin gerçek rengi + sınırlı moon silver/gold.

### Garden
Moss, fern, forest, sky, earth ochre. Garden pembe çiçek bahçesi değildir.

### Plants
Parchment, scientific ink, gerçek bitki rengi, botanical green, earth beige.

### Mood

| State | HEX |
|---|---:|
| calm | `#7F9A8A` |
| centered | `#8B9273` |
| energized | `#D39A4D` |
| joyful | `#D5856A` |
| inspired | `#6D86A7` |
| tender | `#B57B86` |
| tired | `#8A8792` |
| anxious | `#A2685D` |
| sad | `#66768D` |
| overwhelmed | `#6A5B66` |
| hopeful | `#A7A264` |
| grateful | `#9A7B55` |

Mood yalnızca renkle belirtilmez; label ve icon eşlik eder.

### Journal
Parchment, ink, bark, rosewood, pressed botanical green. Glow minimum.

### Astrology
Mist, celestial blue, dusk blue, planet colors, moon silver, soft gold.

### Skin Care
Pearl, mineral cream, mist blue, eucalyptus, soft peach, cool silver.

| Ingredient | Accent |
|---|---:|
| Niacinamide | `#AAB9C5` |
| Hyaluronic Acid | `#8FB9C9` |
| Centella asiatica | `#7F9A76` |
| Vitamin C | `#D9A341` |
| Retinoid | `#B86E50` |
| Ceramide | `#C7B79B` |
| Azelaic Acid | `#A49AB0` |

### Cycle

| Phase | HEX |
|---|---:|
| Menstrual | `#8E4F56` |
| Follicular | `#B6B37C` |
| Ovulatory | `#D6A04E` |
| Luteal | `#6D7E73` |

Cycle fazları pembe varyasyonları değildir.

### Rituals
Renk içerik ve zamana bağlıdır:

- sleep → indigo + moon silver + candle gold
- grounding → bark + moss + ochre
- energizing → saffron + sky + sage
- reflection → parchment + rosewood + plum

---

## 11. Semantic colors

| Token | HEX | Background |
|---|---:|---:|
| `semantic.success` | `#4F7C62` | `#E3EEE7` |
| `semantic.info` | `#4F738C` | `#E4EDF2` |
| `semantic.warning` | `#A57432` | `#F3E8D3` |
| `semantic.error` | `#984D48` | `#F2E1DF` |
| `semantic.focus` | `#527C89` | — |
| `semantic.disabled` | `#A9A39B` | — |

Durumlar icon + label + color üçlüsüyle gösterilir.

---

## 12. Text colors

### Light

| Token | HEX |
|---|---:|
| `text.primary.light` | `#2E2B29` |
| `text.secondary.light` | `#625D58` |
| `text.tertiary.light` | `#817A73` |
| `text.inverse.light` | `#F8F5EF` |
| `text.link.light` | `#426C78` |
| `text.scientific.light` | `#4C514A` |

### Dark

| Token | HEX |
|---|---:|
| `text.primary.dark` | `#F3F1EC` |
| `text.secondary.dark` | `#D4D6D4` |
| `text.tertiary.dark` | `#B8BDBC` |
| `text.link.dark` | `#A7C9D2` |
| `text.scientific.dark` | `#DDE5DC` |

Kurallar:

- body opacity light minimum %82
- body opacity dark minimum %86
- caption minimum %72
- scientific name tertiary’den daha silik olamaz
- gradient text ve glowing body text yasaktır

---

## 13. Gradient system

### Atmosphere

```ts
export const atmosphereGradients = {
  dawnGlow: ['#F8F2E9', '#F2E4DA', '#DCE8EC'],
  dayClear: ['#FCFBF8', '#EEF3EE', '#DDEAF0'],
  goldenHour: ['#F4E9DA', '#E9C8A9', '#D39A72'],
  duskVeil: ['#E9E5E7', '#A8A4B5', '#5E6E8F'],
  nightSanctuary: ['#1B2430', '#222D3C', '#303A54'],
} as const
```

### Hero

```ts
export const heroGradients = {
  botanicalMorning: ['#F7F3E8', '#DCE6D7', '#D8E7EF'],
  gardenGolden: ['#F1E7D3', '#C8C594', '#7F9670'],
  celestialDusk: ['#D9D9E3', '#7887A5', '#3E496C'],
  ritualNight: ['#25303C', '#34354A', '#5A443D'],
  skinMineral: ['#FCFBF8', '#EEF3F2', '#E7DED4'],
  cycleEarth: ['#F5EEE7', '#DCC7B3', '#A8B29A'],
} as const
```

### Gradient restrictions

- Aynı ekranda en fazla iki ana gradient.
- Aynı kartta en fazla bir gradient.
- Liste item’larında gradient yok.
- Her kart farklı pastel gradient olamaz.
- Pembe→lila varsayılan değildir.
- Hero üstünde text varsa scrim zorunlu olabilir.
- Animated gradient minimum 12 saniye; reduce motion’da static.

---

## 14. Scrims

### Light

- `scrim.light.soft = rgba(248,245,239,0.38)`
- `scrim.light.medium = rgba(248,245,239,0.58)`
- `scrim.light.strong = rgba(248,245,239,0.76)`

### Dark

- `scrim.dark.soft = rgba(21,27,43,0.22)`
- `scrim.dark.medium = rgba(21,27,43,0.42)`
- `scrim.dark.strong = rgba(21,27,43,0.64)`

Hero görseli üzerinde metin varsa contrast doğrulanır; gerekirse scrim veya solid text surface kullanılır.

---

## 15. Dynamic botanical accent extraction

```ts
type BotanicalAccent = {
  dominantLeaf: string
  dominantFlower?: string
  stemOrBark?: string
  neutralCompanion: string
  contrastText: string
}
```

Kurallar:

- saturation clamp: %28–58
- lightness clamp: %35–72
- en fazla iki extracted accent
- scientific/safety text extracted renk kullanmaz
- toxic plants için saturation maksimum %45
- kullanıcı görselinden accent çıkarılmaz
- contrast başarısızsa fallback kullanılır

Fallback:

```ts
export const botanicalFallbacks = {
  leaf: '#6E8A67',
  flower: '#B77B7F',
  bark: '#7A604B',
  neutral: '#F4F0E8',
  text: '#2E2B29',
} as const
```

---

## 16. Accessibility

Minimum:

- normal text: 4.5:1
- large text: 3:1
- essential icon: 3:1
- focus indicator: 3:1

Pastel safety:

- pastel zemin üstünde pastel body text yok
- soft gold body text yok
- moon silver light background’da body icon rengi değil
- chart renkleri glyph/label/pattern ile desteklenir
- mood, cycle, zodiac ve planet durumları yalnızca renkle anlatılmaz

---

## 17. TypeScript contract

```ts
export const colors = {
  neutral: {
    0: '#FFFFFF',
    25: '#FCFBF8',
    50: '#F8F5EF',
    75: '#F3EFE7',
    100: '#ECE7DD',
    150: '#E4DED2',
    200: '#D9D2C5',
    300: '#C5BCAF',
    400: '#A89F94',
    500: '#817A73',
    600: '#625D58',
    700: '#46423F',
    800: '#2E2B29',
    900: '#1D1B1A',
  },
  botanical: {
    sage: {100: '#DCE6D7', 300: '#AFC3A7', 500: '#7F9A76'},
    moss: {300: '#A4B08A', 500: '#738158', 700: '#4E5A3A'},
    fern: {300: '#8FAE8C', 500: '#5E8362'},
    eucalyptus: {300: '#A8C1B7', 500: '#6E9487'},
    forest: {700: '#264A3C', 900: '#173329'},
  },
  celestial: {
    sky: '#7FA6C1',
    dusk: '#6A7C9D',
    teal: '#3F7F82',
    indigo: '#59638F',
    violet: '#7E6D9A',
    plum: '#684D68',
    silver: '#AEBCC4',
    ink: '#20283A',
  },
  metal: {
    gold: '#CBA75D',
    copper: '#A86643',
    silver: '#C9D0D4',
  },
  semantic: {
    success: '#4F7C62',
    info: '#4F738C',
    warning: '#A57432',
    error: '#984D48',
    focus: '#527C89',
  },
} as const
```

---

## 18. Acceptance criteria

Bir ekran ancak şu koşullarda uyumludur:

- Büyük yüzeylerin çoğu lila değildir.
- Bitki gerçek tür rengini korur.
- Aynı viewportta en fazla iki accent family vardır.
- Body text kontrast eşiğini geçer.
- Gradient sınırı aşılmaz.
- Planet glyphleri merkezi tokenları kullanır.
- Zodiac glyphleri seçilen modla tutarlıdır.
- Mood ve cycle yalnızca renkle ifade edilmez.
- Gece düz siyah değildir.
- Journal ve form akşam da okunabilir kalır.
- Soft gold body text olarak kullanılmaz.
- Aktif state varsayılan olarak pembe/mor glow değildir.
- Dekoratif renk gerçek astrolojik/botanik veriyle karışmaz.

---

## 19. Claude Code bağlayıcı özeti

Claude Code:

1. Bu dosyayı tek renk kaynağı olarak kullanmalıdır.
2. Ekran içine rastgele HEX yazmamalıdır.
3. Lila/pembe gradient’i varsayılan çözüm olarak kullanmamalıdır.
4. Bitki görselini recolor etmemelidir.
5. `adaptive` ve `fixedDay` atmosfer modlarına uygun mimari kurmalıdır.
6. Planet, zodiac, mood, cycle ve semantic renklerini merkezi tokenlardan almalıdır.
7. Gradient ve scrim limitlerini uygulamalıdır.
8. Reduce Motion ve kontrast şartlarını ihlal etmemelidir.
9. Yeni renk eklemeden önce canonical belgeleri güncellemelidir.

---

## 20. Kilitlenen karar

Bu renk ve gradient sistemi **V1 için kilitlenmiştir**.

Sonraki tüm belgeler bu tokenları referans alacaktır.
