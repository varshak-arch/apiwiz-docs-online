// Builds the site sidebar from the folders in src/content/docs.
// - Folder labels come from src/navigation.json (falls back to a title-cased folder name).
// - Pages are ordered by `sidebar.order` frontmatter, then by title.
// - Sub-folders are listed after the pages of their parent folder.
import fs from 'node:fs';
import path from 'node:path';

const DOCS = path.resolve('src/content/docs');
export const nav = JSON.parse(fs.readFileSync(path.resolve('src/navigation.json'), 'utf8'));

const titleCase = (s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export function readMeta(file) {
  const src = fs.readFileSync(file, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const title = fm.match(/^title:\s*"?(.*?)"?\s*$/m)?.[1] ?? path.basename(file, path.extname(file));
  const order = Number(fm.match(/^\s+order:\s*(\d+)/m)?.[1] ?? 1000);
  return { title: title.replace(/\\"/g, '"'), order };
}

export function folder(rel, collapsed) {
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

function sectionFolders(sec) {
  return [
    ...sec.folders,
    ...fs
      .readdirSync(path.join(DOCS, sec.id), { withFileTypes: true })
      .filter((e) => e.isDirectory() && !sec.folders.includes(e.name))
      .map((e) => e.name),
  ];
}

// First page of a folder (following sidebar order), used for card links.
export function firstPage(group) {
  const first = group.items[0];
  return typeof first === 'string' ? first : firstPage(first);
}

// Count of pages in a folder, including sub-folders.
export function pageCount(group) {
  return group.items.reduce((n, i) => n + (typeof i === 'string' ? 1 : pageCount(i)), 0);
}

export function sectionGroups(sectionId) {
  const sec = nav.sections.find((s) => s.id === sectionId);
  return sectionFolders(sec).map((f) => ({ id: f, ...folder(`${sec.id}/${f}`, true) }));
}

// One header tab per section; each tab has its own sidebar (section overview + folder groups).
export function topics() {
  return nav.sections.map((sec) => ({
    id: sec.id,
    label: sec.label,
    icon: sec.icon,
    link: `/${sec.id}/`,
    items: [sec.id, ...sectionGroups(sec.id).map(({ id, ...g }) => g)],
  }));
}
