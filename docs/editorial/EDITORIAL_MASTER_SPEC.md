# EDITORIAL MASTER SPEC
## Türkçe Wellness Uygulaması — v1.0

Bu belge, uygulamada kullanıcıya görünen tüm Türkçe metinler için tek editoryal otoritedir.

---

## 1. Amaç

Metinler:
- doğal,
- akıcı,
- kusursuz Türkçeli,
- sıcak,
- düşünsel,
- özgün,
- mobil ekranda rahat okunan

bir dil taşımalıdır.

Hedef yalnızca “güzel cümle” değildir. Her cümle anlaşılır bir fikir, duygu veya işlev taşımalıdır.

---

## 2. Marka sesi

### Temel nitelikler
- Meraklı
- Zeki
- Şefkatli
- Davetkâr
- Rafine
- Soft witchy
- Sembolik ama gerçeklikten kopmayan
- Edebî ama sade

### Duygu paleti
Metinler yalnızca sakinlik ve rahatlama etrafında dönmez. İçeriğe göre:
- merak,
- neşe,
- coşku,
- heyecan,
- cesaret,
- hayranlık,
- umut,
- oyun,
- aidiyet,
- tatlı hüzün,
- dinginlik

gibi farklı duygular kullanılabilir.

### Kaçınılacak tonlar
- Üstten konuşan öğretmen dili
- Motivasyon konuşması
- Fal ve kehanet dili
- Karanlık/gotik aşırılık
- Çocukça “cadı” estetiği
- Ansiklopedik yığılma
- Yapay, jenerik wellness dili
- Duyguyu romantize eden klinik olmayan aşırılık

---

## 3. Dil standardı

### Kullan
- Açık ve doğal cümle yapıları
- Türkçede gerçekten söylenen ifadeler
- Ölçülü ritim
- Somut, anlamlı imgeler
- Kullanıcıya seçim bırakan davet dili
- Gerektiğinde mizah, canlılık ve oyun duygusu

### Kaçın
Aşağıdaki ifadeler otomatik olarak yasak değildir; ancak çoğu bağlamda yapay ve tekrarlı oldukları için yalnızca gerçekten gerekliyse kullanılmalıdır:
- “alan aç”
- “kendine izin ver”
- “anda kal”
- “evren sana...”
- “enerjini yükselt”
- “titreşimini...”
- “sessizliği konuşur”
- “Ay’ın tebessümü”
- “ruhuna fısıldar”
- “şifa yolculuğu”

Muğlak şiirsellik yerine anlamlı derinlik kur:
- Zayıf: “Bazı çiçekler sessizliği konuşur.”
- Güçlü: “Papatya gösterişiyle değil, her yerde yeniden açabilmesiyle hatırlanır.”

### Emir dili
“Yapmalısın” ve buyurgan talimatlar kullanılmaz.
Tercih edilen yapılar:
- “Dilersen...”
- “Bugün şunu düşünebilirsin...”
- “Kendine şu soruyu bırakabilirsin...”
- “Bazı kişiler bu dönemde ... tercih edebilir.”

Ancak her cümlede aynı davet kalıbını tekrarlama.

---

## 4. Güvenlik ilkeleri

### Genel sağlık dili
Kesin tıbbi iddia yok:
- tedavi eder
- iyileştirir
- giderir
- şifa verir
- önler
- güçlendirir
- artırır
- düzenler
- hormonları dengeler
- toksin atar
- detoks yapar

Bilgilendirme notları, kriz yönlendirmeleri ve tıbbi tavsiye yerine geçmediği açıklamaları anlam kaybı olmadan korunur.

### Astroloji
Astroloji:
- sembolik,
- davetkâr,
- olasılık bildiren

bir çerçevede kalır.

Kullan:
- “öne çıkarabilir”
- “dikkatini şu temaya çevirebilir”
- “bu dönem şu soruyu düşündürebilir”

Kullanma:
- “kesin yaşayacaksın”
- “bu transit seni... yapar”
- “kaderinde”
- “olacak”

### Quiz ve arketipler
- Sonuçlar kesin kimlik tanımı değildir.
- “Kalıp değil ayna” ruhu korunur.
- Sembolik ve eğlence amaçlı çerçeve bozulmaz.
- Hiçbir arketip diğerinden üstün gösterilmez.
- “Gölge” dili patoloji değil, dengeli öz-yansıtma olarak kullanılır.

---

## 5. JSON ve mimari sınır

### Düzenlenebilecek alanlar
Yalnızca kullanıcıya görünen metinler:
- `tek_satir`
- `story_narrative`
- `ritual`
- `acilis_metni`
- `sonuc_sablonu`
- `kisa`
- `derin_ek`
- `paylasim`
- soru metinleri
- seçenek metinleri
- sonuç açıklamaları
- `user_text_variants`
- mood/journal ekran metinleri
- kullanıcıya görünen başlık, açıklama, adım ve geri bildirimler
- söz satırları

### Asla dokunma
- `_meta` blokları
- teknik `meta` alanları
- JSON anahtarları
- `id`, `herb_id`, `soz_id`, `rule_id`, `transit_key`
- `p`, `s`, `yon`
- puanlama mantığı
- eşleşme anahtarları
- gezegen/element/bitki kodları
- sayısal değerler
- Free/Pro ayrımı
- veri modeli
- nesne/dizi yapısı
- alan sırası, aksi özellikle istenmedikçe

