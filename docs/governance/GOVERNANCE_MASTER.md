# GOVERNANCE MASTER

**Belge türü:** Proje yönetişimi ve karar sahipliği  
**Sürüm:** 1.0  
**Durum:** CANONICAL — LOCKED  
**Tarih:** 2026-07-14

## 1. Amaç

Bu belge ürün kararı üretmez. Hangi konunun hangi kanonik belge tarafından yönetildiğini, çakışmaların nasıl çözüleceğini ve Claude Code’un görev bazında hangi belgeleri okuyacağını tanımlar.

> Her kararın tek bir sahibi vardır. Aynı konuda iki aktif doğru tutulmaz.

## 2. Kanonik otoriteler

### Teknik mimari
`docs/architecture/ARCHITECTURE_DECISIONS.md`

Repository, uygulama mimarisi, frontend/backend sınırları, Supabase, veri modeli, migration, API, runtime içerik kaynağı ve deploy kararlarını yönetir.

### Ürün tasarımı
`docs/design/` kanon paketi — öncelik sırası: `15_PRODUCT_LOCKS_AND_VISUAL_OVERRIDES.md` > `00_VISUAL_SYSTEM_CANONICAL.md` … `14_CLAUDE_CODE_MASTER_INSTRUCTION.md` (+ `16_CLAUDE_CODE_CORRECTION_PROMPT.md` uygulama talimatı). *(Güncelleme 2026-07-21; önceki otorite `PRODUCT_DESIGN_SYSTEM_MASTER.md` arşiv/tarihsel referans statüsüne indi.)*

UX, UI, information architecture, navigasyon davranışı, design token’ları, component/pattern sistemi, motion, responsive davranış, erişilebilirlik ve frontend UI uygulama kurallarını yönetir.

Kullanıcı metninin anlamını değiştirmez. Görsel/tasarım kararları dışına çıkamaz: güvenlik ve içerik kuralları (toksik bitki dışlaması, tıbbi iddia/doz yasağı, astrolojide kesin kader dili yasağı, KVKK yükümlülükleri) Safety/ilgili otoritelerde kalır ve tasarım paketiyle değiştirilemez.

### Editoryal dil
`docs/editorial/EDITORIAL_MASTER_SPEC.md`

Kullanıcıya görünen Türkçe metni, marka sesini, anlatıyı, soru/seçenek/sonuç metinlerini, bitki kartlarını, mood, journal, quiz, transit ve UX microcopy dilini yönetir.

Mimariyi, puanlamayı, eşleşmeyi veya UI davranışını değiştirmez.

### Güvenlik
`docs/safety/SAFETY_MASTER_SPEC.md`

Sağlık iddiası, bitki ve beslenme güvenliği, kriz/hassas içerik, astroloji ve sembolik içerik sınırları, disclaimer, toksik bitki, yeme davranışı hassasiyeti ve brain-training iddiası konularını yönetir.

Güvenlik çatışmasında Safety kazanır.

## 3. Çakışma çözümü

Doğrusal bir üstünlük yerine konu sahipliği uygulanır:

- Teknik davranış → Architecture
- Görsel ve etkileşim davranışı → Design
- Kullanıcı metninin anlamı ve tonu → Editorial
- Sağlık, zarar ve iddia sınırı → Safety

Örnekler:

- Metin karta sığmıyorsa Design metni keyfî biçimde kısaltmaz; önce layout çözümü arar. İçerik değişecekse Editorial uygulanır.
- Editorial bir sağlık vaadi öneriyorsa Safety geçersiz kılar.
- Architecture kullanıcı metni yazmaz.
- Claude Code çözülemeyen çelişkiyi `DECISION_REQUIRED.md` içinde raporlar.

## 4. Göreve göre okuma

### Repository cleanup
1. `CLAUDE.md`
2. Governance
3. Architecture
4. `PROJECT-INVENTORY.md`
5. `CLEANUP-PLAN.md`
6. `docs/operations/REPOSITORY_CLEANUP_TASK.md`

Design, Editorial ve Safety yalnızca kanonik dosyaları tanımak ve korumak için okunur; içerikleri değiştirilmez.

### Kod/backend
Governance → Architecture → ilgili kod/modül spec’i → UI etkisi varsa Design → kullanıcı metni varsa Editorial + Safety.

### UI/UX
Governance → Design → Architecture’ın ilgili sınırları → kullanıcı metni varsa Editorial + Safety.

### İçerik/JSON
Governance → Editorial → Safety → ilgili JSON → teknik eşleşme gerekiyorsa Architecture.

### Yeni modül
Ürün sahibi kararı → Architecture → Safety → Design → Editorial → Implementation → doğrulama.

## 5. Tek doğru kaynak

- Aktif kod ağacında aynı içeriğin `_old`, `_new`, `_final2`, `copy`, `backup` gibi paralel sürümleri tutulmaz.
- Git geçmişi varsa eski sürüm ayrıca aktif klasörde saklanmaz.
- Tarihsel belgeler `docs/archive/` altında yaşar ve aktif otorite sayılmaz.
- Arşiv belgeleri kullanıcı geçmiş araştırması istemedikçe okunmaz.
- Supabase runtime kaynağıysa JSON’un rolü Architecture tarafından açıkça belirlenir: seed, migration source, editorial source veya archive.

## 6. Değişiklik yönetimi

- Patch: yazım, açıklama, non-behavioral düzeltme
- Minor: geriye uyumlu component/pattern veya içerik alanı
- Major: navigation, veri modeli, token hierarchy, güvenlik politikası veya feature sınırı

Major değişiklik ürün sahibi onayı, architecture decision kaydı ve ilgili master spec sürüm güncellemesi gerektirir.

## 7. AI sınırı

Claude Code uygulayıcı ve denetleyicidir; ürün sahibi değildir.

Claude:

- mevcut kanonik kaynakları bulur,
- tekrarları raporlar,
- güvenli ve geri alınabilir işlemler yapar,
- doğrulama çalıştırır,
- belirsizliği raporlar.

Claude:

- yeni ürün yönü icat etmez,
- güvenlik kuralını gevşetmez,
- yeni design token üretmez,
- puanlama/eşleşme değiştirmez,
- belirsiz dosyayı sessizce silmez,
- nested Git sınırlarını bozmaz.

## 8. Cleanup güvenliği

- Kalıcı silme varsayılan olarak yasaktır.
- Kanonik olmayan fakat geri gerekebilecek dosyalar arşivlenir.
- Yalnızca `node_modules`, cache, build/dist ve açıkça yeniden üretilebilir artefaktlar kaldırılabilir.
- `.env` commit edilmez.
- `.gitignore` korunur veya güvenli biçimde geri yüklenir.
- Supabase migration’ları açık doğrulama olmadan kaldırılmaz.
- Her taşıma `MOVED_FILES.md`, her arşiv `ARCHIVE_INDEX.md` içinde kaydedilir.

## 9. İnsan kararı

Yeni yön, kanonik karar değişikliği ve riskli belirsizlik yalnızca ürün sahibi tarafından karara bağlanır.

**END OF CANONICAL GOVERNANCE MASTER v1.0**
