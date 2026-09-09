import path from 'node:path';

import { createServer } from 'vite';
import type { ViteDevServer } from 'vite';

const root = path.resolve(import.meta.dirname, '..');

// 主張の対象は「dev サーバがそのモジュールをどう扱うか」なので、テストが本物の
// dev サーバを立てる。プラグインの transform を直接呼ぶ形にすると、RSC の変換が
// 先に走るという肝心の並びごと消えてしまい、拒否が死んでいても気づけない
let server: ViteDevServer;

beforeAll(async () => {
  server = await createServer({
    root,
    configFile: path.join(root, 'vite.config.ts'),
    logLevel: 'error',
  });
}, 180_000);

afterAll(async () => {
  await server.close();
});

const transform = (environment: string, url: string): Promise<unknown> => {
  const target = server.environments[environment];
  if (target === undefined) {
    throw new Error(`no ${environment} environment`);
  }
  return target.transformRequest(url);
};

describe('vite dev under @k8ordo/static', () => {
  it('refuses a module that declares a Server Action', async () => {
    await expect(transform('rsc', '/src/refused-action.ts')).rejects.toThrow(
      /static build cannot ship Server Actions/u,
    );
  });

  it('names the file the application would have to change', async () => {
    await expect(transform('rsc', '/src/refused-action.ts')).rejects.toThrow(
      /src\/refused-action\.ts/u,
    );
  });

  it('refuses it in the browser environment too, where a form would import it', async () => {
    await expect(transform('client', '/src/refused-action.ts')).rejects.toThrow(
      /static build cannot ship Server Actions/u,
    );
  });

  it('leaves every other module alone', async () => {
    await expect(
      transform('rsc', '/src/routes/page.tsx'),
    ).resolves.not.toBeNull();
    await expect(
      transform('rsc', '/src/routes/_data/catalog.server.ts'),
    ).resolves.not.toBeNull();
  });
});
