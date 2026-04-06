import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['User-Friendly', 'Scalable', 'Secure'],
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user experience.',
      features: ['Modern Design', 'User Research', 'Prototyping'],
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies to grow your online presence.',
      features: ['Social Media', 'Content Marketing', 'Analytics'],
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how we can help transform your business with our comprehensive 
          range of professional services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#6139E2] rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-[#6139E2] rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;