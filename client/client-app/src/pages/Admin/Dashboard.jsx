import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-accent">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary p-6 rounded shadow">Users</div>
          <div className="bg-primary p-6 rounded shadow">Courses</div>
          <div className="bg-primary p-6 rounded shadow">Reports</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminDashboard;