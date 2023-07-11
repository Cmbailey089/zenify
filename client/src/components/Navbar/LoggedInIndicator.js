import React from 'react';
import './LoggedInIndicator.css';

const LoggedInIndicator = ({ username }) => {
  console.log('Username:', username);

  return (
    <div className="loggedin-indicator">
      <p>Logged in as: {username}</p>
    </div>
  );
};

export default LoggedInIndicator;

