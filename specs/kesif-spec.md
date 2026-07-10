---
belge: kesif-spec
surum: v1.1
amac: "Keşif sekmesi içerik + davranış spec'i. Motor tablonun kullanıcı yüzeyi; RN fazına yerleşim/durum girdisi. B-üretim #1 (motor tablo) ve #2 (bitki kartı seti) buradaki kontratlara oturur."
dil: tr
girdiler: [ana-sayfa-spec.md, sifa-bahcesi-veri-kontrati.md, rag-base-spec.md (repo), contraindications.json, module-content-standard.md]
onaylar: "Kompozisyon C (Gök-rehberli) · melothesia (a) · ara kararlar 1–8 · KS-1 = b (motor free, derinlik pro) — Türkan, 2026-07-05"
acik_kararlar: []
---

# Keşif — İçerik & Davranış Spec v1.0

## 0. Ekranın rolü

- **Motor tablonun vitrini:** bitki ↔ gezegen/burç ↔ sembolik beden bölgesi ↔ tat/enerjetik ilişkilerinin filtrelenebilir keşif alanı. Tamamen **sembolik rejim** (`tekil_gelenek` / `anlati_only`).
- **Gök-rehberli giriş:** ekran boş bir araçla değil, bugünün gökyüzüyle karşılar; hazır çipler filtreyi tek dokunuşla doldurur (boş-başlangıç sorunu çözülür).
- Ana Sayfa B2 (kozmik hava satırı) bu sekmeye iner. Bahçe'deki "keşfet" karosu da buraya deep-link verir — çift keşif yapısı yok.
- "Semptom" kelimesi arayüzde **kullanılmaz**; eksen adı "Beden bölgesi"dir ve sembolik/geleneksel çerçevede sunulur.

## 1. Blok dizilimi ve iki mod

Header: sekme başlığı + arama ikonu (K6) + kaydedilenler ♡ (K7)

| # | Blok | İçerik |
|---|---|---|
| K1 | Bugünün gökyüzü şeridi | aktif gezegen-burç konumları + ay fazı |
| K2 | Hazır keşif çipleri | transitten türetilen tek-dokunuş filtreler |
| K3 | Filtre çubuğu (katlanır) | 4 eksen paneli |
| K4 | Sonuç ızgarası | bitki kartları (yalnız sonuç modunda) |
| K5 | Koleksiyon rafı | küratörlü temalar (yalnız keşif modunda) |

**İki mod:**
- *Keşif modu (varsayılan):* K1 + K2 + K3(kapalı) + K5. Izgara yok, raf ekranın gövdesi.
- *Sonuç modu:* çip/filtre seçilince → K1 + aktif filtre özeti + K4. "Temizle" → keşif moduna dönüş.

## 2. Blok spec'leri

### K1 · Bugünün gökyüzü şeridi

- **İçerik:** yatay kaydırmalı çipler — ay fazı glifi + "Ay Başak'ta" + gezegen-burç konumları. v1 kapsamı gezegen-burç konumlarıdır; transit-transit açılar v1 dışı (karmaşıklık/değer oranı düşük; natal açılar pro katmanda, aşağıda).
- **Veri:** `realtime_transit` günlük snapshot (Ana Sayfa ile ortak cache).
- **Pro katmanı — "Haritanda bugün":** şeridin altında ayrı satır; `natal_transit_hits` (transit gezegen × açı × natal hedef — rag-base üçlü anahtarıyla aynı hesap) çip olarak listelenir; çipe dokunuş ilgili bitki kümesini rozetli açar. Hesap `derived_ai` (günlük per-pro-user veya on-demand; zamanlama kararı pro theme_line ile ortak).
- **Haller:** transit verisi yok → K1+K2 gizlenir, K5 rafı öne geçer (onaylı fallback). Pro ama natal yok → satır yerine tek sakin davet cümlesi.

### K2 · Hazır keşif çipleri

- **İçerik:** 4–6 çip; her çip **tek eksenli ön-dolum** (karışık eksen çipi yok — kesişim boşluğu ve kafa karışıklığı riski).
- **Türetme kuralları (kural tablosu, B-üretim kalemi):**
  1. Ay'ın burcu → burç çipi ("Başak bitkileri")
  2. Günün baskın gezegeni (`dominant_light` — Bahçe kontratıyla ortak hesap) → gezegen çipi
  3. Mevsim → tat/enerjetik çipi (mevsim→enerjetik mini eşleme tablosu, B-üretim kalemi)
  4. (yer kalırsa) ay fazına bağlı tema çipi
