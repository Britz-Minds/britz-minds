import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const Quiz = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-4 text-accent">Quiz</h1>
        <p className="text-secondary">Auto-generated quiz questions will appear here.</p>
      </main>
      <Footer />
    </>
  );
};

export default Quiz;