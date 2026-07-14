# PRODUCT DEVELOPMENT ROADMAP — v1

**Belge türü:** Uygulama geliştirme yol haritası (tek uygulama planı)
**Sürüm:** 1.0 · **Tarih:** 2026-07-14 · **Taban:** `v0.1.0-foundation` (`aa3eb72`)
**Durum:** AKTİF — bu belge, bu noktadan itibaren geliştirme sıralamasının tek kaynağıdır.

## Yetki sınırı

Bu belge **sıralama ve kapsam planıdır**; karar otoritesi değildir. Teknik davranış `docs/architecture/`, tasarım `docs/design/`, kullanıcı dili `docs/editorial/`, güvenlik `docs/safety/`, sahiplik `docs/governance/` belgelerine tabidir (Governance §2). Çelişki durumunda kanonik belge kazanır ve bu roadmap güncellenir.

**Değişmezler (tüm fazlar için geçerli):**
- 4 kök sekme kilitli: Ana Sayfa · Sohbet · Keşif · Bahçe (Design §6; sekme sırası: Ana Sayfa · Keşif · Bahçe · Sohbet — Arch §3 revizyonu 2026-07-10). Beşinci sekme yok.
- KD-01: Nefes/Yoga/Meditasyon/Neurogames kapsam dışı; hiçbir fazda geri gelmez. Nefes göndermeleri yalnız metaforik/gözlemsel kalır.
- Tanı/tedavi/doz dili yasak; disclaimer'lar korunur (Safety).
- Kullanıcıya görünen tüm metin Türkçe ve Editorial spec'e uygun; kaynak/yazar adı kullanıcıya gösterilmez.
- Free/Pro = sunum katmanı; veri tek (Arch §4.3). Doğum verisi izole `birth_data` (KVKK, Arch D1.2).
- İçerik akışı: `content/*.json` → `seed:generate` → `db:upsert` → `db:check`; uygulama içeriği Supabase'den okur.

---

## Phase 1 — React Application Shell

**Goal:** `mobile/` Expo uygulamasını, tüm sonraki fazların üzerine kurulacağı üretim-kalitesinde iskelete dönüştürmek: navigasyon, tasarım token'ları, tema, state ve Supabase istemci katmanı.