Bir alanın kullanıcıya görünüp görünmediği belirsizse değiştirme.

---

## 6. Modül kuralları

### 6.1 Bitki kartları
Bitki kartlarında yalnızca:
- kültürel sembolizm,
- gezegen/element atmosferi,
- karakter,
- duygu,
- insan deneyimi

anlatılır.

Çıkar:
- organ adları
- semptomlar
- biyolojik işlevler
- sindirim, uyku, ağrı, nefes vb. sağlık çerçevesi
- doz, hazırlama, tüketim ve kullanım önerileri
- “sakinleştirir, besler, arındırır, güçlendirir” gibi işlev iddiaları

Metin:
- mini bir sahne veya düşünsel deneme gibi okunabilir,
- ama masalsı belirsizliğe düşmez,
- yeni tarihsel veya mitolojik bilgi uydurmaz.

Toksik bitkiler ana wellness/herbaryum koleksiyonuna eklenmez. İleride ayrı tarihsel “Gölge Herbaryumu” yapılırsa kullanım, temin, hazırlama veya deneyimleme dili olmadan ve görünür toksisite uyarısıyla ayrı spec gerektirir.

### 6.2 Quizler
Doğallaştır:
- açılışlar
- sorular
- seçenekler
- arketip/sonuç açıklamaları
- paylaşım cümleleri

Korunacak:
- puanlama
- id'ler
- p/s eşleşmeleri
- bitki, gezegen, element ve modül bağlantıları

Ay 5 bitki quizinde sağlık özelliği yükleme.
Ay 10 cadı quizinde “cadı” estetik ve kişilik metaforudur; gerçek büyü/kehanet iddiası yok.
Ay 11 aura quizinde aura gerçek enerji okuması gibi sunulmaz.
Ay 3 kişilik pusulasında bilimsel test veya tanı izlenimi verilmez.

### 6.3 Mood
- Duygular romantize edilmez, küçümsenmez.
- Klinik/tanı dili eklenmez.
- Duygu etiketleri doğal Türkçedir.
- Düzenleme araçları garanti sonuç vaat etmez.
- Kriz ve güvenlik metinleri eksiltilmez.
- Uzun olumsuz dalışı teşvik eden dil kullanılmaz.

### 6.4 Journal
- Sorular açık, insani ve düşündürücüdür.
- Terapi vaadi yoktur.
- Travma ve güvenlik uyarıları korunur.
- Kullanıcı zorlayıcı yazmaya itilmez.
- Şükran soruları mekanik liste hissinden mümkün olduğunca uzaklaştırılır.
- Perspektif değiştiren sorular suçlayıcı olmaz.

### 6.5 Journal transit soruları
- Transit anahtarları ve temaları değişmez.
- Soru davetkâr ve açık uçludur.
- Kesin kehanet ve bedensel/duygusal çıkarım yoktur.
- Transit düşünmek için bir çerçevedir, neden-sonuç açıklaması değildir.

### 6.6 Cycle beslenme
- Beslenme dili modül gereği korunabilir.
- Kalori, gram, porsiyon, kilo ve kısıtlama dili eklenmez.
- “Mutlaka ye”, “kaçın”, “yasak” kullanılmaz.
- Yeme davranışı hassasiyeti gözetilir.
- Araştırma, Ayurveda ve GÇT blokları birbirine karıştırılmaz.
- Geleneksel yaklaşımlar bilimsel gerçek gibi sunulmaz.
- “Sindirimi düzenler, şişkinliği giderir, hormonları dengeler” gibi tıbbi iddialar kullanılmaz.
- Sabit tıbbi bilgilendirme kapanışı korunur.

### 6.7 Neurogames
Konumlandırma:
- zihinsel mola,
- mindful oyun,
- kısa ve keyifli odak değişimi.

Kullanma:
- beyni geliştirir
- hafızayı güçlendirir
- dikkati artırır
- bilişsel performansı yükseltir
- sağlık sonucu vaat eder

Skor, kıyas, performans ve başarısızlık baskısı ekleme.

---

## 7. Kalite testi

Her kullanıcı metni yayınlanmadan önce:

1. Türkçede doğal mı?
2. Bir fikir veya işlev taşıyor mu?
3. Başka bir AI wellness uygulamasında aynen bulunabilecek kadar jenerik mi?
4. Gereksiz şiirsellik var mı?
5. Kullanıcıya hüküm veriyor mu?
6. Sağlık veya astroloji kesinliği yaratıyor mu?
7. Aynı dosyada benzer kalıp fazla tekrar ediyor mu?
8. Mimariye veya teknik veriye yanlışlıkla dokunuldu mu?
9. JSON parse ediliyor mu?

Sorun varsa yalnızca gerekli alanı yeniden yaz.

---

## 8. Çalışma ve teslim standardı

- Aktif içerik dosyasını düzenle.
- Eski sürümü aktif runtime/content klasöründe tutma.
- Git üzerinden geçmiş zaten korunuyorsa ayrıca aynı klasörde `_old`, `_final2`, `_new` kopyaları üretme.
- Düzenleme sonrası JSON parser çalıştır.
- Değişen kullanıcı alanlarını kısa bir raporla özetle.
- Şüpheli teknik veya bilimsel noktayı kendiliğinden çözme; raporla.
- Kullanıcı onayı özellikle istenmedikçe ara taslak üretme; tamamlanmış dosya teslim et.
