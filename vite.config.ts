import { resolve } from 'node:path';
import { createServer, defineConfig, type Plugin, type ViteDevServer } from 'vite';
import glsl from 'vite-plugin-glsl';

const page = (p: string) => resolve(import.meta.dirname, p);

/**
 * Dev only: answers like HK Consulting's php/formulaire.php so the contact form can be tried locally
 * without sending real e-mail. The real script lives on their hosting and is not part of this repo.
 */
const formMock = (): Plugin => ({
  name: 'hk-form-mock',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/php/formulaire.php', (req, res) => {
      let body = '';
      req.on('data', (c) => (body += c));
      req.on('end', () => {
        const fields = [...body.matchAll(/name="([^"]+)"/g)].map((m) => m[1]);
        server.config.logger.info(`[form mock] POST /php/formulaire.php — fields: ${fields.join(', ')}`);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ succes: req.method === 'POST' }));
      });
    });
  },
});

type Seo = Record<string, { path: string; title: string; description: string }>;
type Site = { SITE: string; ANALYTICS_ID: string; seo: Seo; contact: Record<string, string>; founder: { name: string; photo: string }; expertise: string[] };

const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Structured data: the firm (on every page), the page's place in the site, and Houda Ketari on À propos. */
function jsonLd(c: Site, page: string) {
  const org = {
    '@type': 'ProfessionalService',
    '@id': `${c.SITE}/#organisation`,
    name: 'HK Consulting',
    description: c.seo.home.description,
    url: `${c.SITE}/`,
    logo: `${c.SITE}/logo.png`,
    image: [`${c.SITE}/og.jpg`, `${c.SITE}${c.founder.photo}`],
    telephone: '+216 23 312 815',
    email: c.contact.email,
    address: { '@type': 'PostalAddress', streetAddress: c.contact.address, addressLocality: 'Tunis', addressCountry: 'TN' },
    areaServed: [{ '@type': 'Country', name: 'Tunisie' }, 'International'],
    knowsAbout: ['Cuisine professionnelle', 'Buanderie professionnelle', 'Marche en avant', ...c.expertise],
  };
  const graph: object[] = [org, { '@type': 'WebSite', '@id': `${c.SITE}/#site`, url: `${c.SITE}/`, name: 'HK Consulting', inLanguage: 'fr', publisher: { '@id': org['@id'] } }];
  if (page !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${c.SITE}/` },
        { '@type': 'ListItem', position: 2, name: c.seo[page].title.split(' — ')[0], item: c.SITE + c.seo[page].path },
      ],
    });
  }
  if (page === 'about') {
    graph.push({ '@type': 'Person', name: c.founder.name, image: c.SITE + c.founder.photo, worksFor: { '@id': org['@id'] }, sameAs: [c.contact.linkedin] });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

function head(c: Site, page: string, analytics: boolean) {
  const s = c.seo[page];
  const url = c.SITE + s.path;
  const img = `${c.SITE}/og.jpg`;
  const ga = analytics
    ? `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${c.ANALYTICS_ID}"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${c.ANALYTICS_ID}');</script>`
    : '';
  return `<title>${attr(s.title)}</title>
    <meta name="description" content="${attr(s.description)}" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="HK Consulting" />
    <meta property="og:title" content="${attr(s.title)}" />
    <meta property="og:description" content="${attr(s.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${img}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="HK Consulting — bureau d’études cuisines et buanderies professionnelles" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${attr(s.title)}" />
    <meta name="twitter:description" content="${attr(s.description)}" />
    <meta name="twitter:image" content="${img}" />
    <script type="application/ld+json">${jsonLd(c, page)}</script>${ga}`;
}

/**
 * SEO: writes each page's real content into its HTML (so crawlers and link previews see text without
 * running JS), plus title/description/canonical/social cards/structured data, and a sitemap.xml.
 * The page modules are plain string functions, loaded through a throwaway SSR server at build time.
 */
const seoPlugin = (): Plugin => {
  let site: Site | null = null;
  let renders: Record<string, () => string> = {};
  let build = false;
  const load = async (vs: ViteDevServer) => {
    site = (await vs.ssrLoadModule('/src/content.ts')) as unknown as Site;
    renders = ((await vs.ssrLoadModule('/src/pages/index.ts')) as { renders: typeof renders }).renders;
  };
  return {
    name: 'hk-seo',
    configResolved(c) {
      build = c.command === 'build';
    },
    async buildStart() {
      if (!build) return;
      const vs = await createServer({ configFile: false, root: import.meta.dirname, logLevel: 'silent', server: { middlewareMode: true }, appType: 'custom' });
      try {
        await load(vs);
      } finally {
        await vs.close();
      }
    },
    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        if (ctx.server) await load(ctx.server);
        const page = html.match(/<main id="main" data-page="(\w+)">/)?.[1];
        if (!site || !page || !renders[page]) return html;
        return html
          .replace('<!--seo-->', head(site, page, build))
          .replace(`<main id="main" data-page="${page}"></main>`, `<main id="main" data-page="${page}">${renders[page]()}</main>`);
      },
    },
    generateBundle() {
      if (!site) return;
      const today = new Date().toISOString().slice(0, 10);
      const urls = Object.values(site.seo)
        .map((s) => `  <url><loc>${site!.SITE}${s.path}</loc><lastmod>${today}</lastmod><priority>${s.path === '/' ? '1.0' : '0.8'}</priority></url>`)
        .join('\n');
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n` });
    },
  };
};

export default defineConfig({
  plugins: [glsl({ compress: true }), formMock(), seoPlugin()],
  build: {
    target: 'es2022',
    assetsInlineLimit: 0,
    // three's WebGLRenderer alone is most of the bundle; ~200 kB gzip is expected here.
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      input: {
        home: page('index.html'),
        about: page('a-propos/index.html'),
        services: page('services/index.html'),
        contact: page('contact/index.html'),
      },
    },
  },
});
