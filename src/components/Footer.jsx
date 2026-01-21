import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">AutoLuxe</h3>
            <p className="text-gray-500">Premium vehicles for the discerning driver. Experience the future of automotive sales.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-500">
              <li><Link to="/" className="hover:text-blue-600">Inventory</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-blue-600">Financing</a></li>
              <li><a href="#" className="hover:text-blue-600">Warranty</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
            <p className="text-gray-500 mb-4">Subscribe for the latest updates.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="flex-1 px-4 py-2 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600" />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          © 2024 AutoLuxe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
