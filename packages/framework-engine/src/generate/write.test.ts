import { declaresParams } from './write';

describe('declaresParams', () => {
  it('sees the spellings a person writes', () => {
    expect(declaresParams('export const paramsSchema = z.object({});')).toBe(
      true,
    );
    expect(declaresParams('export let paramsSchema = z.object({});')).toBe(
      true,
    );
    expect(
      declaresParams('const paramsSchema = 1;\nexport { paramsSchema };'),
    ).toBe(true);
  });

  it('is not fooled by the word elsewhere', () => {
    expect(declaresParams('export default function Page({ params }) {}')).toBe(
      false,
    );
    expect(
      declaresParams(
        'const paramsSchema = 1; export const other = paramsSchema;',
      ),
    ).toBe(false);
    expect(declaresParams('export const params = 1;')).toBe(false);
  });
});
