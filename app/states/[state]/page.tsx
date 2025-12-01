import { notFound } from 'next/navigation';
import Link from 'next/link';
import statesData from '../../../data/states.json';

// This tells Next.js to generate pages for all states at build time
export function generateStaticParams() {
  return statesData.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
  const resolvedParams = await params;
  const stateData = statesData.find(s => s.slug === resolvedParams.state);

  if (!stateData) return {};

  return {
    title: `${stateData.name} Tanning Bed Repair - Professional Service`,
    description: stateData.description,
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  // This ONE template replaces 56 duplicate HTML files!
  const resolvedParams = await params;
  const stateData = statesData.find(s => s.slug === resolvedParams.state);

  if (!stateData) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {stateData.name} Tanning Bed Repair
          </h1>
          <p className="text-xl text-center text-blue-100 mb-8">
            {stateData.description}
          </p>
          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              ← View All States
            </Link>
          </div>
        </div>
      </section>

      {/* Technician Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Certified Technicians in {stateData.name}
          </h2>

          {stateData.technicians && stateData.technicians.length > 0 ? (
            <div className="space-y-8 mb-12">
              {stateData.technicians.map((tech, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                  {/* Header with Rating */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                          {tech.businessName.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tech.businessName}</h3>
                        {tech.rating && (
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-xl ${i < Math.floor(tech.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="text-lg font-semibold text-gray-900">{tech.rating}</span>
                            {tech.reviewCount && (
                              <span className="text-gray-600">({tech.reviewCount} reviews)</span>
                            )}
                          </div>
                        )}
                        <a
                          href={`tel:${tech.phone}`}
                          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition"
                        >
                          📞 Call {tech.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      {tech.address && (
                        <p className="text-gray-700 mb-3">
                          <strong className="text-gray-900">📍 Address:</strong><br />
                          {tech.address}
                        </p>
                      )}
                      {tech.serviceAreas && (
                        <p className="text-gray-700">
                          <strong className="text-gray-900">🗺️ Service Areas:</strong><br />
                          {tech.serviceAreas}
                        </p>
                      )}
                    </div>

                    {/* Specializations */}
                    {tech.specializations && tech.specializations.length > 0 && (
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">🔧 Specializations:</h4>
                        <ul className="space-y-2">
                          {tech.specializations.map((spec, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-600 mr-2">✓</span>
                              <span className="text-gray-700">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Certifications */}
                  {tech.certifications && (
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                      <p className="text-sm text-blue-900">
                        <strong>✓ Certifications:</strong> {tech.certifications}
                      </p>
                    </div>
                  )}

                  {/* Reviews */}
                  {tech.reviews && tech.reviews.length > 0 && (
                    <div className="border-t pt-6">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Customer Reviews:</h4>
                      <div className="space-y-4">
                        {tech.reviews.map((review, i) => (
                          <div key={i} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-900">{review.author}</span>
                                <div className="flex">
                                  {[...Array(5)].map((_, j) => (
                                    <span key={j} className={`text-sm ${j < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                      ★
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <p className="text-gray-700 italic">&quot;{review.text}&quot;</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
              <p className="text-lg text-gray-800">
                <strong>No technicians currently listed for {stateData.name}.</strong> Be the first to get listed and capture this market!
              </p>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-gray-700 mb-4">
              If a number is incorrect or no longer in service, please{' '}
              <a href="mailto:tanningservices@gmail.com?subject=Website listings" className="text-blue-700 hover:underline font-semibold">
                email us here
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Calling All Technicians in {stateData.name}!
          </h2>
          <p className="text-xl mb-4 text-orange-100">
            We need qualified automated salon equipment technicians in {stateData.name}.
          </p>
          <p className="text-lg mb-8 text-orange-100">
            If you have experience repairing indoor tanning salon equipment, sunless tanning booths, and automated spa equipment, get listed here for FREE!
          </p>
          <a
            href="tel:1-800-667-9189"
            className="inline-block bg-white hover:bg-gray-100 text-orange-600 px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            Call 800-667-9189 to Get Listed Free
          </a>
        </div>
      </section>
    </div>
  );
}
