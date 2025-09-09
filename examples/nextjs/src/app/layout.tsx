import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { ArteOdysseyProvider } from '@k8o/arte-odyssey/providers';

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
