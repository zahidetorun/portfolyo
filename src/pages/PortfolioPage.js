import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const PortfolioPage = () => {
  const [touchedCard, setTouchedCard] = useState(null);
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Kelime İşlemcisi',
      description: 'Uygulamayı QTDesinger ve PyQt5 kullanarak oluşturdum. Metin yazıyorsunuz ve bu metni istediğiniz gibi şekillendirebiliyorsunuz. Kullanımı oldukça anlaşılır ve kullanışlı bir uygulamadır.',
      image: '/image/kelime.jpg',
      url: 'https://github.com/zahidetorun/kelimeislemcisi'
    },
    {
      id: 2,
      title: 'Soru Bankası Uygulaması',
      description: 'Soru ekleyip silebilirsiniz. Seçeneklerimiz var doğru cevabı soruyu eklediğinizde doğru cevap seçeneği sayesinde belirliyor bu şekilde içerisine soru ekleyebiliyorsunuz. QTDesinger ve PyQt5 kullandım.',
      image: '/image/sorubankası.jpg',
      url: 'https://github.com/zahidetorun/sorubankasi'
    },
    {
      id: 3,
      title: 'Araba Kiralama Uygulaması',
      description: 'Uygulamayı PyQt5 kullanarak oluşturdum. Veri tabanı olarak SQLite3 kullandım. Şehir seçerek araba fiyatları karşınıza geliyor. Sigorta seçeneklerine göre fiyatlar değişiyor. Kiralama geçmişinizi uygulama sonunda pdf şeklinde indirebilirsiniz.',
      image: '/image/araba.jpg',
      url: 'https://github.com/zahidetorun/Arac-kiralama-uygulamasi'
    },
    {
      id: 4,
      title: 'Portfolyo Web Sitesi',
      description: 'Bu portfolyo sitesini React kullanarak tasarladım. Responsive tasarımı, modern görünümü ve fullpage.js ile sayfa geçiş animasyonları içeriyor. Tüm sertifikalarımın ve çalışmalarımın sergilendiği kişisel web sitesi.',
      image: '/image/portfolyo.jpg',
      url: 'https://github.com/zahidetorun/portfolyo'
    }
  ];
  
  const handleProjectClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };
  
  const handleTouchStart = (id) => {
    setTouchedCard(id);
  };
  
  const handleTouchEnd = () => {
    setTouchedCard(null);
  };
  
  return (
    <div className="page-container d-flex flex-column justify-content-center align-items-center position-relative h-100">
      <SectionTitle title="Portfolyo" background="ÇALIŞMALARIM" />
      
      <div className="container">
        <div className="row justify-content-center">
          {portfolioItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div 
                className={`portfolio-card rounded-3 h-100 ${touchedCard === item.id ? 'touched' : ''}`}
                onClick={() => handleProjectClick(item.url)}
                onTouchStart={() => handleTouchStart(item.id)}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={() => handleTouchStart(item.id)} 
                onMouseLeave={handleTouchEnd}
                style={{ 
                  cursor: 'pointer',
                  position: 'relative'
                }}
                tabIndex={0}
                role="button"
                aria-label={`${item.title} projesini görüntüle`}
              >
                <div className="portfolio-image-container position-relative overflow-hidden rounded-3">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid w-100" 
                    style={{ 
                      height: '220px', 
                      objectFit: 'cover' 
                    }}
                  />
                  
                  <div 
                    className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-3"
                  >
                    <h4 className="text-white mb-2">{item.title}</h4>
                    <p className="text-white-50 mb-0 small">{item.description}</p>
                    <div className="mt-3">
                      <span className="btn btn-sm btn-outline-light">GitHub'da Görüntüle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage; 