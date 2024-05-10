import React from 'react';


export default function User() {
  return (
    <div className="mid">
        <div className="glass list box-3 fit-center form-cont">
                <h1>CREATE ACCOUNT</h1>
                <form data-validation="1">
                    <div className="msg">
                        
                    </div>
                    <div className="i-cont">
                    </div>
                    <div className="inputBox">
                        <div>
                            <input name="FirstName" type="text" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="First Name" />
                            <label className="input-label" >First Name</label>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="LastName" autoComplete="off" required data-a="0" data-msg="Please enter a valid name" data-name="Last Name" />
                            <label className="input-label">Last Name</label>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="UserName" autoComplete="off" required data-a="3" data-msg="Please enter a valid username" data-name="Username" />
                            <label className="input-label">Username</label>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="Email" autoComplete="off" required data-a="2" data-msg="Please enter a valid email ID" data-name="Email" />
                            <label className="input-label">Email</label>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="password" name="Password" required data-a="4" data-msg="Please enter a valid password" data-name="Password" />
                            <label className="input-label">Password</label>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="password" name="confirmPassword" required data-a="4" data-msg="Password does not match" data-name="Confirm Password" data-b="0" />
                            <label className="input-label">Confirm Password</label>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="MobileNo" autoComplete="off" required data-a="1" data-msg="Please enter a valid phone number" data-name="Phone No." />
                            <label className="input-label">Phone No.</label>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <textarea name="Description" autoComplete="off" required data-a="1" data-msg="Please enter a valid phone number" data-name="Description" ></textarea>
                            <label className="input-label"> Description </label>
                            <i className="input-bg"></i>
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
  )
}
