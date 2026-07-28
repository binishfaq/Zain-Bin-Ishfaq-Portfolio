import React from "react";
import ProjectCard from "../components/sections/ProjectCard";
import { projectsData } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-amber-400 font-semibold">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5">
            A collection of projects showcasing my experience in
            frontend, backend, full-stack development and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
  {projectsData.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>

      </div>
    </section>
  );
};

export default Projects;