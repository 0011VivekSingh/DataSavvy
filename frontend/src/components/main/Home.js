import React from 'react';

const Home = () => {
  return (
    <>
      <header>
        {/* Cover Page */}
        <div className=" container-fluid  " style={{ backgroundImage: "url('/hhh.jpg')",backgroundSize: "cover", backgroundRepeat:"no-repeat" }}>
          <div className="container">

            <div className="row ">
              <div className="col-md-6 my-auto">
                <h1 className="display-4 fw-bold text-white">Safe and Secure Data handling with 
                <span style={{color:"orange"}}> DataSavvy </span></h1>

                <p className="h5 mt-4" style={{ color: 'white' }}>
                  "Unlock the power of data with DataSavvy - Your personalized data analysis platform."
                </p>
              </div>

              <div className="col-md-6">
                <img src="/manpic.png" className="d-block w-100 m-auto mt-4 animated" alt="Bootstrap Themes" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </header>

         


        
     
      <div data-draggable="true" className="" style={{ position: 'relative',backgroundColor:'#fffff' }}>
        <section draggable="false" className="container pt-5 mt-2" data-v-271253ee="" style={{backgroundImage:"url('/hhh.jpg')" ,borderRadius:"20px"}}>
          <section className="mb-2 text-center">
            <div className="d-flex justify-content-center">
              <div className="text-center" >
                <h2 className="fw-bold mb-3 text-center">
                  <span className="me-2 text-white">Why is it so</span>
                  <u style={{color:"orange"}}>great?</u>
                </h2>
                <p className="mb-5 text-white">
                DataSavvy is a customizable, web-based platform that provides a comprehensive range of data analysis tools, including visualization, statistics, and user-defined formula-based tools, with automatic updates and platform-independence.
                </p>
              </div>
            </div>
            <div className="row gx-lg-5">
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <div className="p-2 d-inline-block mb-3">
                  <img src="/customization.png" alt="" height={60} width={60} />
                </div>
                <h5 className="fw-bold mb-3  " style={{color:"orange"}}>Customisation</h5>
                <p className="text-white mb-1">DataSavvy offers customization  that allows users to create their own tools by just writing formula  The system generates custom tools according to user requirements. </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <div className="p-2  d-inline-block mb-3">
                <img src="/user-experience.png" alt="" height={60} width={60} />
                </div>
                <h5 className="fw-bold mb-3 " style={{color:"orange"}}>Comprehensive platform</h5>
                <p className="text-white mb-1">DataSavvy is a website offering a variety of data analysis tools, including visualization, statistics, with the aim of being a comprehensive platform for all data analysis needs.</p>
              </div>

              <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
                <div className="p-2  d-inline-block mb-3">
                <img src="/data-analysis.png" alt="" height={60} width={60} />   
                </div>
                <h5 className="fw-bold mb-3" style={{color:"orange"}}> Flexible and Reliable</h5>
                <p className=" mb-1 text-white"> DataSavvy is a web-based application that offers data analysis tools , providing a reliable and flexible option with automatic updates and platform-independence.</p>
              </div>
              
            </div>
          </section>
        </section>
      </div>

     

      
      

       

        <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
        <div className="carousel-inner " >
         
          <div className="carousel-item active ">
            <img src="/bge.jpg" className="d-block w-100" alt="Wild Landscape" height={200} width={500} />
            <div class="carousel-caption d-none d-md-block">
              <h2>“Data is like garbage. You’d better know what you are going to do with it before you collect it.” 
              <br />
                ~ Mark Twain</h2>
            </div>
          </div>

          <div className="carousel-item ">
            <img
              src="/bge.jpg"
              className="d-block w-100"
              alt="Camera"
              height={200}
              width={500}
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>
                <div class="carousel-caption d-none d-md-block">
                  <h2>“Data is a tool for enhancing intuition.”
                    <br />
~ Hilary Mason, data scientist and founder of Fast Forward Labs</h2>
                </div>
              </h1>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src="/bge.jpg"
              className="d-block w-100"
              alt="quotes"
              height={200}
              width={500}
            />
            <div class="carousel-caption d-none d-md-block">
              <h2>“We are surrounded by data, but starved for insights.”
                <br />
                
~ Jay Baer, marketing and customer experience expert</h2>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden  ">Previous</span>
        </button>
        <button className="carousel-control-next btn-primary" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section>
      <section >
  <div className="row d-flex justify-content-center ">
    <div className="col-md-10 col-xl-8 text-center">
      <h3 className="mb-4">Our Team</h3>
      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
      Welcome to our website! We're a dedicated team focused on delivering the best experience. With diverse expertise and customer-centric approach, we strive for excellence in design, user experiences, and solutions. Expect top-notch products and services that exceed expectations. Thank you for visiting, and get ready for an exceptional journey with us!




      </p>
    </div>
  </div>
  <div className="row text-center  d-flex justify-content-center  ">
    <div className="col-md-6 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          className="rounded-circle shadow-1-strong"
          width={150}
          height={150}
        />
      </div>
      <h5 className="mb-3">Vivek Singh</h5>
      <h6 className="text-primary mb-3">Web Developer</h6>
      
      
    </div>
    <div className="col-md-6 mb-5 mb-md-0">
      <div className=" text-center d-flex justify-content-center mb-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
          className="rounded-circle shadow-1-strong"
          width={150}
          height={150}
        />
      </div>
      <h5 className="mb-3">Arpita Shukla</h5>
      <h6 className="text-primary mb-3">fulll</h6>
     
    </div>
    
  </div>
</section>

  
</section>


      

      <div className="b-example-divider" />
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h3 className="display-4 fw-bold  mb-3">ABOUT US</h3>
            <p className="col-lg-8 fs-3">
              Below is an example form built entirely with Bootstrapâ€™s form controls. Each required form group has a validation state that can be triggered by attempting to
              submit the form without completing it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
          <div className="col-md-6 col-lg-7 d-none d-md-block dis-block my-auto ">
                
                <img
                  src="/gif3.gif"
                  alt="login form"
                  className="img-fluid "
                  style={{ borderRadius: "1rem 0 0 1rem",margin:'1 auto' }}
                />
              </div>
          </div>
        </div>
      </div>

      <div className="container-fluid col-xl-10 col-xxl-8 px-1 py-3" style= {{ backgroundColor: "#4093e4" }} >
        <>
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 fw-normal " style={{ color: "white" }}>Punhnny headline</h1>
              <p className="lead fw-normal">
                And an even wittier subheading to boot. Jumpstart your marketing
                efforts with this example based on Appleâ€™s marketing pages.
              </p>
              <a className="btn btn-outline-secondary" href="#">
                Coming soon
              </a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block" />
            <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
          </div>


          {/* Custom styles for this template */}




        </>
      </div>
      <>

</>


      









    </>
  );
};

export default Home;
