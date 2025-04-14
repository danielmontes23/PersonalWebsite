// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://danielmontes23.netlify.app', // Replace with your Netlify site URL
  build: {
    rollupOptions: {
      external: ['/styles/global.css'], // Mark the CSS file as external
    },
  },
git add astro.config.mjs
  outDir: 'dist', // Ensure this is set to 'dist'
});
