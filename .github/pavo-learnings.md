# Pavo learnings

レビューのやり取りから蓄積された、このリポジトリ固有の方針メモ。

- 2026-09-09 (#663): k8ordo/packages/ui では oxlint の no-console ルールが scripts/*.ts に既定で有効（*.stories.* / test のみ off）なため、CLI スクリプトの成功メッセージは console.log ではなく console.warn を使う（check-helpers-md.ts 等の既存パターンに合わせる）。
