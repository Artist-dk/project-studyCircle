import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import Student from './components/Student';
import Teacher from './components/Teacher';

import './style/style.scss';
import './style/themeDark.scss';

export default function App(){
  useEffect(() => {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  })
  const [page, setPage] = useState(<Main />);
  return (
    <>  
            {page} 
    <button onClick={
      ()=>{
        setPage(<Main />);
        sessionStorage.setItem("sclayout", "home");
        // console.log(sessionStorage.getItem("sclayout"));
      }
      }>Main</button>
      <button onClick={
        ()=>{
          setPage(<Student />);
          sessionStorage.setItem("sclayout", "home");
          // console.log(sessionStorage.getItem("sclayout"));
        }
        }>Signin</button>
      <button onClick={()=>{
        setPage(<Teacher />);
        sessionStorage.setItem("sclayout", "student");
        // console.log(sessionStorage.getItem("sclayout"));
      }}>Signup</button>


    </>
  ) 
}
