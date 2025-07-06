import React from 'react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-blue-600 text-white py-16 text-center px-4">
      <h2 className="text-3xl font-bold">Start Your Journey with Britz Minds</h2>
      <p className="mt-4 text-lg">Sign up now and begin learning in minutes.</p>
      <button
        onClick={() => navigate('/auth/login')}
        className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        Get Started
      </button>
    </section>
  );
};

export default CallToAction;
