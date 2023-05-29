import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
      <div className=" container h-100vh mt-5 col-md-6 col-lg-5  align-items-center" style={{minHeight: '90vh'}}>
        <h1>Contact Form</h1>
        <form id="contact_form" name="contact_form" >
          <div className="mb-5 row">
            <div className="col">
              <label>First Name</label>
              <input type="text" required="" maxLength={50} className="form-control" id="first_name" name="first_name" />
            </div>
            <div className="col">
              <label>Last Name</label>
              <input type="text" required="" maxLength={50} className="form-control" id="last_name" name="last_name" />
            </div>
          </div>
          <div className="mb-5 row">
            <div className="col">
              <label htmlFor="email_addr">Email address</label>
              <input type="email" required="" maxLength={50} className="form-control" id="email_addr" name="email" placeholder="name@example.com" />
            </div>
            <div className="col">
              <label htmlFor="phone_input">Phone</label>
              <input type="tel" required="" maxLength={50} className="form-control" id="phone_input" name="Phone" placeholder="Phone" />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" rows={5} defaultValue={''} />
          </div>
          <button type="submit" className="btn btn-primary px-4 btn-lg">
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default Feedback;
