import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    publicDir: 'public',
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
    },
    server: {
      open: '/index.html',
    },
    plugins: [
      injectHTML(),
      FullReload(['src/**/*.html']),
      SortCss({
        sort: 'mobile-first',
      }),
    ],
  };
});
