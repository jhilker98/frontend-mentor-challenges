import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://jhilker.com/frontend-mentor-challenges",
  outDir: "public",
  publicDir: "static",
  integrations: [tailwind(), alpinejs()]
});