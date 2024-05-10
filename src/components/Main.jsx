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
import Settings from './main/Settings';


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
          case 'Settings':
             return <Settings />;
        default:
          return <Home />;
      }
    };
  
    return (
      <>
        <header className="header">
          <div className="row1">
              <span onClick={() => setCurrentPage('About')}>ABOUT</span>
              <span onClick={() => setCurrentPage('Contact Us')}>CONTACTUS</span>
              <span onClick={() => setCurrentPage('Settings')}>
                <svg stroke="currentColor" fill="none" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </span>
              <span className="grow"></span>
              <Link to="/accounts">
                <span>Login</span>
              </Link>
          </div>
          <div className="row2">
            <div className="title">
              <h1>STUDYCIRCLE</h1>
            </div>
          </div>
          <div className="row3">
            <span onClick={() => setCurrentPage('Home')}>HOME</span>
            <span onClick={() => setCurrentPage('Bridge')}>BRIDGE</span>
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