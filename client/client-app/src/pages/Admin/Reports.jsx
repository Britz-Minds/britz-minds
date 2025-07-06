import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const Reports = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-4 text-accent">Reports & Analytics</h1>
        <p className="text-secondary">Graphs and insights will be added here soon.</p>
      </main>
      <Footer />
    </>
  );
};

export default Reports;
