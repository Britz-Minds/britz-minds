import React, { useState } from 'react';

const EducatorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Call Educator Login API
    alert('Educator login attempted');
  };

  return (
    <div className="auth-container">
      <h2>Educator Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Educator Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default EducatorLogin;
