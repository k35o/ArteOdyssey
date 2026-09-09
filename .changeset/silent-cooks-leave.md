---
"@k8ordo/form": minor
---

フォームが実際に送信する値と、スキーマが受け取れる値を突き合わせるようにした。

- どんな入力でも失敗するスキーマは `formFields` / `parseForm` が derive 時に
  投げる。送信値は必ず文字列なので `z.number()` や `z.literal(1)`、`z.date()`、
  `z.bigint()` は満たしようがない（数値は `z.coerce.number()` を使う）。
- 空の数値入力とファイル未選択を「入力なし」として扱う。`z.coerce.number()` は
  `''` を 0 と読むため、空欄が誰も入力していない 0 になり `required` も落ちて
  いた。属性を決めるプローブと `parseForm` が渡す値を一本化した。
- `z.file()` を `type="file"` として導出し、`.mime()` を `accept` に落とす。
  バイト数の上下限は対応する属性がないので `dropped` で報告する。
- `.transform()` や `z.custom()` のように制約を読み取れないリーフを、黙って
  `type="text"` にせず `dropped` に載せる。
