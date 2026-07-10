---
belge: bahce-spec
surum: v1.2
amac: "Bahçe sekmesi içerik + davranış spec'i. Şifa Bahçesi veri kontratının ekran yüzeyi + Herbaryum retention çekirdeği (R1). garden_state kontratı burada tanımlanır (Ana Sayfa B6 tüketicisi)."
dil: tr
girdiler: [sifa-bahcesi-veri-kontrati.md (v1), ana-sayfa-spec.md, kesif-spec.md, contraindications.json, module-content-standard.md, hook-sentez-spec.md (v1.2)]
onaylar: "Kompozisyon C · R1.2 = c — Türkan, 2026-07-05 · FİNAL TUR (5 Tem, hook sohbeti): R1.1 = b teyit · R1.3 = koleksiyon free + pro_extra_ally (tier kilidi seçeneğini geçersiz kılar) · R1.4 = c teyit · Aylık Albüm ve Paylaşım (R1.5 = c) eklendi. Ara kararlar kapandı."
acik_kararlar: []
---

# Bahçe — İçerik & Davranış Spec v1.2

## 0. Ekranın rolü

- **Günlük ritüelin evi + biriktirmenin yuvası:** üst yarı bugünün bahçesi (ambient gök + günün müttefiki + kazanım durumu), alt yarı Herbaryum ve iki derinlik karosu (beden · denge).
- Tamamen **sembolik rejim**; kanıt köprüsü yalnız `herb_detail` pro katmanında ve daima ayrı blokta.
- Bilgi şeridi yok: gökyüzü bilgisi Keşif K1'dedir; Bahçe'de gök **atmosferdir** (ambient).

### Kontrat düzeltmeleri (sifa-bahcesi-veri-kontrati v1 üzerine)
1. `herb_detail.source_ref`: veri katmanında kalır (**iç denetim**); hiçbir tier'da ekranda gösterilmez — kilitli kural.
2. Gating tablosundaki "Keşfet (sınırsız)" satırı geçersiz: Keşif kendi spec'inde free (KS-1=b).
3. 3 kademe (Tomurcuk/Çiçek/Yıldız-çiçeği) → 2 kademeye katlandı: plus+premium = **pro** (onaylı). Kademe adları ileride pazarlama diline dönebilir; mimari 2 kademe.

## 1. Blok dizilimi

| # | Blok | Kontrat kökü | Free/Pro |
|---|---|---|---|
| G1 | Ambient gök | A (sky_strip → görsel state) | free |
| G2 | Günün müttefiki (hero) | B (daily_remedy) | free |
| G3 | Bugünün kazanımı satırı | yeni (R1) | free |
| G4 | Herbaryum | yeni (R1, R1.2=c) | free çekirdek |
| G5 | Beden haritası karosu → tam ekran | E + F.beden_haritasi | teaser free · not pro |
| G6 | Element dengesi karosu → tam ekran | D | teaser free · analiz pro |

