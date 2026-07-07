import React from 'react';
import TechStack from '../components/sections/TechStack';

const About = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 min-h-[70vh] bg-[#ffffff]">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#082052] to-[#0a2a6e] bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-[#666] text-sm sm:text-base mt-2">Get to know me better</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-8 bg-[#ffff] rounded-2xl p-4 sm:p-6 md:p-10 border border-[#082052]/20">
          {/* About Text */}
          <div>
            <h2 className="text-[#082052] text-xl sm:text-2xl font-bold mb-3 mt-4 first:mt-0">Who am I?</h2>
            <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-4">
              I'm Zain Bin Ishfaq, a passionate <span className="text-[#0a2a6e] font-semibold">MERN Stack Developer</span> dedicated to crafting 
              beautiful, functional, and user-friendly websites. With a keen eye for design 
              and a love for efficient code, I transform ideas into digital experiences that 
              make a difference.
            </p>

            <h2 className="text-[#082052] text-xl sm:text-2xl font-bold mb-3 mt-4">What I Do?</h2>
            <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-4">
              I specialize in <span className="text-[#0a2a6e] font-semibold">MERN Stack Development</span> (MongoDB, Express.js, React, Node.js), 
              building full-stack web applications from concept to deployment. Whether it's a simple 
              landing page or a complex e-commerce platform, I bring creativity and technical 
              expertise to every project.
            </p>

            <h2 className="text-[#082052] text-xl sm:text-2xl font-bold mb-3 mt-4">My Journey</h2>
            <p className="text-[#555] text-sm sm:text-base leading-relaxed">
              My passion for coding started years ago, and since then I've been constantly 
              learning and evolving. As a MERN Stack developer, I've worked on various projects 
              that have helped me master the art of building scalable and efficient web applications.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-[#082052]/5 rounded-2xl p-4 sm:p-6 border border-[#082052]/15">
            <h3 className="text-[#082052] text-xl sm:text-2xl font-bold text-center mb-4">MERN Stack Expertise</h3>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-[#0a2a6e] text-base sm:text-lg font-semibold mb-2">Frontend</h4>
                <ul className="list-none p-0">
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">React.js</li>
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">JavaScript (ES6+)</li>
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">HTML5 & CSS3</li>
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">Responsive Design</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#0a2a6e] text-base sm:text-lg font-semibold mb-2">Backend</h4>
                <ul className="list-none p-0">
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">Node.js</li>
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">Express.js</li>
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">RESTful APIs</li>
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">Authentication & Authorization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#0a2a6e] text-base sm:text-lg font-semibold mb-2">Database & Tools</h4>
                <ul className="list-none p-0">
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">MongoDB</li>
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">MySQL</li>
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">Git & GitHub</li>
                  <li className="text-[#555] py-1.5 text-sm sm:text-base pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-[#082052] before:text-sm">VS Code & Postman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Component */}
        <TechStack />
      </div>
    </div>
  );
};

export default About;