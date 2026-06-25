import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const Products = () => {
    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <h1 className="section-title">Our Products</h1>
                
                <div className="category-block">
                    <h3>Fingerprint Devices</h3>
                    <div className="cards-grid">
                        {[
                            { id: 'x990', name: 'X990', desc: 'Standalone Fingerprint Time and Attendance System.' },
                            { id: 'f18', name: 'F18', desc: 'Innovative biometric fingerprint reader for access control.' },
                            { id: 'p160', name: 'P160', desc: 'Multi-biometric identification time & attendance terminal.' },
                            { id: 'x7', name: 'X7', desc: 'Compact biometric access control reader with fingerprint.' }
                        ].map(prod => (
                            <div className="card" key={prod.id}>
                                <div className="card-img" style={{ background: '#fff', padding: '20px' }}><ImageWithFallback src={`/assets/images/prod_${prod.id}.png`} style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt={prod.name} /></div>
                                <div className="card-body">
                                    <h4 className="card-title">{prod.name}</h4>
                                    <p className="card-text">{prod.desc}</p>
                                    <Link to={`/product/${prod.id}`} className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', display: 'inline-block', textDecoration: 'none' }}>View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="category-block">
                    <h3>Face Recognition Devices</h3>
                    <div className="cards-grid">
                        {[
                            { id: 'victor', name: 'AI Face Victor', desc: 'High-speed facial recognition with mask detection.' },
                            { id: 'mars', name: 'AI Face Mars', desc: 'Robust outdoor facial recognition access control.' },
                            { id: 'iris', name: 'AI Face Iris', desc: 'Dual biometric face and iris recognition system.' }
                        ].map(prod => (
                            <div className="card" key={prod.id}>
                                <div className="card-img" style={{ background: '#fff', padding: '20px' }}><ImageWithFallback src={`/assets/images/prod_${prod.id}.png`} style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt={prod.name} /></div>
                                <div className="card-body">
                                    <h4 className="card-title">{prod.name}</h4>
                                    <p className="card-text">{prod.desc}</p>
                                    <Link to={`/product/${prod.id}`} className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', display: 'inline-block', textDecoration: 'none' }}>View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="category-block">
                    <h3>Boom Barrier Systems</h3>
                    <div className="cards-grid">
                        {[
                            { id: 'bbradar', name: 'BB Radar', desc: 'Radar-based vehicle detection barrier system.' },
                            { id: 'bgl100', name: 'BGL100', desc: 'Heavy-duty commercial boom barrier.' },
                            { id: 'bgcm300', name: 'BGCM300', desc: 'High-speed toll and parking barrier.' },
                            { id: 'bg108', name: 'BG108 (ATM)', desc: 'Compact barrier designed specifically for ATM locations.' }
                        ].map(prod => (
                            <div className="card" key={prod.id}>
                                <div className="card-img" style={{ background: '#fff', padding: '20px' }}><ImageWithFallback src={`/assets/images/prod_${prod.id}.png`} style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt={prod.name} /></div>
                                <div className="card-body">
                                    <h4 className="card-title">{prod.name}</h4>
                                    <p className="card-text">{prod.desc}</p>
                                    <Link to={`/product/${prod.id}`} className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', display: 'inline-block', textDecoration: 'none' }}>View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="category-block">
                    <h3>Access Control & Locks</h3>
                    <div className="cards-grid">
                        {[
                            { id: 'hl700', name: 'Hotel Lock HL700', desc: 'Premium RFID hotel card lock system.' },
                            { id: 'hl500', name: 'Hotel Lock HL500', desc: 'Reliable RFID hotel room lock.' },
                            { id: 'safe36', name: 'ESSL Safe36', desc: 'Biometric electronic safe box.' },
                            { id: 'safe50', name: 'ESSL Safe50', desc: 'Large biometric electronic safe box.' },
                            { id: 'c3200', name: 'Controller C3200', desc: 'Advanced IP-based 2-door access control panel.' },
                            { id: 'c3400', name: 'Controller C3400', desc: 'Advanced IP-based 4-door access control panel.' }
                        ].map(prod => (
                            <div className="card" key={prod.id}>
                                <div className="card-img" style={{ background: '#fff', padding: '20px' }}><ImageWithFallback src={`/assets/images/prod_${prod.id}.png`} style={{ objectFit: 'contain', width: '100%', height: '100%' }} alt={prod.name} /></div>
                                <div className="card-body">
                                    <h4 className="card-title">{prod.name}</h4>
                                    <p className="card-text">{prod.desc}</p>
                                    <Link to={`/product/${prod.id}`} className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', display: 'inline-block', textDecoration: 'none' }}>View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
