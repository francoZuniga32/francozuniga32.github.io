import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server-TSoyhzTt.js';
import 'kleur/colors';
import { g as getCollection } from './_astro_content-CTPcCx1V.js';
import 'clsx';
import { f as formatDate } from './util-C4wtvFyO.js';

const $$Astro = createAstro("https://barebones.superwebthemes.com");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(`/blog/${post.id}`, "href")} class="link flex w-full flex-col sm:flex-row sm:items-center sm:justify-between"> <span>${post.data.title}</span> <div class="text-muted-text dark:text-dark-muted-text text-sm font-normal decoration-0"> ${formatDate(post.data.publicationDate)} </div> </a> </li>`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/Post.astro", void 0);

const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf()
  );
  return renderTemplate`${maybeRenderHead()}<section class="py-3"> <h2 class="text-muted-text dark:text-dark-muted-text mb-3 text-lg font-bold">
Blog posts
</h2> <div class="grid list-none gap-4 p-0"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "post": post })}`)} </div> </section>`;
}, "/home/francozuniga/Documentos/francozuniga32.github.io/src/components/Posts.astro", void 0);

export { $$Posts as $ };
