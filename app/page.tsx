'use client';

import Link from 'next/link';
import Image from 'next/image';
import statesData from '../data/states.json';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tanning Bed, Spray Booth & Spa Equipment Repair
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Nationwide directory of certified technicians. Free listings for repair experts.
            </p>
          </div>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="#find-technician"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105 w-full md:w-auto text-center"
            >
              Find a Technician →
            </a>
            <a
              href="tel:1-800-667-9189"
              className="bg-white hover:bg-gray-100 text-blue-700 px-12 py-5 rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition border-2 border-white transform hover:scale-105 w-full md:w-auto text-center"
            >
              List Your Business Free →
            </a>
          </div>

          {/* Trust Badge */}
          <div className="text-center text-blue-100">
            <p className="text-lg">Trusted since 2001 • 500+ Technicians nationwide • All 50 states</p>
          </div>
        </div>
      </section>

      {/* Professional Service Section with Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional, Certified Technicians
            </h2>
            <p className="text-xl text-gray-600">
              Experienced repair experts serving salons nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/images/Tanning Bed Repair Image 1.png"
                  alt="Professional tanning bed technician performing diagnostics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-gray-900">Expert Diagnostics</p>
                <p className="text-sm text-gray-600 mt-2">Professional testing & troubleshooting</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/images/Tanning Bed Repair Image 2.png"
                  alt="Certified technician repairing tanning equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-gray-900">Professional Service</p>
                <p className="text-sm text-gray-600 mt-2">Experienced repair specialists</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/images/Tanning Bed Repair Image 3.png"
                  alt="Quality service technicians working together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-gray-900">Quality Guaranteed</p>
                <p className="text-sm text-gray-600 mt-2">All major brands serviced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* For Salon Owners */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Salon Owners</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>✓ Find local experts quickly</li>
                <li>✓ Emergency repairs available</li>
                <li>✓ All major brands serviced</li>
                <li>✓ Direct contact with technicians</li>
              </ul>
            </div>

            {/* For Technicians */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Technicians</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>✓ Get free listings</li>
                <li>✓ Training resources provided</li>
                <li>✓ Wholesale contacts access</li>
                <li>✓ Grow your business</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>✓ Since 2001</li>
                <li>✓ 500+ qualified technicians</li>
                <li>✓ Nationwide coverage</li>
                <li>✓ Trusted by salons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Find Technician CTA Section */}
      <section id="find-technician" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find a Technician Near You
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Search our nationwide directory of certified repair technicians
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-600 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Access Our Full Directory
                </h3>
                <ul className="text-left max-w-md mx-auto space-y-2 text-gray-700 mb-6">
                  <li>✓ Search by business name or city</li>
                  <li>✓ Filter by state (164 technicians in 40 states)</li>
                  <li>✓ View contact info and specializations</li>
                  <li>✓ Browse all technicians at once</li>
                </ul>
              </div>

              <Link
                href="/directory"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                Browse Directory →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Are You a Tanning Bed Repair Technician?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join our network and get FREE listings. We provide training, wholesale contacts, and resources to help you succeed.
          </p>
          <a
            href="tel:1-800-667-9189"
            className="inline-block bg-white hover:bg-gray-100 text-orange-600 px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            Call 800-667-9189 to Get Listed
          </a>
        </div>
      </section>

      {/* Equipment Brands */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Supporting All Major Tanning Equipment Brands
          </h3>
          <p className="text-center text-gray-600 leading-relaxed">
            American Quality • ACN Solart • Alisun • Alpha Sun • Atlantis • Soltron • Dr. Kerns • Dr. Muller • Electric Sun • ESB • Forever Tan • Garda Sun • HEX • Heartland • Hollywood Tan • ITS • JK Ergoline • JK Soltron • Kettler • Klafsun • Klaus • Leisure Bay • Sunliner • Mega Max • Mega Sun • Montego Bay • Ovation • Pro Sun • Puretan • Royal Sun • SCA • Shaw • Silver Solarium • Solaire • Solana • Solaris • Sonnenbraune • Sontegra • Star Power • Sun Dash • Sun Dazzler • Sun Industries • Sun Quest • Sun Star • Sun Vision • Sunal • Tan America • Tanses • Ultra Sun • UWE • Velocity • Vita Sun
          </p>
        </div>
      </section>
    </div>
  );
}
