# Supabase Kurulumu — Panelden SQL (service_role kullanmadan)

Güvenlik kararı: gizli `service_role` anahtarı paylaşılmaz. Şema ve içerik
**Supabase panelindeki SQL Editor'den** yüklenir. App, içeriği **anon (public)**
anahtarla okur.

## Çalıştırma sırası (SQL Editor > New query > yapıştır > RUN)

| Sıra | Dosya | Ne yapar |
|------|-------|----------|
| 1 | `migrations/0001_operational_schema.sql` | Per-user tablolar (profiles, birth_data, loglar…) + RLS + KVKK cascade |
| 2 | `migrations/0002_content_schema.sql` | İçerik/RAG tabloları + **görünürlük duvarı** (fail-closed) |
| 3 | `migrations/0003_seed_content.sql` | 37 bitki + 12 quiz + 46 kaynağı yükler |

Üçü de **idempotent** — yanlışlıkla iki kez çalıştırmak zarar vermez
(tablolar `if not exists`, içerik `on conflict do update`).

## Doğrulama

- Yükledikten sonra: `npm run db:check` → herbs=37, quizzes=12 ve
  **agent_only kaynak anon istemciye gelmiyor** (canlı duvar testi).
- DB'siz kod testi (istediğin an): `npm run test:visibility`.

## İçerik güncellenince

`content/*.json` değişirse seed'i yeniden üret:

```
npm run seed:generate      # 0003_seed_content.sql'i tazeler
```

Sonra 0003'ü panelde tekrar çalıştır (idempotent).

## RAG ingest (0004 — embedding, opsiyonel/sonraki adım)

Kaynak metinleri chunk'layıp OpenAI ile embed'ler, `vault_chunks`'a yükler.
Anahtar senin makinende kalır (oturuma girmez).

```
$env:OPENAI_API_KEY="sk-..."     # kendi terminalinde
npm run ingest -- --limit 2       # PİLOT: 2 kaynak (embed'in çalıştığını doğrular)
npm run ingest -- --all           # 46 kaynak → 0004_seed_chunks.sql
npx supabase db push              # 0004'ü uygular (TEK sefer, tam haliyle)
```

**Önemli:** Pilotu `db push` ETME. `db push` migration'ı sürümle izler; 0004'ü iki
kez (pilot + tam) push edersen ikincisi atlanır. Pilot yalnız embed'i doğrular;
`0004`'ü bir kez, `--all` çıktısıyla push et.

Kaynak-düzeyi güvenlik: `visibility_not`'ta "excluded" geçen kaynaklar
(Millard prognoz/ameliyat, Paracelsus hastalık-transferi) hiç embed EDİLMEZ
(`scripts/lib/source-visibility.mjs`). Dry kontrol: `npm run ingest:dry`.

Doğrulama: `npm run db:check` artık chunk duvarını da kontrol eder
(anon'a agent_only chunk gelmiyor).

## Görünürlük duvarı (kritik)

`vault_sources` / `vault_chunks` tablolarında `visibility` sütunu
**`not null default 'agent_only'`** — visibility atanmamış her satır otomatik
kullanıcıya kapalı olur. Kullanıcı-yolu RLS politikası yalnız `visibility='user'`
döndürür; `agent_only` (7 kaynak) ve `excluded` anon/authenticated'a **asla**
gelmez. Aynı kural kod tarafında da var (`scripts/lib/visibility.mjs`) →
iki katman (defense-in-depth).
