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
          <NavLink to="/" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            About
          </NavLink>
          <NavLink to="/videos" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            Videos
          </NavLink>
          <NavLink to="/sign-up" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;


