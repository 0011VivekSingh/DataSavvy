import React from 'react'


const Home = () => {
  return (
    <>
    <>
  <title>Home Page</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  />
  {/* Navbar */}
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      Brand Name
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>


  {/* Cover Page */}
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Safe and secure data handling with DataSavvy</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </p>
    </div>
  </div>

  {/* Section */}
  <section className="container my-5">
    <div className="row">
      <div className="col-md-4">
        <h2>Section 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.
        </p>
      </div>
      <div className="col-md-4">
        <h2>Section 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.
        </p>
      </div>
      <div className="col-md-4">
        <h2>Section 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.
        </p>
      </div>
    </div>
  </section>
  

  {/* Bootstrap JS */}
</>

  </>
  
    
  )

    



  
}

        export default Home