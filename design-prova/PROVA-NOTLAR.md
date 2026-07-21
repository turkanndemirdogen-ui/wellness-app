# PROVA NOTLARI — Tasarım Provası (Sprint 2.3 "Görsel Kimlik" · Adım 0)

> **Superseded by docs/design (15 > 00-16) — 2026-07-21 — tarihsel referans.**
> Prova süreci ve stil kararları arşiv statüsündedir; aktif tasarım otoritesi `docs/design/` paketidir. Telif/lisans kayıtları (§ kaynaklar) tarihsel kayıt olarak geçerliliğini korur.

**Tarih:** 2026-07-19 · **Kapsam:** yalnız `design-prova/` (mobile koduna dokunulmadı)

## 0 · STİL PİVOTU (ürün sahibi kararı, 2026-07-19 — 1. revizyon)

- **Duotone/erik işlemesi REDDEDİLDİ** ve provadan kaldırıldı (KS-1 kart + ana
  ekran hero). Yeni stil çekirdeği: **yumuşak doğal-renkli vintage botanik
  plaka** — suluboya hissi, krem zemin, bol boşluk.
- Tarama artık doğal renkleriyle kullanılır; yalnız eskimiş kâğıt tonu CSS ile
  pudra-kreme çekilir (`mix-blend-mode:multiply` + `brightness(1.07)
  saturate(.94)`) ve alt kenar yumuşak maskeyle karta erir. Dosyaya piksel
  işlenmedi.
- **`illustrasyon-uretim-spec.md` stil çekirdeği (pudra-duotone yönelimi)
  prova onayından sonra revize edilecek** — spec'e şimdi dokunulmadı.
- **Papatya glifi KARARI:** ☽ (Ay) + pudra mavi zemin (`#C9D8E4`, ADR §12
  "Ay→pudra mavi" eşlemesiyle tutarlı). **Çift atıf notu:** ana-sayfa-spec'in
  B3 örneği "Papatya · ☉" yazar; kanonik kart metni ve bu karar Ay'ı esas
  alır → spec örneğinin Görsel Kimlik kilidinde ☽ ile güncellenmesi gerekir
  (spec kilitli olduğu için değişiklik ürün sahibi onayıyla ayrı iş).

## 1 · Görsel kaynaklar ve lisanslar (→ launch telif dosyasına girecek)

