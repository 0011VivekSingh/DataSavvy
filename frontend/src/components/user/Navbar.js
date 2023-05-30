import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSheetContext } from '../../context/SheetProvider';
import app_config from '../../config';
import { useUserContext } from '../../context/UserProvider';

const Navbar = () => {
  const { selTool, setSelTool } = useSheetContext();
  const { toolpack } = app_config;

  const [modalOpen, setModalOpen] = useState(false);

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
      <nav className="navbar navbar-expand-md navbar-light bg-light" style={{ height: '80px' }}>
        {/* Container wrapper */}
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <NavLink className="navbar-brand mt-2 mt-lg-0" to="/main/home">
              <img src="/ds.png" height={60} alt="MDB Logo" loading="lazy" />
            </NavLink>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      
          
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/useprofile">
                  UserProfile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/user/Managedataset">
                  ManageDataset
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/Managetools">
                  ManageTools
                </NavLink>
              </li>

              
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/user/Feedback">
                  Feedback
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/excelsheet">
                  Toolpack
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/Toolbar">
                  Toolbar
                </NavLink>
              </li>
              
            </ul>
            {/* Left links */}
          </div>
          {showAvatar()}

          {/* Collapsible wrapper */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://www.freeiconspng.com/thumbs/analytic-icon/data-analytic-icon-6.png"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                {Object.entries(toolpack).map((tool) => (
                  <li>
                    <a role="button" class="dropdown-item" onClick={(e) => setSelTool(tool[1])}>
                      {tool[1].name}
                    </a>
                    {/* <p className="text-small text-muted">{toolpack[tool].type}</p> */}
                  </li>
                ))}
              </ul>
            </div>
          </ul>
          <p className="fw-bold my-auto">{selTool ? selTool.name : 'No Tool selected'}</p>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
