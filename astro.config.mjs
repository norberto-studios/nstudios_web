// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://norberto-studios.github.io',
  base: 'nstudios_web',
  build: {
    assets: "assets",
  },

  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [svelte()]

});