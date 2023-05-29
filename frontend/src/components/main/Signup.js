import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import { MDBInput } from "mdb-react-ui-kit";



const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  cPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});





const Signup = () => {

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cPassword: ''
    },
    onSubmit: async (values, { setSubmitting }) => {
      // setSubmitting(true);
      console.log(values);
      const res = await fetch('http://localhost:5000/user/add', {

        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      console.log(res.status);
      if (res.status == 200) {

        Swal.fire({

          icon: 'success',
          title: 'Success',
          text: 'you have sucessfully registered'
        })
        navigate('/main/login');
      } else {

        Swal.fire({

          icon: 'error',
          title: 'oops',
          text: 'something is wrong'
        })
      }

    },
    validateSchema: SignupSchema
  });




  return (
    <section
      className="signup"
      // style={{
      //   backgroundImage:
      //     'url("/sss.jpg")', 
      // }}
      
    >
      <div className=" d-flex align-items-center  h-100 gradient-custom-3" style={{minHeight: '90vh'}}>
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card mt-5" style={{ borderTopRightRadius: 50 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-2">
                    Create your account
                  </h2>

                  <form onSubmit={signupForm.handleSubmit}>

                    <div className=" mb-3">
                    <MDBInput
                       label='Name' 
                       id='name'
                      type='text'
                      value={signupForm.values.name} 
                      onChange={signupForm.handleChange}
                      />
                      <span classname="text-danger">{signupForm.errors.name}</span>
                      </div>

                    <div className=" mb-3">
                    <MDBInput
                       label='email' 
                       id='email'
                      type='email'
                      value={signupForm.values.email} 
                      onChange={signupForm.handleChange}
                      />
                      <span classname="text-danger">{signupForm.errors.email}</span>
                      </div>

                    <div className=" mb-3">
                    <MDBInput
                       label='Password' 
                       id='password'
                      type='password'
                      value={signupForm.values.password} 
                      onChange={signupForm.handleChange}
                      />
                      <span classname="text-danger">{signupForm.errors.password}</span>
                      </div>
                    <div className=" mb-3">
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
                        className="form-check-label"
                        htmlFor="form2Example3g"
                      >
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4"
                        disabled={signupForm.isSubmitting}
                      >
                        {signupForm.isubmitting && <span classname="spinner-border spinner-border-sm"></span>}
                        &nbsp;&nbsp;
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-2 mb-0">
                      Have already an account?{" "}
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
    </section>
  );
};

export default Signup;