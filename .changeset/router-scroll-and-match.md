---
'@k8ordo/router': minor
---

ページ遷移後のスクロール位置をルーターが持つ。新しい木が画面に出た時点で
先頭（URL が fragment を名指すならその要素）へ移動し、戻る/進むはブラウザの
復元に任せる。あわせて、表を持たなくても「どの区間にいるか」を答える
`useMatch(pattern)` / `matchPath(pattern, pathname)` と、末尾スラッシュの
扱いを共有するための `normalizePathname` を公開する。
