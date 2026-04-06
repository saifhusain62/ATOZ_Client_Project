import React from 'react';

const About = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-600 mb-6">
            We are a passionate team dedicated to delivering exceptional results 
            for our clients. Our journey started with a simple vision: to make a 
            positive impact in the digital world.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With years of experience and a commitment to excellence, we've helped 
            numerous businesses achieve their goals through innovative solutions 
            and creative strategies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border-l-4 border-[#6139E2] pl-4">
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge solutions that drive growth 
                and success in the digital age.
              </p>
            </div>
            <div className="border-l-4 border-[#6139E2] pl-4">
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading innovator in our industry, setting new standards 
                for quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;