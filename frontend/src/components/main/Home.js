import React from 'react';

const Home = () => {
  return (
    <>
      <header>
        {/* Cover Page */}
        <div className=" container-fluid  " style={{ backgroundImage: "url('/hhh.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
          <div className="container">

            <div className="row ">
              <div className="col-md-6 my-auto">
                <h1 className="display-4 fw-bold text-white">Safe and Secure Data Analysis with
                  <span style={{ color: "orange" }}> DataSavvy </span></h1>

                <p className="h5 mt-5" style={{ color: 'white' }}>
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






      <div className="" style={{ position: 'relative', }}>
        <section draggable="false" className="container pt-6 mt-4 " data-v-271253ee="" style={{ backgroundImage: "url('/hhh.jpg')", borderRadius: "15px" }}>
          <section className="mb-4 me-0 text-center">
            <div className="d-flex justify-content-center">
              <div className="text-center mt-4" >
                <h2 className="fw-bold mb-3 text-center">
                  <span className="me-2 text-white">Why is it so</span>
                  <u style={{ color: "orange" }}>great?</u>
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
                <h5 className="fw-bold mb-3  " style={{ color: "orange" }}>Customisation</h5>
                <p className="text-white mb-4">DataSavvy offers customization  that allows users to create their own tools by just writing formula  The system generates custom tools according to user requirements. </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <div className="p-2  d-inline-block mb-3">
                  <img src="/user-experience.png" alt="" height={60} width={60} />
                </div>
                <h5 className="fw-bold mb-3 " style={{ color: "orange" }}>Comprehensive platform</h5>
                <p className="text-white mb-4">DataSavvy is a website offering a variety of data analysis tools, including visualization, statistics, with the aim of being a comprehensive platform for all data analysis needs.</p>
              </div>

              <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
                <div className="p-2  d-inline-block mb-3">
                  <img src="/data-analysis.png" alt="" height={60} width={60} />
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "orange" }}> Flexible and Reliable</h5>
                <p className=" mb-4 text-white"> DataSavvy is a web-based application that offers data analysis tools , providing a reliable and flexible option with automatic updates and platform-independence.</p>
              </div>

            </div>
          </section>
        </section>
      </div>








      <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
        <div className="carousel-inner  d-flex align-items-center " >

          <div className="carousel-item active text-primary align-items-center "  >
            <img src="/h.jpg" className="d-block w-100" alt="Wild Landscape" height={300} width={600} />
            <div class="carousel-caption d-none d-md-block align-iten-center">
              <h2>“Data is like garbage. You’d better know what you are going to do with it before you collect it.”
                <br />
                ~ Mark Twain</h2>
            </div>
          </div>

          <div className="carousel-item ">
            <img
              src="/h.jpg"
              className="d-block w-100"
              alt="Camera"
              height={300}
              width={600}
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>
                <div class="carousel-caption d-none d-md-block">
                  <h2 >“Data is a tool for enhancing intuition.”
                    <br />
                    ~ Hilary Mason, data scientist and founder of Fast Forward Labs</h2>
                </div>
              </h1>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src="/h.jpg"
              className="d-block w-100"
              alt="quotes"
              height={300}
              width={600}
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









      <>
        <div id="preview" className="preview">
          <div />
          <div>


            <section className=" mb-4 mt-3" >

              <div className="card mb-3 " style={{ backgroundImage: "url('/hhh.jpg')" ,borderRadius:"15px" }} >

                <div className="row g-0 d-flex align-items-center">
                  <div className="col-lg-7 col-xl-5 d-none d-lg-flex "  >


                    <img
                      src="/ab.gif"
                      height={400}
                      width={400}
                      alt="about section"
                      className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                      aria-controls="#picker-editor"
                      style={{borderRadius:"15px"}}
                    />
                  </div>
                  <div className="col-lg-5 col-xl-7">
                    {" "}
                    <div className="card-body px-4 py-5 px-md-5">
                      {" "}
                      <h1 className="fw-bold text-center " style={{ color: "orange" }}>
                        ABOUT US
                      </h1>

                      <p className="text-light mb-4 fs-5">
                        Data Analysis Toolpaks is a set of data analysis tools.
                        DATASAVVY web-based application that offers data analysis tools, providing a reliable and flexible option with automatic updates and platform-independence.
                      </p>
                      <p className="mb-0 fs-5 text-light">
                        DataSavvy is a website offering a variety of data analysis tools, including visualization and statistics, to be a comprehensive platform for all data analysis needs.
                        DataSavvy offers customization  that allows users to create their own tools by just writing formula  The system generates custom tools according to user requirements.
                        DataSavvy is a web-based application that offers data analysis tools , providing a reliable and flexible option with automatic updates and platform-independence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>



          </div>
        </div>
      </>




      <section>




        <section className=' mt-3 ' style={{backgroundImage:"url('/hhh.jpg')"}}>
          <div className="row d-flex justify-content-center ">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 className="mb-4 mt-4 " style={{color:"orange"}}>Our Team</h3>
              <p className="mb-5 pb-2 mb-md-5 pb-md-0 text-light ">
                Welcome to our website! We're a dedicated team focused on delivering the best experience. With diverse expertise and customer-centric approach, we strive for excellence in design, user experiences, and solutions. Expect top-notch products and services that exceed expectations. Thank you for visiting, and get ready for an exceptional journey with us!


              </p>
            </div>
          </div>
          <div className="row text-center  d-flex justify-content-center  ">
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4 me-3">
                <img
                  src="/pp (2).png"
                  className="rounded-circle shadow-1-strong"
                  width={150}
                  height={150}
                />
              </div>
              <h5 className="mb-3 text-light">Vivek Singh</h5>



            </div>

            <div className="col-md-4 mb-5 mb-md-0">
              <div className=" text-center d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle shadow-1-strong"
                  width={150}
                  height={150}
                />
              </div>
              <h5 className="mb-3 text-light">Arpita Shukla</h5>


            </div>

          </div>

        </section>
      </section>

    </>
  );
};

export default Home;
