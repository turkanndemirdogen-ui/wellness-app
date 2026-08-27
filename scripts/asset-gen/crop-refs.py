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
    out = REF_ROOT / hid / "ref-crop.png"
    crop.save(out)
    w, h = crop.size
    ratio = w / h
    warn = " (UYARI: oran 4:5 degil!)" if abs(ratio - 0.8) > 0.02 else ""
    print(f"OK {hid}: {w}x{h} (oran {ratio:.3f}){warn} -> {out.name}")
