import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { X, Home, User, FolderGit2, Mail, Code2 } from 'lucide-react';
import heroImage from '../../assets/hero.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/projects', label: 'Projects', icon: FolderGit2 },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <span className="logo-icon">
          <Code2 size={22} />
        </span>
        <span className="logo-text">Zain Bin Ishfaq</span>
      </NavLink>

      {/* Hamburger Button */}
      <button 
        className="hamburger-btn" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={22} /> : <GiHamburgerMenu />}
      </button>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      {/* Side Menu */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Profile Section */}
        <div className="side-menu-profile">
          <div className="profile-avatar-wrapper">
            <img 
              src={heroImage} 
              alt="Zain Bin Ishfaq - Profile" 
              className="profile-avatar-img"
            />
            <div className="profile-avatar-ring"></div>
          </div>
          <h3 className="profile-name">Zain Bin Ishfaq</h3>
          <p className="profile-role">MERN Stack Developer</p>
          <div className="profile-badge">Available for Work</div>
        </div>

        {/* Navigation Links */}
        <div className="side-menu-links">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink 
              key={to}
              to={to} 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active-link' : ''}`
              } 
              onClick={closeMenu}
            >
              <span className="link-icon">
                <Icon size={18} />
              </span>
              <span className="link-label">{label}</span>
            </NavLink>
          ))}
        </div>

        {/* Footer */}
        <div className="side-menu-footer">
          <p>© 2026 Zain Bin Ishfaq</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;