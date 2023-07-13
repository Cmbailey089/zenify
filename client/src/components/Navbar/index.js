import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import VideoLogo from './VideoLogo';
import { Link } from 'react-router-dom';
import LoggedInIndicator from './LoggedInIndicator';
import SignOut from './SignOut';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const Navbar = ({ loggedIn, username, handleSignOut }) => {
  const [toggle, setToggle] = useState(false);
  // console.log('loggedIn:', loggedIn);
  // console.log('username:', username);

  const handleToggle = ()=> {
    setToggle(!toggle);
    console.log('click')
  }

  return (
    <>
      <Nav>
        <VideoLogo />
        <Bars onClick={handleToggle}/>
        <DropdownMenu visible={toggle}/>
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

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { ReactComponent as Hamburger } from "./assets/Hamburger.svg";
// import LoggedInIndicator from "./LoggedInIndicator";
// import VideoLogo from "./VideoLogo";
// import "./Navbar.css";
// const Navbar = ({ loggedIn, username, handleSignOut }) => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar);
//   };
//   return (
//     <nav className="navbar">
//       <div className="menu-icon" onClick={handleShowNavbar}>
//         <Hamburger />
//       </div>
//       <div className="container">
//         <div className="logo">
//           <VideoLogo />
//         </div>
//         <div className={`nav-elements  ${showNavbar && "active"}`}>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             {loggedIn && (
//               <>
//                 <li>
//                   <NavLink to="/about">About</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/videos">Videos</NavLink>
//                 </li>
//               </>
//             )}
//             {!loggedIn && (
//               <>
//                 <li>
//                   <NavLink to="/sign-in">Sign In</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/sign-up">Sign Up</NavLink>
//                 </li>
//               </>
//             )}
//             {loggedIn && (
//               <>
//                 <li>
//                   <LoggedInIndicator username={username} />
//                 </li>
//                 <li>
//                   <button className="nav-link-button" onClick={handleSignOut}>
//                     Sign Out
//                   </button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
