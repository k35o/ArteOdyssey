import { renderHook } from 'vitest-browser-react';
import { useWindowResize } from '.';

describe('useWindowResize', () => {
  it('windowリサイズ時にコールバックが呼ばれる', async () => {
    const resizedWindowSize = { width: 1000, height: 1000 };

    const callback = vi.fn();
    const { act } = await renderHook(() => useWindowResize(callback));

    // 初回のレンダリング時には呼ばれない
    expect(callback).not.toHaveBeenCalled();

    window.innerWidth = resizedWindowSize.width;
    window.innerHeight = resizedWindowSize.height;

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(callback).toHaveBeenCalledWith(resizedWindowSize);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('enabled=falseの場合はコールバックが呼ばれない', async () => {
    const callback = vi.fn();
    await renderHook(() => useWindowResize(callback, { enabled: false }));

    expect(callback).not.toHaveBeenCalled();
  });

  it('debounceMs指定時は指定時間後にコールバックが呼ばれる', async () => {
    vi.useFakeTimers();

    const resizedWindowSize = { width: 1000, height: 1000 };

    const callback = vi.fn();
    const { act } = await renderHook(() =>
      useWindowResize(callback, { debounceMs: 300 }),
    );

    // 初回のレンダリング時は呼ばれない
    expect(callback).not.toHaveBeenCalled();

    window.innerWidth = resizedWindowSize.width;
    window.innerHeight = resizedWindowSize.height;

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    // debounce中はまだ呼ばれない
    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(299);
    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledWith(resizedWindowSize);
    expect(callback).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });
});
