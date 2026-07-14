# REMOVED_MODULES_REPORT.md — KD-01 Modül Kaldırma Raporu

Tarih: 2026-07-14 · Karar: KD-01 (`KD-01-modul-kaldirma.md`, Türkan, 2026-07-13) · Repo: kök (mobile'a dokunulmadı) · Commit: henüz yok

**Kapsam dışına çıkarılan modüller:** Nefes/Breathwork · Yoga · Meditasyon · Neurogames

## 1. Yapılan işlemler

| # | İşlem | Dosya | Ayrıntı |
|---|---|---|---|
| 1 | Arşive taşındı (git mv, silinmedi) | `content/neurogames-v1.json` → `docs/archive/removed-modules/neurogames/neurogames-v1.json` | Modül içerik dosyası; DB'ye hiç seed edilmemişti |
| 2 | Gelecek-özellik adayları kaldırıldı | `specs/bahce-spec.md` (R1.1 kazanım kuralı) | `earn_actions` genişletme adayları `(nefes, meditasyon, yoga, neurogame, quiz, Akış)` → `(quiz, Akış)`; dosyanın başka bölümüne dokunulmadı |
| 3 | Modül referansı kapsam-dışı işaretlendi | `specs/akis-spec.md` §3 | "Neurogames aylık aynasıyla aynı felsefe" → "Baskısız-ayna felsefesi" + KD-01 notu (felsefe korunuyor) |
| 4 | Modül eylemi listeden çıkarıldı | `specs/akis-spec.md` §4 | Sabit modül-eylemleri `(mood/journal/nefes...)` → `(mood/journal...)` |
| 5 | Bölümler kapsam-dışı işaretlendi (silinmedi) | `specs/hook-sentez-spec.md` §4 Meditasyon&Nefes · §5 Yoga · §6 Neurogames | Her başlığın altına `[KAPSAM DIŞI — KD-01]` blok notu; tarihsel benchmark kaydı korunuyor |
| 6 | Roadmap maddeleri çıkarıldı | `specs/hook-sentez-spec.md` §14 Veri boşlukları | Meditasyon içerik havuzu · Yoga stok klip araştırması · Neurogames oyun listesi → listeden çıkarıldı, tek satırlık KD-01 kaydı bırakıldı |
| 7 | Tarihsel kararlar etiketlendi (silinmedi) | `docs/architecture/ARCHITECTURE_DECISIONS.md` §11 | Üç maddeye `[DURUM: İPTAL — v1.0 ve planlanan kapsam dışında]`: Neurogames v1 · Breathwork (nefes) KISMİ · Medya modülleri üretim yolu. (Önceki turda: ilke 8'e `[İPTAL — KD-01]`, §3 Sonraya listesinden dört modül, yeni §13 KD-01 kaydı.) |

## 2. Dokunulmayanlar (bilinçli)

- **Genel wellness dili** (KD-01 §2.6/2.7 Karar A): kart ritüellerindeki "üç yavaş nefes al", `bahce-spec` §98 `balancing_set` içindeki `nefes` alanı, `akis-spec` §12 "5 dk nefes" kullanıcı-ritüeli örneği, `illustrasyon-uretim-spec` "bol nefes alanı" (tasarım dili), engine kuralındaki "Tepkiden önce bir nefes", `gogus-nefes` beden-bölgesi taksonomisi, `hook-sentez` §"Egzersiz kütüphanesi"ndeki nefes mikro-akışı (Sohbet'in genel içeriği).
- **`specs/illustrasyon-uretim-spec.md`:** taramada gerçek modül referansı çıkmadı (tek eşleşme tasarım dilindeki "bol nefes alanı") → değiştirilmedi.
- **KALINAN-YER.md** (arşivde): modül/medya referansı içermiyor — düzenleme gerekmedi; tarihsel kopya arşivde duruyor.
- **RAG kaynakları, görünürlük duvarı, contraindications, tema/tab/auth** (KD-01 §5 DOKUNMA listesi).
- **46 kaynak raporundaki** içerik geçişleri.

## 3. Doğrulamalar

- Mobil kod (`mobile/src`): `nefes|yoga|meditasyon|meditation|neurogame|breath` → **0 eşleşme**; route/ekran/komponent zaten yoktu.
- Supabase + scripts: `neurogame` → **0 eşleşme**; modüle özel tablo/seed/engine kaydı yok → **DB temiz** (kaldırma migration'ı gerekmedi). Storage bucket'ları yalnız panelden görülebilir; script tarafında iz yok.
- JSON parse 33/33 ✓ · scriptler `node --check` ✓ · mobile lint + typecheck ✓.
- Aktif ağaçta kalan `neurogame` izleri yalnız kasıtlı etiket/tarihçe satırları (hook-sentez başlık+notlar, akis-spec KD-01 notu, architecture İPTAL maddeleri).

## 4. Açık kalan tek nokta — ✅ KAPANDI (2026-07-14)

Deniz Cadısı köprüsü ürün sahibi kararıyla çözüldü: `"modul": "breathwork" → "mood"` (duygu düzenleme / iç-akış patikası; akış: duygu check-in'i → Mood/Journal → bağlamsal ritüel/bitki içeriği). Kullanıcıya görünen metin değişmedi (nefes pratiği içermiyordu); `_meta` köprü haritası güncellendi; seed yeniden üretildi. Ayrıntı: `DECISION_REQUIRED.md` #4.

## 5. Eski talimat dosyaları hakkında

KD-01 §2.1/2.2/2.4/2.5'in hedef belgeleri (`SPEC`, eski KALINAN-YER içeriği, `module-content-standard.md`, `Wellness_Agent_Kaynak_Listesi.md`) bu depoda mevcut değil; git geçmişi ve `docs/archive/` yalnız geçmiş kararları doğrulamak için tarandı, **eksik dosyalar yeniden üretilmedi, tahmin yapılmadı** (ürün sahibi talimatı).
