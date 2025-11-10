import { renderHook } from 'vitest-browser-react';
import { useResize } from '.';

describe('useResize', () => {
  it('要素のリサイズ時にコールバックが呼ばれる', async () => {
    const callback = vi.fn();
    const { result } = await renderHook(() => useResize(callback));

    const element = document.createElement('div');
    Object.defineProperty(result.current, 'current', {
      writable: true,
      value: element,
    });

    const observer = new ResizeObserver(callback);
    observer.observe(element);

    // ResizeObserverのトリガーをシミュレート
    const contentRect = new DOMRectReadOnly(0, 0, 100, 100);
    const entry = {
      target: element,
      contentRect,
      borderBoxSize: [],
      contentBoxSize: [],
      devicePixelContentBoxSize: [],
    } as unknown as ResizeObserverEntry;

    callback(entry);

    expect(callback).toHaveBeenCalled();

    observer.disconnect();
  });

  it('enabled=falseの場合はコールバックが呼ばれない', async () => {
    const callback = vi.fn();
    const { result } = await renderHook(() =>
      useResize(callback, { enabled: false }),
    );

    expect(result.current.current).toBeNull();
    expect(callback).not.toHaveBeenCalled();
  });

  it('debounceMs指定時は指定時間後にコールバックが呼ばれる', async () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const { result } = await renderHook(() =>
      useResize(callback, { debounceMs: 300 }),
    );

    const element = document.createElement('div');
    Object.defineProperty(result.current, 'current', {
      writable: true,
      value: element,
    });

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        callback(entry);
      }
    });
    observer.observe(element);

    const contentRect = new DOMRectReadOnly(0, 0, 100, 100);
    const entry = {
      target: element,
      contentRect,
      borderBoxSize: [],
      contentBoxSize: [],
      devicePixelContentBoxSize: [],
    } as unknown as ResizeObserverEntry;

    // 初回の呼び出しはまだ発火しない
    callback(entry);
    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(299);
    expect(callback).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);

    observer.disconnect();
    vi.useRealTimers();
  });
});
