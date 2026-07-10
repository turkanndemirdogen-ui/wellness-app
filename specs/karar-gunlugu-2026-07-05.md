---
belge: karar-gunlugu-ekran-specleri
tarih: 2026-07-05
amac: "Ekran spec oturumunda kilitlenen kararların toplu kaydı. ARCHITECTURE_DECISIONS.md'ye ek; Claude Code handoff referansı. Tek doğru kaynak: dört spec dosyası."
dosyalar: [ana-sayfa-spec.md v1.2, kesif-spec.md v1.1, bahce-spec.md v1.2, sohbet-spec.md v1.1]
---

# Karar Günlüğü — Sekme Ekran Spec'leri (5 Temmuz 2026)

## Yapısal kararlar

- **AS-1 · Hub-and-spoke:** modül tam ekranları (mood, journal, reminders, döngü, skincare, Akış) Ana Sayfa stack alt-ekranlarıdır; sekmeler saf tematik. Bildirimler modüle deep-link verir.
- **Kademe:** free/pro (2 kademe). Bahçe kontratındaki plus+premium → pro'ya katlandı; 2-vs-3 kararı RevenueCat adımına not.
- **Tek paylaşılan `herb_detail` ekranı:** Keşif, Bahçe ve Ana Sayfa aynı komponenti açar; zorunlu disclaimer burada yaşar.
- **Tek üretim, iki yüzey:** `daily_remedy.theme_line` (Ana Sayfa B2 + Bahçe G2) ve `daily_remedy.herb_ally` (Ana Sayfa B3 + Bahçe G2) tek nesnedir.
- **`garden_state` kontratı:** bahce-spec §3'te tanımlı; Ana Sayfa B6 tüketicisi.
- **Disclaimer yerleşimi:** kompakt kartlarda yok; detay ekranlarında tam; Keşif ve Bahçe G5/G6'da ekran-sonu tek hatırlatma satırı.

## Ana Sayfa (ana-sayfa-spec v1.2)

- Kompozisyon **B "Günlük Pusula"**: gün başlığı+ay çipi · kozmik hava · bitki kartı (hero) · check-in şeridi · günün sözü · dinamik slot. Sıra: ritüel → eylem → tefekkür.
- Chat baloncuğu yok; Sohbet sekmeden.
- Dinamik slot önceliği: natal-davet → döngü fazı → quiz penceresi → Bahçe çipi.
- Söz: free **global** (herkese aynı), pro havuzdan kişisel **seçim**. Bitki kartı hatada **stale-cache**.
- Check-in tamamı free (loglama veri temelidir, gelir kapısı değil).

## Keşif (kesif-spec v1.1)

