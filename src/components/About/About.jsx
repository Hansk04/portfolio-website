import React from 'react';
import './About.scss';
import Headshot from '/src/assets/images/headshot.jpg';
import { FaReact, FaNodeJs, FaRegFileAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPython, SiR, SiMysql, SiTableau } from 'react-icons/si';

const About = () => {
  const tools = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "R", icon: <SiR /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Tableau", icon: <SiTableau /> }
  ];

  const handleDownloadResume = () => {
    try {
      const resumeUrl = '/src/assets/resume.pdf';
      window.open(resumeUrl, '_blank');
    } catch (error) {
      console.error('Failed to open resume:', error);
    }
  };

return (
  <section className="about" id="about" data-aos="fade" data-aos-duration="800">
    <div className="about__content">
      <div className="about__left">
        <h2 
          className="about__title" 
          data-aos="fade-down" 
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-anchor="#about"
        >
          About Me
        </h2>
        
        <div className="about__text">
          <p 
            data-aos="fade-up" 
            data-aos-duration="900"
            data-aos-delay="450"
            data-aos-anchor="#about"
          >
              Hello! I'm Hans Kuthy, a data science major at Northwestern University and 
              developer passionate about creating impactful digital experiences.
          </p>
          
          <p 
            data-aos="fade-up" 
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-anchor="#about"
          >
              Currently studying Data Science and Economics at Northwestern University, I plan to specialize 
              in anything from AI work to sports analytics.
          </p>
          
          <div 
            className="tools-section"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="750"
            data-aos-anchor="#about"
          >
            <h3 className="tools-header">// Tech Stack</h3>
            <ul className="tools-list">
              {tools.map((tool, index) => (
                <li 
                  key={index} 
                  className="tool-item"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={800 + (index * 100)} 
                  data-aos-easing="ease-out-back"
                  data-aos-anchor="#about"
                >
                  {tool.icon}
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <button 
            className="resume-button" 
            onClick={handleDownloadResume}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="1100" 
            data-aos-anchor="#about"
          >
            <FaRegFileAlt className="resume-icon" />
            Resume
          </button>
        </div>
      </div>

      <div 
        className="about__right"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="600"
        data-aos-anchor="#about"
      >
        <div className="headshot-container">
          <img src={Headshot} alt="Hans Kuthy" className="headshot-image" />
          <div className="headshot-border"></div>
        </div>
      </div>
    </div>
  </section>
);
};

export default About;