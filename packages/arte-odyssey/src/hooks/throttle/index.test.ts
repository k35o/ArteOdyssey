import { renderHook } from 'vitest-browser-react';
import { useThrottle } from './index';

describe('useThrottle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('値のスロットリング', () => {
    it('初期値をそのまま返す', async () => {
      const { result } = await renderHook(() => useThrottle('hello', 300));

      expect(result.current).toBe('hello');
    });

    it('interval経過後に値が更新される', async () => {
      const { result, rerender, act } = await renderHook(
        (props?: { value: string }) => useThrottle(props?.value ?? 'initial', 300),
        { initialProps: { value: 'initial' } },
      );

      rerender({ value: 'updated' });

      expect(result.current).toBe('initial');

      await act(async () => {
        vi.advanceTimersByTime(300);
      });

      expect(result.current).toBe('updated');
    });
  });

  describe('コールバックのスロットリング', () => {
    it('最初の呼び出しは即座に実行される', async () => {
      const callback = vi.fn();
      const { result, act } = await renderHook(() => useThrottle(callback, 300));

      act(() => {
        result.current('arg1');
      });

      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith('arg1');
    });

    it('interval内の連続呼び出しは最後の1回だけ遅延実行される', async () => {
      const callback = vi.fn();
      const { result, act } = await renderHook(() => useThrottle(callback, 300));

      act(() => {
        result.current('first');
      });

      expect(callback).toHaveBeenCalledOnce();

      act(() => {
        result.current('second');
        result.current('third');
      });

      expect(callback).toHaveBeenCalledOnce();

      await act(async () => {
        vi.advanceTimersByTime(300);
      });

      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenLastCalledWith('third');
    });

    it('interval経過後は再び即座に実行される', async () => {
      const callback = vi.fn();
      const { result, act } = await renderHook(() => useThrottle(callback, 300));

      act(() => {
        result.current('first');
      });

      await act(async () => {
        vi.advanceTimersByTime(300);
      });

      act(() => {
        result.current('second');
      });

      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenLastCalledWith('second');
    });
  });
});
