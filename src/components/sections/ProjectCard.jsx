import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <div className="bg-[#ffff] rounded-xl overflow-hidden border border-[#082052]/20 transition-all duration-200 cursor-pointer shadow-[0_2px_8px_rgba(8,32,82,0.05)] hover:border-[#082052] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(8,32,82,0.12)]">
        {/* Project Image */}
        <div className="w-full h-[180px] overflow-hidden bg-[#082052]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="p-4 sm:p-5">
          <h3 className="text-[#082052] text-lg font-bold mb-2 leading-tight line-clamp-1">
            {project.title}
          </h3>
          <p className="text-[#555] text-sm leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="bg-[#082052]/10 text-[#082052] px-2 py-0.5 rounded-md text-xs font-medium">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="bg-[#082052]/15 text-[#082052] px-2 py-0.5 rounded-md text-xs font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <span className="inline-flex items-center gap-1.5 text-[#082052] text-sm font-semibold transition-all duration-200 hover:gap-2">
            View Details
            <span className="transition-transform duration-200">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;