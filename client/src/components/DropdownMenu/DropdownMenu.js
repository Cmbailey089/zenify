import React from 'react';
import './DropdownMenu.css'

const DropdownMenu = ({ visible }) => {
  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/videos">Videos</a>
        </li>
        <li>
          <a href="/sign-up">Sign up</a>
        </li>
        <li>
          <a href="/sign-in">Sign In</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
