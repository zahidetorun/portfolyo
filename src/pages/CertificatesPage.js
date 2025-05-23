import React from 'react';
import SectionTitle from '../components/SectionTitle';

const CertificatesPage = () => {
  const certificates = [
    {
      id: 1,
      title: 'Click 4 Career TOFAŞ',
      organization: 'EN İYİ ARGE MERKEZİ',
      date: '12 Şubat 2025',
      image: '/image/click.jpeg',
      url: 'https://kariyer.tofas.com.tr/sertifika/click4career/C4C18571C24.jpg'
    },
    {
      id: 2,
      title: 'POSTGRESQL',
      organization: 'LİNUX KATILIMCILAR',
      date: '10-13 Şubat 2025',
      image: '/image/LİNUX.jpeg',
      url: 'https://kayit.linux.org.tr/media/2025/kis/certs/05fcd1ce1e91574955341a8cded711403881d04f72a09440077426d85e965983.png'
    },
    {
      id: 3,
      title: 'İNGİLİZCE C1 ',
      organization: 'AMERİKAN KÜLTÜR MERKEZİ',
      date: 'Mayıs 2025',
      image: '/image/amerikankültür.png',
      url: '#'
    }
  ];
  
  const handleCertificateClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="page-container d-flex flex-column justify-content-center align-items-center position-relative h-100">
      <SectionTitle title="Sertifikalar" background="SERTİFİKALARIM" />
      
      <div className="container">
        <div className="row justify-content-center">
          {certificates.map((cert) => (
            <div key={cert.id} className="col-md-6 col-lg-4 mb-4">
              <div 
                className="card h-100 border-0 rounded-3 p-4" 
                style={{ 
                  background: 'rgba(33, 37, 41, 0.4)', 
                  backdropFilter: 'blur(10px)', 
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  cursor: cert.url && cert.url !== '#' ? 'pointer' : 'default'
                }}
                onClick={() => handleCertificateClick(cert.url)}
              >
                <div className="card-body">
                  <div className="mb-3 text-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="img-fluid rounded" 
                      style={{ maxHeight: '150px', objectFit: 'cover' }}
                    />
                  </div>
                  <h4 className="card-title mb-2 text-center text-white">{cert.title}</h4>
                  <div className="text-center mb-2">
                    <span className="badge bg-info px-3 py-2 rounded-pill">{cert.organization}</span>
                  </div>
                  <p className="card-text text-white-50 text-center">{cert.date}</p>
                  {cert.url && cert.url !== '#' && (
                    <div className="text-center mt-2">
                      <small className="text-info">Sertifikayı görüntülemek için tıklayın</small>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage; 