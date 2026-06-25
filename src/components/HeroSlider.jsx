import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            bg: '/assets/images/hero_bg1.png',
            content: (
                <div className="slide-content no-bg">
                    <h1 className="slide-logo-text">
                        {"WMWave".split('').map((char, i) => (
                            <span key={i} className="letter-pop" style={{ animationDelay: `${i * 0.15}s` }}>{char}</span>
                        ))}
                    </h1>
                </div>
            )
        },
        {
            bg: '/assets/images/hero_bg2.png',
            content: (
                <div className="slide-content glass-dark slide-content-wide">
                    <h2 className="slide-title-primary">Industry Challenges</h2>
                    <div className="slide-cards">
                        <div className="slide-card card-light">
                            <i className="fas fa-user-clock icon-accent"></i>
                            <h4>Manual Attendance Tracking</h4>
                        </div>
                        <div className="slide-card card-light">
                            <i className="fas fa-shield-alt icon-accent"></i>
                            <h4>Security Vulnerabilities</h4>
                        </div>
                        <div className="slide-card card-light">
                            <i className="fas fa-door-open icon-accent"></i>
                            <h4>Inefficient Access Management</h4>
                        </div>
                        <div className="slide-card card-light">
                            <i className="fas fa-desktop icon-accent"></i>
                            <h4>Lack of Real-Time Monitoring</h4>
                        </div>
                        <div className="slide-card card-light">
                            <i className="fas fa-users-cog icon-accent"></i>
                            <h4>Workforce Management Issues</h4>
                        </div>
                    </div>
                </div>
            )
        },
        {
            bg: '/assets/images/hero_bg3.png',
            content: (
                <div className="slide-content glass">
                    <h2 className="slide-title-primary">One Platform. Complete Solution.</h2>
                    <div className="slide-cards gap-small">
                        <div className="slide-card card-pill">Biometric Attendance</div>
                        <div className="slide-card card-pill">Face Recognition</div>
                        <div className="slide-card card-pill">QR Attendance</div>
                        <div className="slide-card card-pill">Access Control</div>
                        <div className="slide-card card-pill">Boom Barriers</div>
                        <div className="slide-card card-pill">Gate Automation</div>
                        <div className="slide-card card-pill">Cloud Monitoring</div>
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="hero" id="home">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                        {slide.content}
                    </div>
                ))}
            </div>
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <div 
                        key={index} 
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
