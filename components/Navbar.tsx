// Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 p-4 text-white shadow-md">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
