import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import unocss from "@unocss/astro";
import icon from "astro-icon";
import yaml from "@rollup/plugin-yaml";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ezequiel.site",
  // base: "zequez/personal-website",
  integrations: [
    mdx(),
    sitemap(),
    preact(),
    icon(),
    unocss({ injectReset: true }),
  ],
  vite: {
    plugins: [yaml(), Icons({ jsx: "preact", compiler: "jsx" })],
  },
});
