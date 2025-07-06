import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

const UploadCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend logic to upload course will go here
    alert('Course submitted!');
  };

  return (
    <>
      <Header />
      <main className="p-6 bg-background min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-4 text-accent">Upload Course</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-primary text-white border border-secondary"
            required
          />
          <textarea
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded bg-primary text-white border border-secondary"
            required
          ></textarea>
          <input
            type="file"
            onChange={(e) => setVideo(e.target.files[0])}
            className="w-full bg-primary text-white"
            required
          />
          <button type="submit" className="bg-accent text-primary font-semibold px-4 py-2 rounded hover:bg-yellow-400">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default UploadCourse;