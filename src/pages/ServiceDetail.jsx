import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const ServiceDetail = () => {
    const { id } = useParams();

    const serviceData = {
        'fingerprint': { name: 'Fingerprint Attendance', category: 'Attendance Solutions', image: '/assets/images/fingerprint_attendance.png', desc: 'Secure and fast fingerprint recognition systems for reliable employee attendance tracking.', details: 'Implement a highly accurate biometric fingerprint system that prevents buddy punching, reduces payroll errors, and seamlessly integrates with your existing HR software.' },
        'face': { name: 'Face Recognition Attendance', category: 'Attendance Solutions', image: '/assets/images/face_attendance.png', desc: 'Touchless AI-powered facial recognition technology for modern workplaces.', details: 'Ensure hygienic, contactless entry for your workforce. Our AI-driven face recognition terminals work even in low light and can accurately detect masks.' },
        'qr': { name: 'QR Code Attendance', category: 'Attendance Solutions', image: '/assets/images/qr_attendance.png', desc: 'Dynamic QR code scanning using mobile devices for flexible workforce management.', details: 'Perfect for remote teams or contract workers. Generate secure, time-sensitive QR codes that employees can scan using their smartphones for instant clock-ins.' },
        'door': { name: 'Door Access Control', category: 'Access Control Solutions', image: '/assets/images/door_access.png', desc: 'Restrict and manage entry to sensitive areas with advanced card and biometric door locks.', details: 'Protect your digital and physical assets by deploying centralized door controllers. Grant or revoke access permissions instantly from the cloud dashboard.' },
        'boom': { name: 'Boom Barrier Control', category: 'Access Control Solutions', image: '/assets/images/boom_barrier_service.png', desc: 'Automated vehicle access management for parking lots and facility entrances.', details: 'Manage high-traffic parking zones with robust, fast-opening boom barriers. Integrated with UHF readers and ALPR (License Plate Recognition) for frictionless vehicle entry.' },
        'villa': { name: 'Villa Gate Automation', category: 'Gate & Automation Solutions', image: '/assets/images/villa.png', desc: 'Smart, secure automated gates for residential villas.', details: 'Elevate the security and convenience of your villa with automated swing or sliding gates, controllable via smartphone or remote.' },
        'institution': { name: 'Institution Automation', category: 'Gate & Automation Solutions', image: '/assets/images/institution.png', desc: 'Comprehensive access control for educational institutions.', details: 'Secure campus perimeters and monitor student/staff movement with integrated turnstiles and ID card readers.' },
        'factory': { name: 'Factory Automation', category: 'Gate & Automation Solutions', image: '/assets/images/factory.png', desc: 'Heavy-duty access management for industrial zones.', details: 'Manage large-scale workforce shifts and secure sensitive manufacturing areas with ruggedized biometric systems and full-height turnstiles.' },
        'warehouse': { name: 'Warehouse Automation', category: 'Gate & Automation Solutions', image: '/assets/images/warehouse.png', desc: 'Logistics and warehouse security systems.', details: 'Track vehicle loading dock access and secure inventory zones with advanced IP-based controllers.' },
        'apartment': { name: 'Apartment Security', category: 'Gate & Automation Solutions', image: '/assets/images/apartment.png', desc: 'Integrated security for multi-tenant apartment complexes.', details: 'Provide residents with secure, app-based entry systems while maintaining strict visitor logs at the main gate.' },
        'residence': { name: 'Residence Automation', category: 'Gate & Automation Solutions', image: '/assets/images/residence.png', desc: 'Smart home security integration.', details: 'Connect your home security cameras, door locks, and alarm systems into one seamless automated platform.' },
        'hospitality': { name: 'Hospitality Solutions', category: 'Gate & Automation Solutions', image: '/assets/images/hospitality.png', desc: 'Premium access control for hotels and resorts.', details: 'Offer guests a seamless experience with mobile key access, smart room controllers, and secure VIP lounge entry.' },
        'hospital': { name: 'Hospital Security', category: 'Gate & Automation Solutions', image: '/assets/images/hospital.png', desc: 'Strict access and hygiene compliance for healthcare facilities.', details: 'Deploy touchless biometric access for sterile environments, secure pharmacies, and manage ambulance routing with smart barriers.' }
    };

    const service = serviceData[id];

    if (!service) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Service Not Found</h2>
                <Link to="/services" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <Link to="/services" style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px' }}>
                    <i className="fas fa-arrow-left"></i> Back to Services
                </Link>
                
                <div className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', padding: '40px', gap: '50px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#fff', borderRadius: '15px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ImageWithFallback src={service.image} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} alt={service.name} />
                    </div>
                    
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <span className="blog-category" style={{ position: 'relative', top: '0', left: '0', marginBottom: '15px', display: 'inline-block' }}>{service.category}</span>
                        <h1 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2.5rem' }}>{service.name}</h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-muted)' }}>{service.desc}</p>
                        
                        <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Service Details</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: 'var(--text-muted)' }}>{service.details}</p>

                        <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                            <button className="btn btn-primary" style={{ flex: '1' }}>Consult an Expert</button>
                            <button className="btn btn-outline" style={{ flex: '1', color: 'var(--primary)', borderColor: 'var(--primary)' }}>View Case Studies</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
