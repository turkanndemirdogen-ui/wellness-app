# RAG & Veri Tabanı Base — Claude Code Spec (v1)

> **Bu dosya nedir:** Claude Code'un üzerine inşa edeceği **sağlam temel** spec'i. Kapsam = Supabase şeması + RAG ingest pipeline + embedding kurulumu + güvenlik kancaları. **App arayüzü, içerik dolumu ve astro hesap motoru bu base'in DIŞINDA** (sonraki fazlar).
> **Nasıl kullanılır:** Claude Code'a "Bu spec'i uygula; her tabloyu ve pipeline adımını kur, kabul kriterlerini geçir" diye ver. Belirsizlikte spec'teki "teyit et" notlarını sor.
> **Dayandığı kararlar:** ARCHITECTURE_DECISIONS.md (Faz 0-2 kilitli) · sifa-bahcesi-veri-kontrati.md · kisisellestirme-katmani.md.

---

## 1. Teknik bağlam (kilitli)
- DB/Backend: **Supabase (Postgres + pgvector + RLS)**.
- Embedding: **OpenAI `text-embedding-3-large`, `dimensions=1536`** (Matryoshka kırpma). Batch API ile toplu indeksleme (maliyet 50% düşer).
- **Embedding abstraction katmanı (C-light):** embedding çağrısı tek bir arayüzün arkasında (`embed(texts) -> vectors`). Sağlayıcı/model/boyut **config'ten** gelir; ileride değişirse tek yerden değişsin. Vektör boyutu şemada sabit (1536) — model değişirse yeniden-embed + yeniden-indeks gerekir (korpus küçük, ucuz).
- Üretim (içerik/sohbet): Claude API — bu base'in kapsamı değil, yalnız tablo/pipeline hazırlanır.

---

## 2. Şema — Faz 1: Operasyonel (per-user, dinamik)

> Tümü RLS ile korunur: kullanıcı yalnız kendi satırını görür. `birth_data` izole + en sıkı kural.

