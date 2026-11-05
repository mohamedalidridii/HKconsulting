# HK Consulting — site vitrine

Bureau d'études : équipement et aménagement de cuisines professionnelles et buanderies.
4 pages (Accueil, À propos, Services, Contact), en français.

Stack : Vite + TypeScript, three.js (shaders via vite-plugin-glsl), GSAP (ScrollTrigger, SplitText), Locomotive Scroll v5 (Lenis).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/
npm run images    # assets-src/raw/*.jpg|png → public/images/*.webp
npm run og        # regenerates public/og.jpg
```

## Contact form
The form posts to HK Consulting's existing script, `/php/formulaire.php`, on their current hosting (the one their old
site's contact page already used). It sends `nom`, `tel`, `mail`, `projet`, `description` as form data and expects JSON
`{ "succes": true }` (or `{ "succes": false, "message": "…" }`).

- **Deploying:** upload the contents of `dist/` to the site root and **keep the existing `php/` folder** on the server.
  The PHP source is not in this repo (it can't be downloaded over HTTP).
- **Local dev:** `npm run dev` answers that URL with a mock (see `formMock` in `vite.config.ts`), so nothing is e-mailed.
  `npm run preview` has no mock, so the form shows its error message there.
- Set `VITE_FORM_ENDPOINT` in `.env` only if the script ends up at a different URL.

## Where things live
- `src/content.ts` — all copy.
- `src/gl/layout.ts` — the kitchen plan (zones, equipment, flow line), shared by WebGL and the SVG fallback.
- `src/gl/` — brushed-steel surface with pointer ripples, the plan, the red "marche en avant" flow line.
- `src/anim/pages.ts` — per-page scroll scenes and WebGL states (`data-gl` on each section).
- With `prefers-reduced-motion` the site uses native scroll, no WebGL and a static SVG plan.

## Client material
`assets-src/client-site/` holds what was pulled from the client's current site (hkconsult-kitchenldry.com): the two
HTML pages and the original images. The images used on this site are copied, renamed, into `assets-src/raw/`
(`houda-ketari.jpg` is the portrait supplied separately), then `npm run images` writes the WebP files to `public/images/`.

## SEO
- Each page's HTML is prerendered at build time (`seoPlugin` in `vite.config.ts` runs the page modules from
  `src/pages/index.ts`), so crawlers and link previews get the full text without JavaScript.
- Titles and descriptions: `seo` in `src/content.ts` (also applied when the router swaps pages).
- Every page gets a canonical URL on https://www.hkconsult-kitchenldry.com, Open Graph/Twitter cards (`og.jpg`)
  and JSON-LD (ProfessionalService + WebSite, BreadcrumbList on inner pages, Person on À propos).
- `sitemap.xml` is generated at build; `robots.txt` points to it.
- Google Analytics 4 (`G-KZHQS4GXM8`, the property of their current site) is added to the built pages only.
- `public/.htaccess` redirects http/non-www to https://www and the old `contact.html` to `/contact/`.
