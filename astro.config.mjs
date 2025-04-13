// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['/styles/global.css'], // Mark the CSS file as external
    },
  },
});
