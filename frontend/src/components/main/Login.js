import React from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { MDBInput } from "mdb-react-ui-kit";
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserProvider';

const Login = () => {

  const navigate = useNavigate();
  const { loggedIn, setLoggedIn, logout } = useUserContext();

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
        setLoggedIn(true);
        if(data.role==='admin'){
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/admin/dashboard');
        }else{
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/user/excelsheet');
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
    <section className="bg" style={{ backgroundImage:"url('/loginimg.jpg')" , minHeight: '100vh'}}>
      <div className="container pt-2 pb-0 h-100">
        <div className="row d-flex justify-content-center align-items-center " style={{minHeight: '100vh' }}>
          <div className="col col-xl-10">
            <div className="card  mx-auto  " style={{ borderRadius: "1rem"}}>
              <div className="row g-0 "  > 
                <div className="col-md-6 col-lg-7 d-none d-md-block dis-block my-auto">
                
                  <img
                    src="/gif7.gif"
                    alt="login form"
                    className="img-fluid "
                    style={{ borderRadius: "1rem 0 0 1rem",margin:'1 auto' }}
                  />
                </div>
                <div className="col-md-6 col-lg-5 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={loginform.handleSubmit}>

                      <div className="d-flex align-items-center mb-2 pb-0">
                      <img src="/pp.png" alt="logo" width="50" height="50" className="me-2 img-fluid" />
                        
                        <span className="h1 fw-bold mb-0">DataSavvy</span>
                      </div>
                      <h5
                        className="fw-normal mb-2 pb-2"
                        style={{ letterSpacing: 1 }}
                      >
                        Login into your account
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
                          <b>Login</b>
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-4 pb-lg-2" style={{ color: "#393f81" }}>
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