
// import React from 'react';
import { Link } from 'react-router-dom';
import './Practice.scss';

export default function Practice() {

  const practiceModules = [
    {
      title: 'Daily Practice',
      description: 'Solve daily questions to strengthen concepts and build consistency.',
      route: '/practice/daily',
    },
    {
      title: 'Subject-wise Practice',
      description: 'Practice questions categorized by subject and topic.',
      route: '/practice/subjects',
    },
    {
      title: 'Mock Tests',
      description: 'Attempt full-length mock tests with real exam patterns.',
      route: '/practice/mocks',
    },
    {
      title: 'Previous Year Questions',
      description: 'Practice PYQs to understand trends and important topics.',
      route: '/practice/pyq',
    },
    {
      title: 'Timed Challenges',
      description: 'Improve speed and accuracy with time-bound challenges.',
      route: '/practice/challenges',
    },
    {
      title: 'Weak Area Trainer',
      description: 'AI-assisted practice focusing on your weak areas.',
      route: '/practice/weak-areas',
    },
  ];

  return (
    <section className="sc-practice">
      <div className="sc-practice__container">

        <header className="sc-practice__header">
          <h1>Practice Zone</h1>
          <p>
            Practice smarter, not harder. Strengthen your concepts, track your
            improvement, and master every subject with structured practice.
          </p>
        </header>

        <div className="sc-practice__grid">
          {practiceModules.map((item, index) => (
            <div key={index} className="sc-practice__card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <Link to={item.route} className="sc-practice__btn">
                Start Practice
              </Link>
            </div>
          ))}
        </div>

        <footer className="sc-practice__footer">
          <p>
            📊 Track accuracy • ⏱ Improve speed • 🧠 Master concepts
          </p>
        </footer>

      </div>
    </section>
  );
}








