
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold text-travel-secondary mb-4">TravelEase</h2>
            <p className="text-gray-400 text-sm">
              Book flights, hotels, trains, and buses at the best prices. Find great deals and offers on holiday packages.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/flights" className="text-gray-400 hover:text-white text-sm">Flights</Link></li>
              <li><Link to="/hotels" className="text-gray-400 hover:text-white text-sm">Hotels</Link></li>
              <li><Link to="/holiday-packages" className="text-gray-400 hover:text-white text-sm">Holiday Packages</Link></li>
              <li><Link to="/trains" className="text-gray-400 hover:text-white text-sm">Trains</Link></li>
              <li><Link to="/buses" className="text-gray-400 hover:text-white text-sm">Buses</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white text-sm">Press</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-white text-sm">Help Center</Link></li>
              <li><Link to="/safety" className="text-gray-400 hover:text-white text-sm">Safety Information</Link></li>
              <li><Link to="/cancellation" className="text-gray-400 hover:text-white text-sm">Cancellation Options</Link></li>
              <li><Link to="/covid" className="text-gray-400 hover:text-white text-sm">COVID-19 Response</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link to="/dispute" className="text-gray-400 hover:text-white text-sm">Dispute Resolution</Link></li>
              <li><Link to="/cookie" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
