/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  name: "product-preview-card-component",
  selectors: [
    ".product-preview-card-component",
    "[data-project='product-preview-card-component']",
    "[\\:data-project='product-preview-card-component']",
  ],
  content: [],
  extend: {
    fontWeight: {
      DEFAULT: 500,
      bold: 700,
    },
    fontFamily: {
      serif: ['"Fraunces Variable"', ...defaultTheme.fontFamily.serif],
      sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      DEFAULT: "14px",
    },
    colors: {
      darkCyan: "hsl(158, 36%, 37%)",
      cream: "hsl(30, 38%, 92%)",
      veryDarkBlue: "hsl(212, 21%, 14%)",
      darkGrayishBlue: "hsl(228, 12%, 48%)",
    },
  },
} satisfies Config;
