# Performance + SEO + CDN (CSR Setup)

This project is **CSR-only** (client-side rendering) and optimized for fast initial load, good Lighthouse scores, and easy indexing. Use this doc as the run/deploy guide and performance checklist.

## How To Run (Local)

```bash
npm run dev
```

## Build (Production)

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

## Cloudflare Pages (Static CSR)

**Build command**
```
npm run build
```

**Output directory**
```
dist
```

**Environment variable**
```
NODE_VERSION=20
```

Cloudflare Pages will deploy static files from `dist/` and serve them globally via CDN.

## Performance Improvements Implemented

- **Lazy-loaded sections** (About, Experience, Projects, etc.) to cut initial JS.
- **Intersection-based loading** so offscreen sections load only when near viewport.
- **Content-visibility** for long sections to reduce render cost.
- **Service worker** registered in production (already set).
- **Images** use `loading="lazy"` and `decoding="async"`.

## Fixing Lighthouse Issues You Mentioned

### 1) Cache TTL for Cloudflare scripts

Requests like:
```
https://static.cloudflareinsights.com/beacon.min.js
https://pandiselvam.in/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js
```

These are injected by Cloudflare features:

- **beacon.min.js** → Cloudflare Web Analytics / Insights
- **email-decode.min.js** → Cloudflare Email Address Obfuscation

**Best fix:** disable the feature you don’t need.

Cloudflare dashboard:
1. Web Analytics / Browser Insights → **Disable**
2. Email Address Obfuscation → **Disable**

This removes those requests entirely (best for performance).

If you want to keep them, the TTL is controlled by Cloudflare, so Lighthouse will continue to flag it.

### 2) Reduce unused JavaScript (vendor chunk)

This is addressed by:

- Lazy-loading non-critical sections (`LazySection`)
- Splitting heavy libraries into separate chunks (already in `vite.config.ts`)

If you want **further reductions**:
- Remove unused icons from `react-icons`.
- Replace `react-icons` with inline SVGs or a smaller icon set.

## Additional Recommended Optimizations

- **Compress `og.png`** to <300 KB.
- Keep **sitemap.xml** and **canonical URL** up to date.
- Avoid large animation libraries for above‑the‑fold content.
- Keep the hero and top nav content minimal for LCP.

## Quick Performance Checklist

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- No render-blocking CSS/JS
- Gzip/Brotli enabled at CDN (Cloudflare)

