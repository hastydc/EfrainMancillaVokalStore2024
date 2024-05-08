import type { Metadata } from 'next';
import Header from '../layout/header/Header';
import '@/styles/_tailwind.scss';
import '@/styles/_body.scss';
import { inter } from '@/styles/fonts';
import Footer from '../layout/footer/Footer';

export const metadata: Metadata = {
  title: 'Vokal Store',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
