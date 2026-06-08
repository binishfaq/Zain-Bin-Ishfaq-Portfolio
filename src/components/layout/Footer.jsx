import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Zain Bin Ishfaq</h2>
            <p>MERN Stack Developer</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="https://github.com/binishfaq" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/zainbinishfaq" target="_blank" rel="noopener noreferrer" className="social-icon">
  <FaLinkedinIn />
</a>
              <a href="mailto:zainbinishfaq@gmail.com" className="social-icon">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Zain Bin Ishfaq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;