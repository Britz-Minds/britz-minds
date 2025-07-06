import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const EducatorDashboard = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-3xl font-bold mb-6 text-accent">Welcome, Educator</h1>
        <p className="text-secondary">Overview of your uploaded courses and earnings.</p>
      </main>
      <Footer />
    </>
  );
};

export default EducatorDashboard;