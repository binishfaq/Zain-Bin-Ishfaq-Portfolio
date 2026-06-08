import React from 'react';
import ProjectCard from '../components/sections/ProjectCard';
import { projectsData } from '../data/portfolioData';
import './Pages.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="page-header">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">Here's what I've been building</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;