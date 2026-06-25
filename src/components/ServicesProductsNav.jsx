import React from 'react';
import { Link } from 'react-router-dom';

const ServicesProductsNav = () => {
    return (
        <section className="section toggle-section" style={{ padding: '80px 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Explore What We Offer</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    <Link to="/services" className="btn btn-primary" style={{ padding: '20px 50px', fontSize: '1.2rem' }}>View Services</Link>
                    <Link to="/products" className="btn btn-primary" style={{ padding: '20px 50px', fontSize: '1.2rem', backgroundColor: 'var(--primary)' }}>View Products</Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesProductsNav;
