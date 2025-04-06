// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">My Blog</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/posts" className="hover:text-blue-600">Blog</Link></li>
            <li><Link href="/admin" className="hover:text-blue-600">Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}