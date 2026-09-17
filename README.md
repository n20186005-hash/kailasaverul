# राष्ट्रकूटकालीन श्री कैलास मंदिर, वेरूळ

Astro + Tailwind CSS + TypeScript single-page tourism site for Cloudflare static Workers assets.

## Domain configuration
Set the public domain only once in `astro.config.mjs` (`SITE`). When empty, the project omits absolute canonical/Open Graph URLs and disables `@astrojs/sitemap` so builds do not invent placeholder domains.

## PWA
The site ships a web app manifest (`public/manifest.webmanifest`), an installable `theme-color`, and a minimal offline service worker (`public/sw.js`, auto-registered in the page). For a fully installable PWA on all platforms, add a 512×512 icon to `public/icons` and reference it in the manifest.

## Build
```bash
corepack enable
pnpm install
pnpm check
pnpm build
```

## Cloudflare
`wrangler.jsonc` points Cloudflare Workers static assets to `dist/`. Deploy with your normal Wrangler/Cloudflare CI workflow after `pnpm build`.

## Note about this delivered environment
The authoring sandbox had outbound DNS disabled for npm and image binary downloads. Source code and configuration are included, but the lockfile could not be fully resolved or the requested clean-network install/check/build sequence executed here. Run `pnpm install --lockfile-only` once in a networked environment before enforcing `--frozen-lockfile`.
