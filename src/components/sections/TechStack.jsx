import LogoLoop from './LogoLoop';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: <TbBrandJavascript />, color: "#F7DF1E", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", icon: <FaReact />, color: "#61DAFB", href: "https://react.dev" },
    { name: "Node.js", icon: <FaNode />, color: "#339933", href: "https://nodejs.org" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff", href: "https://expressjs.com" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", href: "https://www.mongodb.com" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1", href: "https://www.mysql.com" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff", href: "https://github.com" },
  ];

  const techLogos = technologies.map(tech => ({
    node: <div style={{ color: tech.color, fontSize: '4rem' }}>{tech.icon}</div>,
    title: tech.name,
    href: tech.href,
  }));

  return (
    <div className="mt-8 p-4 sm:p-6 md:p-8 bg-[#ffff] rounded-2xl border border-[#082052]/20">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-[#082052] text-2xl md:text-3xl font-bold mb-2">My Tech Stack</h2>
        <p className="text-[#666] text-sm md:text-base">Technologies I work with</p>
      </div>

      <div style={{ height: '150px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={90}
          gap={70}
          hoverSpeed={0.3}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology stack"
        />
      </div>
    </div>
  );
};

export default TechStack;