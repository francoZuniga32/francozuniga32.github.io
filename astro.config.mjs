import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://barebones.superwebthemes.com",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "publicAssets",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "publicAssets/[name]-[hash][extname]",
          chunkFileNames: "publicAssets/[name]-[hash].js",
          entryFileNames: "publicAssets/[name]-[hash].js",
        },
      },
    },
  },
});
