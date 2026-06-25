import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const BlogPost = () => {
    const { id } = useParams();

    const blogData = {
        '1': {
            title: 'Biometric Attendance System',
            category: 'Attendance',
            image: '/assets/images/blog1.png',
            overview: 'A leading corporate enterprise with 5000+ employees required a modern attendance solution to replace their outdated card-based system.',
            challenge: 'Rampant buddy punching and long queues during shift changes were causing significant productivity losses and payroll inaccuracies.',
            solution: 'We implemented AI Face Recognition systems (AI Face Victor) across all 10 entry points, integrated with our cloud-based monitoring software.',
            results: 'Reduced attendance errors by 90%, eliminated buddy punching completely, and cut down shift-change queuing time from 15 minutes to under 2 minutes.'
        },
        '2': {
            title: 'Door Access Control',
            category: 'Security',
            image: '/assets/images/blog2.png',
            overview: 'A multi-tenant commercial complex needed a centralized access control system to secure their premises while allowing smooth visitor management.',
            challenge: 'Unauthorized access to restricted floors and inefficient manual visitor logging were major security risks.',
            solution: 'Deployed C3400 IP-based controllers connected to biometric and RFID readers on all main doors and elevators.',
            results: 'Achieved 100% compliance with security protocols, improved incident response time by providing real-time access logs, and streamlined the visitor check-in process.'
        },
        '3': {
            title: 'Hospital Attendance & Security',
            category: 'Healthcare',
            image: '/assets/images/blog3.png',
            overview: 'A major city hospital required an upgrade to their staff tracking and ward security mechanisms to maintain strict hygiene standards.',
            challenge: 'Touch-based fingerprint scanners were posing a hygiene risk, and securing sensitive areas like the ICU and pharmacy was difficult with standard keys.',
            solution: 'Installed touchless facial recognition terminals for attendance and integrated smart boom barriers for the ambulance and doctor parking areas.',
            results: 'Improved staff hygiene compliance, completely secured restricted medical wards, and optimized parking space allocation for emergency vehicles.'
        }
    };

    const blog = blogData[id];

    if (!blog) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Blog Post Not Found</h2>
                <Link to="/blogs" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Blogs</Link>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <Link to="/blogs" style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
                    <i className="fas fa-arrow-left"></i> Back to All Case Studies
                </Link>
                <div className="card" style={{ overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '400px' }}>
                        <ImageWithFallback src={blog.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={blog.title} />
                    </div>
                    <div style={{ padding: '60px', maxWidth: '900px', margin: '0 auto' }}>
                        <span className="blog-category" style={{ position: 'relative', top: '0', left: '0', marginBottom: '20px', display: 'inline-block' }}>{blog.category}</span>
                        <h1 style={{ color: 'var(--primary)', marginBottom: '40px', fontSize: '2.5rem' }}>{blog.title}</h1>
                        
                        <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Project Overview</h3>
                        <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>{blog.overview}</p>
                        
                        <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Challenge</h3>
                        <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>{blog.challenge}</p>
                        
                        <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Solution</h3>
                        <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>{blog.solution}</p>
                        
                        <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Results</h3>
                        <div style={{ padding: '20px', backgroundColor: 'var(--bg-light)', borderLeft: '4px solid var(--accent)', borderRadius: '0 8px 8px 0' }}>
                            <p style={{ margin: 0, fontWeight: '600', color: 'var(--primary)', fontSize: '1.1rem' }}>{blog.results}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
