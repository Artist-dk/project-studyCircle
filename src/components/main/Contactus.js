import React from 'react'

export default function Contactus() {
  return (
  <>
    <div className="box">
      <div className="mid">
          <div className="glass list box-3 fit-center">
              <div className="form-cont">
                  <h1>CONTACT US</h1>
                  <form data-validation="1">
                      <div className="msg">
                          Log in your account
                      </div>
                      <div className="i-cont">
                      </div>
                      <div className="inputBox">
                          <div>
                              <input name="firstName" type="text" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="First Name" />
                              <span className="input-label" >First Name</span>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="text" name="lastName" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="Last Name" />
                              <span className="input-label">Last Name</span>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="inputBox">
                          <div>
                              <input type="text" name="phone" autoComplete="off" required data-a="1" data-msg="Please enter a valid phone number" data-name="Phone No." />
                              <span className="input-label">Phone No.</span>
                              <i className="input-bg"></i>
                              <p className="error-msg">Required</p>
                          </div>
                      </div>
                      <div className="textareaBox">
                          <div>
                              <textarea name="contactmsg" required data-a="2" data-msg="Please enter a valid email ID" data-name="Email"></textarea>
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