### Köhler botanik gravürü (KS-1 kart + cila karşılaştırması)
- **Eser:** *Matricaria recutita* (= *Matricaria chamomilla*, papatya sinonimi), Köhler's Medizinal-Pflanzen, plaka 091
- **Sanatçı:** Franz Eugen Köhler (Walther Müller çizimi), 1897
- **Kaynak sayfa:** https://commons.wikimedia.org/wiki/File:Matricaria_recutita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-091.jpg
- **Dosya URL:** https://upload.wikimedia.org/wikipedia/commons/c/c7/Matricaria_recutita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-091.jpg
- **Lisans:** Public domain (PD-old; Commons API `extmetadata.LicenseShortName = "Public domain"`, 2026-07-19'da teyit edildi)
- **Yerel kopyalar:** `assets/kohler-matricaria.jpg` (orijinal, 1767×2341, DEĞİŞTİRİLMEDİ) ·
  `assets/kohler-detay-ham.png` (512×512 kırpım, orijinal koordinat x=950 y=40) ·
  `assets/kohler-detay-esrgan.png` (4× upscale)
- Duotone işleme **çalışma anında SVG filtresiyle** yapılır (index.html `#duotone`); dosyalara piksel işlenmedi.

### Health Icons (hazır ikon şeridi + hibrit aksiyonlar)
- **Set:** Health Icons — https://healthicons.org · repo: https://github.com/resolvetosavelives/healthicons
- **Lisans:** CC0 1.0 (public domain) — MIT setleri (Feather/Lucide) "yalnız public-domain" kuralı gereği KULLANILMADI
- **İndirilen 8 outline SVG:** heart · magnifying-glass · referral · info · ui-settings · ui-user_profile · calendar · star-medium → `assets/icons/`

### Google Fonts (tek CDN istisnası — kullanıcı onaylı)
- Fraunces · Playfair Display · Caveat · Lora — hepsi SIL Open Font License (OFL); `<link>` ile yüklenir, repoya font dosyası girmedi. Seçilen font uygulamaya alınırken OFL dosyaları Expo varlığı olarak paketlenecek (ayrı iş).

## 2b · AI stil testi (SD1.5, lokal)

- **Donanım:** NVIDIA GTX 1660 Ti Max-Q, 6 GB VRAM → SD1.5 uygun, SDXL bu
  kartta pratik değil (VRAM sınırı) — SD1.5 seçildi.
- **Araç:** ComfyUI portable (v0.28.0, Windows/NVIDIA cu126) — scratchpad'e
  kuruldu, **repoya girmedi**.
- **Model:** `v1-5-pruned-emaonly-fp16.safetensors` (Comfy-Org/
  stable-diffusion-v1-5-archive aynası; orijinal: RunwayML SD v1.5).
- **TİCARİ LİSANS (kilitli kural — kayıt):** Stable Diffusion v1.5 lisansı
  **CreativeML OpenRAIL-M** — ticari kullanım ve üretilen görsellerin ticari
  kullanımı serbesttir; lisansın kullanım kısıtları (Attachment A, zararlı
  kullanım yasakları) geçerlidir, model dağıtımında lisans metni eşlik etmelidir.
  Uygulama içi NİHAİ üretim hattı kurulurken model+lisans bu kayıtla teyit
  edilecek (illustrasyon-uretim-spec kural 3).
- Üretim ayarları ve değerlendirme: EK-A (dosya sonu).
- **Bulut alternatifi (yalnız donanım yetmezse gerekliydi — gerekmedi):**
  referans olarak, SDXL istenirse bulut GPU (ör. saatlik kiralık L4/T4,
  ~0,2-0,6 $/sa) veya Stability API (~0,04 $/görsel bandı) seçenekleri var.

## 2 · Cila (upscale) hattı

- **Real-ESRGAN:** portable `realesrgan-ncnn-vulkan` (20220424 Windows sürümü, xinntao/Real-ESRGAN release) — Python'suz, scratchpad'e kuruldu, **repoya girmedi**.
- Model: `realesrgan-x4plus`, 4× · GPU: NVIDIA GTX 1660 Ti (Vulkan) · sorunsuz çalıştı.
- **Magnific:** slot boş — API anahtarı ürün sahibinden gelirse aynı `kohler-detay-ham.png` işlenecek.
- Karşılaştırma penceresi iki görüntüyü de 680px genişlikte gösterir (ham: tarayıcı büyütmesi, ESRGAN: kendi pikselleri) — adil kıyas için görünür yakınlık eşit.

## 3 · Kararlar / açık sorular (ürün sahibine)

1. **AÇIK SORU — Papatya glifi:** ana-sayfa-spec örneği "Papatya · ☉" (Güneş) der ve prova buna uyar; ancak kanonik kart metni (`bitki-kartlari-master.json`) papatyayı **Ay** ile anlatır ("Ay'ın yumuşak nefesi…", story_narrative de Ay der). ADR §12 renk eşlemesinde papatya sınıfı belirtilmemiş. Glif/gezegen eşlemesi Görsel Kimlik kilidinde netleşmeli — prova karara dokunmaz, yalnız raporlar (Governance §7).
2. **Duotone değerleri:** koyu→erik `#3A2E37`, açık→kavun içi `#F6D9C2` (feComponentTransfer tabloları index.html'de). Aday erik `#4A3B52` ile ikinci bir deneme istenirse tablo değerleri değiştirilebilir.
3. **Health Icons stil notu:** set dolgu-tabanlı outline'dır (gerçek stroke değil); Design §16.1 "tek stroke family" hedefiyle hibrit seçilirse stroke uyumu ayrıca değerlendirilmeli. Özel çizimler 1.5px stroke, rounded terminals.
4. **Kontrast:** oranlar sayfada canlı hesaplanır; pudra zeminlerde erik metin AA'yı rahat geçer. Accent (#C98B99) zemini üzerinde erik ≈4.5:1 — AA sınırında; accent zemin + küçük metin birleşimi Faz 6'da dikkatle sınırlanmalı.
5. Fontlar yalnız Display adaylarıdır; UI/sans ailesi ayrı karar (Design §12 iki-aile kuralı).

## 3b · PROVA v2 (tasarım direktörü turu, 2026-07-19 gece)

- Sayfa **iki bitmiş ürün ekranına** yeniden kuruldu; ekran içi teknik
  açıklama/rozet/hex kaldırıldı → hepsi "Ek: kayıtlar" bölümünde.
- **Yön A "Botanik Atlas":** kartsız yüzen plaka (radyal maske), "levha 09 ·
  matricaria chamomilla" numaralama ritüeli, ince çizgi ayraçlar, söz sol
  çizgili kenar notu. **Yön B "Pudra Bahçesi":** pudra "bahçe yatakları"
  (gül/lila açık zeminler), plaka kemerli nişte (bahçe kapısı motifi),
  bloklar arasında elle çizilmiş dal ayracı.
- **Tipografi kilidi uygulandı:** Fraunces display (tarih 29, kart 21) ·
  Lora gövde 16/1.6 · Caveat yalnız söz (21) · Playfair ekranlardan çıktı.
- Öz-eleştiri turu: plaka pencereleri disseke fragmanları gösteriyordu →
  dört pencerede merkeze zoom; Chanel kuralı gereği Keşif kartındaki
  "levha" tekrarı çıkarıldı (ritüel yalnız ana sayfada).

## 3c · PROVA v3 — "Botanik Levha" dergi dili (2026-07-19 gece, tek yön)

- İki yön tek dile yakınsadı: **krem atlas tabanı + pudra dokunuş**, "yüz
  yıllık botanik dergisinin bugüne çevrilmişi — sinematik ama aydınlık".
- **Tipografi:** manşet Fraunces 38/590 oldstyle rakam · Latince tür adı
  italik 14 (*Matricaria chamomilla*) · Lora 16/1.65 · Caveat 22 kutusuz
  pull-quote (asılı Fraunces italik tırnak) · eyebrow serbest bırakıldı
  (yalnız dergi kicker'ı: 10.5px/.19em accent — teknik etiket yasağı sürüyor).
- **Derinlik (koyu blok olmadan):** full-bleed hero → krem scrim · %6 dev
  botanik silüet (multiply) · feTurbulence kâğıt greni %2.8 · çift katman
  gölge (0 2 6 %5 + 0 20 44 %10) · sol üst köşeden radyal altın yıkama ·
  Keşif kartından taşan dal (breakout, radyal maske).
- **İmza motif:** sağ üstte "Levha № 07" folio (Fraunces italik).
- **"Program avı":** pill buton yok — ♡ Kaydet · Paylaş hairline üstünde
  metin-aksiyon; ay çipi yerine tek satır "☽ Ay Boğa'da · ilk dördün".
- Öz-eleştiri turu ("dergi mi arayüz mü"): eyebrow/manşet scrim üstünde
  eziliyordu → scrim güçlendirildi + krem halo; folio kayboldu → halo;
  taşan dal yama gibiydi → yalnız tomurcuklu ince sap bölgesine alınıp
  döndürüldü. Kalan tek arayüz öğesi bilinçli: sessiz tab bar.

## 3d · ESTETİK ANAYASA 1.0 + PROVA v4 (2026-07-20)

- **Moodboard analizi** (27 görsel) → `estetik-anayasa.md` **Sürüm 1.0 —
  KANONİK** (ürün sahibi onayı 2026-07-20). Üç sicil: suluboya (varsayılan) ·
  ışıltı (özel anlar) · gece (koyu-sinematik, yalnız görsel katman — galeri
  modeli). §6 kararları: fantezi=yalnız ışık referansı · gökkuşağı elendi
  (prizmatik kırılım serbest, yay/renk şeridi yasak) · gece zemini
  patlıcan-lacivert (saf siyah+neon yok) · script başlık yok. Çakışma
  önceliği: güvenlik/bağlam > ay fazı > transit > saat > bitki gezegeni.
- **v4 sicil önizlemesi:** aynı Ana Sayfa üç sicilde; blok iskeleti sabit,
  yalnız görsel katman + mikro-vurgu değişir. Işıltı: prizmatik overlay +
  3 bokeh + altın fleuron + kutlama yatağı ("Bugünün izi düştü"). Gece:
  patlıcan-lacivert (#2E2640→#3A3052) + antika altın (#C9A96A) SVG panel
  (dolunay + yıldız + mücevher tomurcuklu dal) — krom krem. KS-1 kartı
  suluboya. **Ay glifi nefesi:** scale 1→1.02 / 6sn ease-in-out / ekran
  başına tek öğe / prefers-reduced-motion'da statik.
- Öz-eleştiri turu ("üç ruh mu, üç uygulama mı?"): iskelet üçünde birebir —
  aynı uygulama okunuyor; kusur ayıklama: silüet katmanının sert kâğıt
  kenarı radyal maskeyle organikleştirildi.

## EK-A · AI üretim kaydı (2026-07-19)

- **Zincir:** ComfyUI 0.28.0 portable (headless API) · SD1.5
  `v1-5-pruned-emaonly-fp16` · dpmpp_2m + karras · 28 adım · CFG 7 ·
  512×640 · seed'ler: 20260719 / 907 / 5268064 · GTX 1660 Ti (fp16 sorunsuz).
- **Prompt:** "vintage botanical illustration plate of chamomile Matricaria
  chamomilla, soft natural colors, delicate watercolor wash, cream paper
  background, fine ink linework, generous empty space, 19th century
  scientific botanical plate, white daisy flowers with yellow dome centers,
  feathery fine leaves, elegant sparse composition" · Negatif: "photo,
  photorealistic, 3d render, frame, border, text, watermark, signature,
  dark, oversaturated, cartoon, anime, blurry".
- **Stil değerlendirmesi:** 3/3 hedefi tutuyor (krem kâğıt, suluboya his,
  bol boşluk). **Botanik doğruluk:** #1 ve #3 tüysü yapraklar doğru; #2'nin
  yaprakları fazla geniş/dişli (papatya değil); kapitulum kubbesi üçünde de
  tam konik değil; #3 altta sahte el yazısı var. Nihai üretim hattında tür
  doğruluğu kontrolü şart (illustrasyon-uretim-spec kural 2 teyit edildi).
- Üretim araçları scratchpad'de; repoya YALNIZ 3 çıktı PNG girdi.

## 4 · Telefondan bakmak için

```
npx http-server design-prova -p 8090
```
Sonra telefonda (aynı Wi-Fi): `http://<bilgisayar-LAN-IP>:8090` (IP: `ipconfig` → IPv4). Google Fonts için telefonun internete de çıkabilmesi gerekir; fontlar yüklenmezse sayfa sistem serif'iyle düşer (içerik kaybolmaz).
