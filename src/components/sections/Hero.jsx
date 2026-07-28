import React, { useEffect } from "react";
import Typed from "typed.js";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { CiSaveDown1 } from "react-icons/ci";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typed-text", {
      strings: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "React Developer",
        "Node.js Developer",
        "Problem Solver",
      ],
      typeSpeed: 70,
      backSpeed: 45,
      backDelay: 1800,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Zain_Bin_Ishfaq.pdf";
    link.download = "Zain_Bin_Ishfaq.pdf";
    link.click();
  };

  const scrollProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
   <section id="home" className="relative min-h-screen bg-[#0B1220] overflow-hidden flex items-center text-white pt-20 lg:pt-28">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[6px] text-amber-400 font-semibold">
              Welcome
            </p>

            <h1 className="text-5xl md:text-7xl font-black mt-5 leading-tight">
              Zain Bin
              <br />
              Ishfaq
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mt-6 h-10">
              <span className="typed-text text-amber-400"></span>
            </h2>

            <p className="text-slate-400 text-lg leading-8 mt-8 max-w-xl">
              I build secure, scalable and modern web applications
              using React, Node.js, Express and MongoDB with a focus
              on clean architecture and exceptional user experience.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={scrollProjects}
                className="flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-black transition hover:-translate-y-1"
              >
                View Projects
                <FaArrowRight />
              </button>

              <button
                onClick={downloadResume}
                className="flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 transition hover:bg-slate-800"
              >
                <CiSaveDown1 size={22} />
                Resume
              </button>
            </div>

            <div className="flex gap-5 mt-10 text-2xl">
              <a
                href="https://github.com/zainbinishfaq"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/zainbinishfaq"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:your@email.com"
                className="hover:text-amber-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

{/* Right Side */}
<div className="relative flex items-center justify-center mt-12 lg:mt-0">

  {/* Glow */}
  <div className="absolute w-[320px] h-[320px] bg-amber-400/20 rounded-full blur-[100px]"></div>

  {/* Outer Ring */}
  <div className="relative w-[330px] h-[330px]">

    {/* Animated Border */}
    <div className="absolute inset-0 rounded-full border-2 border-amber-400/40 animate-pulse"></div>

    {/* Profile */}
    <div className="absolute inset-[35px] rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl bg-[#111827]">
      <img
        src={heroImage}
        alt="Zain Bin Ishfaq"
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </div>

   {/* React */}
<div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-[#111827]/90 backdrop-blur-md border border-[#61DAFB] px-4 py-2 shadow-xl shadow-[#61DAFB]/20 hover:scale-110 hover:-translate-y-1 hover:shadow-[#61DAFB]/40 transition-all duration-300 cursor-pointer animate-[float_4s_ease-in-out_infinite]">
  <FaReact className="text-[#61DAFB] text-lg" />
  <span className="text-white text-sm font-medium">React</span>
</div>

{/* Node */}
<div className="absolute top-10 -right-8 flex items-center gap-2 rounded-full bg-[#111827]/90 backdrop-blur-md border border-[#68A063] px-4 py-2 shadow-xl shadow-[#68A063]/20 hover:scale-110 hover:-translate-y-1 hover:shadow-[#68A063]/40 transition-all duration-300 cursor-pointer animate-[float_4s_ease-in-out_infinite]">
  <FaNodeJs className="text-[#68A063] text-lg" />
  <span className="text-white text-sm font-medium">Node.js</span>
</div>

{/* Express */}
<div className="absolute bottom-14 -right-10 flex items-center gap-2 rounded-full bg-[#111827]/90 backdrop-blur-md border border-slate-500 px-4 py-2 shadow-xl shadow-slate-500/20 hover:scale-110 hover:-translate-y-1 hover:shadow-slate-400/40 transition-all duration-300 cursor-pointer animate-[float_4s_ease-in-out_infinite]">
  <SiExpress className="text-white text-lg" />
  <span className="text-white text-sm font-medium">Express</span>
</div>

{/* MongoDB */}
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-[#111827]/90 backdrop-blur-md border border-[#47A248] px-4 py-2 shadow-xl shadow-[#47A248]/20 hover:scale-110 hover:-translate-y-1 hover:shadow-[#47A248]/40 transition-all duration-300 cursor-pointer animate-[float_4s_ease-in-out_infinite]">
  <SiMongodb className="text-[#47A248] text-lg" />
  <span className="text-white text-sm font-medium">MongoDB</span>
</div>

{/* Tailwind */}
<div className="absolute bottom-14 -left-10 flex items-center gap-2 rounded-full bg-[#111827]/90 backdrop-blur-md border border-[#38BDF8] px-4 py-2 shadow-xl shadow-[#38BDF8]/20 hover:scale-110 hover:-translate-y-1 hover:shadow-[#38BDF8]/40 transition-all duration-300 cursor-pointer animate-[float_4s_ease-in-out_infinite]">
  <SiTailwindcss className="text-[#38BDF8] text-lg" />
  <span className="text-white text-sm font-medium">Tailwind</span>
</div>

{/* JavaScript */}
<div className="absolute top-10 -left-8 flex items-center gap-2 rounded-full bg-[#111827]/90 backdrop-blur-md border border-[#F7DF1E] px-4 py-2 shadow-xl shadow-[#F7DF1E]/20 hover:scale-110 hover:-translate-y-1 hover:shadow-[#F7DF1E]/40 transition-all duration-300 cursor-pointer animate-[float_4s_ease-in-out_infinite]">
  <SiJavascript className="text-[#F7DF1E] text-lg" />
  <span className="text-white text-sm font-medium">JavaScript</span>
</div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;