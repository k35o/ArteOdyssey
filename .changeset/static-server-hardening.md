---
'@k8ordo/static': minor
'@k8ordo/server': minor
---

static: `site` オプションで `sitemap.xml` を書き出す（リダイレクトと not-found は
除く）。`vite dev` でも `'use server'` を見つけた時点で拒む。パターンの走査と
末尾スラッシュ、pathname の復号を engine / router と共有する。
server: `serve()` が `{ port, url, close }` を返し、`port: 0` で空きポートを
取れる。`serve` の直接のテストを足す。
