import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Gauge, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CarCard = ({ car }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900">
          {car.year}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{car.make}</h3>
            <h2 className="text-xl font-bold text-gray-900 mt-1">{car.model}</h2>
          </div>
          <p className="text-xl font-bold text-gray-900">${car.price.toLocaleString()}</p>
        </div>

        <div className="flex items-center space-x-4 my-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Gauge className="h-4 w-4" />
            <span>{car.mileage} mi</span>
          </div>
          <div className="flex items-center space-x-1">
            <Fuel className="h-4 w-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Zap className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <Link
          to={`/car/${car.id}`}
          className="block w-full text-center bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-900 font-semibold py-3 rounded-xl transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;
