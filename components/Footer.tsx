export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              TanningBedRepair.com
            </h3>
            <p className="text-sm leading-relaxed">
              Nationwide directory connecting salon owners with independent repair technicians since 2001.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="#find-technician" className="hover:text-white transition">Find Technicians</a></li>
              <li><a href="/manuals" className="hover:text-white transition">Equipment Manuals</a></li>
            </ul>
          </div>

          {/* States */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Popular States</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/states/california" className="hover:text-white transition">California</a></li>
              <li><a href="/states/texas" className="hover:text-white transition">Texas</a></li>
              <li><a href="/states/florida" className="hover:text-white transition">Florida</a></li>
              <li><a href="/states/arizona" className="hover:text-white transition">Arizona</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get Listed Free</h3>
            <p className="text-sm mb-3">
              <strong className="text-white">Technicians:</strong>
            </p>
            <a href="tel:1-800-667-9189" className="text-orange-400 hover:text-orange-300 font-semibold text-lg block mb-2">
              800-667-9189
            </a>
            <p className="text-sm">
              Free listings for qualified repair technicians
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2001-{currentYear} TanningBedRepair.com. All rights reserved.</p>
          <p className="mt-2">
            <a href="mailto:tanningservices@gmail.com" className="hover:text-white transition">Contact Us</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
