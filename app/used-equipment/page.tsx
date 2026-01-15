export default function UsedEquipmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quality Used Tanning Equipment
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Browse our selection of inspected and certified pre-owned tanning beds, spray tan booths, and salon equipment at affordable prices.
          </p>
          <a
            href="tel:1-800-667-9189"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition text-lg"
          >
            Call for Inventory: 1-800-667-9189
          </a>
        </div>

        {/* Benefits */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Buy Used Equipment?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Save 40-60%</h3>
              <p className="text-gray-600">
                Significant cost savings compared to new equipment while maintaining quality performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inspected & Certified</h3>
              <p className="text-gray-600">
                All equipment is thoroughly inspected, serviced, and certified before sale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Availability</h3>
              <p className="text-gray-600">
                Get your salon up and running faster with immediate availability.
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Equipment Types</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-700">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tanning Beds</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Level 1-5 Beds (Various Brands)</li>
                <li>• Stand-Up Tanning Units</li>
                <li>• High-Pressure Systems</li>
                <li>• Red Light Therapy Beds</li>
                <li>• Hybrid Tanning Systems</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Spray Tan Equipment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Automated Spray Booths</li>
                <li>• HVLP Spray Systems</li>
                <li>• Extraction Fans</li>
                <li>• Solution Warmers</li>
                <li>• Complete Booth Setups</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Salon Accessories</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Reception Desks</li>
                <li>• Waiting Area Furniture</li>
                <li>• Retail Display Units</li>
                <li>• Lockers & Storage</li>
                <li>• Signage & Decor</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Parts & Components</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Replacement Lamps</li>
                <li>• Acrylic Shields</li>
                <li>• Timers & Controls</li>
                <li>• Cooling Fans</li>
                <li>• Ballasts & Starters</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current Inventory Notice */}
        <div className="max-w-4xl mx-auto mb-16 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Inventory Changes Frequently</h3>
              <p className="text-yellow-800">
                Our used equipment inventory is constantly updated. Call us to check current availability and get detailed information on specific units.
              </p>
            </div>
          </div>
        </div>

        {/* Financing & Delivery */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Financing Available</h3>
              <p className="mb-4">
                Flexible financing options to help you get the equipment you need without breaking the bank.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Low monthly payments
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quick approval process
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multiple payment plans
                </li>
              </ul>
            </div>

            <div className="bg-orange-500 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Delivery & Installation</h3>
              <p className="mb-4">
                Professional delivery and installation services available nationwide.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-200 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Nationwide delivery
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-200 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Professional setup
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-200 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Testing & training included
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Used Equipment?</h2>
          <p className="text-lg mb-6 text-gray-300">
            Contact us today to learn about current inventory and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1-800-667-9189"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Call: 1-800-667-9189
            </a>
            <a
              href="sms:1-800-667-9189"
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              Text Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
