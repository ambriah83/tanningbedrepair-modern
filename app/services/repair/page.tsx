export default function ServiceRepairPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Tanning Bed Repair Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert repair services for all major tanning bed brands. Get your equipment back up and running quickly.
          </p>
          <a
            href="tel:1-800-667-9189"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition text-lg"
          >
            Call for Service: 1-800-667-9189
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lamp Replacement</h3>
            <p className="text-gray-600">Professional lamp replacement and testing for optimal performance.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventative Maintenance</h3>
            <p className="text-gray-600">Regular maintenance programs to keep your equipment running at peak performance.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Timer & Control Fixes</h3>
            <p className="text-gray-600">Repair and replacement of timers, controls, and digital displays.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Acrylic Replacement</h3>
            <p className="text-gray-600">High-quality acrylic shield replacement for all bed models.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fan & Cooling System</h3>
            <p className="text-gray-600">Cooling system repair to prevent overheating and extend equipment life.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Inspections</h3>
            <p className="text-gray-600">Comprehensive safety checks and compliance inspections.</p>
          </div>
        </div>

        {/* Find Technician CTA */}
        <div className="bg-blue-700 text-white rounded-lg p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find a Certified Technician Near You</h2>
          <p className="text-lg mb-6 text-blue-100">
            Connect with experienced tanning bed repair professionals in your area.
          </p>
          <a
            href="/states"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
          >
            Browse by State
          </a>
        </div>
      </div>
    </div>
  );
}
