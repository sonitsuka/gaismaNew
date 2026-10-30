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
// HEIC/HEIF works too: sharp cannot read it, so those are converted first via
// python3 + pillow-heif (pip install pillow-heif). Without that installed the
// script skips them and tells you. On a Mac you can also pre-convert with the
// built-in sips:  sips -s format jpeg *.heic --out jpg/

import sharp from "sharp"
import { readdir, mkdir, writeFile, rm } from "node:fs/promises"
import { execFileSync } from "node:child_process"
import path from "node:path"
import os from "node:os"

const HEIC_TO_PNG = `
import sys, os, glob
from pillow_heif import register_heif_opener
from PIL import Image
register_heif_opener()
src, dst = sys.argv[1], sys.argv[2]
for p in sorted(glob.glob(os.path.join(src, "*.heic")) + glob.glob(os.path.join(src, "*.HEIC"))
                + glob.glob(os.path.join(src, "*.heif")) + glob.glob(os.path.join(src, "*.HEIF"))):
    im = Image.open(p); im.load()
    out = os.path.join(dst, os.path.splitext(os.path.basename(p))[0] + ".png")
    im.convert("RGB").save(out)
`

const SIZES = { grid: 1000, full: 2000 }
const QUALITY = 80

const [inputDir, prefix = "photo"] = process.argv.slice(2)
if (!inputDir) {
  console.error("usage: node scripts/optimize-photos.mjs <input-dir> [prefix]")
  process.exit(1)
}

const outDir = path.join("public", "photos")
await mkdir(outDir, { recursive: true })

const all = (await readdir(inputDir)).sort()
const direct = all.filter((f) => /\.(jpe?g|png|tiff?|webp)$/i.test(f))
const heic = all.filter((f) => /\.(heic|heif)$/i.test(f))

// sharp has no HEIF decoder, so hand those to pillow-heif and read the PNGs it writes.
let heicDir = null
if (heic.length) {
  heicDir = await fsMkdtemp()
  try {
    execFileSync("python3", ["-I", "-c", HEIC_TO_PNG, inputDir, heicDir], { stdio: "pipe" })
    console.log(`Converted ${heic.length} HEIC file(s) via pillow-heif`)
  } catch (err) {
    console.error(`Could not convert HEIC (${heic.length} file(s)) — skipping them.`)
    console.error("Install the decoder with:  pip install pillow-heif")
    heicDir = null
  }
}

const sources = [
  ...direct.map((f) => ({ name: f, src: path.join(inputDir, f) })),
  ...(heicDir
    ? (await readdir(heicDir)).sort().map((f) => ({ name: f, src: path.join(heicDir, f) }))
    : []),
]

if (!sources.length) {
  console.error(`Nothing readable in ${inputDir} (looked for jpg/png/tiff/webp/heic).`)
  process.exit(1)
}

const manifest = []
let gridTotal = 0

for (const [i, { name: file, src }] of sources.entries()) {
  const n = String(i + 1).padStart(2, "0")
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

if (heicDir) await rm(heicDir, { recursive: true, force: true })

await writeFile(path.join(outDir, `${prefix}.json`), JSON.stringify(manifest, null, 2))
console.log(`\n${sources.length} photos — grid set totals ${(gridTotal / 1048576).toFixed(2)}MB`)
console.log(`Manifest: public/photos/${prefix}.json  (add your alt text there)`)

// --- helpers -------------------------------------------------------------

async function fsMkdtemp() {
  const { mkdtemp } = await import("node:fs/promises")
  return mkdtemp(path.join(os.tmpdir(), "heic-"))
}
