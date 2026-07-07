import React, { useEffect, useRef } from 'react';
import { CiSaveDown1 } from "react-icons/ci";
import Typed from 'typed.js';
import heroImage from '../../assets/hero.png';

const Hero = () => {
  const typedRef = useRef(null);
  
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    // Path to your resume file in the public folder
    link.href = '/Zain_Bin_Ishfaq_Resume.pdf';
    link.download = 'Zain_Bin_Ishfaq_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: [
        'MERN Stack Developer',
        'React Developer',
        'Node.js Developer',
        'Full Stack Developer',
        'Problem Solver'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    };

    // Create typed instance
    const typed = new Typed('.typed-text', options);

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-[85vh] md:min-h-screen flex items-center justify-center bg-[#082052] w-full overflow-hidden py-8 md:py-0">
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 min-h-[80vh] md:min-h-screen flex flex-col md:block items-center justify-center">
        
        {/* Background Text with Typing Effect */}
        <div className="relative md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-[1] pointer-events-none mb-4 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#ffff]/10 uppercase tracking-[2px] md:tracking-[4px] font-['Inter',sans-serif] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <span className="typed-text"></span>
          </h1>
        </div>

        {/* Center - Profile Image */}
        <div className="relative md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] text-center">
          <img 
            src={heroImage} 
            alt="Zain Bin Ishfaq - MERN Stack Developer" 
            className="w-48 sm:w-56 md:w-64 lg:w-80 h-auto object-cover drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] rounded-2xl"
          />
        </div>

        {/* Bottom Left - Download Resume Button */}
        <div className="relative md:absolute bottom-[10%] left-[5%] z-[2] text-center md:text-left mt-4 md:mt-0">
          <button 
            className="bg-[#ffff] text-[#082052] border-none px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-[40px] text-sm md:text-base font-semibold cursor-pointer transition-all duration-200 flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:bg-white hover:-translate-y-0.5 hover:shadow-lg"
            onClick={handleDownloadResume}
          >
            <CiSaveDown1 className="text-base md:text-xl" />
            Download Resume
          </button>
        </div>

        {/* Bottom Right - About Me */}
        <div className="relative md:absolute bottom-[10%] right-[5%] z-[2] max-w-full md:max-w-[350px] text-center md:text-right bg-[#ffff]/95 backdrop-blur-[10px] px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-xl border-r-2 border-[#ffff] shadow-[0_4px_12px_rgba(0,0,0,0.15)] mt-4 md:mt-0">
          <p className="text-[#082052] text-sm sm:text-base font-medium leading-relaxed">
            I'm a passionate MERN Stack Developer with a keen eye for design 
            and a love for efficient code. I craft beautiful, responsive 
            websites that solve real problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;