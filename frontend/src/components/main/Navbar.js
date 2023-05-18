import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
	return (
		<>
  {/* Navbar */}
  <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
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
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        {/* Navbar brand */}
        <a className="navbar-brand mt-1 mt-lg-0" href="#">
          <img
            src="/pp.png"
            height={35}
            width={35}
            className='d-inline-block align-top'
            alt="MDB Logo" 
            loading="lazy"
          />
          <b>DATASAVVY</b> 
        </a>
        
        {/* Left links */}
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
         
         
         
          <li className="nav-item">
		  <NavLink   className="nav-link" to="/main/home">
            Home
            
			</NavLink>
          </li>


          <li className="nav-item">
            <NavLink className="nav-link" to="/main/login">
              login
            </NavLink>
          </li>

		  
          <li className="nav-item">
          <NavLink className="nav-link" to="/main/signup">
              Signup
          
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/user/toolpack">
              Toolpack
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/main/feedback">
              Feedback
          
            </NavLink>
          </li>


        </ul>
        {/* Left links */}
      </div>
      
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

	)
}





export default Navbar