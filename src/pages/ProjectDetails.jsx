import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/portfolioData";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectsData.find(
    (p) => p.id === parseInt(id)
  );

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#0B1220] text-white px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Project Not Found
          </h1>

          <p className="text-slate-400 mb-8">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-amber-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0B1220] text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition mb-8"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Project Card */}

        <div className="rounded-3xl border border-slate-700 bg-[#111827] overflow-hidden shadow-2xl">

          {/* Hero Image */}

          <div className="overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[220px] sm:h-[320px] lg:h-[450px] object-cover hover:scale-105 transition duration-700"
            />

          </div>

          {/* Content */}

          <div className="p-8 lg:p-12">

            <h1 className="text-4xl lg:text-5xl font-black">
              {project.title}
            </h1>

            <p className="mt-5 text-slate-400 text-lg leading-8">
              {project.description}
            </p>

            {/* Tech Stack */}

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-5">
                Technologies Used
              </h2>

              <div className="flex flex-wrap gap-3">

                {project.technologies.map((tech, index) => (

                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-amber-400/30 text-sm font-medium hover:border-amber-400 hover:text-amber-300 transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            {/* Project Overview */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold mb-5">
                Project Overview
              </h2>

              <div className="text-slate-300 leading-8">

                {project.extendedDescription ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project.extendedDescription,
                    }}
                  />
                ) : (
                  <p>
                    {project.description}
                  </p>
                )}

              </div>

            </div>
                        {/* Key Features */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold mb-5">
                Key Features
              </h2>

              {project.features && project.features.length > 0 ? (

                <div className="grid sm:grid-cols-2 gap-4">

                  {project.features.map((feature, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-4"
                    >
                      <FaCheckCircle className="text-amber-400 text-lg flex-shrink-0" />

                      <p className="text-slate-300">
                        {feature}
                      </p>

                    </div>

                  ))}

                </div>

              ) : (

                <div className="grid sm:grid-cols-2 gap-4">

                  {[
                    "Responsive Design",
                    "Modern UI/UX",
                    "REST API Integration",
                    "Clean & Scalable Code",
                    "Authentication",
                    "Mobile Friendly",
                  ].map((feature, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-4"
                    >
                      <FaCheckCircle className="text-amber-400 text-lg flex-shrink-0" />

                      <p className="text-slate-300">
                        {feature}
                      </p>

                    </div>

                  ))}

                </div>

              )}

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-14 pt-8 border-t border-slate-700">

              {project.githubLink && (

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 text-black px-6 py-3 font-semibold hover:scale-105 transition duration-300"
                >
                  <FaGithub />
                  View Source Code
                </a>

              )}

              {project.liveLink && (

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 text-white hover:bg-slate-800 transition duration-300"
                >
                  <FaExternalLinkAlt size={15} />
                  Live Demo
                </a>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProjectDetails;