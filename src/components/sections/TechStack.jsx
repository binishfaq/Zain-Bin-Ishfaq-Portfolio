import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiVite,
} from "react-icons/si";

import { TbBrandJavascript } from "react-icons/tb";
import LogoLoop from "./LogoLoop";

const techData = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400" />,
      },
      {
        name: "JavaScript",
        icon: <TbBrandJavascript className="text-yellow-400" />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      {
        name: "Vite",
        icon: <SiVite className="text-violet-400" />,
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-white" />,
      },
      {
        name: "REST API",
        icon: (
          <span className="text-amber-400 font-bold text-lg">
            API
          </span>
        ),
      },
    ],
  },

  {
    title: "Database",
    items: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-400" />,
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-white" />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-sky-500" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-400" />,
      },
    ],
  },
];

const logoItems = techData.flatMap((section) =>
  section.items.map((item) => ({
    title: item.name,
    node: (
      <div className="flex flex-col items-center gap-2">
        <div className="text-5xl">{item.icon}</div>
        <span className="text-sm text-slate-400">
          {item.name}
        </span>
      </div>
    ),
  }))
);

const TechStack = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-[#0B1220]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-amber-400 font-semibold">
            Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Tech Stack
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-8">
            The technologies and tools I use to build
            responsive, scalable and modern web applications.
          </p>

        </div>

        {/* Categories */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {techData.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-700 bg-[#111827] p-7 hover:border-amber-400 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {section.title}
              </h3>

              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 rounded-xl bg-[#0B1220] p-3 border border-slate-800"
                  >
                    <div className="text-3xl">
                      {item.icon}
                    </div>

                    <span className="text-slate-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Logo Loop */}

        <div className="mt-20 rounded-3xl border border-slate-700 bg-[#111827] py-10 px-4">

          <LogoLoop
            logos={logoItems}
            speed={55}
            direction="left"
            logoHeight={75}
            gap={55}
            hoverSpeed={0.25}
            scaleOnHover
            fadeOut
            fadeOutColor="#111827"
          />

        </div>

      </div>
    </section>
  );
};

export default TechStack;