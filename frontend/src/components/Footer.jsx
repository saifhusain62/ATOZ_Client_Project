import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import A2Z from '../assets/A2Z.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden py-12 mt-5">
      {/* Background A2Z */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none">
       <img src={A2Z} alt="" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-14 pt-[260px] sm:pt-[300px] lg:pt-[340px] pb-8 items-center ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10">
          {/* Left Section */}
          <div className="md:col-span-5">
            <h2 className="text-black font-bold uppercase leading-[1.05] text-[34px] sm:text-[42px] lg:text-[46px] max-w-[520px]">
              Join Us In Discovering What The Future Holds
            </h2>

            {/* Email input line */}
            <div className="mt-12 max-w-[350px]">
              <div className="flex items-center justify-between border-b border-black pb-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent outline-none text-[18px] text-black placeholder:text-black"
                />
                <button className="ml-4 w-6 h-6 rounded-full bg-[#6039e3] text-white flex items-center justify-center hover:opacity-90 transition">
                  <FaArrowUp className="text-[10px] rotate-45" />
                </button>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="md:col-span-1 flex md:justify-center">
            <div className="flex md:flex-col gap-5 text-black text-[20px]">
              <a
                href="#"
                className="hover:text-[#6039e3] transition-colors duration-300"
              >
                <RxCross2 />
              </a>
              <a
                href="#"
                className="hover:text-[#6039e3] transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="hover:text-[#6039e3] transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-[#6039e3] transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div className="md:col-span-2">
            <ul className="space-y-4 text-[18px] text-black font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-[#6039e3] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6039e3] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6039e3] transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6039e3] transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6039e3] transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                {/* <a
                  href="#"
                  className="hover:text-[#6039e3] transition-colors duration-300"
                >
                  Privacy Policy
                </a> */}
                <Link to="/privacy-policy" className="hover:text-[#6039e3] transition-colors duration-300">
                   Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#6039e3] transition-colors duration-300"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <div className="space-y-8 text-[18px] text-black font-medium leading-[1.4]">
              <p>
                6107 Thomas Dr. Springfield, VA 22150
                <br />
                Tx-75078, USA
              </p>

              <p>
                571 202-6607
                <br />
                276 444-7023
              </p>

              <p>
                <a
                  href="mailto:clients@azzrepro.com"
                  className="hover:text-[#6039e3] transition-colors duration-300"
                >
                  clients@azzrepro.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[14px] text-[#a7a7a7]">
  <p>© 2026 A2Z Real Estate Pro. All rights reserved.</p>
  <p>
    Design Develop and Maintain by{" "}
    <a 
      href="https://relyn.io/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[#a7a7a7] hover:text-gray-900 underline"
    >
      Relyn LLC
    </a>
    .
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;