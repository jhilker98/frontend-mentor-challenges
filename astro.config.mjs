import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://frontend-mentor-challenges.jhilker.com",
  outDir: "public",
  publicDir: "static",
  integrations: [tailwind(), alpinejs()]
});