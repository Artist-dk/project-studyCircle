import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import Student from './components/Student';
import Teacher from './components/Teacher';
import PLibrary from './components/library/PLibrary';
import ELibrary from './components/library/ELibrary';
import Accounts from './components/Accounts';
import Cookies from 'js-cookie';

import './style/style.css';
import './style/themeDark.scss';
import { BrowserRouter, Routes, Route, Navigate, Redirect } from 'react-router-dom';
import ChatApp from './components/ChatApp.jsx';

export default function App(){
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
      // Check if the user is logged in based on the presence of the 'loggedIn' cookie
      console.log(Cookies.get('loggedIn'))
      const isLoggedIn = Cookies.get('loggedIn') === 'true';
      setLoggedIn(isLoggedIn);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loggedIn ? <Main /> : <Navigate to="/accounts" />}/>
        <Route index element={loggedIn ? <Main /> : <Navigate to="/accounts" />} />
        <Route path="/student" element={loggedIn ? <Student /> : <Navigate to="/accounts" />} />
        <Route path="/teacher" element={loggedIn?<Teacher />:<Navigate to="/accounts" />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/e-library" element={loggedIn?<ELibrary /> : <Navigate to="/accounts" />} />
        <Route path="/p-library" element={loggedIn?<PLibrary /> : <Navigate to="/accounts" />} />
        <Route path="/chatapp" element={loggedIn?<ChatApp /> : <Navigate to="/accounts" />} />
      </Routes>
    </BrowserRouter>
  ) 
}
