import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ArrowLeft } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-[#082052]">Project Not Found</h2>
        <p className="text-[#666] mt-2">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="mt-6 text-[#082052] font-semibold hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 min-h-[70vh] bg-[#ffff]">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-[#082052] hover:text-[#0a2a6e] transition-colors font-medium mb-6"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#082052]/10">
          {/* Project Image */}
          <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-[#082052]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#082052] mb-3">
              {project.title}
            </h1>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#082052] mb-2">Description</h3>
              <p className="text-[#555] text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Extended Description */}
            {project.extendedDescription && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#082052] mb-3">Project Details</h3>
                <div 
                  className="prose prose-sm sm:prose-base max-w-none text-[#555] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.extendedDescription }}
                />
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#082052] mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#082052]/10 text-[#082052] px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-[#082052]/10">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#082052] text-[#ffff] px-6 py-2.5 rounded-lg hover:bg-[#0a2a6e] transition-colors font-medium"
                >
                  <FaGithub size={20} />
                  View on GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#082052] text-[#082052] px-6 py-2.5 rounded-lg hover:bg-[#082052] hover:text-[#ffff] transition-colors font-medium"
                >
                  <FaExternalLinkAlt size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;