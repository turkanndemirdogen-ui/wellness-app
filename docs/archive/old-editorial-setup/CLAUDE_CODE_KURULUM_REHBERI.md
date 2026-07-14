# CLAUDE CODE'U NEREDEN AÇMALISIN?

Claude Code'u **uygulama repository'sinin kök klasöründen** aç.

Doğru kök klasör genellikle şunları aynı seviyede içerir:

```text
your-app/
├── package.json
├── app.json veya app.config.*
├── src/ veya app/
├── assets/
├── docs/
├── CLAUDE.md
└── .git/
```

Örnek:

```powershell
cd C:\Users\KULLANICI\Projects\wellness-app
claude
```

Claude Code'u şuralardan açma:

```text
src/
assets/content/
docs/
02_CIKTI/
tek bir JSON klasörü
```

Çünkü bu durumda proje mimarisini ve kök `CLAUDE.md` dosyasını eksik görebilir.

## Kurulum

1. Bu paketteki `CLAUDE.md` dosyasını gerçek proje köküne koy.
2. `docs/editorial/EDITORIAL_MASTER_SPEC.md` dosyasını gerçek projedeki aynı yola koy.
3. Önceki geçici edit promptlarını:
   `docs/archive/old-editorial-prompts/`
   altına taşı veya proje dışına çıkar.
4. Onaylanmış final JSON'ları gerçek uygulamanın kullandığı aktif content/data yollarına kopyala.
5. Aynı içeriğin eski JSON sürümlerini aktif içerik klasöründen kaldır.
6. Git commit oluştur:
   `chore(content): adopt editorial master spec and final Turkish copy`

## Eski tasarım talimatlarını silmeli misin?

Hayır, **ürünün çalışmasını belirleyen güncel mimari ve tasarım spec'lerini silme.**

Korunacaklar:
- veri modeli
- ekran akışları
- bileşen davranışı
- güvenlik motoru
- Free/Pro kuralları
- tasarım sistemi
- API ve backend mimarisi

Aktif bağlamdan çıkarılacaklar:
- bu edit sürecinde kullanılan geçici promptlar
- birbiriyle çelişen eski dil notları
- sohbet dökümleri
- artık geçerli olmayan brainstorming belgeleri
- aynı içeriğin eski kopyaları

Yeni çalışma ilkesi:

```text
Nasıl çalışıyor?  → mimari / ürün spec'i
Nasıl görünüyor?  → tasarım sistemi
Nasıl konuşuyor?  → EDITORIAL_MASTER_SPEC.md
```

Yeni editorial dosyası tasarım ve mimarinin yerini almaz; yalnızca dil alanında tek otorite olur.
