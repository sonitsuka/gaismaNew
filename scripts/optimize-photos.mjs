// Prepare photos for the site.
//
//   node scripts/optimize-photos.mjs <input-dir> <output-prefix>
//   e.g. node scripts/optimize-photos.mjs ~/Desktop/modeling modeling
//
// Writes public/photos/<prefix>-01.webp etc, plus a JSON manifest you can paste
// into the page. Two sizes per photo:
//
//   grid     1000px long edge — what the gallery shows
//   full     2000px long edge — only fetched if you add a click-to-enlarge view
//
// Why pre-size at all: next.config.mjs sets `images: { unoptimized: true }`, so
// Next serves whatever is in public/ untouched. A 5MB original is a 5MB download
// even inside a 300px card.
//
// HEIC is not supported here. On a Mac, convert first — sips is built in:
//   mkdir jpg && sips -s format jpeg *.heic --out jpg/

import sharp from "sharp"
import { readdir, mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

const SIZES = { grid: 1000, full: 2000 }
const QUALITY = 80

const [inputDir, prefix = "photo"] = process.argv.slice(2)
if (!inputDir) {
  console.error("usage: node scripts/optimize-photos.mjs <input-dir> [prefix]")
  process.exit(1)
}

const outDir = path.join("public", "photos")
await mkdir(outDir, { recursive: true })

const files = (await readdir(inputDir))
  .filter((f) => /\.(jpe?g|png|tiff?|webp)$/i.test(f))
  .sort()

if (!files.length) {
  console.error(`No jpg/png/tiff/webp files in ${inputDir}.`)
  console.error("HEIC needs converting first — on a Mac: sips -s format jpeg *.heic --out jpg/")
  process.exit(1)
}

const manifest = []
let gridTotal = 0

for (const [i, file] of files.entries()) {
  const n = String(i + 1).padStart(2, "0")
  const src = path.join(inputDir, file)
  const meta = await sharp(src).metadata()
  const row = { src: `/photos/${prefix}-${n}.webp`, alt: "", width: 0, height: 0 }

  for (const [name, edge] of Object.entries(SIZES)) {
    const out = path.join(outDir, `${prefix}-${n}${name === "full" ? "-full" : ""}.webp`)
    const info = await sharp(src)
      .rotate() // honour EXIF orientation, so phone shots aren't sideways
      .resize(edge, edge, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out)
    if (name === "grid") {
      row.width = info.width
      row.height = info.height
      gridTotal += info.size
      console.log(
        `${file}  ${meta.width}x${meta.height} -> ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`,
      )
    }
  }
  manifest.push(row)
}

await writeFile(path.join(outDir, `${prefix}.json`), JSON.stringify(manifest, null, 2))
console.log(`\n${files.length} photos — grid set totals ${(gridTotal / 1048576).toFixed(2)}MB`)
console.log(`Manifest: public/photos/${prefix}.json  (add your alt text there)`)
