import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { ArrowLeft, Check, Calendar, Gauge, Fuel, Zap, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { cars } from '../data/cars';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!car) {
    return <div className="text-center py-20">Car not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb & Back */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="flex items-center hover:text-blue-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Inventory
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>{car.make}</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-gray-900">{car.model}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Images */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100 h-[400px] md:h-[500px]">
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="h-full w-full"
              >
                {car.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnails */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs]}
              className="h-24 w-full"
            >
              {car.images.map((img, index) => (
                <SwiperSlide key={index} className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-600 transition-colors">
                  <img src={img} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Column: Details */}
          <div>
            <div className="mb-6">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">{car.make}</h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{car.model}</h1>
              <div className="text-3xl font-bold text-gray-900">${car.price.toLocaleString()}</div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-xs text-gray-500">Year</div>
                  <div className="font-semibold text-gray-900">{car.year}</div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl flex items-center space-x-3">
                <Gauge className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-xs text-gray-500">Mileage</div>
                  <div className="font-semibold text-gray-900">{car.mileage} mi</div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl flex items-center space-x-3">
                <Fuel className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-xs text-gray-500">Fuel Type</div>
                  <div className="font-semibold text-gray-900">{car.fuelType}</div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl flex items-center space-x-3">
                <Zap className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-xs text-gray-500">Transmission</div>
                  <div className="font-semibold text-gray-900">{car.transmission}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-700">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Contact Dealer</span>
              </button>
              <button className="flex-1 bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-900 hover:bg-gray-50 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarDetails;
