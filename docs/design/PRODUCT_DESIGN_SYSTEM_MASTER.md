# PRODUCT DESIGN SYSTEM MASTER

**Belge türü:** Product Design, UX Architecture ve Frontend UI için tek tasarım otoritesi  
**Sürüm:** 1.0  
**Durum:** DESIGN FREEZE — CANONICAL  
**Tarih:** 2026-07-14  
**Ürün adı:** Marka bağımsız; ürün adı bu belgede kullanılmaz  
**Platform önceliği:** Mobil — iOS ve Android; ardından tablet  
**Teknik hedef:** React Native + Expo  
**Sahiplik:** Product Design & UX Architecture

---

## 0. Yetki, kapsam ve çakışma çözümü

Bu belge uygulamanın aşağıdaki alanlarında **tek kanonik otoritedir**:

- UX ve information architecture
- UI ve visual hierarchy
- design tokens
- component architecture
- motion ve micro-interactions
- navigation ve gesture davranışları
- responsive davranış
- accessibility
- empty, loading, error, offline, permission ve locked state’leri
- frontend UI architecture
- Figma ve Fable üretim kuralları
- UI kalite kapıları

Bu belge aşağıdaki alanları **yönetmez ve değiştirmez**:

- editoryal dil ve kullanıcı metinleri
- storytelling
- bitki kartı, astroloji, journal ve quiz içerikleri
- marka tonu ve copywriting

Metinler tasarım sisteminde yalnızca `content slot` olarak değerlendirilir. Sistem; metnin anlamını değiştirmez, yalnızca uzunluk, hiyerarşi, taşma, erişilebilirlik ve yerleşim davranışını belirler.

### 0.1 Otorite sırası

UI/UX konusunda iki belge çelişirse şu sıra uygulanır:

1. `PRODUCT_DESIGN_SYSTEM_MASTER.md`
2. Güncel component veya pattern specification
3. Güncel ekran specification
4. `ARCHITECTURE_DECISIONS.md`
5. Figma/Fable briefleri
6. Eski karar günlükleri ve arşiv

### 0.2 Tasarım statüleri

- `LOCKED`: Değişiklik için açık mimari karar gerekir.
- `CANONICAL`: Production’da uygulanacak güncel kuraldır.
- `PROVISIONAL`: Cihaz testi veya erişilebilirlik doğrulaması bekler.
- `EXPERIMENTAL`: Yalnızca prototipte kullanılabilir.
- `DEPRECATED`: Yeni işlerde kullanılamaz.

---

# PART I — DESIGN CONSTITUTION

## 1. Değişmez ilkeler

1. Kullanıcı özelliklerden önce gelir.
2. Okuma, gereksiz etkileşimden önce gelir.
3. Sakinlik, heyecandan önce gelir.
4. Doğa, teknolojinin görünür olmasından önce gelir.
5. Tutarlılık, yenilikten önce gelir.
6. Yeniden kullanım, icattan önce gelir.
7. Erişilebilirlik, estetikten önce gelir.
8. Kalite, hızdan önce gelir; fakat sistem tek geliştiriciyi yavaşlatmamalıdır.
9. Ürün tek bir dünyadır; kopuk ekranlar toplamı değildir.
10. Motion anlam taşır; dekorasyon değildir.
11. Component’ler feature’lara değil sisteme aittir.
12. Arayüz geri çekilir; içerik ve kullanıcının amacı öne çıkar.
13. Yaşayan dünya kullanıcının iyilik hâlini destekler; dikkat için yarışmaz.
14. Her karar iki yıl sonra da anlaşılabilir olmalıdır.
15. Belirsizlikte en sade ve en geri döndürülebilir çözüm seçilir.

## 2. Zorunlu karar filtresi

Her yeni ekran, component veya motion önerisi şu sekiz sorudan geçer:

