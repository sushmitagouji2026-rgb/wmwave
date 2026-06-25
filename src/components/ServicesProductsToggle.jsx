import React, { useState, useEffect, useRef } from 'react';

const ServicesProductsToggle = () => {
    const [activeTab, setActiveTab] = useState('services');
    const revealRef = useRef(null);

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

        const elements = document.querySelectorAll('.reveal-sp');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section toggle-section" id="services-products">
            <div className="container">
                <h2 className="section-title reveal-sp">What We Offer</h2>
                
                <div className="toggle-container reveal-sp">
                    <div className="toggle-btn-group">
                        <div 
                            className="toggle-bg" 
                            id="toggleBg" 
                            style={{ transform: activeTab === 'services' ? 'translateX(0)' : 'translateX(100%)' }}
                        ></div>
                        <button 
                            className={`toggle-btn ${activeTab === 'services' ? 'active' : ''}`} 
                            id="btnServices"
                            onClick={() => setActiveTab('services')}
                        >SERVICES</button>
                        <button 
                            className={`toggle-btn ${activeTab === 'products' ? 'active' : ''}`} 
                            id="btnProducts"
                            onClick={() => setActiveTab('products')}
                        >PRODUCTS</button>
                    </div>
                </div>

                <div className={`toggle-content-area ${activeTab === 'services' ? 'active' : ''}`} id="servicesContent">
                    <div className="category-block reveal-sp" data-searchable="attendance fingerprint face recognition qr code">
                        <h3>Attendance Solutions</h3>
                        <div className="cards-grid">
                            <div className="card">
                                <div className="card-img"><img src="assets/images/fingerprint_attendance.png" alt="Fingerprint Attendance" /></div>
                                <div className="card-body">
                                    <h4 className="card-title">Fingerprint Attendance</h4>
                                    <p className="card-text">Secure and fast fingerprint recognition systems for reliable employee attendance tracking.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img"><img src="assets/images/face_attendance.png" alt="Face Recognition Attendance" /></div>
                                <div className="card-body">
                                    <h4 className="card-title">Face Recognition Attendance</h4>
                                    <p className="card-text">Touchless AI-powered facial recognition technology for modern workplaces.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img"><img src="assets/images/qr_attendance.png" alt="QR Code Attendance" /></div>
                                <div className="card-body">
                                    <h4 className="card-title">QR Code Attendance</h4>
                                    <p className="card-text">Dynamic QR code scanning using mobile devices for flexible workforce management.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category-block reveal-sp" data-searchable="access control door boom barrier">
                        <h3>Access Control Solutions</h3>
                        <div className="cards-grid">
                            <div className="card">
                                <div className="card-img"><img src="assets/images/door_access.png" alt="Door Access Control" /></div>
                                <div className="card-body">
                                    <h4 className="card-title">Door Access Control</h4>
                                    <p className="card-text">Restrict and manage entry to sensitive areas with advanced card and biometric door locks.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-img"><img src="assets/images/boom_barrier_service.png" alt="Boom Barrier Control" /></div>
                                <div className="card-body">
                                    <h4 className="card-title">Boom Barrier Control</h4>
                                    <p className="card-text">Automated vehicle access management for parking lots and facility entrances.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category-block reveal-sp" data-searchable="gate automation villa institution factory warehouse apartment residence hospitality hospital">
                        <h3>Gate & Automation Solutions</h3>
                        <div className="small-cards-grid">
                            {['villa', 'institution', 'factory', 'warehouse', 'apartment', 'residence', 'hospitality', 'hospital'].map(item => (
                                <div className="small-card" key={item}>
                                    <img src={`assets/images/${item}.png`} alt={item} />
                                    <div className="overlay"><h4 style={{textTransform: 'capitalize'}}>{item}</h4></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`toggle-content-area ${activeTab === 'products' ? 'active' : ''}`} id="productsContent">
                    <div className="category-block" data-searchable="fingerprint devices X990 F18 P160 X7">
                        <h3>Fingerprint Devices</h3>
                        <div className="cards-grid">
                            {[
                                { id: 'x990', name: 'X990', desc: 'Standalone Fingerprint Time and Attendance System.' },
                                { id: 'f18', name: 'F18', desc: 'Innovative biometric fingerprint reader for access control.' },
                                { id: 'p160', name: 'P160', desc: 'Multi-biometric identification time & attendance terminal.' },
                                { id: 'x7', name: 'X7', desc: 'Compact biometric access control reader with fingerprint.' }
                            ].map(prod => (
                                <div className="card" key={prod.id}>
                                    <div className="card-img" style={{ background: '#fff', padding: '20px' }}><img src={`assets/images/prod_${prod.id}.png`} style={{ objectFit: 'contain' }} alt={prod.name} /></div>
                                    <div className="card-body">
                                        <h4 className="card-title">{prod.name}</h4>
                                        <p className="card-text">{prod.desc}</p>
                                        <a href="#" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>View Details</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="category-block" data-searchable="face recognition devices AI Face Victor AI Face Mars AI Face Iris">
                        <h3>Face Recognition Devices</h3>
                        <div className="cards-grid">
                            {[
                                { id: 'victor', name: 'AI Face Victor', desc: 'High-speed facial recognition with mask detection.' },
                                { id: 'mars', name: 'AI Face Mars', desc: 'Robust outdoor facial recognition access control.' },
                                { id: 'iris', name: 'AI Face Iris', desc: 'Dual biometric face and iris recognition system.' }
                            ].map(prod => (
                                <div className="card" key={prod.id}>
                                    <div className="card-img" style={{ background: '#fff', padding: '20px' }}><img src={`assets/images/prod_${prod.id}.png`} style={{ objectFit: 'contain' }} alt={prod.name} /></div>
                                    <div className="card-body">
                                        <h4 className="card-title">{prod.name}</h4>
                                        <p className="card-text">{prod.desc}</p>
                                        <a href="#" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>View Details</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="category-block" data-searchable="boom barrier systems BB Radar BGL100 BGCM300 BG108 ATM">
                        <h3>Boom Barrier Systems</h3>
                        <div className="cards-grid">
                            {[
                                { id: 'bbradar', name: 'BB Radar', desc: 'Radar-based vehicle detection barrier system.' },
                                { id: 'bgl100', name: 'BGL100', desc: 'Heavy-duty commercial boom barrier.' },
                                { id: 'bgcm300', name: 'BGCM300', desc: 'High-speed toll and parking barrier.' },
                                { id: 'bg108', name: 'BG108 (ATM)', desc: 'Compact barrier designed specifically for ATM locations.' }
                            ].map(prod => (
                                <div className="card" key={prod.id}>
                                    <div className="card-img" style={{ background: '#fff', padding: '20px' }}><img src={`assets/images/prod_${prod.id}.png`} style={{ objectFit: 'contain' }} alt={prod.name} /></div>
                                    <div className="card-body">
                                        <h4 className="card-title">{prod.name}</h4>
                                        <p className="card-text">{prod.desc}</p>
                                        <a href="#" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>View Details</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="category-block" data-searchable="access control locks hotel locks safe locks controllers HL700 HL500 ESSL Safe36 ESSL Safe50 C3200 C3400">
                        <h3>Access Control & Locks</h3>
                        <div className="cards-grid">
                            {[
                                { id: 'hl700', name: 'Hotel Lock HL700', desc: 'Premium RFID hotel card lock system.' },
                                { id: 'safe36', name: 'ESSL Safe36', desc: 'Biometric electronic safe box.' },
                                { id: 'c3200', name: 'Controller C3200', desc: 'Advanced IP-based door access control panel.' }
                            ].map(prod => (
                                <div className="card" key={prod.id}>
                                    <div className="card-img" style={{ background: '#fff', padding: '20px' }}><img src={`assets/images/prod_${prod.id}.png`} style={{ objectFit: 'contain' }} alt={prod.name} /></div>
                                    <div className="card-body">
                                        <h4 className="card-title">{prod.name}</h4>
                                        <p className="card-text">{prod.desc}</p>
                                        <a href="#" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>View Details</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesProductsToggle;
