import { renderHook } from 'vitest-browser-react';
import { useResize } from '.';

describe('useResize', () => {
  it('要素のリサイズ時にコールバックが呼ばれる', async () => {
    const callback = vi.fn();
    const div = document.createElement('div');
    document.body.appendChild(div);
    const ref = { current: div };

    await renderHook(() => useResize(ref, callback));

    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });

    document.body.removeChild(div);
  });

  it('debounceMs指定時は指定時間後にコールバックが呼ばれる', async () => {
    const callback = vi.fn();
    const div = document.createElement('div');
    document.body.appendChild(div);
    const ref = { current: div };

    await renderHook(() => useResize(ref, callback, { debounceMs: 50 }));

    await vi.waitFor(() => {
      expect(callback).toHaveBeenCalled();
    });

    document.body.removeChild(div);
  });

  it('enabled=falseの場合はコールバックが呼ばれない', async () => {
    const callback = vi.fn();
    const ref = { current: document.createElement('div') };
    await renderHook(() => useResize(ref, callback, { enabled: false }));

    expect(callback).not.toHaveBeenCalled();
  });
});
