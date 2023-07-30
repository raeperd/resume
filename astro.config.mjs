import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://raeperd.github.io",
  base: "/resume",
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
