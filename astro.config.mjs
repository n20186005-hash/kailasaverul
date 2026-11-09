import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Disable Astro telemetry so the build does not block on network in restricted environments.
process.env.ASTRO_TELEMETRY_DISABLED = process.env.ASTRO_TELEMETRY_DISABLED || '1';

// साइटचे सार्वजनिक डोमेन (kailasaverul.com)
const SITE = 'https://kailasaverul.com';

export default defineConfig({
  site: SITE || undefined,
  output: 'static',
  integrations: [
    ...(SITE ? [sitemap({filter:url=>!/(?:404)(?:\/|\.html|$)/.test(url)})] : [])
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
