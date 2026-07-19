# ASTRO-ENGINE SPEC — Genel Astroloji Motoru (in-house)
# Şifa Bahçesi · Adım 6 · Claude Code yönergesi
# Sürüm: 1.0 · Tarih: 2026-07-15 · Durum: ONAYLANDI (Türkan, 2026-07-15)

> **Bu dosya ne için:** Sohbet (LLM) ve B-katmanını besleyen deterministik astroloji
> hesaplama motorunun implementasyon spec'i. `kisisellestirme-katmani.md`'deki
> `natal_chart` + `astro_context_daily` tasarımının SOMUT implementasyonudur —
> yeni mimari değil, mevcut placeholder'ın ("AstroAPI + natal hesaplayıcı")
> in-house motorla doldurulmasıdır.
>
> **Okuma sırası (Claude Code):** CLAUDE.md → ARCHITECTURE_DECISIONS.md →
> kisisellestirme-katmani.md → bu dosya. ACG modülü (`acg-spec.md`) bu spec'teki
> ortak çekirdeğe (`astro-core`) bağımlıdır — ÖNCE bu spec uygulanır.

---

## 0 · KARAR BAĞLAMI (neden in-house)

- **K5 — Natal/transit motoru tam in-house (ONAYLANDI 2026-07-15).**
  Gerekçe: AstroAPI (Bloom BV) ToS Bölüm 7.4 API sonuçlarının kalıcı
  saklanmasını yasaklıyor → kullanıcının natal chart'ı Supabase'e yazılamaz →
  her Sohbet mesajında yeniden API çağrısı = maliyet + gecikme + bağımlılık.
  In-house motor: `astronomy-engine` (MIT, ±1 yay dakikası, saf JS/TS, sıfır
  bağımlılık, ~116 KB) → saklama serbest, maliyet sıfır, ACG ile tek motor.
- **K6 — Ev sistemi aşamalı (ONAYLANDI 2026-07-15).**
  Faz 1: Whole Sign (trivial, hata riski ~0). Faz 2: Placidus (iteratif
  algoritma, >66.5° enlemde tanımsız — ayrı iş paketi).
