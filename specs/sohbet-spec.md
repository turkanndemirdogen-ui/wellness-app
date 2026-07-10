---
belge: sohbet-spec
surum: v1.1
amac: "Sohbet sekmesi içerik + davranış spec'i. B-katmanının (chatbot) kullanıcı yüzeyi; kişiselleştirme katmanı §3–5 tüketim deseninin ekran karşılığı."
dil: tr
girdiler: [kisisellestirme-katmani.md, mood.json (safety), journal.json (safety), module-content-standard.md, ana-sayfa-spec.md, rag-base-spec.md (repo, D2.4)]
onaylar: "Kompozisyon C (bağlam-karşılamalı akış) · sembolik satır = ii · SB-1 = b (özellik kapısı) — Türkan, 2026-07-05 · ara kararlar final review'a tabi"
acik_kararlar: []
---

# Sohbet — İçerik & Davranış Spec v1.0

## 0. Ekranın rolü

- **B-katmanının yüzü:** modül içerik DB'leri + kullanıcı logları + astro_context'i tüketir (kişiselleştirme §3); kullanıcıya **psikoloji/kanıt temelli öz-keşif** eşlikçisi olarak konuşur.
- **Çift-akış kuralı (§5) ekranda:** kanıt akışı mesajın gövdesidir; sembolik içerik yalnız ilgiliyse, ayrık stilde tek yan-satır olarak görünür ("Sembolik ·" etiketi) — asla aynı cümlede, asla nedensellik köprüsüyle.
- **Astroloji burada özellik değildir:** kendiliğinden astro sohbeti açılmaz; kullanıcı sorarsa kısa etiketli yanıt + Keşif köprüsü.
- Teşhis/etiketleme yok; kaynak adı yok; `agent_only` (D2.4) içerik hiçbir yanıtta görünmez/alıntılanmaz — agent onu yalnız içgörü süzmek için kullanır.

## 1. Blok dizilimi

