import React, { useState } from 'react';

import Home from './main/Home';
import Accounts from './main/Accounts';
import Contactus from './main/Contactus';
import Tutorial from './main/Tutorial';
import Practice from './main/Practice';
import Contests from './main/Contests';
import Library from './main/Library';
import About from './main/About';

export default function Main() {  
    
const [page, setPage] = useState(<Home />);
return (
  <>
    <header className="header">
        <div className="row1">
            <div className="col1">
                <span onClick={() => {
                        setPage(<About />)
                    }
                }>ABOUT</span>
                <span onClick={() => {
                        setPage(<Contactus />)
                    }
                }>CONTACT US</span>
            </div>
            <div className="col2">
                <span onClick={() => {
                        setPage(<Accounts />)
                    }
                }>LOGIN</span>
            </div>
        </div>
        <div className="row2">
            <div className="title">
                <h1>STUDYCIRCLE</h1>
            </div>
        </div>
        <div className="row3">
            <span onClick={() => {
                    setPage(<Home />)
                    }
                }>HOME</span>
            <span onClick={() => {
                    setPage(<Tutorial />)
                    }
                }>TUTORIAL</span>
            <span onClick={() => {
                    setPage(<Practice />)
                    }
                }>PRACTICE</span>
            <span onClick={() => {
                    setPage(<Contests />)
                    }
                }>CONTESTS</span>
            <span onClick={() => {
                    setPage(<Library />)
                    }
                }>LIBRARY</span>
        </div>
    </header>
    <div className="box">
        <svg width="100%" height="40" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="path-1" d="M0,0  L100,0 0,100z"></path>
            <path className="path-2" d="M0,0  L100,30 100,0z"></path>
        </svg>
    </div>
    <div className="body home">
        {page}
    </div>
  </>
) 
}
