import Link from 'next/link';
import statesData from '../data/states.json';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional Tanning Bed Repair
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Expert technicians nationwide. Fast response times. All major brands.
            Get your tanning equipment back up and running quickly.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="tel:1-800-XXX-XXXX"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Call Now: 1-800-XXX-XXXX
            </a>
            <Link
              href="/service-technicians"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
            >
              Find a Technician
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Equipment Repair</h3>
              <p className="text-gray-600">
                Complete repair services for all tanning bed brands including bulb replacement,
                ballast repairs, timer issues, and electrical problems.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Maintenance</h3>
              <p className="text-gray-600">
                Regular maintenance programs to keep your equipment running efficiently
                and prevent costly breakdowns.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Parts & Support</h3>
              <p className="text-gray-600">
                Genuine parts, technical manuals, and expert phone support to help
                you troubleshoot issues quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* States Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Service Areas - Select Your State
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {statesData.map((state) => (
              <Link
                key={state.slug}
                href={`/states/${state.slug}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center border border-gray-200 hover:border-blue-500"
              >
                <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700">
                  {state.name}
                </h3>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Serving all 50 states - Click your state for local service information
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Emergency Repair Service?
          </h2>
          <p className="text-xl mb-8">
            Our technicians are available 24/7 for urgent repairs
          </p>
          <a
            href="tel:1-800-XXX-XXXX"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Call Now: 1-800-XXX-XXXX
          </a>
        </div>
      </section>
    </div>
  );
}
