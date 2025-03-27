import { Jersey_15 } from 'next/font/google';

const jersey = Jersey_15({ weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={jersey.className}>
        {children}
      </body>
    </html>
  );
}
