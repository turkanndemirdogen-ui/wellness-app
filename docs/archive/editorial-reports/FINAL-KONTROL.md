# FİNAL GENEL KONTROL RAPORU

Tarih: 2026-07-14 · Kapsam: 18 çıktı dosyası (12 quiz + 5 modül + 1 bitki kartları master)

## 1. JSON geçerliliği ve yapı bütünlüğü
**18/18 dosya GEÇERLİ.** Her çıktı, girdiyle otomatik karşılaştırma aracıyla (Python `json` + özyinelemeli yapı denetimi) doğrulandı:
- Anahtarlar, anahtar sırası, dizi uzunlukları, tipler: **birebir aynı**
- `_meta`/`meta` blokları, tüm `id`/`herb_id`/`transit_key`, `p`/`s`/`yon` puanlama alanları, `bitki`/`glif`/`hex`/`modul` kodları, sayısal değerler, kanıt etiketleri: **hiçbirinde değişiklik yok**
- Mimaride veya anahtarlarda düzeltme gerektiren yapısal sorun görülmedi.

## 2. Düzenleme özeti (toplam 136 metin alanı)
| Dosya | Alan | Dosya | Alan |
|---|---|---|---|
| quiz-ay1 | 4 | quiz-ay10 | 5 |
| quiz-ay2 | 5 | quiz-ay11 | 11 |
| quiz-ay3 | 7 | quiz-ay12 | 6 |
| quiz-ay4 | 5 | mood | 10 |
| quiz-ay5 | 5 | journal | 8 |
| quiz-ay6 | 4 | journal-transit | 4 |
| quiz-ay7 | 4 | cycle-beslenme | 8 |
| quiz-ay8 | 4 | neurogames-v1 | 1 |
| quiz-ay9 | 5 | bitki-kartlari-master | 40 |

Not: Bitki kartlarında parti/pilot dosyalar referans niteliğinde olduğundan (İş Planı, Aşama 3) yalnızca master düzenlendi ve 02_CIKTI'ya yazıldı.

## 3. AI/wellness klişeleri
- Yasaklı kalıplar tüm kullanıcı metinlerinden temizlendi: **"alan aç"** (quiz-ay3, ay12, journal-transit, cycle-beslenme ×5, aura), **"kendine izin ver"** (journal-transit), **"kendine nazik/şefkatli ol"** emir kalıpları (quiz-ay3, cycle-beslenme ×2), **"öz-şefkattir"** jargonu (quiz-ay3).
- Kalan "izin ver" kullanımları klişe değil, gerçek anlamda (ör. "dokunulmaya izin vermeyen bitki", kabul tekniğinin standart tanımı).
- "Sessizliği konuşur" tipi boş şiirsellik hiçbir çıktıda yok; mevcut metaforlar fikir taşıyor.
- `_meta` bloklarındaki "alan aç" ifadeleri tasarım talimatı olduğundan dokunulmadı.

## 4. Tekrar eden giriş kalıpları
- "Bunlar kalıp değil, ayna" ortak açılışı **tasarım kuralı** (quiz _meta'larında sabitlenmiş); korundu.
- Açılışların ikinci cümleleri çeşitlendirildi: ay6/ay7/ay8'de birebir aynı olan "Bugün hangisi öne çıkıyor" üçlemesi kırıldı ("hangisinin ışığındasın", "hangisi içinde dolaşıyor").
- Dosyalar arası birebir soru tekrarları giderildi ("Gece göğünde seni ne çağırır?" ay2/ay5; "İnsanlar sana ne için gelir?" ay7/ay8).
- Gölge daveti cümle tekrarı (ay6 ↔ ay9) özgünleştirildi.
- Son tarama: kalan tek tekrarlar ortak sonuç şablonu ve tasarım gereği ortak açılış — bilinçli.

## 5. Ton
- Quizler: zeki, oyunbaz, paylaşılabilir; çocuksuluk ve fal dili yok.
- Modüller: bilimsel çerçeve korunarak sıcak ve doğal; klinik jargon ("distres", "granülerlik", "spesifik") kullanıcı metinlerinden çıkarıldı.
- Bitki kartları: soft witchy, her kartın kendi duygusal rengi var; ritüeller emir değil davet.
- Ton kayması tespit edilmedi; kurumsal tınılı "misyon" gibi sözcükler uyumlandı.

## 6. Yazım ve noktalama
Düzeltilen hatalar: "durultur um" (ay5), "tatmin in" (ay12), "Sen bir bollukluk" (ay9), "bahçen açtı" (neurogames), "ifaden gücün" (ay8), eksik yüklem ekleri (ay9 ×2), "zeka"→"zekâ" (ay7), "öz-güven"→"özgüven" (cycle-beslenme), "her evreni"→"her evreyi" (ay7), anlam hatası "İncelen aydınlık"→"Usulca büyüyen ışık" (ay6, büyüyen hilal).

## 7. "Kalıp değil ayna" çerçevesi
- 10 quiz açılışında birebir, ay3 ("sınav değil, ayna") ve ay12'de ("test değil, ayna") varyantla mevcut.
- Hiçbir sonuç metni kesin kimlik hükmü vermiyor; tüm arketiplerde güç + ölçülü gölge daveti dengesi korundu.

## 8. Kesin sağlık veya astroloji iddiası
Son tarama (grep, tüm çıktılar) **temiz**:
- "Şifa/şifacı" ifadeleri tamamen çıkarıldı (aura ×4, cadı, quiz-ay11 seçeneği); "iyileştirir/tedavi eder" hiçbir kullanıcı metninde yok.
- Bitki kartlarında organ (mide, karaciğer, kemik, sinir, boğaz, kan, cilt), işlev (uyku, nefes, sindirim), sağaltım fiili (yatıştırır, arındırır, sakinleştirir, besler) ve kullanım izi (gül suyu, yastık dolgusu, tat) kalmadı; bitkiler yalnızca gezegen/sembol/karakter/duygu üzerinden anlatılıyor.
- Kehanet dili ("olacak", "yaşayacaksın", "kaderin") hiçbir dosyada yok; transit soruları "öne çıkarabilir/olabilir" davet kipinde.
- Beslenme modülünde kesin talimat yok; kanıt/gelenek blok ayrımı ve sabit kapanış korundu.
- Mevcut güvenlik notları (adaçayı, sarı kantaron, sığırkuyruğu, meşe, aslanpençesi; mood/journal safety blokları; travma-kriz yönlendirmeleri) **eksiksiz duruyor**.

## 9. Sonuç
Tüm aşamalar tamamlandı. 18 çıktı dosyası `02_CIKTI/` altında, dosya bazlı 18 rapor `03_RAPORLAR/` altında hazır. Yayın öncesi tek bekleyen dış bağımlılık, `_meta`'larda zaten kayıtlı olan diyetisyen/kaynak teyidi (cycle-beslenme) ve launch checklist adımlarıdır.
