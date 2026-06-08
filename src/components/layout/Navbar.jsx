import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        Zain Bin Ishfaq
      </NavLink>

      <button className="hamburger-btn" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>

      {/* Overlay background when menu is open */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      {/* Side menu that slides from right */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={closeMenu}></button>
        </div>
        
        <div className="side-menu-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            Project
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;