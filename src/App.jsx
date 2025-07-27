import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.scss';
import { About, Contact, Hero, Navbar, Projects, Sidebar, Walkman } from './components';

const App = () => {
  useEffect(() => {
    // Detect iOS more accurately
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    if (isIOS) {
      // iOS-specific AOS settings
      AOS.init({ 
        duration: 600, // Shorter duration for iOS
        easing: 'ease-out', // Simpler easing
        once: true, // Animate only once
        offset: 50 // Smaller offset
      });
      
      // Minimal iOS scroll fix - just reset overflow on scroll events
      let scrollTimer;
      const handleScroll = () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          // Force scroll recalculation
          document.body.style.overflow = 'hidden';
          requestAnimationFrame(() => {
            document.body.style.overflow = '';
          });
        }, 150);
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // Normal AOS init for desktop
      AOS.init({ duration: 800, easing: 'ease-in-out-quad' });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Sidebar />
      <Walkman />
    </>
  );
};

export default App;