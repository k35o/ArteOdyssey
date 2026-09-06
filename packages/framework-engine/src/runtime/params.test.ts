import { parseParams } from './params';
import type { ParamsSchema } from './params';

// zod を持ち込まずに Standard Schema の最小形を演じる
const schema = (
  validate: (value: Record<string, unknown>) => Record<string, unknown> | null,
): ParamsSchema => ({
  '~standard': {
    validate: (value) => {
      const out = validate(value as Record<string, unknown>);
      return out === null ? { issues: [{ message: 'no' }] } : { value: out };
    },
  },
});

const numericId = schema((value) =>
  /^\d+$/u.test(String(value['id'])) ? { id: Number(value['id']) } : null,
);
const knownLocale = schema((value) =>
  value['locale'] === 'ja' || value['locale'] === 'en'
    ? { locale: value['locale'] }
    : null,
);

describe('parseParams', () => {
  it('replaces the strings a schema names with what it produced', () => {
    expect(parseParams([numericId], { id: '42', locale: 'ja' })).toStrictEqual({
      id: 42,
      locale: 'ja',
    });
  });

  it('runs the stack outer-first and lets each schema keep what it did not name', () => {
    expect(
      parseParams([knownLocale, numericId], { locale: 'en', id: '7' }),
    ).toStrictEqual({ locale: 'en', id: 7 });
  });

  it('answers null the moment a schema refuses', () => {
    expect(
      parseParams([knownLocale, numericId], { locale: 'fr', id: '7' }),
    ).toBeNull();
    expect(parseParams([numericId], { id: 'shoes' })).toBeNull();
  });

  it('leaves params untouched when there is no schema', () => {
    expect(parseParams([], { id: '42' })).toStrictEqual({ id: '42' });
  });

  it('refuses an asynchronous schema, because matching cannot wait', () => {
    const slow: ParamsSchema = {
      '~standard': { validate: () => Promise.resolve({ value: {} }) },
    };
    expect(() => parseParams([slow], {})).toThrow(/synchronously/u);
  });
});
