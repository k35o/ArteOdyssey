import { renderHook } from 'vitest-browser-react';
import { useThrottle } from './index';

describe('useThrottle', () => {
  describe('値のスロットリング', () => {
    it('初期値をそのまま返す', async () => {
      vi.useFakeTimers();
      const { result } = await renderHook(() => useThrottle('hello', 300));

      expect(result.current).toBe('hello');
      vi.useRealTimers();
    });

    it('interval経過後に値が更新される', async () => {
      const { result, rerender } = await renderHook(
        (props?: { value: string }) => useThrottle(props?.value ?? 'initial', 300),
        { initialProps: { value: 'initial' } },
      );

      vi.useFakeTimers();
      rerender({ value: 'updated' });

      expect(result.current).toBe('initial');

      vi.advanceTimersByTime(300);

      expect(result.current).toBe('updated');
      vi.useRealTimers();
    });
  });

  describe('コールバックのスロットリング', () => {
    it('最初の呼び出しは即座に実行される', async () => {
      const callback = vi.fn();
      vi.useFakeTimers();

      const { result } = await renderHook(() => useThrottle(callback, 300));

      result.current('arg1');

      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith('arg1');
      vi.useRealTimers();
    });

    it('interval内の連続呼び出しは最後の1回だけ遅延実行される', async () => {
      const callback = vi.fn();
      vi.useFakeTimers();

      const { result } = await renderHook(() => useThrottle(callback, 300));

      result.current('first');

      expect(callback).toHaveBeenCalledOnce();

      result.current('second');
      result.current('third');

      expect(callback).toHaveBeenCalledOnce();

      vi.advanceTimersByTime(300);

      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenLastCalledWith('third');
      vi.useRealTimers();
    });

    it('interval経過後は再び即座に実行される', async () => {
      const callback = vi.fn();
      vi.useFakeTimers();

      const { result } = await renderHook(() => useThrottle(callback, 300));

      result.current('first');
      vi.advanceTimersByTime(300);

      result.current('second');

      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenLastCalledWith('second');
      vi.useRealTimers();
    });
  });
});
