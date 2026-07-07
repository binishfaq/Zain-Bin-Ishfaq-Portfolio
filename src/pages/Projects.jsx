import React from 'react';
import ProjectCard from '../components/sections/ProjectCard';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 min-h-[70vh] bg-[#ffff]">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#082052] to-[#0a2a6e] bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-[#666] text-sm sm:text-base mt-2">Here's what I've been building</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;