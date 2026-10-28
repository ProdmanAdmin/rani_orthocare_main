# Project Prototype

The project's single reference page for Rani Ortho Care. Dr. N. Manikandan and the team use it to see the clinic's details, business core and assets in one place, in English and Tamil. New sections are added step by step: next come the mood board, the design system and the website look and feel.

**This is not the website.** It is a static page outside the Next.js app, so it is never deployed with the site. Its colours are **temporary**, taken from the brand assets. The website's palette comes from the mood board, and it is not recorded in `DESIGN.md` yet.

## Sections
1. **About:** the clinic, the doctor, contact details, hours (from Google), services, online presence
2. **Business core:** mission, philosophy, care journey, the eight pillars, website goals
3. **Assets:** logos (with download links), print materials, brand colours, map QR, what is still needed

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
Published privately at https://claude.ai/artifact/3Z3pqhqPBAs97eMZKTuXyx. Only the owner can open it until it is shared from the page's **Share** menu. Each section has its own link, ending in `#about`, `#business` or `#assets`.

To update the link after changing the prototype:
1. Run `python3 -I prototype/build-artifact.py`. It writes `prototype/dist/index.html` (not committed) and lists the files to publish.
2. Republish `prototype/dist/index.html` to the same link with those files.

## Files
- `index.html`: layout, styles and interface labels
- `content.js`: all content (English and Tamil)
- `img/`: logo copies cropped to their artwork for display (the originals are in `brand-assets/logo/`)
- `previews/`: JPEG previews of the print PDFs
- `build-artifact.py`: builds the private-link version in `dist/`
