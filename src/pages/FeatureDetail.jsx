import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const FeatureDetail = () => {
    const { id } = useParams();

    const featureData = {
        'attendance': {
            name: 'Attendance Monitoring',
            icon: 'fa-clock',
            image: '/assets/images/fingerprint_attendance.png',
            desc: 'Track employee attendance accurately with real-time analytics.',
            details: 'Our advanced attendance monitoring solution captures clock-ins and clock-outs seamlessly. It supports biometric integration, RFID cards, and mobile app clock-ins. Ensure compliance, track overtime, and automatically sync with your payroll systems to streamline your HR operations.'
        },
        'business': {
            name: 'Business Monitoring',
            icon: 'fa-chart-line',
            image: '/assets/images/about_img.png',
            desc: 'Gain complete visibility over your business operations across multiple branches.',
            details: 'Centralize your workforce management with cloud-based business monitoring. View live dashboards, generate customized reports, and track productivity metrics across different geographical locations, all from a single secure portal.'
        },
        'cloud': {
            name: 'Cloud-Based Solutions',
            icon: 'fa-cloud',
            image: '/assets/images/blog2.png',
            desc: 'Secure, scalable, and resilient cloud infrastructure for your access data.',
            details: 'Move away from localized servers that are prone to failure. Our highly secure cloud architecture ensures that your data is backed up, encrypted, and available 24/7. Easily scale your storage as your workforce grows.'
        },
        'biometrics': {
            name: 'Biometrics',
            icon: 'fa-fingerprint',
            image: '/assets/images/face_attendance.png',
            desc: 'State-of-the-art biometric authentication for uncompromised security.',
            details: 'Deploy AI-powered facial recognition, advanced fingerprint scanning, and iris detection technologies. Prevent buddy-punching and ensure that only authorized personnel gain entry to highly restricted zones.'
        },
        'access': {
            name: 'Access Control',
            icon: 'fa-shield-alt',
            image: '/assets/images/door_access.png',
            desc: 'Comprehensive access control systems tailored to your facility.',
            details: 'Manage who can enter where and when. Our access control system provides real-time alerts for forced entries, integrates with fire alarms for automated evacuation unlocking, and allows remote door control via smartphone.'
        },
        'automation': {
            name: 'Smart Automation',
            icon: 'fa-cogs',
            image: '/assets/images/boom_barrier_service.png',
            desc: 'Intelligent automation for gates, barriers, and office environments.',
            details: 'Automate your vehicle access with license plate recognition boom barriers. Integrate visitor management systems that auto-generate QR passes, reducing manual dependency and enhancing the visitor experience.'
        }
    };

    const feature = featureData[id];

    if (!feature) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Feature Not Found</h2>
                <Link to="/#about" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-primary-theme" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '100vh' }}>
            <div className="container">
                <Link to="/#about" style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px' }}>
                    <i className="fas fa-arrow-left"></i> Back to Home
                </Link>
                
                <div className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', padding: '40px', gap: '50px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#fff', borderRadius: '15px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ImageWithFallback src={feature.image} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} alt={feature.name} />
                    </div>
                    
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <div style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '15px' }}><i className={`fas ${feature.icon}`}></i></div>
                        <h1 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2.5rem' }}>{feature.name}</h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-muted)' }}>{feature.desc}</p>
                        
                        <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Feature Overview</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: 'var(--text-muted)' }}>{feature.details}</p>

                        <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                            <button className="btn btn-primary" style={{ flex: '1' }}>Request Demo</button>
                            <Link to="/services" className="btn btn-outline" style={{ flex: '1', color: 'var(--primary)', borderColor: 'var(--primary)', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>View Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureDetail;
