import { renderHook } from 'vitest-browser-react';
import { useDebounce, useDebouncedCallback } from './index';

describe('useDebounce', () => {
  it('初期値をそのまま返す', async () => {
    const { result } = await renderHook(() => useDebounce('hello', 50));

    expect(result.current).toBe('hello');
  });

  it('delay経過後に値が更新される', async () => {
    const { result, rerender } = await renderHook(
      (props?: { value: string }) => useDebounce(props?.value ?? 'initial', 50),
      { initialProps: { value: 'initial' } },
    );

    rerender({ value: 'updated' });

    expect(result.current).toBe('initial');

    await vi.waitFor(() => {
      expect(result.current).toBe('updated');
    });
  });

  it('delay内に値が変更されたらタイマーがリセットされる', async () => {
    const { result, rerender } = await renderHook(
      (props?: { value: string }) => useDebounce(props?.value ?? 'initial', 100),
      { initialProps: { value: 'initial' } },
    );

    rerender({ value: 'first' });
    rerender({ value: 'second' });

    await vi.waitFor(() => {
      expect(result.current).toBe('second');
    });
  });
});

describe('useDebouncedCallback', () => {
  it('delay経過後にコールバックが呼ばれる', async () => {
    const callback = vi.fn();
    const { result } = await renderHook(() => useDebouncedCallback(callback, 50));

    result.current('arg1');

    expect(callback).not.toHaveBeenCalled();

    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalledOnce();
    });
    expect(callback).toHaveBeenCalledWith('arg1');
  });

  it('delay内に複数回呼ばれたら最後の呼び出しだけ実行される', async () => {
    const callback = vi.fn();
    const { result } = await renderHook(() => useDebouncedCallback(callback, 50));

    result.current('first');
    result.current('second');
    result.current('third');

    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalledOnce();
    });
    expect(callback).toHaveBeenCalledWith('third');
  });
});
