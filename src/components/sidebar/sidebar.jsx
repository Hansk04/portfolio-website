import React from 'react';
import './sidebar.scss';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-line"></div>
      <div className="social-icons">
        <a href="https://github.com/HansK04" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://linkedin.com/in/Hanskuthy" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://instagram.com/Hanskuthy" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="mailto:hanskuthy33@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;