import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-4xl mx-auto p-4 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
