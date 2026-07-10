# Teslim & Yayın Checklist — 5 Temmuz 2026

## ✅ İÇERİK — TAMAMLANDI (bu oturum)
- Motor tablo: 37 bitki (gezegen/element/beden/tat/enerjetik/mevsim/güvenlik), atamalar final
- Bitki kartları: 37 tam kart (tek_satir + story_narrative + ritual), Papatya ton şablonu
- Çip türetme kuralları (Keşif burç ekseni, LLM'siz)
- Mevsim haritası: 37 bitki, PARLAMA modeli (kıtlık değil vurgu)
- Gökyüzü metin motoru: 40 kural / 80 varyant (Katman 1a+1b+2) + engine-config
- Söz havuzu: 92 söz (75 usta-çevirisi + 17 özgün) + üretim kuralları
- Quiz: 12/12 ay, hepsi dengeli (min5-6 kapsama), Baskın+Yükselen
- Kriz kaynakları (TR), vault-dışı etkileşim uyarıları (4 madde)
- Spec paketi: 5 sekme + hook-sentez + haftalık-bakış + illüstrasyon + karar günlüğü + ARCH

## 🔧 CLAUDE CODE TARAFI (build)

### ✅ Base — Adım 1-4 TAMAMLANDI (bu oturum · commit d727ffb)
- [x] Operasyonel + içerik/RAG şeması (0001-0002); RLS + fail-closed görünürlük
- [x] RAG ingest + embedding: 420 vault_chunks / 44 kaynak — canlı DB'de aranabilir (0004)
- [x] Seed: 37 bitki · 12 quiz · 40 engine kuralı — idempotent (0003/0006)
- [x] İki-mod retrieval + ROL DUVARI: `match_chunks_user` (yalnız authenticated) · `match_chunks_agent` (yalnız service_role) — sızıntı testi 11/11 (0005)
- [x] Engine eşleştirme (ilişkisel, RAG-dışı): `match_engine_rules` (tetik→kural)
- [x] content upsert: `derived_content_cache` (idempotent)

- [ ] Base faz: vektör store ✅ · operasyonel şema ✅ · RAG ingest ✅ · retrieval+duvar ✅ (Adım 1-4) — **app shell → Faz 6 (kapsam dışı)**
- [ ] OpenAI API anahtarı ($5/ay limit) — ilk embedding anında
- [ ] Supabase URL + anahtarları .env (zip'te YOK, olması gereken)
- [ ] Swiss Ephemeris fizibilite (K4-3=b): lisans (AGPL vs ticari) + Deno/WASM port + natal/transit POC
- [x] İçerik-yenileme komutu (content/*.json idempotent upsert) — ✅ Adım 4 (seed/engine üreticiler + push-chunks upsert)
- [ ] Söz seçim mantığı (90-gün tekrar-yok kuralı) + havuz 92→120
- [ ] İllüstrasyon: LoRA eğitimi (ComfyUI/GPU) + Köhler's gravür seti + programatik silüet
- [ ] Motor eşleştirme motoru (hesap→tetik→kural) — tetik→kural ✅ Adım 4 (`match_engine_rules`); **hesap (natal/transit) → Faz 5**

## ⚠ TÜRKAN TEYİT/KARAR (yayın öncesi — güvenlik & dürüstlük kritik)
- [ ] **TR POLİSAJ (tek redaktör turu):** tüm kullanıcı metinleri — AI-çeviri tınısını doğal Türkçeye çek (build sonrası tek dokunuş, kararlaştırıldı). En yüksek öncelik.
- [ ] Mevsim haritası: 37 bitki botanik-referans teyidi (taslak-claude → dogrulandi-turkan)
- [ ] Kriz hattı 182 (ALO Yaşam Hattı): resmi Sağlık Bakanlığı teyidi + numaraların periyodik kontrolü
- [ ] Vault-dışı etkileşim uyarıları (4 madde): eczacı/hekim teyidi
- [ ] Bilim quizleri (3-8-12): "ESİNLENMİŞTİR / doğrulanmış test değildir" ibaresinin UI'da görünürlüğü
- [ ] AI görsel (LoRA) ticari-kullanım telif teyidi (Türkiye/KVKK)
- [ ] Köhler's/herbaria: 37 bitkinin kaçının arşivde olduğu kapsam kontrolü
- [ ] Vault-dışı 3 bitki (sığırkuyruğu/meşe/aslanpençesi): bağımsız güvenlik doğrulaması
- [ ] Renk paleti hex'leri + font seçimi kesinleştirme (görsel kit "sabit kabul etme" dedi)

## 📋 İÇERİK — GELİŞTİRME (build'e paralel, opsiyonel)
- [ ] earn_actions v1.1 genişletme (nefes/yoga/quiz/neurogame/Akış ekle)
- [ ] Meditasyon içerik havuzu (ses/metin)
- [ ] Yoga stok klip kaynak araştırması
- [ ] Neurogames v1 oyun listesi
- [ ] Paylaşım şablonları ×3 görsel işi (tek kart/albüm/nadir çerçeve)
- [ ] Motor tablo genişletme (37→~50, fabrika→terfi kanalı)
- [ ] Quiz v2: Anadolu tanrıçaları, element ikinci 7'li vb.
