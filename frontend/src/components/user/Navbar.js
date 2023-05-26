import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
  {/* Navbar */}
  <nav className="navbar navbar-expand-md navbar-light bg-light">
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
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src=""
            height={15}
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
         
{/*          
          <li className="nav-item">
		  <NavLink   className="nav-link" to="/user/Home">
              home
            
			</NavLink>
          </li> */}
          <li className="nav-item">
		  <NavLink   className="nav-link" to="/user/useprofile">
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

		  
          <li className="nav-item">
          <NavLink className="nav-link" to="/user/Signup">
              Signup
          
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/user/Feedback">
              Feedback
          
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/user/Toolpack">
              Toolpack
          
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/user/Toolbar">
              Toolbar
          
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/user/excelsheet">
              Excelsheet
          
            </NavLink>
          </li>


        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Icon */}
        <a className="text-reset me-3" href="#">
          <i className="fas fa-shopping-cart" />
        </a>
        {/* Notifications */}
        <div className="dropdown">
          <a
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell" />
            <span className="badge rounded-pill badge-notification bg-danger">
              1
            </span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
                Some news
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another news
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        
              
      </div>
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

	)
}

export default Navbar