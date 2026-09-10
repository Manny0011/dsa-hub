import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DSA Progress Hub',
  description: 'DSA + Placement preparation dashboard',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
