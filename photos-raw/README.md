# photos-raw

Full-resolution originals. **Nothing here is published.**

Next.js only serves files under `public/`, so these stay in the repository as a
backup without being downloadable from the site or shipped in a deploy.

## Adding photos

Drag them in here (GitHub: **Add file → Upload files**). Any of jpg, png, heic,
heif, tiff, webp. Camera RAW (`.CR2`, `.NEF`, `.ARW`, `.DNG`) can't be read —
export JPEGs first.

Name them `01-`, `02-`, … if the order matters; the gallery follows filename order.

## Turning them into web versions

    node scripts/optimize-photos.mjs photos-raw/modeling modeling

That writes `public/photos/modeling-01.webp` (1000px, for the grid) and
`modeling-01-full.webp` (2000px, for click-to-enlarge), plus a JSON manifest.

Why: `next.config.mjs` sets `images: { unoptimized: true }`, so whatever lands in
`public/` is what the browser downloads at full size — a 5MB original is a 5MB
download inside a 300px card.
