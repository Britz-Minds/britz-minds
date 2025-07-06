import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const Educator = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-3xl font-bold text-accent mb-4">Educator Portal</h1>
        <p className="text-secondary">Access your dashboard, upload new courses, and monitor engagement.</p>
      </main>
      <Footer />
    </>
  );
};

export default Educator;