export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Training
          </h1>
          <div className="bg-white rounded-lg shadow-md p-12">
            <p className="text-3xl font-semibold text-blue-700 mb-4">
              Coming Soon
            </p>
            <p className="text-gray-600 mb-8">
              We're developing comprehensive training programs for salon owners, staff, and technicians. Check back soon!
            </p>
            <a
              href="/"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
