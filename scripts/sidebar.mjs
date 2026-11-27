// Builds the site sidebar from the folders in src/content/docs.
// - Folder labels come from src/navigation.json (falls back to a title-cased folder name).
// - Pages are ordered by `sidebar.order` frontmatter, then by title.
// - Sub-folders are listed after the pages of their parent folder.
import fs from 'node:fs';
import path from 'node:path';

const DOCS = path.resolve('src/content/docs');
const nav = JSON.parse(fs.readFileSync(path.resolve('src/navigation.json'), 'utf8'));

const titleCase = (s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

function readMeta(file) {
  const src = fs.readFileSync(file, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const title = fm.match(/^title:\s*"?(.*?)"?\s*$/m)?.[1] ?? path.basename(file, path.extname(file));
  const order = Number(fm.match(/^\s+order:\s*(\d+)/m)?.[1] ?? 1000);
  return { title: title.replace(/\\"/g, '"'), order };
}

function folder(rel, collapsed) {
  const abs = path.join(DOCS, rel);
  const entries = fs.readdirSync(abs, { withFileTypes: true });
  const pages = entries
    .filter((e) => e.isFile() && /\.mdx?$/.test(e.name))
    .map((e) => ({ slug: `${rel}/${e.name.replace(/\.mdx?$/, '')}`, ...readMeta(path.join(abs, e.name)) }))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  const subfolders = entries
    .filter((e) => e.isDirectory())
    .map((e) => folder(`${rel}/${e.name}`, true))
    .sort((a, b) => a.label.localeCompare(b.label));
  return {
    label: nav.folderLabels[rel] ?? titleCase(path.basename(rel)),
    collapsed,
    items: [...pages.map((p) => p.slug), ...subfolders],
  };
}

// One sidebar for the whole site: each section from navigation.json is a heading,
// and each folder inside it is a collapsible group.
export function sidebar() {
  return nav.sections.map((sec) => ({
    label: sec.label,
    collapsed: false,
    items: [
      ...sec.folders,
      ...fs
        .readdirSync(path.join(DOCS, sec.id), { withFileTypes: true })
        .filter((e) => e.isDirectory() && !sec.folders.includes(e.name))
        .map((e) => e.name),
    ].map((f) => folder(`${sec.id}/${f}`, true)),
  }));
}
