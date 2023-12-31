/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  name: "product-preview-card-component",
  selectors: [
    ".product-preview-card-component",
    "[data-project='product-preview-card-component']",
    "[\\:data-project='product-preview-card-component']",
  ],
  content: [],
  extend: {
    fontFamily: {
      serif: ['"Fraunces Variable"', ...defaultTheme.fontFamily.serif],
      sans: ['"Montserrat Variable"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      DEFAULT: "14px",
    },
    colors: {
      cream: "hsl(30, 38%, 92%)",
      darkCyan: "hsl(158, 36%, 37%)",
      veryDarkBlue: "hsl(212, 21%, 14%)",
      darkGrayishBlue: "hsl(228, 12%, 48%)",
    },
  },
} satisfies Config;
