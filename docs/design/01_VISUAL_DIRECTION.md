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
