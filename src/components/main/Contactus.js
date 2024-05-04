import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import FormValidation from './FormValidation';

export default function Contactus() {
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      phoneno: '',
      emailid: '',
      message: ''
    });

    const formRef = useRef("");
    let contactForm = new FormValidation(formRef);
  

    useEffect(() => {

      const handleSubmit = async (event) => {
        // validateFormData();
        event.preventDefault();
        try {
          await axios.post('your_server_url', formData);
          // Optionally, you can handle success response here
          console.log('Form submitted successfully');
          // Clear form fields
          setFormData({
            firstname: '',
            lastname: '',
            phoneno: '',
            emailid: '',
            message: ''
          });
        } catch (error) {
          // Handle error
          console.error('Error submitting form:', error);
        }
      };
  
      if (formRef.current) {
        formRef.current.addEventListener('submit', handleSubmit);
      }
  
      return () => {
        if (formRef.current) {
          formRef.current.removeEventListener('submit', handleSubmit);
        }
      };
    }, [formData]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  return (
  <>
    <div className="box">
      <div className="mid">
          <div className="glass list box-3 form-cont fit-center">
              <div className="form-cont">
                  <h1>CONTACT US</h1>
                  <form ref={formRef} data-validation="1">
                      <div className="msg">
                          Log in your account
                      </div>
                      <div className="i-cont">
                      </div>
                      <div className="inputBox">
                          <div>
                              <input name="firstname" type="text" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="First Name" />
                              <span className="input-label" >First Name</span>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="text" name="lastname" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="Last Name" />
                              <span className="input-label">Last Name</span>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="text" name="phoneno" autoComplete="off" required data-a="1" data-msg="Please enter a valid phone number" data-name="Phone No." />
                              <span className="input-label">Phone No.</span>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="text" name="emialid" autoComplete="off" required data-a="2" data-msg="Please enter a valid Email ID" data-name="Email Id" />
                              <span className="input-label">Phone No.</span>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="textareaBox">
                          <div>
                              <textarea name="contactmsg" data-a="5" data-msg="Please enter a valid Message" data-name="Message" required></textarea>
                              <span className="textarea-label">Message</span>
                              <i className="textarea-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="submit" />
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}
