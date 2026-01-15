'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Home
            </Link>

            <Link
              href="/directory"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Find Technicians
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-700 font-medium transition flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    href="/services/repair"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    Service Repair
                  </Link>
                  <Link
                    href="/services/troubleshooting"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    Troubleshooting
                  </Link>
                  <Link
                    href="/services/install-relocation"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    Install/Relocation
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/used-equipment"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Used Equipment
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              About Us
            </Link>

            <Link
              href="/training"
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              Training
            </Link>

            <a
              href="tel:1-800-667-9189"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Get Listed Free
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-blue-700 font-medium py-2">
                Home
              </Link>

              <Link href="/directory" className="text-gray-700 hover:text-blue-700 font-medium py-2">
                Find Technicians
              </Link>

              <div className="border-l-2 border-blue-700 pl-4">
                <div className="text-gray-900 font-semibold mb-2">Services</div>
                <Link href="/services/repair" className="block text-gray-700 hover:text-blue-700 py-1">
                  Service Repair
                </Link>
                <Link href="/services/troubleshooting" className="block text-gray-700 hover:text-blue-700 py-1">
                  Troubleshooting
                </Link>
                <Link href="/services/install-relocation" className="block text-gray-700 hover:text-blue-700 py-1">
                  Install/Relocation
                </Link>
              </div>

              <Link href="/used-equipment" className="text-gray-700 hover:text-blue-700 font-medium py-2">
                Used Equipment
              </Link>

              <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium py-2">
                About Us
              </Link>

              <Link href="/training" className="text-gray-700 hover:text-blue-700 font-medium py-2">
                Training
              </Link>

              <a
                href="tel:1-800-667-9189"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition text-center"
              >
                Get Listed Free
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
