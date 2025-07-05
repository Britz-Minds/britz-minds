// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import AdminLogin from './pages/Auth/AdminLogin';
import EducatorLogin from './pages/Auth/Educator';
import StudentLogin from './pages/Auth/StudentLogin';

import AdminDashboard from './pages/Admin/Dashboard';
import ManageCourses from './pages/Admin/ManageCourses';
import Reports from './pages/Admin/Reports';

import EducatorDashboard from './pages/Educator/Dashboard';
import UploadCourse from './pages/Educator/UploadCourse';
import Earnings from './pages/Educator/Earnings';

import StudentDashboard from './pages/Student/Dashboard';
import EnrolledCourses from './pages/Student/EnrolledCourses';
import Quiz from './pages/Student/Quiz';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* Auth */}
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/educator" element={<EducatorLogin />} />
        <Route path="/login/student" element={<StudentLogin />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-courses" element={<ManageCourses />} />
        <Route path="/admin/reports" element={<Reports />} />

        {/* Educator */}
        <Route path="/educator/dashboard" element={<EducatorDashboard />} />
        <Route path="/educator/upload-course" element={<UploadCourse />} />
        <Route path="/educator/earnings" element={<Earnings />} />

        {/* Student */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/enrolled" element={<EnrolledCourses />} />
        <Route path="/student/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
