import { renderHook } from 'vitest-browser-react';
import { useResize } from '.';

describe('useResize', () => {
  it('enabled=falseの場合はコールバックが呼ばれない', async () => {
    const callback = vi.fn();
    const ref = { current: document.createElement('div') };
    await renderHook(() => useResize(ref, callback, { enabled: false }));

    expect(callback).not.toHaveBeenCalled();
  });
});
