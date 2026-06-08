import React from 'react';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript", icon: <TbBrandJavascript />, color: "#F7DF1E" },
    { name: "Node.js", icon: <FaNode />, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  ];

  return (
    <div className="tech-stack-section">
      <div className="tech-stack-header">
        <h2>My Tech Stack</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="tech-icons-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-icon-card">
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;