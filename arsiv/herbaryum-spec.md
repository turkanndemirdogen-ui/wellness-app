# herbaryum-spec.md — v1.0 (5 Temmuz 2026)

> ⚠ **ARŞİV (5 Tem, final tur):** R1.3 ve R1.4 bu belgedekinden farklı finallendi; geçerli kaynak **bahce-spec v1.2**'dir (koleksiyon free + pro_extra_ally · uyuyan tohum c · Aylık Albüm · Paylaşım R1.5=c). Bu belge tarihsel kayıttır; bahce-spec ile çelişen her maddesi geçersizdir. Yaşayan kısım: §2 kart veri alanları, üretim adımında bahce-spec alan adlarıyla (story_narrative, ritual) birleştirilir.

## 0 · Kimlik ve kaynak hiyerarşisi
- Bu belge, Bahçe sekmesindeki **Herbaryum koleksiyonunun** (çekirdek retention döngüsü, Karar R1) mekanik ve veri sözleşmesini tanımlar.
- `garden_state` sözleşmesi **bahce-spec §3**'te tanımlıdır; bu belge onu **genişletir, yeniden tanımlamaz**. Çakışmada garden_state alanlarında bahce-spec §3, herbaryuma özgü alanlarda bu belge kazanır.
- Ekran yerleşimi: Bahçe kompozisyonu "ritüel üst + koleksiyon alt" (kilitli); herbaryum **koleksiyon alt** bölgesinde yaşar.

## 1 · Kilitli kararlar (R-serisi)
| Karar | Değer |
|---|---|
| R1 | Çekirdek retention döngüsü = Herbaryum koleksiyonu |
| R1.1 | Kazanım = eylem-bazlı (**b**) |
| R1.2 | Set mantığı = gezegen rafları + botanik mevsimsellik + aylık albüm (**c**) |
| R1.3 | Nadirlik/gating = tier-bazlı (**a**) + 3 dengeleyici |
| R1.4 | Kaçırma = **Tohum kumbarası (b: çoklu tohum, 7 gün TTL)** — bahce-spec'teki "c · uyuyan tohum, tek slot, 3 gün" satırını **ezer**; bahce-spec güncellenecek |
| R1.5 | Paylaşım = tek kart + aylık albüm sayfası + nadir çerçeve (**c**) |

## 2 · Kart veri kontratı (plant_card)
- `card_id` (uuid)
- `bitki_id` (motor tablo FK)
- `isim_tr`, `isim_latince`
- `gezegen` (7 klasik gezegenden biri) → raf üyeliği
- `element` (ates | toprak | hava | su)
- `mevsim[]` (ilkbahar | yaz | sonbahar | kis) → toplanabilirlik penceresi
- `kozmik_olay` (nullable: dolunay, yeniay, gundonumu, ekinoks…) → "Gece Açanlar" vb. nadir kartlar
- `tier` (tomurcuk | cicek | yildiz_cicegi)
- `on_yuz`: { `illustrasyon_ref`, `tek_satir` } — tek_satir sembolik/geleneksel çerçevede, iddiasız
- `arka_yuz`: { `gezegen_hikayesi`, `enerjetik_profil`, `uyari_chips[]` (T1–T3), `bilgilendirme_notu` (sabit metin) }
- `app_safe = true` zorunlu — **T0 bitkiler bu tabloya hiç giremez**
- Not: kaynak atfı hiçbir kullanıcı yüzeyinde görünmez; `source_ref` yalnız agent tarafında (D2.4 ile uyumlu).

