---
'@k8ordo/ui': patch
---

jsdom / happy-dom でも描画できるようにする。ResizeObserver・IntersectionObserver・
`matchMedia`・`dialog.showModal` / `close`・Popover API を support 判定ごしに呼び、
欠けていれば SSR 相当のスナップショットか no-op に落とす。テスト環境の欠落は
ブラウザの欠落ではないので polyfill は足さず、ブラウザでの挙動は変えていない。
開閉状態まで検証したい利用者向けに、`docs/GUIDE.md` に "Testing in jsdom" として
Vitest の `setupFiles` に貼れるスタブ一式を載せた。
