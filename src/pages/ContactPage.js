import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Lütfen tüm alanları doldurunuz.'
      });
      return;
    }
    
    // Simulate form submission
    // In a real application, you would send this data to a server
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım.'
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <div className="page-container d-flex flex-column justify-content-center align-items-center position-relative h-100">
      <SectionTitle title="İletişim" background="BANA ULAŞIN" />
      
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <h3 className="mb-4 text-white">İletişim Bilgileri</h3>
            
            <div className="d-flex mb-4">
              <div className="me-3">
                <FaMapMarkerAlt className="text-info" size={20} />
              </div>
              <div>
                <h5 className="mb-1 text-white">Adres</h5>
                <p className="text-white-50 mb-0">
                <br />
                  Balıkesir, Türkiye
                </p>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <div className="me-3">
                <FaPhone className="text-info" size={20} />
              </div>
              <div>
                <h5 className="mb-1 text-white">Telefon</h5>
                <p className="text-white-50 mb-0">+90 546 296 28 03</p>
              </div>
            </div>
            
            <div className="d-flex mb-4">
              <div className="me-3">
                <FaEnvelope className="text-info" size={20} />
              </div>
              <div>
                <h5 className="mb-1 text-white">E-posta</h5>
                <p className="text-white-50 mb-0">zahidetorun6@gmail.com</p>
              </div>
            </div>
            
            <h4 className="mt-5 mb-3 text-white">Sosyal Medya</h4>
            <div className="d-flex">
              <a href="https://twitter.com" className="me-3 text-light" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com/zahidetorun" className="me-3 text-light" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://facebook.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="card border-0 rounded-3" style={{ 
              background: 'rgba(33, 37, 41, 0.4)', 
              backdropFilter: 'blur(10px)', 
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' 
            }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 text-white">Bana Mesaj Gönderin</h3>
                
                {formStatus.submitted && (
                  <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'} mb-4`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label text-white">Ad Soyad</label>
                        <input
                          type="text"
                          className="form-control bg-dark text-light border-secondary"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label text-white">E-posta</label>
                        <input
                          type="email"
                          className="form-control bg-dark text-light border-secondary"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="E-posta Adresiniz"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group mb-4">
                    <label htmlFor="message" className="form-label text-white">Mesaj</label>
                    <textarea
                      className="form-control bg-dark text-light border-secondary"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mesajınız"
                    ></textarea>
                  </div>
                  
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary rounded-pill px-4 py-2">
                      Gönder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 