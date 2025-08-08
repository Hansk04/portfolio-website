import React, { useState } from 'react';
import './Projects.scss';

import { FaGithub, FaSass } from 'react-icons/fa';      
import { ImGoogleDrive } from 'react-icons/im'; 

import { FaReact, FaPython, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiOpencv, SiTensorflow, SiVite, SiBlender, SiJavascript, SiNumpy, SiPandas, SiPlotly, SiScikitlearn } from 'react-icons/si';
import { BiLogoFigma } from 'react-icons/bi';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Video Sports Analytics",
      description: "Computer vision system for automated player tracking and performance analysis",
      cover: "assets/projects_covers/project1.jpg",
      details: "Advanced computer vision and machine learning application that analyzes sports video footage to automatically track players, distinguish between teams, calculate ball possession percentages, and measure player speeds in real-time.",
      github: "https://github.com/yourusername/video-sports-analytics",
      tools: [
        { icon: <FaPython size={24} />, name: "Python" },
        { icon: <SiOpencv size={24} />, name: "OpenCV" },
        { icon: <SiTensorflow size={24} />, name: "TensorFlow" },
      ]
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "Modern responsive portfolio built with React, Vite and vanilla JavaScript",
      cover: "assets/projects_covers/project2.jpg",
      details: "A sleek, performance-optimized personal website showcasing projects and skills. Built from scratch using Vite for fast development and bundling, with clean HTML, CSS, and JavaScript for optimal loading speed and user experience.",
      github: "https://github.com/Hansk04/portfolio-website",
      tools: [
        { icon: <FaReact size={24} />, name: "React" },
        { icon: <SiVite size={24} />, name: "Vite" },
        { icon: <FaSass size={24} />, name: "SCSS" },
        { icon: <SiJavascript size={24} />, name: "Javascript (Jsx)" }
      ]
    },
    {
      id: 3,
      title: "Built Different",
      description: "Ranking the world's toughest sports through data-driven analysis",
      cover: "assets/projects_covers/project9.jpg",
      details: "Data-driven analysis of athletic skill ratings across 60 sports to quantify toughness and specialization patterns. Features interactive visualizations, clustering analysis, and dimensionality reduction to reveal which sports demand the most diverse skill sets and how athletic attributes correlate across disciplines.",      
      github: "https://github.com/Hansk04/Data-science-portfolio/blob/main/Sports_Toughness_EDA.ipynb",
      tools: [
        { icon: <SiNumpy size={24} />, name: "Numpy" },
        { icon: <SiPandas size={24} />, name: "Pandas" },
        { icon: <SiPlotly size={24} />, name: "Plotly" },
        { icon: <SiScikitlearn size={24} />, name: "Scikit-learn" }
      ]
    }
  ];

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <h2 className="projects__title" data-aos="fade-right" data-aos-delay="100">
        My Projects
      </h2>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
            data-aos="zoom-in"
            data-aos-delay={index * 150}  
            data-aos-easing="ease-in-out"
          >
            <div className="project-card__cover">
              <img src={project.cover} alt={project.title} />
            </div>
            
            <div className="project-card__content">
              <h3 className="project-card__title" data-aos="fade-right" data-aos-delay={index * 150 + 200}>
                {project.title}
              </h3>
              <p className="project-card__description" data-aos="fade-right" data-aos-delay={index * 150 + 300}>
                {project.description}
              </p>
              
              <div className="project-card__action-row" data-aos="fade-up" data-aos-delay={index * 150 + 400}>
                <button 
                  className="project-card__button"
                  onClick={() => toggleProject(project.id)}
                >
                  {expandedProject === project.id ? '▲ Collapse' : '▼ Learn More'}
                </button>

                <div className="project-card__links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <FaGithub size={20} color= "var(--p-white)" />
                    </a>
                  )}
                  {project.googleDrive && (
                    <a 
                      href={project.googleDrive} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`${project.title} Google Drive Folder`}
                    >
                      <ImGoogleDrive size={20} color="var(--p-white)" />
                    </a>
                  )}
                </div>
              </div>

              {expandedProject === project.id && (
                <div className="project-card__details" data-aos="fade-up">
                  <p>{project.details}</p>
                  <div className="project-card__tools" data-aos="fade-up">
                    <h4 className="project-card__tools-title">Built With:</h4>
                    <div className="project-card__tools-list">
                      {project.tools.map((tool, i) => (
                        <div key={i} className="project-card__tool" title={tool.name}>
                          {tool.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
