import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Getting Started with React and Tailwind CSS',
      date: 'March 15, 2024',
      author: 'John Doe',
      excerpt: 'Learn how to build modern web applications using React and Tailwind CSS. This comprehensive guide covers everything you need to know.',
      image: 'https://via.placeholder.com/400x250/6139E2/ffffff?text=React+%26+Tailwind',
    },
    {
      title: 'The Future of Web Development',
      date: 'March 10, 2024',
      author: 'Jane Smith',
      excerpt: 'Explore the emerging trends and technologies that are shaping the future of web development in 2024 and beyond.',
      image: 'https://via.placeholder.com/400x250/6139E2/ffffff?text=Web+Development',
    },
    {
      title: 'Best Practices for Mobile App Design',
      date: 'March 5, 2024',
      author: 'Mike Johnson',
      excerpt: 'Discover the key principles and best practices for creating exceptional mobile app experiences that users love.',
      image: 'https://via.placeholder.com/400x250/6139E2/ffffff?text=Mobile+Design',
    },
    {
      title: 'SEO Tips for Modern Websites',
      date: 'February 28, 2024',
      author: 'Sarah Williams',
      excerpt: 'Boost your website\'s visibility with these proven SEO strategies and techniques for 2024.',
      image: 'https://via.placeholder.com/400x250/6139E2/ffffff?text=SEO+Tips',
    },
    {
      title: 'Building Scalable Applications',
      date: 'February 20, 2024',
      author: 'David Brown',
      excerpt: 'Learn the architectural patterns and strategies for building applications that can scale with your business.',
      image: 'https://via.placeholder.com/400x250/6139E2/ffffff?text=Scalable+Apps',
    },
    {
      title: 'UI/UX Design Trends 2024',
      date: 'February 15, 2024',
      author: 'Emily Davis',
      excerpt: 'Stay ahead of the curve with the latest UI/UX design trends that are defining digital experiences in 2024.',
      image: 'https://via.placeholder.com/400x250/6139E2/ffffff?text=Design+Trends',
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest insights, tips, and trends in web development, 
          design, and digital marketing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#6139E2] transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <button className="text-[#6139E2] font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;