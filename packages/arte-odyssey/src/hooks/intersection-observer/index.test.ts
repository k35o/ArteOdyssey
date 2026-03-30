import { renderHook } from 'vitest-browser-react';
import { useIntersectionObserver } from './index';

const createMockIntersectionObserver = (isIntersecting: boolean) => {
  const instances: Array<{
    callback: IntersectionObserverCallback;
    element: Element | undefined;
  }> = [];

  const MockObserver = vi.fn((callback: IntersectionObserverCallback) => {
    const instance = {
      callback,
      element: undefined as Element | undefined,
      observe: vi.fn((el: Element) => {
        instance.element = el;
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
    instances.push(instance);
    return instance;
  });

  return { MockObserver, instances };
};

describe('useIntersectionObserver', () => {
  const originalIO = window.IntersectionObserver;

  afterEach(() => {
    window.IntersectionObserver = originalIO;
  });

  it('初期状態ではisIntersectingはfalseである', async () => {
    const { result } = await renderHook(() => useIntersectionObserver());

    expect(result.current.isIntersecting).toBe(false);
    expect(result.current.entry).toBeUndefined();
  });

  it('要素が交差している場合isIntersectingがtrueになる', async () => {
    const { MockObserver } = createMockIntersectionObserver(true);
    window.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver;

    const { result } = await renderHook(() => useIntersectionObserver());

    const div = document.createElement('div');
    result.current.ref(div);

    await vi.waitFor(() => {
      expect(result.current.isIntersecting).toBe(true);
    });
  });

  it('要素が交差していない場合isIntersectingがfalseになる', async () => {
    const { MockObserver } = createMockIntersectionObserver(false);
    window.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver;

    const { result } = await renderHook(() => useIntersectionObserver());

    const div = document.createElement('div');
    result.current.ref(div);

    await vi.waitFor(() => {
      expect(result.current.entry).toBeDefined();
    });
    expect(result.current.isIntersecting).toBe(false);
  });

  it('オプションがIntersectionObserverに渡される', async () => {
    const { MockObserver } = createMockIntersectionObserver(true);
    window.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver;

    const { result } = await renderHook(() =>
      useIntersectionObserver({ threshold: 0.5, rootMargin: '10px' }),
    );

    const div = document.createElement('div');
    result.current.ref(div);

    expect(MockObserver).toHaveBeenCalledWith(expect.any(Function), {
      threshold: 0.5,
      root: null,
      rootMargin: '10px',
    });
  });
});
