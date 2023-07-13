import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import VideoLogo from './VideoLogo';
import { Link } from 'react-router-dom';
import LoggedInIndicator from './LoggedInIndicator';
import SignOut from './SignOut';

const Navbar = ({ loggedIn, username, handleSignOut }) => {
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
          {loggedIn && (
            <>
              <NavLink to="/about" activeStyle>
                <button className="nav-link-button">About</button>
              </NavLink>
              <NavLink to="/videos" activeStyle>
                <button className="nav-link-button">Videos</button>
              </NavLink>
            </>
          )}
          {loggedIn ? (
            <>
              <LoggedInIndicator username={username} />
              <button className="nav-link-button" onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <>
              <NavLink to="/sign-up" activeStyle>
                <button className="nav-link-button">Sign up</button>
              </NavLink>
              <NavLink to="/sign-in" activeStyle>
                <button className="nav-link-button">Sign In</button>
              </NavLink>
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;


