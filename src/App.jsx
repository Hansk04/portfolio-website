import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.scss';
import { About, Contact, Hero, Navbar, Projects, Sidebar, Walkman } from './components';

const App = () => {
  useEffect(() => {
    // Detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      // Initialize AOS with iOS-friendly settings
      AOS.init({ 
        duration: 800, 
        easing: 'ease-in-out-quad',
        disable: 'mobile' // This might help - disables AOS on mobile
      });
      
      // Aggressive iOS scroll fix
      document.documentElement.style.webkitOverflowScrolling = 'touch';
      document.body.style.webkitOverflowScrolling = 'touch';
      document.body.style.overflowY = 'scroll';
      document.body.style.overflowX = 'hidden';
      
      // Force scroll reset on any touch
      let scrollTimeout;
      const forceScrollReset = () => {
        clearTimeout(scrollTimeout);
        document.body.style.overflowY = 'hidden';
        scrollTimeout = setTimeout(() => {
          document.body.style.overflowY = 'scroll';
        }, 50);
      };
      
      document.addEventListener('touchend', forceScrollReset, { passive: true });
      
      return () => {
        document.removeEventListener('touchend', forceScrollReset);
      };
    } else {
      // Normal AOS init for non-iOS
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