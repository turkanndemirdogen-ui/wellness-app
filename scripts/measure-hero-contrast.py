#!/usr/bin/env python3
"""measure-hero-contrast.py — Ana Sayfa hero metin okunurluğu ÖLÇÜMÜ.

Kabul kriteri (ürün sahibi, 2026-09-02): canlı bitki görsellerinin HEPSİNDE,
metin alanındaki EN AÇIK piksel ile beyaz yazı arasında en az 4.5:1 kontrast.

Bu script göz kararı yapmaz: gerçek WebP piksellerini okur, hero'nun cover
kırpmasını modeller, metin dikdörtgenindeki en açık pikseli bulur, üzerine
uygulanan katmanları (vinyet + lila sis + gerekirse lokal bulut) sırayla
bindirir ve WCAG kontrastını hesaplar.

Çıktı iki yere yazılır:
  1. content/bitki-gorselleri.json  → her kayda `hero` ölçüm bloğu
  2. mobile/src/domain-ui/herb-hero-luma.generated.ts → uygulamanın okuduğu harita

Katman değerlerinin TEK KAYNAĞI mobile/src/design-system/tokens/tokens.json'dur;
bu script onu okur. Değerler değişirse ölçüm yeniden koşulmalıdır — mobil
tarafta `hero-text-contrast` testi token parmak izini karşılaştırıp uyarır.

Kullanım:
  python scripts/measure-hero-contrast.py [--images <klasör>]

Varsayılan görsel kaynağı, Storage'a yüklenen dosyaların yerel kopyasıdır
(bkz. PROJECT-CHECKPOINT — asset staging kalıcı konumu).
"""

from __future__ import annotations

import argparse
import io
import json
import os
import sys
import collections

try:
    from PIL import Image
except ImportError:  # pragma: no cover
    sys.exit('[hero-contrast] HATA: Pillow gerekli — pip install Pillow')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOKENS = os.path.join(ROOT, 'mobile', 'src', 'design-system', 'tokens', 'tokens.json')
ASSET_JSON = os.path.join(ROOT, 'content', 'bitki-gorselleri.json')
OUT_TS = os.path.join(ROOT, 'mobile', 'src', 'domain-ui', 'herb-hero-luma.generated.ts')
DEFAULT_IMAGES = os.path.join(
    os.path.expanduser('~'), 'OneDrive', 'Desktop', 'Yedekler', 'wellness-assets',
    'bucket-upload', 'botanicals',
)

AA_NORMAL = 4.5
# Çözümde küçük bir pay bırakılır: ölçüm ile cihaz render'ı birebir aynı değil
# (ölçek, resampling). Eşiğin hemen üstünde durmak yerine 4.6'ya kilitlenir.
TARGET = 4.6
# Beyaz hero metni (material.onPanel.primary).
TEXT_HEX = '#F3F1EC'

# Hero panelinin en-boy oranı aralığı (cihaz genişliği / hero yüksekliği).
# hero yüksekliği = max(280, ekran yüksekliği * 0.40); üç referans cihaz:
#   360x740 -> 360/296 = 1.216 · 412x915 -> 412/366 = 1.126 · 430x932 -> 1.153
# En GENİŞ görünür bant en küçük orandan gelir; kırpma payı için ikisi de denenir.
PANEL_ASPECTS = (1.126, 1.153, 1.216)


def load_tokens():
    doc = json.load(io.open(TOKENS, encoding='utf-8'))

    def val(node, *path):
        for key in path:
            node = node[key]
        return node['$value']

    m = doc['material']
    return {
        'atm': {k: val(m, 'heroAtmosphere', k) for k in m['heroAtmosphere'] if not k.startswith('$')},
        'safety': {k: val(m, 'heroTextSafety', k) for k in m['heroTextSafety'] if not k.startswith('$')},
    }


def parse_rgba(value: str):
    body = value[value.index('(') + 1:value.rindex(')')]
    parts = [p.strip() for p in body.split(',')]
    r, g, b = (int(float(p)) for p in parts[:3])
    a = float(parts[3]) if len(parts) > 3 else 1.0
    return (r, g, b, a)


def hex_rgb(value: str):
    raw = value.lstrip('#')
    return tuple(int(raw[i:i + 2], 16) for i in (0, 2, 4))


def channel(c: float) -> float:
    c = c / 255.0
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4


