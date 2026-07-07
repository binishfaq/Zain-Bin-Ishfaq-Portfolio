import React from 'react';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";

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
    <div className="mt-8 p-4 sm:p-6 md:p-8 bg-[#ffff] rounded-2xl border border-[#082052]/20">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-[#082052] text-2xl md:text-3xl font-bold mb-2">My Tech Stack</h2>
        <p className="text-[#666] text-sm md:text-base">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 text-center">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:bg-[#082052]/5">
            <div className="text-3xl sm:text-4xl md:text-5xl transition-transform duration-200 hover:scale-105" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <span className="text-[#082052] text-xs sm:text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;