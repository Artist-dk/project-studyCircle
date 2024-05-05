import React, {  useState } from 'react'
import CollegeReg from './forms/CollegeReg';
import StudentLogin from './forms/StudentLogin';
import HodLogin from './forms/HodLogin';
import LibrarianLogin from './forms/LibrarianLogin';
import SCuserLogin from './forms/SCuserLogin';
import TeacherLogin from './forms/TeacherLogin';

import './Form.css'


export default function Accounts() {
  const [page, setPage] = useState(<StudentLogin />);
  function set(a) {
    setPage(a);
  }
    return (
      <>
        <div className="nav">
          <span onClick={ () => {
            set(<CollegeReg />);
          }}>CollegeReg</span>
          <span onClick={()=>{set(<HodLogin />)}}>HodLogin</span>
          <span onClick={()=>{set(<LibrarianLogin />)}}>LibrarianLogin</span>
          <span onClick={()=>{set(<SCuserLogin />)}}>SCuserLogin</span>
          <span onClick={()=>{set(<StudentLogin />)}}>StudentLogin</span>
          <span onClick={()=>{set(<TeacherLogin />)}}>TeacherLogin</span>
        </div>
        {page}
      </>
    )
  }
  