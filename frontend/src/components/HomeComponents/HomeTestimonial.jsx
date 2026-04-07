import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  { id: 1, name: "John Doe", role: "Real Estate Consultant", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", review: "Excellent service, professional, and responsive team. Highly recommended!" },
  { id: 2, name: "Jane Smith", role: "Project Manager", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", review: "Great team, efficient, and exceeded expectations on every level." },
  { id: 3, name: "Michael Johnson", role: "Real Estate Agent", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", review: "Professional, knowledgeable, and results-driven. Outstanding experience." },
  { id: 4, name: "Emily Parker", role: "Construction Lead", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80", review: "Handled everything efficiently. Great service, quality results." },
  { id: 5, name: "David Lee", role: "Real Estate Investor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", review: "Reliable, precise work. Delivered exactly what was promised." },
  { id: 6, name: "Lisa Brown", role: "Real Estate Consultant", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80", review: "Exceptional attention to detail. Couldn’t be happier with the service." },
  { id: 7, name: "Sara Williams", role: "Construction Manager", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80", review: "Impressive work, completed on time with excellent communication." },
  { id: 8, name: "Tom Harris", role: "Property Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", review: "Efficient, reliable, and always ready to help. Truly professional." },
];

const TestimonialCard = ({ item, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative bg-[#f3f4ff] rounded-[22px] px-6 pt-14 pb-6 text-center shadow-sm hover:shadow-md transition-all duration-300 min-h-[210px] flex flex-col justify-between"
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="w-16 h-16 rounded-full border-[4px] border-white shadow-md overflow-hidden bg-white">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1d1d1f]">{item.name}</h3>
        <p className="text-[15px] italic text-[#3b3b3b] -mt-1">{item.role}</p>
        <p className="text-[15px] text-[#222] mt-5 max-w-[250px] mx-auto">{item.review}</p>
      </div>
      <div className="flex justify-center gap-[3px] mt-5 text-[#ff8a2a]">
        {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
      </div>
    </motion.div>
  );
};

const TestimonialSection = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const transitionSettings = showAll
    ? { duration: 0.5, ease: "easeOut" } // slow when opening
    : { duration: 0.2, ease: "easeIn" }; // fast when closing

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[40px] font-bold uppercase">
            Our Client <span className="text-[#5b3df5]">Reviews</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence>
            {(showAll ? testimonials : testimonials.slice(0, 4)).map((item, index) => (
              <TestimonialCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Animated Arrow Button */}
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            layout
            animate={{ rotate: showAll ? 180 : 0 }}
            transition={transitionSettings}
            className="w-14 h-14 rounded-full bg-[#5b3df5] text-white flex items-center justify-center shadow-lg hover:scale-105"
          >
            <IoChevronDownOutline size={28} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;