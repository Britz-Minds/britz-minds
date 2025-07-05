import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Welcome to Britz Minds 🚀</h1>
        <p>Your gateway to personalized, fast-paced learning.</p>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
