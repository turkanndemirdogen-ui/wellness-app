# PROJECT_STRUCTURE.md — Canonical Depo Yapısı

Tarih: 2026-07-14 · Dal: `cleanup-project` · Durum: cleanup sonrası (henüz commit atılmadı)

## İki bağımsız Git deposu

| Depo | Kök | İçerik |
|---|---|---|
| Kök depo | `wellness-app/` | Kanonik belgeler, içerik JSON'ları, RAG/seed scriptleri, Supabase şeması |
| Mobile depo | `wellness-app/mobile/` | Expo (React Native) uygulaması — kök repodan `.gitignore` ile tamamen ayrık |

## Kök depo ağacı

```text
wellness-app/
├── CLAUDE.md                    # PROJECT ENTRY POINT (canonical) — Governance'a yönlendirir
├── .gitignore                   # node_modules, .env*, *.log, BUILD zip, mobile/, .expo/
├── .env                         # GİZLİ — izlenmiyor, ignore altında (Supabase + OpenAI anahtarları)
├── package.json                 # veri-temeli scriptleri: seed:generate, ingest, db:check, test:*
├── package-lock.json
├── contraindications.json       # Güvenlik filtresi (T0–T3) — Safety katmanının veri tarafı
│
├── docs/                        # TEK BELGE OTORİTE AĞACI
│   ├── governance/GOVERNANCE_MASTER.md          # karar sahipliği + çakışma çözümü (LOCKED)
│   ├── architecture/ARCHITECTURE_DECISIONS.md   # teknik mimari otoritesi
│   ├── architecture/rag-base-spec.md            # RAG/DB base görev spec'i
│   ├── design/00–16 + audit/                    # tasarım kanon paketi (öncelik: 15 > 00–14; 16 talimat)
│   ├── legal/ASSET-LICENSES.md                  # lansman telif/lisans kaydı (KALICI — arşive gitmez)
│   ├── editorial/EDITORIAL_MASTER_SPEC.md       # Türkçe kullanıcı dili otoritesi
│   ├── safety/SAFETY_MASTER_SPEC.md             # güvenlik otoritesi (çatışmada kazanır)
│   ├── operations/REPOSITORY_CLEANUP_TASK.md    # bu cleanup'ın görev tanımı
│   └── archive/                                 # TARİHSEL — aktif otorite DEĞİL
│       └── (bkz. docs/archive/ARCHIVE_INDEX.md)
│
├── specs/                       # Ekran/modül spec'leri (13 dosya) — Architecture bunlara
│                                # `specs/...` yoluyla atıf yaptığı için kökte kaldı
├── content/                     # AKTİF İÇERİK DİZİNİ (editoryal onaylı sürümler)
│   ├── quiz-ay1…ay12 (12)       # editoryal FİNAL metinler
│   ├── cycle-beslenme / journal-transit-sorulari                   # editoryal FİNAL (neurogames-v1 → KD-01 ile docs/archive/removed-modules/)
│   ├── bitki-kartlari-master.json               # editoryal FİNAL 37 kart — seed'in tek kart kaynağı (Seçenek A)
│   ├── motor-tablo-{pilot,parti1..3}.json       # motor tablosu (37 bitki)
│   ├── engine-rules-katman{1a,1b,2}.json + engine-config.json      # gökyüzü motoru (40 kural)
│   ├── mevsim-haritasi / cip-turetme-kurallari / quiz-rotasyon
│   ├── soz-havuzu.json + soz-uretim-kurallari.md
│   ├── kriz-kaynaklari-tr.json / skincare-ingredients.json
│   └── *-onizleme.md            # üretim önizlemeleri
├── modules/                     # journal.json, mood.json (editoryal FİNAL; log tablosu alan kaynağı)
├── sources/                     # 46 RAG kaynağı + manifest.json — YENİDEN ÜRETİLEMEZ
├── scripts/                     # ingest/seed/test scriptleri (+ lib/)
├── supabase/                    # config.toml + migrations/ (6) + kurulum README
│
├── PROJECT-INVENTORY.md         # cleanup girdisi (envanter)
├── CLEANUP-PLAN.md              # cleanup girdisi (plan)
├── PROJECT_STRUCTURE.md         # bu dosya
├── MOVED_FILES.md               # taşıma kayıtları
├── PROJECT_HEALTH_REPORT.md     # doğrulama + risk raporu
└── DECISION_REQUIRED.md         # ürün sahibi kararı bekleyen maddeler
```

## Mobile depo ağacı (dokunulmadı)

```text
mobile/
├── CLAUDE.md → @AGENTS.md       # Expo v57 doküman zorunluluğu
├── src/app|components|constants|hooks|lib(astro,supabase,content,auth)|data
├── assets/  scripts/  app.json  eas.json  package.json  tsconfig.json
└── .env                         # izlenmiyor, mobile/.gitignore kapsamında
```

## Otorite haritası (Governance §2)

| Konu | Otorite |
|---|---|
| Teknik mimari, veri modeli, Supabase, runtime içerik kaynağı | `docs/architecture/ARCHITECTURE_DECISIONS.md` |
| UX/UI, token, motion, erişilebilirlik | `docs/design/` kanon paketi (öncelik: `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` > `00`–`14`; `16` uygulama talimatı) |
| Kullanıcıya görünen Türkçe | `docs/editorial/EDITORIAL_MASTER_SPEC.md` |
| Sağlık iddiası, kriz, toksisite sınırları | `docs/safety/SAFETY_MASTER_SPEC.md` (çatışmada kazanır) |
| Karar sahipliği, okuma sırası, arşiv politikası | `docs/governance/GOVERNANCE_MASTER.md` |

`docs/archive/` altındaki hiçbir belge aktif otorite değildir.
