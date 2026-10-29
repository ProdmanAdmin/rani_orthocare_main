# Project Prototype

The project's single reference page for Rani Ortho Care. Dr. N. Manikandan and the team use it to see the clinic's details, business core and assets in one place, in English and Tamil. New sections are added step by step: the design system is section 4, and the website look and feel comes next.

**This is not the website.** It is a static page outside the Next.js app, so it is never deployed with the site. It uses the website design system from `DESIGN.md`, so it is also a preview of the website's look and feel.

## Sections
1. **About:** the clinic, the doctor, contact details, hours (from Google), services, online presence
2. **Business core:** mission, philosophy, care journey, the eight pillars, website goals
3. **Assets:** logos (with download links), print materials, brand colours, map QR, what is still needed
4. **Design system:** the mood board for the website (`design-system.html`), matching `DESIGN.md`.
5. **Sample home:** a sample home page (`home-sample.html`) with header, hero, "What we treat" and footer, in English and Tamil.

All five sections now use the website design system (fonts, colours, section bands).

## Updating it
- **All content is in `content.js`.** Each text has `en` and `ta`. Change it there; there's no need to touch `index.html`.
- Keep `content.js` consistent with `docs/business-context.md` and `docs/business-model.md`.
- Change `updated` in `content.js` whenever the content changes.

## Opening it
It reads files from `../brand-assets/`, so serve it from the repository root:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open http://localhost:4173/prototype/. In Claude Code, the `prototype` entry in `.claude/launch.json` starts the same server.

## Private link (for the doctor)
Published at https://claude.ai/artifact/3Z3pqhqPBAs97eMZKTuXyx and shared as "anyone with the link". Sections 1 to 3 have their own links ending in `#about`, `#business` or `#assets`; section 4 is `design-system.html` next to it.

To update the link after changing the prototype:
1. Run `python3 -I prototype/build-artifact.py`. It writes `prototype/dist/index.html` (not committed) and lists the files to publish.
2. Republish `prototype/dist/index.html` to the same link with those files.

## Hosting on Netlify (separate from the website)
1. Run `python3 -I prototype/build-netlify.py`. It writes `prototype-site/` at the repository root (committed, so Netlify can also deploy it from Git): all pages, images, previews and `brand-assets/`, with paths fixed, plus `_headers` and `robots.txt` that keep it out of search engines.
2. Drag the `prototype-site` folder onto https://app.netlify.com/drop, or create a **separate** Netlify site with that folder as its publish directory and no build command.
3. Never use the website's own Netlify site for the prototype.

## Files
- `index.html`: layout, styles and interface labels
- `content.js`: all content for sections 1 to 3 (English and Tamil)
- `design-system.html`: section 4, the design system mood board (a standalone page)
- `home-sample.html`: section 5, the sample home page (a standalone page)
- `img/`: logo copies cropped to their artwork for display (the originals are in `brand-assets/logo/`)
- `previews/`: JPEG previews of the print PDFs
- `build-artifact.py`: builds the private-link version in `dist/`
- `build-netlify.py`: builds the Netlify-ready folder `prototype-site/`
