# CLAUDE.md — Proje Kural Dosyası (harness çekirdeği)

> Bu dosya Claude Code'un **statik bağlamıdır**: her oturumda geçerli kimlik + kurallar + çalışma tarzı. Kısa ve yüksek-sinyal tutulur (bağlam çürümesinden kaçın). Ayrıntı gereken yerde ilgili dosyaya işaret eder.

## Proje
Türkçe bir **wellness mobil uygulaması** (soft-witchery; astroloji + herbalizm + kanıt-temelli wellness). Bu repoda kurulacak: **veri temeli + RAG pipeline** (uygulama arayüzü ve içerik dolumu HARİÇ). Görev tarifi: `rag-base-spec.md`. Kararların gerekçesi: `ARCHITECTURE_DECISIONS.md`.

## Nasıl çalış (çalışma sözleşmesi — bunlara uy)
- **Önce plan, sonra kod.** Herhangi bir kod/migration yazmadan önce planı **sade Türkçeyle** sun, onayımı bekle. Ben kod yazmıyorum; kararları teknik olmayan dille açıkla.
- **Onay kapıları.** Her kritik adımda dur, onay al. "Devam/Olur/Evet" gelmeden ilerleme.
- **Varsayma — sor.** Emin değilsen sor. Muğlak gereksinimi kendi kafana göre doldurma (bu "%20 sorunu"nun tuzağı). Bir varsayım yaptıysan **açıkça işaretle.**
- **Küçük, gözden geçirilebilir adımlar.** Büyük tek seferlik değişiklik yok; her adımı özetle, ne yaptığını ve nasıl test edileceğini söyle.
- **2-3 seçenek sun** kritik kararlarda; artı/eksi ile. Daha iyi bir araç/yaklaşım varsa söyle.
- **Beni test edip karar verirken yönlendir:** her adımda "şunu şöyle kontrol et / şu çıktı şu demek" diye net doğrulama talimatı ver.

## Agentic disiplin (vibe coding değil)
- **Önce doğrulama, sonra kod.** Bir bileşeni kurmadan, onun "doğru" sayılma ölçütünü (kabul testi/kontrol) tanımla; sonra ona göre kur. Bkz. `rag-base-spec.md` §8 kabul kriterleri.
- **Korkuluklar (guardrails/hooks):** gizli anahtarları koda yazma (env/secret); commit öncesi sır/anahtar sızıntısı kontrolü; migration'ları versiyonla.
- **Gözlemlenebilirlik:** pipeline adımlarını logla (kaç kaynak, kaç chunk, hata) ki "sessiz sapma" olmasın.
- **Her ürettiğin satırı gözden geçirilebilir kıl:** uydurma paket/kütüphane çağırma; hata yönetimini gerçek başarısızlıklara göre yaz.

## Kilitli kararlar (DEĞİŞTİRME — gerekçe: ARCHITECTURE_DECISIONS.md)
- Stack: Supabase (Postgres + pgvector + RLS + Auth). **Keycloak/Docker/Go YOK** — auth Supabase'in içinde.
- Embedding: OpenAI `text-embedding-3-large`, `dimensions=1536`, **abstraction katmanı arkasında** (sağlayıcı değiştirilebilir).
- Loglar modül başına ayrı tablo + cross-modül view; doğum verisi izole `birth_data`.
- Motor tablosu vault'a köprülü (`engine_rules.source_chunk_refs[]` → `vault_chunks`).

## Sert güvenlik & dürüstlük kuralları
- **Uydurma yok:** sahte kaynak/URL/atıf üretme; emin değilsen "doğrulayamıyorum" de.
- **KVKK:** kullanıcı verisi (özellikle `birth_data`) RLS ile korunur; hesap silme cascade; runtime sorgu embedding'i 3. tarafa gider (işaretle).
- **Kullanıcıya asla:** yazar/kaynak adı gösterme (iç katman); tıbbi teşhis/iddia; doz.
- Bu repo **base**; UI, içerik dolumu, astro hesap motoru (Faz 5) KAPSAM DIŞI.

## Bağlam haritası (hangi dosya ne için)
- `rag-base-spec.md` → yapılacak işin tam tarifi (birincil).
- `ARCHITECTURE_DECISIONS.md` → kilitli kararlar ve gerekçe.
- `sources/` → 46 kaynak (+manifest.json) = RAG ingest'in işleyeceği veri.
- `modules/` → mood.json, journal.json = log tablolarının alanları buradan.
- `contraindications.json` → güvenlik filtresi (toksik/T0 → app_safe=false).
- `specs/` → sekme ekran spec'leri (ana-sayfa v1.2 · kesif v1.1 · sohbet v1.1 · bahce v1.2) + karar günlüğü (5 Tem) + hook-sentez v1.2. UI build bu fazda hâlâ kapsam dışı; süreklilik/handoff referansıdır.
- `arsiv/` → tarihsel belgeler; geçerli kaynak değildir.

## Maliyet
Embedding'i **Batch API** ile yap (toplu, ucuz). Küçük korpus → toplam birkaç dolar. Gereksiz büyük-model çağrısından kaçın.
