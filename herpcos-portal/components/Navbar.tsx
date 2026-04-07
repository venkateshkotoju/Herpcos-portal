import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-purple-100 shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-purple-700 hover:text-purple-900">
        HerPCOS &#128156;
      </Link>
      <div className="space-x-6">
        <Link href="/" className="text-purple-600 hover:text-purple-900 font-medium">
          Home
        </Link>
        <Link href="/chat" className="text-purple-600 hover:text-purple-900 font-medium">
          Chat
        </Link>
        <Link href="/qa" className="text-purple-600 hover:text-purple-900 font-medium">
          Q&amp;A
        </Link>
      </div>
    </nav>
  );
}
