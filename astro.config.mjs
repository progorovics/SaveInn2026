// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://progorovics.github.io',
  base: '/SaveInn2026',
  integrations: [tailwind()]
});