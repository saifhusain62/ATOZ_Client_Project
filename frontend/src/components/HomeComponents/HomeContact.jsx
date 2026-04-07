import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowUpRight } from "react-icons/fi";
import contactbgimg from '../../assets/contact-bg-img.png';

const CreateTogetherSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    help: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.help.trim()
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    console.log("Form Submitted:", formData);

    setStatus("Your quote request has been submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      help: "",
    });

    setTimeout(() => {
      setStatus("");
    }, 4000);
  };

  return (
    <section id="contact" className="w-full px-4 md:px-6 lg:px-8 py-6 md:py-8">
      <div
        className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[24px] md:rounded-[28px] min-h-[760px] md:min-h-[720px] lg:min-h-[700px]"
        style={{
          backgroundImage: `url(${contactbgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[rgba(22,56,102,0.55)] via-[rgba(69,129,197,0.25)] to-[rgba(255,188,122,0.10)]" /> */}

        {/* Soft top sky overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(35,111,185,0.30),rgba(255,255,255,0.02)_45%,rgba(0,0,0,0.05))]" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-10 lg:px-16 lg:py-16">
          {/* Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-start">
            {/* Left Text */}
            <div className="max-w-[640px] pt-2 md:pt-4" data-aos="fade-right">
              <h2 className="text-white uppercase font-bold tracking-[-0.02em] leading-[0.95] text-[42px] sm:text-[52px] md:text-[64px] lg:text-[58px] xl:text-[68px] whitespace-nowrap">
                     LET&apos;S CREATE TOGETHER
              </h2>

              <p className="mt-5 max-w-[620px] text-white/95 font-normal leading-[1.45] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[21px]">
                Get in touch with us to share your vision, and we’ll turn it
                into reality with a uniquely designed space for your success.
              </p>
            </div>

            {/* Form Card */}
            <div className="w-full lg:flex lg:justify-end" data-aos="fade-left">
              <div
                className="w-full max-w-[490px] rounded-[22px] border border-white/20 backdrop-blur-[8px] shadow-[0_20px_60px_rgba(0,0,0,0.20)] px-6 py-7 sm:px-8 sm:py-8 md:px-8 md:py-8"
                style={{ backgroundColor: "rgba(95, 81, 140, 0.5)" }} // glossy purple
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent text-white placeholder:text-white/95 text-[22px] font-normal outline-none border-b border-white/45 pb-4"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-transparent text-white placeholder:text-white/95 text-[22px] font-normal outline-none border-b border-white/45 pb-4"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-transparent text-white placeholder:text-white/95 text-[22px] font-normal outline-none border-b border-white/45 pb-4"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="help"
                      value={formData.help}
                      onChange={handleChange}
                      placeholder="How can we help"
                      className="w-full bg-transparent text-white placeholder:text-white/95 text-[22px] font-normal outline-none border-b border-white/45 pb-4"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[18px] sm:text-[20px] font-medium text-[#6139E2] shadow-md transition-all duration-300 hover:bg-white hover:scale-[1.02] hover:shadow-lg"
                    >
                      Get A Quote
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6139E2] text-white transition-transform duration-300 group-hover:rotate-45">
                        <FiArrowUpRight size={14} />
                      </span>
                    </button>
                  </div>

                  {status && (
                    <p className="pt-2 text-sm text-white/95">{status}</p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div
            className="mt-10 flex flex-wrap gap-4 md:gap-5"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {["Durable", "Modern", "Premium"].map((tag, index) => (
              <button
                key={index}
                className="min-w-[155px] rounded-[12px] border border-white/15 px-6 py-3 text-center text-white text-[20px] font-semibold shadow-lg backdrop-blur-md hover:bg-[rgba(95,81,140,0.4)] transition-colors cursor-pointer"
                style={{ backgroundColor: "rgba(95, 81, 140, 0.3)" }} // glossy purple
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTogetherSection;