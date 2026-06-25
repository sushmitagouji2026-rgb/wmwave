import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const Services = () => {
    const attendanceServices = [
        { id: 'fingerprint', name: 'Fingerprint Attendance', image: '/assets/images/fingerprint_attendance.png', desc: 'Secure and fast fingerprint recognition systems for reliable employee attendance tracking.' },
        { id: 'face', name: 'Face Recognition Attendance', image: '/assets/images/face_attendance.png', desc: 'Touchless AI-powered facial recognition technology for modern workplaces.' },
        { id: 'qr', name: 'QR Code Attendance', image: '/assets/images/qr_attendance.png', desc: 'Dynamic QR code scanning using mobile devices for flexible workforce management.' }
    ];

    const accessServices = [
        { id: 'door', name: 'Door Access Control', image: '/assets/images/door_access.png', desc: 'Restrict and manage entry to sensitive areas with advanced card and biometric door locks.' },
        { id: 'boom', name: 'Boom Barrier Control', image: '/assets/images/boom_barrier_service.png', desc: 'Automated vehicle access management for parking lots and facility entrances.' }
    ];

    const gateServices = ['villa', 'institution', 'factory', 'warehouse', 'apartment', 'residence', 'hospitality', 'hospital'];

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <h1 className="section-title">Our Services</h1>
                
                <div className="category-block">
                    <h3>Attendance Solutions</h3>
                    <div className="cards-grid">
                        {attendanceServices.map(srv => (
                            <Link to={`/service/${srv.id}`} key={srv.id} className="card" style={{ textDecoration: 'none', display: 'block' }}>
                                <div className="card-img"><ImageWithFallback src={srv.image} alt={srv.name} /></div>
                                <div className="card-body">
                                    <h4 className="card-title" style={{ transition: 'color 0.3s' }}>{srv.name}</h4>
                                    <p className="card-text">{srv.desc}</p>
                                    <span style={{ color: 'var(--accent)', fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>Explore Service <i className="fas fa-arrow-right"></i></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="category-block">
                    <h3>Access Control Solutions</h3>
                    <div className="cards-grid">
                        {accessServices.map(srv => (
                            <Link to={`/service/${srv.id}`} key={srv.id} className="card" style={{ textDecoration: 'none', display: 'block' }}>
                                <div className="card-img"><ImageWithFallback src={srv.image} alt={srv.name} /></div>
                                <div className="card-body">
                                    <h4 className="card-title" style={{ transition: 'color 0.3s' }}>{srv.name}</h4>
                                    <p className="card-text">{srv.desc}</p>
                                    <span style={{ color: 'var(--accent)', fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>Explore Service <i className="fas fa-arrow-right"></i></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="category-block">
                    <h3>Gate & Automation Solutions</h3>
                    <div className="small-cards-grid">
                        {gateServices.map(item => (
                            <Link to={`/service/${item}`} key={item} className="small-card" style={{ display: 'block', cursor: 'pointer' }}>
                                <ImageWithFallback src={`/assets/images/${item}.png`} alt={item} />
                                <div className="overlay"><h4 style={{textTransform: 'capitalize'}}>{item}</h4></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
