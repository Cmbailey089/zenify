import React from 'react';

const LoggedInIndicator = ({ username }) => {
  console.log('Username:', username);

  return (
    <div className="loggedin-indicator">
      <p>Logged in as {username}</p>
    </div>
  );
};

export default LoggedInIndicator;

