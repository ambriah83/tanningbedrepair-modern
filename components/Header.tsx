import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-3xl font-bold">
              Tanning Bed Repair
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link href="/service-technicians" className="hover:text-blue-200 transition">
              Technicians
            </Link>
            <Link href="/manuals" className="hover:text-blue-200 transition">
              Manuals
            </Link>
            <Link href="/quick-fixes" className="hover:text-blue-200 transition">
              Quick Fixes
            </Link>
          </nav>

          <a
            href="tel:1-800-XXX-XXXX"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
