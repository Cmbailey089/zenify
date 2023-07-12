import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import VideoLogo from './VideoLogo';
import { Link } from 'react-router-dom';
import LoggedInIndicator from './LoggedInIndicator';
import SignOut from './SignOut';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

const Navbar = ({ loggedIn, username, handleSignOut }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Nav>
        <VideoLogo />
        <Bars onClick={toggleDropdown} />
        <NavMenu className={dropdownOpen ? 'active' : ''}>
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
              <LoggedInIndicator username={username} />
              <button className="nav-link-button" onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          )}
          {!loggedIn && (
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


