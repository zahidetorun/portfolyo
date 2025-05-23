import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';

// Context
import { SidebarProvider } from './context/SidebarContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('/');

  // LocalHost yazısını kaldırmak için
  useEffect(() => {
    // Alt kısımdaki URL göstergesini kaldır
    const removeHostInfo = () => {
      const hostInfoElements = document.querySelectorAll('body > *:not(#root)');
      hostInfoElements.forEach(el => {
        if (el.textContent && el.textContent.includes('localhost')) {
          el.style.display = 'none';
        }
      });
    };
    
    // Sayfa yüklendiğinde ve değiştiğinde çalıştır
    removeHostInfo();
    window.addEventListener('load', removeHostInfo);
    return () => window.removeEventListener('load', removeHostInfo);
  }, []);

  // FullPage options
  const fullpageOptions = {
    scrollingSpeed: 700,
    easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    fitToSection: true,
    scrollOverflow: false,
    scrollOverflowReset: false,
    autoScrolling: true,
    fitToSectionDelay: 300,
    touchSensitivity: 15,
    continuousVertical: false,
    continuousHorizontal: false,
    resetSliders: true,
    fadingEffect: false,
    scrollingSpeed: 400,
    parallax: false,
    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
    cards: false,
    interlockedSlides: false,
    responsiveWidth: 768, // Bu değerden aşağıda normal scroll olacak
    responsiveHeight: 500,
    responsiveSlides: false,
    bigSectionsDestination: 'top',
    normalScrollElements: null,
    scrollOverflowOptions: null,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Ana Sayfa', 'Ben Kimim?', 'Neler Yapabilirim?', 'Portfolyo', 'Sertifikalar', 'İletişim'],
    showActiveTooltip: false,
    anchors: ['anasayfa', 'hakkimda', 'neler-yapabilirim', 'portfolyo', 'sertifikalar', 'iletisim'],
    afterLoad: (origin, destination) => {
      const paths = ['/', '/hakkimda', '/neler-yapabilirim', '/portfolyo', '/sertifikalar', '/iletisim'];
      setCurrentPage(paths[destination.index]);
      
      // Her sayfa değiştiğinde URL göstergesini gizle
      const hostInfoElements = document.querySelectorAll('body > *:not(#root)');
      hostInfoElements.forEach(el => {
        if (el.textContent && el.textContent.includes('localhost')) {
          el.style.display = 'none';
        }
      });
    },
    // Geçiş arası siyah şeridi önlemek için
    beforeLeave: (origin, destination) => {
      // Ben kimim ve Neler yapabilirim arasındaki geçişleri iyileştir
      if ((origin.index === 1 && destination.index === 2) || 
          (origin.index === 2 && destination.index === 1)) {
        document.body.classList.add('smooth-transition');
      } else {
        document.body.classList.remove('smooth-transition');
      }
      return true;
    },
    licenseKey: 'YOUR_KEY_HERE' // Note: For production you'll need a license key
  };

  return (
    <div className="app-container">
      <Sidebar currentPath={currentPage} />
      
      <ReactFullpage
        {...fullpageOptions}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section home-section" id="home-section">
              <HomePage />
            </div>
            <div className="section about-section" id="about-section">
              <AboutPage />
            </div>
            <div className="section services-section" id="services-section">
              <ServicesPage />
            </div>
            <div className="section portfolio-section" id="portfolio-section">
              <PortfolioPage />
            </div>
            <div className="section certificates-section" id="certificates-section">
              <CertificatesPage />
            </div>
            <div className="section contact-section" id="contact-section">
              <ContactPage />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </Router>
  );
}

export default App; 