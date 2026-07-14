# Claude Code Başlangıç Rehberi — Yarın İçin
> Bu paket wellness uygulamasının TÜM içerik + mimari + spec'lerini içerir. Claude Code build'i buradan başlatır.

## 1 · İLK OTURUM SIRASI (önce bunlar)
1. **Bu zip'i proje klasörüne aç** → `content/`, `specs/`, kök dosyalar yerine otursun.
2. **ARCHITECTURE_DECISIONS.md OKU** — tüm kilitli kararlar burada (canlı indeks). Herhangi bir şey belirsizse önce buraya bak.
3. **Gerekli anahtarlar** (sende olmalı, zip'te YOK — güvenlik):
   - OpenAI API anahtarı ($5/ay limit öner) — ilk embedding anında
   - Supabase URL + anon/service key → `.env`
4. **Base faz kur** (rag-base-spec.md): vektör store (pgvector, Frankfurt/eu-central-1) → operasyonel şema → RAG ingest pipeline → app shell (React Native + Expo).

## 2 · KRİTİK TEKNİK BLOK — Swiss Ephemeris fizibilitesi
Kozmos'un natal/transit hesabı buna bağlı (kozmos-motor-spec §8). İLK oturumda test et:
- Lisans: AGPL (sunucu yükümlülüğü) vs tek-seferlik ticari lisans — güncel ücret DOĞRULA (veri yok).
- Deno/Edge uyumlu port (WASM aday) → natal + transit açı hesap POC.
- Çözülene kadar: güneş-bazlı deneyim çalışır (KZ-1=b saat-esnek); tam natal beklemede.

## 3 · İÇERİK YERLEŞTİRME
- `content/*.json` idempotent upsert komutu yaz (herb_id/soz_id/rule_id anahtarıyla).
- **agent_only DUVARI (kritik):** RAG visibility filtresi kur → 7 agent_only kaynak (manifest'te) kullanıcı çıktısına ASLA sızmaz. Fail-closed: visibility eksik → agent_only. (kozmos-motor-spec §0)
- Motor eşleştirme motoru: engine-rules ↔ motor-tablo ↔ mevsim-haritasi ↔ cip-turetme-kurallari.

## 4 · İÇERİK ENVANTERİ (hazır, build'e yeter)
- **37 bitki** motor tablo (gezegen/element/beden/tat/enerjetik/mevsim/güvenlik) + 37 kart
- **12 quiz ayı** (rotasyon + Baskın/Yükselen)
- **Gökyüzü motoru:** 40 kural/80 varyant + engine-config
- **92 söz** + üretim kuralları (90-gün seçim mantığı + havuz→120 Claude Code)
- **Güvenlik:** contraindications.json (38 madde) + kriz-kaynaklari-tr.json + skincare-ingredients.json (41 bileşen) + cycle-beslenme.json
- **journal-transit-sorulari.json** (pro, 33 soru, gökyüzü motoruna bağlı)

## 5 · SPEC ENVANTERİ (13 modül)
ana-sayfa · kesif · sohbet · bahce · kozmos-motor · mood-journal · skincare · cycle(*)  · neurogames · akis · gunun-sozu · haftalik-bakis · hook-sentez · illustrasyon-uretim
(*) cycle-beslenme content'te; ekran spec ARCH'ta özetli.

## 6 · İLLÜSTRASYON (B1 kararı)
- Kendi marka LoRA'sı (SD/FLUX, ComfyUI) + public-domain gravür (Köhler's) eğitim setine → botanik doğruluk.
- Silüet = tam görselden programatik türetme (ayrı çizim yok).
- illustrasyon-uretim-spec.md §6 görev listesi.

## 7 · MEDYA MODÜLLERİ (build'i BLOKLAMAZ, sonra)
- **Nefes:** kod-animasyon (büyüyen daire, nefes-senkron) — Claude Code yapar. Ses + "doğru yapılış" gösterimi = Türkan açık kararı.
- **Yoga:** stok form-videosu (Türkan tedarik) + oynatıcı kodu.
- **Meditasyon:** stok döngü-video + lisanslı müzik + seslendirme (Türkan tedarik) + senaryo (sonra üretilecek).
- ⚠ Claude Code AI-VİDEO ÜRETEMEZ; kod-animasyon evet, mp4 hayır.

## 8 · YAYIN ÖNCESİ (TESLIM-CHECKLIST.md'de tam liste)
En üstte: TR polisaj tek redaktör turu · mevsim botanik teyidi · 182 kriz hattı teyidi · vault-dışı uzman teyidi · AI görsel telif · bilim-quizi "esinlenen" ibaresi.

## KLAUDE CODE MEKANİKLERİ (hatırlatma)
Shift+Tab (Plan Mode) · @dosya referans · Esc/Esc-Esc (duraklat/geri) · /compact (uzun oturum) · # (kalıcı kural)
