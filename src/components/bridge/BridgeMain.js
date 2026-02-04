import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './../../common/ImageSlider';
import Footer from './../main/footer';
import './StudyCircleHome.scss';

export default function BridgeMain() {

  useEffect(() => {
    const trackScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      // console.log(scrollPosition);
    };

    window.addEventListener('scroll', trackScroll);
    return () => window.removeEventListener('scroll', trackScroll);
  }, []);

  const images = [
    'https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYu03owCR-GDLMUwubWcmfZMvxn2bJUgSMw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-9kj-vHmBgL62VabJcscxVWyxoX1egpJos5deIce7IfB2XCOetlc4OaO180swzasQA&usqp=CAU',
  ];

  return (
    <div className="sc-home">

      {/* HERO */}
      <section className="sc-hero">
        <div className="sc-container">
          <p className="sc-quote">
            Education is the most powerful weapon which you can use to change the world.
          </p>

          <h1 className="sc-title">
            <span className="sc-gradient">WELCOME</span> TO STUDY CIRCLE
          </h1>

          <p className="sc-description">
            Study Circle is your one-stop destination for learning, evaluation,
            collaboration and growth.
          </p>

          <Link to="/account" state="login" className="sc-primary-btn">
            Go to Other Section
          </Link>
        </div>
      </section>

      {/* SLIDER */}
      <section className="sc-slider">
        <div className="sc-container">
          <ImageSlider images={images} />
        </div>
      </section>

      {/* GOAL */}
      <section className="sc-section">
        <div className="sc-container">
          <h2>Our Goal</h2>
          <p>
            We empower students to take control of their academic journey using
            personalized learning, analytics, and resources.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sc-features">
        <div className="sc-container">
          <h2>Key Features</h2>

          <div className="sc-feature-grid">
            {[
              'Personalized Learning',
              'Collaborative Environment',
              'Resource Library',
              'Real-Time Feedback',
              'Assignment Management',
              'Communication Tools',
              'Progress Analytics',
              'Gamification',
              'Mobile Support',
              'Security & Privacy'
            ].map((title, index) => (
              <div key={index} className="sc-feature-card">
                <h3>{title}</h3>
                <p>
                  Designed to enhance learning outcomes and student engagement.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLE SECTION */}
      <section className="sc-section">
        <div className="sc-container">
          <h2>Top Disciplined Colleges</h2>

          <table className="sc-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>College</th>
                <th>Location</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Oxford University</td>
                <td>UK</td>
                <td>19.3</td>
              </tr>
              <tr>
                <td>2</td>
                <td>MIT</td>
                <td>USA</td>
                <td>18.8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
}
