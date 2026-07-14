# hook-sentez-spec.md — v1.2 (5 Temmuz 2026 · final tur hizalaması)

> **Revizyon notu (v1.2):** Ekran spec dosyalarıyla senkron sonrası şu maddeler bu belgede GEÇERSİZDİR, geçerli kaynak bahce-spec v1.2 / sohbet-spec v1.1'dir:
> · R1.3: tier kilidi değil — **koleksiyon free + `pro_extra_ally`** (bahce-spec).
> · R1.4: kumbara değil — **c · uyuyan tohum** (tek slot, 3 gün; bahce-spec).
> · earn_actions v1: dar whitelist (hikâye açmak · mood · journal · hatırlatma); bu belgedeki geniş "herbaryum bağı" listeleri **v1.1 genişletme adayıdır**.
> · H3 → **SB-1=b**'ye katlandı (haftalık bakış pro; sohbet-spec).
> · "Kart arka yüzü" ayrı yüzey değildir; içerik paylaşılan **`herb_detail`** ekranında yaşar (alan adları: `story_narrative`, `ritual`).

Amaç: Benchmark uygulamalardan seçilen hook mekaniklerinin, modül modül bizim ürün diline çevrilmiş davranış tanımları. Ekran spec'lerine (diğer sohbet) ve Claude Code build'ine girdi olur. Ekran yerleşimi tanımlamaz — kilitli tab/kompozisyon kararlarını değiştirmez.

## 0 · Modüller-üstü ilkeler
- Her modülün "tamamlama" eylemi herbaryum döngüsüne bağlanır (eylem listesi: herbaryum-spec §3). Yeni hook eklerken soru şudur: "Bu eylem kart/tohum sayılır mı?"
- Sembolik ve kanıt akışları hiçbir kartta/cümlede birleşmez (kilitli kural).
- Hiçbir mekanik suçluluk üretmez: kaçırma = davet, ceza değil.
- Ton ve görsel kit kuralları tüm hook metinlerine uygulanır; emoji yok, pazarlama dili yok.

---

