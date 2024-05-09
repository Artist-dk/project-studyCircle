import React, { useState } from 'react'

import StudentLogin from './forms/Student';
import TeacherLogin from './forms/Teacher';
import HodLogin from './forms/HOD';
import LibrarianLogin from './forms/Librarian';
import CollegeLogin from './forms/College';

export default function Sections() {
  const [page, setPage] = useState(<StudentLogin />);  
  function set(a) {
    setPage(a);
  }
  return (
    <div>
    <div className="nav">
      <span onClick={()=>{set(<StudentLogin />)}}>Student Login</span>
      <span onClick={()=>{set(<TeacherLogin />)}}>Teacher Login</span>
      <span onClick={()=>{set(<HodLogin />)}}>Hod Login</span>
      <span onClick={()=>{set(<LibrarianLogin />)}}>Librarian Login</span>
      <span onClick={ () => {set(<CollegeLogin />)}}>College Login</span>
    </div>
      {page}
    </div>
  )
}
