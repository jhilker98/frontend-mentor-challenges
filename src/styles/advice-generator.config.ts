/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  name: "advice-generator",
  selectors: [".advice-generator", "[data-theme='advice-generator']"],
  screens: {
    mobile: "375px",
    desktop: "1440px",
  },
  extend: {
    colors: {
      "light-cyan": "hsl(193, 38%, 86%)",
      "neon-green": "hsl(150, 100%, 66%)",
      "dark-blue": "hsl(218, 23%, 16%)",
      "grayish-blue": {
        DEFAULT: "hsl(217, 19%, 38%)",
        dark: "hsl(217, 19%, 24%)",
      },
    },
    fontFamily: {
      sans: ['"Manrope"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      28: "28px",
    },
  },
} satisfies Config;
