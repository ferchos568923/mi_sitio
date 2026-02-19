import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ t, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          {t.navbar.logo.split(' ')[0]}<span className="logo-accent">{t.navbar.logo.substring(t.navbar.logo.indexOf(' '))}</span>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-item">{t.navbar.home}</a>
          <a href="#classes" className="nav-item">{t.navbar.classes}</a>
          <a href="#membership" className="nav-item">{t.navbar.membership}</a>
          <a href="#trainers" className="nav-item">{t.navbar.trainers}</a>
          <button className="nav-item lang-toggle" onClick={toggleLanguage}>
            {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
          </button>
          <a href="#contact" className="nav-item btn-cta">{t.navbar.join}</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
