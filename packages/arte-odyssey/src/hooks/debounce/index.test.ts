import { renderHook } from 'vitest-browser-react';
import { useDebounce } from './index';

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
