import React, { useEffect } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import constructionimg from "../../assets/constructionimg.png";
import realstateimg from "../../assets/realstateimg.png";

const services = [
  {
    id: 1,
    title: "Construction Management",
    description: [
      "Seamless project coordination",
      "Timely delivery and budget control",
      "High-quality craftsmanship",
    ],
    image: constructionimg,
    reverse: false,
  },
  {
    id: 2,
    title: "Real Estate Solutions",
    description: [
      "Expert property guidance",
      "Tailored buying and selling strategies",
      "Investment opportunities and analysis",
    ],
    image: realstateimg,
    reverse: true,
  },
];

const ServicesSection = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    AOS.init({
      duration: isMobile ? 600 : 1000, // faster on mobile
      delay: isMobile ? 50 : 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl" data-aos="fade-up">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-black sm:text-5xl md:text-6xl">
            Our <span className="text-[#5B3BE7]">Services</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-800 sm:text-xl">
            Explore Our Comprehensive Range of Construction and Real Estate
            Services for Maintenance, Renovations, and Property Development.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                service.reverse
                  ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              
              {/* IMAGE BLOCK */}
              <div className="relative">
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * (window.innerWidth < 768 ? 50 : 100)}
                  className="relative z-10 overflow-hidden rounded-xl shadow-lg group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white text-2xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Shadow Background */}
                <div
                  data-aos="fade-up"
                  data-aos-delay={
                    index * (window.innerWidth < 768 ? 50 : 100) + 200
                  }
                  className={`absolute -bottom-7 w-full h-full bg-[#CFDBFF] rounded-xl z-0 ${
                    service.reverse ? "-right-5" : "-left-5"
                  }`}
                ></div>
              </div>

              {/* CONTENT BLOCK */}
              <div
                data-aos="fade-up"
                data-aos-delay={index * (window.innerWidth < 768 ? 50 : 150)}
                className={`${service.reverse ? "lg:pl-8" : "lg:pr-8"}`}
              >
                <h3 className="text-3xl font-bold text-[#5B3BE7] sm:text-4xl">
                  {service.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {service.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-lg text-gray-900 sm:text-xl"
                    >
                      <span className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#5B3BE7]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="relative inline-block mt-6 group">
                  <button className="px-6 py-3 bg-[#6139E2] text-white rounded-full text-sm sm:text-base font-medium hover:bg-[#4f2ab8] transition-all duration-300 pr-12 transform hover:scale-105">
                    Read More
                  </button>

                  <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-[#6139E2] text-[#6139E2] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#6139E2] group-hover:text-white group-hover:rotate-45">
                    <HiArrowUpRight className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;