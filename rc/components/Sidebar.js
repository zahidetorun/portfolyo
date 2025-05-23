import React, { useEffect } from 'react';
import { 
  FaTwitter, 
  FaGithub, 
  FaFacebook, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaBriefcase, 
  FaEnvelope,
  FaCertificate
} from 'react-icons/fa';
import HamburgerMenu from './HamburgerMenu';
import { useSidebar } from '../context/SidebarContext';

const Sidebar = ({ currentPath }) => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();

  // Close mobile menu when changing pages
  useEffect(() => {
    closeSidebar();
  }, [currentPath, closeSidebar]);

  // Check if current path matches the link's path
  const isActive = (path) => {
    return path === currentPath;
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest('.sidebar') && !e.target.closest('.mobile-toggle')) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, closeSidebar]);

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
      {/* Main Hamburger Menu - Always visible and fixed */}
      <HamburgerMenu 
        isOpen={isOpen} 
        toggleMenu={toggleSidebar} 
        className="main-hamburger"
      />
      
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
            <a href="#anasayfa" onClick={closeSidebar}><FaHome className="menu-icon" /> Ana Sayfa</a>
          </li>
          <li className={isActive('/hakkimda') ? 'active' : ''}>
            <a href="#hakkimda" onClick={closeSidebar}><FaUser className="menu-icon" /> Ben Kimim?</a>
          </li>
          <li className={isActive('/neler-yapabilirim') ? 'active' : ''}>
            <a href="#neler-yapabilirim" onClick={closeSidebar}><FaCode className="menu-icon" /> Neler Yapabilirim?</a>
          </li>
          <li className={isActive('/portfolyo') ? 'active' : ''}>
            <a href="#portfolyo" onClick={closeSidebar}><FaBriefcase className="menu-icon" /> Portfolyo</a>
          </li>
          <li className={isActive('/sertifikalar') ? 'active' : ''}>
            <a href="#sertifikalar" onClick={closeSidebar}><FaCertificate className="menu-icon" /> Sertifikalar</a>
          </li>
          <li className={isActive('/iletisim') ? 'active' : ''}>
            <a href="#iletisim" onClick={closeSidebar}><FaEnvelope className="menu-icon" /> İletişim</a>
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