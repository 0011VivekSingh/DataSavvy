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
  


  {/* Cover Page */}
  <div className="  container-fluid " style={{height:"100vh" , backgroundColor:"blueviolet"}}>
<div className="row ">

    <div className="col-lg-6 ">
      <h1 className="display-3 " style={{color:'white', margin:"15%",width:"100%" }}>Safe and Secure Data handling with DataSavvy</h1>
      <p className="lead display-5" style={{color:"black"}} >
      "Unlock the power of data with DataSavvy - Your personalized data analysis platform."
        
      </p>
    </div>

    <div className="col-lg-6"    >
      
      <img className='w-100' src="/section.png"  alt="" />
      
      </div>
    </div>
    </div>


  {/* Section */}
  <section className="container my-5">
    <div className="row">
      <div className="col-md-4">
        <h2>Interactive Interface</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.
        </p>
      </div>
      <div className="col-md-4">
        <h2>Customization</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.
        </p>
      </div>
      <div className="col-md-4">
        <h2>Reliable and Flexible</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.
        </p>
      </div>
    </div>
  </section>





  {/* Section End */}

  <div
  id="carouselExampleControls"
  className="carousel slide"
  data-mdb-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        className="d-block w-100"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        className="d-block w-100"
        alt="Camera"
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        className="d-block w-100"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselExampleControls"
    data-mdb-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselExampleControls"
    data-mdb-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* mobile metas */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
  {/* site metas */}
  <title>Contact</title>
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  {/* owl carousel style */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.0.0-beta.2.4/assets/owl.carousel.min.css"
  />
  {/* bootstrap css */}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
  {/* style css */}
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  {/* Responsive*/}
  <link rel="stylesheet" href="css/responsive.css" />
  {/* fevicon */}
  <link rel="icon" href="images/fevicon.png" type="image/gif" />
  {/* Scrollbar Custom CSS */}
  <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
  {/* Tweaks for older IEs*/}
  <link
    rel="stylesheet"
    href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
  />
  {/* owl stylesheets */}
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
    media="screen"
  />
  {/*header section start */}
  <div className="header_section header_bg">
    <div className="container">
      <nav className="navbar navbar-dark bg-dark">
        <a className="logo" href="index.html">
          <img src="images/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample01"
          aria-controls="navbarsExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="services.html">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="client.html">
                Client
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  {/*header section end */}
  <div className="contact_section layout_padding">
    <div className="container">
      <h1 className="touch_taital">Contact Us</h1>
      <div className="contact_section_2">
        <div className="row">
          <div className="col-md-6">
            <div className="email_text">
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Phone Numbar"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows={5}
                  id="comment"
                  name="Massage"
                  defaultValue={""}
                />
              </div>
              <div className="send_btn">
                <a href="#">SEND</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_main">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width={600}
                  height={400}
                  frameBorder={0}
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*footer section start */}
  <div className="footer_section layout_padding">
    <div className="container">
      <div className="address_main">
        <div className="address_text">
          <a href="#">
            <img src="images/map-icon.png" />
            <span className="padding_left_15">Loram Ipusm hosting web</span>
          </a>
        </div>
        <div className="address_text">
          <a href="#">
            <img src="images/call-icon.png" />
            <span className="padding_left_15">+7586656566</span>
          </a>
        </div>
        <div className="address_text">
          <a href="#">
            <img src="images/mail-icon.png" />
            <span className="padding_left_15">demo@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="footer_section_2">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h4 className="link_text">Useful link</h4>
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="link_text">web design</h4>
            <p className="footer_text">
              Lorem ipsum dolor sit amet, consectetur adipiscinaliquaL
              oreadipiscing{" "}
            </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="link_text">social media</h4>
            <div className="social_icon">
              <ul>
                <li>
                  <a href="#">
                    <img src="images/fb-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/twitter-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/linkedin-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/youtub-icon.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4 className="link_text">Our Branchs</h4>
            <p className="footer_text_1">
              Lorem ipsum dolor sit amet, consectetur
              adipiscinaliquaLoreadipiscing{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*footer section end */}
  {/*copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <p className="copyright_text">
        Copyright 2023 All Right Reserved By{" "}
        <a href="https://html.design">Free Html Templates</a> Distributed by:{" "}
        <a href="https://themewagon.com">ThemeWagon</a>
      </p>
    </div>
  </div>
  {/*copyright section end */}
  {/* Javascript files*/}
  {/* sidebar */}
  {/* javascript */}
</>





<div className="footer_section layout_padding">
  <div className="container">
    <div className="address_main">
      <div className="address_text">
        <a href="#">
          <img src="images/map-icon.png" />
          <span className="padding_left_15">Loram Ipusm hosting web</span>
        </a>
      </div>
      <div className="address_text">
        <a href="#">
          <img src="images/call-icon.png" />
          <span className="padding_left_15">+7586656566</span>
        </a>
      </div>
      <div className="address_text">
        <a href="#">
          <img src="images/mail-icon.png" />
          <span className="padding_left_15">demo@gmail.com</span>
        </a>
      </div>
    </div>
    <div className="footer_section_2">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <h4 className="link_text">Useful link</h4>
          <div className="footer_menu">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h4 className="link_text">web design</h4>
          <p className="footer_text">
            Lorem ipsum dolor sit amet, consectetur adipiscinaliquaL
            oreadipiscing{" "}
          </p>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h4 className="link_text">social media</h4>
          <div className="social_icon">
            <ul>
              <li>
                <a href="#">
                  <img src="images/fb-icon.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/twitter-icon.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/linkedin-icon.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/youtub-icon.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <h4 className="link_text">Our Branchs</h4>
          <p className="footer_text_1">
            Lorem ipsum dolor sit amet, consectetur
            adipiscinaliquaLoreadipiscing{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  

  {/* Bootstrap JS */}
</>

  </>
  
    
  )

    



  
}

        export default Home