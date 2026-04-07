import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';
import { HiX } from 'react-icons/hi';
import { TbMenu3 } from "react-icons/tb";
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Faq', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaFacebookF />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 relative overflow-hidden bg-[#ebebfa] py-2">
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Menu Items */}
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
             <img src={Logo} alt="" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2 ml-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-[#6139E2] text-white'
                      : 'border border-[#6139E2] bg-white text-black hover:bg-[#6139E2] hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Social + Contact Button */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6139E2] hover:opacity-70 transition-all duration-300 text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Us Button with Arrow */}
            <div className="relative inline-flex flex-col items-center group">
              <div className="relative inline-block">
                <button className="px-8 py-3 bg-[#6139E2] text-white rounded-full text-sm font-medium hover:bg-[#4f2ab8] transition-all duration-300 pr-12">
                  Contact Us
                </button>
                <button className="absolute -right-1 top-1/3 -translate-y-1/2 w-6 h-6 p-0.5 bg-white border border-[#6139E2] rounded-full flex items-center justify-center text-[#6139E2] hover:bg-[#6139E2] hover:text-white transition-all duration-300 mr-6 mt-2">
                  <HiArrowUpRight className="text-xl" />
                </button>
              </div> 
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#6139E2] focus:outline-none"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <TbMenu3  className="h-6 w-6 text-[#6139E2]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-slideDown">
            {/* Menu Items */}
            <div className="flex flex-col space-y-2 mb-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 text-center ${
                    isActive(item.path)
                      ? 'bg-[#6139E2] text-white'
                      : 'border border-[#6139E2] bg-white text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6139E2] hover:opacity-70 transition-all duration-300 text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <div className="flex items-center justify-center">
              <div className="relative inline-flex flex-col items-center">
                <div className="relative inline-block">
                  <button className="px-8 py-2 bg-[#6139E2] text-white rounded-full text-sm font-medium pr-12">
                    Contact Us
                  </button>
                  <button className="absolute -right-1 top-1/3 -translate-y-1/2 w-6 h-6 p-0.5 bg-white border border-[#6139E2] rounded-full flex items-center justify-center text-[#6139E2] hover:bg-[#6139E2] hover:text-white transition-all duration-300 mr-6 mt-2">
                    <HiArrowUpRight className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;