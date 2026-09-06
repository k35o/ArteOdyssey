import type { routes } from '../src/routes';

// フレームワークの下では .k8ordo/register.gen.ts が生成するもの。<Router> を
// 自分でマウントするクライアントアプリには生成器がないので、ここで手書きする。
// これで href / navigateTo / useParams / useMatch のパターン文字列が
// 実際の表と照合される (表にないパターンはコンパイルエラー)。
declare module '@k8ordo/router' {
  // oxlint-disable-next-line typescript/consistent-type-definitions -- Register は宣言マージで拡張する前提の interface
  interface Register {
    routes: typeof routes;
  }
}
