/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  name: "stats-card-component",
  selectors: [
    ".stats-card-component",
    "[data-project='stats-card-component']",
    "[\\:data-project='stats-card-component']",
  ],
  content: [],
  extend: {
    screens: {
      //mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      veryDarkBlue: "hsl(233, 47%, 7%)",
      desaturatedBlue: "hsl(244, 38%, 16%)",
      softPurple: "hsl(277,64%,61%)",
    },
    fontFamily: {
      inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      lexendDeca: ['"Lexend Deca"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      base: "15px",
    },
  },
} satisfies Config;
