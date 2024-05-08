import React, { useState } from 'react';
import { Route,Routes, Link } from 'react-router-dom';
import './header.css'

import Home from './main/Home';
import Accounts from './Accounts';
import Contactus from './main/Contactus';
import Tutorial from './main/Tutorial';
import Practice from './main/Practice';
import Contests from './main/Contests';
import Library from './main/Library';
import About from './main/About';

export default function Main() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Contact Us':
          return <Contactus />;
        case 'Login':
          return <Accounts />;
        case 'Tutorial':
          return <Tutorial />;
        case 'Practice':
          return <Practice />;
        case 'Contests':
          return <Contests />;
        case 'Library':
          return <Library />;
        default:
          return <Home />;
      }
    };
  
    return (
      <>
        <header className="header">
          <div className="row1">
            <div className="col1">
              <span onClick={() => setCurrentPage('About')}>ABOUT</span>
              <span onClick={() => setCurrentPage('Contact Us')}>CONTACT US</span>
            </div>
            <div className="col2">
              <Link to="/accounts">
                <span>Login</span>
              </Link>
            </div>
          </div>
          <div className="row2">
            <div className="title">
              <h1>STUDYCIRCLE</h1>
            </div>
          </div>
          <div className="row3">
            <span onClick={() => setCurrentPage('Home')}>HOME</span>
            <span onClick={() => setCurrentPage('Tutorial')}>TUTORIAL</span>
            <span onClick={() => setCurrentPage('Practice')}>PRACTICE</span>
            <span onClick={() => setCurrentPage('Contests')}>CONTESTS</span>
            <span onClick={() => setCurrentPage('Library')}>LIBRARY</span>
          </div>
        </header>
        <div className="box">
          <svg width="100%" height="40" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="path-1" d="M0,0  L100,0 0,100z"></path>
            <path className="path-2" d="M0,0  L100,30 100,0z"></path>
          </svg>
        </div>
        <div className="body home">
          {renderPage()}
        </div>
      </>
    );
  }