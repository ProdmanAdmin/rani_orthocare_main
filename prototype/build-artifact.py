#!/usr/bin/env python3
"""Build the shareable (private link) version of the prototype.

The hosted page is wrapped in its own <html>/<head>/<body> at publish time, and it serves
brand-assets/ next to the page instead of one folder up. This script writes
prototype/dist/index.html with those two differences and prints the list of files to publish
alongside it.

    python3 -I prototype/build-artifact.py
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent

src = (HERE / "index.html").read_text(encoding="utf-8")

head = re.search(r"<head>(.*?)</head>", src, re.S).group(1)
body = re.search(r"<body>(.*?)</body>", src, re.S).group(1)
# The host page supplies charset and viewport.
head = re.sub(r'\s*<meta (charset|name="viewport")[^>]*>', "", head)

page = head.strip() + "\n" + body.strip() + "\n"
page = page.replace("../brand-assets/", "brand-assets/")

out = HERE / "dist" / "index.html"
out.parent.mkdir(exist_ok=True)
out.write_text(page, encoding="utf-8")

files = {}
for folder in ("img", "previews"):
    for f in sorted((HERE / folder).iterdir()):
        if f.is_file():
            files[f"{folder}/{f.name}"] = str(f.relative_to(ROOT))
files["content.js"] = "prototype/content.js"
files["design-system.html"] = "prototype/design-system.html"
for f in sorted((ROOT / "brand-assets").rglob("*")):
    if f.is_file() and f.name != ".DS_Store":
        files[str(f.relative_to(ROOT))] = str(f.relative_to(ROOT))

print(f"Wrote {out.relative_to(ROOT)}")
print(json.dumps(files, indent=2))
