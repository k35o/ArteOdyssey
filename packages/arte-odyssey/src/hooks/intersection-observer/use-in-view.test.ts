import { renderHook } from 'vitest-browser-react';
import { useInView } from './use-in-view';

const createMockIntersectionObserver = (isIntersecting: boolean) => {
  let latestCallback: IntersectionObserverCallback | undefined;
  let latestElement: Element | undefined;

  const MockObserver = vi.fn((callback: IntersectionObserverCallback) => {
    latestCallback = callback;
    return {
      observe: vi.fn((el: Element) => {
        latestElement = el;
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

  return {
    MockObserver,
    triggerIntersection(value: boolean) {
      if (latestCallback && latestElement) {
        latestCallback(
          [
            {
              isIntersecting: value,
              intersectionRatio: value ? 1 : 0,
              target: latestElement,
            } as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      }
    },
  };
};

describe('useInView', () => {
  const originalIO = window.IntersectionObserver;

  afterEach(() => {
    window.IntersectionObserver = originalIO;
  });

  it('初期状態ではfalseを返す', async () => {
    const ref = { current: null };
    const { result } = await renderHook(() => useInView(ref));

    expect(result.current).toBe(false);
  });

  it('要素がビューポート内にある場合trueを返す', async () => {
    const { MockObserver } = createMockIntersectionObserver(true);
    window.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver;

    const div = document.createElement('div');
    const ref = { current: div };
    const { result } = await renderHook(() => useInView(ref));

    await vi.waitFor(() => {
      expect(result.current).toBe(true);
    });
  });

  it('onceオプションでビューポートから出てもtrueを維持する', async () => {
    const { MockObserver, triggerIntersection } = createMockIntersectionObserver(true);
    window.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver;

    const div = document.createElement('div');
    const ref = { current: div };
    const { result } = await renderHook(() => useInView(ref, { once: true }));

    await vi.waitFor(() => {
      expect(result.current).toBe(true);
    });

    triggerIntersection(false);

    await vi.waitFor(() => {
      expect(result.current).toBe(true);
    });
  });
});
