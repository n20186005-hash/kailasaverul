import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// साइटचे सार्वजनिक डोमेन ठरल्यावर फक्त ही एकच value भरा.
const SITE = '';

export default defineConfig({
  site: SITE || undefined,
  output: 'static',
  integrations: [
    ...(SITE ? [sitemap()] : [])
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
