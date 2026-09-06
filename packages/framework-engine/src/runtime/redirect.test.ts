import { isRedirect, redirect, resolveTarget } from './redirect';

describe('redirect', () => {
  it('throws something the handler can tell apart from any other error', () => {
    let caught: unknown;
    try {
      redirect('/talks');
    } catch (error) {
      caught = error;
    }
    expect(isRedirect(caught)).toBe(true);
    expect(caught).toMatchObject({ to: '/talks', permanent: false });
    expect(isRedirect(new Error('/talks'))).toBe(false);
    expect(isRedirect(null)).toBe(false);
  });

  it('carries permanent when asked', () => {
    expect(() => redirect('/x', { permanent: true })).toThrow(
      expect.objectContaining({ permanent: true }),
    );
  });
});

describe('resolveTarget', () => {
  it('fills a target pattern with the matched params', () => {
    expect(resolveTarget('/:locale/new', { locale: 'ja' })).toStrictEqual({
      to: '/ja/new',
      permanent: false,
    });
    expect(
      resolveTarget({ to: '/:id', permanent: true }, { id: 'a/b' }),
    ).toStrictEqual({ to: '/a%2Fb', permanent: true });
  });

  it('refuses a target that names a param the pattern did not match', () => {
    expect(() => resolveTarget('/:missing', {})).toThrow(/:missing/u);
  });
});
