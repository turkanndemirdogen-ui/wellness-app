# CLEANUP-PLAN.md — Temizlik Planı

Tarih: 2026-07-14 · Dayanak: `PROJECT-INVENTORY.md` · Dal: `cleanup-project`

> **Durum: YALNIZCA PLAN.** Bu belge hiçbir işlemin yapıldığı anlamına gelmez. Henüz hiçbir dosya değiştirilmedi, taşınmadı, silinmedi, yeniden adlandırılmadı; `git add`/`git commit` yapılmadı. Her adım kullanıcı onayıyla, aşağıdaki sırayla ve tek tek uygulanmalıdır.

---

## 1. REPO SINIRLARI

İki bağımsız Git deposu var; birbirine karıştırılmamalıdır:

| Depo | Kök dizin | Kapsam | Aktif dal |
|---|---|---|---|
| **Kök depo** | `C:\Users\turka\OneDrive\Desktop\wellness-app\` | İçerik JSON'ları, editoryal spec, mimari belgeler, RAG/Supabase script'leri, arşiv | `cleanup-project` |
| **Mobile depo** | `wellness-app\mobile\` | Expo uygulama kodu (src, assets, package.json, eas.json) | (mobile içinde ayrıca bakılmalı) |

**Komut–repo eşlemesi:**

- Kök depoyu ilgilendiren her komut `wellness-app\` dizininde çalıştırılır:
  `git status`, `git restore .gitignore`, `git add <yol>`, `git commit` (temizlik commit'leri), `git mv` (Archive/Editorial/docs içi taşımalar)
- Mobile depoyu ilgilendiren her komut `wellness-app\mobile\` dizininde çalıştırılır:
  `git status`, `npm install`, `npx expo ...`, mobile kaynak koduna dair her commit
- **Hiçbir zaman** kök depodan `mobile/` içeriği add edilmez. `mobile/.git` mevcut olduğundan kök depoda `git add mobile` yalnızca bir "gitlink" (embedded repo) kaydı oluşturur — bu istenmiyor.

**Nested yapıyı bozmadan ilerleme kuralları:**

- `mobile/.git` silinmez, taşınmaz, `git submodule`a dönüştürülmez (ileride ayrı karar konusu olabilir; bu plan kapsamı dışı).
- Kök `.gitignore` dosyasına `mobile/` satırı eklenir → kök depo mobile'ı tamamen görmez, iki depo temiz ayrışır.
- Her `git` komutundan önce `git rev-parse --show-toplevel` ile hangi depoda olunduğu doğrulanabilir.

---

## 2. KEEP (aktif kalacaklar)

| Dosya/Klasör | Rol |
|---|---|
| `mobile/` (tümü; kendi deposunda) | Uygulama kaynak kodu — Expo app, `src/`, `assets/`, config |
| `CLAUDE.md` (kök) | Kök depo çalışma talimatı (bölüm 7'deki güncellemelerle) |
| `mobile/CLAUDE.md` + `mobile/AGENTS.md` | Mobile depo çalışma talimatı |
| `docs/editorial/EDITORIAL_MASTER_SPEC.md` | Kullanıcıya görünen Türkçe dilin **tek otoritesi** |
| `Editorial/02_CIKTI/.../GRUP_1..3/*.json` (18 dosya) | Editoryal onaylı **güncel içerik** — tek doğru sürüm (bölüm 6) |
| `Archive/specs/*.md` (13 spec) | Mimari/ekran/modül spec'leri — hâlâ otorite; `docs/specs/`e taşınması önerilir (bölüm 7) |
| `Archive/ARCHITECTURE_DECISIONS.md` | Mimari karar kaydı — `docs/`e taşınması önerilir |
| `Archive/rag-base-spec.md` | RAG veri temeli spec'i — `docs/`e taşınması önerilir |
| `Archive/supabase/` (config.toml, `migrations/`, README) | **Canlı DB şemasının kaynağı — asla silinmez**; `supabase/` olarak köke taşınması önerilir |
| `Archive/scripts/` + `Archive/package.json` + `package-lock.json` | Ingest/seed/doğrulama araçları (`db:check`, `test:retrieval`, `test:visibility`) — DB hattı kullanıldığı sürece **aktif araç**; `scripts/` olarak köke taşınması önerilir |
| `Archive/sources/` (~50 rapor + manifest.json) | **Yeniden üretilemez** RAG kaynak külliyatı — kesinlikle korunur |
| `Archive/contraindications.json`, `Archive/content/kriz-kaynaklari-tr.json` | Güvenlik içeriği — güvenlik motoru kullanıyorsa aktif sayılmalı; taşınmadan önce script referansları kontrol edilir |
| `Archive/KALINAN-YER.md` | Çalışma durumu kaydı — güncel kaldığı sürece kökte tutulabilir |
| `PROJECT-INVENTORY.md`, `CLEANUP-PLAN.md` | Bu temizliğin kayıtları |

---

## 3. ARCHIVE (arşivde kalacak / arşive taşınacaklar)

Hedef ilke: tek, açık adlandırılmış `Archive/` ağacı; alt klasörler amaca göre. Taşımalar kök depoda `git mv` (izlenen dosyalar) veya dosya taşıma (untracked) ile yapılır.

| Öğe | Şu anki yol | Hedef arşiv yolu | Not |
|---|---|---|---|
| Eski editoryal promptlar | `Archive/claude-code-editorial-master-setup/docs/archive/old-editorial-prompts/` | `Archive/old-editorial-prompts/` | Kök CLAUDE.md'nin işaret edeceği tekil yol (bölüm 7) |
| Eski editoryal kurulum paketi | `Archive/claude-code-editorial-master-setup/` (kalanı: CLAUDE.md, KURULUM_REHBERI, eski EDITORIAL_MASTER_SPEC kopyası) | `Archive/old-editorial-setup/` | Eski spec kopyası **aktif spec'le karışmasın** diye açıkça "old" etiketi |
| Eski JSON taslakları | `Archive/content/` (parti1-3, pilot, quiz eski sürümleri vb.) | `Archive/content-eski-taslaklar/` (veya olduğu yerde bırak) | Editoryal öncesi orijinaller; karşılaştırma değeri var |
| Eski modül taslakları | `Archive/modules/` (journal.json, mood.json) | `Archive/content-eski-taslaklar/modules/` | Aynı gerekçe |
| En eski taslaklar | `Archive/arsiv/` (herbaryum-spec, soz-havuzu-v0.1) | `Archive/content-eski-taslaklar/arsiv/` | — |
| Build anlık görüntüsü | `Archive/wellness-app-BUILD-2026-07-05.zip` | Olduğu yerde kalır | Klasör hali REMOVE'da (bölüm 4); zip tek kopya olarak yeter |
| Editoryal raporlar | `Editorial/03_RAPORLAR/03_RAPORLAR/*.md` + `DEGISIKLIKLER/` + `FINAL-KONTROL.md` | `Archive/editorial-raporlar/` | Karar izi; içerik JSON'ları aktif kaynağa taşındıktan sonra raporlar arşive iner |
| Editoryal süreç dosyaları | `Editorial/TESLIM-CHECKLIST.md`, `Archive/TESLIM-CHECKLIST.md` (eski), `Archive/BASLANGIC-CLAUDE-CODE.md` | `Archive/surec-dosyalari/` | Tamamlanmış süreç kayıtları |
| Yinelenen spec kopyası | `Archive/old-editorial-setup/docs/editorial/EDITORIAL_MASTER_SPEC.md` | Arşivde kalır, **aktif ağaca asla kopyalanmaz** | Aktif tek sürüm: `docs/editorial/EDITORIAL_MASTER_SPEC.md` |
| Eski kök CLAUDE.md kopyaları | `Archive/CLAUDE.md`, build kopyası içindeki `CLAUDE.md` | Olduğu yerde | Tarihsel referans |

**Yinelenen içerik sürümleri** (quiz/modül/bitki JSON'larının 3 kopyası): tekilleştirme kararı bölüm 6'da; arşiv kopyaları yukarıdaki taslak klasörlerinde kalır, build kopyası zip içinde yaşar.

---

## 4. REMOVE (yalnızca yeniden üretilebilir / açıkça gereksiz)

| Öğe | Neden güvenle kaldırılabilir |
|---|---|
| `Archive/node_modules/` (~8.7 MB) | Bağımlılık klasörü; `Archive/package-lock.json` korunuyor → gerekirse `npm install` ile birebir yeniden üretilir. Arşivde bağımlılık klasörü tutmanın hiçbir değeri yok. |
| `mobile/.expo/` | Expo'nun yerel cache/durum klasörü; `npx expo start` ilk çalıştırmada yeniden üretir. Zaten `mobile/.gitignore` kapsamında. |
| `Archive/wellness-app-BUILD-2026-07-05/` (klasör, 1.3 MB) | Birebir aynı içerik `...BUILD-2026-07-05.zip` (400 KB) içinde duruyor; çift kopya. Zip korunduğu için klasör kayıpsız silinir. **Silmeden önce doğrulama:** zip'in açılabildiği ve içeriğinin klasörle eşleştiği kontrol edilir. |
| `Editorial/02_CIKTI/02_CIKTI` ve `Editorial/03_RAPORLAR/03_RAPORLAR` iç içe klasör katmanları | Zip çıkarma artefaktı; kaldırılan şey **veri değil fazladan klasör katmanı**. İçerik önce tek katmana taşınır (bölüm 6 / adım E), boş kalan dış kabuk silinir. |
| `mobile/node_modules/` | **Diskten silinmez** (uygulama çalışmak için gerekli); yalnızca git dışında tutulur (zaten mobile/.gitignore'da). Gerekirse `npm install` ile yeniden üretilir. |

REMOVE kapsamına **girmeyenler**: `package-lock.json` dosyaları (sürüm sabitleme değeri), `Archive/sources/`, `supabase/migrations/`, tüm spec ve rapor md'leri.

---

## 5. KRİTİK GÜVENLİK

Bu bölümdeki maddeler **her şeyden önce** tamamlanmalıdır (Uygulama sırası: Adım 1-2).

1. **`.env` asla Git'e girmez.**
   - Bilinen konum: `Archive/.env` (olası Supabase anahtarları). `mobile/` içinde de `.env*` olabilir (mobile kendi deposunda, kendi .gitignore'u var — yine de kontrol edilir).
   - Önerilen ek önlem: `Archive/.env` dosyasını arşivde tutmak yerine kök dışına (ör. kullanıcının parola kasasına) taşımak; en azından kök `.gitignore`a `**/.env*` eklemek.
2. **Silinmiş kök `.gitignore` geri yüklenir** (kök depoda):
   ```
   git restore .gitignore        # veya: git checkout -- .gitignore
   ```
   Ardından şu satırlar eklenir/dogrulanır: `node_modules/`, `**/.env*`, `.expo/`, `mobile/`, `*.zip` hariç tutulmayacaksa açıkça değerlendirilir (build zip'i bilinçli olarak izlenebilir veya izlenmeyebilir — karar kullanıcıya ait; öneri: zip'i Git'e sokmamak, `Archive/*.zip` ignore).
3. **`node_modules`, build ve cache klasörleri ignore edilir:** kökte `node_modules/`, `Archive/node_modules/`, `.expo/`; mobile tarafında mevcut `mobile/.gitignore` yeterliliği `git check-ignore` ile doğrulanır.
4. **Supabase migration'ları korunur:** `Archive/supabase/migrations/` hiçbir temizlik adımında silinmez; taşınırsa yalnızca `git mv` ile (geçmiş korunur). Temizlik commit'lerinden önce ve sonra `ls` ile dosya sayısı karşılaştırılır.
5. **`git add -A` kullanılmadan önce zorunlu kontroller** (kök depoda):
   ```
   git status --short                     # tabloyu gör
   git check-ignore -v Archive/.env       # ignore çalışıyor mu?
   git check-ignore -v Archive/node_modules/.package-lock.json
   git check-ignore -v mobile/package.json   # mobile görünmez olmalı
   git add -A -n                          # DRY RUN: ne ekleneceğini listeler
   ```
   Dry-run çıktısında `.env`, `node_modules`, `mobile/` görünüyorsa **add yapılmaz**, önce ignore düzeltilir. Genel kural: `git add -A` yerine adım adım `git add <belirli-yol>` tercih edilir.

---

## 6. İÇERİK TEKİLLEŞTİRME

**Güncel JSON'lar (tespit):** `Editorial/02_CIKTI/02_CIKTI/` altındaki 18 dosya —
`GRUP_1_BITKI_KARTLARI/bitki-kartlari-master.json`; `GRUP_2_QUIZLER/quiz-ay1…ay12` (12 dosya); `GRUP_3_MODULLER/cycle-beslenme.json`, `journal.json`, `journal-transit-sorulari.json`, `mood.json`, `neurogames-v1.json`.

**Karşılaştırma durumu:**
- `Archive/content/` + `Archive/modules/` → editoryal düzenleme **öncesi** taslaklar (parti dosyaları, pilot sürümler dahil).
- `Archive/wellness-app-BUILD-2026-07-05/wellness-app/content/` → 2026-07-05 tarihli anlık görüntü; taslaklarla aynı nesil.
- `Editorial/02_CIKTI/` → editoryal süreçten çıkan, `03_RAPORLAR` ile belgelenmiş, `FINAL-KONTROL.md`den geçmiş sürümler.
- Uygulama sırasında (Adım E) her dosya çifti için `jq` ile anahtar/id/puanlama alanlarının değişmediği, yalnız metin alanlarının değiştiği örneklenerek doğrulanır (CLAUDE.md JSON kuralları gereği).

**Öneri — tek doğru kaynak:** `Editorial/02_CIKTI/` içindeki editoryal sürümler, kök depoda yeni `content/` dizinine taşınarak **tek aktif içerik dizini** ilan edilir:

```
content/
  bitki-kartlari-master.json
  quiz-ay1-disil-estetik.json … quiz-ay12-degerler.json   (12 dosya)
  cycle-beslenme.json  journal.json  journal-transit-sorulari.json
  mood.json  neurogames-v1.json
```

Bu, kök CLAUDE.md'deki "aktif içerik dizini" kavramını yeniden somutlaştırır. Eski taslaklar `Archive/content-eski-taslaklar/`de kalır (bölüm 3); aktif ağaçta aynı dosyanın ikinci kopyası kalmaz.

**JSON'ların gelecekteki rolü:** Uygulama içeriği runtime'da **Supabase'den** okur (`mobile/src/lib/content.ts` → `herbs`, `quizzes` tabloları). Dolayısıyla bu JSON'lar uygulama paketine gömülmez; rolleri:
1. **Editoryal master / sürüm kontrollü doğruluk kaynağı** — DB'deki içeriğin insan-okur ve diff-lenebilir hali,
2. **Seed/ingest girdisi** — `scripts/` altındaki `generate-seed.mjs` / `ingest.mjs` / `push-chunks.mjs` hattıyla DB'ye basılır,
3. İçerik güncellemelerinde akış: JSON'u düzenle → commit → script ile DB'ye yükle → `db:check` / `test:retrieval` ile doğrula.

> ⚠️ **Bu planda Supabase'e hiçbir veri yazılmaz, migration oluşturulmaz.** Editoryal sürümlerin DB'ye yüklenmesi ayrı bir görevdir ve `secrets-stay-with-user` ilkesine göre kullanıcı eliyle/onaylı çalıştırılır.

---

## 7. CLAUDE TALİMATLARI

**Önerilen görev sınırları:**

| Belge | Kapsam |
|---|---|
| Kök `CLAUDE.md` | İçerik JSON'ları, editoryal kurallar, mimari/spec belgeleri, Supabase şema + seed/ingest script'leri, arşiv politikası. Mobile koduna **karışmaz**; mobile görevlerinde "mobile/ kendi deposu ve kendi CLAUDE.md'si vardır" der. |
| `mobile/CLAUDE.md` (+ `AGENTS.md`) | Expo uygulama kodu, ekran/bileşen geliştirme, Expo v57 doküman zorunluluğu. Kullanıcıya görünen Türkçe metin yazarken kök otoriteye işaret etmeli: `../docs/editorial/EDITORIAL_MASTER_SPEC.md`. |

**Kök CLAUDE.md'de artık geçerli olmayan yollar / çelişkiler (güncellenecekler):**

1. `docs/archive/old-editorial-prompts/` → yol artık yok; yeni hedef: `Archive/old-editorial-prompts/` (bölüm 3 taşıması sonrası).
2. "Aktif içerik dizini" tanımsız → `content/` olarak netleştirilir (bölüm 6 sonrası).
3. Mimari otorite "belgeler" deniyor ama dosya yolu verilmiyor; belgeler şu an `Archive/` altında → spec'ler `docs/specs/`e taşınınca yollar açıkça yazılır.
4. mobile/ ayrımı hiç geçmiyor → "Repo sınırları" bölümü eklenir.

**Önerilen kesin otorite yolları (taşımalar sonrası):**

| Otorite | Yol |
|---|---|
| Editoryal (kullanıcıya görünen Türkçe dil) | `docs/editorial/EDITORIAL_MASTER_SPEC.md` — *yalnızca dil otoritesi; mimari/tasarım belgelerinin yerine geçmez* |
| Mimari kararlar | `docs/ARCHITECTURE_DECISIONS.md` |
| Ekran/modül spec'leri (tasarım dahil) | `docs/specs/*.md` (ana-sayfa, kesif, bahce, sohbet, akis, kozmos-motor, mood-journal, skincare, gunun-sozu, haftalik-bakis, hook-sentez, illustrasyon-uretim, karar-gunlugu) |
| RAG / veri temeli | `docs/rag-base-spec.md` |
| Güvenlik içeriği | `content/`e taşınacaksa `content/` altında; aksi halde mevcut yol korunur ve CLAUDE.md'de belirtilir (`contraindications.json`, `kriz-kaynaklari-tr.json`) |
| DB şeması | `supabase/migrations/` |
| Aktif içerik | `content/*.json` |

---

## 8. UYGULAMA SIRASI

Her adım küçük, tek amaçlı ve tek commit'liktir. Genel geri dönüş güvencesi: **Adım 0'da tüm ağacın yedeği alınır**; ayrıca her commit `git revert`/`git reset` ile geri alınabilir. Untracked dosya taşımaları için geri dönüş = ters yönde taşıma (yedek de mevcut).

> Not: `Archive/`, `Editorial/`, `docs/` şu an untracked olduğundan ilk taşımalar `git mv` değil normal taşımadır; bu ağaçlar Adım 9'da topluca Git'e alınır.

**Adım 0 — Tam yedek (güvenlik ağı)**
- Repo: dosya sistemi (Git dışı)
- Etki: hiçbir dosya değişmez; `wellness-app` klasörünün kopyası kök dışına alınır (ör. `Desktop\wellness-app-YEDEK-2026-07-14\`, `node_modules` hariç tutulabilir)
- Doğrulama: yedek klasöründe `Archive/sources` dosya sayısı orijinalle eşit
- Commit: yok
- Geri dönüş: gerekmiyor (adımın kendisi geri dönüş mekanizması)

**Adım 1 — .gitignore'u geri yükle ve güçlendir**
- Repo: kök
- Etki: `.gitignore` (restore + `mobile/`, `**/.env*`, `node_modules/`, `.expo/`, `Archive/*.zip` satırları)
- Doğrulama: `git check-ignore -v Archive/.env mobile/package.json Archive/node_modules/ 2>$null` → üçü de eşleşmeli; `git status --short` çıktısında `mobile/` görünmemeli
- Commit: `chore: .gitignore geri yüklendi; env, node_modules, mobile ve arşiv zip ignore edildi`
- Geri dönüş: `git revert <commit>`

**Adım 2 — Archive/.env'i güvene al**
- Repo: dosya sistemi
- Etki: `Archive/.env` kök ağaç dışına taşınır (kullanıcı belirler) **veya** yerinde bırakılıp ignore'a güvenilir (öneri: dışarı taşı)
- Doğrulama: `git status --short` ve `git add -A -n` çıktısında hiçbir `.env` yok
- Commit: yok (dosya zaten untracked)
- Geri dönüş: dosyayı geri taşı

**Adım 3 — Eski kök yerleşiminin silinmelerini commit'le**
- Repo: kök
- Etki: git'te `D` görünen 132 dosya (içerikleri `Archive/`e taşınmış durumda) + `M CLAUDE.md` henüz commit edilmez; **yalnızca silinmeler** stage edilir: `git add -u`
- Doğrulama: `git status --short` → `D` kalmadı, untracked klasörler duruyor; `git show --stat HEAD` silinen listeyi gösteriyor
- Commit: `chore: eski kök yerleşimi kaldırıldı (içerik Archive/ altına taşındı, henüz izlenmiyor)`
- Geri dönüş: `git revert <commit>` (dosyaları eski yollara geri getirir; Archive kopyaları zaten duruyor)

**Adım 4 — REMOVE öğeleri: Archive/node_modules, .expo, BUILD klasörü**
- Repo: dosya sistemi (hepsi untracked)
- Etki: `Archive/node_modules/` silinir; `mobile/.expo/` silinir; zip doğrulandıktan sonra `Archive/wellness-app-BUILD-2026-07-05/` klasörü silinir
- Doğrulama: silmeden önce `unzip -l Archive/wellness-app-BUILD-2026-07-05.zip | tail -5` (zip sağlam); sildikten sonra `mobile` tarafında `npx expo start` hâlâ açılıyor (`.expo` yeniden oluşur)
- Commit: yok (untracked)
- Geri dönüş: Adım 0 yedeğinden kopyala
- ⚠️ Bu adım tek geri-dönüşü-yedeğe-bağlı adımdır; Adım 0 tamamlanmadan **çalıştırılmaz**

**Adım 5 — Editorial iç içe klasör artefaktını düzelt + içerikleri `content/`e çıkar**
- Repo: dosya sistemi (untracked)
- Etki: `Editorial/02_CIKTI/02_CIKTI/GRUP_*/**.json` → kökte yeni `content/` dizinine taşınır (18 dosya, düz yapı); boş kalan `Editorial/02_CIKTI/` kabuğu silinir
- Doğrulama: `ls content/*.json | wc -l` → 18; her dosya için JSON parse: `node -e "['content/...'].forEach(f=>JSON.parse(require('fs').readFileSync(f)))"` benzeri toplu kontrol; taşınan dosyalarla eski taslaklar arasında `jq` ile şema/anahtar örnekleme karşılaştırması
- Commit: henüz yok (Adım 9'da topluca)
- Geri dönüş: dosyaları `Editorial/02_CIKTI/02_CIKTI/...` altına geri taşı

**Adım 6 — Editoryal raporları ve süreç dosyalarını arşive indir**
- Repo: dosya sistemi (untracked)
- Etki: `Editorial/03_RAPORLAR/03_RAPORLAR/*` → `Archive/editorial-raporlar/`; `Editorial/TESLIM-CHECKLIST.md` → `Archive/surec-dosyalari/`; boşalan `Editorial/` klasörü kaldırılır
- Doğrulama: `find Archive/editorial-raporlar -type f | wc -l` taşıma öncesi sayıyla eşit; `Editorial` dizini yok
- Commit: henüz yok
- Geri dönüş: ters taşıma

**Adım 7 — Aktif belgeleri Archive'dan çıkar: specs, mimari, RAG, supabase, scripts**
- Repo: dosya sistemi (untracked)
- Etki: `Archive/specs/` → `docs/specs/`; `Archive/ARCHITECTURE_DECISIONS.md` → `docs/`; `Archive/rag-base-spec.md` → `docs/`; `Archive/supabase/` → `supabase/`; `Archive/scripts/` + `Archive/package.json` + `Archive/package-lock.json` → kök `scripts/` + kök `package.json`/`package-lock.json`; `Archive/KALINAN-YER.md` → kök; güvenlik JSON'ları (`contraindications.json`, `kriz-kaynaklari-tr.json`) script referanslarına göre `content/`e
- Doğrulama: `ls docs/specs | wc -l` → 13; `ls supabase/migrations`; script yolları içinde eski göreli yol kırıkları için `grep -rn "content/\|\.\./" scripts/ package.json` incelenir; mümkünse (env kullanıcıda) `npm run db:check` çalıştırılır
- Commit: henüz yok
- Geri dönüş: ters taşıma

**Adım 8 — Archive iç düzeni: old-editorial-prompts ve eski kurulum**
- Repo: dosya sistemi (untracked)
- Etki: `Archive/claude-code-editorial-master-setup/docs/archive/old-editorial-prompts/` → `Archive/old-editorial-prompts/`; kalan `claude-code-editorial-master-setup/` → `Archive/old-editorial-setup/`; `Archive/content` + `modules` + `arsiv` → `Archive/content-eski-taslaklar/` altında toplanır
- Doğrulama: `find Archive -maxdepth 1 -type d` beklenen kısa listeyi veriyor; dosya sayısı taşıma öncesiyle eşit
- Commit: henüz yok
- Geri dönüş: ters taşıma

**Adım 9 — Yeni ağacı Git'e al (tek büyük, ama tek amaçlı commit)**
- Repo: kök
- Etki: `git add content docs supabase scripts Archive package.json package-lock.json KALINAN-YER.md PROJECT-INVENTORY.md CLEANUP-PLAN.md` (açık yollar; `-A` kullanılmaz)
- Doğrulama: bölüm 5.5'teki kontroller (`git add -n`, `git check-ignore`, çıktıda `.env`/`node_modules`/`mobile` yok); `git status` temiz kalıntı göstermiyor
- Commit: `feat: temiz depo yerleşimi — content/, docs/, supabase/, scripts/ aktif; Archive düzenlendi`
- Geri dönüş: `git revert <commit>` veya `git reset --soft HEAD~1`

**Adım 10 — Kök CLAUDE.md güncellemesi**
- Repo: kök
- Etki: yalnız `CLAUDE.md` (bölüm 7'deki yollar: aktif içerik `content/`, spec'ler `docs/specs/`, eski promptlar `Archive/old-editorial-prompts/`, repo sınırları bölümü)
- Doğrulama: dosyadaki her yol için `Test-Path` / `ls` kontrolü — hepsi mevcut
- Commit: `docs: CLAUDE.md yeni yerleşime göre güncellendi (aktif yollar + repo sınırları)`
- Geri dönüş: `git revert <commit>`

**Adım 11 — mobile/CLAUDE.md kapsam notu**
- Repo: **mobile**
- Etki: `mobile/CLAUDE.md` (veya `AGENTS.md`) — kök editoryal otoriteye işaret eden 2-3 satır
- Doğrulama: dosya içeriği; `git -C mobile status` yalnız bu dosyayı gösteriyor
- Commit (mobile deposunda): `docs: kok editoryal otorite referansi eklendi`
- Geri dönüş: `git -C mobile revert <commit>`

### Öncelik listeleri

**Önce yapılmalı (güvenlik + geri alınabilirlik):**
1. Adım 0 — tam yedek
2. Adım 1 — .gitignore geri yükleme ve güçlendirme
3. Adım 2 — `.env` güvene alma
4. Adım 3 — mevcut silinmelerin temiz commit'i

**Sonra yapılabilir (düzenleme gövdesi):**
5. Adım 4 — REMOVE öğeleri
6. Adım 5-6 — içerik tekilleştirme + Editorial arşivi
7. Adım 7-8 — aktif belgelerin çıkarılması + Archive iç düzeni
8. Adım 9-11 — Git'e alma ve CLAUDE talimat güncellemeleri

**Şimdilik dokunulmamalı:**
- `mobile/` kaynak kodu ve `mobile/.git` yapısı (submodule dönüşümü ayrı karar)
- Supabase veritabanı: veri yazma, seed, migration oluşturma yok
- `Archive/sources/` ve `supabase/migrations/` içerikleri (yalnızca klasör taşıması; dosya içeriğine dokunulmaz)
- İçerik JSON'larının **içeriği** (tekilleştirme yalnız konum düzenler; metin/şema değişikliği bu planın dışıdır)
- `main` dalı — tüm çalışma `cleanup-project` dalında kalır; merge kullanıcı onayıyla
