import React from 'react';

const LoggedInIndicator = ({ username }) => {
  return (
    <div className="loggedin-indicator">
      <p>Logged in as {username}</p>
    </div>
  );
};

export default LoggedInIndicator;
