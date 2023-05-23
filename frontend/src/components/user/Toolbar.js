import React from 'react'
import { NavLink } from 'react-router-dom'

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
  <div className="container-fluid">
    {/* navbar brand */}
  <a className="navbar-brand mt-1 mt-lg-0" href="#">
          <img
            src="/pp.png"
            height={35}
            width={35}
            className='d-inline-block align-top'
            alt="Datasavvy Logo" 
            loading="lazy"
            
          />
          <b>DATASAVVY</b> 
        </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="# " to="/main/home">
           <b>Home</b> 
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/managedatasheet">
          <b>ManageDataSheet</b>
            </NavLink>
          </li>
          
        <li className="nav-item">
          <NavLink className="nav-link" to="/user/managedataset">
          <b>ManageDataset</b>
            </NavLink>
          </li>
          
        
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Toolbar