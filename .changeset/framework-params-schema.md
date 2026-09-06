---
'@k8ordo/static': minor
'@k8ordo/server': minor
'@k8ordo/router': minor
---

page.tsx / layout.tsx が `export const paramsSchema` でパラメータのスキーマを
宣言できる。生成器がそれを拾い、ページの描画前に stack 沿いに実行して
params を型付きの値にする。スキーマが拒んだ値はそのパターンが答えなかった
ものとして次のパターン（最終的に not-found）へ進み、404 になる。
static では paths に渡した値が拒まれるとビルドが落ちる。router の Register が
`params` を持ち、`href` はページが受け取る型で値を受け取って綴る。
