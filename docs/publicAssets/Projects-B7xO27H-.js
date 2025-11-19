import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server-TSoyhzTt.js';
import 'kleur/colors';
import { g as getCollection } from './_astro_content-CTPcCx1V.js';
import 'clsx';

const $$Astro = createAstro("https://barebones.superwebthemes.com");
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex items-center gap-1.5"> <a${addAttribute(href, "href")} class="link"> ${renderSlot($$result, $$slots["default"])} </a> <svg class="text-muted-text dark:text-dark-muted-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"></path></svg> </li>`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/ExternalLink.astro", void 0);

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  return renderTemplate`${maybeRenderHead()}<section class="py-3"> <h2 class="text-muted-text dark:text-dark-muted-text mb-3 text-lg font-bold">
Projects
</h2> <div class="grid list-none gap-4 p-0"> ${projects.map((project) => renderTemplate`${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": project.data.href }, { "default": async ($$result2) => renderTemplate`${project.data.title}` })}`)} </div> </section>`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/Projects.astro", void 0);

export { $$Projects as $, $$ExternalLink as a };