1. Premium his yaratıyor mu?
2. Kullanıcıyı deneyimin içine alıyor mu?
3. Etkileşim sezgisel mi?
4. Gereksiz karmaşıklık yaratıyor mu?
5. Geliştirme maliyetine değer mi?
6. Tek geliştirici tarafından sürdürülebilir mi?
7. Mobil öncelikli mi?
8. App Store seviyesinde kaliteli mi?

Ağırlıklı değerlendirme eşiği `3.7 / 5` altındaysa fikir sadeleştirilir, ertelenir veya reddedilir.

## 3. Naked UI Test

Her ekran; illüstrasyon, glow, partikül, texture ve ambient katmanlar kapatıldığında da:

- anlaşılır,
- dengeli,
- erişilebilir,
- premium,
- tamamlanmış

olmalıdır. Dekoratif katmanlar zayıf UI’ı gizlemek için kullanılamaz.

---

# PART II — PRODUCT EXPERIENCE PRINCIPLES

## 4. Tasarım vizyonu

Görsel karakter:

- soft witchy
- minimal
- zamansız
- lüks
- doğal ve organik
- editoryal
- kitap hissi veren
- yaşayan herbaryum estetiğinde

### 4.1 Görsel denge

- `%70` editoryal minimalizm
- `%20` botanik ve organik yaşam
- `%10` göksel/büyülü atmosfer

Sihir hissi ana UI katmanına değil; atmosfer, illüstrasyon ve ölçülü motion katmanına aittir.

### 4.2 Premium tanımı

Premium his şunlardan doğar:

- kontrollü boşluk
- güçlü tipografik hiyerarşi
- düşük görsel gürültü
- ölçülü hareket
- kaliteli illüstrasyon
- kusursuz state tasarımı
- hızlı ve öngörülebilir geri bildirim
- erişilebilirlik
- performans

Premium; yoğun altın, ağır glow, sürekli blur veya dekoratif kalabalık değildir.

## 5. Deneyim ilkeleri

### 5.1 Calm by default

Her viewport içinde en fazla bir primary CTA bulunur. Aynı anda çok sayıda karar sunulmaz.

### 5.2 Editorial clarity

Hiyerarşi tipografi, spacing ve kompozisyonla kurulur; dekorasyonla değil.

### 5.3 Progressive disclosure

Ana yüzeyler özet; detay yüzeyleri açıklayıcıdır. Kompleksite ihtiyaç oldukça açılır.

### 5.4 Familiar interaction, distinctive expression

Temel gesture’lar platform alışkanlıklarına uyar. Farklılık; görsel ifade, motion ve environmental response’tan gelir.

### 5.5 Resilient states

Loading, empty, error, offline, permission ve degraded state’ler sonradan eklenmez; ilk tasarımın parçasıdır.

### 5.6 One-person maintainability

Ekrana özel renk, radius, shadow, spacing veya motion değeri yazılmaz. Üçüncü tekrar component veya pattern’e dönüştürülür.

---

# PART III — INFORMATION ARCHITECTURE & NAVIGATION

## 6. Root navigation

Mevcut dört kök sekme korunur (`LOCKED`):

1. Ana Sayfa
2. Sohbet
3. Keşif
4. Bahçe

Beşinci tab eklenmez. Hamburger menü kullanılmaz. Ayarlar secondary navigation içinde yaşar.

## 7. Alan rolleri

| Alan | Deneyim rolü | İçerik yoğunluğu | Motion yoğunluğu | Görsel karakter |
|---|---|---:|---:|---|
| Ana Sayfa | Günlük giriş ve kişisel odak | Düşük–orta | Hafif | Editoryal, kişisel |
| Sohbet | Bilimsel/psikolojik çalışma alanı | Orta | Minimal | Temiz, güvenilir |
| Keşif | Arama, filtre ve bilgi keşfi | Orta | Yönlendirici | Kozmik-botanik |
| Bahçe | Retention, koleksiyon ve görsel ilerleme | Orta | Kontrollü zengin | Organik, yaşayan |

### 7.1 Bahçe–Keşif sınırı

