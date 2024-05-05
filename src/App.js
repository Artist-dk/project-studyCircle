import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import Student from './components/Student';
import Teacher from './components/Teacher';

import './style/style.css';
import './style/themeDark.scss';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

export default function App(){
  // useEffect(() => {
  //   fetch('http://localhost:8081/users')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))
  // })
  const [page, setPage] = useState(<Main />);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
          <Route index element={<Main />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  ) 
}
