import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/layout_KateVR/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        buy: resolve(process.cwd(), 'buy.html'),
      },
    },
  },
});