- Bir öğenin **bilgisi** Keşif’te yaşar.
- Kullanıcının o öğeyle ilişkisinin **temsili, koleksiyonu ve ilerlemesi** Bahçe’de yaşar.
- Bahçe bilgi deposuna dönüşmez.

## 8. Navigation hierarchy

- Level 0: Root destinations
- Level 1: Feature overview
- Level 2: Detail
- Level 3: Immersive flow

Normal akışlar Level 3’ü geçmez.

## 9. Back ve continuity

- Back, önceki anlamlı bağlama döner.
- Tab değişimi tab’ın kendi stack durumunu korur.
- Filtre, scroll pozisyonu ve tamamlanmamış güvenli akışlar uygun yerlerde hatırlanır.
- Deep link, anlamlı bir destination’a açılır ve geri dönüş yolunu korur.
- Kullanıcı beklenmedik şekilde uygulamadan çıkmaz veya root’a sıfırlanmaz.

## 10. Overlay seçimi

- Bottom sheet: hızlı aksiyon, filtre, kısa form, context menu.
- Dialog: kritik onay, permission açıklaması, geri döndürülemez işlem.
- Full-screen modal: onboarding, immersive session, çok adımlı odak akışı.
- Bir overlay üzerinde ikinci overlay açılmaz.

---

# PART IV — VISUAL FOUNDATIONS

## 11. Color system

### 11.1 Renk aileleri

Sistem yalnızca şu primitive ailelerini kullanır:

- `canvas`: sıcak kâğıt ve temel yüzeyler
- `botanical`: sage, moss, olive, eucalyptus
- `celestial`: lavender, mist, moonlight, dusty blue
- `earth`: clay, sand, stone, wood
- `bloom`: nadir vurgu ve anlamlı kutlama

### 11.2 Kullanım oranı

- `%65` Canvas + Earth
- `%25` Botanical
- `%10` Celestial + Bloom

### 11.3 Yasaklar

- pure white ana zemin
- pure black uzun metin
- neon renkler
- saturated purple’ın geniş yüzeylerde kullanımı
- rainbow gradient
- aynı ekranda birden fazla baskın accent

### 11.4 Semantic color groups

- `surface.*`
- `text.*`
- `border.*`
- `action.*`
- `state.*`
- `feedback.*`
- `ambient.*`
- `nature.*`

Component’ler primitive renklere doğrudan bağlanamaz.

### 11.5 Adaptive ambient theme

Ürün `light-first adaptive ambient` yaklaşımını kullanır. Tam koyu mod v1.0 kapsamı değildir.

- morning: sıcak altın ışık
- day: nötr doğal ışık
- evening: lavanta atmosfer
- night: açık ay ışığı, sisli mavi ve lila

Ambient değişim, temel semantic UI renklerini ve okunabilirliği değiştirmez.

## 12. Typography system

İki font ailesi kullanılır:

- Display: editoryal başlıklar ve hero alanları
- UI: body, labels, buttons, inputs ve navigation

### 12.1 İlkeler

- Reading-first
- Body text uzun okumada görünmezleşmelidir.
- Heavy bold sınırlıdır.
- ExtraBold ve Thin kullanılmaz.
- Uzun paragraflar left-aligned; justified metin yasaktır.
- Büyük metin sığdırmak için küçültülmez; layout dikey büyür.

### 12.2 Text roles

- display.xl
- display.l
- heading.xl
- heading.l
- heading.m
- heading.s
- body.l
- body.m
- body.s
- label
- caption
- overline (nadir)

### 12.3 Truncation

- screen title: en fazla 2 satır
- card title: en fazla 2 satır
- supporting description: varsayılan 3 satır
- button ve tab labels: tek satır
- long-form content: truncate edilmez

## 13. Layout & spatial system

### 13.1 Grid

8-point temel grid; 4-point yalnızca optik ince ayar ve küçük iç boşluklar için kullanılabilir.

### 13.2 Spacing scale

`4, 8, 12, 16, 24, 32, 40, 48, 64, 96`

Arbitrary spacing yasaktır.

