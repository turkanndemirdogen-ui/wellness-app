# contact-sheet.py — Kontak sayfası: üretilen kart + PD referans plakası yan yana.
# İnsan onay turu için (A0 brief §10). Çıktı: <staging>/kontak-<tarih>.png
# Kullanım: python scripts/asset-gen/contact-sheet.py

import json
from datetime import date
from pathlib import Path

from PIL import Image, ImageDraw

HERE = Path(__file__).parent
RECETE = json.loads((HERE / "batch1-recete.json").read_text(encoding="utf-8"))
WORK = Path(RECETE["_meta"]["calisma_klasoru"])
STAGING = WORK / "staging"
REF_ROOT = WORK / "references"

CARD_H = 420          # hücre içi görsel yüksekliği
LABEL_H = 34
PAD = 14
COLS = 3              # her hücre: [kart | referans] çifti


def ref_file(hid):
    d = REF_ROOT / hid
    crops = sorted(d.glob("ref-crop.*")) if d.is_dir() else []
    plates = sorted(d.glob("ref-plate.*")) if d.is_dir() else []
    return crops[0] if crops else (plates[0] if plates else None)


def load_h(path, h):
    with Image.open(path) as im:
        im = im.convert("RGB")
        w = round(im.width * h / im.height)
        return im.resize((w, h), Image.LANCZOS)


cells = []
for herb in RECETE["bitkiler"]:
    hid = herb["herb_id"]
    card_p = STAGING / hid / "card-01.webp"
    ref_p = ref_file(hid)
    card = load_h(card_p, CARD_H) if card_p.exists() else None
    ref = load_h(ref_p, CARD_H) if ref_p else None
    cells.append((herb, card, ref))

cell_w = max((c.width if c else 100) + (r.width if r else 100) + PAD for _, c, r in cells)
cell_h = CARD_H + LABEL_H
rows = (len(cells) + COLS - 1) // COLS
sheet = Image.new("RGB", (COLS * (cell_w + PAD) + PAD, rows * (cell_h + PAD) + PAD), "#f4f1ea")
draw = ImageDraw.Draw(sheet)

for i, (herb, card, ref) in enumerate(cells):
    x = PAD + (i % COLS) * (cell_w + PAD)
    y = PAD + (i // COLS) * (cell_h + PAD)
    cx = x
    if card:
        sheet.paste(card, (cx, y)); cx += card.width + PAD
    else:
        draw.text((cx, y + CARD_H // 2), "KART YOK", fill="red"); cx += 110
    if ref:
        sheet.paste(ref, (cx, y))
    label = f"{herb['herb_id']} · {herb['scientificName']} · cond {herb['cond']} seed {herb['seed']}"
    draw.text((x, y + CARD_H + 8), label, fill="#333")

out = STAGING / f"kontak-{date.today()}.png"
sheet.save(out)
print(f"Kontak sayfasi: {out}")
