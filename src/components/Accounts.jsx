import React, {  useState } from 'react'
import { Link } from 'react-router-dom';

import './account.css'
import Login from './account/Login';
import NewAccount from './account/NewAccount';
import SectionLogin from './account/Sections'


export default function Accounts() {
  const [page, setPage] = useState(<Login />);
  function set(a) {
    setPage(a);
  }
    return (
      <>
        <div className="account-nav">
          <Link to="/"><span>Home</span></Link>
          
          <span onClick={()=>{set(<Login />)}}>Login</span>
          <span onClick={()=>{set(<NewAccount />)}}>New Account</span>
          <span onClick={()=>{set(<SectionLogin />)}}>Sections</span>
        </div>
        {page}
      </>
    )
  }
  