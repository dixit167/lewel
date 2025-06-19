import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container py-5">
        <h1 className="section-title luxury-text">Contact Us</h1>

        <div className="row">
          <div className="col-md-8">
            <div ref={formRef} className="card card-luxury">
              <div className="card-body">
                <h4 className="luxury-text mb-4">Send us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-luxury">Send Message</button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-luxury">
              <div className="card-body">
                <h5 className="luxury-text gold-accent">Visit Our Showroom</h5>
                <p><strong>Address:</strong><br />123 Luxury Avenue<br />Diamond District, NY 10001</p>
                <p><strong>Phone:</strong><br />+1 (555) 123-4567</p>
                <p><strong>Email:</strong><br />info@luxejewels.com</p>
                <p><strong>Hours:</strong><br />Mon-Sat: 10am-7pm<br />Sunday: 12pm-5pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
