// import React from 'react'
import React, { useState } from 'react';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ...form submission and validation logic can be added here

  return (
    <div className="signin-container">
      <form className="signin-form">
        <h1 className="signin-title">Sign In</h1>
        <input
          className="signin-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="signin-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signin-submit-btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;