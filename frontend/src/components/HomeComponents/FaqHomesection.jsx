import React, { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "Which locations do you cover?",
    answer:
      "We proudly offer our services to both residential and commercial clients throughout the Dallas-Fort Worth metroplex and surrounding counties.",
  },
  {
    question: "What types of services do you provide?",
    answer:
      "Our expertise includes construction, complete renovations, timely repairs, new installations, and ongoing property maintenance to keep your property in top condition.",
  },
  {
    question: "How can I schedule a service?",
    answer:
      "To schedule a service, please visit the Contact Us page on our website, send us an email, or call our customer service line. We're here to help!",
  },
  {
    question: "Do you provide any service guarantees?",
    answer:
      "We stand behind our commitment to superior workmanship and ensuring every customer is completely satisfied with our services.",
  },
  {
    question: "Are emergency services available?",
    answer:
      "Yes, we provide emergency support based on the urgency of the situation and our team's availability. Please contact us immediately for urgent requests.",
  },
  {
    question: "What are your business hours?",
    answer:
      "Our standard business hours are weekdays, but we also offer weekend and after-hours services to accommodate your needs. Contact us to arrange a special appointment.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
    });

    // Detect mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'md' breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-10 md:py-28">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-center text-[30px] sm:text-[40px] md:text-[52px] font-bold uppercase mb-10"
        >
          <span className="text-black">Frequently </span>
          <span className="text-[#6A3BEA]">Asked Questions</span>
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos={isMobile ? "" : "fade-up"}
                data-aos-delay={isMobile ? 0 : index * 80}
                className="flex rounded-xl overflow-hidden"
              >
                {/* Left Content */}
                <div className="flex-1 bg-[#F1F1FD] px-5 py-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="text-left w-full"
                  >
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-black">
                      {item.question}
                    </h3>

                    <div
                      className={`overflow-hidden ${
                        isMobile
                          ? isOpen
                            ? "max-h-full mt-2 opacity-100"
                            : "max-h-0 opacity-100"
                          : `transition-all duration-400 ease-in-out ${
                              isOpen
                                ? "max-h-[200px] mt-2 opacity-100"
                                : "max-h-0 opacity-0"
                            }`
                      }`}
                    >
                      <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </button>
                </div>

                {/* Right Icon */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-[60px] bg-[#6A3BEA] hover:bg-[#5a2fd1] flex items-center justify-center transition"
                >
                  {isOpen ? (
                    <FiMinus className="text-white text-[24px]" />
                  ) : (
                    <FiPlus className="text-white text-[24px]" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;