## 1 · Mood Log — kaynak: Daylio, How We Feel
**Kopyalanan mekanik:** Daylio'nun yazısız, ikon-tabanlı 2-dokunuş logu; How We Feel'in duygu-sözlüğü derinliği.
**Bizim çevirimiz:**
- Giriş 2 dokunuşta biter: duygu ikonu + opsiyonel bağlam çipleri (uyku, sosyal, iş…).
- Katmanlı derinleşme (H1 önerisi): hızlı ikon herkes için; isteyene "duyguyu adlandır" sözlük katmanı açılır — zorunlu değil.
- Kayıt sonrası tek satır şefkatli kapanış; analiz cümlesi yok (analiz Sohbet'in işi).
**Herbaryum bağı:** her mood kaydı = eylem (günün en düşük sürtünmeli kart tetiği).
**Gating:** log free; uzun dönem örüntü grafikleri pro (KS-1=b felsefesi).
**Karar (kilitli):** H1.

## 2 · Journal / Şükran — kaynak: Stoic, Day One, Gratitude
**Kopyalanan mekanik:** Stoic'in sabah niyeti / akşam yansıması ritüeli; Day One'ın "geçen yıl bugün" geri-dönüşü; Gratitude'un şükran listesi.
**Bizim çevirimiz:**
- Serbest giriş her zaman açık; AM/PM ritüel modu opsiyonel çerçeve olarak sunulur (H2 önerisi) — "sabah niyeti" ve "akşan yansıması" prompt'ları bitki/mevsim imgeli, davetkar dilde.
- "Geçen yıl bugün": aynı tarihli eski kayıt varsa nazik bir hatıra kartı gösterilir; hassas içerik işaretliyse gösterilmez (güvenlik filtresi).
- Şükran girişi 3 satırlık mikro-format; ayrı modül değil, journal içinde şablon.
**Herbaryum bağı:** her kayıt = eylem.
**Gating:** yazma free; arşiv arama + "geçen yıl bugün" geçmişi pro adayı.
**Karar (kilitli):** H2.

## 3 · Sohbet (psikoloji chatbotu) — kaynak: Rosebud, Wysa, Headspace Ebb
**Kopyalanan mekanik:** Rosebud'un kayıtlara terapist-tarzı tek takip sorusuyla cevap vermesi + haftalık içgörü raporu + oturumlar-arası hafıza; Wysa'nın yapılandırılmış egzersiz kütüphanesi; Ebb'in "modüle gömülü yardımcı" konumu.
**Bizim çevirimiz:**
- Takip sorusu kuralı: cevap başına en fazla 1 soru; soru yağmuru yasak.
- Hafıza: mevcut mimariyle (log tabloları + D2 RAG) sağlanır — yeni altyapı gerekmez.
- Haftalık içgörü: pazar akşamı üretilen, kullanıcının o haftaki mood/journal örüntülerini yansıtan kısa metin. Teşhis/etiket dili yok; "bu hafta ... teması sık görünüyor" çerçevesi.
- Egzersiz kütüphanesi: nefes/topraklanma/yeniden çerçeveleme gibi 5-8 yapılandırılmış mikro-akış; Sohbet önerir, modüller çalıştırır.
- Kriz yumuşatma ilkesi (kilitli) aynen geçerli.
**Herbaryum bağı:** egzersiz tamamlama = eylem; salt sohbet = eylem değil (enflasyon koruması).
**Gating:** H3.
**Karar (kilitli):** H3 (haftalık içgörü free/pro bölünmesi).

## 4 · Meditasyon & Nefes — kaynak: Calm, Breathwrk, Insight Timer
> **[KAPSAM DIŞI — KD-01]** Meditasyon ve Nefes modülleri v1.0 ve planlanan kapsam dışında; bu bölüm tarihsel benchmark kaydı olarak korunuyor.
**Kopyalanan mekanik:** Calm'ın "Günün Meditasyonu" (her gün 1 taze içerik); Breathwrk'ün kod-tanımlı görsel nefes pattern'leri.
**Bizim çevirimiz:**
- "Günün Sakinliği": her gün öne çıkan 1 seans — günün bitki/gökyüzü temasıyla estetik eşleşir (içerik eşleşmesi sembolik katmanda kalır, iddia yok).
- Nefes: kod-tanımlı pattern'ler (4-7-8, kutu nefesi, uzatılmış nefes verme) + botanik büyüyen-çiçek animasyonu rehberliği. İçerik maliyeti ~sıfır.
- Seans sonu tek satır kapanış; "kaç gün üst üste" sayacı yok (seri baskısı üretmez; süreklilik herbaryumda görünür).
**Herbaryum bağı:** seans tamamlama = eylem.
**Gating:** temel pattern'ler + kısa seanslar free; uzun/temalı seanslar pro.
**Veri ihtiyacı:** meditasyon içerik havuzu (ses/metin) — açık boşluk.

## 5 · Yoga — kaynak: Down Dog, Alo Moves
> **[KAPSAM DIŞI — KD-01]** Yoga modülü v1.0 ve planlanan kapsam dışında; bu bölüm tarihsel benchmark kaydı olarak korunuyor.
**Kopyalanan mekanik:** Down Dog'un konfigürasyon motoru (süre + seviye + odak seç → klipler dizilir); Alo'nun beceri yolculuğu programları.
**Bizim çevirimiz:**
- v1: stok video klip kütüphanesi üzerinde basit konfigürasyon — süre (10/20/30 dk) + seviye + odak (sırt, kalça, sakinleşme) seçimi; motor uygun klip dizisini oynatır.
- ⚠ Teknik belirsizlik (açıkça işaretli): poz-düzeyinde tutarlı (tek eğitmen/tek stil) stok set bulunabilirliği doğrulanmadı — klip granülerliği sağlanamazsa v1 "hazır seans listesi + filtre"ye geriler. Kaynak araştırması ön koşul.
- Beceri yolculuğu (Alo) v2 adayı.
**Herbaryum bağı:** seans tamamlama = eylem.
**Gating:** kısa seanslar free; uzun ve odak-temalı seanslar pro.
**Veri ihtiyacı:** stok klip kaynak araştırması — açık boşluk.

## 6 · Neurogames — kaynak: Lumosity, Elevate, Peak
> **[KAPSAM DIŞI — KD-01]** Neurogames modülü v1.0 ve planlanan kapsam dışında; bu bölüm tarihsel benchmark kaydı olarak korunuyor.
**Kopyalanan mekanik:** Lumosity'nin günlük 3 oyunluk "workout" ritmi; Elevate'in alan-bazlı ilerleme görünümü; Peak'in koç karakteri fikri (bizde ton olarak, ayrı karakter olarak değil).
**Bizim çevirimiz:**
- "Zihin Molası": günde 3 kısa oyunluk set; adaptif zorluk.
- İddia dili yasak (FTC dersi): "hafızanı geliştirir" yok → "zihnine oyunlu bir mola". Skor dili nötr: "bugünkü akışın", karşılaştırma/percentile yok.
- Kod-tanımlı v1 oyun adayları: eşleştirme (hafıza), renk-kelime odak (Stroop benzeri), desen tamamlama. Kesin liste içerik hattında netleşir.
**Herbaryum bağı:** set tamamlama = eylem (3 oyun = 1 eylem).
**Gating:** günlük set free; ekstra oyunlar + ilerleme görünümü pro.
**Veri ihtiyacı:** v1 oyun listesi onayı — içerik sohbetine devredilebilir.

## 7 · Döngü Beslenmesi — kaynak: Flo, Stardust
**Kopyalanan mekanik:** Flo'nun faz-bazlı değişen günlük içeriği; Stardust'ın kozmik estetiği (yalnız estetik — akış birleşmez).
**Bizim çevirimiz:**
- Faz kartı: bulunduğun faza göre günlük beslenme çerçevesi — "bu fazda ... besinlere alan açabilirsin" dili; doz/reçete/kalori yok, beden-nötr.
- Sembolik ayrım (kritik): döngü kartı kanıt-akışıdır; gökyüzü/ay içeriği AYRI kartta yaşar. Aynı kartta "ay + faz" birleşimi yasak.
- v1 veri girişi: manuel döngü kaydı (H6 önerisi); sağlık API'leri v2.
- Hassas bağlam yumuşatması (kilitli ilke) geçerli.
**Herbaryum bağı:** günlük faz kartını okumak eylem DEĞİL; faz check-in'i (tek dokunuş "bugün nasılsın") = eylem.
**Gating:** faz kartı free; faz-beslenme derin rehberi pro.
**Karar (kilitli):** H6.

## 8 · Skincare — kaynak: Yuka, rutin tracker'lar
**Kopyalanan mekanik:** Yuka'nın "tara → anında değerlendirme" dopamini; basit rutin işaretleme.
**Bizim çevirimiz:**
- "Raf Denetimi" v1: kullanıcı ürünün içerik listesini (INCI) yapıştırır → skincare-ingredients.json ile eşleşme → bilgilendirici özet ("şu bileşenler cilt tipinle uyumlu görünüyor / şu bileşen hassasiyet bildirimiyle ilişkilendiriliyor"). Tedavi/teşhis dili yok.
- ⚠ Dürüst kapsam: Yuka'nın gücü dev ürün veritabanı; bizde yok. Barkod tarama v1'de yok — metin-bazlı eşleştirme. Bu sınır kullanıcıya da sakin dille söylenir.
- Rutin: sabah/akşam işaretleme, 2 dokunuş.
**Herbaryum bağı:** rutin işaretleme = eylem; raf denetimi = eylem değil (araç kullanımı).
**Gating:** rutin free; raf denetimi geçmişi + ürün notları pro.

## 9 · Arketip Quiz — kaynak: Dimensional, The Pattern
**Kopyalanan mekanik:** Dimensional'ın paylaşılabilir estetik sonuç kartı; The Pattern'ın "kalıbını tarif etme" dili (tekinsizlik değil, tanınma hissi — bizim tonumuzda).
**Bizim çevirimiz:**
- Sonuç kartı R1.5 şablon hattıyla aynı üretim dilinde (story 9:16 + kare) — sosyal fabrika çift kullanımı.
- Sonuç metni: etiketleme değil davet — "sende ... teması güçlü görünüyor" çerçevesi; kader/kesinlik dili yok.
- 12 aylık rotasyon (kilitli) aylık albüm ritmiyle senkron.
**Herbaryum bağı:** quiz tamamlama = eylem (ayda 1 doğal tavan).
**Gating:** mevcut kilitli free/pro yapısı geçerli.
**Veri ihtiyacı:** item veritabanı — açık boşluk (bilinen).

## 10 · Akış (hedef/alışkanlık) — kaynak: Finch, Fabulous
**Kopyalanan mekanik:** Finch'in nazik oyunlaştırma dili ve görev→somut ödül bağı (pet'i almıyoruz — canlı karşılığımız herbaryum); Fabulous'un "ritüel" çerçevesi.
**Bizim çevirimiz:**
- Görevler "ritüel" dilinde sunulur ("sabah ritüeline 1 adım ekle"); liste-taskmaster hissi yok.
- Görev tamamlama animasyonu botanik mikro-anlar (yaprak düşer, tomurcuk açılır) — Finch'in duygusal geri bildirimi, bizim estetikte.
- Seri sayacı yok; süreklilik herbaryum/albümde görünür (tek çekirdek döngü ilkesi).
**Herbaryum bağı:** görev tamamlama = eylem.
**Gating:** 3 aktif ritüel free; sınırsız + şablon kütüphanesi pro.

