# Kailasa Temple (Ellora Cave16), Verul guide

A Marathi/English single-page static Astro guide, separate from ASI, UNESCO and temple management. Active content and exact FAQ pairs are in `src/data/guide.ts`.

## Reproducible local build

Use the existing Node24.21.0 and pnpm12.4.2 versions:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm run build
```

All original application dependency versions and lockfile are retained. The exact locked `esbuild@0.28.2` lifecycle script is permitted by `pnpm-workspace.yaml`; blanket script permission is not enabled. The existing exact Astro release-age exception remains in place.

`dist/` is tracked in the original repository and also ignored. After a build, explicitly stage new/deleted hashed CSS, JS, images, sitemap and404 output alongside source changes with `git add -f dist`. Do not publish private audit exports or diagnostics.

## Native Cloudflare assets and wrapper

The confirmed project is `kailasaverul`. `worker.mjs` enforces public HTTP/www canonical redirects before the ASSETS binding, preserving path/query, adds response security headers and ensures explicit error aliases return404. `wrangler.jsonc` retains the existing compatibility date and static-output architecture; no new domain binding is configured.

The historical official deployment used `npx wrangler deploy` with Wrangler4.144.0. Use that exact CLI version for local dry-run/dev (`npx --yes wrangler@4.144.0 deploy --dry-run`, or the equivalent pinned local executable) and review future deployment CLI changes. Wrangler remains outside the application dependency/lock tree.

For a native local preview after building, use `npx --yes wrangler@4.144.0 dev --port 8941`. No publication is part of this local command.

## Content and services

ASI sources reviewed 2026-10-29 (Los Angeles date) are linked on the page. ASI's listed opening/rates are attributed to its Ellora Caves page, not promised as final checkout/current availability. UNESCO coordinates identify the ensemble, not a surveyed Cave 16 entrance. The Google Maps rating snapshot (4.8 / 10,185 reviews) was manually checked 2026-11-09; it is a dated third-party snapshot, not site-collected or automatically synchronized. The two dates are kept separate because the ASI listing was not re-consulted on 2026-11-09.

Only a documented historical upper-detail photo crop is delivered; photography attribution does not establish all subject rights. See the visible image section and `public/images/README.md`. The original icons/brand are retained.

Weather is browser-fetched, freshness-validated regional model data. Errors clear values; no stale build-time forecast or climatology substitute is labelled live. Google Analytics retains its original automatic loading, with actual privacy/data-flow disclosure and external provider opt-out information; no local consent control or legal-compliance claim is made. Cloudflare hosting/possible independent WebAnalytics is disclosed separately. Old site-specific offline caches are retired.

Local checks and a candidate commit are not production acceptance. Independent browser, official exact-commit Cloudflare build and live-domain/runtime checks remain required before release acceptance.
