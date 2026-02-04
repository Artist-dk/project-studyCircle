import React, { useState } from 'react';
import './ToggleNav.scss';

export default function ToggleNav({ children, title = 'Menu' }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        className="sc-toggle-nav__open-btn"
        onClick={togglePanel}
      >
        ☰ {title}
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="sc-toggle-nav__overlay"
          onClick={togglePanel}
        />
      )}

      {/* NAV PANEL */}
      <aside className={`sc-toggle-nav ${isOpen ? 'sc-toggle-nav--open' : ''}`}>
        <div className="sc-toggle-nav__header">
          <h2>{title}</h2>
          <button
            className="sc-toggle-nav__close-btn"
            onClick={togglePanel}
          >
            ✕
          </button>
        </div>

        <nav className="sc-toggle-nav__content">
          {children}
        </nav>
      </aside>
    </>
  );
}
