
===== DOSYA: docs/design/00_VISUAL_SYSTEM_CANONICAL.md =====

# 00 — VISUAL SYSTEM CANONICAL

**Belge durumu:** CANONICAL / EN YÜKSEK ÖNCELİKLİ TASARIM KAYNAĞI  
**Proje:** Wellness Mobile App  
**Sürüm:** 1.0  
**Tarih:** 2026-07-20  
**Hedef ortam:** React Native + Expo + TypeScript  
**Uygulama ilkesi:** Bu belge ile çelişen eski moodboard, prompt, prototip, ekran veya kod kararı geçersizdir.
**Kapsam notu:** Bu belgenin geçersiz kılma yetkisi yalnız görsel/tasarım kararlarını kapsar; güvenlik ve içerik kuralları (T0 botanik dışlaması, tıbbi iddia/doz yasağı, astrolojide kesin kader dili yasağı, KVKK yükümlülükleri) bu paketin üstündedir ve bu paketle değiştirilemez.
**Öncelik notu (2026-07-21):** `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` bu paket içinde en yüksek önceliklidir; çelişkide 15 geçerlidir.

---

## 1. Amaç

Bu belge, uygulamanın tüm görsel kararlarını tek bir kanonik çerçevede kilitler. Claude Code, geliştiriciler, tasarımcılar ve içerik ekipleri bu belgeyi birincil referans olarak kullanmalıdır.

Uygulamanın hedef görünümü iki önceki yönün dengeli sentezidir:

1. **Önceki aydınlık, peri ışıltılı, yumuşak ve büyülü atmosfer**
2. **Yeni botanik olarak doğru, daha yetişkin, editoryal, renkleri çeşitlendirilmiş ve bilimsel olarak güvenilir sistem**

Nihai denge:

> **%55 Luminous Editorial Botanical + %30 Soft Celestial Magic + %15 Living World Atmosphere**

Uygulama ne tamamen masalsı ve pastel, ne de kuru bir botanik ansiklopedi gibi görünmelidir.

---

## 2. Kanonik görsel kimlik

### 2.1 İsim

**Luminous Botanical Cosmos**

### 2.2 Ana tanım

Bilimsel botanik doğruluğu, astrolojik kozmoloji, yetişkin editoryal zarafet ve kontrollü yaşayan dijital doğanın birleşimi.

### 2.3 Ürün hissi

- Aydınlık
- İç açıcı
- Yumuşak ışıklı
- Renk açısından çeşitli
- Yetişkin ve rafine
- Botanik olarak güvenilir
- Kozmik ama veriyle temellendirilmiş
- Katmanlı ama okunaklı
- Büyülü ama çocukça olmayan
- Atmosferik ama işlevi gölgelemeyen

### 2.4 Kanonik estetik cümlesi

> The application must not look like a generic pastel wellness dashboard, a children’s fairy notebook, a dark witchcraft app, a dry botanical database, or a collection of uniformly lilac cards. It must feel like a living botanical and celestial editorial system: scientifically grounded, chromatically varied, softly luminous, mature, atmospheric, and responsive to time, content, and meaningful user moments.

Türkçe karşılığı:

> Uygulama sıradan pastel wellness paneli, çocuklara yönelik peri defteri, koyu cadılık uygulaması, kuru bir botanik veri tabanı veya tamamen lila kartlardan oluşan bir arayüz gibi görünmemelidir. Bilimsel olarak temellendirilmiş, renk açısından çeşitli, yumuşak ışıklı, yetişkin, editoryal ve günün saatiyle anlamlı kullanıcı anlarına tepki veren canlı bir botanik-kozmik sistem gibi hissettirmelidir.

---

## 3. İki yön arasındaki kesin denge

### 3.1 Korunacak özellikler — önceki peri ışıltılı yönden

- Yumuşak iç ışık
- Hafif glow ve ışık parçacıkları
- Ferah pastel geçişler
- Duygusal olarak davetkâr atmosfer
- Rüya benzeri derinlik
- İnce celestial çizimler
- Zarif cam yüzeyler
- Özel anlarda şiirsel görsel dönüşüm

### 3.2 Korunacak özellikler — yeni botanik editoryal yönden

- Gerçek bitki renkleri
- Doğru tür temsili
- Bilimsel isimlerin görünürlüğü
- Mineral ve doğal nötr yüzeyler
- Daha yetişkin tipografi ve kompozisyon
- Daha az yuvarlatılmış, daha kontrollü kart sistemi
- Daha az dekoratif yıldız ve kristal
- İçerik bazlı renk çeşitliliği
- Saat ve bağlama göre atmosfer değişimi

### 3.3 Azaltılacak özellikler

- Her ekranın lila olması
- Her kartta glow
- Her bitkinin pembe/mor resmedilmesi
- Kristal ve peri etkisinin sürekli kullanılması
- Aşırı yuvarlak, oyuncak benzeri bileşenler
- Sticker hissi veren semboller
- İçeriğin önüne geçen illüstrasyon
- Aynı pastel gradient’in tüm modüllerde tekrar edilmesi

---

## 4. Tema ve gün döngüsü

### 4.1 Tema politikası

Uygulama **light-first** olacaktır. V1 kapsamında tam bağımsız dark mode bulunmayacaktır.

Bunun yerine:

- Gün içinde atmosfer değişir.
- Akşam ve gece seçili yüzeyler koyulaşır.
- Okuma, form ve veri girişi yüzeyleri erişilebilirlik için açık kalabilir.
- Kullanıcı “sabit gündüz görünümü” seçebilir.

### 4.2 Gün döngüsü evreleri

#### Dawn

- Pearl cream
- Pale peach
- Mist blue
- Soft gold
- Çiy, hafif sis, yumuşak sabah ışığı

#### Day

- Warm ivory
- Mineral cream
- Gerçek botanik yeşiller
- Sky blue
- Minimum glow

#### Golden Hour

- Apricot
- Ochre
- Copper
- Olive
- Muted rose

#### Dusk

- Dusk blue
- Smoky mauve
- Deep teal
- Plum
- Moon silver

#### Night

- Deep indigo
- Ink blue
- Dark teal
- Muted aubergine
- Warm candle gold

### 4.3 Geçiş davranışı

- Ani tema değişimi yasaktır.
- Atmosfer 20–40 dakika içinde yumuşak biçimde dönüşmelidir.
- Her ekran aynı oranda koyulaşmaz.
- Home ve Garden en görünür değişimi taşır.
- Journal ve veri girişi yüzeyleri daha sabit kalır.

---

## 5. Renk politikası

### 5.1 Ana ilke

Lila marka kimliğinin tek baskın rengi değildir. Lila yalnızca ikincil celestial vurgu olarak kullanılır.

### 5.2 Temel renk aileleri

#### Nötr yüzeyler

- Warm ivory
- Mineral cream
- Pearl
- Pale stone
- Mist grey
- Soft parchment

#### Botanik renkler

- Sage
- Moss
- Fern
- Olive
- Eucalyptus
- Laurel
- Bark brown
- Earth ochre
- Dried herb beige
- Deep forest

#### İçerik vurgu renkleri

- Poppy red
- Saffron
- Marigold
- Cornflower blue
- Iris violet
- Peony pink
- Rosewood
- Terracotta
- Berry
- Plum
- Peach
- Citrus yellow

#### Kozmik renkler

- Dusk blue
- Celestial blue
- Deep teal
- Indigo
- Muted violet
- Moon silver
- Warm gold
- Copper

### 5.3 Genel kullanım oranı

- %50–60 nötr/açık yüzey
- %20–25 gerçek botanik renk
- %10–15 içeriğe özel vurgu
- %5–8 celestial/glyph rengi
- %2–4 soft gold veya iridescent highlight

### 5.4 Yasaklar

- Tüm kartlarda lila gradient
- Her aktif durumda pembe glow
- Tüm ikonlarda aynı mor ton
- Bitki renklerini marka paletine zorla uyarlamak
- Gece modunda düz siyah yüzey
- Renk dışında durum göstergesi kullanmak

---

## 6. Botanik doğruluk

Botanik doğruluk görsel stil değil, zorunlu ürün standardıdır.

### 6.1 Bitki kartlarında zorunlu bilgiler

- Yaygın Türkçe ad
- İngilizce ortak ad, gerekiyorsa
- Kabul edilmiş bilimsel ad
- Familya, detay ekranında
- Kullanılan bitki bölümü
- Görsel doğrulama durumu
- Toksisite durumu
- İçeriğin bilimsel, tarihsel veya sembolik bağlamı

### 6.2 Kart örneği

**Papatya**  
*Matricaria chamomilla*  
ASTERACEAE

### 6.3 Önemli türler

Generik ad tek başına yeterli değildir.

Doğru örnekler:

- *Lavandula angustifolia*
- *Salvia officinalis*
- *Mentha × piperita*
- *Artemisia vulgaris*
- *Atropa belladonna*
- *Calendula officinalis*
- *Hypericum perforatum*
- *Borago officinalis*

### 6.4 Görsel sınıfları

1. **Scientific botanical** — tür tanımaya uygun
2. **Editorial botanical** — tür doğruluğunu koruyan, atmosferik
3. **Symbolic botanical** — tarihsel/mitolojik/ritüel bağlam

Bu sınıflar veri modelinde açıkça ayrılmalıdır.

### 6.5 Yasaklar

- Aynı generik çiçek görselini farklı bitkilerde kullanmak
- Türü yanlış renk veya yaprak formuyla göstermek
- Fantastik efektle morfolojiyi kapatmak
- Zehirli bitkiyi masum wellness otu gibi sunmak
- Doğrulanmamış AI görselini production’a almak

---

## 7. Ana sekmeler ve modüller

### 7.1 Bottom navigation — ana sekmeler

1. **Home**
2. **Garden**
3. **Plants**
4. **Mood**
5. **Journal**

### 7.2 İkincil modüller

- Astrology
- Skin Care
- Cycle
- Rituals
- Profile / Sanctuary
- Explore

Bu modüller ana sekmeler içinde veya Home/Explore üzerinden açılır.

### 7.3 Sekme kimlikleri

#### Home

- Günlük pusula
- Günlük bitki
- Günlük enerji
- Tek celestial insight
- Günün saatine göre atmosfer

#### Garden

- Yaşayan, gelişen botanik alan
- Gerçek bitkiler
- Kontrollü celestial öğeler
- Water / Nourish / Collect / Explore aksiyonları
- Çocuk oyunu gibi değil, yetişkin koleksiyon/ritüel bahçesi

#### Plants

- Bilimsel adı görünür bitki kütüphanesi
- Tür bazlı görseller
- Filtreleme
- Bilimsel, editoryal ve sembolik içerik ayrımı

#### Mood

- Duygusal spektrum
- Sakin, mineral yüzeyler
- Renkli ama dengeli mood işaretleri
- Kısa check-in

#### Journal

- Kâğıt, mürekkep, preslenmiş botanik hissi
- Minimum glow
- Uzun metin için yüksek okunabilirlik

---

## 8. İkincil modül görünümü

### 8.1 Astrology

- Temiz veri çizimleri
- Tutarlı glyph sistemi
- Gerçek verilere bağlı semboller
- Dekoratif yıldız yoğunluğu düşük
- Gezegenler kendi renk ailesine sahip

### 8.2 Skin Care

- Mineral, dewy, bilimsel ve bitki destekli
- Dermatoloji bilgisi ile botanik içeriği ayıran yapı
- Daha temiz, daha az mistik yüzey
- İçerik odaklı rutin ve aktif bileşen kartları

### 8.3 Cycle

- Muted rose, terracotta, sage, indigo
- Faz halkası
- Enerji, semptom ve not takibi
- Çocukça veya aşırı pembe görünüm yok

### 8.4 Rituals

- İçeriğe göre atmosfer
- Başlangıçta kısa M3 reveal
- Uygulama sırasında sadeleşen ekran
- Mum, bitki, ay veya su gibi tek ana odak

### 8.5 Garden

- Gerçekçi bitkiler
- Yol, su, taş, toprak, sis, gün ışığı
- Çok sınırlı glow
- Dönemsel çiçeklenme
- Kullanıcının ilerlemesiyle değişen kompozisyon

---

## 9. Astroloji glyph sistemi

### 9.1 Teknik karar

- SVG component set
- Aynı viewBox
- Aynı stroke ağırlığı
- Aynı optik boyut
- Unicode yalnızca fallback
- Accessibility label zorunlu

### 9.2 Gezegen renkleri

- Sun — warm gold
- Moon — moon silver / mist blue
- Mercury — soft slate
- Venus — muted rose / copper
- Mars — terracotta
- Jupiter — royal blue / warm ochre
- Saturn — stone / graphite
- Uranus — pale electric blue
- Neptune — ocean blue
- Pluto — deep plum

### 9.3 Zodiac renkleri

Zodiac glyphleri element veya bağlam bazlı renklendirilebilir. Tüm glyphlerin gökkuşağı neon görünmesi yasaktır.

---

## 10. Hareket ve Living World

### 10.1 Hareket ilkesi

Hareket sürekli dikkat çekmez; çoğunlukla hissedilir.

### 10.2 Hareket seviyeleri

- **M0 Static** — Ayarlar, izinler, uzun okuma
- **M1 Ambient** — Home, Garden, Plant detail, Journal
- **M2 Responsive** — Chip, favori, filtre, save
- **M3 Moment** — Daily reveal, astro result, ritual start/end

### 10.3 Onaylı hareketler

- Yaprakta mikro nefes
- Hafif parallax
- Yavaş ışık geçişi
- Orbit on tap
- Moon phase shadow transition
- Ritual reveal
- Mood completion pulse
- Garden bloom event

### 10.4 Kısıtlar

- Aynı anda maksimum 1 ana + 1 ambient motion
- Sürekli çalışan yoğun particle yok
- Metin alanında hareket yok
- Reduced Motion’da static fallback
- Düşük cihazlarda glow/particle azaltma

---

## 11. Görsel yoğunluk

- **V0 Utility** — Form, ayar, izin
- **V1 Editorial** — Liste, detay, journal
- **V2 Immersive** — Home hero, Garden, Explore hero
- **V3 Ceremonial** — Reveal, completion, özel astro anı

Her ekran V2/V3 olamaz.

---

## 12. Kart ve yüzey sistemi

### 12.1 Radius

- Small controls: 10–12
- Standard card: 16
- Feature card: 20
- Hero surface: 24
- Pill: sadece chip/filter/CTA

### 12.2 Yüzey ilkeleri

- Her kart cam değildir.
- Ana içerik kartları daha opak ve okunaklıdır.
- Hero ve özel kartlarda hafif glass kullanılabilir.
- Glow yalnızca seçili, aktif veya özel durumda.
- Düz mineral yüzeyler sistemin ana taşıyıcısıdır.

---

## 13. Tipografi

### 13.1 Yön

- Display/headings: zarif, editoryal serif
- Body/UI: temiz, modern sans

### 13.2 Serif kullanımı

- H1/H2
- Bitki adı
- Ritual adı
- Özel alıntı veya sayı

### 13.3 Sans kullanımı

- Navigation
- Form
- Chip
- Metadata
- Uzun açıklama
- Bilimsel bilgi
- Güvenlik metni

### 13.4 Bilimsel isim

- İtalik
- Yaygın adın hemen altında
- Silik olmayan kontrast

---

## 14. Performans bütçesi

- Aynı ekranda maksimum 2 gerçek blur surface
- Listelerde gerçek blur yerine tinted surface
- Sürekli JS animation yok
- Transform ve opacity ağırlıklı motion
- Büyük görseller WebP
- Glyphler SVG
- Hero animasyonu açılıştan sonra düşük frekansa geçebilir
- Reduced Motion’da static artwork

---

## 15. Erişilebilirlik

- Metin kontrastı WCAG AA hedefi
- Body metinde düşük opacity yasak
- Touch target minimum 44×44
- Dynamic Type desteği
- Screen reader labels
- Reduce Motion
- Reduce Transparency fallback
- Durumlar yalnızca renkle anlatılmaz
- Glyphler erişilebilir ad taşır

---

## 16. Claude Code için zorunlu uygulama kuralları

Claude Code:

1. Bu belgeyi görsel sistemin tek kanonik kaynağı olarak kabul etmelidir.
2. Önce mevcut component ve tokenları audit etmelidir.
3. Tüm ekranları bir anda yeniden yazmamalıdır.
4. Önce tokenlar, sonra primitive componentler, sonra ekran kontratları uygulanmalıdır.
5. Görsel doğruluğu olmayan bitki asset’i üretmemelidir.
6. Unicode astro glyphlerine güvenmemelidir.
7. Demo moodboard metinlerini production verisi gibi kullanmamalıdır.
8. Saat bazlı atmosferi yalnızca kanonik token sistemi üzerinden uygulamalıdır.
9. Performans ve erişilebilirlik sınırlarını ihlal etmemelidir.
10. Her ekranı visual QA checklist ile doğrulamalıdır.

---

## 17. Onay durumu

Bu belge ile aşağıdaki kararlar kilitlenmiştir:

- Luminous Botanical Cosmos ana kimliği
- Önceki peri ışıltısı ile yeni botanik editoryal yönün orta noktası
- Light-first + adaptif dusk/night atmosferi
- Lila yoğunluğunun azaltılması
- Renk çeşitliliği
- Botanik tür doğruluğu
- Bilimsel isimlerin görünürlüğü
- Home / Garden / Plants / Mood / Journal ana sekmeleri
- Astrology / Skin Care / Cycle / Rituals ikincil modülleri
- SVG zodiac ve planetary glyph sistemi
- M0–M3 motion sistemi
- V0–V3 visual intensity sistemi
- Yetişkin, editoryal, bilimsel ve yumuşak büyülü ton

---

## 18. Sonraki bağlı belgeler

Bu belge tamamlandıktan sonra aşağıdaki dosyalar üretilmelidir:

1. `01_VISUAL_DIRECTION.md`
2. `02_COLOR_AND_GRADIENT_TOKENS.md`
3. `03_TYPOGRAPHY_SYSTEM.md`
4. `04_SURFACE_GLASS_GLOW_SYSTEM.md`
5. `05_ICON_ZODIAC_PLANET_GLYPH_SYSTEM.md`
6. `06_BOTANICAL_AND_CELESTIAL_ART_DIRECTION.md`
7. `07_COMPONENT_LIBRARY_CONTRACT.md`
8. `08_SCREEN_COMPOSITION_CONTRACTS.md`
9. `09_MOTION_HAPTICS_LIVING_WORLD.md`
10. `10_ASSET_PIPELINE_AND_NAMING.md`
11. `11_ACCESSIBILITY_AND_PERFORMANCE_BUDGET.md`
12. `12_VISUAL_QA_ACCEPTANCE_CHECKLIST.md`
13. `13_IMPLEMENTATION_PHASE_PLAN.md`
14. `14_CLAUDE_CODE_MASTER_INSTRUCTION.md`



===== DOSYA: docs/design/01_VISUAL_DIRECTION.md =====

# 01 — VISUAL DIRECTION

**Belge durumu:** CANONICAL SUPPORTING SPECIFICATION  
**Bağlı olduğu ana belge:** `00_VISUAL_SYSTEM_CANONICAL.md`  
**Proje:** Wellness Mobile App  
**Sürüm:** 1.0  
**Tarih:** 2026-07-20  
**Hedef ortam:** React Native + Expo + TypeScript

---

## 1. Belgenin amacı

Bu belge, `Luminous Botanical Cosmos` görsel kimliğinin uygulama boyunca nasıl yorumlanacağını tanımlar. Renk tokenları, komponent ölçüleri ve teknik implementasyon başka dosyalarda ayrıntılandırılır; bu belge ise her ekranın taşıması gereken **atmosferi, görsel karakteri, yoğunluk seviyesini, kompozisyon mantığını ve kaçınılması gereken kalıpları** kilitler.

Bu belge tasarım üretirken şu soruya cevap verir:

> “Bu ekran işlevsel olarak doğru olmanın ötesinde, uygulamanın dünyasına ait olduğunu nasıl hissettirecek?”

---

## 2. Ana yaratıcı yön

### 2.1 Görsel karışım

Nihai ürün aşağıdaki üç katmanın dengeli sentezidir:

- **%55 Luminous Editorial Botanical**  
  Bilimsel doğruluk, gerçek bitki renkleri, çağdaş editoryal kompozisyon, materyal hissi ve yetişkin zarafeti.

- **%30 Soft Celestial Magic**  
  Ay ışığı, yumuşak halo, göksel çizimler, ince parıltı, zarif astrolojik glyphler ve rüya benzeri derinlik.

- **%15 Living World Atmosphere**  
  Gün döngüsü, nefes alan yapraklar, yavaş orbit hareketleri, ışık değişimleri ve anlamlı anlarda çalışan kısa görsel dönüşümler.

### 2.2 Temel yaratıcı gerilim

Uygulama iki uç arasında bilinçli olarak konumlanır:

| Fazla masalsı uç | Kanonik orta nokta | Fazla bilimsel uç |
|---|---|---|
| Çocuk defteri, sticker, peri figürleri, aşırı pembe-lila | Yumuşak ışıklı, yetişkin, botanik olarak doğru, editoryal ve yaşayan | Kuru ansiklopedi, steril klinik ekran, duygusuz veri tabanı |

Her tasarım kararı bu orta noktayı korumalıdır.

---

## 3. Marka duygusu

Kullanıcı uygulamayı açtığında şu duygular sırasıyla oluşmalıdır:

1. **Merak:** “Bugün burada ne değişmiş?”
2. **Canlılık:** “Bu dünya yaşıyor.”
3. **Güven:** “İçerik güzel olduğu kadar doğru ve özenli.”
4. **Sakinlik:** “Arayüz beni yormuyor.”
5. **Kişisel bağ:** “Bu atmosfer bana, zamana ve içeriğe tepki veriyor.”