| # | Blok | Ne |
|---|---|---|
| S1 | Karşılama kartı | log-bazlı, valence-nötr açılış |
| S2 | Başlatıcı çipler | 2–3 dinamik + 1 sabit |
| S3 | Konuşma akışı | mesajlaşma çekirdeği |
| S4 | Haftalık bakış | çipten açılan hafif oturum |
| S5 | Geçmiş konuşmalar | liste (header'dan) |
| S6 | Güvenlik katmanı | görünmez davranış katmanı |

---

## 2. Blok spec'leri

### S1 · Karşılama kartı

- **İçerik:** kanıt-taraflı, yargısız tek-iki satır: "Bu hafta 4 kayıt tuttun. Nereden başlamak istersin?" 
- **Kritik kural:** karşılama **hassas log içeriğini kendiliğinden manşet yapmaz** — kriz bayraklı ya da yoğun-düşük-mod kayıtları alıntılanmaz; kullanıcı açarsa akış oradan derinleşir. Son log kriz bayraklıysa karşılama daha da sadeleşir: "İstersen bugün nasıl olduğundan başlayalım."
- **Veri:** `*_logs` son-7-gün sayımları (mood/journal/reminder). 
- **Boş hal (hiç log yok):** "Merhaba — bugün ne konuşmak istersin?" + sabit çip; log yokluğu vurgulanmaz, suçluluk imâsı yok.

### S2 · Başlatıcı çipler (kural tablosu, max 3)

| Öncelik | Koşul | Çip |
|---|---|---|
| 1 | son 48 saatte mood logu var (kriz bayraksız) | "Dünkü '{label_tr}' kaydına bakalım mı?" |
| 1′ | son log kriz bayraklı | nazik varyant: "Bugün nasılsın, oradan başlayalım mı?" (içerik alıntısız) |
| 2 | son bakıştan ≥7 gün **ve** haftada ≥3 log | "Bu haftanın deseni" → S4 |
| 3 | sabit | "Aklımdakini yazacağım" (serbest giriş) |

- **Üretim:** şablon setinden kural ile (LLM'siz) — karşılama+çip şablon seti **B-üretim yeni kalemi** (~15–20 şablon; Türkçe cila Türkan).

### S3 · Konuşma akışı

- **Çıktı biçimi:** kanıt gövde (`dogrulanmis_cekirdek` çerçevesi, modül DB'lerinden); gerekiyorsa altında ayrık stilde tek satır: "Sembolik · Bugün Ay iç-dünya temanı vurguluyor olabilir" + "Keşif'te aç" mini köprü. Sembolik satır opsiyoneldir ve ilgisizse hiç görünmez.
- **Girdi deseni:** kişiselleştirme §3 birebir: modül DB + natal/astro_context_daily + ilgili loglar + guardrail (contraindications + modül safety).
- **Davranış kuralları:** teşhis/etiket yok · "bir uzmana danış" çerçevesi korunur · bitki konuşulursa gelenek çerçevesi + doz/tüketim yasak · journal anti-ruminasyon kuralı sohbette de geçerli (aynı döngü tekrarında perspektif-kaydırma; ısrar yok) · yanıtlar kısa ve taranabilir, akademik blok yok.
- **Hafıza:** oturum-içi bağlam free; oturumlar-arası desen hafızası pro (SB-1=b). Şeffaflık: §S6.

### S4 · Haftalık bakış (hafif oturum — pro)

- **Girdi:** son 7 gün logları + döngü fazı (modül aktifse).
- **Çıktı (3 parça):** (1) kanıt-taraflı hafta özeti — sayı/desen, yargısız; (2) tek nazik yansıma sorusu; (3) opsiyonel tek sembolik yan-satır (etiketli).
- **Kapanış köprüsü:** "Bu özeti günlüğüne ekleyeyim mi?" → journal kaydı.
- **Free görünümü:** kilitli teaser kartı ("Haftalık bakış — desenlerini birlikte okuyalım").
- **Maliyet:** haftada 1 toplu çağrı/kullanıcı; şablonu **B-üretim yeni kalemi**.

### S5 · Geçmiş konuşmalar

- Header'dan liste: otomatik başlık + tarih; yeniden adlandır/sil. v1'de arama yok (liste yeterli; şişerse v1.1).

### S6 · Görünmez güvenlik katmanı

- **Kriz protokolü — `mood.safety.kriz` + `journal.safety.kriz` alanlarına birebir bağlanır:** tanı koyma yok · klinik güvenlik-değerlendirme sorusu yok · sıcak, doğrudan dille endişe · bölgeye uygun **güncel** kriz kaynakları **app config'ten** gelir (spec'e/koda sabit hat gömülmez; liste Türkan tarafından doğrulanır ve güncel tutulur) · yöntem/araç adı verilmez, tarif edilmez.
- **Kriz akışı her kademede ve her kotada muaftır** — SB-1 hangi seçenekle kapanırsa kapansın sabit kural: kriz anında hiçbir sayaç, paywall, erteleme devreye giremez.
- **Hassas bağlamda ton otomatik yumuşar; sembolik yan-satır hassas/kriz bağlamında tamamen susar.**
- **Şeffaflık:** ilk açılışta tek seferlik kart: "Sohbet, sana eşlik edebilmek için uygulamadaki kayıtlarını okuyabilir" + ayarlar bağlantısı (KVKK açık rızası onboarding'de; bu bir hatırlatmadır).

---

## 3. Haller stratejisi

- Offline: mesaj gönderilemez → nazik tek satır + geçmiş konuşmalar okunabilir kalır.
- Yanıt gecikmesi: sakin yazıyor-göstergesi; zaman aşımında yumuşak yeniden-dene.
- Boş log + ilk kullanım: S1 boş hali + şeffaflık kartı; boş sayfa hissi yok.

## 4. Free/Pro matrisi *(SB-1 = b, onaylı)*

| Yüzey | Free | Pro |
|---|---|---|
| S1–S2 | tam | aynı |
| S3 sohbet | tam (görünmez adil-kullanım tavanı; aşımda nazik erteleme — **kriz muaf**) | tavan geniş |
| S3 hafıza | oturum-içi | + oturumlar-arası desen hafızası |
| S4 haftalık bakış | kilitli teaser | tam |
| S6 kriz | **tam — kademesiz** | **tam — kademesiz** |

## 5. Kişiselleştirme merdiveni

- **S0/S1:** loglar varsa kişisel; natal yoksa sembolik satır genel-gök düzeyinde ya da hiç. Hiçbir şey kırılmaz.
- **S2 (pro):** desen hafızası + haftalık bakış + natal-bağlı sembolik satır (ilgiliyse).

## 6. Navigasyon

Giriş: sekme · Ana Sayfa kartlarından bağlamsal köprüler (ör. mood modülünden "bunu Sohbet'te aç").
Çıkış: sembolik yan-satır → Keşif · haftalık bakış → journal kaydı · kriz kartı → arama/kaynak eylemleri.

## 7. Veri hazırlık

| Durum | Öğe | Etkilenen |
|---|---|---|
| Yeni kalem | Karşılama + çip şablon seti (~15–20) | S1, S2 |
| Yeni kalem | Haftalık bakış şablonu | S4 |
| App config | TR kriz kaynak listesi (Türkan doğrular; sabit gömme yok) | S6 |
| Hazır ✓ | Modül içerik DB'leri (mood, journal, cycle, goals, reminders, skincare) | S3 |
| Servis | astro_context_daily + natal (Claude Code B fazı) | S3, S4 |
| Açık not | "Hedefler/verimlilik ayrı modül mü" (kişiselleştirme relevance map) — bloklamaz | S3 |

## 8. Maliyet

- En maliyetli sekme: S3 mesajları Claude API. Karşılama/çipler kural+şablon (LLM'siz). S4 haftada 1 toplu çağrı.
- Adil-kullanım tavanı görünmez teknik guard'dır; sayaç UI'ı yoktur (marka: baskı yok). Kriz muafiyeti mutlak.

## 9. Güvenlik/ton kontrol listesi

- [ ] Teşhis/etiket/hastalık adı yok; "uzmana danış" çerçevesi var
- [ ] Kriz: tanı yok · değerlendirme sorusu yok · yöntem adı/tarifi yok · kaynaklar config'ten · kademe/kota muafiyeti mutlak
- [ ] Sembolik satır daima etiketli + ayrık stil; hassas/kriz bağlamında tamamen susar
- [ ] Kanıt–sembolik aynı cümlede asla; sahte nedensellik yok
- [ ] Kaynak adı ve `agent_only` içerik hiçbir yanıtta görünmez
- [ ] Karşılama hassas log içeriğini kendiliğinden alıntılamaz
- [ ] Paywall/erteleme hiçbir zaman mesaj ortasında; yalnız özellik kapısında

## 10. Kabul kriterleri (RN + agent fazı)

1. Kriz test setinde hiçbir kota/paywall/erteleme araya girmez; kaynak kartı config'ten doğru gelir.
2. Kırmızı-takım sızıntı testi: yanıtlarda kaynak adı + `agent_only` alıntı sayısı = 0.
3. Sembolik satır yalnız etiketli/ayrık stilde; kriz senaryolarında hiç görünmez.
4. Log'suz ilk açılışta boş sayfa yok; şeffaflık kartı bir kez gösterilir.
5. Haftalık bakış çıktısı 3-parça yapıya uyar ve journal'a tek dokunuşla kaydedilir.
6. Tüm görünür metin Türkçe, kısa ve taranabilir.

## 11. Açık kararlar

- SB-1 — ✅ b (özellik kapısı) olarak kilitlendi (§4)
- Pro üretim zamanlaması — pipeline ortak notu
- S5 arama — v1.1 adayı