- **`profiles`** — `id (auth.users FK)`, `display_name`, `locale`, `prefs jsonb`, `created_at`. (Genel, sık okunur.)
- **`birth_data`** — `user_id FK`, `birth_date`, `birth_time`, `birth_time_known bool`, `birth_place (lat/lon/tz)`, `created_at`. **İzole tablo; bir kez yazılır, natal hesabı için bir kez okunur.** En sıkı RLS. (D1.2) · **Not:** doğum saati çoğu kullanıcıda bilinmez → bilinmiyorsa natal hesap ev/yükselen olmadan, Güneş-burcu temelli çalışır (onboarding fallback; Faz 5 hesabı bunu desteklemeli).
- **`natal_charts`** — `user_id FK`, `chart jsonb` (gezegen/ev/açı tam yapı), + sık alanlar sütun: `sun_sign`, `moon_sign`, `asc_sign`, `dominant_element`. Kullanıcı başına 1 satır, statik. (Ham doğum verisine değil, hep buna bakılır.)
- **`astro_context_daily`** — `user_id FK`, `date`, `context jsonb` (aktif transitler, ay fazı/burcu, vurgulanan temalar). Kullanıcı × gün. (Üretici = astro servisi, Faz 5; base'de tablo hazır, boş.)
- **Loglar (modül başına ayrı tablo — D1.1):** `mood_logs`, `journal_entries`, `cycle_logs`, `goal_logs` — her biri `user_id FK`, `created_at`, + modüle özel alanlar (`mood_logs`: valence/arousal/note…). Yapı her tabloda net (esnek-tek-tablo değil).
- **`reminder_settings`** — `user_id FK`, ayar alanları (su/hareket/uyku/takviye + saatler). (Log değil, ayar.)
- **`subscriptions`** — `user_id FK`, `entitlement`, `status`, `valid_until`, `revenuecat_id`. RevenueCat webhook günceller; gating buradan okunur.
- **`derived_content_cache`** — anahtar: `user_id + date + content_type`, `payload jsonb`, `created_at`. Pahalı günlük AI çıktısını saklar (günün sözü, denge analizi…). (Strateji Faz 5; base'de tablo hazır.)

- **Cross-modül view (D1.1):** `user_timeline` — tüm `*_logs`'u `user_id + created_at + type` ile birleştiren read-only view. Fiziksel ekstra tablo yok.

---

## 3. Şema — Faz 2: İçerik / RAG (paylaşılan bilgi, per-user değil)

### 3a. RAG çekirdeği
- **`vault_chunks`** — `chunk_id PK`, `source_id`, `bolum`, `text`, `embedding vector(1536)`, `guven_tier (enum: dogrulanmis_cekirdek|tekil_gelenek|anlati_only|app_disi)`, `tema text[]`, `planet_keys text[]`, `sign_keys text[]`, `riskli_madde bool`, `app_safe bool`, `visibility (enum: user|agent_only|excluded)`, `meta jsonb`. → pgvector index (bkz. §6).
- **`engine_rules`** — motor tablosu (Keşif içeriği). Tetik anahtarı (D2.3): `transit_planet`, `aspect_quality (sert|yumusak)`, `natal_target`, `sign_modifier (nullable)`, `house_modifier (nullable)`. İçerik: `theme_internal`, `user_text`, `body_zone`, `herb_motif`, `evidence_label`, `priority`, **`source_chunk_refs uuid[]` → `vault_chunks` (köprü/provenance, D2.1)**. (Base'de tablo + örnek birkaç satır; tam dolum sonra.)

### 3b. vault_static içerik tabloları (Keşif/Bahçe UI — ilişkisel)
> Kontrattan: `herbs`, `planet_herb` (`toksik_filtre`, `app_safe`), `herb_stories`, `melothesia`, `element_balance`, `cell_salts`. Base'de **tablo iskeletleri** kurulur; içerik dolumu sonra (veri eksikleri).
> Ortak güvenlik alanları: `app_safe bool`, `toksik_filtre bool`, `pregnancy{status,text}`, `guven_tier`, `evidence_urls text[]`, `names{tr,en,la}` (en/la yalnız iç alias — UI'da gösterilmez).

---

## 4. RAG ingest pipeline
Girdi: 46 temiz MD kaynağı (`kaynak-kutuphanesi/temiz/`) + `manifest.json` (tema, riskli_madde, guven_tier, **visibility**).

Adımlar (idempotent, yeniden-çalıştırılabilir):
1. **Oku** kaynak MD + manifest meta.
2. **Chunk'la (D2.2):** yapısal/anlamsal birim = chunk (YAML/bölüm birimi; sabit boyut DEĞİL). Her chunk'a stabil `chunk_id` (kaynak+birim hash) — `engine_rules.source_chunk_refs` çözülebilsin.
3. **Metadata ekle:** `source_id, bolum, guven_tier, visibility, tema, planet/sign_keys, riskli_madde, app_safe`.
4. **Güvenlik & görünürlük filtresi (ingest-anı):**
   - `guven_tier=app_disi` veya toksik T0 → `app_safe=false` (silme; izlenebilirlik için tut).
   - `visibility` manifest tabanından gelir; **karışık kaynaklar chunk-düzeyinde inceltilir** (manifest `visibility_not`): fatalist prognoz/ameliyat-zamanlama (Millard) + hastalık-transferi/aşı-karşıtı (Paracelsus-sempatik) chunk'ları → `excluded` (hiç yüklenmez/aranmaz). Hastalık-atfı/teşhis chunk'ları → `agent_only`. Kalan → kaynak tabanı.
5. **Embed:** abstraction katmanı → OpenAI 3-large/1536, **Batch API** ile toplu.
6. **Upsert** `vault_chunks`'a (`chunk_id` çakışırsa güncelle — idempotent).

---

## 5. Retrieval (base'de fonksiyon olarak hazır)
- **Anlamsal — iki mod (görünürlük duvarı):**
  - *Kullanıcı modu* (Keşif + kullanıcıya dönen yanıt): `WHERE visibility='user' AND app_safe=true AND guven_tier <> 'app_disi' [AND guven_tier IN (...)] ORDER BY embedding <=> :q LIMIT k`.
  - *Agent modu* (sohbet iç-içgörü; kullanıcıya HAM dönmez): `WHERE visibility IN ('user','agent_only') AND app_safe=true ORDER BY embedding <=> :q LIMIT k`. Dönen `agent_only` içerik **guardrail'dan geçmeden** kullanıcı yanıtına çıkamaz (§7).
- **Kesin lookup (motor):** `engine_rules`'tan `(transit_planet, aspect_quality, natal_target)` ile birebir kural çek; `source_chunk_refs` ile kaynak chunk'lara bağlan. (Fuzzy değil, kesin.)
- İki yol ayrı: vault = anlamsal, engine = anahtarlı.

---

## 6. pgvector index (Claude Code teyit etsin)
- Güncel Supabase pgvector sürümünü kontrol et; **HNSW** öner (yoksa IVFFlat). Mesafe: kosinüs (`vector_cosine_ops`).
- Korpus küçük; parametreler varsayılan başlasın, ölçüp ayarla.

---

## 7. Güvenlik & KVKK kancaları
- **RLS** tüm per-user tablolarda; `birth_data` en sıkı.
- **Yazar/kaynak adı asla kullanıcıya gitmez:** `source_id`, `source_chunk_refs` sunucu-tarafı alanlar; API yanıtlarında **dışarı sızdırma**. UI'a yalnız `user_text`/içerik gider.
- **KVKK — runtime sorgu embedding'i:** kullanıcı sorgusu embed için OpenAI'a gider → kullanıcı metni 3. tarafa çıkar. Aydınlatma/rıza Faz 7'de; base'de bu çağrı **abstraction katmanında işaretli** olsun (ileride yerelleştirilebilir/maskelenebilir).
- **Toksik/app_disi filtre** retrieval'da daima aktif (varsayılan açık).
- **Görünürlük duvarı (visibility — iki bariyer, defense-in-depth):** Kullanıcı-yolu yalnız `visibility='user'` çeker. `agent_only` içerik yalnız agent'ın iç akıl yürütmesine girer; **kullanıcıya asla teşhis/hastalık adı olarak çıkamaz** — agent bu kaynaklardan yalnız beden-nötr tema/örüntü üretir. `excluded` hiç yüklenmez. **Kat 1** = DB filtresi (yapısal, sorguda kesilir); **Kat 2** = Claude API guardrail (agent_only'den hastalık adı/tanı üretme yasağı). Teşhis, iki bariyeri birden aşmadan kullanıcıya gidemez.
- **KVKK hakları:** hesap silme → `user_id` cascade (tüm `*_logs`, `birth_data`, `natal_charts`, `astro_context_daily`, `derived_content_cache` temizlenir) + veri dışa-aktarma uç noktası planlanır (Faz 7). Base'de cascade FK'ler **baştan doğru** kurulsun ki sonradan eklemek kolay olsun.

---

## 8. Kabul kriterleri (Claude Code geçirsin)
1. Şema temiz migrate olur; RLS açık; `birth_data` izole.
2. Ingest pipeline **1-2 örnek kaynak** üzerinde uçtan uca çalışır → `vault_chunks` aranabilir dolar.
3. `embed()` config'ten model/boyut alır; sağlayıcı değiştirilebilir (abstraction çalışıyor).
4. Retrieval fonksiyonu metadata filtresiyle güvenli sonuç döner; `app_disi`/`app_safe=false` gelmez.
5. Pipeline idempotent: ikinci çalıştırma çift kayıt üretmez.
6. `engine_rules` örnek satırı `source_chunk_refs` ile gerçek `vault_chunks`'a çözülür. **[ERTELENDİ — Adım 4]** #6 kabul kriteri ertelendi — gerekçe: mimari karar gereği engine_rules eşleştirmesi ilişkisel/RAG-dışı; provenance köprüsü refine fazında ele alınacak. (`source_chunk_refs` şimdilik boş yüklenir.)
7. **Görünürlük:** kullanıcı-modu retrieval yalnız `visibility='user'` döner (`agent_only`/`excluded` sızmaz); agent-modu `agent_only` döndürebilir, guardrail hastalık adı/teşhisi kullanıcı yanıtından ayıklar.

---

## 9. Kapsam DIŞI (bu base'de yok — sonraki fazlar)
- App arayüzü / sekmeler (Faz 6).
- İçerik dolumu: motor tablosu tam, vault_static içerik, bitki kartları (veri eksikleri).
- Astro hesap motoru: AstroAPI/ephemeris, natal & transit hesabı (Faz 5).
- Gating mantığı detayı (Faz 7) — `subscriptions` tablosu hazır, kural sonra.
- Günlük üretim/cache stratejisi (önceden mi/anlık mı — Faz 5).

---

## 10. Açık / teyit edilecek (Claude Code başlarken sorsun)
- Güncel pgvector sürümü + önerilen index (HNSW/IVFFlat).
- OpenAI embedding `dimensions=1536` parametresi doğrulansın.
- Supabase RLS politikalarının tam ifadesi (özellikle `birth_data`).
- `*_logs` tablolarının modüle özel alanları, ilgili modül `*.json`'larından kesinleştirilecek.

---

## 11. Ops hijyeni (Claude Code baştan kursun)
- **Gizli anahtarlar env/secret'te** (OpenAI, RevenueCat, AstroAPI) — koda gömme.
- **Versiyonlu migration**'lar (Supabase migrations) — şema değişiklikleri izlenebilir olsun.
- **Boyut/index uyumu:** 1536 boyut bilinçli seçim — pgvector HNSW geçmişte ~2000 boyut üstünde sınırlıydı; 1536 güvenli tarafta (3072 olsaydı index sorunu çıkabilirdi).
- Embed çağrılarını **Batch API** ile yap (toplu indeksleme; maliyet/limit dostu).
- **Hook (korkuluk):** commit öncesi sır/anahtar sızıntısı kontrolü (sabit-kodlanmış anahtarı engelle).
- **Gözlemlenebilirlik:** ingest ve retrieval adımlarını yapılandırılmış logla (işlenen kaynak sayısı, üretilen chunk sayısı, filtrelenen/atlanan, hatalar) — "sessiz sapma" görünür olsun.
- **Doğrulama önce:** her bileşen için önce kabul ölçütü (§8), sonra kod. Test/eval = AI ile sözleşme.
