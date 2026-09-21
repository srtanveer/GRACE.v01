import './globals.css';
import { Nunito } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'GRACE | Green University Alumni Association of CSE',
  description:
    'A vibrant alumni network for Green University CSE graduates, connecting people, stories, careers, and community impact.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} bg-background text-foreground antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
