import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="page-container d-flex flex-column justify-content-center position-relative h-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-5 home-content">
              <h2 className="h4 text-white">Hoş Geldiniz</h2>
              <h1 className="display-4 fw-bold text-white mb-4">
                Ben <span className="text-white" style={{ fontSize: "110%", fontWeight: "700", display: "inline-block" }}>Zahide Torun</span>
              </h1>
              <p className="lead text-white mb-5">
                Balıkesir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.Web Geliştirme ve Veri Analizi alanlarında kendimi geliştirmeye çalışıyorum.
              </p>
              <a href="#iletisim" className="btn btn-primary rounded-pill px-4 py-2">
                İletişime Geçin
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down button */}
      <a 
        href="#hakkimda" 
        className="scroll-down-btn position-absolute bottom-0 start-50 translate-middle-x mb-5"
      >
        <FaChevronDown className="text-white animate-bounce" size={24} />
      </a>
    </div>
  );
};

export default HomePage; 