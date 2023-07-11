import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import VideoLogo from "./VideoLogo"; // Updated import statement

const Navbar = () => {
  return (
    <>
      <Nav>
        <VideoLogo /> {/* Updated component usage */}
        
        <Bars />
        
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/videos">
            Videos
          </NavLink>
          <NavLink to="/sign-up">
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