- AstroAPI abstraction katmanı SİLİNMEZ — adaptör arayüzü arkasında opsiyonel
  köprü/karşılaştırma kaynağı olarak kalır (asla DB'ye yazılmaz).

---

## 1 · KAPSAM

**Faz 1 (bu spec):**
- Gezegen pozisyonları: Güneş, Ay, Merkür–Plüton (10 cisim) — of-date ekliptik boylam
- ASC + MC (açılar/angles)
- Whole Sign ev sistemi
- Majör açılar (aspects): kavuşum 0° · altmışlık 60° · kare 90° · üçgen 120° · karşıt 180°
- Ortalama Ay Düğümü (mean node) — Meeus polinomu; Güney düğümü = +180°
- Retrograd tespiti
- Transit: güncel pozisyonlar + natal'e açılar (applying/separating)
- LLM context builder (`build_astro_context`) — Sohbet'i güçlendiren asıl çıktı

**Faz 2 (ertelendi, bu spec'te DEĞİL):** Placidus · minör açılar (opsiyonel)

**Kapsam DIŞI (karar gerekmedikçe girme):** Chiron (ephemeris yok) ·
true node · asteroidler · progresyonlar · sinastri

---

## 2 · MİMARİ — ortak çekirdek + iki modül

```
supabase/functions/
  _shared/astro-core/          ← ORTAK ÇEKİRDEK (bu spec + acg-spec paylaşır)
    engine.ts                  astronomy-engine wrapper: pozisyonlar, GST, ε, dönüşümler
    timezone.ts                tz-lookup + Temporal → doğum verisi → UTC
    aspects.ts                 açı hesaplama (natal + transit ortak)
    types.ts                   ortak tipler + adaptör arayüzü
  natal-engine/                ← BU SPEC: natal + transit + context builder
  acg-engine/                  ← acg-spec.md (sonra)
```

- Paket: `npm:astronomy-engine@2.1.19` (deno.json'a pin'le). esm.sh fallback.
- Adaptör arayüzü (motor-agnostik — AstroAPI köprüsü de aynı arayüzü uygular):
  `resolveTimezone` · `toUtc` · `getNatalPositions` · `getAngles` ·
  `getHouses` · `getAspects` · `getTransits` · `getGreenwichSiderealTime` ·
  meta: `engineName/engineVersion/model/tzdbVersion/settingsHash`

---

## 3 · HESAPLAMA SPEC'İ

### 3.1 Zaman zinciri (timezone.ts)
```
(birth_date, birth_time, lat, lon)
  → iana_zone = tzLookup(lat, lon)            // @photostructure/tz-lookup (~72 KB)
  → utc_instant = Temporal.ZonedDateTime(...)  // Deno tam IANA tzdb, tarihsel DST dahil
  → tzdb_version kaydet
```
- Doğum saati bilinmiyorsa: `birth_time_known=false`, yerel 12:00 varsayılır,
  ASC/ev/açı hesaplanmaz (bkz. §6 saat-bilinmiyor modu).
- Timezone-sınırı köy / DST-geçiş gecesi: `ambiguous=true` → UI doğrulama
  ekranı (acg-spec ile ortak ekran, iki kez yapma).

### 3.2 Gezegen pozisyonları (engine.ts)
```
for body in [Sun, Moon, Mercury..Pluto]:
  eq = Astronomy.Equator(body, utc, gözlemci=yer merkezi, ofdate=true)  // RA saat, dec derece
  // Ekvatoral(of-date) → Ekliptik(of-date) dönüşümü — Meeus 13.1/13.2 ters yönü:
  //   tan λ = (sin α·cos ε + tan δ·sin ε) / cos α
  //   sin β = sin δ·cos ε − cos δ·sin ε·sin α
  // ε (obliquity): Meeus 22.2 mean-obliquity polinomu.
```
- **Emin olunmayan nokta (Claude Code doğrulasın):** astronomy-engine'in güncel
  sürümünde EQD→ECT (true ecliptic of date) rotasyon matrisi varsa
  (`Rotation_EQD_ECT` benzeri) manuel dönüşüm yerine ONU kullan. Yoksa
  yukarıdaki manuel dönüşüm yeterli.
- Nutasyon notu: mean ε ile dönüşüm ~0.005° sapma yaratabilir; tolerans içinde
  (bkz. §7). Golden fixture testi sınırı aşarsa Δψ (nutasyon) eklenir.
- Retrograd: `λ(t+6h) − λ(t)` işareti negatif → `retrograde=true`
  (sayısal türev; 6 saatlik adım Ay dahil güvenli).

### 3.3 Mean Node
```
T = Julian yüzyıl (J2000'den)
Ω = 125.04452 − 1934.136261·T + 0.0020708·T² + T³/450000   (derece, 0–360 normalize)
```
- **Claude Code notu:** Meeus'ta iki yakın polinom vardır (Ch.22 nutasyon
  bağlamı vs Ch.47 Ay bölümü). İmplementasyonda Ch.47 katsayılarını tercih et,
  golden fixture ile doğrula. Güney düğümü = Ω + 180°.

### 3.4 ASC / MC (angles)
```
GST_saat = Astronomy.SiderealTime(utc)          // Greenwich apparent ST
RAMC = normalize360(GST_saat·15 + boylam)       // doğu boylamı pozitif
λ_MC  = atan2( sin(RAMC), cos(RAMC)·cos(ε) )    // 0–360 normalize
λ_ASC = atan2( cos(RAMC), −( sin(RAMC)·cos(ε) + tan(φ)·sin(ε) ) )
```
- atan2 kuadrantı otomatik çözer; ek kuadrant düzeltmesi yazma.
- Kutup enlemi guard: |φ| > 66° → ASC tanımsız olabilir, hata değil uyarı döndür.

### 3.5 Whole Sign evler
```
asc_sign = floor(λ_ASC / 30)
ev[i] cusps = (asc_sign + i − 1) mod 12 burcunun 0°'si   // i = 1..12
```
- `houses.system = "whole_sign"` alanı ZORUNLU (Faz 2 Placidus gelince ayrım).

### 3.6 Açılar (aspects.ts)
```
her (a, b) çifti için:  d = min(|λa − λb|, 360 − |λa − λb|)
açı_tipi = en yakın {0, 60, 90, 120, 180}; |d − açı| ≤ orb ise kaydet
```
Varsayılan orb tablosu (config'te, engine_rules ile hizalanabilir):
| Açı | Orb | Işıklar (☉/☽) |
|---|---|---|
| Kavuşum 0° | 8° | 9° |
| Karşıt 180° | 8° | 9° |
| Üçgen 120° | 7° | 8° |
| Kare 90° | 7° | 8° |
| Altmışlık 60° | 5° | 6° |
- `applying/separating`: hızlı cismin boylam hızı işaretiyle — fark kapanıyorsa
  applying. Transit açılarında zorunlu, natal-içi açılarda opsiyonel.

### 3.7 Transit
```
getTransits(natal, utc_now):
  güncel_pozisyonlar = §3.2 (utc_now için)
  transit→natal açıları = §3.6 (transit orbları daha dar: majör 3°, ışıklar 4°)
  + ay_fazı (Astronomy.MoonPhase) + ay_burcu
```

---

## 4 · VERİ ŞEMASI (Faz 1 operasyonel şemayla hizalı)

```sql
-- natal_charts (kisisellestirme-katmani.md §2'deki tablo — alanları netleşti)
id uuid pk · user_id uuid fk UNIQUE
birth_data jsonb        -- {date, time, time_known, confirmed_by_user, lat, lon, iana_zone, utc_instant}
positions jsonb         -- [{body, lon, sign, deg_in_sign, retrograde}]
angles jsonb            -- {asc, mc, ramc} | null (saat bilinmiyorsa)
houses jsonb            -- {system:"whole_sign", cusps:[...]} | null
aspects jsonb           -- [{a, b, type, orb}]
mean_node jsonb         -- {north_lon, south_lon}
engine_name text · engine_version text · tzdb_version text · settings_hash text
computed_at timestamptz

-- transit_snapshot_daily (GLOBAL — gezegen pozisyonları herkes için aynı)
snapshot_date date pk
positions jsonb · moon_phase jsonb
engine_version text · computed_at timestamptz

-- astro_context_daily (user × gün — kisisellestirme-katmani.md'deki tablo)
user_id uuid fk · context_date date · pk(user_id, context_date)
transit_aspects jsonb   -- transit→natal açılar (snapshot + natal'den türetilir)
themes jsonb            -- vurgulanan temalar (engine_rules eşleşmesi)
context_block text      -- §6'daki hazır LLM bloğu (cache)
engine_version text · computed_at timestamptz
```
- **RLS:** natal_charts + astro_context_daily → `user_id = auth.uid()`.
  transit_snapshot_daily → herkese SELECT, yazma yalnız service_role.
- **Maliyet deseni (mevcut ilke korunur):** natal BİR KEZ · global snapshot
  günde 1 (Supabase cron/pg_cron) · astro_context_daily LAZY — kullanıcı o gün
  uygulamayı ilk açtığında hesaplanıp cache'lenir (pasif kullanıcıya hesap yok).
- Versiyonlama zorunlu: engine sürümü değişince yeniden hesaplama tespiti
  `engine_version + settings_hash` karşılaştırmasıyla.

---

## 5 · DOĞRULAMA PROTOKOLÜ (golden fixtures — merge şartı)

Referans: astro.com ücretsiz chart (Whole Sign seçili). En az 6 test doğumu:
1. İstanbul 1983 yaz (tarihsel TR DST) · 2. İstanbul 2026 (güncel)
3. Güney yarımküre (Sidney) · 4. Ekvator yakını (Singapur)
5. DST-geçiş gecesi doğumu · 6. Saat bilinmiyor (yalnız pozisyon modu)

| Nicelik | Tolerans |
|---|---|
| Gezegen ekliptik boylamı | ≤ 0.02° |
| Ay boylamı | ≤ 0.05° |
| ASC / MC | ≤ 0.1° |
| Mean node | ≤ 0.1° |
| Açı tespiti | tip + applying eşleşmesi birebir |
- ASC burç sınırına < 0.5° yakın + saat onaysız → `asc_boundary_warning=true`
  (UI "doğum saatini doğrula" tetikler).
- Fixture'lar `tests/golden/` altında JSON; CI'da her PR'da koşar.

---

## 6 · LLM CONTEXT BUILDER (asıl hedef — Sohbet'i güçlendirme)

`build_astro_context(user_id, date) → context_block (Türkçe, ~300–400 token)`

**Kaynak:** natal_charts (saklı) + transit_snapshot_daily + engine_rules eşleşmesi.
**Tüketici:** Sohbet system context'i + B-katmanı (her modül, relevance map'e göre
kırpılmış alt küme — kisisellestirme-katmani.md §4).

**Blok formatı (şablon):**
```
[ASTRO-CONTEXT · sembolik akış · {tarih}]
Natal: ☉ {burç} · ☽ {burç} · ASC {burç|bilinmiyor} · vurgulu: {1-2 natal özellik}
Bugün: Ay {burç} ({faz}) · aktif transitler: {en güçlü 2-3, orb sıralı}
Temalar: {engine_rules'tan eşleşen 1-2 tema etiketi}
Bayraklar: {saat_bilinmiyor | asc_sınır_uyarısı | yok}
```

**SERT KURALLAR (mevcut güvenlik mimarisine bağlanır):**
- Bu blok SEMBOLİK akış girdisidir → Sohbet çıktısında kanıt akışıyla ASLA
  birleştirilmez (kisisellestirme-katmani.md §5 — "yıldızlar demir ye diyor" YOK).
- Blok VERİ verir, yorum dili üretmez — davetkar/sembolik dil Sohbet system
  prompt'unun işi. Kader iddiası, teşhis, doz kelimeleri blokta geçemez.
- Saat-bilinmiyor modu: ASC/ev satırı yazılmaz; Ay o gün burç değiştiriyorsa
  "☽ {burç1}/{burç2} (saat bilinmediği için kesinleşmiyor)".
- agent_only duvarı aynen geçerli — context builder yalnızca `visibility=user`
  içerik + engine_rules kullanır.

---

## 7 · FREE/PRO DOKUNUŞU (mevcut gating mimarisi — modül başına değil)

- **Free:** natal özet (☉/☽/ASC + 3 büyük gezegen) · günün Ay burcu/fazı ·
  1 aktif transit teması.
- **Pro:** tam natal (10 cisim + düğümler + tüm açılar) · tüm aktif transitler ·
  Sohbet'te derin astro-context (tam blok) · journal-transit soruları (mevcut 33 pro soru).
- Uygulama: RevenueCat entitlement kontrolü context builder'da blok kırpma
  olarak — veri TEK, sunum katmanı gate'ler (ARCHITECTURE_DECISIONS §2.4).

---

## 8 · CLAUDE CODE İMPLEMENTASYON CHECKLIST (sıralı — plan mode'da başla)

1. `_shared/astro-core/` iskeleti + `astronomy-engine@2.1.19` pin + tipler/adaptör arayüzü.
2. `timezone.ts`: tz-lookup + Temporal zinciri + ambiguous bayrağı (test: İstanbul 1983).
3. `engine.ts`: pozisyonlar (§3.2) + GST + ε + retrograd. EQD→ekliptik yolunu doğrula
   (kütüphane rotasyonu var mı? yoksa manuel dönüşüm).
4. Mean node (§3.3) + ASC/MC (§3.4) + Whole Sign (§3.5).
5. `aspects.ts` (§3.6) — orb tablosu config'te.
6. Golden fixture seti (§5) — 6 doğum, toleranslar, CI'a bağla. **GEÇMEDEN İLERLEME.**
7. Migration: natal_charts alan netleşmesi + transit_snapshot_daily +
   astro_context_daily + RLS politikaları.
8. `natal-engine` Edge Function: hesapla-ve-sakla endpoint'i + günlük snapshot cron.
9. `build_astro_context` (§6) + lazy cache + free/pro kırpma.
10. Sohbet entegrasyonu: context bloğunu system context'e ekleme + iki-akış
    kuralının çıktıda korunduğunu test et (yasak-dil taraması).
11. AstroAPI adaptörünü aynı arayüz arkasına opsiyonel köprü olarak bırak
    (karşılaştırma/debug amaçlı; DB'ye yazması ENGELLİ).

**Başlangıç komutu (Türkan → Claude Code):**
> "Adım 6'ya geç: astro-engine-spec.md'yi oku ve uygula — ortak astro-core +
> in-house natal/transit motoru + LLM context builder. Plan mode'da önce planı
> sun, onayımı bekle. Golden fixture'lar geçmeden Sohbet entegrasyonuna geçme."

---

## 9 · AÇIK NOKTALAR / EMİN OLUNMAYANLAR
- astronomy-engine'de EQD→ECT rotasyonunun varlığı → implementasyonda doğrulanacak
  (yoksa manuel dönüşüm, §3.2). Sonuç golden fixture'la garantilenir.
- Mean node polinom katsayıları: Meeus Ch.47 tercih, fixture ile teyit.
- Placidus (Faz 2): ayrı iş paketi — bu spec'e EKLENMEZ, yeni spec sürümü gerekir.
- Ay düğümü yorumlama içeriği (engine_rules'ta düğüm kuralları var mı?) →
  içerik tarafı, Türkan ile ayrı oturum.
