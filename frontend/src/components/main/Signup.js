import { useFormik, validateYupSchema } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { MDBInput } from 'mdb-react-ui-kit';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').min(4, 'Too Short!').max(10, 'Too Long!').required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  cPassword: Yup.string().required('Please Confirm your password').oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  const navigate = useNavigate();

  const [agreeTerms, setAgreeTerms] = useState(false);

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cPassword: ''
    },
    onSubmit: async (values, { setSubmitting }) => {
      if(!agreeTerms){
        Swal.fire({
          icon: 'error',
          title: 'oops',
          text: 'You must agree to terms and conditions'
        });
        return;
      }
      // setSubmitting(true);
      console.log(values);
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'you have sucessfully registered'
        });
        navigate('/main/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'oops',
          text: 'something is wrong'
        });
      }
    },
    validationSchema: SignupSchema
  });

  return (
    <section
      className="signup"
      // style={{
      //   backgroundImage:
      //     'url("/sss.jpg")',
      // }}
    >
      <div className=" d-flex align-items-center  h-100 gradient-custom-3" style={{minHeight: '90vh', backgroundImage:"url('/Signupp.jpg')",backgroundSize:"cover",backgroundRepeat:'no-repeat'}}>
        <div className="container  h-100">
          <div className="row d-flex  align-items-center h-100 w-75">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card my-5"   >
                <div className="card-body py-5 px-5">
                  <h2 className="text-uppercase text-center mb-5 mt-0 text-dark">
                   <b> Create your account</b>
                  </h2>

                  <form onSubmit={signupForm.handleSubmit}>

                    <div className=" mb-4 md-form">
                    <MDBInput 
                    
                       label='Name' 
                       className='mttt'
                       id='name'
                       
                      type='text'
                      value={signupForm.values.name} 
                      onChange={signupForm.handleChange}
                      
                      />
                      <span classname="text-danger">{signupForm.errors.name}</span>
                      </div>

                    <div className=" mb-4 ">
                    <MDBInput
                       label='email' 
                       id='email'
                      type='email'
                      value={signupForm.values.email} 
                      onChange={signupForm.handleChange}
                      
                      />
                      <span classname="text-danger">{signupForm.errors.email}</span>
                      </div>

                    <div className=" mb-4 inp">
                    <MDBInput
                    
                       label= 'Password' 
                       id='password'
                      type='password'
                      value={signupForm.values.password} 
                      onChange={signupForm.handleChange}
                      />
                      <span classname="text-danger">{signupForm.errors.password}</span>
                      </div>
                    <div className=" mb-4 ">
                    <MDBInput
                       label='Confirm Password' 
                       id='password'
                      type='password'
                      
                      value={signupForm.values.password} 
                      onChange={signupForm.handleChange}
                      />
                      <span classname="text-danger">{signupForm.errors.password}</span>
                      </div>

                      
                      
                    
                    <div className="form-check d-flex justify-content-center mb-2">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3cg"
                      />
                      <label
                        className="form-check-label text-dark"
                        htmlFor="form2Example3g"
                      >
                       <b> I agree all statements in</b>
                        <a href="#!" className="text-body ">
                      <b>   <u className="text-info" >Terms of service</u></b> 
                        </a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-outline-dark  btn-block btn-lg gradient-custom-4"
                        disabled={signupForm.isSubmitting}
                      >
                        {signupForm.isubmitting && <span classname="spinner-border spinner-border-sm"></span>}
                        &nbsp;&nbsp;
                      <b className="text-dark">  Register</b>
                      </button>
                    </div>
                    <p className="text-center text-muted mt-2 mb-0 text-primary">
                     <b className="text-dark"> Have already an account?{" "}</b>
                      <Link to="/main/login" className="fw-bold text-body ">
                       <b> <u className="text-dark" >Login here</u></b>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Signup;
