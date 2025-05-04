import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    base: '/goit-js-hw-09/',
    root: 'src',
    publicDir: 'public',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          gallery: resolve(__dirname, 'src/1-gallery.html'),
          form: resolve(__dirname, 'src/2-form.html'),
        },
      },
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
