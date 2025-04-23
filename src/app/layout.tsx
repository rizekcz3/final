import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Final Amber | Modern Web Solutions',
  description: 'Profesionální webové řešení na míru.',
  openGraph: {
    images: ['/og-image.png'],
  },
  keywords: ['web development', 'Česká republika'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${inter.className} max-w-[100vw] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
