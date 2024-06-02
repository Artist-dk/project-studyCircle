import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate,Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

import './styles/Main.css';

import HomeHeader from './components/HomeHeader.js';
import Home from './components/main/Home.js';
import About from './components/about/About.js';
import Bridge from './components/bridge/BridgeMain.js'
import NoPage from './components/NoPage.js';
import Contactus from './components/contactus/Contactus.js';
import Settings from './components/settings/Settings.js';
import Tutorials from './components/tutorials/Tutorials.js';
import Practice from './components/practice/Practice.js'
import Contests from './components/contests/Contests.js';
import Library from './components/library/Library.js'
import Elibrary from './components/library/Elibrary.js'
import Plibrary from './components/library/Plibrary.js'

import AccountsMain from './components/account/AccountsMain.js';
import Login from './components/account/loginForms/Login.js'
import Logout from './components/account/Logout.js'
import Sections from './components/account/Sections.js';
import User from './components/account/registrationForms/User.js';
import StudentLogin from './components/account/loginForms/StudentLogin.js';
import TeacherLogin from './components/account/loginForms/TeacherLogin.js';
import HodLogin from './components/account/loginForms/HodLogin.js';
import LibrarianLogin from './components/account/loginForms/LibrarianLogin.js';
import CollegeLogin from './components/account/loginForms/CollegeLogin.js';

import StudentMain from './components/student/StudentMain.js';
import StudentProfile from './components/student/StudentProfile.js';
import StudentDiscussion from './components/student/Discussion.js';
import StudentAssignement from './components/student/Assignment.js';
import LibraryMain from './components/library/LibraryMain.js';
// import StudentNotice from './components/student/Notice.js';
// import StudentProgress from './components/student/Progress.js';
// import StudentResult from './components/student/Result.js';
// import StudentTodo from './components/student/Todo.js';

export default function App(){
  const loggedIn = () => {
    if(Cookies.get('spy')) {
      console.log("spy detected")
      return true;
    } else {
      console.log("spy not detected")
      return false;
    }
  }

  useEffect(() => {
    loggedIn();
  },[])

  console.log(__dirname)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHeader />}>
          <Route index element={(loggedIn()) ? <Home />: <Navigate to="/account" />} ></Route>
          <Route path="about" element={(loggedIn()) ? <About />: <Navigate to="/account" />}></Route>
          <Route path="contactus" element={(loggedIn()) ? <Contactus />: <Navigate to="/account" />}></Route>
          <Route path="settings" element={(loggedIn()) ? <Settings />: <Navigate to="/account" />}></Route>
          <Route path="bridge" element={(loggedIn()) ? <Bridge />: <Navigate to="/account" />}></Route>
          <Route path="tutorials" element={(loggedIn()) ? <Tutorials />: <Navigate to="/account" />}></Route>
          <Route path="practice" element={(loggedIn()) ? <Practice />: <Navigate to="/account" />}></Route>
          <Route path="contests" element={(loggedIn()) ? <Contests />: <Navigate to="/account" />}></Route>
          <Route path="library" element={(loggedIn()) ? <LibraryMain />: <Navigate to="/account" />}>
            <Route index element={(loggedIn()) ? <Library />: <Navigate to="/account" />}></Route>
            <Route path="e" element={(loggedIn()) ? <Elibrary />: <Navigate to="/account" />} ></Route>
            <Route path="p" element={(loggedIn()) ? <Plibrary />: <Navigate to="/account" />} ></Route>
          </Route>
          <Route path="*" element={<NoPage />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Route>
        
        <Route path="account" element={<AccountsMain />}>
          <Route index element={<Login />}></Route>
          <Route path="newacc" element={<User />}></Route>
          <Route path="sections" element={<Sections />}>
            <Route path="student" element={<StudentLogin />}></Route>
            <Route path="teacher" element={<TeacherLogin />}></Route>
            <Route path="hod" element={<HodLogin />}></Route>
            <Route path="librarian" element={<LibrarianLogin />}></Route>
            <Route path="college" element={<CollegeLogin />}></Route>
          </Route>
        </Route>
        
        <Route path='student' element={(loggedIn()) ? <StudentMain />: <Navigate to="/account" />}>
          <Route index element={<StudentProfile />}></Route>
          <Route path="discussion" element={<StudentDiscussion />}></Route>
          <Route path="assignment" element={<StudentAssignement />}></Route>
          {/* <Route path="notice" element={<StudentNotice />}></Route> */}
          {/* <Route path="progress" element={<StudentProgress />}></Route> */}
          {/* <Route path="result" element={<StudentResult />}></Route> */}
          {/* <Route path="todo" element={<StudentTodo />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}
