import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Real Estate Consultant",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    review:
      "Excellent service, professional, and responsive team. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    review:
      "Great team, efficient, and exceeded expectations on every level.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Real Estate Agent",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80",
    review:
      "Professional, knowledgeable, and results-driven. Outstanding experience.",
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "Construction Lead",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    review:
      "Handled everything efficiently. Great service, quality results.",
  },
  {
    id: 5,
    name: "David Lee",
    role: "Real Estate Investor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    review:
      "Reliable, precise work. Delivered exactly what was promised.",
  },
  {
    id: 6,
    name: "Lisa Brown",
    role: "Real Estate Consultant",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    review:
      "Exceptional attention to detail. Couldn’t be happier with the service.",
  },
  {
    id: 7,
    name: "Sara Williams",
    role: "Construction Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    review:
      "Impressive work, completed on time with excellent communication.",
  },
  {
    id: 8,
    name: "Tom Harris",
    role: "Property Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    review:
      "Efficient, reliable, and always ready to help. Truly professional.",
  },
];

const TestimonialCard = ({ item, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="relative bg-[#f3f4ff] rounded-[22px] px-6 pt-14 pb-6 text-center shadow-sm hover:shadow-md transition-all duration-300 min-h-[210px] flex flex-col justify-between"
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="w-16 h-16 rounded-full border-[4px] border-white shadow-md overflow-hidden bg-white">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1d1d1f] leading-tight">
          {item.name}
        </h3>
        <p className="text-[15px] sm:text-[16px] italic text-[#3b3b3b] font-normal -mt-1">
          {item.role}
        </p>

        <p className="text-[15px] sm:text-[16px] text-[#222] leading-[1.45] mt-5 max-w-[250px] mx-auto">
          {item.review}
        </p>
      </div>

      <div className="flex justify-center gap-[3px] mt-5 text-[#ff8a2a]">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={14} />
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 4);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* top heading design */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-20 sm:w-28 h-[2px] bg-black"></div>
            <h4 className="text-[24px] sm:text-[34px] md:text-[40px] font-normal uppercase text-black tracking-normal leading-none">
              Testimonial
            </h4>
            <div className="w-20 sm:w-28 h-[2px] bg-black"></div>
          </div>

          <h2 className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[60px] font-bold uppercase leading-none text-[#111]">
            Our Client{" "}
            <span className="text-[#5b3df5]">
              Reviews
            </span>
          </h2>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-16">
          {visibleTestimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* arrow button */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-14 rounded-full bg-[#5b3df5] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
            aria-label={showAll ? "Show less testimonials" : "Show more testimonials"}
          >
            {showAll ? (
              <IoChevronUpOutline size={28} />
            ) : (
              <IoChevronDownOutline size={28} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;