**Features:**
- 4 sekmeli kök navigasyon (expo-router; mevcut `src/app/` ekran dosyaları üzerine) + Level 1-3 stack davranışı (Design §8-9).
- Design token altyapısı: primitive → semantic → component → runtime katmanları (`src/design-system/tokens`), pudra palet, tipografi rolleri (Design PART IV, X).
- Foundation primitives + çekirdek bileşen başlangıcı: Surface, Stack, Text, Icon, Button, Card, EmptyState, Skeleton (Design Appendix A1-A2'nin ilk dilimi).
- Tema sağlayıcı: light-first adaptive ambient (tam dark mode YOK — LOCKED), reduced-motion/low-power fallback kancaları.
- Supabase istemci + env yapılandırması (mevcut `src/lib/supabase.ts` üzerine), hata/offline state iskeleti.

**Dependencies:** `v0.1.0-foundation` tabanı; Design master (token değerleri); Expo v57 dokümanları (mobile/AGENTS.md kuralı).

**Database impact:** Yok (yalnız mevcut anon-key okuma bağlantısının doğrulanması).

**React screens:** 4 sekme kabuğu (`index`, `kesif`, `bahce`, `sohbet`) + her birinde tasarlanmış empty state; global error/offline state.

**Acceptance Criteria:**
1. Dört sekme gerçek cihazda 60 fps hedefiyle geziliyor; back/stack davranışı Design §9'a uygun.
2. Hiçbir bileşende hardcoded renk/spacing yok (token gate); Naked UI testi kabuk ekranlarda geçiyor.
3. `npm run lint` + `tsc --noEmit` temiz; compact/standard/large genişlik sınıflarında düzen bozulmuyor.
4. Supabase bağlantısı yapılandırılmadığında uygulama çökmez, tasarlanmış hata state'i gösterir.

**Definition of Done:** Kod `mobile` deposunda merge; token dosyaları tek kaynaktan üretiliyor; erişilebilirlik temel kontrolleri (Dynamic Type, screen reader etiketleri kabuk düzeyinde) yapıldı; gerçek Android cihazda doğrulandı; README'de çalıştırma adımları güncel.

---

## Phase 2 — Authentication

**Goal:** Supabase Auth ile güvenli üyelik: kayıt, giriş, oturum kalıcılığı ve hesap silme temeli.

**Features:**
- E-posta+parola kayıt/giriş, parola sıfırlama; oturum kalıcılığı (mevcut `src/lib/auth.tsx` üzerine).
- `profiles` kaydının oturumla oluşması; RLS ile yalnız-sahibi erişimi.
- KVKK aydınlatma + açık rıza kaydı (onboarding'de derinleşecek temel).
- Hesap silme isteği → cascade silme sözleşmesi (Arch: KVKK).

**Dependencies:** Phase 1 (shell, form bileşenleri); Supabase Auth yapılandırması.

**Database impact:** `profiles` tablosu + RLS politikaları (yeni migration); auth tetikleyicisi (user → profile). Mevcut içerik tablolarına dokunulmaz.

**React screens:** Karşılama, Kayıt, Giriş, Parola sıfırlama, (Sohbet sekmesi hub'ında) Hesap/Profil girişi.

**Acceptance Criteria:**
1. Kayıt→doğrulama→giriş→uygulama kapat/aç→oturum sürüyor.
2. Bir kullanıcı başka kullanıcının profil satırını okuyamıyor (RLS testi).
3. Hatalı kimlik bilgisi durumları Editorial tonunda, teknik-ham mesajsız gösteriliyor.
4. Hesap silme akışı profil+log verilerini cascade siliyor (test kullanıcısıyla doğrulanır).

**Definition of Done:** RLS testleri yazılı ve geçiyor; auth akışı gerçek cihazda uçtan uca doğrulandı; migration `supabase/migrations/`e eklendi ve README-KURULUM güncellendi; kod mobile deposunda merge.

---

## Phase 3 — Onboarding

**Goal:** Yeni kullanıcıyı doğum verisi ve rıza akışıyla, engelsiz biçimde uygulamaya almak.

**Features:**
- Doğum tarihi/saati/yeri girişi; **"saatimi bilmiyorum" yolu zorunlu** (Güneş-burcu fallback — Arch KZ-1, D1.2).
- KVKK: doğum verisi için ayrı, açık rıza ekranı; rıza olmadan sembolik kişiselleştirme kapalı ama uygulama kullanılabilir.
- Kademeli tanıtım: 4 sekmenin ne olduğu, tek primary CTA/ekran (Design §5.1).
- Onboarding tamamlanma durumunun kalıcılığı (yarıda kalan akış kaldığı yerden sürer — Design §9).

**Dependencies:** Phase 2 (oturum + profiles); Editorial (onboarding metinleri); Safety (astroloji çerçeve dili).

**Database impact:** `birth_data` tablosu — profiles'tan **izole**, RLS + şifreleme-at-rest, saat-bilinmiyor bayrağı (yeni migration). `profiles`'a onboarding durumu alanı.

**React screens:** Full-screen modal onboarding akışı (3-5 adım): karşılama, doğum verisi, saat-bilinmiyor dalı, KVKK rızası, sekme turu.

**Acceptance Criteria:**
1. Saat bilinmeden tamamlanan onboarding, uygulamayı hiçbir yerde bloklamıyor.
2. Doğum verisi yalnız sahibince okunabiliyor (RLS testi); rıza reddi kaydediliyor ve akış dead-end üretmiyor (Design §39).
3. Onboarding yarıda bırakılıp dönüldüğünde kaldığı adımdan sürüyor.
4. Tüm metinler Editorial spec tonunda; astroloji "olasılık/tema" dilinde (Safety §6).

**Definition of Done:** birth_data migration + RLS testleri geçiyor; akış cihazda uçtan uca doğrulandı; rıza kayıtları denetlenebilir; kod merge; kabul metinleri Türkan onayından geçti.

---

## Phase 4 — Daily Check-in (KD-01)

**Goal:** Ana Sayfa'ya günlük giriş ritüelini kurmak: günün kartı + duygu check-in'i — KD-01 sonrası tanımlanan "duygu düzenleme / iç-akış patikası"nın (Deniz Cadısı kararındaki hedef akışın) ekran karşılığı.

**Features:**
- Günün bitki kartı (statik/dönüşümlü seçim v1; canlı transit motoru sonraki sürüm — Arch Faz 5 blocker'ı bu fazı bloklamaz) + günün sözü alanı için yer tutucu.
- **Duygu check-in'i:** tek dokunuşlu, 2 saniyelik çekirdek (mood-journal-spec M-1'in giriş kapısı) → Phase 5'teki tam Mood akışına köprü.
- Akış: Check-in → Mood/Journal girişi → bağlamsal ritüel/bitki içeriği (DECISION #4 hedef akışı).
- KD-01 uyumu: hiçbir yönlendirilmiş nefes/meditasyon pratiği yok; sakinleşme dili yalnız metaforik/gözlemsel.
- Seri/streak sayacı YOK (baskısız ilke — Arch/akis-spec).

**Dependencies:** Phase 3 (kullanıcı+onboarding durumu); `herbs` içeriği (canlıda hazır); Editorial (kart/CTA metinleri).

**Database impact:** Check-in kaydı Phase 5'in `mood_logs` şemasının çekirdek alt kümesini kullanır (enerji ekseni + zaman damgası) — tek tablo, çift şema yok. Gerekirse `derived_content_cache` okuma hazırlığı.

**React screens:** Ana Sayfa (günün kartı + check-in daveti), Check-in bottom sheet (tek adım), check-in sonrası "devam et: mood/journal" yönlendirme yüzeyi.

**Acceptance Criteria:**
1. Check-in çekirdeği tek dokunuş + ≤2 sn; derinleşme her zaman opsiyonel.
2. Akış Deniz Cadısı karar akışıyla birebir: check-in → mood/journal → bağlamsal içerik; hiçbir yüzeyde nefes protokolü yok.
3. Günün kartı doz/teşhis içermiyor; kart metni canlı `herbs.data`'dan geliyor.
4. Aynı gün ikinci check-in nazikçe güncelleme olarak işleniyor (çift kayıt yok).

**Definition of Done:** Akış cihazda uçtan uca doğrulandı; KD-01 uyumu gözden geçirildi (Safety perspektifi); kayıtlar RLS altında; kod merge; kart tasarımı KS-1/Design gate'lerinden geçti.

---

## Phase 5 — Mood

**Goal:** Tam mood modülü: yargısız enerji ekseni + opsiyonel duygu sözlüğü + baskısız geçmiş aynası (mood-journal-spec M-1/M-2).

**Features:**
- Enerji ekseni (çok yorgun ↔ çok canlı; iyi/kötü DEĞİL — beden-nötr kural) + opsiyonel duygu-sözlüğü katmanı ("hoş/nahoş" etiketi yok).
- Geçmiş görünümü: baskısız ayna (grafik/karşılaştırma baskısı yok, seri yok).
- Mood → opsiyonel journal derinleşmesi köprüsü (kademeli tek akış).
- Mood kaydı = `earn_action` (Bahçe döngüsüne ileri hazırlık; Bahçe mekaniği bu fazda kurulmaz).

**Dependencies:** Phase 4 (check-in çekirdeği aynı tabloda); Editorial (duygu sözlüğü kelime seti — `modules/mood.json` canlı içeriği); Safety §5.

**Database impact:** `mood_logs` tablosu tam şema + RLS (modül başına ayrı tablo — Arch D1.1). Alan kaynağı: `modules/mood.json`.

**React screens:** Mood giriş (check-in'in derinleşmiş hali), Duygu sözlüğü seçimi, Mood geçmişi/aynası.

**Acceptance Criteria:**
1. Çekirdek kayıt ≤2 sn; sözlük ve derinleşme atlanabilir (K1-K2 kriterleri).
2. Hiçbir yüzeyde tanı imâsı/duygu yargılaması yok; sürekli düşük mood örüntüsünde profesyonel destek yönlendirmesi görünür (Safety §5).
3. mood_logs yalnız sahibine görünür (RLS testi); geçmiş görünümü offline'da cached veriyle açılır.
4. Alan adları/enum'lar `modules/mood.json` ile birebir uyumlu.

**Definition of Done:** mood-journal-spec'in 7 kabul kriterinin mood'a düşenleri karşılandı; RLS + idempotenlik testleri geçti; cihaz doğrulaması yapıldı; kod merge.

---

## Phase 6 — Plant Library

**Goal:** Keşif sekmesinde 37 bitkilik kart kütüphanesini KS-1 kilitli tasarımıyla yayına almak — uygulamanın ilk zengin içerik yüzeyi.

**Features:**
- Dikey kart akışı (tek sütun, soft-witchery feed — KS-1); botanik illüstrasyon alanı + `tek_satir` + gezegen glyph.
- Detay ekranı: `story_narrative` · `ritual` · güvenlik çipleri (`uyari_chip`) · "geleneksel olarak anılır" çerçevesi.
- Gezegen→pudra ton eşlemesi (KS-1 renk tablosu, `constants/theme.ts` ile hizalı).
- Arama/filtre v1: gezegen rafına göre filtre (mevcut `kesif.tsx` üzerine, `src/lib/content.ts` okuma katmanı).

**Dependencies:** Phase 1 (bileşenler); canlı `herbs` (37 kayıt, editoryal master ✓); illüstrasyonlar hazır değilse tasarlanmış placeholder (illüstrasyon üretimi ayrı iş hattı — illustrasyon-uretim-spec).

**Database impact:** Yok (salt okuma; RLS/visibility duvarı mevcut ve `db:check` ile doğrulanıyor).

**React screens:** Keşif liste (feed), Bitki detay, filtre bottom sheet.

**Acceptance Criteria:**
1. 37 kart canlı DB'den yükleniyor; offline'da cache'ten açılıyor; boş/hata state'leri tasarlı.
2. Kart ve detayda doz/hastalık/teşhis yok; kaynak/atıf görünmüyor (KS-1 güvenlik kuralı).
3. Gezegen ton eşlemesi token sisteminden geliyor (hardcode yok); liste 60 fps kaydırıyor.
4. agent_only hiçbir içerik bu yüzeye sızmıyor (görünürlük duvarı — mevcut test seti).

**Definition of Done:** KS-1 ile birebir uyum gözden geçirildi; Design/UX/a11y/perf gate'leri geçildi; cihazda doğrulandı; kod merge; illüstrasyon eksikleri açık-iş olarak kayıtlı.

---

## Phase 7 — Journal

**Goal:** Journal modülü: serbest yazım + mood'dan kademeli geçiş; gizlilik-önce mimari.

**Features:**
- Journal girişi (serbest metin) + mood akışından opsiyonel devam; AM/PM ritüel modu temeli (mood-journal-spec).
- Kayıt listesi/okuma görünümü; düzenleme-silme.
- Gizlilik sözleşmesi: ham journal metni cihaz→DB (RLS) dışında hiçbir yere (LLM dahil) gitmez; ileriki haftalık-bakış yalnız yapılandırılmış etiket kullanır.
- Journal kaydı = `earn_action` (ileri hazırlık).
- PRO transit-soruları (journal-transit-sorulari.json) bu fazda **kapsam dışı** — gökyüzü motoruna (Arch Faz 5) bağlı; yer tutucu tasarlanır.

**Dependencies:** Phase 5 (mood köprüsü); Editorial (`modules/journal.json` canlı içeriği); Safety §5 (travmaya zorlamama, ruminasyon teşviki yok).

**Database impact:** `journal_logs` tablosu + RLS (ayrı tablo — D1.1). Alan kaynağı: `modules/journal.json`.

**React screens:** Journal giriş/yazım, Journal listesi, kayıt detayı.

**Acceptance Criteria:**
1. Mood→journal geçişi tek dokunuş; journal'a doğrudan giriş de mümkün.
2. Ham metin yalnız sahibinin RLS kapsamında; hiçbir analitik/LLM çağrısına ham metin gitmiyor (kod incelemesiyle doğrulanır).
3. Yazmaya zorlama/ceza dili yok; boş günler suçlamasız (Design §35).
4. Offline yazım güvenli: bağlantı yokken girilen kayıt kaybolmuyor (Design §38).

**Definition of Done:** RLS + offline testleri geçti; gizlilik sözleşmesi PROJECT_HEALTH tarzı kısa notla belgelendi; cihaz doğrulaması; kod merge.

---

## Phase 8 — Subscription

**Goal:** RevenueCat ile Free/Pro entitlement katmanını kurmak; gating'i mimaride tek noktadan yönetmek (Arch §4.3).

**Features:**
- RevenueCat SDK + ürün/paket yapılandırması; entitlement → uygulama içi tek `isPro` kaynağı.
- Locked/premium state'leri (Design §40): değer gösteren, navigasyonu bozmayan kilit yüzeyleri; dekoratif paywall kalabalığı yok.
- Free kapsamı: çekirdek mood/journal/keşif/check-in. Pro kapsamı (bu fazda yalnız kapı): tema-bazlı içerik, derin analiz yüzeyleri, transit soruları (motor geldiğinde).
- Satın alma, geri yükleme (restore), abonelik yönetimi yönlendirmesi.

**Dependencies:** Phase 2 (kullanıcı kimliği); mağaza hesapları/ürün tanımları (Türkan); Phase 4-7 yüzeyleri (kilitlenecek alanların var olması).

**Database impact:** `subscriptions` tablosu (RevenueCat webhook/senkron alanları) + RLS; içerik tablolarında değişiklik yok (veri TEK, sunum kilitli).

**React screens:** Paywall/teklif ekranı, Locked state bileşeni (yeniden kullanılabilir), Profil>Abonelik yönetimi.

**Acceptance Criteria:**
1. Sandbox'ta satın alma → entitlement aktif → kilitler açılıyor; restore çalışıyor.
2. Entitlement tek kaynaktan okunuyor; hiçbir ekran kendi gating mantığını kurmuyor.
3. Pro olmayan kullanıcı hiçbir çekirdek akıştan (check-in, mood, journal, keşif) dışlanmıyor.
4. Locked state'ler Design §40 gate'ini geçiyor; fiyat/iddia metinleri Editorial+Safety uyumlu.

**Definition of Done:** iOS+Android sandbox akışları doğrulandı; webhook/senkron test edildi; abonelik durum geçişleri (iptal, yenileme) tablo üzerinde izlenebilir; kod merge.

---

## Phase 9 — Beta

**Goal:** Kapalı beta: gerçek kullanıcılarla stabil, ölçülebilir ve güvenli bir sürüm.

**Features:**
- EAS build + dağıtım hattı (iç test → TestFlight / Play Internal); sürümleme ve changelog düzeni.
- Crash raporlama + rızaya bağlı, kişisel-veri-sızdırmayan temel telemetri.
- Beta geri bildirim kanalı (uygulama içi basit form veya yönlendirme).
- Launch-checklist kalemlerinin kapanışı: TR metin polisajı (Türkan), "esinlenmiştir" ibarelerinin UI görünürlüğü (bilim ayları), kriz kaynakları güncellik teyidi (183/182), disclaimer görünürlük denetimi, AI-görsel ticari lisans teyidi (kartlar yayındaysa).
- Performans/erişilebilirlik son geçişi (Design PART XIII tüm gate'ler).

**Dependencies:** Phase 1-8 tamam; mağaza geliştirici hesapları; EAS token akışı (mevcut `eas-login-via-token` düzeni); beta kullanıcı listesi (Türkan).

**Database impact:** Şema değişikliği yok; RLS ve görünürlük duvarının üretim doğrulaması (`db:check`, `test:visibility`, `test:retrieval` beta öncesi zorunlu koşu).

**React screens:** Yeni ekran yok; Ayarlar'a "geri bildirim gönder" + sürüm bilgisi; izin/rıza ekranlarının son hali.

**Acceptance Criteria:**
1. En az bir iOS + bir Android beta build'i gerçek cihazlarda kurulup çekirdek döngüyü (onboarding→check-in→mood→journal→keşif) hatasız tamamlıyor.
2. Crash-free oturum oranı ölçülüyor; kriz yönlendirme kaynakları güncel ve erişilir.
3. Launch-checklist'in bu sürüme düşen tüm kalemleri kapalı veya bilinçli-ertelenmiş olarak işaretli.
4. Kişisel veri (doğum verisi, journal ham metni) hiçbir telemetri/log kanalına çıkmıyor (denetim).

**Definition of Done:** Beta yapıları dağıtıldı; geri bildirim döngüsü işliyor; bilinen-sorunlar listesi ve v1.0 kapsam kararı ürün sahibinde; repo'da beta sürümü tag'li (`v0.2.0-beta` önerisi).

---

## Faz sırası ve bağımlılık zinciri

```
1 Shell → 2 Auth → 3 Onboarding → 4 Check-in → 5 Mood → 7 Journal
                                        ↘ 6 Plant Library (4'ten bağımsız, 1+canlı içerikle başlayabilir)
5+6+7 → 8 Subscription → 9 Beta
```

Kapsam dışı (bu roadmap'te YOK, ileride ayrı karar): Sohbet LLM katmanı, gökyüzü/transit motoru (Swiss Ephemeris — Arch Faz 5), Bahçe/herbaryum koleksiyon mekaniği (R1), haftalık bakış, quiz modülü ekranları, skincare/cycle ekranları, Günün Sözü havuz mekaniği. Bunlar eklendiğinde bu belge v2 olarak revize edilir.
