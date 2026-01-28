import type { Metadata } from 'next';
import { Crimson_Text, Courier_Prime } from 'next/font/google';
import './globals.css';

const crimsonText = Crimson_Text({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-crimson',
});

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier',
});

export const metadata: Metadata = {
  title: 'Bird Law - Expert Legal Consultation',
  description: 'Specialist in all forms of avian litigation. Certified by Charlie Kelly, Esq.',
  keywords: ['bird law', 'Charlie Kelly', 'Its Always Sunny', 'avian litigation'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${courierPrime.variable}`}>
      <body>{children}</body>
    </html>
  );
}
