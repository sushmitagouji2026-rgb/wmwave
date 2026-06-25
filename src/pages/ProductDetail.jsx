import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const ProductDetail = () => {
    const { id } = useParams();

    const productData = {
        'x990': { name: 'X990', category: 'Fingerprint Devices', desc: 'Standalone Fingerprint Time and Attendance System.', features: ['3,000 Fingerprint Capacity', '100,000 Record Capacity', 'TCP/IP, USB-host communication', 'Built-in battery backup'] },
        'f18': { name: 'F18', category: 'Fingerprint Devices', desc: 'Innovative biometric fingerprint reader for access control.', features: ['TFT Color Screen', 'Audio-Visual Indications', 'Standard Wiegand Signal', 'Supports 50 time zones'] },
        'p160': { name: 'P160', category: 'Fingerprint Devices', desc: 'Multi-biometric identification time & attendance terminal.', features: ['Palm & Fingerprint verification', 'PoE functionality', 'Modern & intuitive UI', 'High-speed matching'] },
        'x7': { name: 'X7', category: 'Fingerprint Devices', desc: 'Compact biometric access control reader with fingerprint.', features: ['Small and compact design', 'Standalone operation', 'No software required', 'Supports card & password'] },
        'victor': { name: 'AI Face Victor', category: 'Face Recognition Devices', desc: 'High-speed facial recognition with mask detection.', features: ['Mask detection capabilities', 'Anti-spoofing algorithm', 'Visible Light Facial Recognition', '5-inch touch screen'] },
        'mars': { name: 'AI Face Mars', category: 'Face Recognition Devices', desc: 'Robust outdoor facial recognition access control.', features: ['IP68 & IK04 protection', 'Extreme temperature resistance', 'Wide angle camera', 'Low light recognition'] },
        'iris': { name: 'AI Face Iris', category: 'Face Recognition Devices', desc: 'Dual biometric face and iris recognition system.', features: ['Iris and Face multi-modality', 'Contactless authentication', 'High security environments', 'Liveness detection'] },
        'bbradar': { name: 'BB Radar', category: 'Boom Barrier Systems', desc: 'Radar-based vehicle detection barrier system.', features: ['Anti-smash radar integration', 'Fast opening speed (1.5s)', 'Adjustable boom length', 'Heavy-duty motor'] },
        'bgl100': { name: 'BGL100', category: 'Boom Barrier Systems', desc: 'Heavy-duty commercial boom barrier.', features: ['Intensive use design', 'Manual release mechanism', 'LED indicator on boom', 'Weatherproof housing'] },
        'bgcm300': { name: 'BGCM300', category: 'Boom Barrier Systems', desc: 'High-speed toll and parking barrier.', features: ['0.6s to 0.9s opening speed', 'Carbon fiber boom option', 'Advanced servo motor', '10 million cycle MTBF'] },
        'bg108': { name: 'BG108 (ATM)', category: 'Boom Barrier Systems', desc: 'Compact barrier designed specifically for ATM locations.', features: ['Space-saving design', 'Quick installation', 'Vandal-proof cabinet', 'Integration with ATM sensors'] },
        'hl700': { name: 'Hotel Lock HL700', category: 'Access Control & Locks', desc: 'Premium RFID hotel card lock system.', features: ['Mifare card technology', 'Zinc alloy construction', 'Audit trail memory', 'Low battery warning'] },
        'hl500': { name: 'Hotel Lock HL500', category: 'Access Control & Locks', desc: 'Reliable RFID hotel room lock.', features: ['Classic design', 'Mechanical key override', 'Do Not Disturb function', 'Hotel management software integration'] },
        'safe36': { name: 'ESSL Safe36', category: 'Access Control & Locks', desc: 'Biometric electronic safe box.', features: ['Fingerprint access', 'Emergency key override', 'Motorized locking bolts', 'Tamper alarm'] },
        'safe50': { name: 'ESSL Safe50', category: 'Access Control & Locks', desc: 'Large biometric electronic safe box.', features: ['High capacity interior', 'Multi-user fingerprint memory', 'Reinforced steel body', 'LED display'] },
        'c3200': { name: 'Controller C3200', category: 'Access Control & Locks', desc: 'Advanced IP-based 2-door access control panel.', features: ['Controls 2 doors', 'Stores 30,000 cards', '100,000 event buffers', 'Advanced access control logic'] },
        'c3400': { name: 'Controller C3400', category: 'Access Control & Locks', desc: 'Advanced IP-based 4-door access control panel.', features: ['Controls 4 doors', 'Anti-passback function', 'First-card opening', 'Multi-card opening'] }
    };

    const product = productData[id];

    if (!product) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Product Not Found</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <Link to="/products" style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px' }}>
                    <i className="fas fa-arrow-left"></i> Back to Products Catalog
                </Link>
                
                <div className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', padding: '40px', gap: '50px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#fff', borderRadius: '15px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ImageWithFallback src={`/assets/images/prod_${id}.png`} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} alt={product.name} />
                    </div>
                    
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <span className="blog-category" style={{ position: 'relative', top: '0', left: '0', marginBottom: '15px', display: 'inline-block' }}>{product.category}</span>
                        <h1 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2.5rem' }}>{product.name}</h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-muted)' }}>{product.desc}</p>
                        
                        <h3 style={{ color: 'var(--accent)', marginBottom: '20px' }}><i className="fas fa-list-ul"></i> Key Features</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {product.features.map((feature, idx) => (
                                <li key={idx} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', fontSize: '1.1rem' }}>
                                    <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '15px', fontSize: '1.2rem' }}></i>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                            <button className="btn btn-primary" style={{ flex: '1' }}>Request Quote</button>
                            <button className="btn btn-outline" style={{ flex: '1', color: 'var(--primary)', borderColor: 'var(--primary)' }}>Download Brochure</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
