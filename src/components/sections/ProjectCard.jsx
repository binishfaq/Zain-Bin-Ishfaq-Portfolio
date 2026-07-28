import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group flex h-[360px] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#111827] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400">

      {/* Image */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {project.category && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-2 py-1 text-[10px] font-semibold text-black">
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">

        <h3 className="line-clamp-1 text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#0B1220] px-2 py-1 text-[10px] text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 3 && (
            <span className="rounded-full bg-[#0B1220] px-2 py-1 text-[10px] text-slate-400 border border-slate-700">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4">

          <div className="flex gap-3">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-amber-400"
              >
                <FaGithub size={16} />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-amber-400"
              >
                <FaExternalLinkAlt size={15} />
              </a>
            )}

          </div>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1 text-xs font-semibold text-amber-400 transition hover:gap-2"
          >
            Details
            <FaArrowRight size={11} />
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;