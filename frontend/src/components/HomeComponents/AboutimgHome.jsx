import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Aboutimg1 from '../../assets/aboutimg1.png';
import Aboutimg2 from '../../assets/aboutimg2.png';
import Aboutimg3 from '../../assets/aboutimg3.png';

const ImageGallerySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const images = [
    {
      id: 1,
      url: Aboutimg1,
      alt: 'Modern Architecture',
      title: 'Modern Architecture',
    },
    {
      id: 2,
      url: Aboutimg2,
      alt: 'Creative Workspace',
      title: 'Creative Workspace',
    },
    {
      id: 3,
      url: Aboutimg3,
      alt: 'Nature Landscape',
      title: 'Nature Landscape',
    },
  ];

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {images.map((image, index) => (
          <div key={image.id} className="relative">
            
            {/* Image Card - appears FIRST */}
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="relative z-10 overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-[300px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">
                  {image.title}
                </h3>
              </div>
            </div>

            {/* Shadow - appears AFTER */}
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100 + 300}
              className="absolute -bottom-7 -left-5 w-full h-full bg-[#CFDBFF] rounded-xl z-0"
            ></div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallerySection;