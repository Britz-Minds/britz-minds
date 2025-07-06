import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const StudentDashboard = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-3xl font-bold mb-6 text-accent">Student Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-accent">Your Courses</h2>
            <p className="text-secondary mt-2">Track your progress and revisit lessons.</p>
          </div>
          <div className="bg-primary p-6 rounded shadow">
            <h2 className="text-xl font-semibold text-accent">Quizzes</h2>
            <p className="text-secondary mt-2">Test your knowledge with AI-powered quizzes.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentDashboard;