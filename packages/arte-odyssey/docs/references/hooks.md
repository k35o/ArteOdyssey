# Hooks

ArteOdyssey が提供するカスタムフック。

```tsx
import { useDisclosure, useDebounce } from '@k8o/arte-odyssey';
```

## 状態管理

### useDisclosure

開閉状態のトグル管理。

```tsx
const { isOpen, open, close, toggle } = useDisclosure();
```

### useControllableState

Controlled / Uncontrolled を透過的に扱うパターン。

```tsx
const [value, setValue] = useControllableState({
  value: controlledValue,
  defaultValue: 'default',
  onChange: onControlledChange,
});
```

### useStep

ステップカウンター。進む/戻るの制御。

```tsx
const { count, next, back, isDisabledBack, isDisabledNext } = useStep({
  initialCount: 0,
  maxCount: 5,
});
```

### useHash

URL ハッシュの読み取り（読み取り専用）。

```tsx
const hash = useHash(); // string | null
```

## ストレージ

### useLocalStorage

LocalStorage と同期した状態。`remove` で削除も可能。

```tsx
const [value, setValue, remove] = useLocalStorage<string>('key', 'default');
```

### useSessionStorage

SessionStorage と同期した状態。`remove` で削除も可能。

```tsx
const [value, setValue, remove] = useSessionStorage<string>('key', 'default');
```

## イベント

### useClickAway

要素外クリックの検知。ref と callback を引数に取る。

```tsx
const ref = useRef<HTMLDivElement>(null);

useClickAway(ref, (e) => {
  console.log('外側をクリック');
});
```

引数:

- `ref`: `RefObject<T | null>`
- `callback`: `(e: Event) => void`
- `enabled`: boolean（デフォルト: `true`）

### useHover

ホバー状態の検知。`hoverProps` を要素に spread する。

```tsx
const { isHovered, hoverProps } = useHover();

<div {...hoverProps}>{isHovered ? 'ホバー中' : '通常'}</div>;
```

`hoverProps` は `{ onPointerEnter, onPointerLeave }` を含む。

## タイミング

### useDebounce

値のデバウンス。

```tsx
const debouncedValue = useDebounce(inputValue, 300);
```

### useDebouncedCallback

コールバックのデバウンス。

```tsx
const debouncedFn = useDebouncedCallback((value: string) => {
  search(value);
}, 300);
```

### useThrottle

値のスロットル。

```tsx
const throttledValue = useThrottle(scrollPosition, 100);
```

### useThrottledCallback

コールバックのスロットル。

```tsx
const throttledFn = useThrottledCallback((e: Event) => {
  handleScroll(e);
}, 100);
```

### useInterval

定期実行。

```tsx
useInterval(() => {
  fetchData();
}, 5000);
```

### useTimeout

遅延実行。

```tsx
useTimeout(() => {
  hideMessage();
}, 3000);
```

## DOM・ブラウザ

### useWindowSize

ウィンドウサイズの取得。

```tsx
const { width, height } = useWindowSize();
```

### useWindowResize

ウィンドウリサイズのリスナー。コールバックに `{ width, height }` が渡される。

```tsx
useWindowResize(
  (size) => {
    recalculate(size.width, size.height);
  },
  { enabled: true, debounceMs: 100 },
);
```

引数:

- `callback`: `(size: { width: number; height: number }) => void`
- `options`: `{ enabled?: boolean; debounceMs?: number }`

### useResize

要素のリサイズ監視（ResizeObserver）。ref を引数に取る。

```tsx
const ref = useRef<HTMLDivElement>(null);

useResize(
  ref,
  (entry) => {
    console.log(entry.contentRect);
  },
  { enabled: true, debounceMs: 100 },
);
```

引数:

- `ref`: `RefObject<T | null>`
- `callback`: `(entry: ResizeObserverEntry) => void`
- `options`: `{ enabled?: boolean; debounceMs?: number }`

### useIntersectionObserver

交差オブザーバー。ref を引数に取る。

```tsx
const ref = useRef<HTMLDivElement>(null);

useIntersectionObserver(
  ref,
  (entry) => {
    console.log(entry.isIntersecting);
  },
  { threshold: 0.5 },
);
```

引数:

- `ref`: `RefObject<T | null>`
- `callback`: `(entry: IntersectionObserverEntry) => void`
- `options`: IntersectionObserver のオプション

### useInView

要素の表示状態。ref を引数に取り、boolean を返す。

```tsx
const ref = useRef<HTMLDivElement>(null);
const isInView = useInView(ref, { threshold: 0.1 });
```

引数:

- `ref`: `RefObject<T | null>`
- `options`: IntersectionObserver のオプション

### useScrollDirection

スクロール方向の検知。X 軸と Y 軸の両方を返す。

```tsx
const { x, y } = useScrollDirection();
// x: 'left' | 'right'
// y: 'up' | 'down'
```

### useScrollLock

body のスクロールロック。lock / unlock 関数を返す。

```tsx
const { lock, unlock } = useScrollLock();

// モーダルを開くとき
lock();

// モーダルを閉じるとき
unlock();
```

### useBreakpoint

Tailwind ブレークポイントの判定。

```tsx
const isMd = useBreakpoint('md'); // 768px 以上かどうか
```

## ユーティリティ

### useClient

クライアントサイドかどうか。

```tsx
const isClient = useClient();
```

### useClipboard

クリップボードの読み書き。

```tsx
const { writeClipboard, readClipboard } = useClipboard();

await writeClipboard('コピーするテキスト');
const text = await readClipboard();
```