### 13.3 Mobil yatay margin

- Compact: 20
- Standard: 24
- Large phone: 24–32, max-width ile merkezleme
- Tablet: 40–64

### 13.4 Dikey ritim

- başlık–alt başlık: 8
- yakın ilişkili içerik: 16
- component groups: 24
- major section: 40–48
- hero separation: 64

### 13.5 Density

Her ekran tek yoğunluk sınıfına sahip olur:

- Light
- Medium
- Dense

Dashboard grid, masonry ve dört sütunlu icon menu kullanılmaz.

### 13.6 Scroll

- Bir ekranda tek ana scroll axis.
- Nested vertical scroll yasaktır.
- Horizontal scroll yalnızca sınırlı koleksiyon ve medya için kullanılır.
- Core navigation yatay carousel içine saklanmaz.

## 14. Radius, border, elevation

### 14.1 Radius

Sadece token değerleri: `xs, sm, md, lg, xl, full`.

Sharp corners yasaktır; fakat tüm yüzeylerin aşırı yuvarlak olması da yasaktır.

### 14.2 Border önceliği

Öncelik sırası:

1. spacing
2. tonal contrast
3. border

Border son çözümdür.

### 14.3 Elevation

Beş seviye:

- 0: canvas
- 1: standard card/list
- 2: hero/highlight
- 3: sheet/dialog/floating control
- 4: critical overlay

Colored veya hard shadows yasaktır.

## 15. Material system

Beş material family:

- Canvas
- Paper
- Milk Glass
- Atmospheric
- Living Nature

### 15.1 Material kuralları

- Canvas: matte, sıcak, statik
- Paper: editorial cards ve reading surfaces
- Milk Glass: nav, sheet ve geçici floating UI; az ve kontrollü
- Atmospheric: interaction içermez
- Living Nature: UI component değildir; environmental layer’dır

Texture yalnızca Canvas ve Paper’da; blur ve texture aynı layer’da kullanılmaz.

## 16. Iconography & illustration

### 16.1 Icon style

- minimal outline default
- rounded terminals ve joins
- tek stroke family
- filled yalnızca selected/active/completed
- 3D icon ve emoji-as-icon yasaktır

### 16.2 Illustration language

- contemporary botanical publication
- natural history ve herbarium etkisi
- muted palette
- organic asymmetry
- görünür craftsmanship
- fantasy game veya children’s storybook estetiği yok

### 16.3 Visual vocabulary

- `%80` permanent language
- `%15` seasonal layer
- `%5` event layer

Seasonal ve event katmanlar core UI’ı değiştiremez.

---

# PART V — MOTION, HAPTICS & LIVING WORLD

## 17. Motion philosophy

Her animasyon en az bir soruya cevap vermelidir:

- Ne değişti?
- Nereye gitti?
- Eylem gerçekleşti mi?
- Hangi öğe odakta?
- Mekânsal ilişki nedir?

Cevap vermiyorsa animasyon kaldırılır.

## 18. Motion categories

- navigation
- feedback
- environmental
- living
- breathing
- celebration

### 18.1 Priority

1. user interaction
2. navigation
3. environmental ambience
4. background atmosphere

Yüksek öncelik düşük önceliği bastırır.

### 18.2 Duration ranges

- instant: 100–150 ms
- small feedback: 150–220 ms
- component transition: 220–320 ms
- navigation: 300–450 ms
- hero: 450–700 ms
- environmental loop: 6–30 s

### 18.3 Motion budget

Bir ekranda aynı anda:

- en fazla 3 interface animation
- en fazla 2 particle system
- en fazla 1 glow pulse

## 19. Reduced motion

- parallax → static layers
- zoom/scale → opacity/crossfade
- continuous ambience → static frame veya çok düşük frekans
- information hiçbir zaman kaybolmaz

## 20. Haptic system

- selection: light
- toggle: light
- completion: medium
- meaningful achievement: success/medium
- critical warning: heavy
- ambient motion: none

