import { framework } from '@k8ordo/static';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    framework({
      // 静的化ではパラメータを発明できないので、宣言しなければビルドが落ちる
      paths: () => ['/products/1', '/products/2'],
      // origin が分かれば sitemap.xml も書ける
      site: 'https://example.test',
    }),
  ],
});
