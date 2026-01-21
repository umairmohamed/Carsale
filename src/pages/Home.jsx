import React from 'react';
import Navbar from '../components/Navbar';
import FeaturedCarousel from '../components/FeaturedCarousel';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';
import { Filter } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <FeaturedCarousel cars={cars} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest Arrivals</h2>
            <p className="mt-2 text-gray-500">Discover our premium selection of vehicles</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <select className="px-4 py-2 border border-gray-200 rounded-lg bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Year: Newest</option>
            </select>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Load More Vehicles
          </button>
        </div>
      </main>

      {/* Footer */}
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
                <li><a href="#" className="hover:text-blue-600">Inventory</a></li>
                <li><a href="#" className="hover:text-blue-600">Services</a></li>
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
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
    </div>
  );
};

export default Home;
