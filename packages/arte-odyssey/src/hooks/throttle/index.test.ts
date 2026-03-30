import { renderHook } from 'vitest-browser-react';
import { useThrottle, useThrottledCallback } from './index';

describe('useThrottle', () => {
  it('初期値をそのまま返す', async () => {
    const { result } = await renderHook(() => useThrottle('hello', 50));

    expect(result.current).toBe('hello');
  });

  it('interval経過後に値が更新される', async () => {
    const { result, rerender } = await renderHook(
      (props?: { value: string }) => useThrottle(props?.value ?? 'initial', 50),
      { initialProps: { value: 'initial' } },
    );

    rerender({ value: 'updated' });

    await vi.waitFor(() => {
      expect(result.current).toBe('updated');
    });
  });
});

describe('useThrottledCallback', () => {
  it('最初の呼び出しは即座に実行される', async () => {
    const callback = vi.fn();
    const { result } = await renderHook(() => useThrottledCallback(callback, 50));

    result.current('arg1');

    expect(callback).toHaveBeenCalledOnce();
    expect(callback).toHaveBeenCalledWith('arg1');
  });

  it('interval内の連続呼び出しは最後の1回だけ遅延実行される', async () => {
    const callback = vi.fn();
    const { result } = await renderHook(() => useThrottledCallback(callback, 100));

    result.current('first');
    expect(callback).toHaveBeenCalledOnce();

    result.current('second');
    result.current('third');
    expect(callback).toHaveBeenCalledOnce();

    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalledTimes(2);
    });
    expect(callback).toHaveBeenLastCalledWith('third');
  });

  it('interval経過後は再び即座に実行される', async () => {
    const callback = vi.fn();
    const { result } = await renderHook(() => useThrottledCallback(callback, 50));

    result.current('first');
    expect(callback).toHaveBeenCalledOnce();

    // interval経過を待つ
    await new Promise((resolve) => setTimeout(resolve, 60));

    result.current('second');
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith('second');
  });
});
