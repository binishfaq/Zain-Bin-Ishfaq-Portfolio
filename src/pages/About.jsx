import React from 'react';
import TechStack from '../components/sections/TechStack';
import './Pages.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Get to know me better</p>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Zain Bin Ishfaq, a passionate <span className="highlight-text">MERN Stack Developer</span> dedicated to crafting 
              beautiful, functional, and user-friendly websites. With a keen eye for design 
              and a love for efficient code, I transform ideas into digital experiences that 
              make a difference.
            </p>

            <h2>What I Do?</h2>
            <p>
              I specialize in <span className="highlight-text">MERN Stack Development</span> (MongoDB, Express.js, React, Node.js), 
              building full-stack web applications from concept to deployment. Whether it's a simple 
              landing page or a complex e-commerce platform, I bring creativity and technical 
              expertise to every project.
            </p>

            <h2>My Journey</h2>
            <p>
              My passion for coding started years ago, and since then I've been constantly 
              learning and evolving. As a MERN Stack developer, I've worked on various projects 
              that have helped me master the art of building scalable and efficient web applications.
            </p>
          </div>

          <div className="about-skills">
            <h3>MERN Stack Expertise</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>RESTful APIs</li>
                  <li>Authentication & Authorization</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Database & Tools</h4>
                <ul>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Git & GitHub</li>
                  <li>VS Code & Postman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Component - Called Here */}
        <TechStack />
      </div>
    </div>
  );
};

export default About;