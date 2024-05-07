import React, { useState } from 'react'
import Discussion from './student/Discussion'
import Assignment from './student/Assignment';
import Progress from './student/Progress';
import './Student.css';


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


export default function Student() {
  const [page, setPage] = useState(<Discussion />)
  return (
    <>
    <div className="dashboard">
        <div className="lsidebar">
            <div className="lsb-head">
              <div className="lsb-title">
                  <div>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path stroke="red" strokeWidth="39" d="M0 40 0 0 40 0 " fill="transparent"/>
                          <path stroke="red" strokeWidth="39" d="M60 0 100 0 100 40 " fill="transparent" />
                          <path stroke="red" strokeWidth="39" d="M0 60 0 100 40 100" fill="transparent" />
                          <path stroke="red" strokeWidth="39" d="M60 100 100 100 100 60 " fill="transparent" />
                      </svg>
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
