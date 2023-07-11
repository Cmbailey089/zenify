import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import VideoLogo from './VideoLogo';

const Navbar = () => {
  return (
    <>
      <Nav>
        <VideoLogo />
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
          <button className="nav-link-button">Home</button>
          </NavLink>
          <NavLink to="/about" activeStyle>
          <button className="nav-link-button">About</button>
          </NavLink>
          <NavLink to="/videos" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            Videos
          </NavLink>
          <NavLink to="/sign-up" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
        <button className="sign-in-button">Sign In</button>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;


