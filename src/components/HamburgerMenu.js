import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamburgerMenu = ({ isOpen, toggleMenu, className = '' }) => {
  return (
    <button 
      className={`mobile-toggle d-lg-none ${className}`} 
      onClick={toggleMenu}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  );
};

export default HamburgerMenu; 