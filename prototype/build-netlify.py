#!/usr/bin/env python3
"""Build a self-contained copy of the prototype for Netlify (or any static host).

Writes prototype-site/ at the repository root. Drag that folder onto https://app.netlify.com/drop,
or point a separate Netlify site at it. It is not the Next.js website.

    python3 -I prototype/build-netlify.py
"""
import shutil
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
OUT = ROOT / "prototype-site"

if OUT.exists():
    shutil.rmtree(OUT)
OUT.mkdir()

# Pages: in the repo the prototype reads ../brand-assets/; in the site, brand-assets/ sits beside it.
for name in ("index.html", "design-system.html", "home-sample.html", "content.js"):
    text = (HERE / name).read_text(encoding="utf-8")
    (OUT / name).write_text(text.replace("../brand-assets/", "brand-assets/"), encoding="utf-8")

for folder in ("img", "previews"):
    shutil.copytree(HERE / folder, OUT / folder)
shutil.copytree(ROOT / "brand-assets", OUT / "brand-assets", ignore=shutil.ignore_patterns(".DS_Store"))

# Keep the prototype out of search engines, and add basic security headers.
(OUT / "_headers").write_text(
    "/*\n"
    "  X-Robots-Tag: noindex, nofollow\n"
    "  X-Content-Type-Options: nosniff\n"
    "  X-Frame-Options: SAMEORIGIN\n"
    "  Referrer-Policy: strict-origin-when-cross-origin\n",
    encoding="utf-8",
)
(OUT / "robots.txt").write_text("User-agent: *\nDisallow: /\n", encoding="utf-8")

files = sorted(p for p in OUT.rglob("*") if p.is_file())
size = sum(p.stat().st_size for p in files)
print(f"Wrote {OUT.relative_to(ROOT)}/ ({len(files)} files, {size / 1_000_000:.1f} MB)")
