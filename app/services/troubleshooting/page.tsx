export default function TroubleshootingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tanning Bed Troubleshooting Guides
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access expert troubleshooting documentation, repair guides, and technical manuals for all major tanning bed brands.
          </p>
        </div>

        {/* Membership Required Notice */}
        <div className="max-w-4xl mx-auto mb-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Members-Only Content</h3>
              <p className="text-gray-700 mb-4">
                Get unlimited access to our comprehensive library of troubleshooting guides, repair manuals, and technical documentation for just $25/month.
              </p>
              <a
                href="/pricing"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>

        {/* Preview of Available Resources */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Get Access To:</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Common Issues & Solutions
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Bed won't start or power on</li>
                <li>• Timer not working properly</li>
                <li>• Lamps not lighting up</li>
                <li>• Cooling fan problems</li>
                <li>• Digital display errors</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Repair Manuals by Brand
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ESB Tanning Beds</li>
                <li>• SunVision Equipment</li>
                <li>• Wolff System Beds</li>
                <li>• Ergoline Models</li>
                <li>• And 20+ more brands</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Parts Identification
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Component diagrams</li>
                <li>• Part numbers & specs</li>
                <li>• Replacement guides</li>
                <li>• Compatible alternatives</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Safety & Maintenance
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Preventative maintenance schedules</li>
                <li>• Safety inspection checklists</li>
                <li>• Cleaning procedures</li>
                <li>• Compliance guidelines</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Join hundreds of salon owners and technicians with instant access to our complete resource library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Start 7-Day Free Trial
              </a>
              <a
                href="/portal"
                className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
              >
                Member Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
