// Navbar.tsx
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link 
            href="/" 
            style={{ 
              color: pathname === '/' ? '#22d3ee' : 'white',
              fontWeight: pathname === '/' ? 'bold' : 'normal'
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/projects"
            style={{ 
              color: pathname === '/projects' ? '#22d3ee' : 'white',
              fontWeight: pathname === '/projects' ? 'bold' : 'normal'
            }}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}