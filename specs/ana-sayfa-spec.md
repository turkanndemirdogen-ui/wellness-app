---
belge: ana-sayfa-spec
surum: v1.2
amac: "Ana Sayfa sekmesi içerik + davranış spec'i. RN fazına yerleşim/durum girdisi; B-üretimleri (bitki kartı seti, söz havuzu, natal şablonlar) buradaki veri kontratlarına oturur."
dil: tr
girdiler: [sifa-bahcesi-veri-kontrati.md, kisisellestirme-katmani.md, module-content-standard.md, contraindications.json, mood.json, reminders.json, cycle-guidance.json]
onaylar: "Kompozisyon B (Günlük Pusula) · baloncuksuz · free/pro (2 kademe) · ara kararlar 1–6 · AS-1 hub-and-spoke — Türkan, 2026-07-05"
acik_kararlar: []
---

# Ana Sayfa — İçerik & Davranış Spec v1.0

## 0. Ekranın rolü

- **Günlük ritüel kapısı:** 60 saniyede "bugünü al (sembolik) + bugünü işaretle (kanıt)".
- **Hub:** her kart ilgili derin deneyime köprüdür; Ana Sayfa'da derinleşme yok. Derinlik Bahçe/Keşif/modül ekranlarında yaşar.
- **İki-akış ayrımı görünür:** sembolik bölge (üst: başlık→hava→bitki) ve kanıt bölgesi (check-in) ayrı görsel bölgelerdir; tek kartta/tek cümlede asla karışmaz.
- Chat baloncuğu **yok** (onaylı); Sohbet erişimi sekmeden.

## 1. Blok dizilimi (yukarıdan aşağı)

| # | Blok | Akış | Free/Pro |
|---|---|---|---|
| B1 | Gün başlığı + ay çipi | sembolik | free |
| B2 | Kozmik hava satırı | sembolik | free genel · pro natal |
| B3 | Günün bitki kartı (hero) | sembolik | free |
| B4 | Check-in şeridi "Bugünün kaydı" | kanıt | free |
| B5 | Günün sözü | sembolik | free genel · pro seçilmiş |
| B6 | Dinamik slot | koşula göre | koşula göre |

**Sıra gerekçesi:** ritüel → eylem → tefekkür kavisi. Check-in çoğu ekranda scroll'suz görünür (alışkanlık döngüsü); söz sakin kapanış; dinamik slot en altta kalabalık etmez.

---

## 2. Blok spec'leri

### B1 · Gün başlığı + ay çipi

- **İçerik:** "5 Temmuz, Pazar" (display serif) + çip: ay fazı glifi + "Ay Başak'ta".
- **Veri:** tarih ← cihaz. `ay_fazi`, `ay_burcu` ← `realtime_transit` (astroapi.ay, günlük cache).
- **Haller:** transit verisi yoksa çip sessizce gizlenir, yalnız tarih kalır — kırık his yok.
- **Kişiselleştirme:** yok (herkese aynı gök).
- **Ton/görsel:** sade ad-durum; tek glif, emoji yağmuru yok. Çip: pudra zemin + erik metin.

### B2 · Kozmik hava satırı

- **Amaç:** günün sembolik teması tek cümlede; Keşif'e köprü.
- **İçerik (taslak ton — Türkçe cila: Türkan):**
  - free: "Gök bugün yavaşlamaya alan açıyor."
  - pro: "Ay bugün haritandaki iç-dünya temasına dokunuyor — kendine dönmek iyi gelebilir."
- **Veri:** `theme_line` ← `derived_ai`. **Tek üretim, iki yüzey:** Bahçe kontratındaki `daily_remedy.theme_line` ile aynı nesne; ayrıca üretilmez.
  - free satır: transit-only, günde 1 kez **global** üretilir (tüm kullanıcılara aynı → maliyet ~0).
  - pro satır: natal+transit, per-user; üretim zamanlaması (cron vs on-demand) Bahçe kontratı açık-soru #3 ile birlikte kararlaştırılır.
