import fs from 'fs';
import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcRoot = resolve(__dirname, 'src');

function processIncludes(html, root) {
  return html.replace(/<!--\s*@include\s+(.+?)\s*-->/g, (_, includePath) => {
    const fullPath = resolve(root, includePath.trim());
    const content = fs.readFileSync(fullPath, 'utf-8');

    return processIncludes(content, root);
  });
}

function htmlInclude() {
  return {
    name: 'html-include',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return processIncludes(html, srcRoot);
      },
    },
  };
}

export default defineConfig({
  root: 'src',
  plugins: [htmlInclude()],
  resolve: {
    alias: {
      images: resolve(__dirname, 'src/images'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [srcRoot],
      },
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
