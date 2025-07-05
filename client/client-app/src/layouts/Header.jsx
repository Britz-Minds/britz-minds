import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header style={{ background: "#f2f2f2", padding: "1rem" }}>
    <h2>Britz Minds</h2>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/admin-login">Admin</Link> |{" "}
      <Link to="/educator-login">Educator</Link> |{" "}
      <Link to="/student-login">Student</Link>
    </nav>
  </header>
);

export default Header;
