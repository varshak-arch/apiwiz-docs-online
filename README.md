# APIwiz Docs

The APIwiz documentation website, built with [Astro Starlight](https://starlight.astro.build).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/docs/<topic>/<folder>/*.md` | Doc pages. Each top-level folder is a tab in the header. |
| `src/navigation.json` | Tab names, icons, landing links, folder order and folder labels. |
| `scripts/sidebar.mjs` | Builds the sidebar from the folders, so new pages appear automatically. |
| `src/assets/images/` | Screenshots (WebP), referenced from pages by relative path. |
| `src/components/` | Header with tabs, sidebar, page title with "Copy page", feedback footer. |
| `src/styles/custom.css` | Brand colours, typography and layout tweaks. |

## Adding a page

1. Create a `.md` file in the right folder with a `title` in the frontmatter.
2. Optional: add `sidebar: { order: 1 }` to move it to the top of its folder.
3. Put images next to the others in `src/assets/images/...` and link them with a relative path.

## Deploying

The site is a static build and deploys on Vercel (see `vercel.json`). Every push to `main` deploys production; pull requests get preview URLs.

See `MIGRATION.md` for notes on the content migration from the old docs.
