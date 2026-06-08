import React from 'react';
import { CiSaveDown1 } from "react-icons/ci";
import './Hero.css';
import heroImage from '../../assets/hero.png';

const Hero = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/Zain_Bin_Ishfaq_Resume.pdf'; // Place your resume file in public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Zain_Bin_Ishfaq_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero">
      <div className="hero-container">

        {/* Background Text - Behind Image */}
        <div className="hero-background-text">
          <h1 className="bg-text">MERN Stack Developer</h1>
        </div>

        {/* Center - Profile Image */}
        <div className="hero-center">
          <img src={heroImage} alt="Zain Bin Ishfaq" className="profile-image" />
        </div>

        {/* Bottom Left - Download Resume Button with Icon */}
        <div className="hero-bottom-left">
          <button className="download-btn" onClick={handleDownloadResume}>
            <CiSaveDown1 className="btn-icon" />
            Download Resume
          </button>
        </div>

        {/* Bottom Right - About Me */}
        <div className="hero-bottom-right">
          <p>
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