import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// React Icons (Feather alternative)
import { FiSend, FiHeadphones, FiClipboard } from "react-icons/fi";

const steps = [
  {
    id: "01",
    title: "Submit Your Service Request",
    description:
      "Fill out the form with your construction or real estate needs and contact information. We’ll take it from there.",
    icon: FiSend,
    align: "left",
    aos: "fade-right",
  },
  {
    id: "02",
    title: "Consult with a Representative",
    description:
      "Our team will reach out to discuss your project and create a tailored proposal. Once approved, we’ll begin the work.",
    icon: FiHeadphones,
    align: "right",
    aos: "fade-left",
  },
  {
    id: "03",
    title: "See the Results",
    description:
      "Watch as your project progresses and is completed efficiently, on time, and to your satisfaction.",
    icon: FiClipboard,
    align: "left",
    aos: "fade-right",
  },
];

const StepCard = ({ step }) => {
  const Icon = step.icon;

  return (
    <div
      className={`relative w-full flex ${
        step.align === "right" ? "justify-end" : "justify-start"
      }`}
      data-aos={step.aos}
      data-aos-duration="1000"
    >
      <div className="relative w-full max-w-[640px] sm:max-w-[700px]">
        {/* Shadow Layer */}
        <div className="absolute inset-0 translate-x-[-24px] translate-y-[24px] bg-[#5B2BE0] rounded-[18px]" />

        {/* Main Card */}
        <div className="relative z-10 bg-[#E8EAF6] rounded-[18px] px-7 py-8 sm:px-8 sm:py-10 md:px-8 md:py-10">
          <div className="mb-5">
            <Icon className="w-10 h-10 sm:w-11 sm:h-11 text-[#5B2BE0]" />
          </div>

          <h3 className="text-[#171717] font-bold text-[22px] sm:text-[28px] leading-tight mb-4">
            {step.title}
          </h3>

          <p className="text-[#171717] text-[16px] sm:text-[18px] leading-[1.65] max-w-[560px]">
            {step.description}
          </p>
        </div>

        {/* Step Number */}
        <span className="absolute z-20 text-[#5B2BE0] font-bold text-[82px] sm:text-[110px] md:text-[130px] leading-none -top-14 right-[-10px] sm:-top-20 sm:right-[-14px] md:right-[-70px]">
          {step.id}
        </span>
      </div>
    </div>
  );
};

const GetStartedSteps = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-28 overflow-hidden font-poppins">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="mb-16 sm:mb-20 md:mb-24" data-aos="fade-up">
          <h2 className="text-[36px] sm:text-[52px] md:text-[68px] leading-[0.95] font-bold uppercase tracking-[-0.03em]">
            <span className="text-[#111111]">GET STARTED IN </span>
            <span className="text-[#5B2BE0]">3 SIMPLE STEPS</span>
          </h2>

          <p className="mt-6 max-w-[620px] text-[#111111] text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Start your project with a simple process designed to make things easy, clear, and efficient from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-24 sm:gap-28 md:gap-32">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSteps;