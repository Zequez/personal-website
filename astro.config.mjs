import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import unocss from "@unocss/astro";
import icon from "astro-icon";
import yaml from "@rollup/plugin-yaml";

// https://astro.build/config
export default defineConfig({
  site: "https://ezeas.org",
  integrations: [
    mdx(),
    sitemap(),
    preact(),
    icon(),
    unocss({ injectReset: true }),
  ],
  vite: {
    plugins: [yaml()],
  },
});
