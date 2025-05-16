
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-bold text-2xl text-travel-primary">
                TravelEase
              </Link>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/flights" className="text-gray-600 hover:text-travel-primary px-3 py-2 text-sm font-medium">
              Flights
            </Link>
            <Link to="/hotels" className="text-gray-600 hover:text-travel-primary px-3 py-2 text-sm font-medium">
              Hotels
            </Link>
            <Link to="/holiday-packages" className="text-gray-600 hover:text-travel-primary px-3 py-2 text-sm font-medium">
              Holiday Packages
            </Link>
            <Link to="/trains" className="text-gray-600 hover:text-travel-primary px-3 py-2 text-sm font-medium">
              Trains
            </Link>
            <Link to="/buses" className="text-gray-600 hover:text-travel-primary px-3 py-2 text-sm font-medium">
              Buses
            </Link>
            <Button variant="outline" className="border-travel-primary text-travel-primary">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-travel-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/flights" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-travel-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Flights
            </Link>
            <Link 
              to="/hotels" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-travel-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Hotels
            </Link>
            <Link 
              to="/holiday-packages" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-travel-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Holiday Packages
            </Link>
            <Link 
              to="/trains" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-travel-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Trains
            </Link>
            <Link 
              to="/buses" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-travel-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Buses
            </Link>
            <Button variant="outline" className="w-full border-travel-primary text-travel-primary">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
