# KALINAN YER — Karar & İlerleme Günlüğü

> Oturumlar arası süreklilik / handoff notu: kilitli kararların hızlı özeti +
> nerede kaldığımız. Ayrıntılı gerekçeler: `ARCHITECTURE_DECISIONS.md`.

## Durum (2026-07-10)
- **Veri temeli + RAG (Adım 1-4) TAMAM** — şema, ingest+embedding (420 chunk), iki-mod retrieval + rol duvarı, engine eşleştirme, content upsert. Testler geçti.
- **Expo app shell (Adım 5) TAMAM** — 4-tab shell (kilitli sıra: Ana Sayfa · Keşif · Bahçe · Sohbet), Supabase client, astro abstraction (mock), auth iskeleti, pudra tema, Ana Sayfa mock transit wiring.
- İki repo commit'li: kök (veri temeli) + `mobile/` (Expo iskelet).
- **Sıradaki:** Faz 5 (Swiss Ephemeris astro motoru — K4-3) · Faz 6 (UI — KS-1 uygulanır).

## Kararlar

### KS serisi — Keşif / kart tasarımı

- **KS-1 — Herb kartı (Keşif) final tasarım (2026-07-10, KİLİTLİ; Faz 6'da uygulanır):**
  - **Liste düzeni:** dikey kart akışı (tek sütun, büyük kartlar) — "soft-witchery" feed hissi. (Gezegen-gruplu yatay şeritler = v-next hedefi, şimdi DEĞİL.)
  - **Kart yüzü:** botanik illüstrasyon + bitki adı (serif başlık) + `tek_satir` + köşede narin gezegen glyph. **Detay ekranı:** `story_narrative` · `ritual` · `evidence_bridge` · `safety_tags` (veri kontratı C bölümüyle hizalı).
  - **Renk sistemi:** gezegen→pudra ton eşlemesi (kod-üretilebilir tablo). Ay→pudra mavi · Venüs→pudra pembe · Güneş→kavun içi · Mars→melon · Satürn→lila (diğerleri tasarımda netleşir). Kart zemini = o tonun çok açık hali. (Mobil `constants/theme.ts` pudra token'larıyla hizalanır.)
  - **İllüstrasyon:** AI üretimi. Zorunlu kurallar: (1) tek sabit stil-prompt + referans görselle 37 bitki (stil kayması minimize); (2) her illüstrasyon gerçek bitkiyle doğruluk kontrolünden geçer (yanlış tür = güven kaybı); (3) kullanılan aracın ticari lisansı doğrulanır.
  - **Güvenlik:** kartta doz/hastalık/teşhis YOK; "geleneksel olarak kullanılır" çerçevesi; kaynak/atıf görünmez (iç katman).
