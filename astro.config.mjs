import { defineConfig } from "astro/config";
import remarkGithubBlockquoteAlert from 'remark-github-blockquote-alert';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), mdx()],
  markdown: {
    remarkPlugins: [remarkGithubBlockquoteAlert],
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://francozuniga32.github.io/",
  outDir: "./docs",
  vite: {
    plugins: [tailwindcss()],
  },
});
