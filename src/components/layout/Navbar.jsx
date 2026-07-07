import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { X } from 'lucide-react';
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
        {isMenuOpen ? <X size={24} /> : <GiHamburgerMenu />}
      </button>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        
        <div className="side-menu-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={closeMenu}>
            Projects
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