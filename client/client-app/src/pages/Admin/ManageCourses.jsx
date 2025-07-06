import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const ManageCourses = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-4 text-accent">Manage Courses</h1>
        <p className="text-secondary">List of courses with options to edit/delete (coming soon)</p>
      </main>
      <Footer />
    </>
  );
};

export default ManageCourses;