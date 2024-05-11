import React, {  useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import './account.css'
import Login from './account/Login';
import NewAccount from './account/NewAccount';
import SectionLogin from './account/Sections'
import CollegeReg from './account/forms/College';
import Logout from '../components/Logout'


export default function Accounts() {
  const [page, setPage] = useState(<Login />);
  function set(a) {
    setPage(a);
  }

  const checkLogin = () => {
    // console.log(Cookies.get('sid'))
    if(Cookies.get('jwtoken')) {
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
        {(checkLogin())?<span><Link to={"/logout"}>Logout</Link></span>:" "}
      </div>
      {page}
    </>
  )
}
  