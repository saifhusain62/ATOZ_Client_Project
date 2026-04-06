import React, { useEffect } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Herobgimg from '../../assets/herobg.png';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="relative w-full min-h-[110vh] overflow-hidden">
      {/* Background Overlay Color */}
      <div className="absolute inset-0 w-full h-full bg-[#ebebfa]" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${Herobgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'normal'
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-between py-8 sm:py-12 lg:py-16 z-10">
        
        {/* Top Left Text */}
        <div 
          className="w-full"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h1 className="text-[#6139E2] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl font-normal leading-tight max-w-2xl drop-shadow-lg">
            Your Trusted Partner for <br /> 
            All <span className='font-bold'>Construction</span> and <br /> 
            <span className='font-bold'>Real Estate Solutions</span>
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-12">
          
          {/* Center Button */}
          <div 
            className="flex-1 flex justify-center lg:justify-center order-2 lg:order-1 mb-10"
            
          >
            <div className="relative inline-flex flex-col items-center group">
              <div className="relative inline-block">
                <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#6139E2] rounded-full text-sm sm:text-base font-medium hover:bg-[#4f2ab8] hover:text-white transition-all duration-300 pr-12 sm:pr-14 shadow-lg hover:shadow-2xl transform hover:scale-105">
                  Book Now 
                </button>
                <button className="absolute -right-1 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 p-0.5 bg-[#6139E2] border-2 border-[#6139E2] text-white rounded-full flex items-center justify-center text-[#6139E2] hover:bg-[#6139E2] hover:text-white transition-all duration-300 mr-5 sm:mr-6 group-hover:rotate-45">
                  <HiArrowUpRight className="text-lg sm:text-xl" />
                </button>
              </div> 
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-4 sm:gap-6 order-1 lg:order-2 w-full lg:w-auto">
            
            {/* First Card - Projects Completed */}
            <div 
              className="bg-[#361E8C]/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl w-full sm:w-80 hover:bg-[#361E8C]/40 transition-all duration-300 hover:scale-105"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                290+
              </h2>
              <p className="text-white/90 text-base sm:text-lg font-medium">
                Projects completed
              </p>
            </div>

            {/* Second Card - Happy Customers */}
            <div 
              className="bg-[#361E8C]/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl w-full sm:w-80 hover:bg-[#361E8C]/40 transition-all duration-300 hover:scale-105"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              
              {/* User Avatars */}
              <div className="flex -space-x-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop" 
                    alt="Customer 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop" 
                    alt="Customer 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                  <FaStar 
                    key={index} 
                    className="text-yellow-400 text-lg sm:text-xl animate-pulse" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed">
                500+ happy customers love our services
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default HeroSection;