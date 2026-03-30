import { renderHook } from 'vitest-browser-react';
import { useDebouncedCallback } from './index';

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
