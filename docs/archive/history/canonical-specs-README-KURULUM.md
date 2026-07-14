# Canonical Specs Kurulum Paketi

Bu paketin içeriğini proje köküne kopyala; klasör yollarını koru.

```text
CLAUDE.md
docs/
  governance/GOVERNANCE_MASTER.md
  architecture/ARCHITECTURE_DECISIONS.md
  design/PRODUCT_DESIGN_SYSTEM_MASTER.md
  editorial/EDITORIAL_MASTER_SPEC.md
  safety/SAFETY_MASTER_SPEC.md
  operations/REPOSITORY_CLEANUP_TASK.md
  archive/old-editorial-prompts/
```

`ARCHITECTURE_DECISIONS.md`, yüklenen proje ZIP’indeki mevcut arşiv kopyasından alınmıştır. Claude bunu aktif kod ve Supabase migration’larıyla doğrulamalı, sessizce yeniden yazmamalıdır.

## Claude’a verilecek komut

Kök `CLAUDE.md` ve Governance dosyasını oku. Mevcut `PROJECT-INVENTORY.md` ve `CLEANUP-PLAN.md` ile birlikte `docs/operations/REPOSITORY_CLEANUP_TASK.md` görevini uygula.

Kanonik master dosyaları koru. Kod davranışını, tasarımı ve kullanıcı metinlerini değiştirme. Kalıcı silme yalnızca açıkça yeniden üretilebilir artefaktlarla sınırlı olsun. Kök repo ile mobile nested repo işlemlerini ayır. Commit atmadan önce raporları ve diff özetini göster.
