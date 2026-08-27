# postprocess.py — raw 1024x1280 -> Lanczos 800x1000 WebP (q~82, <=220 KB) + metadata.json.
# A0 brief §1.2 (boyut/format kilidi) + 10_ASSET_PIPELINE §6/§9 (bütçe + metadata şeması).
# Kullanım: python scripts/asset-gen/postprocess.py [herb_id ...]   (boş = tümü)

import json
import sys
from datetime import date
from pathlib import Path

from PIL import Image

HERE = Path(__file__).parent
RECETE = json.loads((HERE / "batch1-recete.json").read_text(encoding="utf-8"))
WORK = Path(RECETE["_meta"]["calisma_klasoru"])
STAGING = WORK / "staging"

BUDGET = 220 * 1024  # kart bütçesi (10 §6)

wanted = [a for a in sys.argv[1:] if not a.startswith("--")]
herbs = [b for b in RECETE["bitkiler"] if not wanted or b["herb_id"] in wanted]

fail = 0
for herb in herbs:
    hid = herb["herb_id"]
    raw = STAGING / hid / "raw-1024x1280.png"
    if not raw.exists():
        print(f"ATLA {hid}: raw çıktı yok"); fail += 1; continue

    out = STAGING / hid / "card-01.webp"
    with Image.open(raw) as im:
        im = im.convert("RGB").resize((800, 1000), Image.LANCZOS)
        q = 82
        while q >= 50:
            im.save(out, "WEBP", quality=q, method=6)
            if out.stat().st_size <= BUDGET:
                break
            q -= 6
    size_kb = out.stat().st_size // 1024
    if out.stat().st_size > BUDGET:
        print(f"HATA {hid}: q=50'de bile {size_kb} KB > 220 KB"); fail += 1; continue

    run = json.loads((STAGING / hid / "run.json").read_text(encoding="utf-8"))
    meta = {
        "assetId": herb["assetId"],
        "domain": "botanical",
        "entityId": hid,
        "assetType": "editorial-botanical",
        "scientificName": herb["scientificName"],
        "commonNameTr": herb["commonNameTr"],
        "family": herb["family"],
        "plantPartsShown": herb["plantPartsShown"],
        "morphologyVerified": False,
        "colorAccuracy": "pending-review",
        "toxicityContext": "none",
        "sourceStatus": "ai-generated",
        "licenseReference": "ASSET-LICENSES.md §4 (SDXL Base 1.0 / Open RAIL++-M) + §4b (tür-özel PD plaka) + §4c (Replicate)",
        "aiGenerated": True,
        "symbolicEnhancement": False,
        "recipe": {
            "model": "sdxl-base-1.0",
            "endpoint": f"replicate:{run['model']}",
            "version": run["version"],
            "predictionId": run["predictionId"],
            "controlnet": "edge_canny/pd-plate",
            "conditioningScale": herb["cond"],
            "sampler": "KarrasDPM",
            "steps": RECETE["_meta"]["sabitler"]["steps"],
            "cfg": RECETE["_meta"]["sabitler"]["cfg"],
            "seed": herb["seed"],
            "stage": "ORTA" if herb["atmosfer"] == "ORTA" else "ORTA-kisik",
            "size": "1024x1280->800x1000",
        },
        "createdAt": str(date.today()),
        "approvedBy": "pending-contact-review",
        "regenNote": "2026-08-27 rekonstrüksiyon üretimi (Batch-1 Temp kaybı sonrası); onay turu bekliyor.",
    }
    (STAGING / hid / "metadata.json").write_text(
        json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"OK {hid}: card-01.webp {size_kb} KB (q={q}) + metadata.json")

print("BITTI" if not fail else f"{fail} sorun var.")
sys.exit(1 if fail else 0)
