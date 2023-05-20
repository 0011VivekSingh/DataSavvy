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
  <div className="container-fluid py-10 " style={{height:"100vh" , backgroundColor:"blueviolet"}}>
<div className="row ">

    <div className="col-lg-6 ">
      <h1 className="display-4 " style={{color:'white',margin:'10%'}}>Safe and Secure Data handling with DataSavvy</h1>
      <p className="lead">
        DataSavvy,is single platform for all your data handling needs.
        
      </p>
    </div>

    <div className="col-lg-6  "  >
      
      <img className='w-100' src="/section.png"  alt="" />
      
      </div>
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