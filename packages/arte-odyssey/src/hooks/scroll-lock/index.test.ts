import { renderHook } from 'vitest-browser-react';
import { useScrollLock } from '.';

describe('useScrollLock', () => {
  beforeEach(() => {
    document.body.style.overflow = '';
  });

  it('lockでbodyのoverflowがhiddenになる', async () => {
    const { result } = await renderHook(() => useScrollLock());

    result.current.lock();

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('unlockでbodyのoverflowが元に戻る', async () => {
    document.body.style.overflow = 'auto';

    const { result } = await renderHook(() => useScrollLock());

    result.current.lock();
    expect(document.body.style.overflow).toBe('hidden');

    result.current.unlock();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('lockを複数回呼んでも元のスタイルが保持される', async () => {
    document.body.style.overflow = 'scroll';

    const { result } = await renderHook(() => useScrollLock());

    result.current.lock();
    result.current.lock();

    result.current.unlock();
    expect(document.body.style.overflow).toBe('scroll');
  });

  it('unlockをlockなしで呼んでも何も起きない', async () => {
    document.body.style.overflow = 'auto';

    const { result } = await renderHook(() => useScrollLock());

    result.current.unlock();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('元のoverflowが空文字の場合も正しく復元される', async () => {
    document.body.style.overflow = '';

    const { result } = await renderHook(() => useScrollLock());

    result.current.lock();
    expect(document.body.style.overflow).toBe('hidden');

    result.current.unlock();
    expect(document.body.style.overflow).toBe('');
  });
});
