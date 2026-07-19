# ACG-SPEC — Astrokartografi Modülü (in-house)
# Şifa Bahçesi · Adım 7 · Claude Code yönergesi
# Sürüm: 1.0 · Tarih: 2026-07-15 · Durum: ONAYLANDI (Türkan, 2026-07-15)
# Kaynak: ACG Derin Araştırma Raporu (2026-07-15) — kararlar oradan, bu dosya implementasyon spec'i

> **BAĞIMLILIK:** Bu modül `_shared/astro-core/` çekirdeğine bağımlıdır
> (`astro-engine-spec.md`, Adım 6). Adım 6 golden fixture'ları geçmeden
> bu spec'e BAŞLAMA. Timezone zinciri, pozisyon/GST hesabı ve adaptör
> arayüzü oradan gelir — burada YENİDEN YAZILMAZ.

---

## 0 · KİLİTLİ KARARLAR (rapor sonucu — yeniden tartışma)

- **K1 ✅** ACG çizgileri in-house, Supabase Edge Function (astronomy-engine).
  Hosted ACG API'leri birincil motor DEĞİL (AstroAPI ToS 7.4 saklama yasağı;
  diğerlerinin saklama maddeleri belirsiz). RoxyAPI yalnızca doğrulama
  referansı olarak kullanılabilir.
- **K2 ✅ (revize)** Harita iki aşamalı, ama WebView aşaması MİNİMAL tutulur:
  Stage A = WebView + MapLibre GL JS (Expo Go, en erken görsel prototip) →
  Stage B = MapLibre React Native v11.x + MapTiler pastel stil, dev-build
  geçişinde (RevenueCat zaten dev-build zorunlu kılıyor — geçişi öne çek).
- **K3 ✅** PostGIS YOK. Çizgiler kullanıcı başına GeoJSON (jsonb) +
  hesaplama metadata'sı. Mesafe = haversine, Edge Function içinde.
