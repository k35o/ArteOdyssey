import { renderHook } from 'vitest-browser-react';
import { useDebounce } from './index';

describe('useDebounce', () => {
  describe('値のデバウンス', () => {
    it('初期値をそのまま返す', async () => {
      vi.useFakeTimers();
      const { result } = await renderHook(() => useDebounce('hello', 300));

      expect(result.current).toBe('hello');
      vi.useRealTimers();
    });

    it('delay経過後に値が更新される', async () => {
      const { result, rerender } = await renderHook(
        (props?: { value: string }) => useDebounce(props?.value ?? 'initial', 300),
        { initialProps: { value: 'initial' } },
      );

      vi.useFakeTimers();
      rerender({ value: 'updated' });

      expect(result.current).toBe('initial');

      vi.advanceTimersByTime(300);

      expect(result.current).toBe('updated');
      vi.useRealTimers();
    });

    it('delay内に値が変更されたらタイマーがリセットされる', async () => {
      const { result, rerender } = await renderHook(
        (props?: { value: string }) => useDebounce(props?.value ?? 'initial', 300),
        { initialProps: { value: 'initial' } },
      );

      vi.useFakeTimers();
      rerender({ value: 'first' });
      vi.advanceTimersByTime(200);

      rerender({ value: 'second' });
      vi.advanceTimersByTime(200);

      expect(result.current).toBe('initial');

      vi.advanceTimersByTime(100);

      expect(result.current).toBe('second');
      vi.useRealTimers();
    });
  });

  describe('コールバックのデバウンス', () => {
    it('delay経過後にコールバックが呼ばれる', async () => {
      const callback = vi.fn();
      vi.useFakeTimers();

      const { result } = await renderHook(() => useDebounce(callback, 300));

      result.current('arg1');

      expect(callback).not.toHaveBeenCalled();

      vi.advanceTimersByTime(300);

      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith('arg1');
      vi.useRealTimers();
    });

    it('delay内に複数回呼ばれたら最後の呼び出しだけ実行される', async () => {
      const callback = vi.fn();
      vi.useFakeTimers();

      const { result } = await renderHook(() => useDebounce(callback, 300));

      result.current('first');
      result.current('second');
      result.current('third');

      vi.advanceTimersByTime(300);

      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith('third');
      vi.useRealTimers();
    });
  });
});
