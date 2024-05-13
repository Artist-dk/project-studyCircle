import React, {  useEffect, useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';


export default function AccountsMain() {
  return (
    <>
      <div className="account-nav">
        <Link to="/"><span>Home</span></Link>
        <Link to="/account"><span>Login</span></Link>
        <Link to="/account/newacc"><span>New Account</span></Link>
        <Link to="/account/sections"><span>Sections</span></Link>
        <Link to="/logout"><span>Logout</span></Link>
      </div>
      <Outlet />
    </>
  )
}
  