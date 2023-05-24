import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from 'yup';


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
      //     'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
      // }}
    >
      <div className="d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex  align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card mt-5" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-2">
                    Create an account
                  </h2>

                  <form onSubmit={signupForm.handleSubmit}>

                    <div className=" mb-2">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={signupForm.values.name}
                        onChange={signupForm.handleChange}
                        className="form-control form-control-lg"
                      />
                      <span classname="text-danger">{signupForm.errors.name}</span>
                    </div>

                    <div className=" mb-2">
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={signupForm.values.email}
                        onChange={signupForm.handleChange}
                        className="form-control form-control-lg"
                      />
                      <span classname="text-danger">{signupForm.errors.email}</span>
                    </div>


                    <div className=" mb-2">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={signupForm.values.password}
                        onChange={signupForm.handleChange}
                        className="form-control form-control-lg"
                      />
                      <span classname="text-danger">{signupForm.errors.password}</span>
                    </div>


                    <div className=" mb-2">
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        id="cPassword"
                        value={signupForm.values.cPassword}
                        onChange={signupForm.handleChange}
                        className="form-control form-control-lg"
                      />
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