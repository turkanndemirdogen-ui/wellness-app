# ARCHIVE_INDEX.md — docs/archive Dizini

> Bu ağaçtaki hiçbir belge **aktif otorite değildir** (Governance §5). Kullanıcı açıkça geçmiş araştırması istemedikçe okunmaz.

Tarih: 2026-07-14 · Oluşturan: repository cleanup (`docs/operations/REPOSITORY_CLEANUP_TASK.md`)

| Klasör / dosya | İçerik | Kaynak |
|---|---|---|
| `old-editorial-prompts/README.md` | Eski editoryal promptların arşiv işaretçisi (canonical paketten) | canonical-specs paketi |
| `old-editorial-setup/` | Eski "editorial master setup" paketi: `CLAUDE-editorial-setup-eski.md`, `CLAUDE_CODE_KURULUM_REHBERI.md`, kendi iç `docs/archive/old-editorial-prompts/README.md` | `Archive/claude-code-editorial-master-setup/` |
| `old-claude-instructions/CLAUDE-kok-v1-rag-base.md` | İlk kök CLAUDE.md (RAG-base çalışma sözleşmesi; git geçmişinde de mevcut) | `Archive/CLAUDE.md` |
| `old-claude-instructions/CLAUDE-kok-iki-otorite-2026-07-14.md` | İkinci kök CLAUDE.md (iki-otorite modeli; canonical CLAUDE ile değiştirilmeden önceki çalışma sürümü — git'te yoktu) | kök `CLAUDE.md` |
| `editorial-reports/` | Editoryal sürecin 19 raporu: girdi doğrulama, dosya-bazlı değişiklik raporları, `DEGISIKLIKLER/`, `FINAL-KONTROL.md` | `Editorial/03_RAPORLAR/` |
| `history/BASLANGIC-CLAUDE-CODE.md` | Tamamlanmış Claude Code başlangıç talimatı | kök (git mv) |
| `history/KALINAN-YER.md` | Oturum-durum günlüğü (son güncelleme: KS-1 Keşif kart tasarımı — içeriği Architecture §12'de) | kök (git mv) |
| `history/TESLIM-CHECKLIST.md` | Editoryal teslim kontrol listesi (süreç tamamlandı) | kök (git mv) |
| `history/canonical-specs-README-KURULUM.md` | Canonical spec paketinin kurulum talimatı (kurulum 2026-07-14'te uygulandı) | canonical-specs paketi |
| `arsiv/herbaryum-spec.md` | Tarihsel herbaryum spec'i (Architecture'da "tarihsel arşiv" damgalı; yeni yol burası) | kök `arsiv/` (git mv) |
| `arsiv/soz-havuzu-v0.1-duz.json` | Söz havuzu ilk düz seri (aktif sürüm: `content/soz-havuzu.json` v0.3) | kök `arsiv/` (git mv) |
| `build-snapshots/wellness-app-BUILD-2026-07-05.zip` | 2026-07-05 build anlık görüntüsü (112 dosya; bütünlük testi geçti). `.gitignore` deseni gereği **Git'e girmez** — yalnız disk/OneDrive arşivi | `Archive/` |

## Bilinçli olarak arşive KOPYALANMAYANLAR

- **Eski içerik taslakları** (editoryal düzenleme öncesi 17 JSON + eski kök dosyaları): tamamı git geçmişinde (`d727ffb` ve sonrası). Governance §5 gereği git geçmişi varken ayrıca kopya tutulmadı. Erişim: `git show <commit>:content/<dosya>`.
- **Yinelenen spec/CLAUDE kopyaları**: kurulan sürümle hash-eşit doğrulanan kopyalar silindi (kayıt: `MOVED_FILES.md` §7).
