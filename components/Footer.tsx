export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Tanning Bed Repair
            </h3>
            <p className="text-sm leading-relaxed">
              Professional tanning equipment repair and maintenance services nationwide.
              Expert technicians, fast response times.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/service-technicians" className="hover:text-white transition">Find Technicians</a></li>
              <li><a href="/manuals" className="hover:text-white transition">Equipment Manuals</a></li>
              <li><a href="/quick-fixes" className="hover:text-white transition">Quick Fixes</a></li>
            </ul>
          </div>

          {/* States */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Popular States</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/states/california" className="hover:text-white transition">California</a></li>
              <li><a href="/states/texas" className="hover:text-white transition">Texas</a></li>
              <li><a href="/states/florida" className="hover:text-white transition">Florida</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> 1-800-XXX-XXXX
            </p>
            <p className="text-sm">
              Available nationwide for emergency repairs
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Tanning Bed Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
