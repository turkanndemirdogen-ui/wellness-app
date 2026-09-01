# process-direct.py — DOĞRUDAN referans işleme (AI üretimi YOK; ürün sahibi kararı 2026-08-28).
# CC0/PD kaynak görsel -> kırpım (4:5) -> 800x1000 Lanczos -> seri ışık/renk uyumu
# (altın-saat sıcaklık, doygunluk, yumuşak odak-dışı bulanıklık, hafif sıcak parıltı)
# -> WebP q~82 <=220 KB + metadata.json (10 §9; aiGenerated:false, sourceStatus:public-domain).
# Reçete: scripts/asset-gen/direct-recete.json
# Kullanım: python scripts/asset-gen/process-direct.py [herb_id ...] [--out=<sonek>]
import json
import sys
from datetime import date
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter, ImageStat

HERE = Path(__file__).parent
REC = json.loads((HERE / "direct-recete.json").read_text(encoding="utf-8"))
BATCH = json.loads((HERE / "batch1-recete.json").read_text(encoding="utf-8"))
WORK = Path(BATCH["_meta"]["calisma_klasoru"])
STAGING = WORK / "staging"
REFS = WORK / "references"
BUDGET = 220 * 1024
OUT_W, OUT_H = 800, 1000

wanted = [a for a in sys.argv[1:] if not a.startswith("--")]
sonek = next((a.split("=", 1)[1] for a in sys.argv if a.startswith("--out=")), "")


def radial(size, cx, cy, rx, ry, feather):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=255)
    return m.filter(ImageFilter.GaussianBlur(feather))


