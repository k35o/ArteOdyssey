import { defineRoutes } from '@k8ordo/router';

import { DocsLayout } from './layouts/docs-layout';
import { ProductsFrame } from './layouts/products-frame';
import { RootLayout } from './layouts/root-layout';
import { Broken } from './pages/broken';
import { Guide } from './pages/guide';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { ProductError } from './pages/product-error';
import { ProductList } from './pages/product-list';
import { ProductPage } from './pages/product-page';

// アプリの pathname スキーマはここ 1 か所。フレームワークなら routes/ の
// ディレクトリ構造から生成される表を、クライアントアプリでは手で書く。
//
// マッチは上から順で、最初に合ったものが勝つ。だから '/products/broken' は
// '/:id' より前、'/*' は最後に置く。
export const routes = defineRoutes({
  // ルートに置いた branch は URL に何も足さず、全ページを包むレイアウトになる
  '/': {
    layout: RootLayout,
    children: {
      '/': Home,
      '/products': {
        layout: ProductsFrame,
        // 下のページが throw したら、ProductsFrame の穴の中にこれが出る
        error: ProductError,
        children: {
          '/': ProductList,
          '/broken': Broken,
          '/:id': ProductPage,
        },
      },
      // route group: URL には出ないが、この区画だけのレイアウトを持てる
      '/(docs)': {
        layout: DocsLayout,
        children: { '/guide': Guide },
      },
      '/*': NotFound,
    },
  },
});
