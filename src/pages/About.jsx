import React from "react";
import {
  FaUser,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaRocket,
  FaLanguage,
  FaCheckCircle,
} from "react-icons/fa";
import TechStack from "../components/sections/TechStack";

const About = () => {
  const values = [
    "Clean & Maintainable Code",
    "Problem Solving",
    "Scalable Architecture",
    "Continuous Learning",
    "Responsive UI/UX",
    "Team Collaboration",
  ];

  const quickFacts = [
    {
      icon: <FaUser className="text-amber-400" />,
      title: "Name",
      value: "Zain Bin Ishfaq",
    },
    {
      icon: <FaGraduationCap className="text-amber-400" />,
      title: "Education",
      value: "BS Information Technology",
    },
    {
      icon: <FaMapMarkerAlt className="text-amber-400" />,
      title: "Location",
      value: "Punjab, Pakistan",
    },
    {
      icon: <FaLaptopCode className="text-amber-400" />,
      title: "Role",
      value: "Full Stack Developer",
    },
    {
      icon: <FaRocket className="text-amber-400" />,
      title: "Current Focus",
      value: "MERN Stack & DevOps",
    },
    {
      icon: <FaLanguage className="text-amber-400" />,
      title: "Languages",
      value: "English • Urdu • Punjabi",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#0B1220] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[6px] text-amber-400 font-semibold">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Turning Ideas Into
            <br />
            Digital Experiences
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 leading-8">
            I enjoy building modern web applications that combine
            clean design, scalable architecture and efficient backend
            systems to solve real-world problems.
          </p>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Story */}

          <div className="lg:col-span-2 bg-[#111827] border border-slate-700 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              My Story
            </h3>

            <p className="text-slate-300 leading-8 mb-6">
              I'm Zain Bin Ishfaq, a passionate Full Stack Developer
              currently pursuing a BS in Information Technology.
              My journey into software development started with
              curiosity and has grown into a passion for creating
              secure, responsive and user-focused web applications.
            </p>

            <p className="text-slate-300 leading-8 mb-6">
              I enjoy working across both frontend and backend,
              transforming ideas into complete digital products.
              From designing intuitive interfaces to developing
              REST APIs and integrating databases, I strive to
              build applications that are efficient, scalable and
              easy to maintain.
            </p>

            <p className="text-slate-300 leading-8">
              Beyond coding, I'm continuously learning new
              technologies such as Docker, DevOps and cloud
              deployment to become a well-rounded software engineer.
            </p>

            {/* Values */}

            <div className="mt-10">

              <h4 className="text-xl font-semibold mb-5">
                What Drives Me
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#0B1220] border border-slate-700 rounded-xl p-4 hover:border-amber-400 transition"
                  >
                    <FaCheckCircle className="text-amber-400" />

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Facts */}

          <div className="bg-[#111827] border border-slate-700 rounded-3xl p-8 h-fit sticky top-24">

            <h3 className="text-2xl font-bold mb-8">
              Quick Facts
            </h3>

            <div className="space-y-6">
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-slate-700 pb-5 last:border-none"
                >
                  <div className="text-2xl">
                    {fact.icon}
                  </div>

                  <div>
                    <p className="text-slate-500 text-sm">
                      {fact.title}
                    </p>

                    <p className="font-medium mt-1">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}

        <div className="mt-24">
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default About;