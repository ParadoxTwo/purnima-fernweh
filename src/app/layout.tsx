// layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Playfair_Display } from 'next/font/google'; // Import Google Font
import { Cormorant_Garamond } from 'next/font/google'; // Import Google Font
import './globals.css';
import { ReactNode } from 'react';

// Local font configurations
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Google Font configuration for Playfair Display
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '600', '700'], // Specify the weights you need
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: ['400', '600', '700'], // Specify the weights you need
});

export const metadata: Metadata = {
  title: 'Purnima',
  description: 'All you need to know about Purnima',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Include the Playfair Display variable along with the other font variables */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