- **K4 ✅** Timezone: Deno Intl/Temporal (tam IANA tzdb) + tz-lookup.
  Ücretli timezone API YOK. Belirsiz durumda doğrulama ekranı (astro-core'dan).
- **İsimlendirme:** "Astrokartografi" güvenli (Astro*Carto*Graphy markası
  2011'de iptal). Yıldızlı stilize form KULLANMA.

---

## 1 · KAPSAM

**Faz 1:** 10 cisim (Güneş–Plüton) × 4 açı (MC/IC/ASC/DSC) = ~40 çizgi ·
harita gösterimi · en-yakın-çizgi analizi · kayıtlı lokasyonlar ·
lokasyon başına sembolik yorum (Sohbet/Claude API üzerinden).
**Kapsam DIŞI (Faz 2+):** parans · relocation chart · local space ·
düğüm/Chiron çizgileri.

---

## 2 · ACG MATEMATİK SPEC'İ (pseudocode — Claude Code birebir uygular)

Girdi: doğum UTC anı (astro-core timezone zinciri) → her cisim için
of-date RA/dec (`Astronomy.Equator`, ofdate=true) + GST (`Astronomy.SiderealTime`).

```
GST_deg = GST_saat * 15
for each body:
    ra_deg  = ra_saat * 15
    # --- MC / IC (dikey çizgiler) ---
    lon_MC = normalize180(ra_deg − GST_deg)
    lon_IC = normalize180(lon_MC + 180)
    # --- ASC / DSC (eğriler) ---
    for phi in −89 … +89 step 1:        # |phi| > 60 için step 0.5
        x = −tan(phi) · tan(dec_deg)
        if |x| > 1: continue            # circumpolar: o enlemde doğmaz/batmaz
        H = acos(x)                     # saat açısı (derece)
        lon_ASC = normalize180(ra_deg − H − GST_deg)   # doğuş (doğu ufku)
        lon_DSC = normalize180(ra_deg + H − GST_deg)   # batış (batı ufku)
        ASC/DSC eğrisine (lon, phi) ekle
    split_at_antimeridian(çizgi)        # ±180° sarımında ayrı LineString'lere böl
# Refraksiyon ACG konvansiyonunda İHMAL edilir.
```

- İşaret konvansiyonu: ASC = −H, DSC = +H. Karıştırma — golden fixture yakalar.
- Antimeridyen bölme ZORUNLU: MapLibre tek LineString'i ±180 sarımında bozuk
  çizer. GeoJSON'a ÖN-BÖLÜNMÜŞ ver.
- Çıktı: GeoJSON FeatureCollection; her feature:
  `{planetId, angleType: MC|IC|ASC|DSC, geometry: LineString}`.
- Stil ayrımı veri değil harita katmanında: MC/ASC solid · IC/DSC dashed;
  gezegen → pudra ton eşlemesi (mevcut kilitli palet: Ay→pudra mavi,
  Venüs→pudra pembe, Güneş→kavun içi, Mars→melon, Satürn→lila; kalanlar
  tasarım fazında).

### En-yakın-çizgi analizi
```
nearestLines(lines, lat, lon):
    her çizgi için: nokta-örneklerine haversine min mesafe (km)
    mesafeye göre sıralı [{planetId, angleType, distanceKm}] döndür
```
~40 çizgi × ~180 nokta = önemsiz maliyet; Edge içinde senkron.

---

## 3 · KENAR-DURUM TEST SETİ (golden fixtures — merge şartı)

Referans: astro.com ücretsiz ACG haritası. Toleranslar: MC-çizgi boylamı
≤ 0.05° · ASC-eğri enlem örnekleri ≤ 0.2° · RA/dec ≤ 1′ · GST ≤ 0.1 sn.

1. İstanbul 1983 yaz doğumu (tarihsel TR DST)
2. DST-geçiş gecesi doğumu (belirsiz yerel saat → doğrulama ekranı akışı)
3. Doğum saati bilinmiyor → ACG ÜRETİLMEZ; teaser + "saat gerekli" mesajı
4. Kutup enlemi doğumu (Svalbard 78°) — circumpolar dışlama davranışı
5. Yüksek |dec| cismi: belirli enlemlerde ASC/DSC hiç yok
6. Antimeridyen geçen ASC eğrisi (Pasifik) — bölme doğruluğu
7. Timezone sınırındaki köy (ambiguous bayrağı akışı)
8. Ekvator doğumu (H ≈ 90°, eğri ~dikey)
9. Gündönümü civarı Güneş (maks |dec|)
10. Ay çizgileri — dakika hassasiyeti (Ay hızlı)
11. GST 0h/24h sarımı
12. Retrograd gezegen — RA sürekliliği

---

## 4 · VERİ ŞEMASI

```sql
astrocartography_runs
  id uuid pk · user_id uuid fk
  birth_data_hash text          -- doğum verisi değişince yeniden hesap tespiti
  lines_geojson jsonb           -- FeatureCollection (ön-bölünmüş)
  engine_name text · engine_version text · model text
  tzdb_version text · settings_hash text · created_at timestamptz

saved_locations
  id uuid pk · user_id uuid fk · name text
  lat float8 · lon float8 · iana_zone text · created_at timestamptz

location_analyses
  id uuid pk · run_id fk → astrocartography_runs · location_id fk → saved_locations
  nearest_lines jsonb · distances_km jsonb
  interpretation_text text      -- Sohbet üretimi sembolik yorum (cache)
  engine_version text · created_at timestamptz
```
- **RLS:** üç tablo da `user_id = auth.uid()` (location_analyses run üzerinden).
- Kullanıcı doğum verisini güncellerse: hash değişir → eski run arşiv/silinir,
  yeni run hesaplanır. Yorum cache'i run'a bağlı → otomatik geçersizleşir.

---

## 5 · HARİTA KATMANI

**Stage A (Expo Go — minimal prototip):**
- WebView + MapLibre GL JS; ~40 stilize polyline + tap-to-select yeterli.
- Amaç yalnızca görsel doğrulama; cila yapma, Stage B'ye taşınacak.

**Stage B (dev-build — üretim):**
- `@maplibre/maplibre-react-native` (güncel v11.x — kurulumda sürümü doğrula),
  Expo config plugin + native rebuild.
- `GeoJSONSource` + `LineLayer`; `lineDasharray` ile IC/DSC kesikli;
  `onPress` ile çizgi seçimi → alt kart (bottom sheet) açılır: gezegen +
  açı + sembolik yorum (davetkar dil, kader iddiası yok).
- Taban harita: MapTiler custom pastel stil (Map Designer'da düşük satürasyon,
  pudra palete uyum). **Dikkat:** MapTiler Free plan ticari-olmayan kullanım
  içindir → ticari lansmanda Flex plana geç. Attribution zorunlu:
  "© MapTiler © OpenStreetMap" (tıklanabilir). Alternatif: Stadia Maps.

---

## 6 · YORUM KATMANI (LLM entegrasyonu)

- Lokasyon yorumu = astro-core context builder deseninin ACG uzantısı:
  `nearest_lines` verisi → Sohbet'e SEMBOLİK akış girdisi → davetkar yorum.
- **SERT KURALLAR (mevcut mimari aynen):** "Bu şehre taşınırsan X olur" gibi
  kader/kesinlik iddiası YASAK. Dil: "bu bölge {gezegen} temasını öne
  çıkarabilir". Teşhis/doz/semptom kelimeleri yok. agent_only duvarı geçerli.
  Hassas içerik sonunda standart bilgilendirme notu.
- Yorum `location_analyses.interpretation_text`'e cache'lenir (run'a bağlı).

---

## 7 · FREE/PRO

- **Free (teaser):** 4 cisim (☉ ☽ ♀ ♃) × yalnız MC+ASC çizgileri haritada ·
  1 şehir analizi · kısa yorum.
- **Pro:** 10 cisim × 4 açı tümü · sınırsız şehir + kayıtlı lokasyonlar ·
  en-yakın-çizgi mesafe listesi · derin Sohbet yorumu.
- Gate mevcut RevenueCat entitlement mekanizmasında — çizgi filtreleme
  sunum katmanında, veri TEK.

---

## 8 · CLAUDE CODE İMPLEMENTASYON CHECKLIST (sıralı — plan mode'da başla)

1. Ön-koşul doğrula: astro-core kurulu + Adım 6 golden fixture'ları yeşil.
2. `acg-engine` Edge Function iskeleti (astro-core'u import eder).
3. ACG math modülü (§2): MC/IC + ASC/DSC + circumpolar + antimeridyen bölme.
4. 12 kenar-durum fixture'ı (§3) — astro.com referanslı, CI'a bağla.
   **GEÇMEDEN İLERLEME.**
5. Migration: 3 tablo (§4) + RLS + birth_data_hash geçersizleştirme mantığı.
6. `nearestLines` + haversine.
7. Stage A harita (WebView + MapLibre GL JS) — minimal, tap-to-select.
8. Yorum katmanı (§6) Sohbet bağlantısı + yasak-dil testi.
9. Free/Pro gate (§7).
10. [Dev-build geçişinde] Stage B: MapLibre RN + MapTiler pastel stil +
    attribution + Flex plan kontrolü.

**Başlangıç komutu (Türkan → Claude Code):**
> "Adım 7'ye geç: acg-spec.md'yi oku ve uygula — astrokartografi modülü,
> astro-core üzerine. Plan mode'da önce planı sun, onayımı bekle.
> 12 kenar-durum fixture'ı geçmeden harita katmanına geçme."

---

## 9 · AÇIK NOKTALAR
- MapLibre RN güncel sürüm + Expo config plugin uyumu → Stage B başlarken doğrula.
- MapTiler pastel stilin marka paletiyle birebir eşleşmesi → tasarım fazı işi
  (Faz 6 tema finalizasyonuyla birlikte).
- Parans/relocation (Faz 2) → talep gelirse yeni spec sürümü.
- Düğüm/Chiron çizgileri → astro-core kapsamına bağlı (şimdilik dışarıda).
