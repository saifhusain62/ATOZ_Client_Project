import React, { useEffect } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">

        {/* Two Div Boxes Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1">

          {/* First Div Box - About Us */}
          <div
            className="flex items-center justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left">
              ABOUT <span className="text-[#6139E2]">US</span>
            </h2>
          </div>

          {/* Second Div Box - Description + Button */}
          <div
            className="flex flex-col items-center lg:items-start gap-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p className="text-black/80 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left font-medium">
              At <span className='text-[#6139E2]'>A2Z Real Estate Pro,</span> we specialize in delivering exceptional construction and real estate services. Our team of skilled professionals combines innovative design, high-quality materials, and sustainable practices to create outstanding properties. Whether for residential or commercial projects, we focus on efficiency, precision, and customer satisfaction every step of the way.
            </p>

            {/* Button */}
            <div
              className="flex justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="relative inline-flex flex-col items-center group">
                <div className="relative inline-block">
                  <button className="px-6 sm:px-6 py-4 sm:py-2 bg-[#6139E2] text-white rounded-full text-sm sm:text-base font-medium hover:bg-[#4f2ab8] transition-all duration-300 pr-12 sm:pr-14 shadow-lg hover:shadow-2xl transform hover:scale-105">
                    Read More
                  </button>
                  <button className="absolute -right-1 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 p-0.5 bg-white border-2 border-[#6139E2] text-[#6139E2] rounded-full flex items-center justify-center hover:bg-[#6139E2] hover:text-white transition-all duration-300 mr-5 sm:mr-6 group-hover:rotate-45">
                    <HiArrowUpRight className="text-lg sm:text-xl" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;