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
      <div className=" d-flex align-items-center  h-100 gradient-custom-3" style={{ minHeight: '90vh' }}>
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card mt-5">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-2">Create your account</h2>

                  <form onSubmit={signupForm.handleSubmit}>
                    <div className=" mb-3">
                      <MDBInput label="Name" id="name" type="text" value={signupForm.values.name} onChange={signupForm.handleChange} />
                      <span className="text-danger">{signupForm.errors.name}</span>
                    </div>

                    <div className=" mb-3">
                      <MDBInput label="email" id="email" type="email" value={signupForm.values.email} onChange={signupForm.handleChange} />
                      <span className="text-danger">{signupForm.errors.email}</span>
                    </div>

                    <div className=" mb-3">
                      <MDBInput label="Password" id="password" type="password" value={signupForm.values.password} onChange={signupForm.handleChange} />
                      <span className="text-danger">{signupForm.errors.password}</span>
                    </div>
                    <div className=" mb-3">
                      <MDBInput label="Confirm Password" id="cPassword" type="password" value={signupForm.values.cPassword} onChange={signupForm.handleChange} />
                      <span className="text-danger">{signupForm.errors.cPassword}</span>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-2">
                      <input className="form-check-input me-2" type="checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked) } />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in{' '}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4" disabled={signupForm.isSubmitting}>
                        {signupForm.isubmitting && <span className="spinner-border spinner-border-sm"></span>}
                        &nbsp;&nbsp; Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-2 mb-0">
                      Have already an account?{' '}
                      <Link to="/main/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className="mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="0.7"
          d="M0,320L60,272C120,224,240,128,360,112C480,96,600,160,720,181.3C840,203,960,181,1080,149.3C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Signup;
