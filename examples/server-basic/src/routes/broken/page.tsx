// error.tsx の主張のために、必ず失敗するページ
export default function BrokenPage(): never {
  throw new Error('broken on purpose');
}
