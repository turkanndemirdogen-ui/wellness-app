# CLAUDE.md — Proje Kök Talimatı

Bu dosya proje deposunun KÖK dizininde bulunmalıdır.

## Çalışma kapsamı

Bu proje iki ayrı otoriteye sahiptir:

1. **Ürün ve teknik davranış**
   - Mevcut mimari, veri modeli, ekran akışları, güvenlik motoru ve tasarım sistemi belgeleri belirler.
   - Kod, JSON şeması, anahtarlar, id'ler, puanlama ve eşleşme mantığı bu belgelerden yönetilir.

2. **Kullanıcıya görünen Türkçe dil**
   - `docs/editorial/EDITORIAL_MASTER_SPEC.md` tek otoritedir.
   - Yeni veya değiştirilen tüm kullanıcı metinleri bu belgeye uymalıdır.

Bu iki alanı birbirine karıştırma. Editoryal görev, ürün mimarisini değiştirme yetkisi vermez.

## Zorunlu okuma sırası

Her görevde yalnızca ilgili belgeleri oku:

- Kod/mimari görevi:
  1. İlgili mimari veya modül spec'i
  2. İlgili kod dosyaları
  3. Kullanıcı metni değişiyorsa ayrıca `docs/editorial/EDITORIAL_MASTER_SPEC.md`

- Sadece metin görevi:
  1. `docs/editorial/EDITORIAL_MASTER_SPEC.md`
  2. Düzenlenecek dosya
  3. Gerekliyse ilgili güvenlik spec'i

Tüm `docs` klasörünü gelişigüzel bağlama yükleme. Yalnızca görev için gerekli belgeleri aç.

## Eski talimatlar

`docs/archive/old-editorial-prompts/` içindeki dosyalar tarihsel arşivdir.
- Aktif talimat değildir.
- Karar kaynağı olarak kullanma.
- Kullanıcı açıkça geçmiş kararı incelemeni istemedikçe okuma.

## JSON içerik düzenleme kuralları

- Girdi dosyasını değiştirmeden önce şemasını incele.
- Yalnızca kullanıcıya görünen metin alanlarını düzenle.
- `_meta` / teknik `meta` alanlarını, anahtarları, id'leri, puanlamayı, eşleşmeleri, kodları, sayıları ve mimariyi değiştirme.
- Emin olmadığın alanı değiştirme.
- Düzenleme sonrasında JSON parser ile doğrula.
- Mimari veya veri tutarsızlığı görürsen kendiliğinden düzeltme; raporla.

## Tek doğru içerik sürümü

Editoryal olarak onaylanmış JSON'lar, projenin aktif içerik dizinindeki dosyalardır.
Aynı dosyanın:
- eski taslaklarını,
- parti kopyalarını,
- sohbetten alınmış metinlerini,
- farklı klasörlerde yinelenen sürümlerini

aktif kaynak ağacında tutma.

Eski sürümleri uygulamanın runtime/content dizininden çıkar ve yalnızca sürüm kontrolünde veya açıkça isimlendirilmiş bir arşiv klasöründe sakla.

## Değişiklik ilkesi

Kullanıcı metni değişirken:
- ürün davranışı aynı kalır,
- yapı aynı kalır,
- yalnızca dil ve anlatı iyileştirilir.

Ürün davranışı veya mimari değişikliği gerekiyorsa bunu ayrı görev olarak ele al.
