import { Jersey_15 } from 'next/font/google';
import { Body } from './styles';

const jersey = Jersey_15({ weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Body className={jersey.className}>
        {children}
      </Body>
    </html>
  );
}
