import React from 'react'
import img1 from '../../images/profilepic.jpg'
import Footer from './footer'
export default function About() {
  return (<>
    <div className="box-3">
        <div className="mid">
            <h1>MEET THE TEAM</h1>
            <div className="flex-box">
                <div className="card-2">
                    <img src={img1} alt="digambar kumbhar" />
                    <div className="desc-cont">
                        <p>CEO</p>
                        <h2>DIGAMBAR KUMBHAR</h2>
                        <p>Student at STBCE, Tuljapur</p>
                        <p>SKETCHER, BACKBENCHER, IMPATIENT, SELFISH, INSECURE, BAD FOLLOWER OF OWN PASSION, LAZY</p>
                    </div>
                </div>
                <div className="card-2">
                    <img src={img1} alt='onkar jadhav'/>
                    <div className="desc-cont">
                        <p>CEO</p>
                        <h2>ONKAR JADHAV</h2>
                        <p>Student at STBCE, Tuljapur</p>
                        <p>GAMER, GREAT DESIGNER AND SKETCHER, BAD FOLLOWER OF OWN PASSION</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="box-1">
        <div className="mid">
            <h1>OUR GOAL</h1>
            <p>At Study Town, our goal is to empower students to take control of their academic journey. We believe that every student has the potential to succeed, and we are committed to providing the tools and resources needed to achieve that success. Our platform offers a comprehensive evaluation system that allows students to track their progress, identify areas for improvement, and measure their growth over time. Additionally, our extensive collection of study materials covers a wide range of subjects and levels of education, ensuring that every student has access to the information they need to excel. With Study Town, you can be confident that you have everything you need to reach your academic goals.</p>
        </div>
    </div>
    <div className="box-2">
        <div className="mid">
                <h1>OUR MISSION</h1>
                <p>Our mission for Study Circleis to create an accessible and comprehensive platform for students, teachers, and institutions to enhance their educational experience. We aim to provide a user-friendly interface that will enable students to access all the resources they need for their studies, from study materials to evaluation systems. Furthermore, our platform aims to facilitate collaboration and communication between students, teachers, and institutions. We believe that by providing a centralized platform that promotes transparency and accountability, we can create an educational ecosystem that is more efficient, effective, and engaging for all parties involved.</p>
        </div>
    </div>
    <div className="box-1">
        <div className="mid">
            <h1>OUR TARGET</h1>
            <p>Our target at Study Circleis to make education accessible to all. We understand that every student has unique needs and learning styles, and we strive to cater to those needs by providing personalized evaluation and study material. Our aim is to create a platform that empowers students to take control of their learning, no matter their age, background, or skill level. We believe that education is a powerful tool that can transform lives, and we are committed to providing a platform that enables students to reach their full potential. Join us at Study Circleand discover the power of education!</p>
        </div>
    </div>
    <Footer />
</>
  )
}
