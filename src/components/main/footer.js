import React from 'react'
import './MainFooter.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="mid">
        <h1>Study Circle</h1>
        <h2>Supportive Academic Environment</h2>
        <p>A comprehensive educational platform for students and educators.</p>
        <nav className="linkBox">
      <ul class="links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
        </nav>
  <div class="footer-bottom">
    <p>&copy; 2024 Study Circle. All rights reserved. | Designed by Digambar Kumbhar</p>
  </div>
      </div>
    </div>
  )
}