def luminance(rgb) -> float:
    r, g, b = (channel(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(rgb_a, rgb_b) -> float:
    la, lb = luminance(rgb_a), luminance(rgb_b)
    hi, lo = (la, lb) if la >= lb else (lb, la)
    return (hi + 0.05) / (lo + 0.05)


def over(src_rgba, dst_rgb):
    """src (r,g,b,a) katmanını dst üstüne bindirir."""
    r, g, b, a = src_rgba
    return tuple(a * s + (1 - a) * d for s, d in zip((r, g, b), dst_rgb))


def lerp(a, b, t):
    return a + (b - a) * t


def lerp_rgba(c0, c1, t):
    return tuple(lerp(x, y, t) for x, y in zip(c0, c1))


def visible_band(panel_aspect: float):
    """Cover kırpmasında kaynak görselin görünür dikey aralığı (0-1)."""
    img_aspect = 800 / 1000  # tüm kartlar 4:5
    fraction = (1 / panel_aspect) / (1 / img_aspect)
    fraction = min(fraction, 1.0)
    start = (1 - fraction) / 2
    return start, fraction


def text_rect_in_source(safety, panel_aspect):
    """Metin dikdörtgeninin kaynak görseldeki karşılığı (x0,y0,x1,y1 — 0-1)."""
    start, fraction = visible_band(panel_aspect)
    y0 = start + fraction * safety['textRectTop']
    y1 = start + fraction * safety['textRectBottom']
    return safety['textRectLeft'], y0, safety['textRectRight'], y1


def vignette_layer(atm, x, y):
    """Vinyetin (x,y) panel noktasındaki rengi+alfası."""
    dx = x - atm['vignetteCenterX']
    dy = y - atm['vignetteCenterY']
    t = (dx * dx + dy * dy) ** 0.5 / atm['vignetteRadius']
    inner = parse_rgba(atm['vignetteInner'])
    mid = parse_rgba(atm['vignetteMid'])
    outer = parse_rgba(atm['vignetteOuter'])
    s0, s1 = atm['vignetteStop0'], atm['vignetteStop1']
    if t <= s0:
        return inner
    if t <= s1:
        return lerp_rgba(inner, mid, (t - s0) / (s1 - s0))
    if t >= 1.0:
        return outer
    return lerp_rgba(mid, outer, (t - s1) / (1.0 - s1))


def cloud_layer(safety, x, y, peak_alpha):
    """Lokal koyu bulutun (x,y) noktasındaki alfası (tepe alfa görsele göre çözülür)."""
    if peak_alpha <= 0:
        return (0, 0, 0, 0.0)
    dx = x - safety['cloudCenterX']
    dy = y - safety['cloudCenterY']
    t = (dx * dx + dy * dy) ** 0.5 / safety['cloudRadius']
    mid_alpha = peak_alpha * safety['cloudMidRatio']
    if t >= 1.0:
        alpha = 0.0
    elif t <= safety['cloudStopMid']:
        alpha = lerp(peak_alpha, mid_alpha, t / safety['cloudStopMid'])
    else:
        alpha = lerp(mid_alpha, 0.0,
                     (t - safety['cloudStopMid']) / (1.0 - safety['cloudStopMid']))
    r, g, b, _ = parse_rgba(safety['cloudColor'])
    return (r, g, b, alpha)


def composite(pixel_rgb, panel_xy, atm, safety, cloud_alpha: float):
    x, y = panel_xy
    out = tuple(float(c) for c in pixel_rgb)
    out = over(vignette_layer(atm, x, y), out)
    out = over(parse_rgba(atm['lilacMist']), out)
    if cloud_alpha > 0:
        out = over(cloud_layer(safety, x, y, cloud_alpha), out)
    return out


def text_band_samples(image: Image.Image, safety):
    """Metin dikdörtgenindeki (piksel, panel konumu) örnekleri — bir kez çıkarılır."""
    # 4x4 kutu indirgeme: tek piksellik gürültü değil, algılanan parlaklık ölçülür.
    small = image.convert('RGB').resize((image.width // 4, image.height // 4), Image.BOX)
    pixels = small.load()
    seen = set()
    samples = []
    for panel_aspect in PANEL_ASPECTS:
        sx0, sy0, sx1, sy1 = text_rect_in_source(safety, panel_aspect)
        px0, px1 = int(sx0 * small.width), int(sx1 * small.width)
        py0, py1 = int(sy0 * small.height), int(sy1 * small.height)
        for py in range(max(0, py0), min(small.height, py1)):
            for px in range(max(0, px0), min(small.width, px1)):
                key = (px, py)
                if key in seen:
                    continue
                seen.add(key)
                # Kaynak pikselin panel üzerindeki yeri (katman alfaları için).
                panel_x = (px / small.width - sx0) / (sx1 - sx0)
                panel_x = safety['textRectLeft'] + panel_x * (
                    safety['textRectRight'] - safety['textRectLeft'])
                panel_y = (py / small.height - sy0) / (sy1 - sy0)
                panel_y = safety['textRectTop'] + panel_y * (
                    safety['textRectBottom'] - safety['textRectTop'])
                samples.append((pixels[px, py], (panel_x, panel_y)))
    return samples


def worst_contrast(samples, atm, safety, cloud_alpha: float):
    """Örnekler içindeki EN DÜŞÜK kontrast (en açık piksel)."""
    text_rgb = hex_rgb(TEXT_HEX)
    worst = None
    for pixel, panel_xy in samples:
        comp = composite(pixel, panel_xy, atm, safety, cloud_alpha)
        ratio = contrast(comp, text_rgb)
        if worst is None or ratio < worst[0]:
            worst = (ratio, pixel, comp)
    return worst


def solve_cloud_alpha(samples, atm, safety, target: float):
    """Eşiği geçen EN KÜÇÜK bulut alfasını ikili aramayla bulur (yoksa None)."""
    ceiling = safety['cloudAlphaMax']
    if worst_contrast(samples, atm, safety, ceiling)[0] < target:
        return None
    low, high = 0.0, ceiling
    for _ in range(24):
        mid = (low + high) / 2
        if worst_contrast(samples, atm, safety, mid)[0] >= target:
            high = mid
        else:
            low = mid
    return round(high, 3)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--images', default=DEFAULT_IMAGES)
    args = ap.parse_args()

    tokens = load_tokens()
    atm, safety = tokens['atm'], tokens['safety']

    doc = json.load(io.open(ASSET_JSON, encoding='utf-8'),
                    object_pairs_hook=collections.OrderedDict)
    records = doc['gorseller']

    print('== Hero metin kontrastı ölçümü (kabul eşiği %.1f:1) ==\n' % AA_NORMAL)
    failed = []
    for rec in records:
        herb_id = rec['herb_id']
        path = os.path.join(args.images, rec['path'].replace('/', os.sep))
        if not os.path.exists(path):
            print('  %-16s GÖRSEL BULUNAMADI: %s' % (herb_id, path))
            failed.append(herb_id)
            continue
        image = Image.open(path)
        samples = text_band_samples(image, safety)
        plain = worst_contrast(samples, atm, safety, 0.0)
        needs_cloud = plain[0] < TARGET
        cloud_alpha = 0.0
        final = plain
        if needs_cloud:
            solved = solve_cloud_alpha(samples, atm, safety, TARGET)
            if solved is None:
                cloud_alpha = safety['cloudAlphaMax']
                final = worst_contrast(samples, atm, safety, cloud_alpha)
            else:
                cloud_alpha = solved
                final = worst_contrast(samples, atm, safety, cloud_alpha)
        mark = 'OK  ' if final[0] >= AA_NORMAL else 'FAIL'
        print('  %s %-16s vinyet+sis %.2f:1  bulut a=%.2f  sonuc %.2f:1  (en acik piksel RGB %s)'
              % (mark, herb_id, plain[0], cloud_alpha, final[0],
                 tuple(int(c) for c in plain[1])))
        if final[0] < AA_NORMAL:
            failed.append(herb_id)
        rec['hero'] = collections.OrderedDict([
            ('contrastPlain', round(plain[0], 3)),
            ('needsCloud', needs_cloud),
            ('cloudAlpha', cloud_alpha),
            ('contrast', round(final[0], 3)),
        ])

    # Yer tutucu hali (gorsel yok): duz chrome.background yuzeyi. Placeholder da
    # acik oldugu icin beyaz yazi orada da duser - ayni cozucuden gecirilir.
    tokens_doc = json.load(io.open(TOKENS, encoding='utf-8'))
    placeholder_hex = tokens_doc['color']['chrome']['background']['$value']
    ph_rgb = hex_rgb(placeholder_hex)
    ph_samples = [
        (ph_rgb,
         (safety['textRectLeft'] + (safety['textRectRight'] - safety['textRectLeft']) * fx,
          safety['textRectTop'] + (safety['textRectBottom'] - safety['textRectTop']) * fy))
        for fx in (0.0, 0.25, 0.5, 0.75, 1.0)
        for fy in (0.0, 0.25, 0.5, 0.75, 1.0)
    ]
    ph_plain = worst_contrast(ph_samples, atm, safety, 0.0)
    ph_alpha = solve_cloud_alpha(ph_samples, atm, safety, TARGET) or safety['cloudAlphaMax']
    ph_final = worst_contrast(ph_samples, atm, safety, ph_alpha)
    print('  %s %-16s vinyet+sis %.2f:1  bulut a=%.2f  sonuc %.2f:1  (yer tutucu %s)'
          % ('OK  ' if ph_final[0] >= AA_NORMAL else 'FAIL', '(gorsel yok)',
             ph_plain[0], ph_alpha, ph_final[0], placeholder_hex))
    if ph_final[0] < AA_NORMAL:
        failed.append('(gorsel yok)')

    json.dump(doc, io.open(ASSET_JSON, 'w', encoding='utf-8', newline='\n'),
              ensure_ascii=False, indent=2)
    io.open(ASSET_JSON, 'a', encoding='utf-8', newline='\n').write('\n')

    lines = [
        '// OTOMATİK ÜRETİLDİ — ELLE DÜZENLEME.',
        '// Kaynak: content/bitki-gorselleri.json · Üretim: python scripts/measure-hero-contrast.py',
        '//',
        '// Hero metin bandı ölçümü: her görselin metin dikdörtgenindeki EN AÇIK piksel,',
        '// hero katmanları bindirildikten sonra beyaz yazıyla hangi kontrastı veriyor.',
        '// `needsCloud` true ise o görselde lokal koyu bulut katmanı çizilir.',
        '// Ölçüm görsel başına BİR KEZ yapılır; cihazda hesaplanmaz.',
        '',
        'export type HerbHeroLuma = {',
        '  /** Vinyet + lila sis sonrası kontrast (bulut YOKken). */',
        '  contrastPlain: number;',
        '  /** Metin bandı açık → lokal koyu bulut gerekli mi? */',
        '  needsCloud: boolean;',
        '  /** Çözülen bulut tepe alfası (0 = bulut yok). */',
        '  cloudAlpha: number;',
        '  /** Uygulanan katmanlarla ulaşılan nihai kontrast. */',
        '  contrast: number;',
        '};',
        '',
        '/** Kabul eşiği (15 §10 normal metin). */',
        'export const HERO_TEXT_AA = %s;' % AA_NORMAL,
        '',
        '/**',
        ' * Görseli olmayan bitkide (yer tutucu yüzeyi) gereken bulut alfası.',
        ' * Yer tutucu da AÇIK bir yüzeydir — beyaz yazı orada da emniyete alınır.',
        ' */',
        'export const HERO_PLACEHOLDER_CLOUD_ALPHA = %s;' % ph_alpha,
        '/** Yer tutucuda ulaşılan kontrast. */',
        'export const HERO_PLACEHOLDER_CONTRAST = %s;' % round(ph_final[0], 3),
        '',
        '/**',
        ' * Ölçümün yapıldığı katman değerleri. Testler bunu canlı token’larla',
        ' * karşılaştırır: vinyet/sis/bulut değeri değişirse ölçüm bayatlar ve test',
        ' * kırmızıya döner — yeniden koşulması gerektiğini söyler.',
        ' */',
        'export const HERO_MEASURED_WITH = %s as const;' % json.dumps(
            {**{k: atm[k] for k in sorted(atm)}, **{k: safety[k] for k in sorted(safety)}},
            ensure_ascii=False, indent=2,
        ).replace('\n', '\n'),
        '',
        'export const HERB_HERO_LUMA: Record<string, HerbHeroLuma> = {',
    ]
    for rec in records:
        hero = rec.get('hero')
        if not hero:
            continue
        lines.append("  %s: { contrastPlain: %s, needsCloud: %s, cloudAlpha: %s, contrast: %s },"
                     % (json.dumps(rec['herb_id']), hero['contrastPlain'],
                        'true' if hero['needsCloud'] else 'false', hero['cloudAlpha'],
                        hero['contrast']))
    lines += ['};', '']
    io.open(OUT_TS, 'w', encoding='utf-8', newline='\n').write('\n'.join(lines))

    print('\n  yazildi: content/bitki-gorselleri.json')
    print('  yazildi: mobile/src/domain-ui/herb-hero-luma.generated.ts')
    if failed:
        print('\n[FAIL] esigi gecemeyen: %s' % ', '.join(failed))
        return 1
    print('\n[OK] %d gorselin hepsi esigi gecti.' % len(records))
    return 0


if __name__ == '__main__':
    sys.exit(main())
