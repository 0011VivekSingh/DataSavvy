import React from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { MDBInput } from "mdb-react-ui-kit";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const loginform = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "You have successfully logged in",
        });
        const data = await res.json();
        if(data.role==='admin'){
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/admin/dashboard');
        }else{
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/user/toolpack');
        }

      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Error!!",
          text: "Invalid Credentials",
        });
      }
    },
  });



  return (
    <section className=" bg" style={{ height: '150vh'}}>
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card " style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block dis-block my-auto">
                  <img
                    src="/login.jpg"
                    alt="login form"
                    className="img-fluid "
                    style={{ borderRadius: "1rem 0 0 1rem",margin:'2 auto'  }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={loginform.handleSubmit}>

                      <div className="d-flex align-items-center mb-3 pb-1">
                      <img src="/pp.png" alt="logo" width="40" height="40" className="me-3 img-fluid" />
                        
                        <span className="h1 fw-bold mb-0">DataSavvy</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>

                      <MDBInput
                       label='Email' 
                       id='email'
                      type='text'
                      value={loginform.values.email} 
                      onChange={loginform.handleChange}
                      
                      />
                      

                      <MDBInput 
                      className='mt-3'
                      label='Password' 
                      id='password'
                       type='password'
                       value={loginform.values.password} 
                       onChange={loginform.handleChange} 
                       />


                      <div className="pt-1 my-3">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link to="/main/signup" style={{ color: "#393f81" }}>
                          Register here
                        </Link>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Login