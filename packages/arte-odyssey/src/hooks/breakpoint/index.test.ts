import { renderHook } from 'vitest-browser-react';
import { useBreakpoint } from './index';

describe('useBreakpoint', () => {
  it('ブレークポイント以上の幅であればtrueを返す', async () => {
    const { result } = await renderHook(() => useBreakpoint('sm'));

    // テスト環境のビューポートは40rem(640px)以上ある想定
    expect(result.current).toBe(true);
  });

  it('ブレークポイント未満の幅であればfalseを返す', async () => {
    const { result } = await renderHook(() => useBreakpoint('2xl'));

    // テスト環境のビューポートは96rem(1536px)未満の想定
    expect(result.current).toBe(false);
  });

  it('メディアクエリの変更に応じて値が更新される', async () => {
    const listeners: Array<() => void> = [];
    let matches = false;

    const mockMediaQueryList = {
      get matches() {
        return matches;
      },
      addEventListener: (_: string, cb: () => void) => {
        listeners.push(cb);
      },
      removeEventListener: (_: string, cb: () => void) => {
        const index = listeners.indexOf(cb);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      },
    };

    const spy = vi
      .spyOn(window, 'matchMedia')
      .mockReturnValue(mockMediaQueryList as unknown as MediaQueryList);

    const { result, act } = await renderHook(() => useBreakpoint('md'));

    expect(result.current).toBe(false);

    act(() => {
      matches = true;
      for (const listener of listeners) {
        listener();
      }
    });

    expect(result.current).toBe(true);

    spy.mockRestore();
  });
});
