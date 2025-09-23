// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['@mui/x-data-grid']
    },
    // @ts-ignore
    plugins: [tailwindcss()]
  },
  server: {
    host: '192.168.0.2',
    port: 3000
  },
  integrations: [react()],
});