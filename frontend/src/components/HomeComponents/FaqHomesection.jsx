import React, { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "Which locations do you cover?",
    answer:
      "We serve both residential and commercial clients across our primary service regions.",
  },
  {
    question: "What types of services do you provide?",
    answer:
      "We offer construction, renovation, repair, installation, and complete property maintenance services.",
  },
  {
    question: "How can I schedule a service?",
    answer:
      "You can book a service by reaching out through our website, email, or phone.",
  },
  {
    question: "Do you provide any service guarantees?",
    answer:
      "We guarantee quality workmanship and customer satisfaction.",
  },
  {
    question: "Are emergency services available?",
    answer:
      "Yes, emergency support is offered depending on urgency and team availability.",
  },
  {
    question: "What are your business hours?",
    answer:
      "We operate during weekdays, with weekend and after-hours services available upon request.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const toggleFaq = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((item) => item !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-aos="fade-up"
          className="text-center text-[34px] sm:text-[46px] md:text-[58px] lg:text-[66px] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] mb-10 md:mb-14"
        >
          <span className="text-black">Frequently </span>
          <span className="text-[#6A3BEA]">Asked Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex.includes(index);

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex items-stretch gap-0"
              >
                <div className="flex-1 bg-[#F1F1FD] rounded-l-[14px] rounded-r-none px-6 sm:px-8 py-6 min-h-[100px] flex flex-col justify-center">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="text-left w-full"
                  >
                    <h3 className="text-black text-[24px] sm:text-[28px] md:text-[29px] font-extrabold leading-tight tracking-[-0.02em] mb-2">
                      {item.question}
                    </h3>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-black text-[18px] sm:text-[20px] md:text-[21px] leading-[1.45] font-normal pr-2">
                        {item.answer}
                      </p>
                    </div>
                  </button>
                </div>

                <button
                  onClick={() => toggleFaq(index)}
                  aria-label={isOpen ? "Close FAQ" : "Open FAQ"}
                  className="w-[96px] sm:w-[110px] md:w-[116px] min-h-[100px] bg-[#6A3BEA] hover:bg-[#6132e3] transition-all duration-300 rounded-r-[14px] rounded-l-none flex items-center justify-center shrink-0"
                >
                  {isOpen ? (
                    <FiMinus className="text-white text-[42px] md:text-[46px] stroke-[1.5]" />
                  ) : (
                    <FiPlus className="text-white text-[42px] md:text-[46px] stroke-[1.5]" />
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