Uygulama kullanıcının dikkatini agresif biçimde talep etmez. Onu içine çeken fakat çıkmasına izin veren bir dijital çevre gibi davranır.

---

## 4. Görsel dilin ana bileşenleri

### 4.1 Işık

Işık, stilin en önemli ayırt edici öğesidir.

Kullanılacak ışık türleri:

- İçten gelen yumuşak ışık
- Sabah sisinden geçen güneş
- Yaprak kenarında ince rim light
- Cam veya su yüzeyinde refraksiyon
- Ay ışığıyla oluşan soğuk halo
- Akşamları düşük yoğunluklu sıcak mum ışığı
- Seçili bileşenlerde kontrollü iridescent highlight

Kullanılmayacak ışık türleri:

- Her öğede neon kontur
- Sürekli parlayan pembe glow
- Okunabilirliği düşüren yoğun bloom
- Her kart köşesinde yıldız patlaması
- Fantastik ışıkla botanik anatomiyi gizleme

### 4.2 Doku

Doku, dijital yüzeylerin steril görünmesini engeller.

Tercih edilen dokular:

- Hafif kâğıt veya mineral grain
- Sisli cam
- Su, çiy ve buğu
- Mat seramik
- İnce metalik altın veya bakır çizgi
- Botanik baskı ve herbarium kâğıdı
- Taş, doğal lif, kuru yaprak ve ahşap tonları

Doku hiçbir zaman metin okunabilirliğini azaltmamalıdır.

### 4.3 Derinlik

Derinlik şu araçlarla oluşturulur:

- Katmanlı foreground / midground / background
- Kontrollü blur
- Görselin kart sınırını kısmen aşması
- İnce iç gölge
- Çok düşük yoğunluklu parallax
- Yüzey opaklığı farkı
- Hiyerarşik boyut farkı

Derinlik, çok sayıda gölge ve cam kart yığmak anlamına gelmez.

### 4.4 Boşluk

Editoryal boşluk, görsel zenginliği dengeleyen zorunlu öğedir.

- Yoğun hero alanından sonra nefes alan sakin bölüm gelmelidir.
- Aynı viewport içinde en fazla bir güçlü görsel odak bulunmalıdır.
- Dekoratif motifler metin bloklarının çevresinde güvenli boşluk bırakmalıdır.
- Kartların birbirinden ayrılması yalnızca gölgeyle değil, ritim ve boşlukla sağlanmalıdır.

---

## 5. Gün döngüsü ve atmosfer yönü

### 5.1 Dawn

**Duygu:** Uyanış, berraklık, yeni başlangıç.  
**Görsel karakter:** Açık peach, pearl, sisli mavi, çiy damlası, yatay yumuşak ışık.  
**Hareket:** Çok hafif ışık yükselişi, bir kez yaprak açılması.  
**Kullanım:** Home, Garden, sabah rutinleri, cycle insight.

### 5.2 Day

**Duygu:** Netlik, güven, işlevsellik.  
**Görsel karakter:** Warm ivory, gerçek botanik yeşiller, açık sky blue, minimum glow.  
**Hareket:** Yalnızca çok düşük ambient hareket.  
**Kullanım:** Plants, Skin Care, Journal, veri girişi, uzun okuma.

### 5.3 Golden Hour

**Duygu:** Canlılık, sıcaklık, tamamlama.  
**Görsel karakter:** Apricot, ochre, olive, copper, uzun gölgeler.  
**Hareket:** Hafif ışık geçişi ve sıcak tonların artması.  
**Kullanım:** Mood, Garden, gün sonu check-in, sosyal veya paylaşım anları.

### 5.4 Dusk

**Duygu:** İçsel dönüş, yavaşlama, sezgi.  
**Görsel karakter:** Dusk blue, deep teal, smoky mauve, plum, moon silver.  
**Hareket:** Göksel katmanın görünürleşmesi, çok yavaş orbit, yıldız yoğunluğunda küçük artış.  
**Kullanım:** Home, Astrology, Rituals, Mood.

### 5.5 Night

**Duygu:** Dinlenme, mahremiyet, ritüel.  
**Görsel karakter:** Deep indigo, ink blue, dark teal, candle gold.  
**Hareket:** Minimum; dikkat dağıtmayan yavaş halo veya ışık dalgası.  
**Kullanım:** Sleep, Rituals, Journal, gece check-in.

### 5.6 Ekranlara göre tema etkisi

- **Home:** Güçlü adaptasyon
- **Garden:** Güçlü adaptasyon
- **Astrology:** Orta-güçlü adaptasyon
- **Mood:** Orta adaptasyon
- **Rituals:** İçeriğe bağlı güçlü adaptasyon
- **Plants:** Hafif-orta adaptasyon; bitki doğruluğu korunur
- **Skin Care:** Hafif adaptasyon; klinik okunabilirlik korunur
- **Cycle:** Hafif-orta adaptasyon
- **Journal:** Hafif adaptasyon; yazı yüzeyi sabit ve sakin

---

## 6. Ana navigasyonun görsel karakteri

Kanonik ana sekmeler:

1. **Home**
2. **Garden**
3. **Plants**
4. **Mood**
5. **Journal**

Astrology, Skin Care, Cycle ve Rituals ana sekme değildir; Home, Explore/Tools, profile veya bağlamsal modül girişlerinden erişilen derin modüllerdir.

### 6.1 Bottom navigation görünümü

- Yüzey: sıcak ivory veya bağlama göre hafif tinted mineral yüzey
- Radius: pill değil; kontrollü 20–24 px konteyner
- İkonlar: monoline, 1.5–1.75 px optik stroke
- Aktif durum: dolu arka plan yerine düşük yoğunluklu renk alanı + icon emphasis
- Aktif ikon rengi: modül veya gün atmosferine uyarlanabilir, fakat metin okunabilirliği korunur
- Pasif ikon rengi: dusty slate / muted botanical grey
- Glow: yalnızca çok küçük ve aktif durumla sınırlı
- Navigasyon her ekranın tematik dekorasyonunu taşımaz; sistemik ve sakin kalır

### 6.2 Sekme kimlikleri

#### Home

- İkon: ev veya güneş ufku sentezi
- Ana renk: günün saatine göre adaptif
- Duygu: yön bulma, kişisel günlük pusula

#### Garden

- İkon: filiz veya bahçe kapısı
- Ana renk: moss, fern, celestial gold
- Duygu: yaşayan dünya, bakım, büyüme, keşif

#### Plants

- İkon: bilimsel yaprak veya herbarium dalı
- Ana renk: içeriğe göre gerçek botanik renk
- Duygu: güvenilir botanik bilgi ve kürasyon

#### Mood

- İkon: yumuşak yüz değil; orb, dalga veya kalp-enerji işareti
- Ana renk: spektrum temelli fakat kontrollü
- Duygu: farkındalık, check-in, duygusal izleme

#### Journal

- İkon: açık kitap veya sayfa
- Ana renk: ink, parchment, muted rosewood
- Duygu: mahremiyet, anlamlandırma, kayıt

---

## 7. Sekme ve modül bazında görsel yön

## 7.1 Home / Daily Compass

### Rol

Uygulamanın günün saatine ve kullanıcı bağlamına en çok tepki veren ekranıdır.

### Kompozisyon

- Üst bölümde tek güçlü hero
- Günlük bitki veya canlı botanical subject
- Günlük enerji / astrolojik bağlam
- Mood check-in
- Bir veya iki ritüel / öneri kartı
- Gereksiz dashboard yoğunluğu yok

### Görsel dil

- Günün saatine göre değişen ışık
- Tek ana bitki veya göksel odak
- Kartlar farklı renklerde değil; ortak yüzey sistemi üzerinde içerik rengiyle ayrışır
- Celestial motifler gerçek veriye bağlıysa görünür; dekoratifse ikincil

### Yoğunluk

- Görsel yoğunluk: V2 Immersive
- Hareket: M1 Ambient, belirli anlarda M3 Moment

### Kaçınılacaklar

- Çok sayıda küçük widget
- Her kartta ayrı gradient
- Tüm bilgilerin ilk viewporta sıkıştırılması
- Aynı anda ay, kristal, çiçek, gezegen ve yıldız kalabalığı

---

## 7.2 Garden

### Rol

Kullanıcının bakım, ilerleme, koleksiyon ve keşif davranışlarını yaşayan bir dünyada deneyimlediği sekmedir.

### Görsel yön

Bahçe çocuk oyunu gibi değil; atmosferik, doğal ve hafif kozmik bir botanik alan olmalıdır.

- Gerçekçi bitki formları
- Organik patikalar
- Güne göre ışık değişimi
- Bitkilerin gelişim aşamaları
- Sınırlı glowing markers
- Göksel olayların ortamı hafifçe etkilemesi

### Bahçe öğeleri

- Bitki yatakları
- Herbarium köşesi
- Su / bakım alanı
- Kozmik gözlem noktası
- Mevsimsel veya güncel bitki bloom alanı
- Toplanan tohum / yaprak / bilgi arşivi

### Hareket

- Yapraklarda mikro nefes
- Su yüzeyinde düşük yoğunluklu hareket
- Seçili bitkide hafif parallax
- Bloom veya milestone sırasında kısa M3 reveal

### Yoğunluk

- Görsel yoğunluk: V2 Immersive
- Hareket: M1 Ambient + nadir M3

### Kaçınılacaklar

- Farmville benzeri oyun estetiği
- Kawaii bitki karakterleri
- Parlak coin, puan patlaması, sticker ödüller
- Her yerde parlayan orb

---

## 7.3 Plants / Herbal Library

### Rol

Bilimsel doğruluk ve editoryal güzelliğin en net birleştiği sekmedir.

### Kart görünümü

Her bitki kartında minimum:

- Türkçe ortak ad
- Bilimsel ad italik
- Doğru bitki görseli
- Kısa kategori veya kullanım etiketi
- Varsa toksisite veya özel uyarı göstergesi

Örnek:

**Papatya**  
*Matricaria chamomilla*  
Calming · Digestive

### Detay ekranı

- Büyük fakat morfolojik olarak doğru hero
- Common name + scientific name
- Familya
- Kullanılan bölüm
- Energetics / actions / traditional context
- Bilimsel, tarihsel ve sembolik bilgilerin görsel olarak ayrılması
- Astrolojik ilişki ana içerikten sonra gelir

### Renk

Ekranın vurgu paleti ilgili bitkinin gerçek renklerinden türetilir.

### Yoğunluk

- Liste: V1 Editorial
- Detay: V1–V2
- Hareket: M0 veya M1

### Kaçınılacaklar

- Her bitki için aynı mor çiçek
- Bilimsel adı gizlemek
- Fantastik görseli doğrulanmış botanik görsel gibi kullanmak
- Toksik bitkileri güvenli wellness otu gibi göstermek

---

## 7.4 Mood

### Rol

Kısa, duygusal olarak güvenli ve düşük bilişsel yükle check-in yapılmasını sağlar.

### Görsel yön

- Duygular yalnızca pembe-mor çiplerle temsil edilmez
- Kontrollü bir renk spektrumu
- Orb, dalga, halka veya nefes alan form
- Kullanıcının seçimine göre merkez formun çok kısa tepki vermesi
- Sonuç ekranında grafiksel ama yargılayıcı olmayan dil

### Renk

- Calm: sage / mist blue
- Energized: saffron / coral
- Sad: deep blue / slate
- Anxious: ochre / muted amber
- Tender: rosewood / blush
- Grounded: moss / clay

Renk dışında ikon ve metin de kullanılır.

### Yoğunluk

- V1 Editorial
- Check-in anı: V2
- Hareket: M2 Responsive

### Kaçınılacaklar

- Emoji tabanlı çocukça yüzler
- Kırmızı = kötü, yeşil = iyi gibi yargılayıcı kodlama
- Aşırı animasyon

---

## 7.5 Journal

### Rol

Uzun süreli yazı, yansıma ve kişisel kayıt alanıdır.

### Görsel yön

- Parchment, paper, ink ve pressed botanical hissi
- Minimal glow
- Sakin, geniş yazı alanı
- İstenirse hafif tarih veya lunar context
- Görsel ekler içerikten sonra gelir

### Yüzey

- Açık veya gece atmosferinde dahi okunaklı paper surface
- Çok hafif grain
- Yüksek kontrastlı metin
- İnce divider ve editorial spacing

### Yoğunluk

- V0–V1
- Hareket: M0

### Kaçınılacaklar

- Sürekli kayan dekorasyon
- Parlak gradient arka plan
- Okuma alanında sparkle
- Fazla script font

---

## 7.6 Astrology / Planets & Zodiac

### Rol

Gerçek hesaplanmış astrolojik veriyi erişilebilir ve estetik biçimde sunar.

### Görsel yön

- Temiz chart linework
- Tutarlı SVG glyph sistemi
- Gezegenlere özel kontrollü renkler
- Katmanlı fakat veri okunabilirliğini koruyan chart
- Seçili gezegen veya açıya odaklanan mikro animasyon

### Veri ve dekorasyon ayrımı

- Hesaplanmış öğeler yüksek belirginlikte
- Dekoratif constellation veya yıldızlar düşük belirginlikte
- Demo glyph kullanıcı verisi gibi sunulmaz

### Yoğunluk

- V1 Editorial
- Hero/result: V2
- Hareket: M2, nadiren M3

### Kaçınılacaklar

- Gökkuşağı neon zodiac
- Her glyphte ayrı glow
- Gerçek veriden bağımsız sembol kullanımı
- Çok ince ve okunmayan chart çizgileri

---

## 7.7 Skin Care

### Rol

Bilimsel olarak güvenilir, sakin ve premium cilt bakım deneyimi sunar.

### Görsel yön

- Mineral, dewy, clean editorial
- Botanik içerik varsa doğru bitki veya ingredient image
- Serum, krem, su, cam ve taş dokuları
- Rutin adımları net, sistematik ve sakin
- Klinik güven duygusu; masalsı ritüel tonundan daha az dekoratif

### Renk

- Mineral cream
- Mist blue
- Sage
- Soft peach
- Stone grey
- Küçük copper veya gold accent

### Yoğunluk

- V0–V1
- Hareket: M0–M1

### Kaçınılacaklar

- Bitkisel olduğu için otomatik yeşil-pembe palet
- Glow ile “mucize sonuç” ima etmek
- Cilt görsellerini aşırı retouch etmek
- Bilimsel iddiaları dekoratif kartlarla belirsizleştirmek

---

## 7.8 Cycle

### Rol

Döngü takibini sakin, yetişkin ve bedenle bağlantılı biçimde sunar.

### Görsel yön

- Halka / cycle visualization
- Lunar motif yalnızca yardımcı metafor; biyolojik verinin yerine geçmez
- Faz bazlı kontrollü renk değişimi
- Botanik motifler minimal
- Veri ve semptom alanları okunaklı

### Renk

- Follicular: fresh sage / pale sky
- Ovulatory: warm gold / coral
- Luteal: terracotta / rosewood
- Menstrual: deep berry / indigo / muted red

### Yoğunluk

- V1
- Hareket: M1 veya M2

### Kaçınılacaklar

- Her fazı pembe tonlarla göstermek
- Çocukça kalp ve çiçek ikonları
- Astrolojik metaforu tıbbi bilgi gibi sunmak

---

## 7.9 Rituals

### Rol

Kullanıcıyı kısa süreli, odaklı ve duygusal olarak anlamlı bir deneyime taşır.

### Görsel yön

- İçeriğe özel atmosfer
- Başlangıçta kısa reveal
- Ritüel başladıktan sonra görsel sadeleşme
- Materyal odaklı görseller: mum, su, bitki, taş, kâğıt
- Renk ve ışık ritüelin amacına göre değişir

### Yoğunluk

- Giriş: V2–V3
- Uygulama: V0–V1
- Tamamlama: kısa V3

### Hareket

- M3 başlangıç veya bitiş
- Uygulama sırasında minimum hareket

### Kaçınılacaklar

- Sürekli büyülü efekt
- Her ritüelde kristal veya ay
- Gerçekçi olmayan tıbbi/enerjetik vaat

---

## 8. Botanik görsel yönü

### 8.1 Görsel sınıfları

#### Scientific Botanical

- Tür tanımaya uygun
- Morfolojik doğruluk öncelikli
- Temiz arka plan veya herbarium düzeni

#### Editorial Botanical

- Tür doğruluğu korunur
- Işık, crop, katman ve materyal eklenebilir
- Uygulamanın ana görsel dili

#### Symbolic Botanical

- Tarihsel, mitolojik veya ritüel anlatım için
- Görselin sembolik olduğu metadata ve UI ile belirtilir

### 8.2 Kanonik bitki kartı estetiği

- Bitki görseli kartın yaklaşık %35–50’sini kullanabilir
- Common name en güçlü metin
- Scientific name hemen altında ve italik
- Familya veya kategori metadata seviyesinde
- Toxic / caution durumu renk dışında ikon ve text ile
- Kart dekorasyonu bitkinin gerçek rengine uyum sağlar

### 8.3 Tür çeşitliliği

Aynı UI sistemi aşağıdaki farklı renk karakterlerini kaldırmalıdır:

- Chamomile: beyaz / sarı / yeşil
- Calendula: turuncu / altın
- Borage: mavi
- Lavender: mor / gri-yeşil
- St. John’s Wort: sarı
- Peppermint: canlı yeşil
- Belladonna: koyu mor / kahverengi
- Rosemary: koyu yeşil / açık mavi
- Sage: gri-yeşil
- Saffron: mor / kırmızı / turuncu

---

## 9. Celestial görsel yönü

### 9.1 Planet glyph renkleri

- Sun: warm gold
- Moon: moon silver / mist blue
- Mercury: soft slate
- Venus: muted rose / copper
- Mars: terracotta
- Jupiter: royal blue / ochre
- Saturn: graphite / stone
- Uranus: pale electric blue
- Neptune: ocean blue
- Pluto: deep plum

### 9.2 Zodiac glyphleri

- Ana sistemde monoline ve tek optik ağırlık
- Element bazlı renk grupları kullanılabilir
- Profil veya chart üzerinde gerektiğinde monochrome
- Neon rainbow görünüm kullanılmaz

### 9.3 Göksel motif yoğunluğu

- Home hero: orta
- Astrology: veri odaklı yüksek
- Plants: düşük
- Skin Care: çok düşük
- Journal: çok düşük
- Garden: ambient orta
- Rituals: içerik bazlı

---

## 10. Dinamik görsel yön

### 10.1 Sürekli ambient hareketler

- Yaprakta mikro nefes
- Çok yavaş ışık değişimi
- Hafif parallax
- Nadir ışık parçacığı
- Çok yavaş orbit veya halo

### 10.2 Anlamlı an hareketleri

- Daily plant reveal
- Astro result alignment
- Moon phase transition
- Mood check-in completion
- Ritual start / completion
- Garden bloom / milestone
- Favorite / save micro-feedback

### 10.3 Hareket estetiği

Hareket:

- Akışkan
- Yavaşlayan easing ile
- Organik
- Sessiz
- Tek odaklı
- Reduced Motion uyumlu

Hareket olmamalı:

- Zıplayan
- Lastik gibi esneyen
- Konfeti benzeri
- Sürekli tekrar eden
- Aynı anda çok sayıda öğede

---

## 11. Kompozisyon kuralları

### 11.1 Bir ekranın görsel omurgası

Her ana ekran aşağıdakilerden oluşmalıdır:

1. **Context layer:** zaman, kullanıcı veya içerik bağlamı
2. **Primary focus:** tek ana görsel veya ana bilgi
3. **Editorial support:** açıklama, metadata, insight
4. **Action layer:** net CTA veya etkileşim
5. **Ambient layer:** çok düşük yoğunluklu atmosfer

### 11.2 Görsel odak sınırı

- Bir viewport içinde maksimum 1 ana hero
- Maksimum 2 ikincil görsel kart
- Maksimum 1 ambient animation family
- Maksimum 2 ana accent color
- Maksimum 3 radius seviyesi

### 11.3 Kart çeşitliliği

Kartlar yalnızca renk değiştirerek çeşitlenmez. Aşağıdaki yapısal varyasyonlar kullanılabilir:

- Image-led card
- Text-led editorial card
- Split card
- Full-bleed feature card
- Scientific reference card
- Quiet utility surface

---

## 12. “Çocuk defteri” görünümünü engelleyen kurallar

Aşağıdaki öğeler sistematik olarak sınırlandırılır:

- Sticker benzeri yıldız, ay, mantar, peri ve kristal ikonları
- Aşırı yuvarlak radius
- Her bileşende pastel gradient
- Çok sayıda küçük dekoratif çiçek
- Pembe-lila tek renk dünyası
- Kawaii yüz ifadeleri
- Sürekli sparkle
- Çok büyük script font
- Çiçek motifli her buton
- Konfeti tipi başarı animasyonu

Yerine kullanılacaklar:

- Editoryal boşluk
- Gerçek botanik yapı
- Mineral yüzeyler
- Refined monoline icons
- Kontrollü ışık
- Doğal renk çeşitliliği
- Tipografik hiyerarşi
- Anlamlı materyal ve hareket

---

## 13. Görsel QA soruları

Her yeni ekran veya komponent şu sorularla değerlendirilmelidir:

1. Bu ekran uygulamanın dünyasına ait mi, yoksa generic wellness template gibi mi?
2. Botanik görsel varsa tür olarak doğru mu?
3. Bilimsel ad görünmesi gereken yerde görünür mü?
4. Lila veya pembe gereğinden fazla mı?
5. Tek bir net görsel odak var mı?
6. Işıltı içeriği destekliyor mu, dikkat dağıtıyor mu?
7. Ekran çocukça veya sticker benzeri görünüyor mu?
8. Günün saati veya içerik bağlamı görsel olarak hissediliyor mu?
9. Animasyon gerçekten anlamlı bir ana mı bağlı?
10. Metin ve etkileşim erişilebilir mi?
11. Gerçek veri ile dekoratif astroloji ayrımı açık mı?
12. Kartlar aynı sistemden geliyor fakat monoton görünmüyor mu?

