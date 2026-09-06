import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

type Handler = (request: Request) => Promise<Response>;

// SSR した HTML の中の <form> を、ブラウザが送るのと同じ FormData にする
const formDataOf = (html: string, testId: string): FormData => {
  const form =
    new RegExp(`<form[^>]*data-testid="${testId}"[\\s\\S]*?</form>`, 'u').exec(
      html,
    )?.[0] ?? '';
  const body = new FormData();
  for (const input of form.matchAll(/<input[^>]*>/gu)) {
    const name = /name="([^"]+)"/u.exec(input[0])?.[1];
    const value = /value="([^"]*)"/u.exec(input[0])?.[1] ?? '';
    if (name !== undefined) body.set(name, value);
  }
  return body;
};

const root = path.resolve(import.meta.dirname, '..');
const ORIGIN = 'https://example.test';
let handler: Handler;

// 主張の対象は組み上がったハンドラなので、テストがビルドを走らせる。
// これは @k8ordo/static が事前描画で呼ぶのと同じ関数でもある
beforeAll(async () => {
  execFileSync('pnpm', ['exec', 'vite', 'build'], { cwd: root, stdio: 'pipe' });
  const entry = pathToFileURL(path.join(root, 'dist', 'rsc', 'index.js')).href;
  ({ default: handler } = (await import(entry)) as { default: Handler });
}, 180_000);

describe('the built request handler', () => {
  it('answers a page with HTML the server rendered', async () => {
    const response = await handler(new Request(`${ORIGIN}/`));
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('text/html');
    expect(await response.text()).toContain('rendered on the server');
  });

  it('answers the same page as a payload for a client navigation', async () => {
    const response = await handler(new Request(`${ORIGIN}/products/index.rsc`));
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('text/x-component');
    expect(await response.text()).toContain('first product');
  });

  it('reads the parameter out of the request, with no list of values', async () => {
    const html = await (
      await handler(new Request(`${ORIGIN}/products/2`))
    ).text();
    expect(html).toContain('second product');
    // [id] のスキーマが通した値で、page は number を受け取る
    expect(html).toContain('number:2');
  });

  it('answers a parameter the schema refuses as a URL it does not have', async () => {
    const response = await handler(new Request(`${ORIGIN}/products/shoes`));
    expect(response.status).toBe(404);
    expect(await response.text()).toContain('not found');
  });

  it('answers a URL it does not have with the not-found page, under a real 404', async () => {
    const response = await handler(new Request(`${ORIGIN}/nowhere`));
    expect(response.status).toBe(404);
    expect(await response.text()).toContain('not found');
  });

  it('keeps the layout and leaves a page that throws to error.tsx in the browser', async () => {
    const response = await handler(new Request(`${ORIGIN}/broken`));
    const html = await response.text();
    expect(response.status).toBe(200);
    // layout は生き残り、失敗した部分木は Suspense がブラウザに委ねる印になる
    expect(html).toContain('<nav>');
    expect(html).toContain('<!--$!-->');
  });

  it('answers a redirect.ts with the status and location it declares', async () => {
    const response = await handler(new Request(`${ORIGIN}/old`));
    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toBe('/products');
  });

  it('answers a form posted without JavaScript whose action redirected with a 303', async () => {
    // SSR した HTML の hidden input が action を名指す。それをそのまま POST する
    const html = await (await handler(new Request(`${ORIGIN}/`))).text();
    const body = formDataOf(html, 'leave-form');
    expect([...body.keys()].some((key) => key.startsWith('$ACTION'))).toBe(
      true,
    );
    const response = await handler(
      new Request(`${ORIGIN}/`, {
        method: 'POST',
        headers: { origin: ORIGIN },
        body,
      }),
    );
    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('/products');
  });

  it('hands a page the request under a running server', async () => {
    const html = await (
      await handler(
        new Request(`${ORIGIN}/`, {
          headers: { cookie: 'visitor=k8o', 'accept-language': 'ja' },
        }),
      )
    ).text();
    expect(html).toContain('visitor:k8o language:ja');
  });

  it('refuses a Server Action posted from another origin', async () => {
    const body = new FormData();
    body.set('name', 'mallory');
    const response = await handler(
      new Request(`${ORIGIN}/`, {
        method: 'POST',
        headers: { origin: 'https://attacker.test' },
        body,
      }),
    );
    expect(response.status).toBe(403);
  });
});
