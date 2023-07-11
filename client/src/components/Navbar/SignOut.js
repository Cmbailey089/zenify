import React from 'react';

const SignOut = ({ handleSignOut }) => {
  const handleSignOutClick = () => {
    handleSignOut();
  };

  return (
    <button className="nav-link-button" onClick={handleSignOutClick}>
      Sign Out
    </button>
  );
};

export default SignOut;
