import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import dirac from './package/src';

import vercel from '@astrojs/vercel';
import { diracDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://dirac.fun',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [diracDark],
    }),
    mdx(),
    sitemap(),
    dirac({
      name: 'Dirac',
      openGraph: {
        home: {
          title: 'Dirac',
          description: 'Open Science & Quantum Computing.'
        },
        blog: {
          title: 'Blog',
          description: 'News and guides for Dirac.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'mk0dz/dirac',
        repositoryId: 'R_kgDOOs3_nA',
        category: 'General',
        categoryId: 'DIC_kwDOOs3_nM4CqWr2',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
        theme: 'gruvbox_light',
      }
    })
  ],
  adapter: vercel()
});