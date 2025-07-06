import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Welcome to Britz Minds</h1>
      <p className="mt-4 text-lg text-gray-600">
        AI-powered micro-learning for modern minds. Build your skills, fast and smart.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Explore Courses
      </button>
    </section>
  );
};

export default HeroSection;