import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
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
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
        <button className="sign-in-button">Sign In</button>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
