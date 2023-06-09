import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white"  >
     
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
         
          {/* Instagram */}
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram" />
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
        {/* Section: Social media */}


       
      </div>
     {/* Grid container */}
      {/* Copyright */}
      <div
        className=" text-center p-1 bg-dark text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023Copyright:
        <a className="text-white mt-10" href="https://mdbootstrap.com/">
          DataSavvy.com
        </a>
        <br/>
                      
        
      <a className="text-white  " href="https://mdbootstrap.com/">
          ContactUs:Vivek738063@gmail.com
        </a>
        
      </div>
      
      {/* Copyright */}
    </footer>



  )
}

export default Footer