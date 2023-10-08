/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
//import type { PluginAPI } from "tailwindcss/types/config";

export default {
  name: "space-tourism-site",
  content: [],
  extend: {
    // TODO finish space site
    fontFamily: {
      barlow: {
        DEFAULT: ['"Barlow"', ...defaultTheme.fontFamily.sans],
        condensed: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
      },
      bellefair: ['"Bellefair"', ...defaultTheme.fontFamily.serif],
    },
  },
} satisfies Config;
