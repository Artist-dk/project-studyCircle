import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import './account.css'
import Login from './account/Login';
import NewAccount from './account/NewAccount';
import SectionLogin from './account/Sections'
import CollegeReg from './account/forms/College';


export default function Accounts() {
  const [page, setPage] = useState(<Login />);
  function set(a) {
    setPage(a);
  }
  const logout = () => {
    axios.get("http://localhost:8081/account/logout")
    .then(response => {
        console.log(response);
        Cookies.remove('sid');
        // Cookies.remove('your_cookie_name', { path: '/', domain: '.example.com' });
    })
    .catch(error => {
        console.error("Invalid Login credentials: ", error);
    })
  }
  const checkLogin = () => {
    // console.log(Cookies.get('sid'))
    if(Cookies.get('sid')) {
      return true
    }
    return false
  }
  return (
    <>
      <div className="account-nav">
        <Link to="/"><span>Home</span></Link>
        <span onClick={()=>{set(<Login />)}}>Login</span>
        <span onClick={()=>{set(<NewAccount />)}}>New Account</span>
        <span onClick={()=>{set(<SectionLogin />)}}>Sections</span>
        {(checkLogin())?<span onClick={logout}>Logout</span>:" "}
      </div>
      {page}
    </>
  )
}
  