## 3 · Kazanım mantığı (günlük döngü)
- Günün müttefiki: şifa-bahçesi kontratındaki dominant_light → planet_herb seçimi; ek filtreler: **mevsim penceresi açık** + **entitlement havuzu** (bkz. §6, M3).
- Kart kazandıran eylemler (tüm modüller, tek liste): mood log, journal/şükran kaydı, nefes seansı, meditasyon tamamlama, neurogame oturumu, yoga seansı, skincare rutin işareti, quiz tamamlama, Akış görevi tamamlama. Salt görüntüleme eylem sayılmaz.
- Günlük kural (M1 varsayılan): günün **ilk eylemi** günün kartını kazandırır; aynı gün sonraki eylemler kumbaradaki en eski tohumu çevirir; tohum yoksa ek kart üretmez (enflasyon koruması).
- Tekrar karşılaşma: kart zaten koleksiyondaysa yeni kazanım kart üretmez (v1'de tekrar sayacı yok — basitlik).

## 4 · Tohum kumbarası (R1.4 = b)
- Eylemsiz gün sonunda günün bitkisi kumbaraya **tohum** olarak düşer.
- TTL: **7 gün**; süresi dolan tohum sessizce solar — suçlayıcı bildirim yok.
- Kapasite: TTL gereği doğal üst sınır ~7; sabit üst sınır **7 tohum**.
- Dönüşüm: **FIFO** (en eski tohum önce). Tohum, düştüğü günün bitkisini temsil eder; dönüşüm anında mevsim penceresi kapanmış olsa bile kart kazanılır.
- Push kuralı: kumbara push'u haftada en çok 2; dil şefkatli davet. Taslak: "Kumbaranda 3 tohum bekliyor — tek küçük bir adım yeter." (Türkçe son hali Türkan'da.)

## 5 · Setler
- **Gezegen rafları:** 7 kalıcı raf; kart `gezegen` alanına göre otomatik yerleşir.
- **Mevsimsellik:** bitki yalnız mevsim penceresinde günlük müttefik olarak seçilebilir; kaçırılan bitki gelecek mevsim döner — dürüst kıtlık, ceza yok.
- **Aylık albüm:** dönem = **takvim ayı** (M2 varsayılan; arketip quiz rotasyonuyla senkron). O ay kazanılan kartlar albüm sayfasına da işlenir → kart **çift üyelik** taşır (raf + albüm). Bu bölüm bahce-spec'e "Aylık Albüm" alt başlığı olarak taşınacak (bkz. EK-A).

## 6 · Gating & entitlement (R1.3 = a)
- Tier eşlemesi: **tomurcuk = free; cicek + yildiz_cicegi = pro.** RevenueCat entitlement, mimari seviyede tek uygulama (mevcut D-serisi kararla uyumlu).
- **Dengeleyici 1 — free koleksiyon tam:** Tomurcuk rafları free kullanıcı için tamamlanabilir bir bütündür; kırpılmış deneyim hissi yasak (bkz. K6).
- **Dengeleyici 2 — silüet vitrini:** pro kartlar raflarda eskiz-silüet + kilit rozeti olarak görünür; dokununca nazik paywall (pazarlama dili yok, sakin bilgilendirme).
- **Dengeleyici 3 — kozmik tadım:** dolunayda seçilen 1 pro kart 24 saat herkese kazanılabilir; kazanılan tadım kartı **kalıcıdır** (M4 varsayılan).
- **Entitlement-aware seçim (M3 varsayılan):** free kullanıcının günlük müttefiki Tomurcuk havuzundan seçilir; pro tüm havuzdan. Free kullanıcı hiçbir gün "kazanamayacağı" kartla karşılaşmaz. ⚠ Bu kural şifa-bahçesi seçim algoritmasına dokunur — kontrata not düşülecek.

## 7 · Paylaşım (R1.5 = c)
- Paylaşılabilir yüzey: **yalnız ön yüz.** Arka yüz hiçbir paylaşım şablonuna render edilmez → pro içerik sızmaz + paylaşılan görselde iddia dili riski sıfır.
- 3 şablon, tek tasarım dili:
  1. Tek kart — story 9:16 + kare 1:1
  2. Aylık albüm sayfası kompozisyonu — ay kapanışında
  3. Nadir an çerçevesi — `kozmik_olay` kartları için özel çerçeve
- Görsel kit kuralları geçerli: pudra palet, botanik motif, zarif serif, app adı filigranı, emoji yok.

