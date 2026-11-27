// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './scripts/sidebar.mjs';

// Update `site` once the production domain is known (used for sitemap + canonical URLs).
export default defineConfig({
  site: 'https://docs.apiwiz.io',
  integrations: [
    starlight({
      title: 'APIwiz Docs',
      description: 'Guides, tutorials and reference for the APIwiz API platform.',
      logo: { src: './src/assets/apiwiz-mark.png', alt: 'APIwiz' },
      favicon: '/favicon.png',
      head: [{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } }],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      pagination: true,
      credits: false,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      // Point this at the new repo once it exists so every page gets an "Edit page" link.
      editLink: { baseUrl: 'https://github.com/varshak-arch/apiwiz-docs-online/edit/main/' },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/varshak-arch' },
      ],
      components: {
        Header: './src/components/Header.astro',
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
      },
      sidebar: sidebar(),
    }),
  ],
});
