import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';


export default function User() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log("hacked")
    //     console.log(username);
    // }, [username]); 

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password)
        axios.get("http://localhost:8081/account/login", {params: {username, password}})
        .then(response => {
            // console.log(response.data)
            // sessionStorage.setItem('userData',JSON.stringify(response.data))
            // console.log(sessionStorage.getItem('userData'))
            Cookies.set('sid', response.data.id, { expires: 1 }); // Expires in 1 day
            console.log(Cookies.get("sid"));
            // navigate(-1); 
            navigate("/");
        })
        .catch(error => {
            console.error("Invalid Login credentials: ", error);
        })
    };
  return (
    <div className="mid">
        <div className="glass list box-3 fit-center form-cont">
                <h1>USER LOGIN</h1>
                <form data-validation="1" onSubmit={handleLogin}>
                    <div className="msg">
                        Log in your account
                    </div>
                    <div className="i-cont">
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="text" name="username" autoComplete="off" required data-a="3" data-msg="Please enter a valid username" data-name="Username" onChange={(e)=>{setUsername(e.target.value)}} />
                            <span className="input-label">User ID</span>
                            <i className="input-bg"></i>
                            <p className="error-msg">Required</p>
                        </div>
                    </div>
                    <div className="inputBox">
                        <div>
                            <input type="password" name="password" required data-a="4" data-msg="Please enter a valid password" data-name="Password" onChange={(e)=>{setPassword(e.target.value)}} />
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
