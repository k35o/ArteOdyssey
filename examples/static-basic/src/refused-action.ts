'use server';

// dev.test.ts のための材料。静的化が受け取れない唯一のもの——Server Action
// ——が実際に置かれた状態を、アプリの中に一つだけ用意しておく。
//
// routes/ の外に置いてあるので、どのページからも import されず、ビルドの
// モジュールグラフには入らない。build.test.ts が回す本物のビルドは今までどおり
// 通り、dev サーバがこのファイルを名指しで変換したときだけ拒否が出る。
export const leaveMessage = async (message: string): Promise<string> => {
  // 保存する先は無い。RSC 側が async な関数しか Server Action にしないので、
  // 拒否されるためだけのモジュールでもその形は満たしておく
  await Promise.resolve();
  return message;
};
