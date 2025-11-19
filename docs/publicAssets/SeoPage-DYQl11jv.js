import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate } from './astro/server-TSoyhzTt.js';
import 'kleur/colors';
import 'clsx';
import { S as SITE } from './siteConfig-DqNQiwQv.js';

const $$Astro = createAstro("https://barebones.superwebthemes.com");
const $$SeoPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SeoPage;
  const { title = SITE.title, description = SITE.description } = Astro2.props;
  const ogImage = new URL("./og.jpg", Astro2.site);
  const ogImageAlt = title;
  return renderTemplate`<title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(SITE.href, "href")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:alt"${addAttribute(ogImageAlt, "content")}><meta property="og:type" content="website"><meta property="og:locale"${addAttribute(SITE.locale, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><meta name="twitter:image:alt"${addAttribute(ogImageAlt, "content")}><meta name="twitter:card" content="summary_large_image">`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/SeoPage.astro", void 0);

export { $$SeoPage as $ };
