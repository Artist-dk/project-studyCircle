import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';


export default function User() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(username)
    }, [username]);
    const handleLogin = async () => {
        console.log("login")
        // e.preventDefault();
        try {
            axios.post('http://localhost:8081/login', 
                {
                    username: 'artist',
                    password: 'pass123'
                }, 
                {
                    headers: {
                        Accept: "*/*",
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error)
        }
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
