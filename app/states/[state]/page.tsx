import { notFound } from 'next/navigation';
import Link from 'next/link';
import statesData from '../../../data/states.json';

// This tells Next.js to generate pages for all states at build time
export function generateStaticParams() {
  return statesData.map((state) => ({
    state: state.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
  const resolvedParams = params as unknown as { state: string };
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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {stateData.name} Tanning Bed Repair
            </h1>
            <p className="text-xl mb-8">
              {stateData.description}
            </p>
            <a
              href={`tel:${stateData.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Call {stateData.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Services in {stateData.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔧 Repair Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bulb replacement & ballast repairs</li>
                <li>• Timer and control panel fixes</li>
                <li>• Electrical troubleshooting</li>
                <li>• Acrylic replacement</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">⚙️ Maintenance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Scheduled preventive maintenance</li>
                <li>• Equipment inspections</li>
                <li>• Parts replacement</li>
                <li>• Technical consultations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Schedule Service in {stateData.name}?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Fast response times. Expert technicians. All major brands.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`tel:${stateData.phone}`}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Call {stateData.phone}
            </a>
            <Link
              href="/"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
            >
              View All States
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Note */}
      <section className="bg-yellow-50 border-t-4 border-yellow-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-800">
            <strong>💡 Modern Web Development Demo:</strong> This single template file
            generates pages for all 56 states dynamically. In the old site, each state
            required a separate HTML file with duplicate code!
          </p>
        </div>
      </section>
    </div>
  );
}
