import React from 'react';
import SectionTitle from '../components/SectionTitle';

const AboutPage = () => {
  return (
    <div className="page-container d-flex flex-column justify-content-start align-items-center position-relative">
      <SectionTitle title="Ben Kimim?" background="HAKKIMDA" />
      
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="mb-3 text-center">
              <span className="text-white">Ben Zahide Torun</span>, Bilgisayar Mühendisliği Öğrencisiyim.
            </h2>
            
            <p className="lead mb-3 text-center">
              Merhaba! Ben bir web geliştiriciyim ve yazılım dünyasında çözümler üretmekten büyük keyif alıyorum.
            </p>
            
            <p className="mb-4 text-center">
              Front-end ve back-end teknolojileri kullanarak modern, kullanıcı dostu ve fonksiyonel web uygulamaları geliştiriyorum. İşimi tutkuyla yapıyor ve sürekli kendimi geliştirmeye çalışıyorum.
            </p>
          </div>
        </div>
        
        {/* Main Content Row */}
        <div className="row">
          {/* Skills Section - Now on the Left */}
          <div className="col-lg-5">
            <div className="card border-0 rounded-3 p-3 mb-3" style={{ 
              background: 'rgba(33, 37, 41, 0.4)', 
              backdropFilter: 'blur(10px)', 
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="card-body">
                <h3 className="mb-4 text-white">Yeteneklerim</h3>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-white">PostgreSQL</span>
                    <span className="text-white">62%</span>
                  </div>
                  <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '62%' }} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-white">HTML/CSS</span>
                    <span className="text-white">90%</span>
                  </div>
                  <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-white">Python</span>
                    <span className="text-white">80%</span>
                  </div>
                  <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-white">React</span>
                    <span className="text-white">75%</span>
                  </div>
                  <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-white">C#</span>
                    <span className="text-white">65%</span>
                  </div>
                  <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-white">JavaScript</span>
                    <span className="text-white">75%</span>
                  </div>
                  <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Personal Info Section - Now on the Right */}
          <div className="col-lg-6 offset-lg-1">
            <div className="card border-0 rounded-3 p-3 mb-3" style={{ 
              background: 'rgba(33, 37, 41, 0.4)', 
              backdropFilter: 'blur(10px)', 
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="card-body">
                <h3 className="mb-3 text-white">Kişisel Bilgiler</h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-3 text-white">
                        <strong className="text-info">İsim:</strong> Zahide Torun
                      </li>
                      <li className="mb-3 text-white">
                        <strong className="text-info">E-posta:</strong> zahidetorun6@gmail.com
                      </li>
                      <li className="mb-3 text-white">
                        <strong className="text-info">Yaş:</strong> 21
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-3 text-white">
                        <strong className="text-info">Şehir:</strong> Balıkesir, Türkiye
                      </li>
                      <li className="mb-3 text-white">
                        <strong className="text-info">Eğitim:</strong> Bilgisayar Mühendisliği
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 