import { ArteOdysseyProvider } from '@k8o/arte-odyssey';
import { Noto_Sans_JP } from 'next/font/google';

// eslint-disable-next-line eslint-plugin-import/no-unassigned-import
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <ArteOdysseyProvider>{children}</ArteOdysseyProvider>
      </body>
    </html>
  );
}
