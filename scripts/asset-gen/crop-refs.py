# crop-refs.py — batch1-recete.json'daki kirpim_box / beyaz_doldur tanımlarını uygular.
# Kaynak: references/<herb_id>/ref-plate.*  ->  Çıktı: references/<herb_id>/ref-crop.png
# Koordinatlar ORİJİNAL plaka pikselleridir; beyaz_doldur kırpımdan ÖNCE uygulanır.
# Precheck (c) gereği kadraj içinde etiket/şema bırakmamak için kullanılır (A0 §12.2).
# Kullanım: python scripts/asset-gen/crop-refs.py [herb_id ...]   (boş = tanımlı tümü)

import json
import sys
from pathlib import Path

from PIL import Image

HERE = Path(__file__).parent
RECETE = json.loads((HERE / "batch1-recete.json").read_text(encoding="utf-8"))
REF_ROOT = Path(RECETE["_meta"]["calisma_klasoru"]) / "references"

wanted = [a for a in sys.argv[1:] if not a.startswith("--")]

for herb in RECETE["bitkiler"]:
    hid = herb["herb_id"]
    box = herb["ref"].get("kirpim_box")
    if box is None or (wanted and hid not in wanted):
        continue
    plates = sorted((REF_ROOT / hid).glob("ref-plate.*"))
    if not plates:
        print(f"ATLA {hid}: ref-plate yok"); continue
    with Image.open(plates[0]) as im:
        im = im.convert("RGB")
        for fx1, fy1, fx2, fy2 in herb["ref"].get("beyaz_doldur", []):
            # Kâğıt dokusuna karışsın diye dolgu rengi kutunun hemen solundan örneklenir
            # (saf beyaz, canny'de kutu kenarı üretir).
            sx = max(fx1 - 12, 0)
            fill = im.getpixel((sx, (fy1 + fy2) // 2))
            im.paste(fill, (fx1, fy1, fx2, fy2))
        crop = im.crop(tuple(box))
    # FOTOĞRAF referansı (REV4, 2026-08-28): bitki dışı zemin (toprak/saman) canny'ye
    # gürültü olarak giriyor; "arka_plan_bastir": true ise sarı-yeşil ton maskesi dışı
    # bulanıklaştırılır. Kaynak dosya değişmez, yalnız ref-crop üretimi etkilenir.
    if herb["ref"].get("arka_plan_bastir"):
        from PIL import ImageChops, ImageFilter
        h, s, _ = crop.convert("HSV").split()
        # Yeşil yaprak: ton ~51°–170° (PIL 36–120) + doygunluk ≥ 0.25 (toprak/saman dışı).
        # Sarı çiçek: ton ~37°–51° (PIL 26–36) — saman da bu tondadır, o yüzden doygunluk ≥ 0.43.
        green = ImageChops.multiply(h.point(lambda v: 255 if 36 <= v <= 120 else 0), s.point(lambda v: 255 if v >= 64 else 0))
        yellow = ImageChops.multiply(h.point(lambda v: 255 if 26 <= v < 36 else 0), s.point(lambda v: 255 if v >= 110 else 0))
        mask = ImageChops.lighter(green, yellow).filter(ImageFilter.MaxFilter(21)).filter(ImageFilter.GaussianBlur(8))
        radius = max(12, int(crop.width * 0.014))  # canny'nin göreceği ölçekte gerçekten silinsin
        crop = Image.composite(crop, crop.filter(ImageFilter.GaussianBlur(radius)), mask)
    # "odak_elips": [cx, cy, rx, ry] (KIRPIM koordinatları) — elips dışı çok güçlü bulanıklaştırılır;
    # canny'ye yalnız özne girer (Köhler plakasının "boş zemin" etkisi fotoğrafta taklit edilir).
    if herb["ref"].get("odak_elips"):
        from PIL import ImageDraw, ImageFilter
        cx, cy, rx, ry = herb["ref"]["odak_elips"]
        m = Image.new("L", crop.size, 0)
        ImageDraw.Draw(m).ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=255)
        m = m.filter(ImageFilter.GaussianBlur(int(crop.width * 0.03)))
        crop = Image.composite(crop, crop.filter(ImageFilter.GaussianBlur(int(crop.width * 0.045))), m)
    # Soluk suluboya/gravür (REV4 zencefil): "kontrast_artir": true ise zayıf kenarlar
    # (ör. bej rizom) canny'de okunsun diye otokontrast + keskinleştirme uygulanır.
    if herb["ref"].get("kontrast_artir"):
        from PIL import ImageFilter, ImageOps
        crop = ImageOps.autocontrast(crop, cutoff=1).filter(ImageFilter.UnsharpMask(radius=3, percent=180, threshold=2))
    out = REF_ROOT / hid / "ref-crop.png"
    crop.save(out)
    w, h = crop.size
    ratio = w / h
    warn = " (UYARI: oran 4:5 degil!)" if abs(ratio - 0.8) > 0.02 else ""
    print(f"OK {hid}: {w}x{h} (oran {ratio:.3f}){warn} -> {out.name}")
