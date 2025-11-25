import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanning Bed Repair - Professional Equipment Service Nationwide',
  description: 'Expert tanning bed repair and maintenance services across all 50 states. Fast response, certified technicians, all major brands.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
