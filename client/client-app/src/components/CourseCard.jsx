import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-primary rounded-xl p-4 text-white shadow hover:scale-[1.02] transition-all">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p className="text-secondary">{course.description}</p>
    </div>
  );
};

export default CourseCard;