- **Veri kontratı:** `chip = {label_tr, eksen, deger, kaynak_kural_id}` — kural tablosu ~10 satır, motor tablo değer sözlüğüne bağlı.
- **Haller:** kural sonuçsuz kalırsa çip sayısı düşer; minimum 2 çipin altına inerse sıra gizlenir.

### K3 · Filtre çubuğu (katlanır panel)

- **Eksenler:** gezegen · burç · beden bölgesi · tat/enerjetik. Panel başlığı altına mikro-not: "geleneksel eşleşmeler".
- **Değerler:** motor tablo değer sözlüğünden gelir (`vault_static` — hardcode yok; sözlük B-üretim #1'in parçası). Beden bölgesi değerleri `melothesia` bölge listesinden **metin çip** olarak (harita Bahçe'de — onaylı karar).
- **Mantık:** eksen içi tek seçim; eksenler arası kesişim (VE). 
- **Boş kesişim:** çıplak "sonuç yok" asla gösterilmez → gevşetme önerisi: "Beden bölgesini kaldırırsan 12 bitki var" (en az sonuç kaybettiren ekseni öner).

### K4 · Sonuç ızgarası

- **Kart (kompakt):** küçük illüstrasyon + ad + gezegen glifi + `tek_satir` + **uyarı çipi** (bitkinin contraindications kaydı T1/T2/T3 ise; çip etiketi kayıttaki Türkçe gerekçeden türetilir, spec sabit metin dayatmaz). T0 hiçbir sorguda dönmez (kaynak filtre `app_safe` + T0 dışlaması sorgu katmanında).
- **Pro rozeti:** `natal_transit_hits` ile eşleşen kartlarda "haritanda öne çıkıyor" rozeti + sıralamada öncelik. Free'de rozet yok, sıralama nötr (geleneksel güç/alfabetik — motor tablo sözlüğüyle netleşir).
- **Tap →** `herb_detail` — **tek paylaşılan detay ekranı** (Bahçe kontratındaki C bloğu ile aynı komponent; hangi sekmeden açılırsa o stack'e push edilir; çift üretim yok). Zorunlu disclaimer detayda yaşar.
- **Haller:** yükleniyor iskelet ızgara; sorgu hatası → son başarılı sonuç + yumuşak satır.

### K5 · Koleksiyon rafı

- **İçerik:** 8–12 küratörlü tema kartı: `{id, baslik_tr, alt_satir, kapak_illus, icerik: filter_prefill | el_listesi}`. Taslak ton örnekleri (Türkçe cila: Türkan): "Ay Bahçesi" · "Venüs'ün Dokunuşu" · "Mevsimin Rafı" (dinamik: mevsimle döner) · "Kadim Yatıştırıcılar".
- **Veri:** koleksiyon seti — B-üretim yeni kalemi (motor tablodan otomatik taban + el dokunuşu).
- **Haller:** koleksiyon verisi yoksa raf gizlenir; transit de yoksa ekran arama+boş-hal davetine düşer (yalnız veri-öncesi geliştirme durumunda görülür; launch'ta bloker zaten).

### K6 · Arama

- Bitki adı + eksen değerlerinde arar; `names.tr` görünür, `en/la` yalnız iç eşleştirme aliası.
- Boş sonuç: yargısız tek satır + o anki gökten 2 öneri çipi (eyleme davet).

### K7 · Kaydedilenler

- Header'da ♡ ikonu (ekranda ayrı blok değil — az öğe ilkesi). Tek ekran, iki sekme: Bitkiler · Sözler (Ana Sayfa B5 kaydetmeleri buraya düşer).
- **Veri:** `user_saves {tip: bitki|soz, ref_id, tarih}`. Free'de sınırsız (tutundurma değeri; gelir kapısı değil).

## 3. Haller stratejisi (global)

- Yükleniyor: pudra iskelet; şerit/çip yükseklikleri sabit.
- Offline: transit + son sonuçlar cache'ten; garanti çalışan bölüm Kaydedilenler (yerel). Sorgular Supabase gerektirir — kontrat bunu dürüstçe kabul eder, RN fazı yerel vault cache'i ayrıca değerlendirebilir (açık not, karar değil).
- Ekran sonunda (raf altı, statik) tek satır hatırlatma: "Buradaki eşleşmeler geleneksel ve semboliktir; tıbbi tavsiye yerine geçmez." — hassas alan kuralının ekran-düzeyi uygulaması; kompakt kartlarda tekrar edilmez, detayda tam disclaimer.

## 4. Free/Pro matrisi *(KS-1 = b, onaylı)*

| Yüzey | Free | Pro |
|---|---|---|
| K1 şerit | tam | + "Haritanda bugün" satırı |
| K2 çipler | tam | + natal-hit çipleri |
| K3 filtre | **tam** | aynı |
| K4 sonuçlar | tam liste, nötr sıralama | + rozet + kişisel sıralama |
| K5 raf | tam | aynı |
| herb_detail | Bahçe kontratı gating'i (hikâye free · kanıt köprüsü + tam beden notu pro) | tam |
| K7 kaydet | sınırsız | aynı |

## 5. Kişiselleştirme merdiveni

- **S0/S1:** genel gök + tam filtre; kişisel hiçbir iddia yok.
- **S2 (pro):** natal-hit satırı, rozetler, kişisel sıralama. Natal yoksa pro'da bile genel görünüm + davet (Ana Sayfa slot'uyla tutarlı).

## 6. Navigasyon haritası

Giriş: Ana Sayfa B2 · Bahçe "keşfet" karosu (deep-link) · sekme.
Çıkış: K4 kart → paylaşılan `herb_detail` · K7 → kaydedilenler ekranı · K1 pro çip → rozetli sonuç modu.

## 7. Veri hazırlık & launch-blocker

| Durum | Öğe | Etkilenen |
|---|---|---|
| **BLOKER** | Motor tablo + eksen değer sözlüğü (B-üretim #1) | K2, K3, K4 |
| **BLOKER** | Bitki kartı seti (B-üretim #2) | K4, K5 |
| Yeni kalem | Çip türetme kural tablosu (~10 kural) | K2 |
| Yeni kalem | Mevsim→enerjetik mini eşleme | K2 |
| Yeni kalem | Koleksiyon seti (8–12) | K5 |
| Servis | `natal_transit_hits` hesabı (Claude Code, B fazı) | K1-pro, K4-rozet |
| Ortak | `realtime_transit` günlük snapshot | K1, K2 |

## 8. Maliyet & cache

- K2 çip seti günde 1 kez **global** üretilir (kural tablosu = hesap, LLM üretimi değil → maliyet ~0).
- Per-user maliyet yalnız `natal_transit_hits` (pro); zamanlama kararı pro theme_line ile ortak dosyada çözülür.
- Koleksiyonlar statik; filtre sorguları Supabase ilişkisel sorgu (vektör/LLM gerektirmez).

## 9. Güvenlik/ton kontrol listesi

- [ ] "Semptom" kelimesi hiçbir yüzeyde yok; eksen "Beden bölgesi" + "geleneksel eşleşmeler" mikro-notu
- [ ] T1–T3 uyarı çipi kompakt kartta daima görünür; T0 sorgu düzeyinde dışlanır
- [ ] Teşhis/tedavi/doz/tüketim dili yok; kader dili yok
- [ ] Kaynak adı hiçbir yüzeyde yok
- [ ] Ekran-sonu tek statik hatırlatma satırı var; tam disclaimer detayda
- [ ] Pro rozet metni davet dilinde ("öne çıkıyor"), buyurgan değil

## 10. Kabul kriterleri (RN fazı)

1. Transit verisi yokken ekran raf + arama ile tam işlevsel (çökme/boşluk yok).
2. Çip → ön-dolu filtre → sonuç: en fazla 2 dokunuş.
3. Boş kesişim hiçbir zaman çıplak "sonuç yok" göstermez; gevşetme önerisi sunar.
4. T1–T3 kartlarında uyarı çipi hiçbir görünümde kaybolmaz.
5. Pro rozet katmanı açıldığında yerleşim zıplamaz.
6. Tüm görünür metin Türkçe; `en/la` ekranda yok; kaynak adı yok.

## 11. Açık kararlar

- KS-1 — ✅ b olarak kilitlendi: motor free, derinlik pro (§4)
- Pro hesapların zamanlaması (cron vs on-demand) — Bahçe kontratı açık-soru #3 ile ortak
- Offline yerel vault cache — RN fazı değerlendirmesi (karar değil, not)
