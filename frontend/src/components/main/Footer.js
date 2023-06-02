import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-white"  >
     
      {/* Grid container */}
      <div className="container p-1 pb-0">
        {/* Section: Social media */}
        <section className="">
          {/* Facebook */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f" />
          </a>
          {/* Twitter */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter" />
          </a>
          {/* Google */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google" />
          </a>
          {/* Instagram */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram" />
          </a>
          {/* Linkedin */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          {/* Github */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github" />
          </a>

        </section>
        {/* Section: Social media */}\


        {/* <svg
        style={{
          transition: ".3s"
        }}
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
       
      >
        <defs>
          <linearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
            <stop stopColor="rgba(62, 212.344, 243, 1)" offset="0%" />
            <stop stopColor="rgba(11, 213.673, 255, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill="url(#a)"
          d="M0 245l60 32.7C120 310 240 376 360 408.3 480 441 600 441 720 367.5S960 147 1080 147s240 147 360 196 240 0 360-8.2c120-7.8 240 24.2 360-16.3s240-155.5 360-212.3C2640 49 2760 49 2880 98s240 147 360 204.2c120 56.8 240 73.8 360 57.1 120-16.3 240-65.3 360-98 120-32.3 240-49.3 360-40.8s240 40.5 360 49 240-8.5 360 0 240 40.5 360 8.2c120-32.7 240-130.7 360-138.9 120-7.8 240 73.2 360 114.4 120 40.8 240 40.8 360 65.3s240 73.5 360 57.2c120-16.7 240-97.7 360-155.2 120-57.5 240-89.5 360-114.3 120-24.2 240-41.2 360 8.1C8040 163 8160 278 8280 343s240 82 300 89.8l60 8.2v49H0z"
        />
      </svg> */}
      </div>

      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-1 bg-dark text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          DataSavvy.com
        </a>
      </div>

      {/* Copyright */}
    </footer>



  )
}

export default Footer