def process(im, p):
    im = im.convert("RGB")
    # 0) etiket/barkod dolgusu (KAYNAK koordinatı; renk kutunun hemen solundan örneklenir — crop-refs.py kalıbı)
    for fx1, fy1, fx2, fy2 in p.get("doldur", []):
        fill = im.getpixel((max(fx1 - 12, 0), (fy1 + fy2) // 2))
        im.paste(fill, (fx1, fy1, fx2, fy2))
    im = im.crop(tuple(p["kirpim_box"]))
    sx, sy = OUT_W / im.width, OUT_H / im.height
    im = im.resize((OUT_W, OUT_H), Image.LANCZOS)
    # 1) yeşil ton/doygunluk düzeltmesi (suluboya/gravür kaynaklarda: seri canlı yeşili)
    if p.get("yesil_ton_kaydir") or p.get("yesil_doygunluk"):
        h, s, v = im.convert("HSV").split()
        if p.get("yesil_ton_kaydir"):
            lo, hi, dh = p["yesil_ton_kaydir"]  # PIL ton aralığı (0-255) ve kaydırma
            h = h.point(lambda t: (t + dh) % 256 if lo <= t <= hi else t)
        if p.get("yesil_doygunluk"):
            lo2, hi2, k = p["yesil_doygunluk"]  # ton aralığı + doygunluk çarpanı
            band = h.point(lambda t: 255 if lo2 <= t <= hi2 else 0)
            s = Image.composite(s.point(lambda x: min(255, int(x * k))), s, band)
        im = Image.merge("HSV", (h, s, v)).convert("RGB")
    # 2) odak dışı bulanıklık (bokeh taklidi): elips içi keskin, dışı yumuşak
    if p.get("odak_elips"):
        cx, cy, rx, ry = p["odak_elips"]
        m = radial(im.size, cx * sx, cy * sy, rx * sx, ry * sy, p.get("odak_yumusatma", 60))
        im = Image.composite(im, im.filter(ImageFilter.GaussianBlur(p.get("bulanik", 6))), m)
    # 3) altın-saat renk dengesi: kırmızı/yeşil hafif yukarı, mavi aşağı + siyahları kaldıran sıcak pus
    wr, wg, wb = p.get("sicaklik", [1.06, 1.01, 0.90])
    lift = p.get("pus", 10)
    r, g, b = im.split()
    r = r.point(lambda v: min(255, v * wr + lift))
    g = g.point(lambda v: min(255, v * wg + lift * 0.8))
    b = b.point(lambda v: max(0, min(255, v * wb + lift * 0.4)))
    im = Image.merge("RGB", (r, g, b))
    im = ImageEnhance.Color(im).enhance(p.get("doygunluk", 1.15))
    im = ImageEnhance.Contrast(im).enhance(p.get("kontrast", 1.03))
    im = ImageEnhance.Brightness(im).enhance(p.get("parlaklik", 1.0))
    # 4) sıcak parıltı (güneş): köşeden yumuşak sarı-beyaz ışık, screen karışımı
    if p.get("parilti"):
        gx, gy, gr, strength = p["parilti"]  # göreli konum (0-1), yarıçap (px), güç (0-1)
        glow = Image.new("RGB", im.size, tuple(p.get("parilti_renk", [255, 226, 170])))
        m = radial(im.size, gx * OUT_W, gy * OUT_H, gr, gr, gr * 0.6).point(lambda v: int(v * strength))
        im = Image.composite(ImageChops.screen(im, glow), im, m)
    # 5) hafif kenar karartma (vinyet) — seri kartlarındaki doğal ışık düşüşü
    if p.get("vinyet", 0):
        k = p["vinyet"]
        m = radial(im.size, OUT_W / 2, OUT_H / 2, OUT_W * 0.75, OUT_H * 0.75, 120).point(lambda v: 255 - int((255 - v) * k))
        im = Image.composite(im, ImageEnhance.Brightness(im).enhance(0.8), m)
    return im


fail = 0
for herb in REC["bitkiler"]:
    hid = herb["herb_id"]
    if wanted and hid not in wanted:
        continue
    src = REFS / hid / herb["kaynak_dosya"]
    if not src.exists():
        print(f"X {hid}: kaynak yok {src}")
        fail += 1
        continue
    with Image.open(src) as im0:
        im = process(im0, herb)
    d = STAGING / hid
    d.mkdir(parents=True, exist_ok=True)
    out = d / f"card-01{sonek}.webp"
    q = 82
    for q in range(82, 17, -4):
        im.save(out, "WEBP", quality=q, method=6)
        if out.stat().st_size <= BUDGET:
            break
    size = out.stat().st_size
    if size > BUDGET:
        print(f"X {hid}: {size // 1024} KB bütçe aşımı")
        fail += 1
        continue
    r, g, b = ImageStat.Stat(im).mean
    _, s, v = ImageStat.Stat(im.convert("HSV")).mean
    b1 = [x for x in BATCH["bitkiler"] if x["herb_id"] == hid][0]
    grade_keys = ("doldur", "yesil_ton_kaydir", "yesil_doygunluk", "odak_elips", "bulanik", "sicaklik", "pus", "doygunluk", "kontrast", "parlaklik", "parilti", "vinyet")
    meta = {
        "assetId": b1["assetId"],
        "domain": "botanical",
        "entityId": hid,
        "assetType": "editorial-botanical",
        "scientificName": b1["scientificName"],
        "commonNameTr": b1["commonNameTr"],
        "family": b1["family"],
        "plantPartsShown": herb["plantPartsShown"],
        "morphologyVerified": False,
        "colorAccuracy": "pending-review",
        "toxicityContext": "none",
        "sourceStatus": "public-domain",
        "licenseReference": "ASSET-LICENSES.md §4d (doğrudan kullanım — işlenmiş CC0 kaynak)",
        "aiGenerated": False,
        "symbolicEnhancement": False,
        "source": {
            "commonsTitle": herb["commonsTitle"],
            "author": herb["yazar"],
            "license": herb["lisans"],
            "file": herb["kaynak_dosya"],
            "originalSize": herb.get("kaynak_boyut"),
        },
        "processing": {
            "method": "direct-crop-and-grade (no generative model)",
            "crop": herb["kirpim_box"],
            "output": "800x1000 WebP (Lanczos)",
            "grade": {k: herb.get(k) for k in grade_keys if herb.get(k) is not None},
            "quality": q,
            "bytes": size,
        },
        "createdAt": date.today().isoformat(),
        "approvedBy": "pending-contact-review",
        "regenNote": herb.get("not", ""),
    }
    (d / f"metadata{sonek}.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"OK {hid}: {out.name} {size // 1024} KB (q={q})  S={s:.0f} V={v:.0f} R-B={r - b:.0f}  [seri hedefi S=152 V=148 R-B=63]")

print("BITTI" if not fail else f"{fail} HATA")
sys.exit(1 if fail else 0)
