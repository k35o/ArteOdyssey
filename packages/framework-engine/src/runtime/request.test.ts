import { routeRequestOf } from './request';

describe('routeRequestOf', () => {
  it('hands the headers through and parses the cookies by name', () => {
    const request = new Request('https://example.test/', {
      headers: {
        'accept-language': 'ja',
        cookie: 'theme=dark; session="abc%20def"; broken; =nameless',
      },
    });
    const route = routeRequestOf(request);
    expect(route.headers.get('accept-language')).toBe('ja');
    expect([...route.cookies]).toStrictEqual([
      ['theme', 'dark'],
      ['session', 'abc def'],
    ]);
  });

  it('keeps the first of a cookie sent twice', () => {
    const route = routeRequestOf(
      new Request('https://example.test/', {
        headers: { cookie: 'a=1; a=2' },
      }),
    );
    expect(route.cookies.get('a')).toBe('1');
  });

  it('has no cookies when none were sent', () => {
    expect(
      routeRequestOf(new Request('https://example.test/')).cookies.size,
    ).toBe(0);
  });
});
