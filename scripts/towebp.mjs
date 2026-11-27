// Convert migrated PNG/JPG screenshots to WebP and update markdown references.
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
const site = process.argv[2];
const imgRoot = path.join(site, 'src/assets/images');
const docs = path.join(site, 'src/content/docs');
async function* walk(d) { for (const e of await fs.readdir(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) yield* walk(p); else yield p; } }
let before = 0, after = 0;
for await (const f of walk(imgRoot)) {
  if (!/\.(png|jpe?g)$/.test(f)) continue;
  const out = f.replace(/\.(png|jpe?g)$/, '.webp');
  const st = await fs.stat(f); before += st.size;
  await sharp(f).resize({ width: 2000, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
  after += (await fs.stat(out)).size; await fs.unlink(f);
}
for await (const f of walk(docs)) {
  if (!f.endsWith('.md')) continue;
  const s = await fs.readFile(f, 'utf8');
  const t = s.replace(/(\]\((?:\.\.\/)+assets\/images\/[^)]+)\.(png|jpe?g)\)/g, '$1.webp)');
  if (t !== s) await fs.writeFile(f, t);
}
console.log(`images: ${(before/1e6).toFixed(1)}MB -> ${(after/1e6).toFixed(1)}MB`);
