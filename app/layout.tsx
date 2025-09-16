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
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
