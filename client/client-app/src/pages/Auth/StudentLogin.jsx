import React, { useState } from 'react';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Call Student Login API
    alert('Student login attempted');
  };

  return (
    <div className="auth-container">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Student Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default StudentLogin;
