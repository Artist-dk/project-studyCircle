import React, { useState } from 'react';
import Cookies from 'js-cookie';


export default function User() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform authentication logic
        // For simplicity, assume the user is authenticated upon entering any value for username and password
        if (username && password) {
            // Set a cookie to indicate that the user is logged in
            Cookies.set('loggedIn', 'true', { expires: 1 }); // Expires in 1 day
        }
    };
  return (
    <div className="mid">
        <div className="glass list box-3 fit-center form-cont">
                <h1>USER LOGIN</h1>
                <form data-validation="1">
                    <div className="msg">
                        Log in your account
                    </div>
                    <div className="i-cont">
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="username" autoComplete="off" required data-a="3" data-msg="Please enter a valid username" data-name="Username" />
                            <span className="input-label">User ID</span>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="password" name="password" required data-a="4" data-msg="Please enter a valid password" data-name="Password" />
                            <span className="input-label">Password</span>
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
