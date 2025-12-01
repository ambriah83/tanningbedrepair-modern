import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-bold text-blue-700 hover:text-blue-800 transition">
              TanningBedRepair.com
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Home
            </Link>
            <Link
              href="#find-technician"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Find Technicians
            </Link>
            <Link
              href="/manuals"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Manuals
            </Link>
            <a
              href="tel:1-800-667-9189"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Get Listed Free
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <a
              href="tel:1-800-667-9189"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition text-sm"
            >
              Get Listed
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
