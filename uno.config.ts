import {
  defineConfig,
  presetUno,
  presetTypography,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";

const FLEX_ALIGNS = {
  c: "center",
  e: "flex-end",
  s: "flex-start",
  _: "stretch",
} as { [key: string]: string };

export default defineConfig({
  content: {
    filesystem: ["src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro,liquid,njk}"],
  },
  presets: [presetUno(), presetTypography()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  rules: [
    [
      /^flex([cse_])([cse_])$/,
      ([, c1, c2]) => ({
        display: "flex",
        "align-items": FLEX_ALIGNS[c1],
        "justify-content": FLEX_ALIGNS[c2],
      }),
    ],
  ],
  theme: {
    breakpoints: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      main: (() => {
        let colors: [string, string][] = [];
        for (let i = 10; i <= 90; i += 10) {
          colors.push([
            `${i}0`,
            `hsl(var(--main-hue), var(--main-saturation), ${i}%)`,
          ]);
        }
        colors.push([
          `950`,
          `hsl(var(--main-hue), var(--main-saturation), 95%)`,
        ]);
        return Object.fromEntries(colors);
      })(),
      alt: (() => {
        let colors: [string, string][] = [];
        for (let i = 10; i <= 90; i += 10) {
          colors.push([
            `${i}0`,
            `hsl(calc(var(--main-hue) + 180), var(--main-saturation), ${i}%)`,
          ]);
        }
        colors.push([
          `950`,
          `hsl(calc(var(--main-hue) + 180), var(--main-saturation), 95%)`,
        ]);
        return Object.fromEntries(colors);
      })(),
    },
  },
});
