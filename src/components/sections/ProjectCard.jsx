import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="card-image">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image"
        />
      </div>
      
      <div className="card-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="tech-stack">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="tech-badge">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-badge more">+{project.technologies.length - 3}</span>
          )}
        </div>
        
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          View Project
          <span className="link-arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;