/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          // ...
        },
      },
      themes: [
        require("./src/styles/advice-generator.config"),
        require("./src/styles/stats-card.config"),
      ],
    }),
  ],
} satisfies Config;
