// app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'TroutVerse',
  description: 'Unity VR Developer Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}