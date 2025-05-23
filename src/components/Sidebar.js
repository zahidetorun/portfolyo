import React, { useState, useEffect } from 'react';
import { 
  FaTwitter, 
  FaGithub, 
  FaFacebook, 
  FaBars, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaEnvelope,
  FaCertificate,
  FaTimes
} from 'react-icons/fa';

const Sidebar = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  // Check if current path matches the link's path
  const isActive = (path) => {
    return path === currentPath;
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.sidebar') && !e.target.closest('.mobile-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Image style to improve clarity
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    imageRendering: '-webkit-optimize-contrast'
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button className="mobile-toggle d-lg-none" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Sidebar Navigation with animation class */}
      <aside className={`sidebar ${isOpen ? 'open' : ''} d-lg-flex`}>
        <div className="profile-image">
          <img 
            src="/image/profil.jpeg" 
            alt="Zahide Torun" 
            style={imageStyle}
          />
        </div>
        
        <h1 className="profile-name text-white">Zahide Torun</h1>
        
        <ul className="nav-menu">
          <li className={isActive('/') ? 'active' : ''}>
            <a href="#anasayfa" onClick={() => setIsOpen(false)}><FaHome className="menu-icon" /> Ana Sayfa</a>
          </li>
          <li className={isActive('/hakkimda') ? 'active' : ''}>
            <a href="#hakkimda" onClick={() => setIsOpen(false)}><FaUser className="menu-icon" /> Ben Kimim?</a>
          </li>
          <li className={isActive('/neler-yapabilirim') ? 'active' : ''}>
            <a href="#neler-yapabilirim" onClick={() => setIsOpen(false)}><FaCode className="menu-icon" /> Neler Yapabilirim?</a>
          </li>
          <li className={isActive('/portfolyo') ? 'active' : ''}>
            <a href="#portfolyo" onClick={() => setIsOpen(false)}><FaBriefcase className="menu-icon" /> Portfolyo</a>
          </li>
          <li className={isActive('/sertifikalar') ? 'active' : ''}>
            <a href="#sertifikalar" onClick={() => setIsOpen(false)}><FaCertificate className="menu-icon" /> Sertifikalar</a>
          </li>
          <li className={isActive('/iletisim') ? 'active' : ''}>
            <a href="#iletisim" onClick={() => setIsOpen(false)}><FaEnvelope className="menu-icon" /> İletişim</a>
          </li>
        </ul>
        
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaTwitter />
          </a>
          <a href="https://github.com/zahidetorun" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 