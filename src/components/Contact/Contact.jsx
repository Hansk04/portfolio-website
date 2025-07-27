import React from 'react';
import './Contact.scss';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const handleEmailClick = () => {
    window.open('mailto:hanskuthy33@gmail.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-out">
      <div className="contact__content">
        <h2 
          className="contact__title" 
          data-aos="fade-right" 
          data-aos-delay="100" 
          data-aos-duration="700"
        >
          Get In Touch
        </h2>
        <p 
          className="contact__description"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          I am looking for any interesting new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <button 
          className="contact__button"
          onClick={handleEmailClick}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          Reach Out
        </button>
        
        <div 
          className="contact__socials"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="700"
        >
          <a href="https://github.com/HansK04" target="_blank" rel="noopener noreferrer" className="contact__social-link" data-aos="zoom-in" data-aos-delay="450">
            <FaGithub className="contact__social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/Hanskuthy" target="_blank" rel="noopener noreferrer" className="contact__social-link" data-aos="zoom-in" data-aos-delay="500">
            <FaLinkedin className="contact__social-icon" />
          </a>
          <a href="https://instagram.com/Hanskuthy" target="_blank" rel="noopener noreferrer" className="contact__social-link" data-aos="zoom-in" data-aos-delay="550">
            <FaInstagram className="contact__social-icon" />
          </a>
          <a href="mailto:hanskuthy33@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__social-link" data-aos="zoom-in" data-aos-delay="600">
            <FaEnvelope className="contact__social-icon" />
          </a>
        </div>
      </div>
      <div 
        className="contact__copyright"
      >
        &copy; 2025 Hans Kuthy. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
