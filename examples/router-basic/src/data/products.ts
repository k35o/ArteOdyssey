export type Product = { id: string; name: string; description: string };

// クライアントアプリなので、データはバンドルに同梱される小さな配列。
// ルーターは fetch を持たないので、必要ならページが use() / Suspense で読む。
export const products: readonly Product[] = [
  {
    id: '1',
    name: 'first product',
    description: 'the one everyone starts with',
  },
  { id: '2', name: 'second product', description: 'the one that comes after' },
  { id: '3', name: 'third product', description: 'the one nobody expected' },
];

export const findProduct = (id: string): Product | undefined =>
  products.find((product) => product.id === id);
