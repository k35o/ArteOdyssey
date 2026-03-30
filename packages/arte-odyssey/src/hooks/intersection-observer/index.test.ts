import { renderHook } from 'vitest-browser-react';
import { useIntersectionObserver } from './index';

const createMockIntersectionObserver = (isIntersecting: boolean) => {
  const MockObserver = vi.fn((callback: IntersectionObserverCallback) => {
    return {
      observe: vi.fn((el: Element) => {
        callback(
          [
            {
              isIntersecting,
              intersectionRatio: isIntersecting ? 1 : 0,
              target: el,
            } as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      }),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    };
  });

  return { MockObserver };
};

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
    const { MockObserver } = createMockIntersectionObserver(true);
    vi.stubGlobal('IntersectionObserver', MockObserver);

    const div = document.createElement('div');
    const ref = { current: div };
    const { result } = await renderHook(() => useIntersectionObserver(ref));

    await vi.waitFor(() => {
      expect(result.current.isIntersecting).toBe(true);
    });
  });

  it('要素が交差していない場合isIntersectingがfalseになる', async () => {
    const { MockObserver } = createMockIntersectionObserver(false);
    vi.stubGlobal('IntersectionObserver', MockObserver);

    const div = document.createElement('div');
    const ref = { current: div };
    const { result } = await renderHook(() => useIntersectionObserver(ref));

    await vi.waitFor(() => {
      expect(result.current.entry).toBeDefined();
    });
    expect(result.current.isIntersecting).toBe(false);
  });

  it('オプションがIntersectionObserverに渡される', async () => {
    const { MockObserver } = createMockIntersectionObserver(true);
    vi.stubGlobal('IntersectionObserver', MockObserver);

    const div = document.createElement('div');
    const ref = { current: div };
    await renderHook(() => useIntersectionObserver(ref, { threshold: 0.5, rootMargin: '10px' }));

    expect(MockObserver).toHaveBeenCalledWith(expect.any(Function), {
      threshold: 0.5,
      root: null,
      rootMargin: '10px',
    });
  });
});
