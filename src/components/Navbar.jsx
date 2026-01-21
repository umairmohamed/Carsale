import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Menu, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Auto<span className="text-blue-600">Luxe</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Inventory</Link>
            <Link to="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</Link>
            <Link to="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
            <button className="md:hidden p-2 text-gray-500 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