- Kompozisyon **C "Gök-rehberli"**; iki mod: keşif (gök+çipler+raf) ↔ sonuç (grid).
- **KS-1 = b:** motor (4-eksen filtre) free; derinlik + natal katman (rozet, "Haritanda bugün", kişisel sıralama) pro.
- Eksenler: gezegen · burç · beden bölgesi · tat/enerjetik. **"Semptom" kelimesi yasak.** Eksen içi tek seçim, eksenler arası kesişim; boş kesişimde gevşetme önerisi.
- Çipler tek-eksen ön dolumu; türetme kural tablosuyla (LLM'siz).
- **Melothesia (a):** interaktif harita Bahçe'de; Keşif'te bölge yalnız filtre çipi. Bahçe "keşfet" karosu → Keşif deep-link.
- T0 sorgu düzeyinde dışlanır; T1–T3 kartlarda uyarı çipi daima görünür.

## Bahçe (bahce-spec v1.1)

- Kompozisyon **C**: ritüel üst (ambient gök + günün müttefiki + kazanım satırı) + koleksiyon alt (Herbaryum + beden/denge karoları). Bilgi şeridi yok; gök **atmosferdir**.
- **R1.2 = c:** 7 kalıcı gezegen rafı + botanik mevsimsellik ("Mevsimin Konukları"). Geri sayım yok; mevsim-dışı silüet dönüş mevsimini dürüstçe söyler.
- **R1.4 = c (nazik telafi):** kaçan kart uykuya dalar — tek slot, 3 gün; günün ilk eylemi hem bugünü hem uyuyanı getirir. Ceza/borç dili yasak.
- **earn_actions v1:** müttefik hikâyesini açmak · mood · journal · hatırlatma tamamlama — tek eylem yeter.
- **pro_extra_ally:** pro günde 1 seçmeli kartı hikâyesini açarak kazanır; koleksiyonun kendisi free.
- **Kontrat düzeltmeleri (sifa-bahcesi v1 üzerine):** `source_ref` hiçbir yüzeyde görünmez · "keşfet sınırlı" gating satırı geçersiz (KS-1=b) · 3 kademe → pro.
- **`ritual` içerik kuralı:** tüketim/hazırlama asla — niyet, taşıma, gözlem, bakım sembolizmi.

## Sohbet (sohbet-spec v1.1)

- Kompozisyon **C**: bağlam-karşılamalı tek akış; log-bazlı karşılama + dinamik başlatıcı çipler (şablon+kural, LLM'siz).
- **Sembolik satır = ii:** kanıt gövde; yalnız ilgiliyse tek etiketli yan-satır ("Sembolik ·") + Keşif köprüsü. Kendiliğinden astro sohbeti yok; hassas/kriz bağlamında sembolik satır tamamen susar.
- **SB-1 = b (özellik kapısı):** günlük sohbet free (görünmez adil-kullanım tavanı; kesinti asla mesaj ortasında); pro = haftalık bakış + oturumlar-arası desen hafızası.
- **Kriz:** mood/journal `safety.kriz` bloklarına birebir; kaynaklar app config'ten (sabit gömme yok, Türkan doğrular); **her kademe ve kotadan mutlak muaf.**
- Karşılama hassas log içeriğini kendiliğinden alıntılamaz.

## Ortak açık noktalar (pipeline / Claude Code)

- Pro üretimlerin zamanlaması (cron vs on-demand) — tek noktadan kararlaştırılacak.
- `dominant_light` formülü + element sayım yöntemi (Bahçe kontratı soru 1–2).
- İsteğe bağlı: sifa-bahcesi-veri-kontrati v1.1 (3 düzeltme kaynağa işlenebilir).

## Konsolide B-üretim listesi (bağımlılık sıralı)

**Launch-blocker: 1–3** (bunlar olmadan Ana Sayfa ve Keşif yayınlanamaz).

| # | Kalem | Not |
|---|---|---|
| 1 | Motor tablo + eksen değer sözlüğü | her şeyin bloker'ı |
| 2 | Bitki kartı seti | kapsam genişledi: kompakt alanlar + story_narrative + ritual + açılış bitkisi (1 adet) |
| 3 | Söz havuzu | atıfsız; kamu malı/özgün; theme_tags |
| 4 | Natal günlük şablonları | theme_line_pro + Sohbet sembolik yan-satır kalıpları |
| 5 | Arketip quiz maddeleri | tasarım kilitli, madde DB'si yok |
| 6 | Çip türetme kural tablosu (~10) | Keşif K2 |
| 7 | Mevsim→enerjetik mini eşleme | Keşif K2 |
| 8 | Koleksiyon seti (8–12 tema) | Keşif K5 |
| 9 | Bitki→mevsim eşleme tablosu | Bahçe G4 (R1.2=c) |
| 10 | earn_actions whitelist config | Bahçe G3 |
| 11 | Karşılama+çip şablon seti (~15–20) | Sohbet S1–S2 |
| 12 | Haftalık bakış şablonu | Sohbet S4 |
| 13 | TR kriz kaynak listesi (app config) | Türkan doğrular; sabit gömme yok |
| 14 | mood.json `quick_set` bayrağı | Ana Sayfa B4, şema eki |

**Sıra önerisi:** 1 → 2 → (6, 7, 8, 9 paralel; 2'den beslenir) → 3 → 4 → (11, 12) → 5. Kalem 13–14 bağımsız, her an yapılabilir.
