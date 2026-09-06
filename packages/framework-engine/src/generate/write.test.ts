import { declaresParams } from './write';

describe('declaresParams', () => {
  it('sees the spellings a person writes', () => {
    expect(declaresParams('export const params = z.object({});')).toBe(true);
    expect(declaresParams('export let params = z.object({});')).toBe(true);
    expect(declaresParams('const params = 1;\nexport { params };')).toBe(true);
    expect(
      declaresParams('const params = 1;\nexport { other, params as params };'),
    ).toBe(true);
  });

  it('is not fooled by the word elsewhere', () => {
    expect(declaresParams('export default function Page({ params }) {}')).toBe(
      false,
    );
    expect(
      declaresParams('const params = 1; export const other = params;'),
    ).toBe(false);
    expect(declaresParams('export const paramsSchema = 1;')).toBe(false);
  });
});