## 8 · Güvenlik kuralları
- T0 bitkiler herbaryumda var olamaz (DB kısıtı + test, bkz. K7).
- T1–T3 uyarı çipleri **yalnız arka yüzde** (arka yüz = detay görünümü); ön yüz kompakt, uyarı taşımaz.
- Arka yüzde sabit satır: "Bu içerik bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez."
- Kart tamamen **sembolik akış** yüzeyidir: kanıt/etki cümlesi kartta yer almaz → sembolik–kanıt ayrımı yapısal olarak sağlanır.
- Dil: "geleneksel olarak … ile ilişkilendirilir" çerçevesi; doz/tüketim/hazırlık dili yok; kader/kesinlik dili yok.

## 9 · Kabul kriterleri
- K1 Eylemsiz gün → gün sonunda tohum oluşur; 7. gün sonunda solar; suçlayıcı bildirim üretmez.
- K2 Günün ilk eylemi karta, sonraki eylemler FIFO tohum dönüşümüne gider; günde 1'den fazla "yeni gün kartı" oluşmaz.
- K3 Free kullanıcı yalnız Tomurcuk kazanır; günlük müttefiği daima Tomurcuk havuzundandır.
- K4 Pro kartlar free'de silüet render edilir; arka yüz istekleri entitlement'sız soft-paywall'a düşer.
- K5 Paylaşım çıktılarının hiçbirinde arka yüz alanı bulunmaz (şablon veri sözleşmesi `on_yuz` ile sınırlı — otomatik test).
- K6 Tomurcuk havuzu her mevsim penceresinde ≥ X kart sunar (X, havuz sayımı sonrası belirlenecek — veri boşluğu).
- K7 T0 `bitki_id`'leri plant_card tablosuna insert edilemez.
- K8 Kozmik tadım kartı, kazanımdan sonra entitlement düşse bile koleksiyonda kalır.
- K9 Tüm kullanıcı metinleri marka-ton kurallarından geçer (iddia dili lint listesi).

## 10 · Açık mikro-kararlar (varsayılanla ilerlenir, veto edilebilir)
- **M1** Günlük kart tavanı: ilk eylem = kart, sonrakiler = tohum dönüşümü. *(varsayılan)*
- **M2** Albüm dönemi: takvim ayı. *(alternatif: yeniay→yeniay döngüsü)*
- **M3** Free müttefik seçimi: entitlement-aware havuz. *(alternatif: herkese aynı bitki + free'ye Tomurcuk ikizi)*
- **M4** Tadım kartı kalıcılığı: kalıcı. *(varsayılan)*

## 11 · Veri boşlukları (build ön koşulları)
- Plant card dataset yok → motor tablo siparişine eklenen alanlar: `mevsim[]`, `kozmik_olay`, `tier`, `tek_satir`, `gezegen_hikayesi`, `enerjetik_profil`.
- `guven_tier` atamaları manifest.json'da eksik.
- Tomurcuk havuz sayımı yok → K6'daki X belirlenemez; free deneyimin yeterliliği doğrulanamaz (veri yok).

## EK-A · Senkron bloğu (Claude Code klasörü + ekran spec sohbetine taşı)
```
KARAR SENKRONU (herbaryum sohbeti, 5 Tem 2026):
· R1.1=b (eylem-bazlı kazanım)
· R1.3=a (tier gating: tomurcuk free, cicek+yildiz pro
  + 3 dengeleyici: free-tam raflar, silüet vitrini, kozmik tadım)
· R1.4=b (tohum kumbarası: çoklu tohum, 7 gün, FIFO)
  → bahce-spec'teki "R1.4=c uyuyan tohum" satırı GÜNCELLENECEK
· R1.5=c (tek kart + aylık albüm sayfası + nadir çerçeve;
  yalnız ön yüz paylaşılır)
· bahce-spec'e eklenecek: "Aylık Albüm" bölümü (takvim ayı,
  kart çift üyelik: raf + albüm)
· Kaynak: herbaryum-spec.md v1.0
```
