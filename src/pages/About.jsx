import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <p className="text-gray-600">
          AutoLuxe is the premier destination for luxury vehicles. We pride ourselves on offering the finest selection of cars and exceptional customer service.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
