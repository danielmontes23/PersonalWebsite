import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-site.com',
  integrations: [],
  build: {
    rollupOptions: {
      external: ['/styles/global.css'], // Mark the CSS file as external
    },
  },
});