`herb_detail` (kontrat C) blok değil, **paylaşılan ekran**dır (Keşif spec'iyle aynı komponent).

---

## 2. Blok spec'leri

### G1 · Ambient gök

- **Ne:** bahçe zemininin ışığı/gradyanı güne ve aya göre değişir: `time_of_day` (şafak/gündüz/alacakaranlık/gece) × `moon_phase`. Çip/metin yok.
- **Veri:** `ambient_state {time_of_day ← cihaz+güneş, moon_phase ← realtime_transit}` (Ana Sayfa/Keşif ile ortak günlük cache).
- **Haller:** transit yoksa nötr gündüz haline düşer — kırılma yok.
- **Görsel:** pudra paleti içinde kalır; gece hali bile koyu blok değil, lila-derinlikli açık ton (kit kuralı: koyu renk bloğu yok).

### G2 · Günün müttefiki (hero)

- **Ne:** Ana Sayfa B3 ile **aynı `daily_remedy` nesnesi**, tam deneyim: illüstrasyon büyük + ad + glif + `theme_line` + "hikâyesini aç" girişi → `herb_detail`.
- **Veri/haller/güvenlik:** ana-sayfa-spec B3 ile birebir (stale-cache dahil); burada tekrar tanımlanmaz.
- **Fark:** theme_line burada görünür (Ana Sayfa'da B2 satırı taşıyordu; aynı üretim).

### G3 · Bugünün kazanımı satırı

- **Ne:** tek satır durum + mikro-ilerleme: "Bugünün kartı bahçede seni bekliyor" ↔ "Bugünün kartı Herbaryum'a katıldı ✓" (+ varsa uyuyan tohum notu, aşağıda R1.4).
- **Kazanım kuralı (R1.1 = b — final, 5 Tem 2. tur):** günün ilk `earn_action`'ı kartı kazandırır. `earn_actions` v1 beyaz listesi (config): `[gunun_muttefiki_hikayesi_acildi, mood_log, journal_entry, reminder_tamamlama]`. Tek eylem yeter; sayaç/çoklu koşul yok. Genişletme adayları (nefes, meditasyon, yoga, neurogame, quiz, Akış) v1.1 config güncellemesidir — hook-sentez-spec ilgili modül bölümleri.
- **Veri:** `garden_state` (bkz. §3) + `earn_events` log.
- **Güvenlik/ton:** ceza/borç dili yasak; kaçırma durumunda bile yargı yok.

### G4 · Herbaryum (R1 çekirdeği, düzen R1.2=c)

- **Omurga:** 7 kalıcı gezegen rafı (Ay · Merkür · Venüs · Güneş · Mars · Jüpiter · Satürn); her bitki motor tablodaki gezegen ailesine göre rafına oturur. Raf başlığında ilerleme: "Venüs Rafı · 4/12".
- **Mevsimsel katman (PARLAMA modeli — R1.2 revize, 5 Tem):** mevsim bir *kıtlık* değil *vurgu* katmanıdır. **Her bitki her zaman toplanabilir** (mevsim-dışı silüet/ceza YOK). Mevsim yalnızca o dönem hangi bitkilerin "Mevsimin Konuğu" olarak **parladığını** belirler: ana ekranda öne çıkarma + rafta hafif parlama/rozet + günün müttefiki seçiminde o dönem parlayanlara ağırlık. Dengesizlik (yaz-yoğun/kış-seyrek botanik gerçeği) bu modelde sorun değildir; kış kullanıcısı da koleksiyon büyütür. Otorite: `content/mevsim-haritasi.json` (parlama penceresi + botanik/sembolik tip + Türkan-teyit damgası).
- **Kozmik katman ("Gece Açanlar"):** `kozmik_olay` etiketli az sayıda nadir kart yalnız o anlarda (dolunay, yeniay, gündönümü, ekinoks) kazanılabilir — **herkese açık**; nadirlik gökyüzünden gelir, satın alınamaz. Pencere dışında silüet, anını dürüstçe söyler ("dolunayda açar"). Doğal push anı üretir (bildirim tavanına tabi).
- **Kart halleri:** kazanılmış (tam illüstrasyon + kazanım tarihi: "5 Temmuz'da bahçene katıldı") · silüet (henüz yok) · mevsim-dışı silüet (mevsim etiketi) · uykuda (R1.4).
- **Kart tap:** kazanılmış → paylaşılan `herb_detail`; silüet → kısa merak metni (bilgi sızdırmaz, davet eder).
- **Ekran:** Bahçe'de raf önizleme (yatay şerit, 1-2 raf); "Herbaryum'u aç" → tam koleksiyon ekranı (stack).
- **Pro — günlük ek müttefik (R1.3 finali — onaylı, 5 Tem 2. tur):** pro kullanıcı günde 1 seçmeli bitkiyi (raftan/Keşif'ten) hikâyesini açarak kazanabilir (`pro_extra_ally`). **Koleksiyonun kendisi ve tüm kartlar free'dir** — gating "çekirdek free, derinlik pro" okulunda kalır. Not: bu final, hook sohbetindeki R1.3=A (tier kilidi) seçeneğini geçersiz kılar; Tomurcuk/Çiçek/Yıldız içerik kademeleri gelir kapısı DEĞİLDİR (guven_tier T0–T3 güvenlik sistemi bundan ayrıdır, aynen yaşar).

#### R1.4 — kaçırılan gün politikası *(KARAR = c: nazik telafi — final teyit, 5 Tem 2. tur)*
- Kazanılmayan günün kartı **uykuya dalar**: tek slot (`uyuyan_kart`), üst üste birikmez.
- Sonraki 3 gün içinde günün ilk `earn_action`'ı **hem o günün kartını hem uyuyan kartı** getirir (tek eylem, çift kazanım — telafi cömerttir, ek görev istemez).
- 3 gün dolarsa kart doğaya döner (silüet); mevsim döngüsü ileride yeniden getirebilir.
- Mevsim Konuğu kaçarsa uyku süresi pencereyi aşamaz; pencere kapanınca doğaya döner (etiketi mevsimini söyler).

#### Aylık Albüm *(R1.2 eki — onaylı, 5 Tem 2. tur)*
- **Dönem:** takvim ayı (arketip quiz rotasyonuyla senkron).
- O ay kazanılan her kart, gezegen rafına ek olarak **ayın albüm sayfasına** da işlenir (çift üyelik; ek veri üretimi yok, otomatik türetilir).
- **Free:** güncel ayın sayfası. **Pro:** geçmiş ay arşivi (felsefe tutarlı: çekirdek free, arşiv/derinlik pro).
- Ay kapanışında sayfa kompozisyonu paylaşım şablonuna dönüşür (aşağıda).

#### Paylaşım *(R1.5 = c — onaylı, 5 Tem)*
- 3 şablon, tek tasarım dili: **tek kart** (story 9:16 + kare 1:1) · **aylık albüm sayfası** (ay kapanışında) · **nadir an çerçevesi** (`kozmik_olay` kartları).
- Paylaşım görseli yalnız **kart yüzeyini** render eder: illüstrasyon + isim + `tek_satir`. `herb_detail` içeriği (story_narrative, ritual, kanıt köprüsü, güvenlik çipleri) paylaşım görseline asla girmez → iddiasız dil garantisi + pro içerik sızmaz.
- Görsel kit kuralları geçerli; app adı filigranı; emoji yok.

### G5 · Beden haritası (karo → tam ekran, melothesia — karar a)

- **Karo (Bahçe'de):** bugünün vurgulu bölgesi mini figürde işaretli (`highlighted_region`, free teaser) + "Beden bahçesine gir".
- **Tam ekran:** interaktif melothesia haritası. Bölgeye dokun → o bölgenin geleneksel bitki ailesi listesi — **Keşif sonuç ızgarası komponentinin yeniden kullanımı** (beden ekseni ön-dolu sorgu) → `herb_detail`.
- **Free/Pro:** harita gezinme + bölge→bitki listesi free (KS-1=b ile tutarlı: motor free). Bugünün kişisel `note_text`'i ("baş & omuzlar — nazik gerinme" tarzı, kilo-nötr) **pro** (kontrat: plus→pro).
- **Güvenlik:** bölge adları anatomik-yalın, hastalık adı yok; not metni hareket/dinlenme davetidir, tedavi dili yasak. Ekran sonunda hatırlatma satırı.

### G6 · Element dengesi (karo → tam ekran, pro)

- **Karo:** free'de kilitli teaser (kontrat metniyle: "Bugünkü dengen — natal+transit analizi"); pro'da bugünün baskın/eksik element özeti tek satır.
- **Tam ekran (pro):** `balance_analysis` çıktısı: baskın/eksik element + dengeleyen küme (besin/renk/ses/hareket/nefes — vault `element_balance`) + kişisel, beden-nötr `analysis_text`.
- **Veri:** kontrat D bloğu aynen; formül açık soruları (yalnız Güneş mi, tüm harita sayımı mı; dominant_light harmanı) **pipeline tarafında** çözülür — bu spec ekran davranışını sabitler, formülü değil.
- **Haller:** natal yok → pro'da bile teaser + davet (Ana Sayfa slot'uyla tutarlı). 
- **Güvenlik:** "besin" ögesi yiyecek **temaları/renkleri** düzeyinde kalır; porsiyon/diyet/doz dili yasak (B-üretim kriteri). Ekran sonu hatırlatma satırı.

---

## 3. `garden_state` kontratı (Ana Sayfa B6 tüketicisi)

```yaml
garden_state:
  koleksiyon_toplam: int
  raf_ilerlemeleri: {gezegen: "kazanilan/toplam"}
  bugun_kazanildi: bool
  uyuyan_kart: {var: bool, herb_id: id|null, kalan_gun: 0-3}
  mevsim_konugu_aktif: bool
  ay_albumu: {donem: "YYYY-MM", kazanilan: int}
kaynak: earn_events + herb seti (yerel-öncelikli; offline görüntülenebilir)
```
Ana Sayfa çip metin örnekleri (taslak): `bugun_kazanildi=false` → "Bugünün kartı seni bekliyor" · `uyuyan_kart.var` → "Uyuyan bir tohumun var — 2 gün".

## 4. Haller stratejisi

- Transit yok → G1 nötr, G2 stale-cache; G3/G4 tamamen çalışır (kazanım yereldir).
- Offline: Herbaryum ve kazanım tam işlevsel (yerel + sonradan senkron); yalnız theme_line/harita notu cache'ten.
- Yeni kullanıcı (koleksiyon 0): raf önizleme silüetlerle + tek davet satırı — boş vitrin hissi yok, "ilk kartın bugün seni bekliyor".

## 5. Free/Pro matrisi

| Yüzey | Free | Pro |
|---|---|---|
| G1–G3 | tam | aynı |
| G4 Herbaryum | koleksiyon + kazanım + Gece Açanlar + güncel ay albümü + paylaşım — tam | + günlük ek müttefik (`pro_extra_ally`) + geçmiş albüm arşivi |
| G5 harita | gezinme + bölge listeleri + bugünün bölge vurgusu | + kişisel `note_text` |
| G6 denge | kilitli teaser | tam analiz |
| herb_detail | hikâye + ritüel + güvenlik etiketleri | + kanıt köprüsü (ayrı blok) |

## 6. Kişiselleştirme merdiveni

- **S0/S1:** her şey transit+genel; G6 teaser, G5 notu kilitli. Hiçbir blok natal'siz kırılmaz.
- **S2 (pro):** G6 analiz + G5 not + `pro_extra_ally`. Natal yoksa pro'da davet (tutarlı desen).

## 7. Navigasyon

Giriş: sekme · Ana Sayfa B3 (müttefik) · Ana Sayfa B6 çipi (garden_state).
Çıkış: G2/G4 → `herb_detail` · G5 → harita ekranı → Keşif-ızgara komponenti · "keşfet" ihtiyacı → Keşif sekmesi (deep-link; Bahçe içinde ikinci keşif yüzeyi yok).

## 8. Veri hazırlık & launch-blocker

| Durum | Öğe | Etkilenen |
|---|---|---|
| **BLOKER** | Bitki kartı seti — story_narrative + ritual alanları dahil (B-üretim #2 kapsam notu) | G2, G4, herb_detail |
| **BLOKER** | Motor tablo (gezegen aileleri + beden ekseni) (B-üretim #1) | G4 rafları, G5 |
| Yeni kalem | Bitki→mevsim eşleme tablosu (R1.2=c) | G4 |
| Yeni kalem | `earn_actions` whitelist config | G3 |
| Yeni kalem | `kozmik_olay` etiketleri (bitki kartı setine alan; az sayıda kart) | G4 |
| Görsel iş | Paylaşım şablonları ×3 (tek kart · albüm sayfası · nadir çerçeve) | G4 |
| Görsel iş | Kart silüet + kazanılmış illüstrasyon seti (tek stil) | G4 |
| Pipeline | balance_analysis + note_text üretimi ve formül soruları (Claude Code) | G5, G6 |

## 9. Maliyet & cache

- G1–G4 LLM üretimi gerektirmez (görsel state + kural + vault okuma).
- Per-user pro üretimler: `note_text`, `balance_analysis` — zamanlama kararı pro theme_line ile ortak (tek karar noktası, pipeline).

## 10. Güvenlik/ton kontrol listesi

- [ ] `source_ref` hiçbir yüzeyde görünmüyor
- [ ] `ritual` içerikleri tüketim/hazırlama içermez (niyet, taşıma, gözlem, bakım sembolizmi) — **B-üretim kriteri**
- [ ] Denge "besin" ögesi tema/renk düzeyinde; porsiyon/diyet/doz yok; kilo-nötr dil
- [ ] Bölge adları yalın; hastalık adı/teşhis yok; kader dili yok
- [ ] Kazanım/telafi metinlerinde ceza-borç çerçevesi yok; geri sayım baskısı yok
- [ ] G5/G6 tam ekranlarında ekran-sonu hatırlatma satırı; tam disclaimer herb_detail'de
- [ ] Kanıt köprüsü yalnız pro herb_detail'de, ayrı blokta; sembolik metinle aynı cümlede asla

## 11. Kabul kriterleri (RN fazı)

1. Koleksiyon-0 kullanıcı boş vitrin görmez; ilk kart daveti nettir.
2. Kazanım tek eylemle tetiklenir; uyuyan kart telafisi aynı eyleme biner (ikinci görev istemez).
3. Uçak modunda Herbaryum tam gezilebilir; kazanım offline işlenir, sonra senkron.
4. Mevsim-dışı silüet daima dönüş mevsimini söyler; hiçbir yerde geri sayım yok.
5. G6 free teaser'ı yerleşimi bozmaz; pro açılınca layout zıplamaz.
6. Ambient gece hali dahil hiçbir yüzeyde koyu renk bloğu yok.

## 12. Açık kararlar

- R1.1 — ✅ b (eylem-bazlı) final teyit, 5 Tem 2. tur (§2/G3)
- R1.3 — ✅ koleksiyon free + `pro_extra_ally` olarak FİNAL (tier kilidi seçeneği geçersiz; guven_tier güvenlik sistemi ayrı ve geçerli) (§2/G4)
- R1.4 — ✅ c (nazik telafi) final teyit, 5 Tem 2. tur (§2/G4)
- Aylık Albüm — ✅ eklendi (takvim ayı; free güncel ay, pro arşiv) (§2/G4)
- R1.5 — ✅ c (3 şablon; yalnız kart yüzeyi paylaşılır) (§2/G4)
- Pro üretim zamanlaması (cron vs on-demand) — pipeline, tek noktadan
- `dominant_light` formülü + element sayım yöntemi — pipeline (kontrat açık soru 1–2)
- İstenirse: sifa-bahcesi-veri-kontrati v1.1 güncellemesi (3 düzeltmenin kaynağa işlenmesi) — final review'a not
