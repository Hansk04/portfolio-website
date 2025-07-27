import React, { useEffect, useState, useRef } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import faviconLight from '../../assets/images/favicon-light.svg';
import faviconDark from '../../assets/images/favicon-dark.svg';
import './Navbar.scss';

const useScrollDirection = (threshold = 20, initialDirection = 'up') => {
  const [scrollDirection, setScrollDirection] = useState(initialDirection);
  const lastScrollY = useRef(window.pageYOffset);
  const ticking = useRef(false);

  const updateScrollDirection = () => {
    const scrollY = window.pageYOffset;
    const diff = scrollY - lastScrollY.current;

    if (Math.abs(diff) < threshold) {
      ticking.current = false;
      return;
    }

    setScrollDirection(diff > 0 ? 'down' : 'up');
    lastScrollY.current = scrollY > 0 ? scrollY : 0;
    ticking.current = false;
  };

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollDirection;
};

const Navbar = () => {
  const scrollDirection = useScrollDirection(20); 
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (scrollDirection === 'down') setIsVisible(false);
    else if (scrollDirection === 'up') setIsVisible(true);
  }, [scrollDirection]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const navItems = document.querySelectorAll('.nav__item');
    navItems.forEach((item, index) => {
      item.style.animationDelay = `${0.5 + index * 0.3}s`;
    });
  }, []);

  const [isLightTheme, setIsLightTheme] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    const classMethod = isLightTheme ? 'add' : 'remove';
    document.body.classList[classMethod]('light-theme');
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
  }, [isLightTheme]);

  const toggleTheme = () => {
    setIsLightTheme(prev => !prev);
  };

  // Use imported image modules so Vite handles the paths correctly
  const logoSrc = isLightTheme ? faviconLight : faviconDark;

  return (
    <nav className={`nav ${isVisible ? 'nav--visible' : 'nav--hidden'}`}>
      <div className="nav__left cascade">
        <div className="nav__logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <img 
            src={logoSrc} 
            alt="HK Logo"
            className="nav__logo-svg"
          />
        </div>
        <div className="nav__name" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          Hans Kuthy
        </div>
      </div>

      <div className="nav__right-container">
        <ul className="nav__right">
          <li className="nav__item">
            <a href="#about">About</a>
          </li>
          <li className="nav__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme} 
          aria-label="Toggle light/dark theme" 
          title={`Switch to ${isLightTheme ? 'dark' : 'light'} mode`}
        >
          <span className={`theme-toggle__icon ${isLightTheme ? 'light' : 'dark'}`}>
            {isLightTheme ? <FiSun size={20} /> : <FiMoon size={20} />}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
