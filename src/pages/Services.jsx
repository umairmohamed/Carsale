import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <p className="text-gray-600">
          We offer a range of premium automotive services including maintenance, financing, and customization.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