Bir ekran bu sorulardan herhangi birinde kritik başarısızlık gösterirse görsel olarak tamamlanmış sayılmaz.

---

## 14. Claude Code için bağlayıcı özet

Claude Code aşağıdaki kuralları varsayılan kabul etmelidir:

- Uygulama light-first, gün döngüsüne duyarlı ve akşamları seçili alanlarda koyulaşan bir atmosfer sistemidir.
- Görsel stil önceki peri ışıltılı yön ile yeni botanik-editoryal yönün ortasındadır.
- Lila tek baskın renk değildir.
- Bitki görselleri botanik olarak doğru olmalı ve bilimsel adlar gerekli kartlarda görünmelidir.
- Her ekran aynı görsel yoğunlukta veya aynı renk şemasında değildir.
- Home ve Garden daha immersive; Plants ve Journal daha editoryaldir.
- Astrology, Skin Care, Cycle ve Rituals kendi içerik karakterine göre ayrışır.
- Hareket yalnızca düşük yoğunluklu ambient veya anlamlı kullanıcı anlarında kullanılır.
- UI çocukça, sticker benzeri, aşırı yuvarlak veya generic pastel dashboard görünümüne düşmemelidir.
- Tüm yeni tasarım ve kod kararları `00_VISUAL_SYSTEM_CANONICAL.md` ve bu belgeyle uyumlu olmalıdır.

---

## 15. Son karar

Bu belgeyle ana görsel yön kilitlenmiştir. Sonraki dosyalar bu yönü token, typography, surface, glyph, asset, component, screen composition, motion ve QA seviyelerinde teknikleştirecektir.


===== DOSYA: docs/design/02_COLOR_AND_GRADIENT_TOKENS.md =====

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


===== DOSYA: docs/design/03_TYPOGRAPHY_SYSTEM.md =====

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


===== DOSYA: docs/design/04_SURFACE_GLASS_GLOW_SYSTEM.md =====

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


===== DOSYA: docs/design/05_ICON_ZODIAC_PLANET_GLYPH_SYSTEM.md =====

# 05 — ICON, ZODIAC, PLANET & MOON GLYPH SYSTEM

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli  
**Hedef:** React Native + Expo + TypeScript

## 1. Amaç

Bu belge uygulamanın tüm ikon, burç, gezegen ve ay fazı sembollerini tek bir görsel ve teknik sistem altında toplar.

## 2. Temel ikon karakteri

- Monoline
- Yuvarlatılmış cap ve join
- Yetişkin, editoryal ve sakin
- Oyuncak, sticker, kawaii veya aşırı mistik değil
- Varsayılan stroke: `1.5`
- Küçük boyutta minimum stroke: `1.4`
- Büyük hero glyph’lerinde maksimum stroke: `1.8`
- Dolgulu ikon yalnızca seçili durum veya semantic feedback için

## 3. Standart ölçüler

| Token | Ölçü | Kullanım |
|---|---:|---|
| `icon.xs` | 14 | Micro metadata |
| `icon.sm` | 16 | Caption / inline |
| `icon.md` | 20 | Standard control |
| `icon.lg` | 24 | Tab / button |
| `icon.xl` | 32 | Feature tile |
| `icon.2xl` | 48 | Hero / empty state |
| `glyph.hero` | 72–112 | Ceremonial / astrology reveal |

Minimum touch target: `44×44`.

## 4. SVG teknik sözleşmesi

- Tüm glyphler SVG component olarak saklanır.
- Ortak `viewBox`: `0 0 24 24`
- `fill="none"` varsayılan
- `stroke="currentColor"`
- `strokeLinecap="round"`
- `strokeLinejoin="round"`
- Decorative detail dışarı taşmaz.
- Glyph geometrisi optik olarak ortalanır.
- Unicode yalnızca text fallback olarak kullanılabilir.

## 5. Dosya yapısı

```text
design-system/glyphs/
├── planets/
│   ├── SunGlyph.tsx
│   ├── MoonGlyph.tsx
│   ├── MercuryGlyph.tsx
│   ├── VenusGlyph.tsx
│   ├── MarsGlyph.tsx
│   ├── JupiterGlyph.tsx
│   ├── SaturnGlyph.tsx
│   ├── UranusGlyph.tsx
│   ├── NeptuneGlyph.tsx
│   └── PlutoGlyph.tsx
├── zodiac/
│   ├── AriesGlyph.tsx
│   ├── TaurusGlyph.tsx
│   ├── GeminiGlyph.tsx
│   ├── CancerGlyph.tsx
│   ├── LeoGlyph.tsx
│   ├── VirgoGlyph.tsx
│   ├── LibraGlyph.tsx
│   ├── ScorpioGlyph.tsx
│   ├── SagittariusGlyph.tsx
│   ├── CapricornGlyph.tsx
│   ├── AquariusGlyph.tsx
│   └── PiscesGlyph.tsx
├── moon-phases/
│   ├── NewMoon.tsx
│   ├── WaxingCrescent.tsx
│   ├── FirstQuarter.tsx
│   ├── WaxingGibbous.tsx
│   ├── FullMoon.tsx
│   ├── WaningGibbous.tsx
│   ├── LastQuarter.tsx
│   └── WaningCrescent.tsx
└── index.ts
```

## 6. Planet glyphleri

Zorunlu set:

- Sun
- Moon
- Mercury
- Venus
- Mars
- Jupiter
- Saturn
- Uranus
- Neptune
- Pluto

Renkler `02_COLOR_AND_GRADIENT_TOKENS.md` içindeki `planet.*` tokenlarından gelir.

Kurallar:

- Gezegen rengi içerik boyunca tutarlı kalır.
- Tek mor set kullanılmaz.
- Seçili gezegen: `1.5px border + label emphasis + subtle glow`.
- Sürekli neon aura yok.
- Gezegen glyphi gerçek astrolojik veriye bağlıysa label ve derece ile gösterilir.

## 7. Zodiac glyphleri

Zorunlu set:

- Aries
- Taurus
- Gemini
- Cancer
- Leo
- Virgo
- Libra
- Scorpio
- Sagittarius
- Capricorn
- Aquarius
- Pisces

Kullanım modları:

1. `default`
2. `element`
3. `profile`

Renk tanımları renk token belgesinden alınır.

## 8. Ay fazları

Ay fazları dekoratif illüstrasyon ve veri glyphi olarak ayrılır.

### Veri glyphi

- Düz, açık, tek renkli
- Fazı doğru temsil eder
- Label ile birlikte kullanılır
- Ay fazı yanlış veya yaklaşık gösterilemez

### Decorative moon

- Hero veya ambient alanda kullanılabilir
- Gerçek faz verisi iddiası yoksa `decorative` olarak işaretlenir
- Data layer ile karıştırılmaz

## 9. Ek astrolojik semboller

V1 genişleme rezervi:

- Ascendant
- Midheaven
- North Node
- South Node
- Chiron
- Retrograde
- Conjunction
- Opposition
- Trine
- Square
- Sextile

Bu semboller V1 ana glyph setinin parçası değildir; mimari alan bırakılır.

## 10. Genel UI ikonları

Zorunlu aile:

- Home
- Garden
- Plants
- Mood
- Journal
- Search
- Filter
- Save
- Share
- Add
- Close
- Back
- More
- Calendar
- Bell
- Water
- Sun
- Moon
- Leaf
- Flower
- Spark
- Check
- Warning
- Info
- Lock
- Play
- Pause
- Timer
- Edit
- Trash

Tek bir ikon kütüphanesi seçilmeli; Lucide veya Phosphor aynı anda kullanılmamalıdır.

Kanonik öneri: **Lucide React Native**, ancak astro glyphleri özel SVG setidir.

## 11. Active / inactive states

### Inactive

- Outline
- `text.tertiary`
- Glow yok

### Active

- Aynı glyph
- Module accent color
- `1.1×` optik vurgu
- Label semi-bold
- Gerekirse çok hafif tint background

### Pressed

- Scale `0.96–0.98`
- Opacity düşmez
- Shadow/glow azalır

## 12. Accessibility

Her glyph:

- `accessibilityRole="image"` veya ilgili control role
- `accessibilityLabel`
- Decorative ise `accessible={false}`
- Tek başına anlam taşımaz
- Planet, sign ve moon phase label ile desteklenir

Örnek:

```tsx
<PlanetGlyph
  planet="saturn"
  size={24}
  accessibilityLabel="Satürn"
/>
```

## 13. Yasaklar

- Emoji’yi production glyphi olarak kullanmak
- Unicode’a font bağımlı görünüm bırakmak
- Tüm glyphleri farklı stroke ile çizmek
- Neon zodiac seti
- Sticker ikonlar
- Dolgulu ve outline setleri rastgele karıştırmak
- Decoration glyphini gerçek veri gibi göstermek
- Glyph içine text gömmek
- Raster PNG ikon kullanmak
- Aynı glyphin farklı ekranlarda farklı geometriyle görünmesi

## 14. Claude Code özeti

Claude Code:

1. Astro glyphlerini özel SVG component olarak oluşturmalı.
2. UI ikonları için tek ikon kütüphanesi kullanmalı.
3. Tüm glyphleri ortak size/stroke sistemiyle üretmeli.
4. Unicode’u yalnızca fallback olarak bırakmalı.
5. Planet ve zodiac renklerini merkezi tokenlardan almalı.
6. Accessibility label eklemeli.
7. Yeni glyph eklemeden önce bu belgeyi güncellemeli.

## 15. Kilitlenen karar

V1 ikon sistemi: **monoline UI icons + custom SVG astrology glyph set**.


===== DOSYA: docs/design/06_BOTANICAL_AND_CELESTIAL_ART_DIRECTION.md =====

# 06 — BOTANICAL & CELESTIAL ART DIRECTION

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli

## 1. Ana yön

Görsel dil:

> Bilimsel botanik doğruluğu, çağdaş editoryal doğa estetiği ve kontrollü kozmik atmosfer.

Dağılım:

- %40 botanik editoryal gerçekçilik
- %25 çağdaş dijital doğa fotoğrafçılığı
- %20 bilimsel botanik illüstrasyon
- %10 kozmik soyutlama
- %5 fantastik ışık

## 2. Botanik asset sınıfları

### Scientific Botanical

- Tür tanımaya uygun
- Morfolojik doğruluk öncelikli
- Yaprak, çiçek, gövde ve büyüme biçimi doğru
- Bilimsel içerik ve taxonomy alanlarında kullanılır

### Editorial Botanical

- Gerçek tür görünümünü korur
- Kompozisyon, ışık ve atmosfer eklenebilir
- Hero, feature card ve Garden için kullanılır

### Symbolic Botanical

- Tarihsel, mitolojik veya sembolik anlatı için
- Tür kimliğiyle karıştırılmaz
- Production metadata içinde `symbolic` olarak işaretlenir

## 3. Bitki veri zorunlulukları

Her önemli bitki için:

- Türkçe ortak ad
- İngilizce ortak ad
- Kabul edilmiş bilimsel ad
- Familya
- Kullanılan bölüm
- Görsel türü
- Morfoloji doğrulama durumu
- Görsel kaynak/lisans
- Toksisite durumu
- Sembolik kullanım durumu

## 4. Kart üzerinde zorunlu metin

Küçük kart:

```text
Papatya
Matricaria chamomilla
```

Detay ekranı:

```text
Papatya
Matricaria chamomilla
ASTERACEAE
Kullanılan bölüm: Çiçek
```

## 5. Görsel doğruluk kuralları

- Gerçek çiçek rengi korunur.
- Yaprak formu doğru olmalıdır.
- Aynı generik çiçek farklı bitkilere atanmaz.
- AI görseli botanik doğrulamadan production’a alınmaz.
- Görsel yoksa yanlış görsel yerine silhouette/typographic placeholder kullanılır.
- Toksik bitkiler sevimli wellness bitkisi gibi sunulmaz.
- Bitkinin farmakolojik kullanım iddiası görsel dekorasyonla güçlendirilmez.

## 6. Renk ilişkisi

Bitki UI paletine uyarlanmaz; UI bitkinin gerçek rengine uyarlanır.

Örnekler:

- Calendula → turuncu/altın
- Borage → mavi
- Hypericum → sarı
- Rosemary → koyu yeşil / açık mavi
- Artemisia → gümüşi yeşil
- Saffron → mor çiçek / kırmızı stigma
- Chamomile → beyaz / sarı / yeşil

## 7. Garden art direction

Garden:

- Çocuk oyunu bahçesi değildir.
- Gerçek bitki çeşitliliği içerir.
- Yollar, gölgeler, su, taş, toprak ve mevsim dokusu bulunur.
- Collectible ve bakım öğeleri sınırlı glow ile gösterilir.
- Bitkiler gerçek ölçek ilişkisini tamamen kaybetmez.
- Gün döngüsüne göre ışık değişir.
- Peri figürü, kawaii mantar veya oyuncak dekor kullanılmaz.

## 8. Celestial art direction

Celestial katman:

- Gerçek veri ile decorative atmosfer ayrılır.
- Planet orbit animasyonu gerçek veri iddiası taşımıyorsa `ambient` olarak etiketlenir.
- Natal chart ve transit chart temiz, veri odaklıdır.
- Nebula, star field ve halo düşük opaklıkta kullanılır.
- Kozmik görseller botanik içeriği bastırmaz.

## 9. Görsel yoğunluk

- Utility: dekorasyon minimum
- Editorial: tek güçlü botanik vurgu
- Immersive: katmanlı hero
- Ceremonial: kısa süreli reveal

## 10. Asset oranları

Önerilen oranlar:

- Hero landscape: `16:10`
- Feature card: `4:3`
- Plant card portrait: `4:5`
- Plant thumbnail: `1:1`
- Journal image: `3:2`
- Garden wide scene: `16:9`
- Ritual cover: `4:5`

## 11. Crop kuralları

- Tür tanımlayıcı özellik crop dışında kalmaz.
- Bitkinin bilimsel detayını kapatan decorative overlay kullanılmaz.
- İnsan eli/nesne varsa bitkiyi gizlemez.
- Hero crop küçük ekranda ayrıca QA edilir.

## 12. Dynamic art

Allowed:

- Yaprakta mikro nefes
- Hafif ışık geçişi
- Orbit on tap
- Dusk ambience
- Ritual reveal
- Water refraction
- Seasonal garden variation

Not allowed:

- Sürekli sallanan tüm bitkiler
- Her ekranda particle yağmuru
- Sürekli dönen tüm gezegenler
- Çiçek patlaması
- Confetti
- Hızlı zoom/parallax

## 13. Asset metadata

```json
{
  "assetId": "plant-matricaria-chamomilla-editorial-01",
  "scientificName": "Matricaria chamomilla",
  "commonNameTr": "Papatya",
  "family": "Asteraceae",
  "assetType": "editorial-botanical",
  "morphologyVerified": true,
  "plantPartsShown": ["flower", "leaf", "stem"],
  "colorAccuracy": "verified",
  "toxicityContext": "none",
  "sourceStatus": "licensed",
  "symbolicEnhancement": false
}
```

## 14. Yasaklar

- Tüm bitkileri mor/pembe yapmak
- Generik mor çiçek kullanmak
- Tür adı olmadan önemli bitki kartı
- AI botanik görselini doğrulamadan kullanmak
- Çocuk kitabı peri estetiği
- Her görselde kristal
- Her görselde iksir şişesi
- Data chart arkasında yoğun nebula
- Görsel ve gerçek veri arasında belirsizlik

## 15. Kilitlenen karar

V1 art direction: **scientifically grounded botanical realism + restrained celestial atmosphere**.


===== DOSYA: docs/design/07_COMPONENT_LIBRARY_CONTRACT.md =====

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


===== DOSYA: docs/design/08_SCREEN_COMPOSITION_CONTRACTS.md =====

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


===== DOSYA: docs/design/09_MOTION_HAPTICS_LIVING_WORLD.md =====

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


===== DOSYA: docs/design/10_ASSET_PIPELINE_AND_NAMING.md =====

# 10 — ASSET PIPELINE & NAMING

**Durum:** CANONICAL SUPPORTING SPECIFICATION  
**Sürüm:** 1.0 — V1 için kilitli

## 1. Amaç

Asset üretimi, doğrulama, isimlendirme, optimizasyon ve depolama standartlarını tanımlar.

## 2. Klasör yapısı

```text
assets/
├── botanicals/
│   └── <plant-id>/
├── celestial/
│   ├── planets/
│   ├── zodiac/
│   └── moon-phases/
├── garden/
├── rituals/
├── skin/
├── cycle/
├── journal/
├── backgrounds/
└── placeholders/
```

## 3. Plant asset paketi

```text
<plant-id>/
├── scientific-reference.webp
├── editorial-hero.webp
├── card-thumbnail.webp
├── leaf-detail.webp
├── silhouette.svg
└── metadata.json
```

## 4. Naming

Format:

```text
<domain>-<entity>-<variant>-<index>.<ext>
```

Örnek:

```text
plant-matricaria-chamomilla-editorial-01.webp
planet-saturn-glyph-v1.svg
garden-dusk-wide-01.webp
ritual-sleep-cover-02.webp
```

- lowercase
- kebab-case
- Türkçe karakter yok
- boşluk yok
- `final`, `new`, `latest` yok

## 5. Formatlar

- SVG: icons/glyphs/silhouettes
- WebP: production raster
- PNG: transparency zorunluysa
- JPG: yalnız fotoğraf kaynak arşivi
- Lottie/Rive: sınırlı motion assets
- AVIF V1 zorunlu değil

## 6. Boyut bütçeleri

| Asset | Max |
|---|---:|
| Icon SVG | 10 KB |
| Glyph SVG | 8 KB |
| Thumbnail | 120 KB |
| Card image | 220 KB |
| Hero | 500 KB |
| Garden wide | 700 KB |
| Motion asset | 350 KB ideal |

## 7. Resolution

- Thumbnail: 512×512
- Card portrait: 800×1000
- Feature: 1200×900
- Hero: 1600×1000
- Garden wide: 1920×1080

## 8. Verification workflow

1. Source/licence check
2. Botanical morphology check
3. Scientific name check
4. Color accuracy check
5. Crop check
6. Accessibility/contrast check
7. Compression
8. Metadata creation
9. QA approval
10. Production publish

## 9. Metadata schema

```json
{
  "assetId": "",
  "domain": "botanical",
  "entityId": "",
  "assetType": "",
  "scientificName": "",
  "commonNameTr": "",
  "family": "",
  "morphologyVerified": false,
  "colorAccuracy": "unknown",
  "sourceStatus": "licensed",
  "licenseReference": "",
  "aiGenerated": false,
  "symbolicEnhancement": false,
  "createdAt": "",
  "approvedBy": ""
}
```

## 10. Storage

- Source assets private archive
- Production assets CDN/Supabase Storage
- Metadata version controlled
- URLs hard-coded edilmez
- Cache key asset version içerir

## 11. Placeholder strategy

Yanlış görsel yerine:

- botanical silhouette
- scientific name
- neutral gradient
- verified pending label

kullanılır.

## 12. AI-generated asset policy

- AI-generated botanical image production’a doğrudan girmez.
- Botanik doğrulama gerekir.
- Metadata’da `aiGenerated: true`.
- Kaynak prompt ve revizyon bilgisi arşivlenir.
- İnsan yüzü/kişisel veri yoksa standard pipeline.
- Yanlış morfoloji varsa reddedilir.

## 13. Yasaklar

- Tek görseli farklı bitkilere kopyalamak
- Unsplash/random URL hard-code
- Lisans kaydı olmadan asset
- PNG ikon
- `image1.png`
- Metadata olmadan production botanical
- Wrong crop
- 2MB hero
- Kaynak ile production dosyasını aynı klasörde karıştırmak

## 14. Kilitlenen karar

Asset pipeline: **verified, versioned, compressed, metadata-backed**.


===== DOSYA: docs/design/11_ACCESSIBILITY_AND_PERFORMANCE_BUDGET.md =====

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


===== DOSYA: docs/design/12_VISUAL_QA_ACCEPTANCE_CHECKLIST.md =====

# 12 — VISUAL QA & ACCEPTANCE CHECKLIST

**Durum:** RELEASE GATE  
**Sürüm:** 1.0

## A. Kimlik

- [ ] Generic pastel wellness dashboard görünmüyor
- [ ] Çocuk peri defteri görünmüyor
- [ ] Dark witchcraft görünmüyor
- [ ] Lila baskın değil
- [ ] Botanik + celestial + editorial denge korunuyor

## B. Renk

- [ ] Rastgele HEX yok
- [ ] Bitki gerçek rengini koruyor
- [ ] Aynı viewportta max 2 accent family
- [ ] Planet colors doğru
- [ ] Night saf siyah değil
- [ ] Kontrast uygun

## C. Tipografi

- [ ] Fraunces/Inter sistemi doğru
- [ ] Scientific name italik
- [ ] Türkçe karakterler doğru
- [ ] Başlık max 2 satır
- [ ] Body okunur
- [ ] Glow/gradient text yok

## D. Surfaces

- [ ] Max 2 real blur
- [ ] Nested blur yok
- [ ] Radius tutarlı
- [ ] List row shadow yok
- [ ] Journal/scientific solid surface
- [ ] Reduce Transparency fallback var

## E. Glyphs

- [ ] Custom SVG astro glyphs
- [ ] Label + accessibility
- [ ] Unicode dependency yok
- [ ] Decorative/data distinction açık

