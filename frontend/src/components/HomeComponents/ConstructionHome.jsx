import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowUpRight } from 'react-icons/hi2';
import Constructionimg from '../../assets/construction.png';

const ConstructionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6 sm:space-y-8" data-aos="fade-right">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              WE'RE HERE FOR YOUR <span className='text-[#6139E2]'> CONSTRUCTION</span> AND  <span className='text-[#6139E2]'>REAL ESTATE NEEDS</span>
            </h2>

            <p 
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our dedicated network of service experts and dispatch coordinators is equipped to manage projects of any scale, delivering dependable, high-quality service whenever required.
            </p>

            <div
              className="flex justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="relative inline-flex flex-col items-center group">
                <div className="relative inline-block">
                  <button className="px-6 sm:px-6 py-4 sm:py-2 bg-[#6139E2] text-white rounded-full text-sm sm:text-base font-medium hover:bg-[#4f2ab8] transition-all duration-300 pr-12 sm:pr-14 transform hover:scale-105">
                    Read More
                  </button>
                  <button className="absolute -right-1 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 p-0.5 bg-white border-2 border-[#6139E2] text-[#6139E2] rounded-full flex items-center justify-center hover:bg-[#6139E2] hover:text-white transition-all duration-300 mr-5 sm:mr-6 group-hover:rotate-45">
                    <HiArrowUpRight className="text-lg sm:text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div 
            className="flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src={Constructionimg}
              alt="Construction and Real Estate"
              className="w-full max-w-md lg:max-w-lg h-[300px] sm:h-[350px] lg:h-[600px] object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;