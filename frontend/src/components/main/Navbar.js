import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSheetContext } from '../../context/SheetProvider';
import app_config from '../../config';
import ReactModal from 'react-modal-resizable-draggable';

import { useUserContext } from '../../context/UserProvider';


const Navbar = () => {
  const url = app_config.apiUrl;

  const { loggedIn, setLoggedIn, logout } = useUserContext();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const showAvatar = () => {
    if (loggedIn)
      return (
        <div className="dropdown">
          <a
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            {currentUser !== null && (
              <img
                src={
                  currentUser.avatar
                    ? `${url}/${currentUser.avatar}`
                    : 'https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-avatar-placeholder-abstract-white-blue-green-png-image_3918476.jpg'
                }
                className="rounded-circle"
                height={30}
              />
            )}
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="/user/userprofile">
                Profile
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" onClick={logout} type="button">
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-1 mt-lg-0" href="#">
              <img src="/pp.png" height={35} width={35} className="d-inline-block align-top" alt="MDB Logo" loading="lazy" />
              <b>DATASAVVY</b>
            </a>

            {/* Left links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  <b>Home</b>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/login">
                 <b>Login</b> 
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                <b>  Signup </b>
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/feedback">
                <b>  Feedback </b>
                </NavLink>
              </li>
              
            </ul>

            {showAvatar()}

            {/* Left links */}
          </div>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