- **Şablon bağımlılığı:** pro satır, B-üretim #4 (natal günlük şablonları) üzerine oturur.
- **Haller:** veri yok → satır gizlenir. Pro kullanıcı ama natal yok → free satır gösterilir; kişiselleşme daveti B6 slotundadır.
- **Güvenlik:** davet dili ("alan açabilir"); kesinlik/kader/sağlık iması yok.
- **Tap →** Keşif (günün gökyüzü görünümü).

### B3 · Günün bitki kartı (hero)

- **Amaç:** markanın kalbi; günlük dönüş sebebi.
- **İçerik:** botanik illüstrasyon + bitki adı + gezegen glifi + `tek_satir` (gelenek/sembol çerçevesi). Örnek ton: "Papatya · ☉ — geleneksel olarak sakinlik anlarıyla anılır."
- **Veri:** `daily_remedy.herb_ally` ← `vault_static` seçimi (`dominant_light.gezegen → planet_herb`; `toksik_filtre=aktif`, `app_safe=true`). Günün kartı havuzu daima app_safe'tir; T1–T3 bitkiler Keşif'te uyarı ekseniyle yaşar, günün kartına girmez; T0 hiçbir yüzeyde yok.
- **Alanlar:** `[id, ad, gezegen, glyph, tek_satir, illus_ref]`.
- **Tap →** Bahçe `herb_detail` (aynı nesne, tam hikâye + varsa güvenlik notu + disclaimer).
- **Haller:**
  - Seçim/transit hatası → **stale-cache:** son başarılı kart sessizce gösterilir (etiketsiz).
  - İlk açılış + cache yok → launch setinde tanımlı sabit "açılış bitkisi" kartı (B-üretim #2'de 1 adet işaretlenir).
- **Free/Pro:** günde 1 kart herkese tam; bu blokta pro farkı yok (derinlik Bahçe'de).
- **Güvenlik:** doz/tüketim/hazırlık dili yasak; "tedavi eder / iyileştirir" yok.
- **Görsel:** hero kart; illüstrasyon metin alanını engellemez.

### B4 · Check-in şeridi — "Bugünün kaydı" (kanıt bölgesi)

- **Amaç:** 10 saniyede günlük veri girişi; kanıt akışının ekrandaki tek bölgesi. Bölüm başlıkçığı ("Bugünün kaydı") ile sembolik bölgeden görsel olarak ayrılır.
- **İçerik:**
  - *Mod:* "Bugün nasılsın?" + 6 hızlı duygu çipi + "＋" (tam palet). Çipler `mood.json → emotions[].label_tr`; hızlı-set valence×arousal dört çeyrekten dengeli seçilir (öneri: sakin · neşeli · yorgun · gergin · enerjik · hüzünlü). Kesin küme B-üretimde `quick_set: true` bayrağıyla mood.json'a işlenir (şema ekleme önerisi).
  - *Hatırlatmalar:* "Bugün: 2/4" nazik ilerleme çipi (`reminder_settings` + tamamlama logları; kategori adları `reminders.json → categories[].ad`). Sayı baskısı değil durum bilgisi.
- **Veri:** `mood_logs` (insert) · `reminder_settings` (read).
- **Haller:**
  - Mood loglanmamış → çipler aktif; loglanmış → seçim işaretli + "değiştir".
  - Hiç hatırlatma kurulmamış → yalnız mod satırı + sessiz "hatırlatma kur" bağlantısı (boş hal = eyleme davet).
- **Free/Pro:** tamamı free — loglama gelir kapısı değil veri temelidir; analiz/içgörü pro tarafında (Sohbet/modül B-katmanı).
- **Güvenlik:** yargılayan mikro-metin yok; ceza/telafi çerçevesi yok (reminders framing'i geçerli).
- **Tap →** ilgili modül tam ekranı (Ana Sayfa stack — AS-1).

### B5 · Günün sözü

- **Amaç:** sakin kapanış; kaydedilebilir/paylaşılabilir an.
- **İçerik:** 1–2 satır söz, **atıfsız**. Kart altı mikro-eylem: kaydet ♡ · paylaş.
- **Veri:** `quote_pool` (B-üretim #3) ← `[id, text_tr, theme_tags[], kaynak_tipi(kamu_mali|ozgun)]`. `kaynak_tipi` yalnız iç denetim — ekranda asla gösterilmez. Havuz kuralı: kamu malı veya özgün; şiir/şarkı sözü yok.
- **Seçim mantığı:** free = günün sözü **global** (herkese aynı; "günün" hissi + tek cache). pro = `theme_tags` × günün teması/natal vurgusundan **kişisel seçim** (havuzdan seçimdir, üretim değildir → maliyet ~0).
- **Haller:** havuz boşsa blok gizlenir (zaten launch-blocker).
- **Güvenlik:** sözler tıbbi/teşhis/kader iması taşımaz — havuz üretim kriterine girer.

### B6 · Dinamik slot

- **Amaç:** kalabalık etmeden bağlamsal kanca. İlk eşleşen kural gösterilir:

| Öncelik | Koşul | Kart |
|---|---|---|
| 0 | natal yok **ve** davet son 7 günde sessize alınmadı | "Haritanı oluştur" daveti — kişiselleştirmeyi açar; doğum verisi isteğe bağlı, ayrı açık rızayla (KVKK) |
| 1 | döngü modülü aktif | Döngü fazı kartı: `phases[].ad` + `gun_yaklasik` + 1 satır enerji notu (kilo-nötr) → tap: döngü modülü |
| 2 | ay quiz penceresi açık (ayın ilk 7 günü) ve bu ay yapılmadı | Arketip quiz CTA (çift-akış etiketi quiz tarafında) |
| 3 | — | Bahçe durumu çipi (`garden_state` — kontrat: bahce-spec §3) |

- **Haller:** hiçbir koşul sağlanmaz + `garden_state` yoksa slot render edilmez; ekran 5 blokla tamamdır.
- **Free/Pro:** davet + döngü temel içeriği free (cycle `free_preview_fields` uyumlu); döngü derin önerileri pro.

---

## 3. Haller stratejisi (global)

- **Yükleniyor:** pudra tonlu iskelet, düşük shimmer; blok yükseklikleri sabit → yerleşim zıplamaz.
- **Offline:** son cache sessizce gösterilir. Yalnız tüm sembolik bölge boş kalırsa tek yumuşak satır: "Şu an göğe ulaşamıyoruz — az sonra tekrar dene."
- Hata metinleri teknik jargon içermez; her boş hal bir eyleme davettir.

## 4. Free/Pro matrisi

| Blok | Free | Pro |
|---|---|---|
| B1 | tam | aynı |
| B2 | genel gök satırı | natal-bağlı satır |
| B3 | günün kartı tam | aynı (derinlik Bahçe'de) |
| B4 | tam | aynı (analiz pro'da, başka yüzeyde) |
| B5 | global söz | kişisel seçilmiş söz |
| B6 | temel kartlar | döngü derin içerik |

> Not: Bahçe kontratındaki plus/premium kademeleri bu spec'te "pro"ya katlanmıştır (onaylı). 2-vs-3 kademe kararı RevenueCat adımına not düşüldü.

## 5. Kişiselleştirme merdiveni

- **S0 — natal yok:** ekran tam çalışır (transit + global içerik). Davet B6'da. Hiçbir blok doğum verisi olmadan kırılmaz (progressive profiling ilkesi).
- **S1 — natal var, free:** görünüm S0 ile aynı; natal içgörü pro çizgisidir. Fark: pro'ya geçişte kişiselleşme anında açılır.
- **S2 — pro:** B2 natal satırı + B5 kişisel seçim aktif.

## 6. Navigasyon haritası

Sekme yapısı kilitli (Ana Sayfa · Keşif · Bahçe · Sohbet). Ana Sayfa çıkış köprüleri:
B2 → Keşif · B3 → Bahçe (herb_detail) · B4 → modül ekranları (**AS-1**) · B5 → kaydet/paylaş · B6 → koşula göre hedef.

**AS-1 (KARAR — hub-and-spoke, 2026-07-05):** Modül tam ekranları (mood, journal, reminders, döngü, skincare, Akış) Ana Sayfa'dan açılan stack alt-ekranlardır. Sekmeler saf tematik kalır; bildirimler ilgili modüle doğrudan deep-link verir (yol kısaltma). Kanıt modülleri sembolik sekmelere taşınmaz — iki-akış ayrımı navigasyonda da korunur.

## 7. Veri hazırlık & launch-blocker

| Durum | Öğe | Etkilenen blok |
|---|---|---|
| **BLOKER** | Bitki kartı seti (B-üretim #2) | B3 |
| **BLOKER** | Söz havuzu (B-üretim #3) | B5 |
| Aşamalı | Natal günlük şablonları (B-üretim #4) | B2-pro |
| Aşamalı | Motor tablo (B-üretim #1) — `planet_herb` seçiminin arka verisi | B3 seçim mantığı |
| Servis | `astro_context_daily` / transit cache (Claude Code, B fazı) | B1, B2, B3 (stale-cache ile ayakta kalır) |
| Hazır ✓ | `garden_state` kontratı (bahce-spec §3) | B6-öncelik 3 |

## 8. Maliyet & cache notları

- Günde 1 kez **global** üretim/seçim: free theme_line · günün kartı seçimi · günün sözü. Kullanıcı sayısından bağımsız sabit maliyet.
- Per-user maliyet yalnız **pro theme_line** (zamanlama kararı Bahçe kontratı #3 ile ortak).
- `realtime_transit`: günlük snapshot yeterli; Ana Sayfa saatlik tazelik istemez.

## 9. Güvenlik/ton kontrol listesi (ekran düzeyi)

- [ ] Doz/tüketim/hazırlık dili yok (B3, B5)
- [ ] Teşhis/hastalık adı yok; kader dili yok (B2, B5)
- [ ] Sayısal baskı / ceza-telafi çerçevesi yok (B4)
- [ ] Kanıt ve sembolik tek cümlede karışmıyor; bölgeler görsel ayrık
- [ ] Kaynak adı/atıf hiçbir yüzeyde yok (B5 dahil)
- [ ] Disclaimer yerleşimi: Ana Sayfa kompaktlarında blok-altı disclaimer **yok** (kompaktlar iddiasız); zorunlu disclaimer detay ekranlarında (Bahçe/Keşif) yaşar — ekran kalabalığı önlenir. *(Türkan onayına tabi ara karar.)*

## 10. Kabul kriterleri (RN fazı)

1. S0 kullanıcı (natal yok, log yok, hatırlatma yok) hiçbir boş kart görmez; 5 blok anlamlı doludur.
2. Uçak modunda açılış: dünkü kart + söz görünür, çökme yok.
3. Mood log en fazla 2 dokunuşta tamamlanır.
4. Sembolik/kanıt bölge ayrımı görsel olarak fark edilir (başlıkçık + boşluk).
5. Pro anahtarı (test) açıldığında B2/B5 anında kişiselleşir; yerleşim zıplamaz.
6. Tüm görünür metin Türkçe; `names.en/la` hiçbir yerde ekranda değil.

## 11. Açık kararlar

- AS-1 — ✅ hub-and-spoke olarak kilitlendi (bkz. §6)
- RevenueCat 2-vs-3 kademe — RC adımında
- Pro theme_line üretim zamanlaması — Bahçe kontratı açık-soru #3 ile birlikte
