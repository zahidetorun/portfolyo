import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { FaStar } from 'react-icons/fa';

// Using placeholder images
import { client1, client2 } from '../assets/images/placeholders';

const TestimonialPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      position: 'ABC Şirketi CEO',
      image: client1,
      text: 'Zahide ile çalışmak harika bir deneyimdi. Projemiz için zamanında ve kaliteli bir çözüm sundu. İş etiği ve profesyonelliği ile kendisini kanıtladı.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ayşe Kaya',
      position: 'XYZ Ajans Yöneticisi',
      image: client2,
      text: 'Web sitemizin yenilenmesi sürecinde gösterdiği özen ve yaratıcı çözümler için çok teşekkür ederiz. Sonuçtan çok memnun kaldık.',
      rating: 5
    }
  ];
  
  // Generate star rating based on rating count
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<FaStar key={i} className="text-warning" />);
    }
    return stars;
  };
  
  return (
    <div className="page-container">
      <SectionTitle title="Referanslar" background="MÜŞTERİ YORUMLARI" />
      
      <div className="container">
        <div className="row">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-lg-6 mb-4">
              <div className="card border-0 bg-dark h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="me-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="rounded-circle"
                        width="70"
                        height="70"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <p className="text-muted mb-0">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted mb-3">"{testimonial.text}"</p>
                  
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="lead mb-4">
              Müşteri memnuniyeti benim için en önemli başarı göstergesidir.
            </p>
            
            <a href="#iletisim" className="btn btn-primary rounded-pill px-4 py-2">
              Görüşlerinizi Paylaşın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage; 