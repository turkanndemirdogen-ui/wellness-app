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
