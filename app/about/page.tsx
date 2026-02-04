export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-300 font-medium tracking-wide uppercase text-sm mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Three Industry Pros.<br />
              <span className="text-orange-400">One Mission.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our platform bridges a long-standing gap in the tanning industry—connecting salon owners with qualified technicians while providing clear troubleshooting guidance and maintenance documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-700">25+</p>
              <p className="text-gray-600 text-sm mt-1">Years Combined Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-700">164</p>
              <p className="text-gray-600 text-sm mt-1">Verified Technicians</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-700">50</p>
              <p className="text-gray-600 text-sm mt-1">States Covered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-700">24/7</p>
              <p className="text-gray-600 text-sm mt-1">Resource Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Problem We Saw
            </h2>
            <p className="text-lg text-gray-600">
              Too many salon owners struggle to find dependable maintenance support or accurate repair information when they need it most. We created this platform to be a trusted, industry-specific solution—built by people who understand tanning salons from the inside out.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-red-600 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Before
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Scrambling to find a qualified technician
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Outdated or scattered repair documentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      No way to verify technician credentials
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Lost revenue during extended downtime
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-green-600 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    With Us
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Searchable directory of verified technicians
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Organized troubleshooting guides by brand
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Technician profiles with real reviews
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Get beds back online faster
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-2">
              Meet the Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built by Industry Insiders
            </h2>
            <p className="text-lg text-gray-600">
              We've worked the front desk, fixed the beds, and managed the business. We know what salon owners and technicians actually need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Johnny */}
            <div className="group flex">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col w-full">
                <div className="h-72 relative overflow-hidden flex-shrink-0">
                  <img
                    src="/images/jonathan.jpg"
                    alt="Jonathan - Lead Technician"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      12+ Years Experience
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">Jonathan</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">Lead Technician</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Over 12 years of hands-on experience diagnosing, repairing, and maintaining a wide range of tanning beds and systems. His technical expertise forms the backbone of our repair resources and technician standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Lanna */}
            <div className="group flex">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col w-full">
                <div className="h-72 relative overflow-hidden flex-shrink-0">
                  <img
                    src="/images/lanna.png"
                    alt="Lanna - Technical Director"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Dual Perspective
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">Lanna</h3>
                  <p className="text-orange-600 font-medium text-sm mb-3">Technical Director</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A unique dual perspective with experience as both a tanning salon employee and a maintenance technician/maintenance director. This insight helps ensure our platform supports day-to-day salon operations while addressing real-world maintenance challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Ambria */}
            <div className="group flex">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col w-full">
                <div className="h-72 relative overflow-hidden flex-shrink-0">
                  <img
                    src="/images/ambria.jpg"
                    alt="Ambria - Owner & Operations"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Owner-Operator
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">Ambria</h3>
                  <p className="text-green-600 font-medium text-sm mb-3">Owner & Operations</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Firsthand knowledge as an owner-operator, understanding the pressures of running a salon—downtime costs, staffing challenges, and the need for reliable, timely service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-10 text-lg max-w-2xl mx-auto">
            Together, we understand the frustrations, the urgency, and the importance of keeping equipment operational and safe. Our mission is simple: Support salon owners, empower technicians, and keep tanning equipment running at its best.
          </p>
        </div>
      </section>

      {/* What We Provide */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Provide
            </h2>
            <p className="text-slate-300 text-lg">
              Everything you need to keep your salon running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Technician Network</h3>
              <p className="text-slate-400 text-sm">
                Qualified maintenance technicians across all 50 states, searchable by location.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Troubleshooting Guides</h3>
              <p className="text-slate-400 text-sm">
                Step-by-step repair resources to diagnose and fix common equipment issues.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Documentation</h3>
              <p className="text-slate-400 text-sm">
                Clear, practical maintenance docs for all major tanning equipment brands.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Reduce Downtime</h3>
              <p className="text-slate-400 text-sm">
                Get equipment back online faster and extend the life of your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Technicians */}
      <section className="bg-orange-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Are You a Technician?</h3>
              <p className="text-gray-600">
                Our directory is free. Get listed and connect with salon owners in your area.
              </p>
            </div>
            <a
              href="tel:321-636-3434"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 321-636-3434
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Keep Your Beds Running?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Find a qualified technician near you or explore our repair resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/directory"
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition text-lg"
              >
                Find a Technician
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/services/troubleshooting"
                className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold transition text-lg"
              >
                Troubleshooting Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Technicians in our directory are independent service providers. We are not responsible for work performed by listed companies. Always verify credentials and insurance before hiring.
          </p>
        </div>
      </section>
    </div>
  );
}