Haptic hiçbir zaman tek feedback kanalı değildir.

## 21. Living World Engine

Living World Engine Garden’ın üstündeki runtime sistemidir. Home, Sohbet, Keşif ve Bahçe aynı dünyanın farklı bölgeleridir.

### 21.1 Layers

1. Environment: sky, light, mist, time
2. Nature: plants, water, wildlife
3. Atmosphere: particles, glow, wind
4. Interface
5. User state: progress, collections, completed actions

### 21.2 Environmental responses

Kullanıcı eylemleri çevrede küçük ve kesintisiz olmayan tepki üretebilir. Bu tepki ödül veya copy değildir; interaction feedback’tir.

Örnek davranış sınıfları:

- ripple
- subtle bloom
- star appearance
- light shift
- leaf movement

### 21.3 Yasaklar

- virtual pet mechanics
- farming loop
- inactivity punishment
- mandatory streak growth
- overwhelming collectible economy
- fantasy game mechanics

### 21.4 Degraded behavior

- Reduce Motion: static world
- Reduce Transparency: opaque surfaces
- Low Power: particles off, loop frequency reduced
- Low-end device: background compositing simplified

---

# PART VI — INTERACTION SYSTEM

## 22. Gesture vocabulary

- Tap: primary
- Long press: contextual, non-critical
- Swipe: secondary action
- Drag: reorder veya direct manipulation
- Pull: refresh gibi tanıdık davranış
- Double tap: yalnızca açıkça tutarlı bir quick action varsa

Primary functionality gizli gesture arkasında olamaz.

## 23. Interaction feedback

Her state-changing action visual feedback üretir. Uygun olduğunda haptic eklenir. Audio opsiyoneldir.

### 23.1 Forgiveness

- Undo, mümkünse confirmation’dan önce tercih edilir.
- Destructive action açıkça ayrıştırılır.
- Kullanıcı keşif yaparken cezalandırılmaz.

## 24. Buttons

Yalnızca şu hierarchy bulunur:

- primary
- secondary
- tertiary
- ghost
- destructive

Yeni görsel button category oluşturulmaz.

## 25. Cards

- Kart mümkün olduğunda tüm yüzeyiyle tappable’dır.
- Kart içinde küçük ve hassas interaction target’lardan kaçınılır.
- Nested cards yasaktır.
- Card content order öngörülebilirdir: header → content → optional media → footer/action.

## 26. Forms

- Tek mantıksal adım bir anda sunulur.
- Inline validation tercih edilir.
- Error, problem + recovery yolunu gösterir.
- Keyboard ve focus yönetimi component contract’ın parçasıdır.

---

# PART VII — COMPONENT ARCHITECTURE

## 27. Katmanlar

1. Tokens
2. Foundation primitives
3. Core components
4. Domain components
5. Patterns
6. Templates

## 28. Foundation primitives

Minimum set:

- Surface
- Stack
- Text
- Icon
- Divider
- Spacer
- ScrollContainer

## 29. Core components

- Button
- IconButton
- Card
- ListItem
- Input
- Search
- Chip
- Tag
- Badge
- Progress
- Avatar
- SegmentedControl
- Accordion
- BottomSheet
- Dialog
- Toast/Snackbar
- Tooltip
- EmptyState
- Skeleton
- Loader
- TopBar
- BottomNavigation

## 30. Domain components

Domain component isimleri ürün adı içermez. Domain component, birden fazla ekranda tekrar kullanılabilir davranış örüntüsü olduğunda oluşturulur.

Örnek kategoriler:

- DailyCompass
- MoodSelector
- BloomProgress
- HerbariumCard
- ReflectionCard
- GardenTile
- JourneyCard
- InsightCard
- RecommendationCard
- MoonPhase
- CollectionShelf

Editoryal içerik component içinde hardcode edilmez.

## 31. Component contract

Her component şu başlıkları tanımlamadan Stable olamaz:

