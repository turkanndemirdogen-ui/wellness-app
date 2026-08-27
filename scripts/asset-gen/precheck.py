# precheck.py — Üretim öncesi ZORUNLU kapı (A0 brief §12.2).
# Dört madde İNSAN/model GÖZÜYLE doldurulur (otomatik metin tespiti denendi ve
# BAŞARISIZ oldu — 2026-07-28; sahte otomatik güvence EKLENMEZ). Bu script yalnız
# ölçülebilir olanı denetler: dosya varlığı, çözünürlük, PRECHECK.json alanları.
#
# Kullanım:
#   python scripts/asset-gen/precheck.py            -> durum raporu
#   python scripts/asset-gen/precheck.py --sheet    -> referans kontrol sayfası (PNG)
#
# PRECHECK.json konumu: <calisma_klasoru>/references/PRECHECK.json
# Şema (bitki başına):
#   { "a_dogru_tur": true, "b_teshis_kadrajda": true,
#     "c_metin_semasi_yok": true, "d_renk_uyumlu": true,
#     "checked_by": "...", "checked_at": "YYYY-MM-DD", "not": "..." }

import json
import sys
from pathlib import Path

HERE = Path(__file__).parent
RECETE = json.loads((HERE / "batch1-recete.json").read_text(encoding="utf-8"))
REF_ROOT = Path(RECETE["_meta"]["calisma_klasoru"]) / "references"
PRECHECK_PATH = REF_ROOT / "PRECHECK.json"

MADDELER = ["a_dogru_tur", "b_teshis_kadrajda", "c_metin_semasi_yok", "d_renk_uyumlu"]


def ref_file(herb_id: str):
    d = REF_ROOT / herb_id
    if not d.is_dir():
        return None
    crop = sorted(d.glob("ref-crop.*"))
    plate = sorted(d.glob("ref-plate.*"))
    return crop[0] if crop else (plate[0] if plate else None)


def main():
    precheck = json.loads(PRECHECK_PATH.read_text(encoding="utf-8")) if PRECHECK_PATH.exists() else {}
    ok = True
    for herb in RECETE["bitkiler"]:
        hid = herb["herb_id"]
        f = ref_file(hid)
        if f is None:
            print(f"BLOK {hid}: referans dosyası yok"); ok = False; continue

        from PIL import Image
        with Image.open(f) as im:
            short = min(im.size)
        warn = "  (uyari: kisa kenar <700px, A0 §12.3)" if short < 700 else ""

        entry = precheck.get(hid, {})
        missing = [m for m in MADDELER if entry.get(m) is not True]
        if missing or not entry.get("checked_by"):
            print(f"BLOK {hid}: precheck eksik -> {missing or 'checked_by bos'}{warn}")
            ok = False
        else:
            print(f"GECTI {hid}: {f.name} {warn} [{entry['checked_by']} {entry.get('checked_at','')}]")

    if "--sheet" in sys.argv:
        make_sheet()
    sys.exit(0 if ok else 1)


def make_sheet():
    from PIL import Image, ImageDraw
    cols, cell_w, cell_h, pad = 4, 360, 500, 12
    herbs = RECETE["bitkiler"]
    rows = (len(herbs) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * (cell_w + pad) + pad, rows * (cell_h + pad) + pad + 20), "white")
    draw = ImageDraw.Draw(sheet)
    for i, herb in enumerate(herbs):
        x = pad + (i % cols) * (cell_w + pad)
        y = pad + (i // cols) * (cell_h + pad)
        f = ref_file(herb["herb_id"])
        if f:
            with Image.open(f) as im:
                im = im.convert("RGB")
                im.thumbnail((cell_w, cell_h - 24))
                sheet.paste(im, (x + (cell_w - im.width) // 2, y))
        draw.text((x, y + cell_h - 20), f"{herb['herb_id']} · {herb['scientificName']}", fill="black")
    out = REF_ROOT / "reference-sheet.png"
    sheet.save(out)
    print(f"Kontrol sayfasi: {out}")


if __name__ == "__main__":
    main()
