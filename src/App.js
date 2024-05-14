import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate,Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

import './styles/Main.css'

import HomeHeader from './components/HomeHeader';
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
      return true;
    }
    return true;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHeader />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contactus" element={<Contactus />}></Route>
          <Route path="settings" element={<Settings />}></Route>
          <Route path="bridge" element={<Bridge />}></Route>
          <Route path="tutorials" element={<Tutorials />}></Route>
          <Route path="practice" element={<Practice />}></Route>
          <Route path="contests" element={<Contests />}></Route>
          <Route path="library" element={<LibraryMain />}>
            <Route index element={<Library />}></Route>
            <Route path="e" element={<Elibrary />} ></Route>
            <Route path="p" element={<Plibrary />} ></Route>
          </Route>
          <Route path="*" element={<NoPage />}></Route>
          <Route path='student' element={<StudentMain />}>
            <Route index element={<StudentProfile />}></Route>
            <Route path="discussion" element={<StudentDiscussion />}></Route>
            <Route path="assignment" element={<StudentAssignement />}></Route>
            {/* <Route path="notice" element={<StudentNotice />}></Route> */}
            {/* <Route path="progress" element={<StudentProgress />}></Route> */}
            {/* <Route path="result" element={<StudentResult />}></Route> */}
            {/* <Route path="todo" element={<StudentTodo />}></Route> */}
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
          <Route path="logout" element={<Logout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}
