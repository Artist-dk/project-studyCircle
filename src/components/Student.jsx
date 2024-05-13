import React, { useState } from 'react'
import Discussion from './student/Discussion'
import Assignment from './student/Assignment';
import Progress from './student/Progress';
import './Student.css';
import axios from 'axios';
import Cookies from 'js-cookie';



export default function Student() {
  
  function open(e) {
    e = e.currentTarget;
    var lsb = document.querySelector(".lsidebar")
      if(e.classList.value.match("active-icon")) {
          e.classList.remove('active-icon')
          lsb.classList.remove('lsidebar-show')
      } else {
          e.classList.toggle('active-icon')
          lsb.classList.toggle('lsidebar-show')
      }
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
      e.preventDefault();
      console.log(username, password)
      axios.get("http://localhost:8081/account/login", {params: {username, password}})
      .then(response => {
          // console.log(response.data)
          // sessionStorage.setItem('userData',JSON.stringify(response.data))
          // console.log(sessionStorage.getItem('userData'))
          Cookies.set('loggedIn', response.data.id, { expires: 1 }); // Expires in 1 day
          console.log(Cookies.get("loggedIn"))
      })
      .catch(error => {
          console.error("Invalid Login credentials: ", error);
      })
  };
  const [page, setPage] = useState(<Discussion />)
  return (
    <>
    <div className="dashboard">
        <div className="lsidebar">
            <div className="lsb-head">
              <div className="lsb-title">
                  <div>
                    {/* <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="90" fill="#FF0000"></circle>
                      <circle cx="100" cy="100" r="70" fill="#FFFFFF"></circle>
                      <circle cx="100" cy="100" r="60" fill="#ff0000"></circle>
                      <circle cx="100" cy="100" r="40" fill="#FFFFff"></circle>
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="32" fill="#000000">
                        StudyCircle
                      </text>
                    </svg> */}
                  </div>
                  <div>StudyCircle</div>
              </div>
              <div className="icon" onClick={function(e){open(e)}}>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
          <div className="lsb-body">
              <span onClick={ ()=>{setPage(<Discussion />)}}>DISCUSS</span>
              <span onClick={ ()=>{setPage(<Assignment />)}}>ASSIGNMENTS</span>
              <span onClick={ ()=>{setPage(<Assignment />)}}>NOTICE</span>
              <span onClick={ ()=>{setPage(<Progress />)}}>PROGRESS</span>
              <span onClick={ ()=>{setPage(<Assignment />)}}>RESULT</span>
              <span onClick={ ()=>{setPage(<Assignment />)}}>TO DO</span>
              <span onClick={ ()=>{setPage(<Assignment />)}}>THEAM</span>
              <span onClick={ ()=>{setPage(<Assignment />)}}>LOGOUT</span>
              <span onClick={ ()=>{setPage(<Assignment />)}}></span>
          </div>
        </div>
        <div className="body">
          <div className="main">
            {page}
          </div>
        </div>
      </div>
    </>
  )
}
