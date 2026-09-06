/**
 * Whether a module opens with the `'use server'` directive: a string literal
 * as its first statement, after nothing but whitespace and comments. Written
 * as a scan rather than a regular expression — the comment-skipping prefix
 * such a pattern needs is a nested repetition, and on a file of many `//`
 * lines that backtracks exponentially. This walks the text once.
 */
export const hasUseServerDirective = (code: string): boolean => {
  let at = 0;
  const { length } = code;
  while (at < length) {
    const char = code.charAt(at);
    if (char === ' ' || char === '\t' || char === '\n' || char === '\r') {
      at += 1;
      continue;
    }
    if (code.startsWith('//', at)) {
      const end = code.indexOf('\n', at);
      if (end === -1) return false;
      at = end + 1;
      continue;
    }
    if (code.startsWith('/*', at)) {
      const end = code.indexOf('*/', at + 2);
      if (end === -1) return false;
      at = end + 2;
      continue;
    }
    // 空白とコメントを抜けた最初のトークンが directive かどうか
    return (
      code.startsWith("'use server'", at) || code.startsWith('"use server"', at)
    );
  }
  return false;
};