- purpose
- responsibilities / non-responsibilities
- anatomy
- variants
- sizes
- states
- interaction
- motion
- haptics
- accessibility
- responsive behavior
- composition rules
- developer API
- design tokens
- performance
- do / don’t
- known limitations

## 32. Component lifecycle

`Draft → Experimental → Beta → Stable → Deprecated → Removed`

Stable component’te breaking behavior değişikliği major version gerektirir.

## 33. Component states

Universal:

- default
- pressed
- focused
- selected
- disabled
- loading

Input-specific:

- empty
- typing
- valid
- invalid
- submitted

Async:

- idle
- fetching
- success
- error
- retry

State ambiguity yasaktır.

## 34. Naming

Component export isimleri kendi namespace’inde sade tutulur:

- `Surface`
- `Stack`
- `Text`
- `Button`
- `Card`

React Native primitive’leriyle çakışma import alias veya package namespace ile çözülür. Marka adı component prefix’i olarak kullanılmaz.

---

# PART VIII — PRODUCT STATES

## 35. Empty states

Her empty state şunları sağlar:

- bağlam
- sonraki adım
- gelecekteki potansiyel

Kullanıcı suçlanmaz. Empty state illustration essential information taşımaz.

## 36. Loading states

Öncelik sırası:

1. local optimistic feedback
2. skeleton
3. meaningful progress
4. spinner — yalnızca kaçınılmazsa

Environmental motion loading’in tek göstergesi olamaz.

## 37. Error states

Her error state:

- ne olduğunu,
- mümkünse nedenini,
- nasıl düzeltileceğini

açıkça gösterir. Teknik hata metni kullanıcıya ham biçimde sunulmaz.

## 38. Offline ve stale data

- Kullanılabilir cached content mümkünse gösterilir.
- Stale state görünür ama alarm vermez.
- Retry kolay erişilir.
- Offline durumunda kullanıcı girdisi güvenli biçimde korunur.

## 39. Permission states

Permission talebinden önce değer ve gerekçe arayüzle açıklanır. Reddedilme durumunda feature tamamen dead-end olmaz; ayarlara giden açık yol bulunur.

## 40. Locked / premium states

Locked state işlevin değerini ve sınırını gösterir; core navigasyonu bozmaz. Dekoratif paywall kalabalığı kullanılmaz.

---

# PART IX — RESPONSIVE & ACCESSIBILITY

## 41. Width classes

| Sınıf | Genişlik | Davranış |
|---|---:|---|
| Compact | 320–374 | Sıkı margin, tek sütun |
| Standard | 375–429 | Ana referans |
| Large phone | 430–599 | Max-width, merkezli |
| Tablet | 600–1023 | Gerektiğinde iki panel |
| Wide tablet | 1024+ | Sınırlandırılmış content canvas |

Tablet, telefondaki içeriği gereksiz yere büyütmez veya üç sütunlu dashboard’a dönüştürmez.

## 42. Orientation

Landscape daha fazla içerik göstermek için değil, aynı hiyerarşiyi rahat yerleştirmek için kullanılır. Immersive media ve meditation akışları özel landscape treatment alabilir.

## 43. Accessibility baseline

- WCAG 2.2 AA yaklaşımı
- minimum 44×44 pt; tercih edilen 48×48
- Dynamic Type / font scaling
- VoiceOver / TalkBack labels
- visible focus
- color-only meaning yok
- Reduce Motion
- Reduce Transparency
- Increase Contrast fallback
- screen zoom ve larger text ile kritik akışların bozulmaması

### 43.1 Decorative content

Dekoratif elementler accessibility tree’den gizlenir. İşlevsel botanical object rol, state ve action ile etiketlenir.

### 43.2 Content growth

- Metin sığdırmak için küçültülmez.
- Fixed-height text containers kullanılmaz.
- Buttons label uzadığında güvenli biçimde genişler veya belirlenmiş fallback uygular.
- RTL future compatibility göz önünde bulundurulur.

---

# PART X — TOKEN ARCHITECTURE

## 44. Token hierarchy

