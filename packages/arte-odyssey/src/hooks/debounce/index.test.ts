import { renderHook } from 'vitest-browser-react';
import { useDebounce } from './index';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('値のデバウンス', () => {
    it('初期値をそのまま返す', async () => {
      const { result } = await renderHook(() => useDebounce('hello', 300));

      expect(result.current).toBe('hello');
    });

    it('delay経過後に値が更新される', async () => {
      const { result, rerender, act } = await renderHook(
        (props?: { value: string }) => useDebounce(props?.value ?? 'initial', 300),
        { initialProps: { value: 'initial' } },
      );

      rerender({ value: 'updated' });

      expect(result.current).toBe('initial');

      await act(async () => {
        vi.advanceTimersByTime(300);
      });

      expect(result.current).toBe('updated');
    });

    it('delay内に値が変更されたらタイマーがリセットされる', async () => {
      const { result, rerender, act } = await renderHook(
        (props?: { value: string }) => useDebounce(props?.value ?? 'initial', 300),
        { initialProps: { value: 'initial' } },
      );

      rerender({ value: 'first' });

      await act(async () => {
        vi.advanceTimersByTime(200);
      });

      rerender({ value: 'second' });

      await act(async () => {
        vi.advanceTimersByTime(200);
      });

      expect(result.current).toBe('initial');

      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      expect(result.current).toBe('second');
    });
  });

  describe('コールバックのデバウンス', () => {
    it('delay経過後にコールバックが呼ばれる', async () => {
      const callback = vi.fn();
      const { result, act } = await renderHook(() => useDebounce(callback, 300));

      act(() => {
        result.current('arg1');
      });

      expect(callback).not.toHaveBeenCalled();

      await act(async () => {
        vi.advanceTimersByTime(300);
      });

      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith('arg1');
    });

    it('delay内に複数回呼ばれたら最後の呼び出しだけ実行される', async () => {
      const callback = vi.fn();
      const { result, act } = await renderHook(() => useDebounce(callback, 300));

      act(() => {
        result.current('first');
        result.current('second');
        result.current('third');
      });

      await act(async () => {
        vi.advanceTimersByTime(300);
      });

      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith('third');
    });
  });
});
