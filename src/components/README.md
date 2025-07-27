title colour: #ffffff (about, ...)
p colour: #cecece
green-accents: #4AF626



import React, { useEffect, useState, useRef } from 'react';
import Favicon from '/src/assets/images/favicon.svg?react';
import './Navbar.scss';
import Walkman from '../Walkman/Walkman';

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
  const scrollDirection = useScrollDirection(20); // 20px threshold for less sensitivity
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
    // Animate nav items delay on mount
    const navItems = document.querySelectorAll('.nav__item');
    navItems.forEach((item, index) => {
      item.style.animationDelay = `${0.5 + index * 0.3}s`;
    });
  }, []);

  return (
    <nav className={`nav ${isVisible ? 'nav--visible' : 'nav--hidden'}`}>
      <div className="nav__left cascade">
        <div className="nav__logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <img 
            src="/src/assets/images/favicon.svg" 
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
        <div className="nav__walkman">
          <Walkman />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background-color: rgba(18, 18, 18, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease-in-out; 

  &--hidden {
    transform: translateY(-100%); 
  }

  &--visible {
    transform: translateY(0);
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 1rem;
    opacity: 0;
    animation: fadeInDown 0.8s forwards;
    height: 100%;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &-svg {
      width: 50px; // Adjust size as needed
      height: 50px;
      transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      }
    }
  }
  

  &__name {
    font-family: 'Press Start 2P', cursive;
    color: #fff;
    font-size: 0.8rem;
  }

  &__right-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__right {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  &__item {
    opacity: 0;
    animation: fadeInDown 0.8s forwards;

    a {
      font-family: 'Press Start 2P', cursive;
      color: #ffffff;
      font-size: 0.7rem;
      text-decoration: none;
      position: relative;
      padding: 0.5rem 0;
      transition: all 0.3s ease;

      &:hover {
        color: #4AF626;

        &::after {
          width: 100%;
          left: 0;
        }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: #4AF626;
        transition: all 0.3s ease;
      }
    }
  }

  &__walkman {
    position: relative !important;
    display: none; 

    @media (max-width: 768px) {
      display: block;
      margin-left: 0.5rem;

      .walkman {
        position: relative !important;
        z-index: 1001 !important;
        top: auto !important;
        right: auto !important;

        &__button {
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;

          &:hover {
            background: rgba(0, 0, 0, 0.7);
            transform: scale(1.1);
          }
        }

        &__vinyl {
          width: 20px;
          height: 20px;

          svg {
            fill: #4AF626;
            filter: drop-shadow(0 0 2px #4AF626);
            transition: all 0.3s ease;
          }
        }

        &__tonearm {
          top: -15px;
          right: 5px;
          width: 40px;
          height: 60px;

          svg {
            fill: #4AF626;
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .nav {
    padding: 1rem 5%;

    &__name {
      display: none;
    }

    &__right {
      gap: 1rem;
    }

    &__item a {
      font-size: 0.6rem;
    }
  }
}

send the full updated version



