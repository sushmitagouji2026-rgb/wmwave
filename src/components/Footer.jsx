import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">WMWave</div>
                    <p>Smart Business Monitoring & Cloud Solutions</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#products">Products</a>
                </div>
            </div>
            <div className="copyright">
                &copy; 2026 WMWave. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
