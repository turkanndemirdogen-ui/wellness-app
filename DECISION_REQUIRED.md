# DECISION_REQUIRED.md — Ürün Sahibi Kararı Bekleyen Maddeler

Tarih: 2026-07-14 · Kaynak: repository cleanup (Governance §3/§9 gereği raporlanıyor; hiçbiri kendiliğinden çözülmedi)

## 1. `bitki-kartlari-master.json` ↔ seed pipeline entegrasyonu — ✅ ÇÖZÜLDÜ (2026-07-14, Seçenek A onaylandı ve uygulandı)

> Uygulanan: `scripts/lib/content-io.mjs` → `CARD_FILES = ['bitki-kartlari-master.json']`; 4 eski kart dosyası aktif ağaçtan çıkarıldı (git geçmişinde). `seed:generate` yeniden üretildi (37/37 kart eşleşti), `db:check` geçti. DB'ye yükleme hâlâ #2'ye bağlı.


**Durum:** Editoryal FİNAL 37 kart `content/bitki-kartlari-master.json`'da (şema uyumlu: `herb_id`, `tek_satir`, `story_narrative`, `ritual`). Seed pipeline (`scripts/lib/content-io.mjs` → `CARD_FILES`) kart metnini hâlâ `bitki-kartlari-{pilot,parti1..3}.json`'dan (eski metin) okuyor.

**Neden karar gerekli:** Çözüm bir **kod değişikliği** gerektirir; cleanup görevi kod/runtime davranışı değiştirmeyi yasaklıyor.

**Seçenekler:**
- **A (önerilen):** `content-io.mjs`'te `CARD_FILES = ['bitki-kartlari-master.json']` yapılır (tek satır); 4 eski kart dosyası git geçmişine emanet edilip aktif ağaçtan çıkarılır. Motor tablo dosyaları (`motor-tablo-*`) etkilenmez.
- **B:** Master'daki metinler 4 parti dosyasına geri işlenir (kod değişmez; içerik dosyası düzenlemesi) ve master kaldırılır.
- Karar verilene dek iki sürüm bilinçli olarak yan yana duruyor (kayıt: `PROJECT_HEALTH_REPORT.md` §3.2).

## 2. Editoryal finallerin Supabase'e yüklenmesi — ✅ ÇÖZÜLDÜ (2026-07-14, kullanıcı onayıyla uygulandı)

> Uygulanan: 0003_seed_content.sql'in birebir eşdeğeri idempotent upsert (repo'nun push-chunks ile aynı service_role kanalı; tek seferlik script repo dışında/scratchpad'de). Sonuç: herbs 37 + quizzes 12 + vault_sources 46 upsert. Doğrulama: db:check ✓ · test:visibility ✓ · test:retrieval ✓ · anon-key okuma ile canlı metin ≡ repo editoryal metin (papatya + 3 quiz örneklemi).


**Durum:** Repo'daki quiz/modül metinleri artık editoryal FİNAL; canlı DB'deki `quizzes`/`herbs` içerikleri eski sürüm (db:check yapısal olarak geçti, metin farkı doğal).

**Neden karar gerekli:** Görev kuralı 8: "Supabase'e veri yazma ve migration üretme cleanup kapsamında değildir." Ayrıca seed üretimi #1 kararına bağlı (kart metni hangi dosyadan gelecek).

**Önerilen akış (onay sonrası, ayrı görev):** #1 kararı → `npm run seed:generate` → üretilen SQL'in panelden/kullanıcı eliyle uygulanması → `npm run db:check` + `test:visibility` ile doğrulama.

## 4. Deniz Cadısı arketipinin modül köprüsü (KD-01 kalıntısı) — KARAR BEKLİYOR

**Durum:** KD-01 ile Breathwork modülü kapsam dışı; ancak `content/quiz-ay10-cadi.json` içinde Deniz Cadısı arketipinin `"modul": "breathwork"` yapısal köprüsü (ve açılış tanıtımındaki "Deniz→breathwork" ifadesi) hâlâ bu modüle işaret ediyor. Diğer 6 cadı türünün köprüleri aktif modüllere gidiyor (döngü, herbaryum, kozmos, keşif, skincare, journal).

**Neden karar gerekli:** Deniz Cadısı'na yeni bir "köşe" seçmek ürün/editoryal karar (aday: `mood` — duygu/su teması ile doğal uyum; ama bu öneri bağlayıcı değil). Yeni değer belirlenince JSON güncellenir + seed yeniden üretilip yüklenir. Mobil uygulama `modul` köprüsünü henüz render etmediği için acil kullanıcı etkisi yok.

## 3. `KALINAN-YER.md`'nin arşivlenmesi (onay)

**Durum:** Oturum-durum günlüğü `docs/archive/history/`e taşındı; süreklilik rolünü Governance + Architecture (canonical) üstlendi ve son kaydı (KS-1 Keşif kart tasarımı) Architecture §12'de zaten mevcut.

**Neden karar gerekli:** Bu dosyayı aktif çalışma aracı olarak kullanmaya devam etmek isteyebilirsin. Onaylarsan arşivde kalır; istersen `git mv` ile köke geri alınır (tek komut, kayıpsız).
