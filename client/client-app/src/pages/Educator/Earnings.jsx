import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const Earnings = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-4 text-accent">Earnings</h1>
        <p className="text-secondary">Monetization & payout info will appear here.</p>
      </main>
      <Footer />
    </>
  );
};

export default Earnings;