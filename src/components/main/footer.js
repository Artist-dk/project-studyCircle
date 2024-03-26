import React from 'react'
import '../../style/MainFooter.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="mid">
        <h1>Study Circle</h1>
        <h4>Sub Heading</h4>
        <nav className="linkBox">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav>
        <nav className="btnBox">
          <ul>
            <li><button>H</button></li>
            <li><button>H</button></li>
            <li><button>H</button></li>
          </ul>
        </nav>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus soluta impedit cum illo laudantium corporis assumenda mollitia sapiente. Blanditiis porro odit accusantium voluptatum rem pariatur a obcaecati rerum consectetur voluptatem!</p>
      </div>
    </div>
  )
}
