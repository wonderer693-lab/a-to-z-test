import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fieldservicepros.com',
  prefetch: { defaultStrategy: 'viewport' },
  build: { inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  compressHTML: true,
  server: { host: true },
});