`Primitive → Semantic → Component → Runtime`

Alias/screen token yalnızca gerçekten tekrar eden bağlamsal ihtiyaç varsa eklenir. Screen başına token üretmek yasaktır.

## 45. Token groups

Primitive:

- color
- space
- size
- radius
- borderWidth
- opacity
- blur
- shadow
- elevation
- typography
- duration
- easing
- motionDistance
- haptic

Semantic:

- surface
- text
- border
- action
- state
- feedback
- navigation
- ambient

Runtime:

- timeOfDay
- season
- motionScale
- reducedMotion
- reducedTransparency
- lowPower

## 46. Token format

Machine-readable tokenlar W3C Design Tokens formatına yakın `$type`, `$value`, `$description` yapısını kullanır. Uygulama build pipeline’ı Style Dictionary veya eşdeğer transform katmanıyla React Native TypeScript çıktısı üretir.

Hardcoded visual value production component içinde yasaktır.

---

# PART XI — FRONTEND UI ARCHITECTURE

## 47. Önerilen klasör yapısı

```text
src/
  design-system/
    tokens/
    primitives/
    components/
    hooks/
    theme/
    accessibility/
  domain-ui/
  patterns/
  screens/
  living-world/
  assets/
```

## 48. Source-of-truth modeli

- Master document: karar ve kullanım otoritesi
- Token JSON: makine okunabilir değer otoritesi
- TypeScript token output: runtime otoritesi
- Figma Variables: görsel authoring mirror’ı

Figma ile kod tokenları aynı version numarasıyla güncellenir.

## 49. Dependency rule

- Screen → Pattern/Domain/Core
- Pattern → Domain/Core/Foundation
- Domain → Core/Foundation
- Core → Foundation/Tokens
- Foundation → Tokens

Ters bağımlılık yasaktır.

## 50. AI implementation rule

AI ajanları implementer’dır; tasarım karar vericisi değildir.

Sıra:

1. inventory ara
2. mevcut component’i yeniden kullan
3. composition dene
4. mevcut component’i kontrollü extend et
5. yeni component için açık onay iste

AI yeni renk, spacing, motion, radius, navigation veya gesture icat edemez.

---

# PART XII — FIGMA & FABLE

## 51. Figma file architecture

```text
00_Cover_And_Governance
01_Foundations
02_Primitives
03_Core_Components
04_Domain_Components
05_Patterns
06_Templates
07_Screens
08_Prototype
90_Experiments
99_Archive
```

### 51.1 Figma rules

- Auto Layout zorunlu
- Variables kullanımı zorunlu
- detached production component yasak
- component properties ve variants kontrollü
- local color/text/effect styles yasak
- experiment’ler production pages’a kopyalanmaz; promote edilir

## 52. Fable ownership

Fable şu işler için kullanılır:

- reusable logo/loading motion
- botanical bloom/growth
- complex organic reveal
- breathing guides
- premium discovery moments
- reusable celestial/botanical assets

Kod tarafı şu işleri sahiplenir:

- parallax
- simple fade/scale
- press feedback
- sheet transitions
- scroll interpolation
- time-of-day color interpolation
- lightweight particles

Her Fable asset:

- purpose
- duration
- loop behavior
- transparent background
- reduced-motion fallback
- export format
- asset ID

tanımlamadan production’a girmez.

---

# PART XIII — QUALITY GATES

## 53. Design gate

- Naked UI Test geçti mi?
- Hiyerarşi tek bakışta anlaşılır mı?
- Dekoratif yoğunluk sınırlı mı?
- Premium algı spacing ve type’tan mı geliyor?

## 54. UX gate

- Birincil niyet açık mı?
- Back ve exit davranışı açık mı?
- Gereksiz karar var mı?
- Interaction pattern sistemden mi geliyor?

## 55. Accessibility gate

- Screen reader
- Dynamic Type
- contrast
- touch target
- Reduce Motion
- Reduce Transparency
- visible focus

## 56. Responsive gate

