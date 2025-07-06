import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import CourseCard from '../../components/CourseCard';

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolled = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/users/courses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching enrolled courses');
      }
    };
    fetchEnrolled();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-3xl font-bold mb-6 text-accent">Your Enrolled Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EnrolledCourses;