import React, { useState } from 'react'

import User from './forms/User';
import StudentLogin from './forms/Student';
import TeacherLogin from './forms/Teacher';
import HodLogin from './forms/HOD';
import LibrarianLogin from './forms/Librarian';
import CollegeLogin from './forms/College';
// import UserLogin, StudentLogin, TeacherLogin, HodLogin, LibrarianLogin, CollegeLogin} from './login/'

export default function Login() {
  const [page, setPage] = useState(<StudentLogin />);
  function set(a) {
    setPage(a);
  }
  return (
    <>
        <div className="nav">
          <span onClick={()=>{set(<User />)}}>User Login</span>
          <span onClick={()=>{set(<StudentLogin />)}}>Student Login</span>
          <span onClick={()=>{set(<TeacherLogin />)}}>Teacher Login</span>
          <span onClick={()=>{set(<HodLogin />)}}>Hod Login</span>
          <span onClick={()=>{set(<LibrarianLogin />)}}>Librarian Login</span>
          <span onClick={ () => {set(<CollegeLogin />)}}>College Login</span>
        </div>
        {page}
    </>
  )
}
