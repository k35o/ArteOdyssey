import { hasUseServerDirective } from './directive';

describe('hasUseServerDirective', () => {
  it('sees the directive as the first statement, past comments and blank lines', () => {
    expect(hasUseServerDirective("'use server';\nexport const f = 1;")).toBe(
      true,
    );
    expect(hasUseServerDirective('"use server"\n')).toBe(true);
    expect(
      hasUseServerDirective(
        "// note\n/* block\n comment */\n\n  'use server';",
      ),
    ).toBe(true);
  });

  it('ignores the words anywhere else', () => {
    expect(hasUseServerDirective("const x = 'use server';")).toBe(false);
    expect(hasUseServerDirective("import 'server-only';\n'use server';")).toBe(
      false,
    );
    expect(hasUseServerDirective("// 'use server'\n")).toBe(false);
    expect(hasUseServerDirective('')).toBe(false);
  });

  it('stays linear on a file made of comment lines', () => {
    const many = `${'//\n'.repeat(200_000)}export {};`;
    const started = performance.now();
    expect(hasUseServerDirective(many)).toBe(false);
    expect(performance.now() - started).toBeLessThan(200);
  });
});
