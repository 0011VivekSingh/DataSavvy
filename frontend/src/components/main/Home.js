import React from 'react';

const Home = () => {
  return (
    <>
<<<<<<< HEAD
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
        <div className="  container-fluid home " style={{ height: "90vh",backgroundColor:("lightblue")}}>
=======
      {/* Cover Page */}
      <header style={{ backgroundColor: '#19A7CE', backgroundImage: 'url("")' }}>
        <div className="container">
>>>>>>> d63aa49c2d89b4341970110343b9e40c63764943
          <div className="row ">
            <div className="col-md-8 col-lg-6 my-auto">
              <h1 className="display-4 fw-bold text-white">Safe and Secure Data handling with DataSavvy</h1>

              <p className="h5" style={{ color: 'white' }}>
                "Unlock the power of data with DataSavvy - Your personalized data analysis platform."
              </p>
            </div>

            <div className="col-md-8 col-sm-8 col-lg-6 my-auto">
              <img src="/section.png" className="d-block w-100 m-auto mt-4" alt="Bootstrap Themes" loading="lazy" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="b-example-divider" />

        {/* <div className="b-example-divider" /> */}
      </main>
      {/* Section End */}

      <div data-draggable="true" className="" style={{ position: 'relative' }}>
        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="mb-10 text-center">
            <div className="d-flex justify-content-center">
              <div className="text-center" style={{ maxWidth: 700 }}>
                <h2 className="fw-bold mb-4 text-center">
                  <span className="me-2">Why is it so</span>
                  <u className="text-primary">great?</u>
                </h2>
                <p className="text-muted mb-5">
                  Minus fuga aliquid vero facere ducimus quos, quisquam nemo? Molestias ullam provident vitae error aliquam dolorum temporibus? Doloremque, quasi
                </p>
              </div>
            </div>
            <div className="row gx-lg-5">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
                  <i className="fas fa-headset fa-lg text-white fa-fw" aria-controls="#picker-editor" />
                </div>
                <h5 className="fw-bold mb-3">Support 24/7</h5>
                <p className="text-muted mb-0">Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Reiciendis optio minus mollitia rerum labore</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
                  <i className="fas fa-shield-alt fa-lg text-white fa-fw" aria-controls="#picker-editor" />
                </div>
                <h5 className="fw-bold mb-3">Safe and solid</h5>
                <p className="text-muted mb-0">Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam aspernatur odio soluta, quisquam dolore animi</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
                  <i className="fas fa-shipping-fast fa-lg text-white fa-fw" aria-controls="#picker-editor" />
                </div>
                <h5 className="fw-bold mb-3">Extremely fast</h5>
                <p className="text-muted mb-0">Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic voluptatibus dolores exercitationem</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
                  <i className="fas fa-chart-pie fa-lg text-white fa-fw" aria-controls="#picker-editor" />
                </div>
                <h5 className="fw-bold mb-3">Live analytics</h5>
                <p className="text-muted mb-0">Illum doloremque ea, blanditiis sed dolor laborum praesentium maxime sint, consectetur atque ipsum ab adipisci</p>
              </div>
            </div>
          </section>
        </section>
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
        <div className="carousel-inner " style={{ backgroundColor: '#FFD95A' }}>
          <div className="carousel-item active ">
            <img src="/dx.jpg" className="d-block w-100" alt="Wild Landscape" height={200} width={500} />
            <div class="carousel-caption d-none d-md-block">
              <h1>“Data is like garbage. You’d better know what you are going to do with it before you collect it.” ~ Mark Twain</h1>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              // src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="d-block w-100"
              alt="Camera"
              height={200}
              width={500}
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>
                <div class="carousel-caption d-none d-md-block">
                  <h1>First slide label</h1>
                </div>
              </h1>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              // src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="d-block w-100"
              alt="Exotic Fruits"
              height={200}
              width={500}
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>First slide label</h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="b-example-divider" />
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrapâ€™s form controls. Each required form group has a validation state that can be triggered by attempting to
              submit the form without completing it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
