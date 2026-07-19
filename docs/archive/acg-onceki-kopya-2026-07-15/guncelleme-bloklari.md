# GÜNCELLEME BLOKLARI — 2026-07-15 oturumu
# Bu dosya Claude Code'a verilir: "Bu bloklarla ARCHITECTURE_DECISIONS.md ve
# KALINAN-YER.md'yi CERRAHİ güncelle (yerinde düzenleme, tam yeniden yazım değil)."

---

## A · ARCHITECTURE_DECISIONS.md güncellemeleri

### A1 — §1 Stack satırında DEĞİŞTİR
ESKİ: `... Claude API (içerik üretimi) · AstroAPI (transit) + natal hesaplayıcı.`
YENİ: `... Claude API (içerik üretimi) · Astro motoru in-house (astronomy-engine, MIT — natal + transit + ACG; K5) · AstroAPI = opsiyonel köprü, DB'ye yazmaz.`

### A2 — §5 Açık kararlar bölümüne EKLE
```
- **K5 — ✅ ONAYLANDI (2026-07-15):** Natal/transit/ACG motoru tam in-house
  (astronomy-engine@2.1.19, Supabase Edge). Gerekçe: AstroAPI ToS §7.4 sonuç
  saklamayı yasaklıyor (natal chart DB'ye yazılamaz). Spec: astro-engine-spec.md.
- **K6 — ✅ ONAYLANDI (2026-07-15):** Ev sistemi aşamalı — Faz 1 Whole Sign,
  Faz 2 Placidus (ayrı iş paketi).
- **K1–K4 (ACG) — ✅ (2026-07-15):** ACG in-house (K1) · harita iki aşamalı,
  WebView minimal (K2-revize) · PostGIS yok, jsonb GeoJSON + haversine (K3) ·
  timezone Deno Intl/Temporal + tz-lookup, ücretli API yok (K4).
  Kaynak: ACG Derin Araştırma Raporu. Spec: acg-spec.md.
- **Swiss Ephemeris fizibilitesi — KAPANDI:** Astronomy Engine (MIT) seçildi;
  SE yalnızca uzak-fallback (AGPL/ücret riski notta kalır).
- **İsimlendirme:** modül adı "Astrokartografi" güvenli (Astro*Carto*Graphy
  markası 2011'de iptal); yıldızlı stilize form kullanılmaz.
```

### A3 — §4 Dosya haritasına EKLE
```
- `astro-engine-spec.md` — in-house astroloji motoru (Adım 6, K5/K6)
- `acg-spec.md` — astrokartografi modülü (Adım 7, K1–K4)
```

---

## B · KALINAN-YER.md güncellemeleri

### B1 — §2 Tech Stack'te DEĞİŞTİR
ESKİ: `**Astro:** AstroAPI (+ Swiss Ephemeris fizibilitesi Adım 5'te test edilecek)`
YENİ: `**Astro:** in-house motor (astronomy-engine, MIT — K5) · AstroAPI opsiyonel köprü (DB'ye yazmaz) · Swiss Ephemeris kapandı (fallback notu)`

### B2 — §5 "Sıradaki adım" bölümüne EKLE (Adım 4–5 ✅ işaretlendikten sonra)
```
- **Adım 6 — Astro-core + in-house natal/transit motoru + LLM context builder.**
  Spec: astro-engine-spec.md. Claude Code'a komut (plan mode):
  > "Adım 6'ya geç: astro-engine-spec.md'yi oku ve uygula. Plan mode'da önce
  > planı sun, onayımı bekle. Golden fixture'lar geçmeden Sohbet
  > entegrasyonuna geçme."
- **Adım 7 — Astrokartografi modülü** (Adım 6 fixture'ları yeşil OLMADAN başlama).
  Spec: acg-spec.md. Claude Code'a komut (plan mode):
  > "Adım 7'ye geç: acg-spec.md'yi oku ve uygula. Plan mode'da planı sun,
  > onayımı bekle. 12 kenar-durum fixture'ı geçmeden harita katmanına geçme."
```

### B3 — §9 Claude'a hatırlatma listesine EKLE
```
- Adım 6/7 sırası KİLİTLİ: önce astro-core+motor, fixture'lar yeşil, sonra ACG.
- MapTiler Free plan ticari kullanım için DEĞİL → lansman öncesi Flex plana geçiş
  ve attribution kontrolü (acg-spec §5).
- KVKK/GDPR: doğum verisi + Claude API yurt dışı aktarımı için nitelikli avukat
  onayı yayın-öncesi listeye eklendi (rapor RQ7).
```

### B4 — Yayın öncesi listesine (§6) EKLE
```
- KVKK aydınlatma + açık rıza metni (doğum verisi, yurt dışı aktarım) — avukat teyidi
- App Store 4.3(b) riski: fark anlatısı hazır olsun (bütünsel wellness ≠ salt astroloji);
  web-app fallback planı çekmecede
- MapTiler ticari plan + harita attribution kontrolü
```
