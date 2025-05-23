import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { FaLaptopCode, FaDesktop, FaCubes, FaDatabase } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-info" size={40} />,
      title: 'Web Geliştirme',
      description: 'Modern ve kullanıcı dostu web arayüzleri geliştiriyorum. HTML, CSS, JavaScript gibi temel teknolojilerin yanı sıra React gibi modern kütüphanelerle responsive ve performans odaklı projeler üretiyorum.'
    },
    {
      id: 2,
      icon: <FaDesktop className="text-info" size={40} />,
      title: 'PyQt5 & QtDesigner',
      description: 'Görsel arayüzlü masaüstü uygulamaları geliştirirken Python tabanlı PyQt5 kütüphanesini kullanıyorum. Arayüz tasarımlarını hızlı ve düzenli bir şekilde oluşturmak için QtDesigner\'dan yararlanıyor, oluşturulan .ui dosyalarını PyQt5 ile entegre ederek işlevsel hale getiriyorum.'
    },
    {
      id: 3,
      icon: <FaDatabase className="text-info" size={40} />,
      title: 'PostgreSQL',
      description: 'Projelerimde açık kaynaklı, güçlü ve güvenilir bir ilişkisel veritabanı yönetim sistemi olan PostgreSQL\'i tercih ediyorum. Veri modelleme, sorgu optimizasyonu ve güvenlik odaklı işlemler için PostgreSQL\'in sunduğu gelişmiş özelliklerden faydalanıyorum.'
    },
    {
      id: 4,
      icon: <FaCubes className="text-info" size={40} />,
      title: 'Fusion 360 ile 3D Modelleme',
      description: 'Mekanik tasarım ve prototipleme süreçlerinde Autodesk Fusion 360 kullanarak hassas ve işlevsel 3D modeller oluşturuyorum. Parça tasarımı, montaj ve render gibi aşamalarda modern üretim tekniklerine uygun çözümler geliştiriyorum.'
    }
  ];

  return (
    <div className="page-container d-flex flex-column justify-content-center align-items-center position-relative h-100">
      <SectionTitle title="Neler Yapabilirim?" background="YAPABİLDİKLERİM" />
      
      <div className="container">
        <div className="row g-3 justify-content-center">
          {services.map((service) => (
            <div key={service.id} className="col-md-6">
              <div className="card border-0 rounded-3 p-3 service-card h-100" 
                style={{ 
                  background: 'rgba(33, 37, 41, 0.4)', 
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}>
                <div className="card-body d-flex flex-column text-center">
                  <div className="icon-wrapper mb-2 d-flex justify-content-center align-items-center mx-auto" 
                    style={{ 
                      width: '70px', 
                      height: '70px', 
                      borderRadius: '50%', 
                      background: 'rgba(248, 150, 30, 0.15)'
                    }}>
                    {service.icon}
                  </div>
                  <h5 className="card-title mb-2 text-white fw-bold">{service.title}</h5>
                  <p className="card-text text-white-50 mb-0 small">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 