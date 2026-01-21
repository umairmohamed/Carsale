import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturedCarousel = ({ cars }) => {
  // Take top 3 cars for the hero carousel
  const featuredCars = cars.slice(0, 3);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="h-full w-full"
      >
        {featuredCars.map((car) => (
          <SwiperSlide key={car.id} className="relative h-full w-full">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
                <div className="max-w-2xl text-white space-y-6">
                  <div className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold tracking-wide uppercase mb-2">
                    Featured
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    {car.make} <span className="text-blue-400">{car.model}</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 font-light">
                    {car.year} • {car.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center space-x-4 pt-4">
                    <Link
                      to={`/car/${car.id}`}
                      className="group flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Explore Now</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <div className="text-2xl font-bold text-white">
                      ${car.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCarousel;
