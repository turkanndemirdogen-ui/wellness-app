# 08 — SCREEN COMPOSITION CONTRACTS

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli

## 1. Global composition

- Horizontal screen padding: 20
- Compact device: 16
- Section gap: 28–32
- Card gap: 12–16
- Hero-to-content gap: 20–24
- Bottom safe area tam destek
- First viewportta tek ana odak

## 2. Ana sekmeler

Kanonik bottom tabs:

1. Home
2. Garden
3. Plants
4. Mood
5. Journal

Astrology, Skin Care, Cycle ve Rituals ana tab değildir; Home/Explore veya modül girişlerinden açılır.

## 3. Home / Daily Compass

Sıra:

1. Header + date/moon chip
2. Hero: daily plant + daily energy
3. Mood check-in
4. Daily quote/insight
5. Slot ladder
6. Save/share micro-actions

Kurallar:

- İlk viewportta en az hero ve mood başlangıcı görünür.
- Hero V2 immersive.
- Geri kalan V1 editorial.
- Aynı anda birden fazla büyük artwork yok.

## 4. Garden

Sıra:

1. Header + level/progress
2. Living garden canvas
3. Contextual garden action
4. Collections / planted species
5. Seasonal or celestial event

Kurallar:

- Garden canvas ilk viewportun %45–55’i.
- Çocuk oyunu HUD’u yok.
- Quick actions 3–4 item.
- Animasyon ambient M1.

## 5. Plants / Herbal Library

Library:

1. Search
2. Filter chips
3. Curated section
4. Plant grid/list
5. Safety/info footer

Detail:

1. Botanical hero
2. Common + scientific name
3. Taxonomy and parts used
4. Evidence / traditional / symbolic tabs
5. Safety
6. Related rituals / garden use

Scientific name above fold.

## 6. Mood

1. Header
2. Emotion selector
3. Energy/intensity
4. Optional note
5. Check-in CTA
6. Recent check-ins

Mood result sonrası M2 kısa living response.

## 7. Journal

1. Header / date
2. Prompt optional
3. Editor
4. Tags
5. Save state
6. Recent entries

Editor yüzeyi sakin ve opak.

## 8. Astrology

1. Header + date/context
2. Chart / primary celestial visual
3. Planet summary
4. Active transit/insight
5. Interpretation
6. Source/data timestamp

Gerçek data ile decorative art ayrılır.

## 9. Skin Care

1. Header
2. Today routine
3. Routine steps
4. Ingredient cards
5. Skin check-in
6. Safety note

Daha klinik, daha az glow.

## 10. Cycle

1. Header/date
2. Cycle ring
3. Phase summary
4. Log shortcuts
5. Symptom/energy
6. Insight
7. Health disclaimer

## 11. Ritual detail

1. Hero
2. Intention
3. Requirements
4. Steps
5. Start CTA
6. Active player
7. Completion

Ritual sırasında UI sadeleşir.

## 12. Loading/error/empty

Her ekran için:

- skeleton
- empty
- error
- offline
- partial data

tasarımı zorunludur.

## 13. Visual intensity mapping

| Screen | Level |
|---|---|
| Home hero | V2 |
| Garden | V2 |
| Plant library | V1 |
| Plant detail | V1–V2 |
| Mood | V1 |
| Journal | V0–V1 |
| Astrology | V1–V2 |
| Skin Care | V0–V1 |
| Cycle | V1 |
| Ritual reveal | V3 |
| Settings/legal | V0 |

## 14. Sticky/fixed elements

- Bottom tabs fixed
- Active ritual controls sticky olabilir
- Long plant detail’de sticky segment control olabilir
- Journal save state non-intrusive
- Hero sticky değildir

## 15. Yasaklar

- İlk viewportta 3+ hero
- Sonsuz card wall
- Her section aynı layout
- Metni artwork üstüne kontrolsüz koymak
- Scientific name’i fold altına itmek
- Çocuk oyunu HUD’u
- Floating action overload
- Aynı ekranda 5 farklı radius
- Her ekranı immersive yapmak

## 16. Kilitlenen karar

Ekranlar bu kompozisyon kontratlarıyla oluşturulur; görsel yoğunluk işlev ve içerik rolüne göre değişir.
