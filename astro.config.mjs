import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  base: "/frontend-mentor-challenges/",
  site: "https://jhilker.com",
  outDir: "public",
  publicDir: "static",
  integrations: [tailwind(), alpinejs()]
});