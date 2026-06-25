import React, { useEffect } from 'react';

const ContactForm = () => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = document.querySelectorAll('.reveal-contact');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title reveal-contact">Get In Touch</h2>
                <div className="contact-grid reveal-contact">
                    <div className="contact-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="Phone Number" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="info-item">
                            <div className="info-icon"><i className="fas fa-envelope"></i></div>
                            <div className="info-content">
                                <h4>Email Us</h4>
                                <p><a href="mailto:info@wmbase.com">info@wmbase.com</a></p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                            <div className="info-content">
                                <h4>Call Us</h4>
                                <p>+91 9876543210</p>
                            </div>
                        </div>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        </div>
                        <div className="map-placeholder">
                            <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: 'var(--accent)' }}></i> Map Placeholder Location
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
