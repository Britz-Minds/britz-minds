import React from 'react';

const features = [
  {
    title: "Auto Flashcards",
    desc: "Learn key points with AI-generated flashcards.",
  },
  {
    title: "Bite-sized Videos",
    desc: "Short, focused lessons that fit your schedule.",
  },
  {
    title: "AI Quizzes",
    desc: "Instant practice quizzes based on video content.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-8">Why Britz Minds?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {features.map((f, i) => (
          <div key={i} className="bg-blue-100 p-6 rounded-lg shadow-sm max-w-sm mx-auto">
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;