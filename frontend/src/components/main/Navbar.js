import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSheetContext } from '../../context/SheetProvider';
import app_config from '../../config';
import ReactModal from 'react-modal-resizable-draggable';

const Navbar = () => {
  const { selTool, setSelTool } = useSheetContext();
  const { toolpack } = app_config;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div class="modal fade" id="toolpack" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <ReactModal
        initWidth={700}
        initHeight={300}
        onFocus={() => console.log('Modal is clicked')}
        className={'my-modal-custom-class'}
        onRequestClose={(e) => setModalOpen(false)}
        isOpen={modalOpen}
      >
        <h3>My Modal</h3>

        <div className="body">
          <div className="card-body">
            <input className="form-control" />
            <button className="btn btn-primary">Calculate Mean</button>
          </div>
        </div>

        <button onClick={(e) => setModalOpen(false)}>Close modal</button>
      </ReactModal>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
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
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
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
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/user/toolpack">
                  Toolpack
                </NavLink>
              </li> */}
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
  );
};

export default Navbar;
