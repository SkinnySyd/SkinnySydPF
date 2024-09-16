import React from 'react';

const Header = () => {
  return (
    <header className="resume-header">
      <div className="resume-header-left">
        <h1 className="resume-name">Oussama Rachiq</h1>
        <p className="resume-title">DevOps - Ingénieur Informatique et Réseaux</p>
        <div className="resume-contact">
          <span className="resume-contact-item">
            <i className="fas fa-envelope"></i> Rachiq.oussama.et@gmail.com
          </span>
          <span className="resume-contact-item">
            <i className="fas fa-phone"></i> 212 687-415403
          </span>
          <span className="resume-contact-item">
            <i className="fas fa-map-marker-alt"></i> Rabat, Morocco
          </span>
        </div>
      </div>
      <div className="resume-header-right">
        <div className="resume-social-links">
          <a href="#" className="resume-social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="resume-social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="resume-social-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;