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
          <NavLink to="/" activeStyle>
          <button className="nav-link-button">Home</button>
          </NavLink>
          <NavLink to="/about" activeStyle>
          <button className="nav-link-button">About</button>
          </NavLink>
          <NavLink to="/videos" activeStyle>
          <button className="nav-link-button">Videos</button>
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
          <button className="nav-link-button">Sign up</button>
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

