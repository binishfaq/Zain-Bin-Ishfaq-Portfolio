import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiCode } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#082052] via-[#0a2a6e] to-[#082052] mt-20 py-12 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <FiCode className="text-white text-xl" />
              </div>
              <h2 className="text-white text-2xl font-bold">Zain Bin Ishfaq</h2>
            </div>
            <p className="text-blue-200/70 text-sm">MERN Stack Developer</p>
            <p className="text-blue-200/50 text-xs mt-2 max-w-xs mx-auto lg:mx-0">
              Building modern web applications with React, Node.js, and MongoDB.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-400 rounded-full hidden lg:block"></span>
            </h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-blue-200/70 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/projects" className="text-blue-200/70 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 inline-block">Projects</Link></li>
              <li><Link to="/about" className="text-blue-200/70 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 inline-block">About</Link></li>
              <li><Link to="/contact" className="text-blue-200/70 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
              Connect
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-400 rounded-full hidden lg:block"></span>
            </h3>
            <div className="flex justify-center lg:justify-start gap-3">
              <a 
                href="https://github.com/binishfaq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-[#082052] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/zainbinishfaq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:zainbinishfaq@gmail.com" 
                className="group flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#EA4335] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20"
                aria-label="Email"
              >
                <MdEmail className="text-lg group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="text-center lg:text-left">
            <h3 className="text-white text-lg font-semibold mb-4 relative inline-block">
              Let's Work Together
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-400 rounded-full hidden lg:block"></span>
            </h3>
            <p className="text-blue-200/60 text-sm mb-4">
              Have a project in mind? Let's build something amazing.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-2">
          <p className="text-blue-200/40 text-sm">
            © {currentYear} Zain Bin Ishfaq. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-blue-200/30">
            <span>Built with ❤️</span>
            <span className="w-1 h-1 bg-blue-200/20 rounded-full"></span>
            <span>React + Tailwind CSS</span>
            <span className="w-1 h-1 bg-blue-200/20 rounded-full"></span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;