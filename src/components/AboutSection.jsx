import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const AboutSection = () => {
    const revealRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-grid reveal" ref={revealRef}>
                    <div className="about-img">
                        <ImageWithFallback src="/assets/images/about_img.png" alt="Smart Office Biometrics" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(7, 26, 53, 0.1)' }} />
                    </div>
                    <div className="about-content" data-searchable="about mission specialize">
                        <h2>About WMWave</h2>
                        <p>WMWave specializes in Business Monitoring Solutions, Cloud-Based Attendance Systems, Biometric Security Solutions, Access Control Systems, Boom Barrier Management, Smart Gate Automation and Workforce Monitoring.</p>
                        <p>Our mission is to help organizations streamline operations through intelligent automation and secure access management.</p>
                        
                        <div className="feature-cards">
                            <Link to="/feature/attendance" className="feature-card"><i className="fas fa-clock"></i><span>Attendance Monitoring</span></Link>
                            <Link to="/feature/business" className="feature-card"><i className="fas fa-chart-line"></i><span>Business Monitoring</span></Link>
                            <Link to="/feature/cloud" className="feature-card"><i className="fas fa-cloud"></i><span>Cloud-Based Solutions</span></Link>
                            <Link to="/feature/biometrics" className="feature-card"><i className="fas fa-fingerprint"></i><span>Biometrics</span></Link>
                            <Link to="/feature/access" className="feature-card"><i className="fas fa-shield-alt"></i><span>Access Control</span></Link>
                            <Link to="/feature/automation" className="feature-card"><i className="fas fa-cogs"></i><span>Smart Automation</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
