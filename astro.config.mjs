import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://EaRebusa.github.io',
  integrations: [tailwind()],
});
