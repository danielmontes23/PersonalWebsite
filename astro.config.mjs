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
git commit -m "Update astro.config.mjs with build configuration"git push
git pushgit pushnpm install
npm run build
npm run preview[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200  outDir: 'dist', // Ensure this is set to 'dist'
});
