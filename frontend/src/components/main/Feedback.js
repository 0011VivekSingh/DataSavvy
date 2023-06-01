import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MDBInput } from 'mdb-react-ui-kit';
const Feedback = () => {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const feedbackForm = useFormik({
    initialValues: currentUser
      ? { name: currentUser.name, email: currentUser.email, feedback: '' }
      : {
          name: '',
          email: '',
          feedback: ''
        },
    onSubmit: async (values, { setSubmitting }) => {
      if (currentUser === null) {
        Swal.fire({
          icon: 'error',
          title: 'oops',
          text: 'you have to login first'
        });
        return;
      }
      // setSubmitting(true);
      console.log(values);
      const res = await fetch('http://localhost:5000/feedback/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 200) {
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
    }
  });

  return (
    <>
      <div className=" container h-100vh mt-5 col-md-6 col-lg-5  align-items-center gradient-custom-3" style={{minHeight: '90vh',backgroundColor:'#4DB8FF'}}>
        <h1 className="text-uppercase text-center mb-2">
          Feedback Form</h1>

        <form  onSubmit={feedbackForm.handleSubmit} id="contact_form"   >
          
          <div className="mb-3 ">
          <MDBInput
                       label='Name' 
                       id='name'
                      type='text'
                      value={feedbackForm.values.name} 
                      onChange={feedbackForm.handleChange}
                      />
                      <span classname="text-danger">{feedbackForm.errors.name}</span>
          </div>

            
            
          <div className="mb-3 ">
          <MDBInput
                       label='email' 
                       id='email'
                      type='email'
                      value={feedbackForm.values.email} 
                      onChange={feedbackForm.handleChange}
                      />
                      <span classname="text-danger">{feedbackForm.errors.email}</span>
            
          </div>
          <div className="mb-3 ">
          <MDBInput
                        label='feedback'  
                        id='feedback'
                        type='text'
                        value={feedbackForm.values.feedback}
                        onChange={feedbackForm.handleChange}
                        />
                        <span classname="text-danger">{feedbackForm.errors.feedback}</span>
          </div>
          <div className="mb-3 ">
          <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg gradient-custom-4"
                        disabled={feedbackForm.isSubmitting}
                      >
                        {feedbackForm.isubmitting && <span classname="spinner-border spinner-border-sm"></span>}
                        &nbsp;&nbsp;
                        submit
                      </button>
          </div>
          


          
        </form>
      </div>
    </>
  );
};

export default Feedback;
