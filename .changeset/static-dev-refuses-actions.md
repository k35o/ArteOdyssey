---
'@k8ordo/static': patch
---

`vite dev` での Server Action の拒否が実際に働くようにする。プラグインの
`transform` は RSC の `rsc:use-server` より後に回るため、渡ってくるコードには
すでにランタイムの import が前置されていて、先頭の `'use server'` を探す走査は
必ず外れていた。テキストの走査（`directive.ts`）をやめ、ビルド時の
`serverActionModules` と同じレジストリを `isServerActionModule` で 1 モジュール
ずつ引く。dev とビルドが同じ集合を拒む。