- 320–374 compact
- 390 reference
- large phone
- tablet
- landscape
- long localized text

## 57. Motion gate

- motion anlamlı mı?
- motion budget içinde mi?
- reduced fallback var mı?
- reading veya input’u kesiyor mu?

## 58. Performance gate

- 60 fps hedefi
- unnecessary blur yok
- nested shadow/blur yok
- low-power fallback var
- heavy asset lazy-loaded
- startup animation kritik render’ı bloklamıyor

## 59. Token gate

- hardcoded color yok
- hardcoded spacing yok
- local radius/shadow/motion yok
- semantic token doğru mu?

## 60. Release acceptance

Bir UI deliverable production-ready sayılmak için Design, UX, Accessibility, Responsive, Motion, Performance ve Token gate’lerini geçmelidir.

---

# PART XIV — FROZEN DECISIONS

## 61. v1.0 kilitli kararlar

- `LOCKED` Dört root tab korunur: Ana Sayfa, Sohbet, Keşif, Bahçe.
- `LOCKED` Tasarım sistemi marka adından bağımsızdır.
- `LOCKED` Light-first adaptive ambient theme kullanılır; v1.0’da full dark mode yoktur.
- `LOCKED` Editorial Botanical ana görsel dildir; explicit fantasy/occult game estetiği kullanılmaz.
- `CANONICAL` Living World Engine tüm ürünün environmental runtime katmanıdır.
- `CANONICAL` Motion behavior’dır, decoration değildir.
- `CANONICAL` Design tokens primitive → semantic → component → runtime katmanlarını kullanır.
- `CANONICAL` AI ajanları karar üretmez; sistemi uygular.
- `CANONICAL` Ekranlar mevcut component ve pattern’lerden assemble edilir.
- `CANONICAL` Editoryal otorite bu belgenin dışındadır.

## 62. Değişiklik yönetimi

v1.0 sonrası değişiklikler:

- Patch: typo, açıklama ve non-behavioral düzeltme
- Minor: yeni non-breaking token, component variant veya pattern
- Major: navigation, token hierarchy, component behavior veya foundation değişikliği

Her major değişiklik Architecture Decision kaydı gerektirir.

---

# APPENDIX A — IMPLEMENTATION PRIORITY

## A1. Sprint 0 — Foundation setup

1. Token files ve TypeScript transform
2. Theme provider
3. Accessibility hooks
4. Surface
5. Stack
6. Text
7. Icon
8. Divider
9. Spacer

## A2. Sprint 1 — Core interaction

1. Button / IconButton
2. Card
3. Input
4. Search
5. Chip/Tag/Badge
6. Progress
7. Sheet/Dialog
8. Toast/Snackbar
9. Skeleton/Loader

## A3. Sprint 2 — Navigation and states

1. BottomNavigation
2. TopBar
3. EmptyState
4. ErrorState
5. OfflineState
6. PermissionState
7. LockedState

## A4. Sprint 3 — Domain UI

Domain component’ler mevcut ekran spesifikasyonlarındaki tekrarlar analiz edildikten sonra oluşturulur. Tek ekranda kullanılan yapı component library’ye alınmaz.

## A5. Sprint 4 — Living World prototype

İlk dikey dilim:

- Ana Sayfa
- time-of-day ambient layer
- minimal parallax
- bir environmental response
- reduced-motion ve low-power fallback

Bu dilim cihazda onaylanmadan tüm uygulamaya yayılmaz.

---

# APPENDIX B — DEFINITION OF DONE

Bir ekran tamamlanmış sayılırsa:

- master ve güncel screen spec ile uyumlu
- mevcut components kullanılmış
- tüm state’ler tasarlanmış
- compact/standard/large/tablet test edilmiş
- accessibility semantics eklenmiş
- reduced motion uygulanmış
- hardcoded visual values yok
- Fable asset manifest’e kayıtlı
- visual regression snapshot mevcut
- gerçek cihazda performans doğrulanmış

---

**END OF CANONICAL MASTER — v1.0**
