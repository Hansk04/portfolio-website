import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.scss';
import { About, Contact, Hero, Navbar, Projects, Sidebar, Walkman } from './components';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out-quad' });
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