## F. Botanical

- [ ] Common + scientific name
- [ ] Morfoloji doğrulanmış
- [ ] Yanlış generic plant image yok
- [ ] Toxicity doğru işaretlenmiş
- [ ] Asset metadata mevcut

## G. Motion

- [ ] M1/M2/M3 doğru
- [ ] Sürekli dönen tüm gezegenler yok
- [ ] Reduced Motion çalışıyor
- [ ] 60fps
- [ ] Haptic spam yok

## H. Screens

- [ ] Home first viewport güçlü
- [ ] Garden mature
- [ ] Plants scientific
- [ ] Mood calm
- [ ] Journal readable
- [ ] Skin Care clinical enough
- [ ] Cycle clear
- [ ] Ritual focused
- [ ] Astrology data readable

## I. States

- [ ] Loading
- [ ] Empty
- [ ] Error
- [ ] Offline
- [ ] Disabled
- [ ] Focus
- [ ] Success

## J. Device acceptance

- [ ] Small iPhone
- [ ] Current iPhone
- [ ] Low-mid Android
- [ ] Current Android
- [ ] Large text
- [ ] Dusk/night
- [ ] Slow network
- [ ] Offline

## Release rule

Kritik A–G maddelerinden biri başarısızsa ekran kabul edilmez.


===== DOSYA: docs/design/13_IMPLEMENTATION_PHASE_PLAN.md =====

# 13 — IMPLEMENTATION PHASE PLAN

**Durum:** EXECUTION PLAN  
**Sürüm:** 1.0

## Phase 0 — Audit

- Mevcut component ve token envanteri
- Inline styles
- Duplicate components
- Existing Home B1–B6 preservation map
- Asset inventory
- Performance baseline

Deliverable: `VISUAL_AUDIT_REPORT.md`

## Phase 1 — Foundations

- Color tokens
- Typography
- Spacing/radius
- Surface
- Icon wrapper
- Theme/atmosphere provider
- AppText

Acceptance: story/demo screen.

## Phase 2 — Glyph system

- Planet SVGs
- Zodiac SVGs
- Moon phases
- Accessibility
- Snapshot tests

## Phase 3 — Core components

- Buttons
- Chips
- Cards
- Inputs
- Headers
- Bottom tabs
- Skeletons
- States

## Phase 4 — Home retrofit

Preserve business logic; refactor visual layer.

- Hero
- Daily plant
- Mood
- Quote/insight
- Slot ladder
- Save/share
- Skeleton heights
- Haptics
- Device acceptance

## Phase 5 — Main tabs

Order:

1. Garden
2. Plants
3. Mood
4. Journal

Each tab complete with loading/error/empty before next.

## Phase 6 — Secondary modules

1. Astrology
2. Rituals
3. Cycle
4. Skin Care

## Phase 7 — Living World

- Breathing leaf
- Garden ambience
- Orbit on tap
- Dusk transition
- Ritual reveal
- Reduced motion

## Phase 8 — Asset pipeline

- Metadata schema
- Botanical verification
- CDN/storage
- Placeholders
- Compression

## Phase 9 — Accessibility/performance

- Contrast
- Dynamic Type
- Reduce settings
- Low-end mode
- Profiling

## Phase 10 — QA and release

- Visual QA checklist
- Cross-platform acceptance
- Regression tests
- Final screenshots
- Commit/tag

## Branch strategy

One branch per phase/screen. No giant visual rewrite commit.

## Stop conditions

- Architecture break
- Performance regression
- Botanical accuracy failure
- Accessibility gate failure
- Existing Home behavior regression

## Kilitlenen karar

Uygulama tek seferde “reskin” edilmez; foundation → component → screen → motion sırasıyla ilerler.


===== DOSYA: docs/design/14_CLAUDE_CODE_MASTER_INSTRUCTION.md =====

# 14 — CLAUDE CODE MASTER INSTRUCTION

**Revizyon 2026-07-21:** Source-of-truth sırasına `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` en üste eklendi. Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

## Role

You are implementing the canonical visual system for a React Native + Expo + TypeScript wellness application.

## Source of truth order

1. `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md`
2. `00_VISUAL_SYSTEM_CANONICAL.md`
3. `01_VISUAL_DIRECTION.md`
4. `02_COLOR_AND_GRADIENT_TOKENS.md`
5. `03_TYPOGRAPHY_SYSTEM.md`
6. `04_SURFACE_GLASS_GLOW_SYSTEM.md`
7. `05_ICON_ZODIAC_PLANET_GLYPH_SYSTEM.md`
8. `06_BOTANICAL_AND_CELESTIAL_ART_DIRECTION.md`
9. `07_COMPONENT_LIBRARY_CONTRACT.md`
10. `08_SCREEN_COMPOSITION_CONTRACTS.md`
11. `09_MOTION_HAPTICS_LIVING_WORLD.md`
12. `10_ASSET_PIPELINE_AND_NAMING.md`
13. `11_ACCESSIBILITY_AND_PERFORMANCE_BUDGET.md`
14. `12_VISUAL_QA_ACCEPTANCE_CHECKLIST.md`
15. `13_IMPLEMENTATION_PHASE_PLAN.md`
16. `14_CLAUDE_CODE_MASTER_INSTRUCTION.md`

If documents conflict, earlier documents have precedence. `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` overrides any conflicting decision in `00–14`.

## Non-negotiable product identity

The application must not look like:

- a generic pastel wellness dashboard,
- a children’s fairy notebook,
- a dark witchcraft app,
- a collection of uniformly lilac cards,
- a flat utility dashboard,
- a neon astrology product.

It must feel like:

- a living botanical and celestial editorial system,
- scientifically grounded,
- visually varied,
- softly luminous,
- mature,
- atmospheric,
- adaptive to time,
- accessible,
- performant.

## Mandatory implementation rules

1. Do not redesign business logic unless required.
2. Preserve existing validated Home B1–B6 behavior.
3. Create tokens and primitives before screen refactors.
4. Do not hard-code colors, typography, radii, shadows or glyphs in screens.
5. ~~Use Fraunces + Inter only.~~ Superseded by 15 §5: use the locked font roles — Fraunces (display), Lora (long-form reading), Caveat (short quotes only, max 32 words / 2 lines), Playfair Display (rare ceremonial), System sans (UI controls, metadata, forms, navigation). Inter may remain for code compatibility but is not the canonical body font.
6. Use custom SVG astrology glyphs.
7. Plant cards show common and scientific names.
8. Botanical visuals must not be recolored into a universal brand palette.
9. Limit real blur to two surfaces per screen.
10. Support `adaptive` and `fixedDay` atmosphere modes. Per 15 §3: the atmosphere system must never darken the main chrome; darkness is visual-panel-only.
11. Support Reduce Motion and Reduce Transparency. Per 15 §9: with Reduce Motion on, ALL ambient animations stop entirely.
12. Build loading, empty, error and offline states.
13. Do not use random internet assets.
14. Do not add new dependencies without explaining need and cost.
15. Run typecheck, lint and relevant tests after each phase.
16. Keep exactly four main tabs (`home | explore | garden | chat`). Never create tabs for Mood, Cycle, Skin Care, Journal, Astrology, Rituals, Plants, Profile, Settings, Saved or Pro — these are sub-screens (15 §2).
17. Ensure Turkish character support (Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü) and use `tr-TR` locale for case transforms (15 §5).
18. Exclude toxic plants (Datura, Atropa belladonna, Aconitum, Digitalis, Ricinus communis, Nerium oleander, Conium maculatum and similar) from product inventory, recommendations, rituals, Garden collectibles, CTAs and affiliate links; symbolic display requires the "Tarihsel / sembolik referans — Kullanım önerisi değildir" label (15 §11).
19. Never produce medical-claim/dose language or deterministic astrology language (15 §12–13).
20. Apply Free/Pro teaser rules: first meaningful result is free; max one teaser per viewport; no fake blur; `ProTeaser` contract per 15 §14.

## Execution protocol

For each phase:

1. Audit current files.
2. State which files will change.
3. Implement minimal coherent slice.
4. Run validation.
5. Report:
   - changed files,
   - decisions applied,
   - tests,
   - remaining risks.
6. Commit only after user approval when approval is required by workflow.

## Visual acceptance

Before marking a screen complete, run `12_VISUAL_QA_ACCEPTANCE_CHECKLIST.md`.

## Prohibited shortcuts

- One giant reskin
- Replacing all cards with glass
- Using generated mockup text as production copy
- Using Unicode zodiac symbols as final visual assets
- Hiding scientific names
- Using placeholder botanical art as verified production art
- Skipping Android fallback
- Ignoring accessibility because design is “visual”
- Adding sparkle decorations to compensate for weak hierarchy

## First task

Start with Phase 0 audit from `13_IMPLEMENTATION_PHASE_PLAN.md`.

Produce:

- current token inventory,
- current component inventory,
- duplicated styles,
- Home B1–B6 preservation map,
- asset gaps,
- proposed file migration plan,
- risks.

Do not begin broad visual refactoring before the audit is complete.


===== DOSYA: docs/design/15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md =====

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


===== DOSYA: docs/design/16_CLAUDE_CODE_CORRECTION_PROMPT.md =====

# CLAUDE CODE — CANONICAL CORRECTION PROMPT

Proje köküne şu belgeyi ekle:

`docs/design/15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md`

Bu belge artık `docs/design/00–14` dosyalarının üzerinde en yüksek öncelikli kaynaktır.

Önce dosyayı tamamen oku. Ardından mevcut audit ve Phase 1 planını buna göre düzelt.

## İptal edilen önceki kararlar

1. 5 tab önerisi
2. Mood/Journal/Plants’in ana tab olması
3. `Fraunces + Inter only`
4. Genel UI’ın akşam tamamen koyulaşması
5. Toksik bitkilerin metadata ile ürün envanterinde kalabilmesi

## Yeni kilitler

- Yalnızca 4 ana tab: Ana Sayfa, Keşif, Bahçe, Sohbet
- Mood, Cycle, Skin Care, Journal, Astrology, Rituals ve Plants alt ekran
- Ana UI açık krem-pudra
- Koyuluk yalnız görsel panellerde
- Fraunces/Lora/Caveat/Playfair + System UI font rolleri
- WCAG AA ve minimum 44px touch target
- Ekran başına 1–2 animasyonlu öğe, scale maksimum 1.02
- Reduced Motion’da ambient animasyonlar tamamen durur
- Toksik bitkiler yalnız estetik/tarihsel/sembolik referans
- Tıbbi iddia/doz/tanı/garanti yok
- Astrolojide kesin kader dili yok
- İlk anlamlı sonuç free; Pro yalnız derinlik ve gelişmiş özellik açar

## Implementation öncesi güncelle

1. `VISUAL_AUDIT_REPORT.md`
2. `MIGRATION_FILE_MAP.md`
3. `PHASE_1_IMPLEMENTATION_PROPOSAL.md`
4. `14_CLAUDE_CODE_MASTER_INSTRUCTION.md`

`14` numaralı belgede öncelik sırasına `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` dosyasını en üste ekle.

00–14 belgelerindeki çelişkili metinleri topluca silme; `15` belgesinin override ettiğini not et.

## Çıktı

Bana şunları bildir:

1. Güncellenen audit dosyaları
2. 4 tab mimarisine etkiler
3. Font dependency düzeltmesi
4. Atmosphere/chrome düzeltmesi
5. Toxic plant exclusion etkisi
6. Free/Pro teaser component ihtiyacı
7. Phase 1 değişen kesin dosya listesi
8. Yeni riskler
9. Phase 1 GO/NO-GO

Bu düzeltme tamamlanmadan Phase 1 implementation’a başlama. Commit veya push yapma.


===== DOSYA: docs/design/audit/VISUAL_AUDIT_REPORT.md =====

# VISUAL AUDIT REPORT — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi) · **Kanon:** `docs/design/15 + 00-14` (öncelik: 15 > 00-14) · **Kod:** `mobile/` @ `master` `bacfadf` (temiz)
**Ekler:** CURRENT_TOKEN_INVENTORY · CURRENT_COMPONENT_INVENTORY · HOME_B1_B6_PRESERVATION_MAP · ASSET_GAP_AND_VERIFICATION_REPORT · VISUAL_TECH_DEBT_REPORT · MIGRATION_FILE_MAP · PHASE_1_IMPLEMENTATION_PROPOSAL
Eski canonical belgelerdeki çelişkili maddeler için kural: Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

## 1 · Executive summary

Kod tabanı yeni kanonun **mimari disiplinine** şaşırtıcı ölçüde hazır: renkler %100 tokenize (0 inline HEX), tek token kaynağı + üretim + lint-gate hattı çalışıyor, reduced-motion/touch-target/a11y hijyeni sistematik, Home B1-B6 cihazda kabul edilmiş ve davranış katmanı (lib/) görsel katmandan temiz ayrılmış. **Navigasyon çatışması 15 ile çözüldü:** nihai mimari mevcut 4 sekmedir (Ana Sayfa/Keşif/Bahçe/Sohbet — `home|explore|garden|chat`); 5-sekme migrasyonu iptal; Mood, Cycle, Skin Care, Journal, Astrology, Rituals ve Plants alt ekrandır; Phase 1'de navigation refactor yoktur. Kanonun **içeriksel** tarafındaki açıklar sürüyor: palet tek-aile pudra (15 chrome + botanical + celestial + panel-only dark ailelerini ister), font sistemi sistem-fontu (15 rolleri: Fraunces/Lora/Caveat/Playfair Display + System UI — `Fraunces+Inter only` iptal), ikonlar emoji, glyph'ler Unicode, hiç botanik görsel/bilimsel ad verisi yok. **Ana UI hiçbir zaman dark mode'a dönüşmez:** krom açık krem-pudra kilitli; koyuluk yalnız görsel panellerde (hero, astrology chart, garden dusk, ritual cover). Ayrıca iki yeni ürün kilidi audit kapsamına girdi: **toksik bitki dışlaması** (kritik ürün güvenlik sınırı, §5a) ve **Free/Pro teaser** (component gap, §5b). Önerilen yol değişmedi: mevcut altyapıyı **taşıyıcı** olarak koruyup içerikleri kanonla değiştirmek — reskin değil, token-önce migrasyon. Go önerisi §13'te, kalan kullanıcı kararları §12'de.

## 2 · Current architecture

