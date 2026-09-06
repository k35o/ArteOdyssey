# @k8ordo/router × client

サーバーもルートファイルもなしに、**`<Router>` を自分でマウントする**
クライアント描画アプリの example。`@k8ordo/router` のうち、フレームワーク
(`@k8ordo/static` / `@k8ordo/server`) が使わない半分 — `defineRoutes` /
`<Router>` / `<Outlet />` / `useParams` / `useRoute` — を動かす唯一の場所。

```tsx
export const routes = defineRoutes({ '/': { layout: RootLayout, children: { … } } });
export const App = () => <Router routes={routes} />;
```

## この example が示すこと

- **表は手書き** — [`src/routes.ts`](src/routes.ts) が pathname スキーマの
  1 か所。leaf / branch / `layout` / `error` / route group `(docs)` /
  `/:id` / `/*` を一通り使う。マッチは書いた順で、最初に合ったものが勝つ。
- **`Register` も手書き** — [`types/k8ordo-router.d.ts`](types/k8ordo-router.d.ts)
  で `Register` を augment すると、`href` / `navigateTo` / `useParams` /
  `useMatch` に渡すパターン文字列が実際の表と照合される。
- **`<Link>` はない** — Navigation API の下では素の `<a href={href(…)}>` が
  そのままクライアント遷移。「今どの区画にいるか」は `useMatch` に訊いて
  `aria-current` を付ける ([`src/layouts/root-layout.tsx`](src/layouts/root-layout.tsx))。
- **レイアウトは `<Outlet />` で入れ子** — フレームワークの `children` と
  違い、クライアント描画では表のスタックを context で辿る。
- **`error` 境界はレイアウトの内側** — `/products/broken` が throw しても
  `ProductsFrame` と nav は生き残り、別のページへ移れば失敗は置き去りになる。
- **ページを変えるのは `navigateTo`** — `push` なので戻るボタンで戻れる
  ([`src/pages/home.tsx`](src/pages/home.tsx) のボタン)。

## `examples/static-basic` との違い

|                    | static-basic                                  | router-basic                        |
| ------------------ | --------------------------------------------- | ----------------------------------- |
| 描画               | サーバー (RSC) で描いた木をブラウザが受け取る | ブラウザが表から木を組み立てる      |
| 表                 | `routes/` のディレクトリ構造から生成          | `src/routes.ts` に手書き            |
| `Register`         | `.k8ordo/register.gen.ts` に生成              | `types/k8ordo-router.d.ts` に手書き |
| レイアウトの入れ子 | `children` prop                               | `<Outlet />`                        |
| params             | ページが prop で受け取る                      | `useParams('/products/:id')`        |
| 404                | サーバーの本物の 404                          | 表の `'/*'` leaf                    |

共通なのは `href` / `navigateTo` / `usePathname` / `useMatch` — 表を持たずに
済むものは、どちらの側でも同じに書ける。

## Getting Started

```bash
pnpm install
pnpm --filter @k8ordo/router build # ワークスペース内では先にライブラリをビルド
pnpm --filter example-router-basic dev
```

## Scripts

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `pnpm dev`       | 開発サーバーを起動                         |
| `pnpm build`     | プロダクションビルド                       |
| `pnpm test`      | Chromium で走るブラウザテスト (モックなし) |
| `pnpm typecheck` | 型チェック                                 |
| `pnpm check`     | lint / format チェック                     |

## Structure

```
examples/router-basic/
├── src/
│   ├── main.tsx               # createRoot
│   ├── app.tsx                # <Router routes> をマウントする唯一の場所
│   ├── routes.ts              # 手書きの表 (pathname スキーマ)
│   ├── layouts/               # <Outlet /> で入れ子になるレイアウト
│   ├── pages/                 # leaf。href / useParams をパターン文字列で使う
│   ├── data/products.ts       # バンドルに同梱する小さなデータ
│   └── app.browser.test.tsx   # Chromium で走る、表と遷移の契約テスト
├── types/k8ordo-router.d.ts   # 手書きの Register augmentation
├── index.html
└── vite.config.ts             # 素の Vite + React (フレームワークのプラグインなし)
```
