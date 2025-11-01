import { userEvent } from 'vitest/browser';
import { renderHook } from 'vitest-browser-react';
import { useStep } from '.';

describe('useStep', () => {
  it('初期状態', async () => {
    const initialCount = 1;
    const maxCount = 10;

    const { result } = await renderHook(() =>
      useStep({ initialCount, maxCount }),
    );

    expect(result.current.count).toBe(initialCount);
    expect(result.current.isDisabledBack).toBeTruthy();
    expect(result.current.isDisabledNext).toBeFalsy();
  });
  it('nextでinitialCountから1進む', async () => {
    const initialCount = 1;
    const maxCount = 10;

    const { result, act } = await renderHook(() =>
      useStep({ initialCount, maxCount }),
    );
    act(() => {
      result.current.next();
    });

    expect(result.current.count).toBe(initialCount + 1);
    expect(result.current.isDisabledBack).toBeFalsy();
    expect(result.current.isDisabledNext).toBeFalsy();
  });
  it('initialCountからはbackできない', async () => {
    const initialCount = 1;
    const maxCount = 10;

    const { result, act } = await renderHook(() =>
      useStep({ initialCount, maxCount }),
    );
    act(() => {
      result.current.back();
    });

    expect(result.current.count).toBe(initialCount);
    expect(result.current.isDisabledBack).toBeTruthy();
    expect(result.current.isDisabledNext).toBeFalsy();
  });
  it('maxCountまで進む', async () => {
    const initialCount = 1;
    const maxCount = 3;

    const { result, act } = await renderHook(() =>
      useStep({ initialCount, maxCount }),
    );
    act(() => {
      result.current.next();
      result.current.next();
    });

    expect(result.current.count).toBe(maxCount);
    expect(result.current.isDisabledBack).toBeFalsy();
    expect(result.current.isDisabledNext).toBeTruthy();
  });
  it('maxCount以上は進めない', async () => {
    const initialCount = 1;
    const maxCount = 3;

    const { result, act } = await renderHook(() =>
      useStep({ initialCount, maxCount }),
    );
    act(() => {
      result.current.next();
      result.current.next();
      result.current.next();
    });

    expect(result.current.count).toBe(maxCount);
    expect(result.current.isDisabledBack).toBeFalsy();
    expect(result.current.isDisabledNext).toBeTruthy();
  });
  it('nextとbackを組み合わせて利用できる', async () => {
    const initialCount = 1;
    const maxCount = 3;

    const { result, act } = await renderHook(() =>
      useStep({ initialCount, maxCount }),
    );
    act(() => {
      result.current.next();
      result.current.back();
    });

    expect(result.current.count).toBe(initialCount);
    expect(result.current.isDisabledBack).toBeTruthy();
    expect(result.current.isDisabledNext).toBeFalsy();
  });
  it('左右キーで操作できる', async () => {
    const initialCount = 1;
    const maxCount = 3;

    const { result } = await renderHook(() =>
      useStep({ initialCount, maxCount }),
    );

    await userEvent.keyboard('{arrowright}');
    expect(result.current.count).toBe(initialCount + 1);

    await userEvent.keyboard('{arrowleft}');
    expect(result.current.count).toBe(initialCount);
  });
});
