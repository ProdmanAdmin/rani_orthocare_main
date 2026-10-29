#!/usr/bin/env python3
"""Build prototype section 6 (storybrand.html) from docs/storybrand.md.

The Markdown file is the record of both languages; this page is only a view of it.
Run after every change to docs/storybrand.md (and after re-making docs/storybrand.pdf,
which is copied here for the download button):

    python3 -I prototype/build-storybrand.py
"""
import html
import re
import shutil
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
SRC = ROOT / "docs" / "storybrand.md"
OUT = HERE / "storybrand.html"

TAMIL = re.compile(r"[஀-௿]")


def inline(text):
    t = html.escape(text, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', t)
    return t


def lang_attr(text):
    # A line written mostly in Tamil gets lang="ta" so it uses the Tamil font and line height.
    letters = re.findall(r"[A-Za-z஀-௿]", text)
    tamil = sum(1 for c in letters if TAMIL.match(c))
    return ' lang="ta"' if letters and tamil / len(letters) > 0.5 else ""


def cells(row):
    return [c.strip() for c in row.strip().strip("|").split("|")]


def table(lines):
    head = cells(lines[0])
    out = ['<div class="tbl"><table>', "<thead><tr>"]
    out += [f"<th>{inline(h)}</th>" for h in head]
    out.append("</tr></thead><tbody>")
    for row in lines[2:]:
        out.append("<tr>")
        for i, c in enumerate(cells(row)):
            label = html.escape(re.sub(r"\*", "", head[i]) if i < len(head) else "")
            out.append(f'<td data-label="{label}"{lang_attr(c)}>{inline(c) or "&nbsp;"}</td>')
        out.append("</tr>")
    out.append("</tbody></table></div>")
    return "\n".join(out)


def list_block(lines):
    """Lists with continuation lines (indented text, usually the Tamil version) and one nested level."""
    ordered = bool(re.match(r"\d+\. ", lines[0]))
    tag = "ol" if ordered else "ul"
    items = []
    for ln in lines:
        m = re.match(r"(\d+\. |- )(.*)", ln)
        if m:
            items.append({"text": [m.group(2)], "sub": []})
        elif re.match(r"\s+- ", ln):
            items[-1]["sub"].append(ln.strip()[2:])
        else:
            items[-1]["text"].append(ln.strip())
    out = [f"<{tag}>"]
    for it in items:
        first, more = it["text"][0], it["text"][1:]
        body = f"<span{lang_attr(first)}>{inline(first)}</span>"
        body += "".join(f'<span class="alt"{lang_attr(x)}>{inline(x)}</span>' for x in more)
        if it["sub"]:
            body += "<ul>" + "".join(f"<li{lang_attr(s)}>{inline(s)}</li>" for s in it["sub"]) + "</ul>"
        out.append(f"<li>{body}</li>")
    out.append(f"</{tag}>")
    return "\n".join(out)


def blocks(md):
    lines = md.split("\n")
    out, i = [], 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip() or ln.strip() == "---":
            i += 1
        elif ln.startswith("|"):
            j = i
            while j < len(lines) and lines[j].startswith("|"):
                j += 1
            out.append(table(lines[i:j]))
            i = j
        elif re.match(r"(\d+\. |- )", ln):
            j = i + 1
            while j < len(lines) and (re.match(r"(\d+\. |- |\s+\S)", lines[j])):
                j += 1
            out.append(list_block(lines[i:j]))
            i = j
        elif ln.startswith("### "):
            out.append(f"<h3>{inline(ln[4:])}</h3>")
            i += 1
        else:
            j = i
            para = []
            while j < len(lines) and lines[j].strip() and not re.match(r"(\||#|- |\d+\. |---)", lines[j]):
                para.append(lines[j].strip())
                j += 1
            text = " ".join(para)
            out.append(f"<p{lang_attr(text)}>{inline(text)}</p>")
            i = j
    return "\n".join(out)


md = SRC.read_text(encoding="utf-8")
title_en = re.search(r"^# (.+)$", md, re.M).group(1).split(": ", 1)[1]
title_ta = re.findall(r"^# (.+)$", md, re.M)[1].split(": ", 1)[1]
version = re.search(r"^Version ([\d.]+)", md, re.M).group(1)

parts = re.split(r"^## (.+?) \{#([\w-]+)\}\s*$", md, flags=re.M)
intro = parts[0]
sections = [(parts[k], parts[k + 1], parts[k + 2]) for k in range(1, len(parts), 3)]

# Intro: drop the two title lines and the Markdown index (the page builds its own).
intro_lines = [l for l in intro.split("\n") if not l.startswith("# ")]
intro_md = "\n".join(intro_lines).split("## Index")[0]
intro_html = blocks(intro_md)

toc = "\n".join(
    f'<li><a href="#{sid}"><b>{t.split(". ", 1)[0]}</b><span>{inline(t.split(". ", 1)[1])}</span></a></li>'
    for t, sid, _ in sections
)

body = []
for n, (t, sid, content) in enumerate(sections):
    num, name = t.split(". ", 1)
    band = " sky" if n % 2 == 0 else ""
    body.append(
        f'<section class="band{band}" id="{sid}" aria-labelledby="h-{sid}"><div class="wrap">'
        f'<div class="band-head"><p class="eyebrow"><b>{num}</b>StoryBrand</p><h2 id="h-{sid}">{inline(name)}</h2></div>'
        f'<div class="prose">{blocks(content)}</div>'
        f'<p class="top-link"><a href="#contents">Back to contents</a></p>'
        f"</div></section>"
    )

page = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Rani Ortho Care StoryBrand</title>
  <meta name="claude:viewport-fit-sides" content="cover">
  <meta name="robots" content="noindex, nofollow">
  <link rel="icon" href="img/mark.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;700;800&family=Noto+Sans+Tamil:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    /* Generated by prototype/build-storybrand.py from docs/storybrand.md. Edit the Markdown, then rebuild. */
    :root {{
      color-scheme: light;
      --navy: #14234A; --blue: #3C59A8; --blue-deep: #2A4590; --green: #1B7030; --spine: #3DB54A;
      --ink: #14234A; --body: #25304A; --muted: #46526B; --white: #FFFFFF;
      --band-sky: #E8F0FA; --blue-tint: #EEF3FB; --line: #D5DDEA; --on-navy: #C9D6F2;
      --font-en: "Atkinson Hyperlegible Next", "Noto Sans Tamil", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      --font-ta: "Noto Sans Tamil", "Atkinson Hyperlegible Next", "Latha", "Nirmala UI", sans-serif;
      --fs-display: 30px; --fs-h2: 24px; --fs-h3: 21px; --fs-lead: 19px; --fs-body: 18px; --fs-small: 16px; --fs-btn: 18px;
      --gutter: 16px; --section: 56px; --gap: 16px; --pad: 20px;
    }}
    @media (min-width: 400px) {{ :root {{ --gutter: 20px; }} }}
    @media (min-width: 640px) {{ :root {{ --fs-display: 38px; --fs-h2: 28px; --fs-h3: 23px; --fs-lead: 20px; --gutter: 32px; --section: 72px; --gap: 24px; --pad: 24px; }} }}
    @media (min-width: 1024px) {{ :root {{ --fs-display: 44px; --fs-h2: 32px; --fs-h3: 26px; --fs-lead: 21px; --fs-body: 20px; --fs-small: 17px; --fs-btn: 19px; --gutter: 40px; --section: 96px; --pad: 32px; }} }}
    * {{ box-sizing: border-box; }}
    html {{ scroll-behavior: smooth; scroll-padding-top: 96px; }}
    @media (prefers-reduced-motion: reduce) {{ html {{ scroll-behavior: auto; }} *, *::before, *::after {{ transition: none !important; animation: none !important; }} }}
    body {{ margin: 0; background: var(--white); color: var(--body); font-family: var(--font-en); font-size: var(--fs-body); line-height: 1.65; -webkit-font-smoothing: antialiased; overflow-wrap: break-word; }}
    body::before {{ content: ""; position: fixed; inset: 0 0 auto; height: env(safe-area-inset-top, 0px); z-index: 60; background: var(--white); }}
    [lang="ta"] {{ font-family: var(--font-ta); line-height: 1.75; overflow-wrap: anywhere; }}
    a {{ color: var(--blue-deep); text-underline-offset: 3px; }}
    :focus-visible {{ outline: 3px solid var(--navy); outline-offset: 2px; box-shadow: 0 0 0 2px var(--white); border-radius: 6px; }}
    .wrap {{ max-width: 1200px; margin: 0 auto; padding-left: max(var(--gutter), env(safe-area-inset-left, 0px)); padding-right: max(var(--gutter), env(safe-area-inset-right, 0px)); }}
    h1, h2, h3 {{ color: var(--ink); font-weight: 700; margin: 0; text-wrap: balance; }}
    h2 {{ font-size: var(--fs-h2); line-height: 1.25; }}
    h3 {{ font-size: var(--fs-h3); line-height: 1.3; }}
    p {{ margin: 0; }}
    .tnum {{ font-variant-numeric: tabular-nums; }}
    .skip {{ position: absolute; left: -9999px; }} .skip:focus {{ left: 16px; top: 16px; z-index: 99; background: var(--white); padding: 12px 16px; }}

    /* Header, as on the other prototype pages */
    .util {{ background: var(--navy); color: var(--on-navy); font-size: 16px; }}
    .util .wrap {{ display: flex; gap: 8px 20px; align-items: center; justify-content: space-between; flex-wrap: wrap; padding-block: 8px; }}
    header.site {{ position: sticky; top: env(safe-area-inset-top, 0px); z-index: 50; background: rgba(255, 255, 255, .92); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-bottom: 1px solid var(--line); box-shadow: 0 2px 10px rgba(20, 35, 74, .06); }}
    header.site .wrap {{ display: flex; align-items: center; gap: 12px 16px; min-height: 76px; flex-wrap: wrap; padding-block: 8px; }}
    .logo img {{ height: 40px; width: auto; display: block; }}
    @media (min-width: 1024px) {{ .logo img {{ height: 48px; }} }}
    nav.proto {{ display: flex; gap: 4px; margin-left: auto; flex-wrap: wrap; }}
    nav.proto a {{ min-height: 48px; display: inline-flex; align-items: center; padding: 0 12px; border-radius: 12px; font-weight: 700; font-size: 16px; color: var(--body); text-decoration: none; }}
    nav.proto a:hover {{ background: var(--blue-tint); color: var(--blue-deep); }}
    nav.proto a[aria-current="page"] {{ background: var(--navy); color: var(--white); }}
    @media (max-width: 1199px) {{ nav.proto {{ order: 3; width: 100%; margin-left: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }} nav.proto a {{ justify-content: center; text-align: center; padding: 6px; font-size: 15px; line-height: 1.25; }} }}
    @media (min-width: 640px) and (max-width: 1199px) {{ nav.proto {{ grid-template-columns: repeat(6, minmax(0, 1fr)); }} }}
    /* The menu takes two rows below 1200 px, so the header scrolls away there instead of covering the text. */
    @media (max-width: 1199px) {{ header.site {{ position: static; }} html {{ scroll-padding-top: 16px; }} }}

    /* Buttons */
    .btn-row {{ display: flex; gap: 12px; flex-wrap: wrap; }}
    .btn {{ display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 56px; padding: 10px 24px; border-radius: 12px; font-size: var(--fs-btn); font-weight: 700; line-height: 1.2; text-decoration: none; border: 2px solid transparent; position: relative; overflow: hidden; isolation: isolate; transition: transform .2s cubic-bezier(.2,.7,.2,1), box-shadow .2s cubic-bezier(.2,.7,.2,1); }}
    .btn-primary {{ background: var(--green); background-image: linear-gradient(180deg, #228639 0%, #1B7030 100%); color: var(--white); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .28), 0 6px 16px rgba(27, 112, 48, .28); }}
    .btn-primary::after {{ content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, .32) 50%, transparent 70%); transform: translateX(-120%); transition: transform .7s cubic-bezier(.2,.7,.2,1); }}
    .btn-primary:hover {{ background-image: linear-gradient(180deg, #1F7D36 0%, #155A26 100%); transform: translateY(-2px); }}
    .btn-primary:hover::after {{ transform: translateX(120%); }}
    .btn-secondary {{ background: rgba(255, 255, 255, .9); color: var(--blue-deep); border-color: var(--blue-deep); }}
    .btn-secondary:hover {{ background: var(--blue-tint); transform: translateY(-2px); }}
    .btn:active {{ transform: scale(.98); }}
    .btn svg {{ width: 24px; height: 24px; flex-shrink: 0; }}
    @media (max-width: 639px) {{ .btn-row .btn {{ width: 100%; }} }}

    /* Cover */
    .cover {{ background: radial-gradient(40% 70% at 85% 35%, rgba(61, 181, 74, .16), transparent 70%), radial-gradient(35% 60% at 70% 90%, rgba(60, 89, 168, .14), transparent 70%), linear-gradient(180deg, var(--blue-tint), var(--white)); padding-block: var(--section); border-bottom: 1px solid var(--line); }}
    .cover-grid {{ display: grid; gap: 32px; align-items: center; }}
    @media (min-width: 1024px) {{ .cover-grid {{ grid-template-columns: 7fr 5fr; }} }}
    .cover-grid > * {{ min-width: 0; }}
    .eyebrow {{ font-size: 16px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--blue-deep); display: flex; gap: 10px; align-items: center; margin: 0; }}
    .eyebrow b {{ display: inline-grid; place-items: center; min-width: 32px; height: 32px; padding: 0 8px; border-radius: 999px; background: var(--navy); color: var(--white); letter-spacing: 0; font-size: 15px; }}
    .cover h1 {{ font-size: var(--fs-display); line-height: 1.15; font-weight: 800; letter-spacing: -.01em; }}
    .cover .ta-line {{ font-family: var(--font-ta); font-size: var(--fs-h3); line-height: 1.5; font-weight: 700; color: var(--blue-deep); }}
    .stack {{ display: grid; gap: 16px; }}
    .cover .intro {{ display: grid; gap: 12px; font-size: var(--fs-lead); line-height: 1.55; max-width: 68ch; }}
    .approach {{ background: rgba(255, 255, 255, .86); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border: 1px solid var(--line); border-radius: 24px; padding: var(--pad); display: grid; gap: 16px; box-shadow: 0 2px 6px rgba(20, 35, 74, .06), 0 16px 40px rgba(20, 35, 74, .10); }}
    .steps {{ list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }}
    .steps li {{ display: grid; grid-template-columns: 44px 1fr; gap: 14px; align-items: center; font-weight: 700; color: var(--ink); }}
    .steps li b {{ width: 44px; height: 44px; border-radius: 12px; background: var(--navy); color: var(--white); display: grid; place-items: center; font-size: 20px; }}
    .steps li:last-child b {{ background: var(--green); }}
    .steps small {{ display: block; font-weight: 500; color: var(--muted); font-size: var(--fs-small); }}
    .spine-rule {{ height: 8px; border-radius: 999px; background: linear-gradient(90deg, var(--navy) 0 55%, var(--blue) 55% 80%, var(--spine) 80% 100%); }}

    /* Contents */
    .toc {{ list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; grid-template-columns: 1fr; }}
    @media (min-width: 640px) {{ .toc {{ grid-template-columns: repeat(2, minmax(0, 1fr)); }} }}
    @media (min-width: 1024px) {{ .toc {{ grid-template-columns: repeat(3, minmax(0, 1fr)); }} }}
    .toc a {{ display: flex; gap: 12px; align-items: center; min-height: 64px; padding: 10px 16px; border: 1px solid var(--line); border-radius: 14px; background: var(--white); text-decoration: none; color: var(--ink); font-weight: 700; transition: transform .2s cubic-bezier(.2,.7,.2,1), box-shadow .2s cubic-bezier(.2,.7,.2,1), border-color .2s; }}
    .toc a:hover {{ transform: translateY(-2px); border-color: var(--blue); box-shadow: 0 10px 24px rgba(20, 35, 74, .10); }}
    .toc b {{ flex-shrink: 0; width: 36px; height: 36px; border-radius: 10px; background: var(--blue-tint); color: var(--blue-deep); display: grid; place-items: center; }}

    /* Bands and text */
    .band {{ padding-block: var(--section); }}
    .band.sky {{ background: var(--band-sky); }}
    .band-head {{ display: grid; gap: 12px; margin-bottom: calc(var(--gap) + 4px); }}
    .prose {{ display: grid; gap: 16px; max-width: 100%; }}
    .prose > p, .prose > ul, .prose > ol {{ max-width: 78ch; }}
    .prose h3 {{ margin-top: 16px; padding-left: 14px; border-left: 4px solid var(--spine); }}
    .prose ul, .prose ol {{ margin: 0; padding-left: 24px; display: grid; gap: 10px; }}
    .prose li .alt {{ display: block; color: var(--muted); margin-top: 2px; }}
    .prose li ul {{ margin-top: 8px; gap: 6px; }}
    .prose strong {{ color: var(--ink); }}
    .top-link {{ margin-top: 24px; font-size: var(--fs-small); }}

    /* Tables: a grid on wider screens, stacked cards on phones */
    .tbl {{ background: var(--white); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; box-shadow: 0 1px 2px rgba(20, 35, 74, .06), 0 4px 12px rgba(20, 35, 74, .06); }}
    table {{ width: 100%; border-collapse: collapse; font-size: var(--fs-small); line-height: 1.55; }}
    th {{ background: var(--navy); color: var(--white); text-align: left; padding: 12px 16px; font-weight: 700; vertical-align: bottom; }}
    td {{ padding: 12px 16px; border-top: 1px solid var(--line); vertical-align: top; }}
    tbody tr:nth-child(even) td {{ background: #F7F9FD; }}
    td:first-child {{ font-weight: 700; color: var(--ink); }}
    @media (max-width: 767px) {{
      .tbl {{ border: 0; background: none; box-shadow: none; border-radius: 0; overflow: visible; }}
      table, tbody, tr, td {{ display: block; width: 100%; }}
      thead {{ position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }}
      tr {{ background: var(--white); border: 1px solid var(--line); border-radius: 14px; margin-bottom: 12px; overflow: hidden; }}
      td, tbody tr:nth-child(even) td {{ background: none; border-top: 1px solid var(--line); padding: 10px 16px; }}
      td:first-child {{ border-top: 0; background: var(--blue-tint); }}
      td::before {{ content: attr(data-label); display: block; font-family: var(--font-en); font-size: 14px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--muted); margin-bottom: 2px; }}
      td[data-label=""]::before {{ display: none; }}
    }}

    footer {{ background: linear-gradient(180deg, #14234A, #1E3263); color: var(--on-navy); padding-block: 40px; font-size: var(--fs-small); }}
    footer .wrap {{ display: grid; gap: 8px; }}
    footer a {{ color: var(--white); }}
  </style>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <div class="util">
    <div class="wrap">
      <span>Prototype section 6 · Message framework · Draft for the doctor's approval</span>
      <span class="tnum">+91 94445 53070</span>
    </div>
  </div>
  <header class="site">
    <div class="wrap">
      <a class="logo" href="index.html#about" aria-label="Rani Ortho Care prototype, About"><img src="img/logo-horizontal-en.svg" alt="Rani Ortho Care" width="905" height="188"></a>
      <nav class="proto" aria-label="Prototype sections">
        <a href="index.html#about">1 · About</a>
        <a href="index.html#business">2 · Business core</a>
        <a href="index.html#assets">3 · Assets</a>
        <a href="design-system.html">4 · Design system</a>
        <a href="home-sample.html">5 · Sample home</a>
        <a href="storybrand.html" aria-current="page">6 · StoryBrand</a>
      </nav>
    </div>
  </header>

  <main id="main">
    <section class="cover" aria-labelledby="t-cover">
      <div class="wrap cover-grid">
        <div class="stack">
          <p class="eyebrow"><b>06</b>Message framework · English and Tamil</p>
          <h1 id="t-cover">{html.escape(title_en)}</h1>
          <p class="ta-line" lang="ta">{html.escape(title_ta)}</p>
          <div class="intro">{intro_html}</div>
          <div class="btn-row">
            <a class="btn btn-primary" href="storybrand.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>Download the PDF</a>
            <a class="btn btn-secondary" href="#contents">See the contents</a>
          </div>
        </div>
        <aside class="approach" aria-label="Our approach">
          <p class="eyebrow">Our way of care</p>
          <ol class="steps">
            <li><b>1</b><span>Relieve the pain<small lang="ta">வலி நிவாரணம்</small></span></li>
            <li><b>2</b><span>Find the cause<small lang="ta">காரணம் கண்டறிதல்</small></span></li>
            <li><b>3</b><span>Move again<small lang="ta">மீண்டும் இயக்கம்</small></span></li>
          </ol>
          <div class="spine-rule" aria-hidden="true"></div>
          <p><strong>Your Mobility, Our Mission</strong><br><span lang="ta">உங்கள் இயக்கம், எங்கள் நோக்கம்</span></p>
        </aside>
      </div>
    </section>

    <section class="band" id="contents" aria-labelledby="t-contents">
      <div class="wrap">
        <div class="band-head"><p class="eyebrow">Version {version} draft</p><h2 id="t-contents">Contents</h2></div>
        <ol class="toc">
{toc}
        </ol>
      </div>
    </section>

{chr(10).join(body)}
  </main>

  <footer>
    <div class="wrap">
      <p><strong style="color:#fff">Rani Ortho Care</strong> · Your Mobility, Our Mission · <span lang="ta">உங்கள் இயக்கம், எங்கள் நோக்கம்</span></p>
      <p>Draft for review by Dr. N. Manikandan. Tamil text to be reviewed by a native speaker before it goes live. Not the live website.</p>
      <p><a href="home-sample.html">Back to the sample home page</a></p>
    </div>
  </footer>
</body>
</html>
"""
OUT.write_text(page, encoding="utf-8")
# The page offers the PDF for download, so keep a copy beside it.
pdf = ROOT / "docs" / "storybrand.pdf"
if pdf.exists():
    shutil.copy2(pdf, HERE / "storybrand.pdf")
print(f"Wrote {OUT.relative_to(ROOT)} from {SRC.relative_to(ROOT)} ({len(sections)} sections)")
