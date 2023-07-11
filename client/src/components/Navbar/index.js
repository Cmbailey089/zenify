import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import VideoLogo from './VideoLogo';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, username }) => {
  console.log('loggedIn:', loggedIn);
  console.log('username:', username);

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
          <NavLink to="/videos" activeStyle>
            <button className="nav-link-button">Videos</button>
          </NavLink>
          {!loggedIn ? (
            <>
              <NavLink to="/sign-up" activeStyle>
                <button className="nav-link-button">Sign up</button>
              </NavLink>
              <NavLink to="/sign-in" activeStyle>
                <button className="nav-link-button">Sign In</button>
              </NavLink>
            </>
          ) : null}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
