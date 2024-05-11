import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import Student from './components/Student';
import Teacher from './components/Teacher';
import PLibrary from './components/library/PLibrary';
import ELibrary from './components/library/ELibrary';
import Accounts from './components/Accounts';
import Logout from './components/Logout';
import Cookies from 'js-cookie';

import './style/style.css';
import './style/themeDark.scss';
import { BrowserRouter, Routes, Route, Navigate, Redirect } from 'react-router-dom';
import ChatApp from './components/ChatApp.jsx';

export default function App(){
  const loggedIn = () => {
    if(Cookies.get('jwtoken')) {
      return true;
    }
    return false;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(loggedIn()) ? <Main /> : <Navigate to="/accounts" />}/>
        <Route index element={(loggedIn()) ? <Main /> : <Navigate to="/accounts" />} />
        <Route path="/student" element={(loggedIn()) ? <Student /> : <Navigate to="/accounts" />} />
        <Route path="/teacher" element={(loggedIn())?<Teacher />:<Navigate to="/accounts" />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/e-library" element={(loggedIn())?<ELibrary /> : <Navigate to="/accounts" />} />
        <Route path="/p-library" element={(loggedIn())?<PLibrary /> : <Navigate to="/accounts" />} />
        <Route path="/chatapp" element={(loggedIn())?<ChatApp /> : <Navigate to="/accounts" />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  ) 
}
