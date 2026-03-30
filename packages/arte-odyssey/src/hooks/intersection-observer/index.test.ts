import { renderHook } from 'vitest-browser-react';
import { useIntersectionObserver } from './index';

describe('useIntersectionObserver', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('初期状態ではisIntersectingはfalseである', async () => {
    const ref = { current: null };
    const { result } = await renderHook(() => useIntersectionObserver(ref));

    expect(result.current.isIntersecting).toBe(false);
    expect(result.current.entry).toBeUndefined();
  });

  it('要素が交差している場合isIntersectingがtrueになる', async () => {
    const observeSpy = vi.fn();
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(callback: IntersectionObserverCallback) {
          observeSpy.mockImplementation((el: Element) => {
            callback(
              [{ isIntersecting: true, target: el } as IntersectionObserverEntry],
              {} as IntersectionObserver,
            );
          });
        }
        observe(el: Element) {
          observeSpy(el);
        }
        disconnect() {}
      },
    );

    const div = document.createElement('div');
    const ref = { current: div };
    const { result } = await renderHook(() => useIntersectionObserver(ref));

    await vi.waitFor(() => {
      expect(result.current.isIntersecting).toBe(true);
    });
  });

  it('要素が交差していない場合isIntersectingがfalseになる', async () => {
    const observeSpy = vi.fn();
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(callback: IntersectionObserverCallback) {
          observeSpy.mockImplementation((el: Element) => {
            callback(
              [{ isIntersecting: false, target: el } as IntersectionObserverEntry],
              {} as IntersectionObserver,
            );
          });
        }
        observe(el: Element) {
          observeSpy(el);
        }
        disconnect() {}
      },
    );

    const div = document.createElement('div');
    const ref = { current: div };
    const { result } = await renderHook(() => useIntersectionObserver(ref));

    await vi.waitFor(() => {
      expect(result.current.entry).toBeDefined();
    });
    expect(result.current.isIntersecting).toBe(false);
  });

  it('オプションがIntersectionObserverに渡される', async () => {
    const optionsSpy = vi.fn();
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(_: IntersectionObserverCallback, options?: IntersectionObserverInit) {
          optionsSpy(options);
        }
        observe() {}
        disconnect() {}
      },
    );

    const div = document.createElement('div');
    const ref = { current: div };
    await renderHook(() => useIntersectionObserver(ref, { threshold: 0.5, rootMargin: '10px' }));

    expect(optionsSpy).toHaveBeenCalledWith({
      threshold: 0.5,
      root: null,
      rootMargin: '10px',
    });
  });
});
