import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// साइटचे सार्वजनिक डोमेन (kailasaverul.com)
const SITE = 'https://kailasaverul.com';

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
