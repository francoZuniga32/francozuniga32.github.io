import { b as createAstro, c as createComponent, d as addAttribute, i as renderScript, a as renderTemplate, r as renderComponent, e as renderSlot, j as renderHead, m as maybeRenderHead } from './astro/server-TSoyhzTt.js';
import 'kleur/colors';
/* empty css                       */
import 'clsx';
import { S as SITE, N as NAV_LINKS } from './siteConfig-DqNQiwQv.js';

const $$Astro$1 = createAstro("https://barebones.superwebthemes.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/francozuniga/Documentos/francozuniga32.github.io/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="apple-touch-icon-precomposed" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/Favicons.astro", void 0);

const $$Astro = createAstro("https://barebones.superwebthemes.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  return renderTemplate`<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="HandheldFriendly" content="True"><meta name="format-detection" content="telephone=no"><meta name="referrer" content="no-referrer-when-downgrade"><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)"><link rel="sitemap" href="/sitemap-index.xml"><link rel="manifest" href="/site.webmanifest"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE.title, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderSlot($$result, $$slots["default"])}${renderHead()}</head>`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/BaseHead.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="theme-toggle" class="relative z-0 inline-grid grid-cols-3 gap-0.5 bg-neutral-950/5 p-0.75 text-neutral-950 dark:bg-white/10 dark:text-white" data-astro-cid-x3pjskd3> <button aria-label="System theme" data-theme="system" class="theme-button p-1.5 sm:p-0" data-astro-cid-x3pjskd3> <svg viewBox="0 0 28 28" fill="none" class="size-7" data-astro-cid-x3pjskd3> <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z" stroke="currentColor" data-astro-cid-x3pjskd3></path> <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V14.5C20.5 15.0523 20.0523 15.5 19.5 15.5H8.5C7.94772 15.5 7.5 15.0523 7.5 14.5V8.5Z" stroke="currentColor" data-astro-cid-x3pjskd3></path> <path d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5" stroke="currentColor" stroke-linecap="round" data-astro-cid-x3pjskd3></path> </svg> </button> <button aria-label="Light theme" data-theme="light" class="theme-button p-1.5 sm:p-0" data-astro-cid-x3pjskd3> <svg viewBox="0 0 28 28" fill="none" class="size-7" data-astro-cid-x3pjskd3> <circle cx="14" cy="14" r="3.5" stroke="currentColor" data-astro-cid-x3pjskd3></circle> <path d="M14 8.5V6.5" stroke="currentColor" stroke-linecap="round" data-astro-cid-x3pjskd3></path> <path d="M17.889 10.1115L19.3032 8.69727" stroke="currentColor" stroke-linecap="round" data-astro-cid-x3pjskd3></path> <path d="M19.5 14L21.5 14" stroke="currentColor" stroke-linecap="round" data-astro-cid-x3pjskd3></path> <path d="M17.889 17.8885L19.3032 19.3027" stroke="currentColor" stroke-linecap="round" data-astro-cid-x3pjskd3></path> <path d="M14 21.5V19.5" stroke="currentColor" stroke-linecap="round" data-astro-cid-x3pjskd3></path> <path d="M8.69663 19.3029L10.1108 17.8887" stroke="currentColor" stroke-linecap="round" data-astro-cid-x3pjskd3></path> <path d="M6.5 14L8.5 14" stroke="currentColor" stroke-linecap="round" data-astro-cid-x3pjskd3></path> <path d="M8.69663 8.69711L10.1108 10.1113" stroke="currentColor" stroke-linecap="round" data-astro-cid-x3pjskd3></path> </svg> </button> <button aria-label="Dark theme" data-theme="dark" class="theme-button p-1.5 sm:p-0" data-astro-cid-x3pjskd3> <svg viewBox="0 0 28 28" fill="none" class="size-7" data-astro-cid-x3pjskd3> <path d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z" stroke="currentColor" stroke-linejoin="round" data-astro-cid-x3pjskd3></path> </svg> </button> </div>  <script data-astro-rerun>\n  (function () {\n    const theme = localStorage.getItem("currentTheme") || "system";\n    const prefersDark = window.matchMedia(\n      "(prefers-color-scheme: dark)",\n    ).matches;\n\n    const isDark = theme === "dark" || (theme === "system" && prefersDark);\n\n    if (isDark) {\n      document.documentElement.classList.add("dark");\n      document.documentElement.classList.remove("light");\n    } else {\n      document.documentElement.classList.add("light");\n      document.documentElement.classList.remove("dark");\n    }\n  })();\n<\/script> ', ""])), maybeRenderHead(), renderScript($$result, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts"));
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/ThemeToggle.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto flex w-full flex-col items-start gap-6 pt-16 pb-24 sm:flex-row sm:items-center sm:justify-between sm:gap-8"> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} <span class="prose mt-2 block">${year} ${SITE.author}</span> </footer>`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/Footer.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="mx-auto flex max-w-screen-sm flex-wrap items-center justify-between p-3 pb-8 font-sans sm:p-6"> <a href="/" class="text-lg font-semibold text-black sm:text-xl dark:text-white">${SITE.title}</a> <nav> <ul class="flex list-none items-center gap-2 p-0 sm:gap-3"> ${Object.keys(NAV_LINKS).map((navItemKey) => {
    return renderTemplate`<li> <a${addAttribute(NAV_LINKS[navItemKey].path, "href")} class="prose"> ${NAV_LINKS[navItemKey].label} </a> </li>`;
  })} </ul> </nav> </header>`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/Navigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> ', '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""><script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""><\/script>', '<body class="bg-bg dark:bg-dark-bg"> ', ' <div class="mx-auto max-w-screen-sm p-3 font-sans sm:p-6"> <main class="min-h-[90vh]"> ', " </main> ", " </div> </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["head"])}` }), maybeRenderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
