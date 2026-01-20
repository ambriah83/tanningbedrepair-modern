export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About TanningBedRepair.com
          </h1>
          <p className="text-xl text-gray-600">
            We are a team of three industry professionals with one shared goal: making tanning salon maintenance easier, faster, and more reliable.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              Our platform was created to bridge a long-standing gap in the tanning industry—connecting tanning salon owners with qualified, knowledgeable maintenance technicians, while also providing clear troubleshooting guidance and maintenance documentation to keep equipment running smoothly.
            </p>
            <p className="text-lg text-gray-700 font-semibold italic">
              Support salon owners, empower technicians, and keep tanning equipment running at its best.
            </p>
          </div>
        </div>

        {/* Built by Industry Insiders */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Built by Industry Insiders</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            This business was founded by people who have lived every side of the tanning salon operation:
          </p>

          <div className="space-y-6">
            {/* Jonathan */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jonathan</h3>
              <p className="text-gray-600">
                Jonathan brings over 12 years of hands-on experience as a tanning equipment maintenance technician, diagnosing, repairing, and maintaining a wide range of tanning beds and systems. His technical expertise forms the backbone of our repair resources and technician standards.
              </p>
            </div>

            {/* Second Founder */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Technical Director</h3>
              <p className="text-gray-600">
                With experience as both a tanning salon employee and a maintenance technician/maintenance director, our technical director offers a unique dual perspective. This insight helps ensure our platform supports day-to-day salon operations while also addressing real-world maintenance challenges.
              </p>
            </div>

            {/* Ambria */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ambria</h3>
              <p className="text-gray-600">
                Ambria contributes firsthand knowledge as an owner-operator, understanding the pressures of running a salon—downtime costs, staffing challenges, and the need for reliable, timely service.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 text-center mt-8 font-medium">
            Together, we understand the frustrations, the urgency, and the importance of keeping equipment operational and safe.
          </p>
        </div>

        {/* What We Do */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Do</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Connect Owners with Technicians</h3>
                <p className="text-gray-600">Connect tanning salon owners with qualified maintenance technicians across all 50 states.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Troubleshooting Resources</h3>
                <p className="text-gray-600">Provide repair troubleshooting resources to help diagnose and fix common issues.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Maintenance Documentation</h3>
                <p className="text-gray-600">Offer clear, practical maintenance documentation for all major equipment brands.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Reduce Downtime</h3>
                <p className="text-gray-600">Help salons reduce downtime, extend equipment life, and operate with confidence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why We Exist */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Why We Exist</h2>
            <p className="text-lg text-blue-100 mb-6 text-center">
              Too many salon owners struggle to find dependable maintenance support or accurate repair information when they need it most. We created this platform to be a trusted, industry-specific solution—built by people who understand tanning salons from the inside out.
            </p>
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-xl text-white text-center font-semibold">
                Our mission is simple: Support salon owners, empower technicians, and keep tanning equipment running at its best.
              </p>
            </div>
          </div>
        </div>

        {/* Free Directory Notice */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Free Technician Directory</h3>
                <p className="text-yellow-800 mb-2">
                  Our technician directory is completely free to use. If you're a technician and would like to be added to or removed from the list, please call us at{' '}
                  <a href="tel:321-636-3434" className="font-semibold underline">
                    321-636-3434
                  </a>
                  .
                </p>
                <p className="text-yellow-800 text-sm">
                  <strong>Disclaimer:</strong> We are not responsible for any work performed by the independent companies listed in our directory.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Find a technician, access resources, or learn more about our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/directory"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Find a Technician
            </a>
            <a
              href="/training"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Explore Training
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