- Kök repo (içerik/DB/scriptler) + nested `mobile/` (Expo SDK 57, RN 0.86, React 19.2, TS 6, expo-router, Reanimated 4.5, reactCompiler+typedRoutes). Branch: `master`, çalışma ağacı temiz.
- Navigasyon: kök Stack → `(tabs)` (4 sekme: Ana Sayfa · Keşif · Bahçe · Sohbet) + gizli `dev-gallery`.
- Tasarım hattı: `tokens.json` → `generate-tokens.mjs` → `primitive.generated.ts` → `semantic.ts` → `useTheme()`; gate: `check-tokens.mjs` (lint'e bağlı).
- Tema: light-first; timeOfDay 4 dilim yalnız canvas+ambient wash'ı tonlar; dark seti üretilip kullanılmıyor.
- Veri: Supabase anon (herbs 37, quizzes 12, engine_rules RPC; quotes tablosu YOK), AsyncStorage (checkin/favorites/cache), astro mock provider.
- Çalıştırma: `npm start` (dev-client + tünel operasyon notları memory'de), `npm run lint|tokens|check:tokens`; test scripti YOK.

## 3 · What is already reusable (kanonla uyumlu, taşıyıcı)

1. Token kaynak→üretim→gate hattı (02'nin "ekrana HEX yazılmaz" kuralının hazır polisi).
2. `useTheme()` + semantic katman deseni; `forceTimeOfDay` dev aracı.
3. Reduced-motion köprüsü (`useMotionScale`) — 09 §8'in temeli; tüm animasyonlu bileşenler zaten tüketiyor.
4. Skeleton `textRole→lineHeight` sözleşmesi (07 §12 birebir) ve blok-iskelet eşitliği pratiği.
5. Slot-tabanlı Card, çok-kanallı durumlar (Button/Chip), 48pt dokunma hedefleri, a11y etiket disiplini (76 kullanım/23 dosya).
6. `lib/` davranış katmanı — deterministik seçiciler, stale-cache, haptics tablosu (09 §7 ile birebir).
7. dev-gallery — Phase 1 kabul yüzeyinin hazır temeli.
8. `useWidthClass` (08 compact padding), `MinTouchTarget`, `BottomTabInset`.

## 4 · What conflicts with the canonical system

| Alan | Mevcut | Kanon (15 > 00-14) | Çatışma düzeyi |
|---|---|---|---|
| Palet | Tek aile pudra/lila-pembe | 15 §4: chrome (krem-pudra, ana UI) + botanical + celestial + visualPanels (panel-only dark); 02'nin geniş aileleri 15 ile çelişmedikçe geçerli | YÜKSEK (ama hex'ler zaten GEÇİCİ işaretli; 15 kesin HEX veriyor) |
| Font | Sistem serif/sans | 15 §5: Fraunces (display) + Lora (reading) + Caveat (quote, ≤32 kelime/2 satır) + Playfair Display (ceremonial) + System sans (UI). `Fraunces+Inter only` (03/14) İPTAL — Superseded by 15 | YÜKSEK (açık sürüyor; hedef değişti) |
| İkon/glyph | Emoji + Unicode | Lucide + custom SVG (05) — 15 ile çelişmiyor; toplu migration P2 | ORTA (API'ler soyut, iç değişim) |
| Atmosfer | 4 dilim, anlık geçiş, mod yok | 15 §3: ana krom AÇIK KALIR; koyuluk yalnız visual panel; saat bilgisi yalnız panel/hero atmosfer varyantı üretir. 02'nin "genel yüzey koyulaşması" okuması İPTAL — Superseded by 15 | ORTA (kapsamı 15 ile daraldı) |
| Navigasyon | 4 sekme (Ana Sayfa/Keşif/Bahçe/Sohbet) | 15 §2: yalnız 4 sabit tab (`home|explore|garden|chat`) — MEVCUTLA UYUMLU. 00 §7.1'in 5-sekme önerisi İPTAL — Superseded by 15. Mood/Cycle/Skin Care/Journal/Astrology/Rituals/Plants alt ekran | **ÇÖZÜLDÜ — çatışma yok; Phase 1'de navigation refactor yapılmaz** |
| Bilimsel ad | Veri modelinde yok | Kart üzerinde zorunlu | YÜKSEK — kök repo veri işi |
| Ay fazı | 4 faz (veri+glif) | 8 faz SVG | ORTA — astro sözleşmesine dokunur |
| Radius | xs-lg+full | 15 §6 layout (hero 24/card 16/compact 12) + 04 seti | DÜŞÜK |
| Gölge | Yalnız Android elevation | iOS shadow token'ları | DÜŞÜK |
| Toksik bitki politikası | Kod'da `app_safe=true` filtresi var; ürün-genel dışlama zinciri tanımsız | 15 §11: envanter/öneri/ritüel/collectible/CTA/affiliate tam dışlama + sembolik etiket | **YENİ — kritik ürün güvenlik sınırı (§5a)** |
| Free/Pro teaser | Hiç yok | 15 §14: ProTeaser contract + token seti; ilk anlamlı sonuç free | **YENİ — component gap (§5b)** |
| Eski tasarım belgeleri | PRODUCT_DESIGN_SYSTEM_MASTER, ana-sayfa-spec görsel maddeleri, estetik-anayasa 1.0, design-prova v4 | Paket öncelikli (15 en üstte) | Statü netleştirme gerekli (§12) |

## 5 · Critical blockers

1. **Botanik görsel zinciri üç katmanda boş** (asset yok, content'te illus_ref yok, DB'de sütun yok) — Phase 4 hero'nun "gerçek bitki" hedefi için pipeline sıfırdan.
2. **Bilimsel ad alanı hiçbir katmanda yok** — kart kimliğinin (00 §6.2) veri önkoşulu; kök repo şema+seed+editorial işi.
3. **react-native-svg yeni EAS dev build ister** (font paketleri JS-only, build gerektirmez ama splash-font senkronu ister) — cihaz kabulü build slotuna bağlı (2.2A'daki linear-gradient dersi). Yeni dev build gereksinimi her raporda açıkça belirtilecek.
4. **Test altyapısı sıfır** — 14 "run relevant tests" şartının taşıyıcısı yok; Home davranış koruması şu an yalnız manuel. (jest-expo 15 düzeltme talimatıyla ONAYLI — Phase 1'de kurulur.)
5. `quotes` tablosu hâlâ yok (B5 launch-blocker, görsel migrasyondan bağımsız sürüyor).

### 5a · Toksik bitki dışlaması — KRİTİK ÜRÜN GÜVENLİK SINIRI (15 §11)

Datura, Atropa belladonna, Aconitum, Digitalis, Ricinus communis, Nerium oleander, Conium maculatum ve benzeri yüksek riskli türler yalnız tarihsel/kültürel/sembolik/sanatsal/estetik referans olabilir. Ürün envanterine, kişisel öneriye, ritüel bileşenine, Bahçe collectible'ına, tüketim/uygulama CTA'sına ve affiliate zincirine GİREMEZ; doz/kullanım talimatı içeremez. Sembolik gösterim "Tarihsel / sembolik referans — Kullanım önerisi değildir" etiketi ister. Mevcut kod tarafında `pickDailyHerb`'ün `app_safe=true + uyari_chip yok` filtresi bu yönde çalışan bir taban; ancak ürün-genel dışlama **politika/helper düzeyinde tanımlı değil** — Phase 1 test planına `toxic plant exclusion helper/policy` maddesi eklendi. `SymbolicReferenceNotice` component contract'ı Phase 1 foundation kapsamındadır. Sağlık dili ve astroloji dili kilitleri (15 §12-13) editorial + component copy denetimine girer; `HealthInformationNotice` ve `AstrologyInterpretationNotice` contract'ları da foundation kapsamındadır.

### 5b · Free/Pro teaser — COMPONENT GAP (15 §14)

İlk anlamlı sonuç ücretsizdir; Pro yalnız derinlik/geçmiş/ileri insight/kişiselleştirme/gelişmiş koleksiyon açar; sonucun tamamı paywall arkasına konamaz; aynı viewportta maks 1 teaser; sahte blur yasak. Kod tabanında hiçbir teaser/paywall bileşeni yok. Phase 1'e `ProTeaser` **component contract'ı + token seti** (15 §14 `proTeaser`) eklenir; production paywall ekranı bu fazda YAPILMAZ.

## 6 · Home preservation summary

B1-B6 tam haritalandı (HOME_B1_B6_PRESERVATION_MAP): 14 korunacak davranış sözleşmesi + 6 giriş kriteri. En kritik korumalar: hero-asla-boş zinciri, transit-only free sınırı, sessiz-gizlenme halleri, aynı-gün-güncelleme, haptic çifti, AsyncStorage anahtarları, iskelet yükseklik eşitliği, B6'nın bilinçli yokluğu. Phase 4 bu haritayla gate'lenir; `lib/` dosyalarına dokunulmaz.

## 7 · Asset and botanical accuracy risks

- Bugün yanlış-tür riski sıfır (hiç görsel yok) — risk, pipeline kurulurken doğrulamasız AI görseli almakta (SD1.5 stil testleri kayıtlı örnek: 3 üretimden 1'i morfolojik hatalı). 10 §12 politikası + metadata şeması kurulmadan hiçbir botanik görsel production'a girmemeli.
- Template asset'leri (Expo mavisi splash/icon) marka dışı; arşivlenip değiştirilecek.
- Ayrıntı: ASSET_GAP_AND_VERIFICATION_REPORT.

## 8 · Accessibility and performance risks

- GÜÇLÜ: a11y etiketleri, dekoratif gizleme, touch target, reduced-motion, sabit-metin-yüksekliği yasağı, tek gradient, blur=0.
- RİSK: `maxFontSizeMultiplier` hiç yok (aşırı Dynamic Type'ta taşma sınırsız — 03 §20.1 ile gelecek) · liste virtualizasyonu yok (kesif 37 kart map — bugün kabul edilebilir; **FlashList bu düzeltmeyle onay listesinden ÇIKARILDI, eklenmeyecek** — büyüme günü yeniden değerlendirilir) · yeni sistemin glow/atmosfer eklentileri 04 §20 bütçesiyle sıkı QA ister (**expo-blur da onay dışı — glass yalnız tint fallback**) · koyu visual panel üstünde scrim zorunlu (15 §10).
- **Ana UI dark mode'a dönüşmez (15 §3):** genel screen background, navigation, form, journal editor, settings, legal ve uzun okuma yüzeyleri hiçbir saatte koyulaşamaz. Koyuluk yalnız hero görsel paneli, ritual cover, astrology chart paneli, garden dusk vignette, night illustration, modal görsel alanı ve image-backed teaser'da. Kontrast hedefleri (AA 4.5:1 / 3:1) hem açık krom hem koyu panel yüzeylerinde ayrı ayrı doğrulanır; motion tarafında ekran başına maks 1-2 animasyonlu öğe, ambient scale ≤1.02, press ≈0.98, Reduced Motion'da ambient tamamen durur (15 §9).

## 9 · Recommended migration sequence

13'ün fazları aynen, şu vurgularla: **P1** Foundations (deprecated-alias köprüleriyle; ekranlar kırılmaz; navigation refactor YOK) → **P2** Glyphs (SVG setleri; yeni dev build burada alınır) → **P3** Core components → **P4** Home retrofit (preservation map gate) → **P5** sekme içerikleri (4-tab mimarisi SABİT — 15 §2; sekme ekleme/çıkarma yok; Mood/Cycle/Skin/Journal/Plants/Astrology/Rituals alt ekran route'ları olarak tabların içinden açılır) → P6-P10. Her faz ayrı branch+PR (mevcut git konvansiyonu), commit onayla.

## 10 · Files proposed for Phase 1

PHASE_1_IMPLEMENTATION_PROPOSAL §10'daki kesin liste (2026-07-21 revizyonu): değişen + yeni dosyalar; `app/(tabs)/*` gövdeleri, `lib/*`, `content/*`, navigation route'ları dokunulmaz.

## 11 · Dependencies proposed

**ONAYLI (15 düzeltme talimatı §8):** `@expo-google-fonts/fraunces`, `@expo-google-fonts/lora`, `@expo-google-fonts/caveat`, `@expo-google-fonts/playfair-display` (P1; `@expo-google-fonts/inter` ÇIKARILDI — Inter canonical body fontu değil; mevcut kod sistem sans kullanmayı sürdürür, System UI için yeni paket gerekmez) · `jest-expo` (P1, ONAYLI) · `react-native-svg` + `lucide-react-native` (P1 mimari ihtiyaca göre eklenebilir; gerçek glyph migration P2; **yeni dev build gereksinimi açıkça raporlanır**).
**EKLENMEYECEK:** `expo-blur`, `@shopify/flash-list`, yeni animation library, yeni state library.
**Kaldırma adayı:** `expo-glass-effect` (hiç kullanılmıyor) — kaldırılmadan önce kullanım TEKRAR doğrulanacak.
Mevcut yetenek değerlendirmesi: reanimated+expo-image+linear-gradient+haptics yeterli; glass etkileri tint-fallback ile.

## 12 · Decisions requiring user approval

1. ~~**Navigasyon:** 4 vs 5 sekme~~ **ÇÖZÜLDÜ (15 §2):** 4 sabit tab (`home|explore|garden|chat`) — mevcut mimariyle uyumlu, ADR §3 kilidiyle de tutarlı. Mood/Cycle/Skin Care/Journal/Astrology/Rituals/Plants/Profile/Settings/Saved/Pro alt ekrandır; yeni ana tab yasak. Keşif ayrıca Plants tabına AYRIŞMAZ; Plants, Keşif (veya ilgili tab) içinden açılan alt ekran olur.
2. **Eski tasarım otoritelerinin statüsü:** `PRODUCT_DESIGN_SYSTEM_MASTER.md` (Governance'ta kanonik anılıyor), `estetik-anayasa.md 1.0`, `design-prova` (v4), ana-sayfa-spec'in görsel maddeleri → paketle çelişenlerin resmî durumu (arşiv? revizyon?) netleşmeli; ayrıca CLAUDE.md/GOVERNANCE_MASTER kanonik listesi güncellenmeli. (Not: 15, Lora ve Caveat'ı resmî rollere geri getirdi — 03'ün "script font yok" kuralı Caveat için Superseded by 15; Caveat yalnız kısa sözlerde, ≤32 kelime/2 satır, kritik metinde asla.)
3. **Bilimsel ad veri zinciri:** content şeması + DB migration + seed + editorial doldurma işinin sahipliği/zamanlaması (görsel migrasyonun önkoşulu, ama kök repo işi).
4. **Türkçe modül adları:** kanon İngilizce modül adları kullanıyor (Home/Garden/Plants…) — sekme etiketleri Türkçe kalacak (Editorial otoritesi) varsayımım var; teyit istenir. (15 Türkçe karakter + tr-TR locale desteğini zorunlu kılar — bu yönde.)
5. ~~**Test altyapısı**~~ **ÇÖZÜLDÜ:** jest-expo ONAYLI; Phase 1 test planı PHASE_1_IMPLEMENTATION_PROPOSAL §9'da.
6. **`expo-glass-effect` kaldırma** — kaldırmadan önce kullanım yeniden doğrulanacak; template asset temizliği onayı ayrı.

## 13 · Go / No-Go recommendation

**GO.** Navigasyon ve test altyapısı kararları 15 ile çözüldü; font bağımlılıkları onaylı. Phase 1 Foundations, 15'in kilitleriyle (4 tab, açık krom, panel-only dark, yeni font rolleri, ScreenVisualSpec, ProTeaser + safety notice contract'ları) başlayabilir. No-Go koşulları (devam eden): bilimsel ad zinciri kurulmadan P4 PlantCard kimliği, morfoloji doğrulaması olmadan herhangi bir botanik görselin production'a alınması, toxic-plant exclusion politikası tanımlanmadan herhangi bir envanter/collectible genişlemesi, herhangi bir fazda ana tab ekleme/çıkarma veya ana kromun koyulaştırılması.

## Validation sonuçları (kod değişmeden)

- `git status`: temiz (master, bacfadf) — kök repo da temiz.
- `npx tsc --noEmit`: ✅ hatasız.
- `npm run lint` (eslint + token-gate): ✅ (60 dosya, 5 kural, 2 denetimli istisna).
- Unit test: script/framework yok — koşulamadı (bkz. §5.4).
- `npx expo config`: ✅ parse ediyor (SDK 57.0.0, light, portrait, scheme wellnessapp, typedRoutes+reactCompiler).


===== DOSYA: docs/design/audit/CURRENT_TOKEN_INVENTORY.md =====

# CURRENT TOKEN INVENTORY — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi; çelişen 02/03 hedefleri için Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting) · Kaynak: `mobile/src/design-system/tokens/tokens.json` (W3C, TEK KAYNAK) → `primitive.generated.ts` (`npm run tokens`, commit'lenir) → `theme/semantic.ts` → `useTheme()`. Gate: `scripts/check-tokens.mjs` (5 kural + 2 allowlist).

Karar sütunu: **K**=korunmalı · **D**=dönüştürülmeli · **X**=kaldırılmalı (yeni kanon: **15** > 02/03/04/07/09).

| Token grubu | Dosya/satır | Mevcut içerik | Kanon uyumu | Karar |
|---|---|---|---|---|
| `color.light` (9 renk) | tokens.json:6-14 | Pudra paleti: text #3A2E37, background #FBF6F3, backgroundElement #F1E4E1, backgroundSelected #E7D3D0, textSecondary #B29AA4, accent #C98B99, danger #C98B8B | 15 §4 `chrome` sözlüğü kesin HEX'lerle ana kromu kilitler (background #F8F2EC, surface #FFFDFC, powder #EFD9DD, parchment #F6EEE4, text #2E2926…) — mevcut pudra ailesi kavramsal olarak yakın, değerler değişir. Hex'ler zaten "GEÇİCİ" işaretli | **D** → 15 §4 `chrome` + `botanical` + `celestial` sözlükleri (02'nin çelişmeyen aileleri korunur) |
| `color.dark` (8 renk) | tokens.json:15-23 | Üretiliyor, runtime'da hiç kullanılmıyor (light-first LOCKED) | 15 §3-4: genel dark theme YOK; koyu renkler yalnız `visualPanels` sözlüğü (dusk #3F4A5D, night #222B38, ritual #31303D, astrology #293346, gardenNight #26392F) olarak var olabilir ve **ana screen background olarak KULLANILAMAZ** | **X** → mevcut dark seti temizlenir; yerine **panel-only** `visualPanels` tokenları gelir (gate kuralıyla korunur) |
| `color.ambient` (4 dilim) | tokens.json:24-30 | morning/day/evening/night — yalnız canvas+wash tonlar | 15 §3 override: saat bilgisi ana kromu DEĞİŞTİRMEZ; yalnız panel/hero atmosfer varyantı üretir. 02'nin "night'ta yüzey koyulaşması" okuması iptal | **D** → panel/hero atmosfer varyant tokenları (chrome sabit kalır) |
| `space` s2…s96 | tokens.json:32-47 | 4pt uyumlu ölçek | 07 spacing'i (0/4/8/12/16/20/24/32/40/48/56/64/80) ile değer düzeyinde birebir uyumlu | **K** (yeniden adlandırma: `spacing[N]`) |
| `radius` xs…full | tokens.json:48-57 | xs/sm/md/lg/full | 04 §8: 6/10/12/16/20/24/28/pill — mevcut sette xl/2xl/3xl yok | **D** → 04 seti (genişletme) |
| `typography` rampası | tokens.json:58-78 + theme/typography.ts (12 rol) | display.xl/l, heading.xl/l/m/s, body.l/m/s, label, caption, overline; aileler sistem fontu (serif/sans Platform.select) | 15 §5 fontRoles: display=Fraunces, reading=Lora, quote=Caveat (≤32 kelime/2 satır), ceremonial=Playfair Display (ekran başına maks 1), ui=System sans. `Fraunces+Inter only` (03) İPTAL; Inter kod uyumluluğu için kalabilir, canonical body fontu olamaz. TR karakter + tr-TR locale zorunlu | **D** → 15 rol sistemi + 03'ün çelişmeyen ölçeği + `AppText` variant API |
| `size.icon` sm16/md22/lg44/xl56 | tokens.json:79-87 | 4 boyut | 05: xs14/sm16/md20/lg24/xl32/2xl48 + glyph.hero | **D** |
| `duration` | tokens.json:88-97 | component/hero vb. bantlar | 09: instant80/fast140/normal220/slow360/reveal600/ceremonial/ambient | **D** (eşleme kolay) |
| `easing` | tokens.json:98-104 + motion.ts | standard/decelerate/accelerate | 09 bezier'leri farklı değerler, aynı yapı | **D** |
| `opacity` | tokens.json:105-111 | inactive/pressed vb. | Uyumlu | **K** |
| `borderWidth` | tokens.json:112-117 | thin1/focus2 | 04 §7.2: none/hairline0.5/thin1/medium1.5/focus2 | **D** (genişletme) |
| `motionDistance` | tokens.json:118-122 | paralaks s24 vb. | 09 ile uyumlu kavram | **K** |
| `elevation` level0-4 | tokens.json:123-131 | Android dp; iOS shadow YOK | 04 §9: iOS shadow token'ları (soft/card/elevated) + Android elevation birlikte | **D** → `lightShadows/darkShadows` |
| — glass/blur | YOK | expo-blur bağımlılığı da yok | 04 §5 Glass seviyeleri; **expo-blur onay dışı (15 düzeltme talimatı §8)** → yalnız tint fallback tokenları | **YENİ** (tint-only; gerçek blur belirsiz süreyle yok) |
| — gradientler | YOK (tek kullanım AmbientBackground, semantic renkli) | 02 §13 sözlükleri, 15 §3 sınırı içinde (ana krom koyulaşmaz) | **YENİ** |
| — glow | YOK | 04 §10 glows sözlüğü | **YENİ** (sınırlı) |
| — scrim | YOK | 02 §14 + 04 §16; 15 §10: koyu visual panel üstünde scrim ZORUNLU | **YENİ** |
| — planet/zodiac/mood/cycle renkleri | YOK (PLANET_GLYPH yalnız sembol) | 02 §6/§7/§10 | **YENİ** |
| — **chrome tokenları** | YOK (pudra seti yakın akraba) | 15 §4 `chrome` (11 kesin HEX: background/backgroundAlt/surface/surfaceTint/powder/parchment/stone/border/textPrimary/textSecondary/textMuted) | **YENİ** (Phase 1 çekirdeği) |
| — **panel-only dark tokenları** | YOK | 15 §4 `visualPanels` (5 HEX) — **yalnız visual panel içinde kullanılabilir; screen background YASAK** (gate kuralı + test ile korunur) | **YENİ** |
| — **screen-level visual specs** | YOK | 15 §6-8: `ScreenVisualSpec` tipi + homeSpec/exploreSpec/gardenSpec/chatSpec + 7 alt ekran spec'i (mood/cycle/skinCare/journal/plants/astrology/rituals) | **YENİ** (Phase 1; her ekran açık HEX+spacing sözleşmesi taşır) |
| — **motion limit tokenları** | motion.ts'te duration/easing var; limit yok | 15 §9 `motionLimits`: maxScale 1.02, pressScale 0.98, maxAnimatedElementsPerScreen 2; ambient 8-16sn, responsive 160-300ms, ceremonial 3-5sn | **YENİ** (Phase 1; test ile doğrulanır) |
| — **Free/Pro teaser tokenları** | YOK | 15 §14 `proTeaser` (backgroundHex/accentHex/borderHex/lockedPanelHex/radius/padding/gap) + `ProTeaserProps` contract | **YENİ** (Phase 1 contract; production paywall YOK) |
| Semantic katman | theme/semantic.ts | surface/ambient/text/border/action/navigation; saatle yalnız canvas+wash değişir | 04 surface taksonomisi + 15 §3 kilidi: navigation/form/journal/settings/legal/uzun-okuma yüzeyleri hiçbir zaman koyulaşmaz | **D** → yeni Surface variant sözleşmesi (chrome sabit; panel varyantları ayrı) |
| Legacy köprü | constants/theme.ts | Colors/Fonts/Typography/Spacing(half…six)/Radius/BorderWidth/MinTouchTarget/BottomTabInset/MaxContentWidth | Çift adlandırma borcu (bkz. VISUAL_TECH_DEBT §2d); MinTouchTarget=48, 15 §6 touchTarget=44 minimumunun üstünde — uyumlu | **D** → tek kanonik sözlük (15 §6 `layout` değerleriyle); MinTouchTarget **K** |
| timeOfDay provider | theme/theme-provider.tsx | 4 dilim, AppState tazeleme, forceTimeOfDay | 15 §3 override: AtmosphereProvider ana kromu DARKLAŞTIRMAZ; saat bilgisine göre yalnız panel/hero atmosfer varyantı üretir; reduced motion + fixed light tercih API'si sunar | **D** → AtmosphereProvider (chrome-sabit; geriye uyumlu sarmalayıcı ile) |
| Token gate | scripts/check-tokens.mjs | 5 kural | Kanon "inline yasakları"nın alt kümesi | **K** + genişlet (fontWeight/borderWidth/shadow + **visualPanels-ekran-background yasağı**) |

## Korunan güçlü altyapı (kanonla uyumlu, aynen kalır)
- tokens.json → generate → gate hattı (kanonun "merkezi token" şartının hazır taşıyıcısı)
- `useTheme()` erişim deseni ve semantic katman fikri
- `useReducedMotion`/`useMotionScale` köprüsü (09 §8'in temeli; motionScale 0/1 → ileride kademeli olabilir)
- `useWidthClass` (08 compact padding kuralıyla uyumlu)
- Skeleton `textRole→lineHeight` sözleşmesi (07 §12 ile birebir)


===== DOSYA: docs/design/audit/CURRENT_COMPONENT_INVENTORY.md =====

# CURRENT COMPONENT INVENTORY — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi; yeni §"15 override değerlendirmesi" eklendi) · Kapsam: `mobile/src/design-system`, `src/domain-ui`, `src/app`. Duplicate bileşen YOK. Kanonik karşılık sütunu 07_COMPONENT_LIBRARY_CONTRACT'a göre (Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting).

## Primitives (`design-system/primitives/`)

| Bileşen | Dosya | Kullanım | Kanonik karşılık | Refactor riski | Korunacak davranış |
|---|---|---|---|---|---|
| Text | text.tsx:30-48 | En yaygın (28 dosya) | `AppText` | ORTA (variant adları değişir: role→variant; 03 ölçeği) | heading→accessibilityRole, tone çift-kanal, allowFontScaling açık |
| Surface | surface.tsx:27-40 | index.tsx, states | `Surface` (04 taksonomisi) | ORTA (variant seti büyür) | semantic-only renk kuralı |
| Icon | icon.tsx:43-55 | tab-icon, button, dev-gallery | `Icon` (Lucide sarmalayıcı) | DÜŞÜK (API kararlı; yalnız iç temsil emoji→SVG) | name/size/decorative/label API'si, allowFontScaling=false ihtiyacı kalkar |
| Stack / Spacer / Divider | stack.tsx, spacer.tsx, divider.tsx | Stack+Spacer: fiilen 0; Divider: yalnız dev-gallery | 07 `Stack/Inline/Spacer/Divider` | DÜŞÜK | API'ler 07 ile uyumlu; canlandırılır (Inline eksik → eklenir) |

## Components (`design-system/components/`)

| Bileşen | Dosya | Kullanım | Kanonik karşılık | Risk | Korunacak davranış |
|---|---|---|---|---|---|
| Button + IconButton | button.tsx | states, dev-gallery, index | `PrimaryButton/SecondaryButton/TertiaryButton/IconButton` | ORTA (5 variant→3+icon ayrışması; min height 48 zaten var) | loading/disabled çok-kanallı durum, press feedback, a11y |
| Card | card.tsx | index (B3/B4/B5), kesif | `HeroCard/FeatureCard/PlantCard` ayrışır | ORTA-YÜKSEK (tek Card→aile) | slot sırası (header→children→media→footer), iç içe kart dev-warn, hero elevation |
| Chip | chip.tsx | index (mood, kaydet/paylaş) | `MoodChip/FilterChip` | ORTA | seçili durum çift kanal, 48pt efektif dokunma (hitSlop) |
| ListItem | list-item.tsx | yalnız dev-gallery | `PlantListItem` temeli | DÜŞÜK | leading/trailing yapısı |
| Reveal | reveal.tsx | index, kesif | (07'de yok — motion helper) | DÜŞÜK | motionScale=0 düz View |
| Skeleton | skeleton.tsx | index, kesif | `SkeletonBlock/SkeletonCard` | DÜŞÜK | textRole→lineHeight yükseklik sözleşmesi (07 §12 birebir), reduce-motion statik |
| AmbientBackground | ambient-background.tsx | yalnız index | AtmosphereProvider'ın görsel katmanı (02 §13 atmosphereGradients) | ORTA (renkler time.* token'larına bağlanır) | pointerEvents:none, paralaks sınırı, responseSignal tek-atış, motionScale=0 statik |
| Loader | loader.tsx | button içi, dev-gallery | `LoadingState` ailesi | DÜŞÜK | a11y (progressbar/busy) |
| TabIcon/TabLabel | tab-icon.tsx | (tabs)/_layout | `BottomTabs/TabItem` | DÜŞÜK (15 §2: 4-tab mimarisi SABİT — genişleme yok, yalnız görsel refactor) | aktif durum çift kanal; 4 sekme yapısı korunur |
| StateScaffold/Empty/Error/Offline | states/ | bahce, sohbet, kesif, dev-gallery | `EmptyState/ErrorState/…` (07 Feedback) | DÜŞÜK | teknik detay yalnız __DEV__, onaylı microcopy; NOT: state-scaffold legacy Spacing kullanıyor |
| usePressFeedback | use-press-feedback.ts | Button/Card | `PressableScale` | DÜŞÜK | scale 0.97 ≈ 04 §18.2 (0.985-0.99'a ayar), reduce-motion opacity |

## Domain-UI

| Bileşen | Dosya | Kanonik karşılık | Risk | Not |
|---|---|---|---|---|
| HerbIllustration | domain-ui/herb-illustration.tsx | PlantCard media + 10 §11 placeholder stratejisi | ORTA | Harita BOŞ → daima yer tutucu motif; 06 sınıflandırmasına (scientific/editorial/symbolic) bağlanmalı |
| HERB_ILLUSTRATIONS | herb-illustration-assets.ts | 10 asset pipeline | — | 0 eşleme (launch-blocker) |
| MoonPhaseGlyph | moon-phase-glyph.tsx | 05 moon-phases SVG seti (8 faz) | DÜŞÜK | Saf View, 4 faz; 05 8 faz ister — SVG'ye genişler; mevcut bileşen ara dönemde korunur |

## Ekranlar (expo-router)

| Route | Dosya | Durum | Satır | Kanonik hedef |
|---|---|---|---|---|
| kök Stack | app/_layout.tsx | tamam | 53 | AtmosphereProvider (chrome-sabit, 15 §3) + font loading eklenecek |
| (tabs) layout | app/(tabs)/_layout.tsx | tamam — **4 sekme** (Ana Sayfa/Keşif/Bahçe/Sohbet) | 95 | **15 §2 ile UYUMLU ve KİLİTLİ** (`home|explore|garden|chat`); 00 §7.1'in 5-sekme isteği iptal — Superseded by 15. Navigation refactor YOK |
| index (Home) | app/(tabs)/index.tsx | TAM (B1-B6) | 455 | Phase 4 retrofit — davranış korunur; görsel değerler 15 §7 `homeSpec` |
| kesif | app/(tabs)/kesif.tsx | TAM | 279 | Explore tabı olarak KALIR (15 §7 `exploreSpec`); Plants ayrı tab OLMAZ — alt ekran route'u olarak açılır |
| bahce | app/(tabs)/bahce.tsx | placeholder (EmptyState) | 13 | Garden tabı (15 §7 `gardenSpec`; Phase 5 içerik) |
| sohbet | app/(tabs)/sohbet.tsx | placeholder (EmptyState) | 13 | **Chat tabı olarak SABİT** (15 §2 dört tabtan biri; 15 §7 `chatSpec`) — "kanonik sekmelerde yok" tespiti geçersiz |
| dev-gallery | app/dev-gallery.tsx | tam (DS vitrini, __DEV__) | 233 | Phase 1 "visual demo/sandbox screen"in temeli — genişletilir |
| Mood/Cycle/SkinCare/Journal/Plants/Astrology/Rituals/Profile/Paywall | — | **YOK** | — | 15 §2: hepsi ALT EKRAN (tab değil); tabların içinden açılır. Spec'leri 15 §8'de; ekranlar Phase 5-6 |

## 15 override değerlendirmesi (2026-07-21)

| Soru | Cevap | Durum/Gap |
|---|---|---|
| Mevcut BottomTabs dört tabı koruyabilir mi? | **EVET.** `app/(tabs)/_layout.tsx` zaten tam olarak 15 §2'nin dört tabını render ediyor (Ana Sayfa/Keşif/Bahçe/Sohbet); `tab-icon.tsx` yalnız görsel katman. Yapısal değişiklik gerekmez, yalnız P3'te görsel refactor | Gap yok — 4-tab kilidi mevcut kodla birebir uyumlu |
| Free/Pro teaser component mevcut mu? | **HAYIR.** Kod tabanında teaser/paywall/kilitli-içerik bileşeni yok | **GAP** → Phase 1'de `ProTeaser` contract (15 §14 props + `proTeaser` tokenları); production paywall ekranı Phase 1 dışı |
| Toxic/symbolic reference notice mevcut mu? | **HAYIR.** `lib/home.ts` `app_safe=true + uyari_chip yok` filtresi davranış tarafında var ama UI'da sembolik-referans etiketi bileşeni yok | **GAP** → `SymbolicReferenceNotice` contract ("Tarihsel / sembolik referans — Kullanım önerisi değildir", 15 §11) |
| Health disclaimer ve astrology interpretation notice componentleri mevcut mu? | **HAYIR.** `states/` ailesi hata/boş durumlara özgü; bilgilendirme/disclaimer bileşeni yok | **GAP** → `HealthInformationNotice` (15 §12 izinli dil çerçevesi) + `AstrologyInterpretationNotice` (15 §13 "kesin öngörü değildir") contract'ları |
| Quote component Caveat kullanımını güvenli biçimde sınırlayabilir mi? | **EVET, contract ile.** B5 quote bugün Card+Text (rol API) — tipografi merkezi olduğundan `AppText variant="quote"` Caveat'ı tek noktadan bağlayabilir; `numberOfLines={2}` + ≤32 kelime dev-warn/helper sınırı component içinde uygulanabilir; kritik metin (buton, form, uyarı) quote variant'ı KULLANAMAZ kuralı lint/test ile korunur | Uygulanabilir — Phase 1 `AppText` contract'ına sınır kuralları yazılır |
| Screen shell ekran seviyesinde explicit token alabiliyor mu? | **HAYIR (bugün).** Ekranlar ScrollView+padding'i elle kuruyor (legacy `Spacing`); merkezi bir shell yok | **GAP** → Phase 1'de `ScreenShell` component contract'ı: `ScreenVisualSpec` (15 §6) alır, backgroundHex/padding/sectionGap'i tek noktadan uygular; `visualPanels` renklerini background olarak REDDEDER |

## lib/ (davranış katmanı — görsel refactor'da DOKUNULMAZ)

supabase.ts (anon client, null-safe) · auth.tsx (SessionProvider) · astro/ (mock provider, arayüz kararlı) · content.ts (fetchHerbs/Quizzes/Quotes + PLANET_GLYPH) · home.ts (deterministik günlük seçiciler + RPC) · query.ts (useAsyncResource + stale cache) · cache.ts (`cache.v1.*`) · checkin.ts (`checkin.v1.<date>`) · favorites.ts (`favorites.quotes.v1`) · haptics.ts (Light/Medium — 09 §7 tablosuyla birebir uyumlu).

**Test durumu:** src'de 0 test dosyası, test scripti yok — `jest-expo` ONAYLANDI (15 düzeltme talimatı §8); Phase 1 test planı PHASE_1_IMPLEMENTATION_PROPOSAL §9'da (token/spec bütünlüğü, panel-dark yasağı, TR karakter, motion limit, toxic exclusion, ProTeaser contract, Home B1-B6 karakterizasyon).


===== DOSYA: docs/design/audit/MIGRATION_FILE_MAP.md =====

# MIGRATION FILE MAP — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi: navigation hedefi = **keep existing four-tab architecture · no five-tab migration · no new main tabs**) · Action: keep / refactor / replace / archive · Phase: 13_IMPLEMENTATION_PHASE_PLAN fazları · Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

| Current file | Purpose | Canonical target | Action | Risk | Phase | Notes |
|---|---|---|---|---|---|---|
| design-system/tokens/tokens.json | W3C token kaynağı (pudra paleti) | 15 §4/§6/§9/§14 (chrome/botanical/celestial/visualPanels/layout/motionLimits/proTeaser) + 02/03/04/07/09'un çelişmeyen setleri | **refactor** | ORTA | 1 | Yapı korunur, içerik genişler/değişir; koyu tokenlar panel-only; ambient→panel/hero varyantları (chrome sabit) |
| design-system/tokens/primitive.generated.ts | Üretilmiş token çıktısı | aynı (yeniden üretim) | keep (regen) | DÜŞÜK | 1 | `npm run tokens` |
| scripts/generate-tokens.mjs | Token üretici | aynı | keep | DÜŞÜK | 1 | Nested gruplar (botanical.sage.100) desteği doğrulanır |
| scripts/check-tokens.mjs | Token gate | genişletilmiş gate | **refactor** | DÜŞÜK | 1 | +fontWeight/borderWidth/shadow kuralları |
| design-system/theme/semantic.ts | Primitive→semantic eşleme | 04 surface taksonomisi + 02 text/semantic renkleri | **refactor** | ORTA | 1 | Mevcut grup adları korunarak genişletme (geriye uyumlu köprü dönemi) |
| design-system/theme/theme-provider.tsx | timeOfDay (4 dilim) | AtmosphereProvider — **ana kromu darklaştırmaz**; saate göre yalnız panel/hero atmosfer varyantı üretir; reduced motion + fixed light API (15 §3, kapsam E) | **refactor** | ORTA | 1 | `useTheme()` API'si korunur; forceTimeOfDay dev aracı kalır; 02'nin genel-yüzey-koyulaşması hedefi iptal |
| design-system/theme/typography.ts | 12 rollük sistem-font rampası | 15 §5 rol sistemi: Fraunces/Lora/Caveat/Playfair Display + System UI (Inter canonical değil; kod uyumluluğu için kalabilir) | **replace** (API köprüsüyle) | ORTA | 1 | Text role adları → AppText variant eşleme tablosu; tr-TR helper + TR karakter testi |
| design-system/theme/motion.ts | duration/easing köprüsü | 09 token'ları | refactor | DÜŞÜK | 1 | |
| constants/theme.ts | Legacy köprü (Colors/Fonts/Spacing/Radius…) | tek kanonik sözlük (spacing/radii) | **refactor→archive** | ORTA | 1→4 | Önce yeni sözlüğe köprü olur, ekranlar taşındıkça içi boşalır; MinTouchTarget/BottomTabInset taşınır |
| design-system/primitives/text.tsx | Text (role API) | `AppText` (variant API) | **refactor** | ORTA | 1 | Eski role adları deprecated alias olarak bir faz yaşar |
| design-system/primitives/surface.tsx | Surface (4 rol) | `Surface` (04 variant seti) | **refactor** | ORTA | 1 | |
| design-system/primitives/icon.tsx | Emoji ikon primitive | Lucide sarmalayıcı `Icon` | **replace** (API korunur) | DÜŞÜK | 2 | Sadece iç temsil değişir (tasarım gereği) |
| design-system/primitives/{stack,spacer,divider}.tsx | Az kullanılan layout primitives | 07 Stack/Inline/Spacer/Divider | refactor | DÜŞÜK | 1 | Inline yeni eklenir |
| lib/content.ts PLANET_GLYPH | Unicode gezegen sembolleri | 05 SVG glyph seti (Unicode=fallback) | **refactor** | DÜŞÜK | 2 | Sembol sözlüğü fallback olarak kalır |
| domain-ui/moon-phase-glyph.tsx | Saf View 4-faz glifi | 05 moon-phases SVG ×8 | **replace** (aşamalı) | ORTA | 2 | 4→8 faz veri sözleşmesi astro provider'a bağlı — ara dönemde 4 faz eşlemesi |
| domain-ui/herb-illustration*.ts(x) | Boş harita + placeholder motif | 06/10 botanical asset + silhouette placeholder | refactor | ORTA | 4+8 | Placeholder stratejisi kanonla zaten uyumlu |
| design-system/components/button.tsx | 5-variant Button | 07 Primary/Secondary/Tertiary/IconButton | refactor | ORTA | 3 | Davranış korunur |
| design-system/components/card.tsx | Slot-tabanlı Card | HeroCard/FeatureCard/PlantCard ailesi | **replace** (taban korunur) | ORTA-YÜKSEK | 3 | Slot sözleşmesi + iç içe yasak taşınır |
| design-system/components/chip.tsx | Chip | MoodChip/FilterChip | refactor | ORTA | 3 | |
| design-system/components/list-item.tsx | ListItem (yalnız galeri) | PlantListItem temeli | refactor | DÜŞÜK | 3 | |
| design-system/components/skeleton.tsx | Skeleton | SkeletonBlock/SkeletonCard | keep+extend | DÜŞÜK | 3 | textRole sözleşmesi kanonla birebir |
| design-system/components/reveal.tsx | Cross-fade helper | motion helper | keep | DÜŞÜK | 3 | |
| design-system/components/loader.tsx | Spinner | LoadingState | refactor | DÜŞÜK | 3 | |
| design-system/components/ambient-background.tsx | Ambient gradient+paralaks | 02 atmosphereGradients katmanı | refactor | ORTA | 4 | responseSignal/paralaks davranışı korunur |
| design-system/components/states/* | Empty/Error/Offline | 07 Feedback ailesi | refactor | DÜŞÜK | 3 | state-scaffold'daki legacy Spacing temizlenir |
| design-system/components/tab-icon.tsx | Tab görselleri | BottomTabs/TabItem (4 tab SABİT) | refactor | DÜŞÜK | 3 | 15 §2: sekme sayısı kilitli — yalnız görsel refactor |
| app/_layout.tsx | Kök Stack | + font loading + AtmosphereProvider | refactor | ORTA | 1 | Splash-font senkronu (03 §21.2) |
| app/(tabs)/_layout.tsx | 4 sekme (`home\|explore\|garden\|chat`) | **keep existing four-tab architecture — no five-tab migration, no new main tabs (15 §2)** | **keep** (P3'te yalnız görsel) | DÜŞÜK | 3 | Route yapısı DEĞİŞMEZ; Phase 1'de navigation refactor yok; alt ekranlar (Mood/Cycle/Skin/Journal/Plants/Astrology/Rituals) tab İÇİNDEN stack route olarak açılır |
| app/(tabs)/index.tsx | Home B1-B6 (TAM) | Phase 4 retrofit (görsel katman; 15 §7 homeSpec) | **refactor** | YÜKSEK | 4 | HOME_B1_B6_PRESERVATION_MAP sözleşmesiyle |
| app/(tabs)/kesif.tsx | Keşif (TAM) | Explore tabı olarak kalır (15 §7 exploreSpec); Plants ALT EKRAN olarak ayrışır, tab olmaz | refactor | ORTA | 5 | FlashList ONAY DIŞI — eklenmeyecek; performans büyüme günü yeniden değerlendirilir |
| app/(tabs)/bahce.tsx | Placeholder | Garden tabı içeriği (15 §7 gardenSpec) | replace (içerik) | DÜŞÜK | 5 | Tab kimliği sabit |
| app/(tabs)/sohbet.tsx | Placeholder | **Chat tabı — 15 §2 dört tabtan biri, SABİT** | keep (içerik Phase 5+) | DÜŞÜK | 5 | "Kanonik sekmelerde yok" tespiti geçersiz — Superseded by 15 |
| app/dev-gallery.tsx | DS vitrini | Phase 1 demo/sandbox screen | keep+extend | DÜŞÜK | 1 | Foundation kabul yüzeyi |
| lib/* (10 modül) | Davranış/data katmanı | aynı | **keep** | — | — | Görsel migrasyonda DOKUNULMAZ |
| content/home-copy.ts, shell-copy.ts | Onaylı microcopy | aynı (07 "hard-coded copy" kuralı ayrı iş) | keep | — | — | Metin değişikliği Editorial onayı ister |
| assets/images/* (template) | Expo kalıntısı | marka asset'leri | **archive/replace** | DÜŞÜK | 8 | Kalıcı silme yok — arşivlenir |
| app.json splash/icon | Template mavisi | marka | refactor | DÜŞÜK | 8 | |
| src/global.css | nativewind girişi | değerlendirilecek | keep | DÜŞÜK | — | Kullanım incelemesi Phase 1'de |

## Yeni dosyalar (15 gereği Phase 1'de eklenir — mevcut karşılığı yok)

| New file | Purpose | Phase |
|---|---|---|
| design-system/tokens/screen-specs.ts | `ScreenVisualSpec` tipi + homeSpec/exploreSpec/gardenSpec/chatSpec + 7 alt ekran spec'i (15 §6-8) | 1 |
| design-system/primitives/screen-shell.tsx | `ScreenShell` — spec alır, background/padding/gap uygular, visualPanels'i background olarak reddeder | 1 |
| design-system/components/visual-panel.tsx | `VisualPanel` — koyuluğun İZİNLİ tek taşıyıcısı (scrim zorunlu, 15 §10) | 1 |
| design-system/components/pro-teaser.tsx (contract) | `ProTeaser` contract + tokenlar (15 §14) — production paywall YOK | 1 |
| design-system/components/notices/* (contract) | `SymbolicReferenceNotice` / `HealthInformationNotice` / `AstrologyInterpretationNotice` (15 §11-13) | 1 |
| lib/text-tr.ts | tr-TR locale case helper'ları (15 §5) | 1 |


===== DOSYA: docs/design/audit/HOME_B1_B6_PRESERVATION_MAP.md =====

# HOME B1–B6 PRESERVATION MAP — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` uyumu — davranış sözleşmesi DEĞİŞMEDİ) · Dosya: `mobile/src/app/(tabs)/index.tsx` (455 satır) · Statü: cihazda 2 tur kabul edilmiş (2026-07-18/19), commit `bacfadf`. **Bu haritadaki "korunacak davranış" sütunu Phase 4 retrofit'inin sözleşmesidir.**

**15 override etkileri (görsel hedef güncellemeleri; davranışlar aynen geçerli):**
- Home, 4-tab mimarisinin sabit ilk tabıdır (15 §2); retrofit'te route/navigation değişmez.
- Phase 4 retrofit'in görsel değerleri artık 15 §7 `homeSpec` ile kilitli: background #F8F2EC, surface #FFFDFC, accent #879A7A, visualPanel #3F4A5D, padding 20/16, sectionGap 28, cardGap 12, heroHeight 280, cardRadius 16, panelRadius 24, motionLevel M1, **maxAnimatedElements 2**.
- Ekran arka planı hiçbir saatte koyulaşmaz (15 §3); koyuluk yalnız hero görsel panelinde (`visualPanelHex`, scrim zorunlu).
- Tipografi hedefleri 15 §5 rollerine göre okunur: B1 başlık Fraunces (display), B5 söz metni Caveat adayı (≤32 kelime/2 satır sınırıyla; sınır aşılırsa reading/body rolü) — `Fraunces+Inter only` referansları geçersiz.
- 15 §7 Home sırası "6. Free/Pro teaser" içerir: bu YENİ bir slot'tur ve B6 slot ladder gibi koşullu render edilir; Phase 4 retrofit'inde **davranış eklenmez**, yalnız `ProTeaser` contract'ı yerleşince (P5+) sıraya girer. B6'nın "bilinçli yokluk" davranışı aynen korunur.
- Ambient scale sınırı 1.00→1.02, press ≈0.98; Reduced Motion'da ambient tamamen durur (15 §9) — mevcut `motionScale=0` statik davranışı bu şartı zaten sağlıyor.

| Alan | Mevcut konum | Data source | State/store | Bileşen | Test | KORUNACAK davranış | Görsel değişecek | Risk |
|---|---|---|---|---|---|---|---|---|
| B1 tarih başlığı | index.tsx:244 (formatDayTitle :79-81) | cihaz saati + MONTHS_TR/WEEKDAYS_TR (home-copy) | — | Text display.l | yok | TR tarih formatı; başlık a11y header | Fraunces display.h1/h2 tipografisi | DÜŞÜK |
| B1 ay çipi (moon chip) | index.tsx:245-259 | `astro.getDailyTransit` (mock provider) → moonSign/moonPhase | transit state :103-121 | Surface base full + MoonPhaseGlyph + Text label | yok | veri yoksa çip SESSİZCE gizli; transitSettled'a kadar iskelet aynı kabukta; faz-doğru glif | MoonPhaseChip (07) + SVG moon-phase glifi (05, 8 faz) | ORTA (faz eşlemesi 4→8 genişlerken veri sözleşmesi 4 fazlı — dönüşüm katmanı gerek) |
| B2 sky line (kozmik satır) | index.tsx:262-278 | canlı DB RPC `match_engine_rules` → pickThemeLine (home.ts:110-128) | daily (useAsyncResource `home.daily.v1`) | Pressable + Text body.l | yok | YALNIZ transit-only kurallar (natal sızmaz — free sınırı); deterministik günlük seçim (FNV-1a); tap→Keşif; 48pt dokunma; iskelet 48pt sabit | Tipografi/yüzey | ORTA (iş kuralı görünmez — regresyonu fark etmek zor; seçici fonksiyonlara DOKUNMA) |
| B3 günlük bitki hero | index.tsx:280-327 | canlı `herbs` (app_safe=true + uyari_chip YOK filtresi pickDailyHerb home.ts:97-104); fallback OPENING_HERB (home-copy, gömülü Papatya) | daily + dailyPending :203-207 | Reveal+Card hero + HerbIllustration + PLANET_GLYPH | yok | **hero ASLA boş kalmaz** (canlı→önbellek→gömülü Papatya, ONAYLI karar); kart metni yalnız tek_satir; T1-T3 karta girmez; tap→Keşif (geçici köprü, ONAYLI); emoji fallback YOK | PlantCard kimliği: bilimsel ad italik EKLENİR (00 §6.2 — veri modelinde alan yok, bkz. blocker), gerçek botanik görsel, Fraunces ad | YÜKSEK görsel / DÜŞÜK davranış (seçici + fallback zinciri aynen taşınır) |
| B4 mood chip alanı | index.tsx:329-355 (onSelectMood :146-162) | modules/mood.json id+label birebir (QUICK_MOODS) | checkin state + `checkin.v1.<date>` AsyncStorage | Card + Chip×6 | yok | id+label kanonik sözlükten; tek dokunuş kayıt; aynı gün ikinci seçim=GÜNCELLEME (çift kayıt yok); seçim→light haptic ANINDA, görsel durum da anında; kalıcılık arka planda; sayı baskısı/ceza dili yok | MoodChip (icon+label, 02 mood renkleri — renk tek kanal olamaz) | ORTA (haptic sırası + optimistic update korunmalı) |
| B4 başarı → ambient tepki | index.tsx:152-159 + ambient-background.tsx | saveCheckin başarı sinyali | ambientPulse state | AmbientBackground responseSignal | yok | medium haptic YALNIZ gerçek kalıcılıkta; tek-atış ışık kayması (§21.2 dengi = 09 M2/M3 "mood completion pulse") | Atmosfer token'ları (02) | DÜŞÜK |
| B5 quote alanı | index.tsx:357-392 | canlı `quotes` (TABLO YOK — launch-blocker) → pickDailyQuote | daily + favoriteIds (`favorites.quotes.v1`) | Reveal+Card + Chip kaydet/paylaş | yok | havuz yoksa blok SESSİZCE GİZLİ (sahte aktivasyon yasak); global günlük deterministik seçim; atıfsız; paylaşımda YALNIZ söz metni; favori cihazda sınırsız | Kaydet/paylaş ikonları (♥/♡→Save icon), tipografi | DÜŞÜK |
| B6 slot ladder | index.tsx:394-397 (yorum; JSX yok) | kural merdiveni (spec §2-B6) | — | — | yok | Bugünkü modül setiyle hiçbir koşul sağlanamaz → SLOT RENDER EDİLMEZ; ekran 5 blokla tamdır. Bu "yokluk" bir davranıştır — retrofit'te yanlışlıkla doldurulmamalı | 08 §3 "slot ladder" görünümü modüller geldikçe | DÜŞÜK |
| Save/share aksiyonları | index.tsx:176-188 + 360-380 | Share API (yalnız metin) | favorites.ts | Chip | yok | atıf eklenmez (GS-3/K2); iptal sessiz | TertiaryButton/IconButton'a geçebilir | DÜŞÜK |
| Skeletonlar | B1:254-259 · B2:274-277 · B3:314-327 · B5:381-392 | — | dailyPending/transitSettled | Skeleton (textRole sözleşmesi) | yok | blok yükseklikleri sabit — YERLEŞİM SIÇRAMASI YOK; iskelet, nihai bileşenle aynı yükseklik (07 §12) | Yüzey renkleri | DÜŞÜK |
| Haptics | lib/haptics.ts (:17-32) | — | — | — | yok | YALNIZ 2 haptic: çip=Light, başarılı kayıt=Medium (09 §7 tablosuyla birebir); spam yok | — (his ayarı açık kalem) | DÜŞÜK |
| Check-in store | lib/checkin.ts | AsyncStorage `checkin.v1.<YYYY-MM-DD>` | — | — | yok | şema mood_logs çekirdek alt kümesi (ileri senkron için); anahtar formatı DEĞİŞMEZ | — | DÜŞÜK |
| Living World placeholderları | ambient-background.tsx + use-motion-scale.ts | — | scrollY SharedValue | AmbientBackground | yok | paralaks ≤s24/s96; reduced-motion→tam statik; sürekli döngü YOK; low-power dikişi (stub) hazır | 09 breathing leaf vb. eklenirken bütçe: aynı anda maks 1 ana + 1 ambient | ORTA (yeni ambient'ler eklerken bütçe aşımı riski) |
| Önbellek düşüşü | lib/query.ts + cache.ts (`cache.v1.home.daily.v1`) | Supabase | useAsyncResource | — | yok | stale cache'e sessiz düşüş; hata iskeleti süründürmez; __DEV__ stale bildirimi | — | DÜŞÜK |
| symbolicEmpty satırı | index.tsx:212-218, 399-403 | tüm sembolik kaynaklar | — | Text | yok | YALNIZ tüm sembolik bölge boşsa tek yumuşak satır (offlineSky) | Tipografi | DÜŞÜK |

## Kritik koruma kuralları (Phase 4 giriş kriteri)
1. `lib/home.ts` seçici fonksiyonlarına ve `lib/*` davranış katmanına dokunulmaz.
2. AsyncStorage anahtar şemaları değişmez (`checkin.v1.*`, `favorites.quotes.v1`, `cache.v1.*`).
3. Haptic tetik noktaları ve sırası değişmez.
4. "Sessiz gizlenme" halleri (B1 çip, B5 blok, symbolicEmpty) aynen korunur; B3 asla boş kalmaz zinciri korunur.
5. İskelet yükseklik eşitliği her yeni görselde yeniden doğrulanır.
6. Test YOK → jest-expo ONAYLANDI (15 düzeltme talimatı §8); Phase 1'de bu haritadaki davranışlar için karakterizasyon testleri kurulur (pickDailyHerb/pickThemeLine/pickDailyQuote + checkin update determinizmi — saf fonksiyonlar, kolay test edilir; bkz. PHASE_1_IMPLEMENTATION_PROPOSAL §9).


===== DOSYA: docs/design/audit/ASSET_GAP_AND_VERIFICATION_REPORT.md =====

# ASSET GAP & VERIFICATION REPORT — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre düzeltildi: font seti + toksik bitki asset kuralı) · Kaynaklar: `mobile/assets/`, `mobile/src`, kök `content/`, `supabase/`, `design-prova/` · Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

## 1 · Mevcut asset envanteri (mobile)

| Asset | Yol | Format | Boyut | Durum |
|---|---|---|---|---|
| App icon | assets/images/icon.png | PNG | 799 KB | Expo template — marka değil; 10 §6 bütçesini de aşıyor |
| logo-glow | assets/images/logo-glow.png | PNG | 331 KB | template kalıntısı |
| Android adaptive set | android-icon-*.png | PNG | 4-78 KB | template (bg #E6F4FE mavi) |
| Splash | splash-icon.png (+app.json bg #208AEF) | PNG | 3 KB | Expo mavisi — marka değil |
| react/expo logoları, tutorial, tabIcons | çeşitli | PNG | ~100 KB | template çöpü — temizlenebilir |
| SVG | expo.icon/expo-symbol 2.svg | SVG | 608 B | template |
| Font dosyası | — | — | — | **YOK** (sistem fontu) |
| WebP/JPG | — | — | — | **YOK** |
| Botanik görsel | — | — | — | **YOK** |

## 2 · Botanik görsel zinciri — ÜÇ KATMANDA BOŞ (en kritik açık)

1. **Asset haritası boş:** `herb-illustration-assets.ts:13-15` → 0 eşleme; HerbIllustration daima saf-View yer tutucu motif çizer (bu, 10 §11 placeholder stratejisiyle uyumlu bir ara durum).
2. **Content'te alan yok:** `content/bitki-kartlari-master.json` kartlarında `illus_ref` YOK; motor tablolarında da yok.
3. **DB'de alan yok:** `herbs` şemasında (0002_content_schema.sql:87-93) illus_ref sütunu yok, `data` jsonb'ye de yazılmıyor; storage bucket config'te kapalı yorum.

→ Sonuç: "aynı generik bitki görselinin farklı türlerde kullanılması" riski bugün SIFIR (hiç görsel yok); ama 37 bitki × asset paketi (10 §3: scientific-reference + editorial-hero + card-thumbnail + leaf-detail + silhouette + metadata.json) tamamen üretilecek. Ara adım önerisi: 10 §11 gereği **silhouette.svg + bilimsel ad placeholder'ı** — mevcut motif buna yakın, tür-özel siluete evrilmeli.

## 3 · Bilimsel ad (scientific name) — VERİ MODELİNDE YOK

- Content JSON'larında yapılandırılmış `bilimsel_ad`/`latin_name` alanı yok (yalnız serbest metinde geçiyor).
- DB `herbs` tablosunda yok; mobil `Herb` tipinde yok.
- 00 §6.1/03 §9/07 §6: bilimsel ad kart üzerinde ZORUNLU → **içerik + şema + seed + mobil tip zincirinde yeni alan gerekir** (kök repo işi; Editorial+Architecture onayı — kapsamı bu audit dışı, karar gerekli).

## 4 · Glyph/sembol durumu

| Sembol seti | Mevcut | Kanon (05) | Açık |
|---|---|---|---|
| Gezegen | Unicode metin (☽☉☿♀♂♃♄, content.ts) — 7 gezegen | SVG component ×10 (Sun…Pluto), Unicode yalnız fallback | 10 SVG üretilecek; mevcut 7'li set fallback'e iner; Uranüs/Neptün/Plüton içerikte henüz kullanılmıyor |
| Zodyak | YOK (yalnız burç ADI metni: MOON_IN_SIGN_TR) | SVG ×12 + 3 renk modu | 12 SVG yeni |
| Ay fazı | Saf View glif ×4 (yeni/ilk_dordun/dolunay/son_dordun) | SVG ×8 + veri/dekoratif ayrımı | 8 SVG; 4→8 faz veri genişlemesi astro sağlayıcı sözleşmesine dokunur (DİKKAT: mock provider 4 faz üretiyor) |
| UI ikon | Emoji ×6 (icon.tsx GLYPHS) + ekran-içi sızıntılar | Tek kütüphane (öneri: Lucide RN) ~29 ikon | Kütüphane kararı + react-native-svg bağımlılığı gerekir |

## 5 · Lisans/kaynak metadata durumu

- Mevcut üründe lisans gerektiren görsel yok (template hariç).
- `design-prova/PROVA-NOTLAR.md` telif kayıtları (Köhler PD, Health Icons CC0, OpenRAIL-M) prova içindir; production asset pipeline'ına 10 §9 metadata şeması kurulacak (assetId/scientificName/morphologyVerified/sourceStatus/aiGenerated…). Bugün hiçbir production asset'i olmadığından metadata açığı = pipeline açığı.
- SD1.5 stil testleri (design-prova/assets/sd-papatya-*.png) 10 §12 gereği **production'a giremez** (morfoloji doğrulaması yapılmadı; #2 yaprakları yanlış — kayıtlı).

## 6 · Kanonik adlandırma uygunluğu

- Mevcut asset adları (icon.png, splash-icon.png…) template adları; 10 §4 formatına (`<domain>-<entity>-<variant>-<index>.<ext>`) uyan 0 dosya. Tümü ya değişecek ya temizlenecek.

## 7 · Boyut/bütçe ihlalleri (mevcut)

- icon.png 799 KB (app icon olduğu için bütçe tablosu dışı ama optimize edilmeli), logo-glow 331 KB kullanılmıyor → temizlik adayı.

## 8 · Öncelikli asset açık listesi (fazlara göre)

1. **Phase 1:** Font paketleri — `@expo-google-fonts/fraunces` + `/lora` + `/caveat` + `/playfair-display` (15 §5 rolleri; Inter paketi ÇIKARILDI — System sans için paket gerekmez) + her fontta **TR karakter render doğrulaması** (Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü) + THIRD_PARTY_NOTICES.md.
2. **Phase 2:** 10 planet + 12 zodiac + 8 moon SVG (custom set) + Lucide RN (UI ikonları) — react-native-svg **yeni dev build** gerektirir, açıkça raporlanır.
3. **Phase 4 öncesi:** Papatya için ilk doğrulanmış editorial-botanical paketi (Home hero pilotu) + silhouette placeholder seti.
4. **Phase 8:** 37 bitki tam pipeline (üretim → morfoloji doğrulama → metadata → CDN/Supabase Storage) + `illus_ref`/bilimsel ad veri zinciri.
5. **Marka:** app icon + splash yeniden tasarımı (template mavisinin gitmesi) — fazı ürün sahibi kararına bağlı.

## 9 · Toksik bitki asset kuralı (15 §11 — YENİ)

Asset pipeline'ı ve metadata şeması, yüksek riskli toksik türleri (Datura, Atropa belladonna, Aconitum, Digitalis, Ricinus communis, Nerium oleander, Conium maculatum vb.) **ürün envanteri asset'i olarak KABUL ETMEZ**: bu türler için card-thumbnail/collectible/CTA görseli üretilmez; yalnız tarihsel/sembolik/sanatsal bağlam görseli üretilebilir ve metadata'da `symbolicOnly: true` benzeri bir alanla işaretlenip UI'da "Tarihsel / sembolik referans — Kullanım önerisi değildir" etiketiyle (`SymbolicReferenceNotice`) gösterilir. 10 §9 metadata şemasına bu alan eklenmeli; morfoloji doğrulama akışına tür-güvenlik sınıfı kontrolü dahil edilmelidir.


===== DOSYA: docs/design/audit/VISUAL_TECH_DEBT_REPORT.md =====

# VISUAL TECH DEBT REPORT — Phase 0

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 (`15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre hedef referansları düzeltildi) · **Kapsam:** `mobile/src` (61 dosya) + `mobile/scripts` · **Araç:** satır-satır grep + token-gate analizi · Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.

## 1 · Özet skor

| Kategori | Durum | İhlal |
|---|---|---:|
| Hard-coded HEX / rgba | ✅ TEMİZ | 0 |
| Inline fontSize/lineHeight/fontFamily | ✅ TEMİZ (typography.ts merkezli) | 0 |
| Inline fontWeight | ⚠️ BORÇ | 6 |
| Inline borderRadius | ✅ TEMİZ (tam token) | 0 |
| Inline shadow* | ✅ YOK (shadow hiç kullanılmıyor; yalnız token'lı Android elevation) | 0 |
| Inline borderWidth | ⚠️ küçük | 1 |
| Screen-local gradient | ✅ YOK (tek gradient: AmbientBackground, token renkli) | 0 |
| Sabit yükseklik (metin kırpma riski) | ✅ YOK | 0 |
| Emoji-as-icon | ⚠️ BİLİNÇLİ GEÇİCİ + sızıntı | ~10 |
| Çift adlandırmalı spacing/radius | ⚠️ BORÇ | 45+4 kullanım |

Mevcut sistem yeni kanonun 02/04 belgelerinin "ekran içine rastgele HEX/radius/shadow yazılmaz" kuralına **bugünden büyük ölçüde uyumlu** — token disiplini güçlü. Borç, değer değil **adlandırma ve soyutlama** düzeyinde.

## 2 · Bulgular (dosya+satır)

### 2a. Inline `fontWeight: '600'` (token-gate denetlemiyor)
- `design-system/components/button.tsx:129` · `chip.tsx:78` · `list-item.tsx:58`
- `app/(tabs)/kesif.tsx:262, 271`
- (`tab-icon.tsx:50` token'dan — ihlal değil)
→ Yeni tipografide (15 §5 rolleri) weight, rol-bazlı aile adına gömülür (UI rolü System sans'ta weight variant'ı; display/reading rollerinde Fraunces/Lora ağırlık kesimleri); bu literal sınıf Phase 1'de kendiliğinden ölür.

### 2b. `borderWidth: 1` inline — `kesif.tsx:263` (BorderWidth token'ı varken)

### 2c. Emoji/Unicode sembol envanteri
| Yer | İçerik | Sınıf |
|---|---|---|
| `design-system/primitives/icon.tsx:18-25` | 🌙🔮🌿💬🌱✨ (GLYPHS) | Bilinçli geçici; API kararlı — 05'e göre SVG setiyle YALNIZ bu dosya değişir |
| `lib/content.ts:93-101` | ☽☉☿♀♂♃♄ (PLANET_GLYPH) | Astronomik metin sembolü; 05'e göre yalnız fallback olabilir → SVG'ye taşınmalı |
| `kesif.tsx:155` | `?? '🌿'` fallback | Sızıntı — kaldırılmalı (silhouette placeholder kuralı, 10 §11) |
| `kesif.tsx:165` | `⚠ dikkat` | Sızıntı — semantic warning icon'a taşınmalı |
| `index.tsx:357,366` | ♥/♡ kaydet | Sızıntı — Save icon'a taşınmalı |
| `content/shell-copy.ts:37`, `states/state-scaffold.tsx:33` | "yakında ✨" | Copy içi emoji; 07 "component içinde hard-coded copy" kuralıyla birlikte değerlendirilmeli |
| `domain-ui/moon-phase-glyph.tsx` | saf View, emoji YOK | ✅ doğru örnek — 05 moon-phases SVG setine geçene dek korunabilir |

### 2d. Çift adlandırmalı spacing/radius (değer tek, isim çift)
- Her iki yol da `primitive.space.sN`'e çözülür (`constants/theme.ts:62-70` köprü) — **değer çatalı yok**.
- Legacy `Spacing.half/one/../six`: 45 kullanım / 6 dosya (ekran katmanı: `index.tsx` 16, `kesif.tsx` 14, `dev-gallery` 6, states 7). `Radius.*`: 4 kullanım.
- Kanonik `primitive.space.sN`: 42 kullanım / 9 dosya (bileşen katmanı).
- `Spacing.half=2` kanonik ölçekte yok (legacy optik değer).
→ Yeni 07 spacing'i (4pt: 0/4/8/…/80) mevcut sN ölçeğiyle **birebir örtüşüyor**; migrasyon = adlandırma birleştirme (`spacing[2]` tarzı tek sözlük), ekran katmanında ~50 mekanik değişiklik.

### 2e. Token-gate kapsam boşlukları (`scripts/check-tokens.mjs`)
Denetlenen 5 kural: color, fontSize, borderRadius, duration, easing (allowlist: primitive.generated, motion.ts).
Denetlenmeyen: **fontWeight, lineHeight, letterSpacing, borderWidth, height, elevation, shadow***.
→ Phase 1'de gate'e fontWeight+borderWidth+shadow kuralları eklenmeli (öneri).

### 2f. Tema/atmosfer sisteminin bugünkü kapsamı
- `theme-provider.tsx:21-27`: timeOfDay 4 dilim (05-11/11-17/17-22/22-05), yalnız AppState-active'te tazelenir; `forceTimeOfDay` dev-only.
- `semantic.ts`: saatle YALNIZ `surface.canvas` + `ambient.wash` değişir; metin/kart/nav sabit (bilinçli kilit).
- Dark token seti üretiliyor (`primitive.color.dark`) ama runtime'da **hiç kullanılmıyor** (light-first LOCKED).
→ 15 §3 override sonrası hedef DARALDI: ana krom hiçbir saatte koyulaşmaz — "night'ta genel yüzey koyulaşması" hedefi İPTAL (bugünkü "metin/kart/nav sabit" kilidi 15 ile UYUMLU çıktı). AtmosphereProvider yalnız panel/hero atmosfer varyantı üretir + reduced motion ve fixed light tercih API'si sunar. Eksikler: panel varyant üretimi, kullanıcı tercihi API'si. Kullanılmayan dark token seti temizlenir; yerine **panel-only** `visualPanels` tokenları gelir (screen background yasağı gate+test ile).

## 3 · "Korunmalı / dönüştürülmeli / kaldırılmalı" özetleri
- **Korunmalı:** token-gate altyapısı (genişletilerek), tokens.json→generate hattı, semantic katman deseni, reduced-motion köprüsü, skeleton lineHeight sözleşmesi.
- **Dönüştürülmeli:** Spacing/Radius legacy adları → tek kanonik sözlük; PLANET_GLYPH → SVG glyph seti (Unicode fallback'e iner); icon.tsx GLYPHS → SVG icon seti; fontWeight literalleri → typography variant'ları.
- **Kaldırılmalı:** `kesif.tsx` 🌿 fallback, ekran-içi ♥/♡ ve ⚠ karakterleri (ikonlaşınca); kullanılmayan dark token seti temizlenir — yerine 15 §4 `visualPanels` panel-only tokenları gelir (genel dark theme YOK; karar 15 ile çözüldü).


===== DOSYA: docs/design/audit/PHASE_1_IMPLEMENTATION_PROPOSAL.md =====

# PHASE 1 IMPLEMENTATION PROPOSAL — Foundations (yalnız öneri; uygulama onay bekler)

**Tarih:** 2026-07-20 · **Revizyon:** 2026-07-21 — `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` override'ına göre yeniden yazıldı; kapsam, düzeltme talimatının §7 "onaylı foundation kapsamı" (A–I) ile hizalandı. Superseded by 15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md where conflicting.
**Kapsam:** tokenlar + typography + surfaces + screen specs + provider + icon/glyph sınırı + component contract'ları + dev gallery + testler. **Ekran retrofit'i YOK. Navigation refactor YOK. Home'a dokunulmaz. Production paywall YOK.**

## 0 · İlkeler

- Kaynak önceliği: **15 > 00-14**. Çelişkide 15 kazanır.
- Mevcut `useTheme()`/`Text role` API'leri bir faz boyunca deprecated-alias olarak yaşar → ekranlar Phase 4-5'te taşınana kadar HİÇBİR ekran kırılmaz.
- **Genel dark theme veya dark screen surface KURULMAZ.** Koyuluk yalnız visual-panel-only token mimarisiyle gelir.
- 4-tab mimarisi (`home|explore|garden|chat`) SABİT; route'lara dokunulmaz.
- Her adımda `tsc + lint(genişletilmiş gate) + tokens + test` yeşil; dev-gallery görsel kabul yüzeyi.
- Yeni bağımlılıklar §7'deki onay listesine tabidir; liste dışına çıkılmaz.

## A · Tokens (15 §4/§6/§9/§14)

- `tokens.json` yeniden yapılandırılır:
  - **chrome** (11 kesin HEX — ana UI kromu; 15 §4 birebir),
  - **botanical** accent'leri (11 HEX),
  - **celestial** accent'leri (8 HEX),
  - **visualPanels** — panel-only dark (5 HEX; dusk/night/ritual/astrology/gardenNight),
  - spacing (15 §6 `layout` + mevcut 4pt ölçek), radius (hero 24 / card 16 / compact 12 + mevcut set), borders, shadows (iOS shadow + Android elevation),
  - **motionLimits** (maxScale 1.02, pressScale 0.98, maxAnimatedElementsPerScreen 2 + ambient 8-16sn / responsive 160-300ms / ceremonial 3-5sn bantları),
  - **proTeaser** token seti (15 §14).
- Mevcut pudra seti `legacy.*` altına taşınır (bir faz; ekranlar hâlâ okuyor) — sonra silinir. Kullanılmayan `color.dark` seti temizlenir.
- **Gate kuralı (yeni):** `visualPanels.*` bir ekranın/shell'in `background` değeri olarak KULLANILAMAZ — check-tokens.mjs + test ile korunur.
- `generate-tokens.mjs` üç-seviye nested grup için doğrulanır (bugün 2 seviye çalışıyor).

## B · Typography (15 §5)

- Font rolleri: **Fraunces** (display: hero, screen/section title, plant common name, ritual title) · **Lora** (reading: journal prompt, editorial, plant lore) · **Caveat** (quote: YALNIZ kısa söz, ≤32 kelime ve 2 satır; kritik metinde asla) · **Playfair Display** (ceremonial: nadir; ekran başına maks 1) · **System sans** (ui: controls, metadata, forms, navigation).
- `Fraunces + Inter only` kararı GEÇERSİZ. Inter mevcut kod uyumluluğu için kalabilir; canonical tek body fontu YAPILMAZ. System sans için yeni paket gerekmez.
- `app/_layout.tsx`: `useFonts` + splash senkronu (font yüklenmeden UI görünmez, layout shift yok).
- **`AppText`** primitive: rol-tabanlı variant API; eski `Text role` adları deprecated alias eşleme tablosuyla yaşar. `variant="quote"` Caveat sınırlarını component içinde zorlar (numberOfLines=2 + kelime sayısı dev-warn).
- **Turkish locale helper:** `lib/text-tr.ts` — `toLocaleUpperCase('tr-TR')` / `toLocaleLowerCase('tr-TR')`.
- **Turkish character rendering test:** her font ailesinde Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü doğrulaması (dev-gallery satırı + otomatik test).
- `maxFontSizeMultiplier` default'ları variant başına; Dynamic Type desteklenir.

## C · Surfaces (15 §3-4)

- `Surface` variant seti: **base cream** (#F8F2EC) · **powder tint** (#EFD9DD) · **parchment** (#F6EEE4) · **standard card** (#FFFDFC) · **elevated card** · **visual panel** (genel) · **astrology visual panel** (#293346) · **garden visual panel** (#26392F) · **ritual visual panel** (#31303D).
- **Koyu surface genel screen background olarak kullanılamaz** — tip düzeyinde (variant ayrımı) + gate + test ile korunur.
- Koyu visual panel üstünde scrim ZORUNLU (15 §10).
- Navigation, form, journal editor, settings, legal ve uzun okuma yüzeyleri koyu variant ALAMAZ.
- Glass etkileri yalnız tint fallback (expo-blur onay dışı).
- Eski 4 rol alias olarak yaşar.

## D · Screen Visual Specs (15 §6-8)

- `ScreenVisualSpec` tipi birebir 15 §6'dan alınır (screenId/backgroundHex/surfaceHex/accentHex/visualPanelHex?/padding/gap/hero/radius/motionLevel/maxAnimatedElements).
- En az şu spec'ler tanımlanır: **homeSpec · exploreSpec · gardenSpec · chatSpec** (ana tablar, 15 §7 değerleri birebir) + **moodSpec · cycleSpec · skinCareSpec · journalSpec · plantsSpec · astrologySpec · ritualsSpec** (alt ekranlar, 15 §8).
- `ScreenShell` bu spec'i tüketir (bkz. G); ekranlar Phase 4-5'te taşındıkça spec'ten okur — Phase 1'de yalnız tanım + dev-gallery gösterimi.

## E · Provider (15 §3)

- `AtmosphereProvider` (yeni): **ana chrome'u DARKLAŞTIRMAZ** — chrome sabittir.
- Saat bilgisine göre yalnız **panel/hero atmosfer varyantı** üretir (ör. akşam hero/garden/astrology/ritual panellerinin dusk/night varyant seçimi).
- **Reduced motion** ve **fixed light** kullanıcı tercihlerini destekleyecek API sunar (AsyncStorage; mevcut `settings.*` desenleriyle).
- `AppThemeProvider` ince uyum katmanı olur; eski `timeOfDay` API'si deprecated-alias — Home'un mevcut ambient'i kırılmaz. `forceTimeOfDay` dev aracı kalır.
- 02'nin "5 evre + genel yüzey koyulaşması + 20-40dk lerp" hedefi bu fazda UYGULANMAZ (chrome'a dokunan kısmı kalıcı iptal — Superseded by 15).

## F · Icon / Glyph boundary (05 + 15)

- **Merkezi `Icon` wrapper** korunur; `IconSource` soyutlaması eklenir — Phase 1'de emoji tablosu davranışı DEĞİŞMEZ.
- `design-system/glyphs/` **klasör iskeleti** + `Glyph` tip sözleşmesi (planet/zodiac/moon-phase union'ları + zorunlu a11y label) — SVG içerikleri P2.
- **Emoji ve Unicode topluca BU FAZDA DEĞİŞTİRİLMEZ** — açık **P2 migration boundary**: P2'de yalnız `icon.tsx` iç temsili + `PLANET_GLYPH` fallback'e iner; sızıntılar (🌿/♥/⚠) P3 component işlerinde temizlenir.

## G · Component contracts (15 §11-14)

Phase 1'de **contract düzeyinde** tanımlanır (tip + props + token bağları + dev-gallery örneği; production ekran entegrasyonu sonraki fazlar):

1. **AppText** — rol-tabanlı variant API (B).
2. **Surface** — variant taksonomisi (C).
3. **ScreenShell** — `ScreenVisualSpec` alır; background/padding/sectionGap'i tek noktadan uygular; `visualPanels` renklerini background olarak REDDEDER.
4. **VisualPanel** — koyuluğun izinli TEK taşıyıcısı; scrim zorunlu; `maxAnimatedElements` bütçesine katılır.
5. **ProTeaser** — 15 §14 `ProTeaserProps` + `proTeaser` tokenları; ilk anlamlı sonuç free, tamamı kilitlenemez, viewport başına maks 1, sahte blur yok. **Production paywall ekranı bu fazda YAPILMAZ.**
6. **SymbolicReferenceNotice** — "Tarihsel / sembolik referans — Kullanım önerisi değildir" (15 §11).
7. **HealthInformationNotice** — 15 §12 izinli dil çerçevesi; yasak dil listesi contract'a gömülür.
8. **AstrologyInterpretationNotice** — 15 §13 "kesin öngörü değildir" çerçevesi.

## H · Dev gallery

`dev-gallery` genişletilir; Phase 1 görsel kabul yüzeyi olarak şunları gösterir:

- dört ana tab spec'i (homeSpec/exploreSpec/gardenSpec/chatSpec render önizlemesi),
- alt ekran spec örnekleri (mood/cycle/skinCare/journal/plants/astrology/rituals),
- font rolleri (Fraunces/Lora/Caveat/Playfair/System — TR karakter satırıyla),
- open chrome paleti (chrome/botanical/celestial),
- **visual-panel-only darkness** örneği (koyu panel + scrim; açık krom sabitken),
- motion limit örneği (1.00→1.02 ambient + 0.98 press; sayaçlı maxAnimatedElements),
- Free/Pro teaser örneği,
- safety notice örnekleri (symbolic/health/astrology),
- reduced-motion görünümü (ambient'lerin tamamen durduğu hal).

## I · Testler (jest-expo — ONAYLI)

Minimum test seti:

1. **token integrity** — tokens.json→generated çıkış tutarlılığı + chrome/visualPanels HEX'lerinin 15 §4 ile birebirliği.
2. **screen spec integrity** — 11 spec'in `ScreenVisualSpec` tipine ve 15 §7-8 değerlerine uygunluğu.
3. **panel dark colors not usable as screen backgrounds** — ScreenShell/gate reddi.
4. **typography role mapping** — eski role→yeni variant alias tablosu.
5. **Turkish locale** — `text-tr.ts` (İ/ı ve i/İ dönüşümleri dahil).
6. **Turkish font characters** — yüklü font ailelerinde TR glyph varlığı.
7. **reduced motion resolver** — reduced-motion'da ambient=durur, içerik/işlev kaybolmaz.
8. **max animated elements constraint** — motionLimits ihlal tespiti.
9. **toxic plant exclusion helper/policy** — dışlanan tür listesi envanter/öneri/collectible yollarına giremez.
10. **Pro teaser contract** — props/token bağları + "tamamı kilitlenemez" kuralı.
11. **Home B1–B6 preservation characterization** — pickDailyHerb/pickThemeLine/pickDailyQuote determinizmi + checkin aynı-gün-güncelleme (saf fonksiyonlar; HOME_B1_B6_PRESERVATION_MAP sözleşmesi).

## 7 · Bağımlılıklar (kesin liste)

| Paket | Durum | Not |
|---|---|---|
| @expo-google-fonts/fraunces | **ONAYLI (P1)** | display rolü |
| @expo-google-fonts/lora | **ONAYLI (P1)** | reading rolü |
| @expo-google-fonts/caveat | **ONAYLI (P1)** | quote rolü (sınırlı kullanım) |
| @expo-google-fonts/playfair-display | **ONAYLI (P1)** | ceremonial rolü |
| jest-expo | **ONAYLI (P1)** | test altyapısı (§I) |
| react-native-svg | KOŞULLU | P1 mimari ihtiyaca göre eklenebilir; native modül → **yeni EAS dev build gerekir, açıkça raporlanır** (2.2A linear-gradient dersi) |
| lucide-react-native | KOŞULLU | react-native-svg'ye bağlı; gerçek glyph migration P2 |
| System sans | — | yeni paket GEREKMEZ |
| expo-blur | **EKLENMEZ** | glass = tint fallback |
| @shopify/flash-list | **EKLENMEZ** | virtualizasyon ihtiyacı büyüme günü yeniden değerlendirilir |
| yeni animation library | **EKLENMEZ** | Reanimated 4.5 mevcut ve yeterli |
| yeni state library | **EKLENMEZ** | mevcut desen yeterli |
| expo-glass-effect | Kaldırma adayı | kaldırılmadan önce kullanım TEKRAR doğrulanır; ayrı onay |

Font asset maliyeti: 4 aile × ~2-4 kesim; OTA boyutu artışı raporlanır (splash süresi +~200-400ms bütçe içi).

## 8 · Dosya listesi (Phase 1'de değişecek/eklenecek KESİN set)

DEĞİŞİR: `tokens.json`, `generate-tokens.mjs`, `check-tokens.mjs` (+fontWeight/borderWidth/shadow/panel-bg yasağı), `theme/{semantic,typography,motion,theme-provider}.ts`, `primitives/{text,surface,icon,stack,spacer,divider}.tsx`, `constants/theme.ts` (köprü), `app/_layout.tsx` (font+provider), `app/dev-gallery.tsx`, `package.json` (yalnız onaylı bağımlılıklar).
EKLENİR: `theme/atmosphere-provider.tsx`, `tokens/screen-specs.ts`, `tokens/gradients.ts` (15 §3 sınırı içinde), `primitives/app-text.tsx` (veya text.tsx evrimi), `primitives/screen-shell.tsx`, `components/visual-panel.tsx`, `components/pro-teaser.tsx` (contract), `components/notices/{symbolic-reference,health-information,astrology-interpretation}-notice.tsx` (contract), `design-system/glyphs/` iskeleti, `lib/text-tr.ts`, test dosyaları (§I), `THIRD_PARTY_NOTICES.md`.
DOKUNULMAZ: `app/(tabs)/*` ekran gövdeleri ve route yapısı, `lib/*` (text-tr.ts ekleme hariç — yeni dosya, mevcut modüllere dokunulmaz), `content/*`, `domain-ui/*` davranışları, kök DB şema/seed.

## 9 · Koruma sınırları (düzeltme + Phase 1 boyunca)

Home gövdesi yeniden tasarlanmaz · B1-B6 selector/store/storage key/iş kuralları değişmez · `lib/` mevcut modüllerine dokunulmaz · navigation route'ları değişmez · ana tab eklenmez/kaldırılmaz · production botanical asset eklenmez · kök DB schema/seed değişmez · toxic plant content envantere taşınmaz · tıbbi veya deterministik astrolojik copy üretilmez · **commit/push yapılmaz** (onay sonrası, faz kapanışında ayrı karar).

## 10 · Riskler

- Font yükleme splash süresi (+~200-400ms) — bütçe içinde; 4 aile Inter'li plana göre daha fazla kesim taşıyabilir → kesim sayısı minimumda tutulur (rol başına 1-2).
- Caveat/Playfair'in TR karakter kapsaması font dosyasına bağlı — TR render testi P1 giriş kriteri; eksik glyph çıkarsa rol için fallback kararı kullanıcıya raporlanır.
- Deprecated-alias katmanı çift API dönemi yaratır (bilinçli, iki fazlık ömür).
- react-native-svg P1'e alınırsa **yeni dev build** zorunluluğu: cihaz testleri için EAS build slotu planlanmalı; alınmazsa P2 başında alınır.
- Panel-only dark mimarisi yeni gate kuralı ister — kural yanlış yazılırsa false-positive'lerle geliştirme yavaşlar; allowlist'li başlanır.
- ProTeaser/notice contract'ları üründe henüz tüketilmiyor — "ölü kod" görünümü normaldir; dev-gallery tek tüketici olarak kalır (bilinçli).


===== DOSYA: design-prova/estetik-anayasa.md =====

# ESTETİK ANAYASA — Sürüm 1.0 — ~~KANONİK~~ ARŞİV

> **Superseded by docs/design (15 > 00-16) — 2026-07-21 — tarihsel referans.**
> Bu belge artık aktif tasarım otoritesi değildir; kanonik kaynak `docs/design/` paketidir (öncelik: `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md`). Galeri modeli ve "koyuluk yalnız görsel katmanda" ilkesi 15 §3'te devam ediyor; çelişen tüm maddeler geçersiz.

**Tarih:** 2026-07-20 · **Onay:** ürün sahibi (Türkan), 2026-07-20 — §6 dört karar + §3 çakışma önceliği dahil
**Girdi:** `design-prova/wellness-appdesign-provamoodboard/` (27 görsel, tamamı incelendi)

## 1 · Galeri modeli (KİLİTLİ çerçeve)

Arayüz zemini/krom **daima aydınlık krem-pudra**; "koyu blok yok" kuralı arayüze
aynen uygulanır. Koyuluk yalnız **görsel katmanda** yaşar: koyu eser, aydınlık
galeri duvarına asılır. Gece sicili bir ekran teması değil, çerçevelenmiş
görselin kendi dünyasıdır.

## 2 · Üç sicil (moodboard'dan çıkarım)

### 2a · Suluboya — varsayılan, nazik temalar
Referanslar: kır çiçekleri paneli (m26 — üstte geniş krem boşluk), suluboya
çayır (m03, m16), levha/plaka düzenleri (m02, m07, m20), ritüel natürmortu (m22).
- **Palet:** krem kâğıt taban · adaçayı yeşili · pudra gül/şeftali · leylak ·
  mavi-gri; hepsi düşük doygunluk, mevcut token ailesiyle akraba.
- **Işık:** gündüz, yumuşak, neredeyse gölgesiz; kâğıt beyazı ışığın kendisi.
- **Doku:** suluboya granülasyonu + kâğıt greni; ıslak-kenar yumuşaklığı,
  sert kontur yok.
- **Kompozisyon:** bol negatif boşluk (metin krem boşlukta yaşar); bitki
  kütlesi alttan/kenardan yükselir, asimetrik; v3 "Botanik Levha" diliyle uyumlu.

### 2b · Işıltı — özel anlar: açılış, kart açılımı, kutlama
Referanslar: ışık hüzmeli orman (m18), pastel sim kumsalı (m05), pastel Satürn
(m10), bokeh çiçekler (m13), pastel nebula/spiral (m21, m23).
- **Palet:** pudra pembe + **altın** + inci beyazı + aqua kırpıntısı; taban
  yine aydınlık — ışıltı kremden kopmaz.
- **Işık:** görünür kaynak: hüzme, bokeh, sim tozu, sedef parlama.
- **Doku:** bokeh daireleri, altın sim taneleri, yumuşak flu katmanlar.
- **Kompozisyon:** merkezî ışık odağı + çevresel yumuşama; halo/spiral motifi.
- **Kural:** geçici anların dilidir; kalıcı yüzeylerde birikmez (yorgunluk yaratır).
- **Prizmatik kural (karar 2026-07-20):** prizmatik ışık kırılımı serbest —
  inci/opal yanardönerliği; **yay formu ve renk şeridi (gökkuşağı) yasak.**

### 2c · Gece — koyu-sinematik: dolunay, tutulma, ağır transit, gölge anlatılar
Referanslar (çapa): **antika altın zodyak çarkı, dokulu patlıcan-lacivert
zemin** (m24), lacivert gök + zengin botanik çark (m08), yıldızlı leylak
gece + suluboya bitkiler (m25).
- **Palet:** patlıcan-lacivert derinlik (saf siyah DEĞİL — dokulu, tonlu) +
  antika altın ince çizgi + mücevher tonlu botanik (bordo, gül kurusu, adaçayı).
- **Işık:** düşük anahtar; ay/altın nokta ışığı, yıldız alanı; koyudan
  mücevher gibi çıkan nesne.
- **Doku:** kumaş/kâğıt dokulu koyuluk, altın varak lekesi, yıldız greni.
- **Kompozisyon:** merkezî çark/kemer geometrisi, ince çizgi süsleme;
  celestial semboller (☽ ☉ zodyak) burada ana dile döner.
- **Kural:** yalnız görsel katmanda (galeri modeli); metin/krom kremde kalır.

## 3 · Sicil seçici sinyaller (ilke düzeyi — kod değil)

Mevcut mimariye bağlanır: semantic **ambient/timeOfDay** + **astro_context_daily**.
- **Ay fazı:** dolunay/yeniay/tutulma → gece sicili eğilimi.
- **Transit teması:** ağır/gölge temalar (ör. Satürn-ağırlıklı) → gece;
  kutlama/tamamlanma anları → ışıltı; nazik gündelik temalar → suluboya.
- **Bitkinin gezegeni:** Ay/Satürn bitkileri gece vurgusuna, Güneş bitkileri
  ışıltı vurgusuna yatkın (KS-1 gezegen→ton eşlemesiyle tutarlı).
- **Günün saati:** morning/day → suluboya · evening → suluboya→ışıltı geçişi ·
  night → görsel katmanda gece sicilinin açılması.
- **Çakışma önceliği (KABUL, 2026-07-20):** güvenlik/bağlam > ay fazı >
  transit teması > saat > bitki gezegeni.

## 4 · Tipografi kompozisyon ilkeleri (yazılı örneklerden)

Font aileleri KİLİTLİ (Fraunces/Lora/Caveat) — tartışılmaz; buradakiler yalnız
kompozisyon çıkarımıdır (m02, m07, m20, m25 plaka düzenlerinden):
- **Ölçek kontrastı:** büyük serif manşet + hemen altında küçük italik alt
  satır (tür adı/tema) — çift katmanlı başlık ritüeli.
- **Hiza:** metin blokları görsel kütleye asimetrik yaslanır; tam simetri
  yalnız tören anlarında (gece çarkı).
- **Boşluk ritmi:** cömert satır arası (≥1.6), bölümler arası nefes; rozet/
  kutu yerine ince çizgi + boşlukla hiyerarşi.
- **Aksesuar disiplini:** ekran başına tek büyük an; folio/numaralama gibi
  küçük ritüeller imza olarak kalır.

## 5 · Güvenlik notu (KİLİTLİ)

**T0 bitkiler kart envanterine girmez.** Gece sicili estetik dildir, kapsam
kararı değildir — "gölge anlatı" hiçbir zaman kapsam dışı/duyarlı içeriği
geri çağırmaz. Ek uyarı: moodboard plakalarındaki bitkiler (ör. blue lotus,
mugwort) STİL referansıdır; içerik envanterine sinyal sayılmaz, girecek her
bitki kendi T-sınıflandırmasından geçer (Safety master).

## 6 · ÇELİŞEN SİNYALLER — KARARLAR (ürün sahibi, 2026-07-20)

1. **Masal/fantezi görseller** (m04·m17·m11·m15): yalnız **ışık/atmosfer
   referansı** — figüratif dil (peri, masal figürü) kimliğe GİRMEZ
   (Design §16.2 korunur).
2. **Gökkuşağı ELENDİ** (m12·m14). Karşılığı ışıltı siciline işlendi (§2b
   prizmatik kural): kırılım serbest, yay formu ve renk şeridi yasak.
3. **Gece zemini: patlıcan-lacivert** (m24·m25 çapaları); **saf siyah +
   neon dile girmez** (m01·m09 bu yönleriyle elendi).
4. **Script başlık YOK** — Caveat yalnız günün sözü; kural korunur
   (m20·m24 script örnekleri benimsenmez).

---
*Analiz: Claude (tasarım direktörü modu). Görsel eşleme: m-numaraları
`scratchpad` dönüşüm haritasında; orijinal dosya adları moodboard klasöründe.*