## 11 · Ana Sayfa Günlük Kart & Günün Sözü — kaynak: I am, Co-Star
**Kopyalanan mekanik:** I am'in estetik söz kartı; Co-Star'ın "güne tek cümleyle başlama" alışkanlığı.
**Bizim çevirimiz:**
- ana-sayfa-spec v1.1 kilitli — bu bölüm kompozisyonu DEĞİŞTİRMEZ; yalnız "günün sözü" bloğunun davranışını tanımlar: tek kart (H4 önerisi), dokununca paylaşım şablonuna (R1.5 hattı) gider.
- ⚠ Kilit ekranı widget'ı v1'de yok: Expo'da native widget desteği ek native modül/config ister — teknik maliyet doğrulanmadan v2 adayı (emin olmadığım alan, işaretli).
**Herbaryum bağı:** yok (görüntüleme eylem değil).
**Veri ihtiyacı:** günün sözü havuzu — açık boşluk (bilinen).
**Karar (kilitli):** H4.

## 12 · Bildirim Stratejisi (modüller-üstü) — kaynak: Co-Star, Finch
**Kopyalanan mekanik:** Co-Star'ın günü tek hiper-kişisel cümleyle açan push'u; Finch'in şefkatli geri-çağırma dili.
**Bizim çevirimiz:**
- Günlük push: gökyüzü + günün bitkisinden türeyen tek cümle; davetkar, kader dilsiz. Co-Star'ın keskinliği değil, bizim yumuşaklığımız.
- Push envanteri (v1 tavanı: günde en çok 1 + haftada en çok 2 kumbara + kozmik an push'ları): günlük cümle · kumbara daveti (herbaryum-spec §4) · kozmik tadım duyurusu · haftalık içgörü hazır bildirimi.
- Sessiz saat varsayılanı: 21:00–09:00 arası yalnız kullanıcı izniyle.
**Karar (kilitli):** H5 (gönderim saati modeli).

---

## 13 · H-kararları (kilitli — 5 Tem 2026)
- **H1 = b** · Mood girişi: katmanlı — hızlı ikon + opsiyonel duygu-sözlüğü
- **H2 = a** · Journal: serbest giriş + opsiyonel AM/PM ritüel modu
- **H3 = b** · Haftalık içgörü: kısa özet free, derin rapor pro
- **H4 = a** · Günün sözü: tek kart (mini-deste v2 adayı)
- **H5 = b** · Günlük push: kullanıcı seçimli saat, varsayılan sabah
- **H6 = a** · Döngü verisi: manuel kayıt (sağlık API'leri v2)

## 14 · Veri boşlukları (bu spec'in eklediği/teyit ettiği)
- Günün sözü havuzu (bilinen boşluk)
- Arketip quiz item veritabanı (bilinen boşluk)
- Motor tablo + plant card dataset (sipariş tanımlı: herbaryum-spec §11)
- *(Meditasyon içerik havuzu · Yoga stok klip araştırması · Neurogames oyun listesi maddeleri KD-01 ile kapsam dışına çıkarıldı.)*

## EK-B · Senkron bloğu (Claude Code klasörü + ekran spec sohbetine taşı)
```
KARAR SENKRONU (hook sohbeti, 5 Tem 2026):
· hook-sentez-spec.md v1.1 — 12 modülün hook davranış tanımları;
  tab spec'leri yazılırken ilgili bölüme referans verilecek
  (yerleşim kararlarını değiştirmez).
· H-kararları KİLİTLİ: H1=b katmanlı mood girişi · H2=a serbest
  journal + opsiyonel AM/PM ritüel · H3=b içgörü özeti free /
  derin rapor pro · H4=a tek söz kartı · H5=b push saati kullanıcı
  seçimli (varsayılan sabah) · H6=a manuel döngü kaydı (v1)
· Modüller-üstü kural: modül tamamlama eylemleri herbaryum
  döngüsüne bağlanır (herbaryum-spec §3 eylem listesi).
· Hatırlatma: EK-A (herbaryum-spec) hâlâ taşınmadıysa
  bahce-spec'te R1.4 düzeltmesi + Aylık Albüm bölümü bekliyor.
```
