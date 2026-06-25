import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const Blogs = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <div className="container">
                <h1 className="section-title">Case Studies & Blogs</h1>
                
                <div className="blog-grid" style={{ paddingBottom: '100px' }}>
                    {/* Case Study 1 */}
                    <div className="blog-card" data-searchable="biometric attendance case study">
                        <Link to="/blog/1" style={{ display: 'block', textDecoration: 'none' }}>
                            <div className="blog-img">
                                <span className="blog-category">Attendance</span>
                                <ImageWithFallback src="/assets/images/blog1.png" alt="Corporate office attendance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title">Biometric Attendance System</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Discover how a leading corporate enterprise reduced their attendance errors by 90% and eliminated buddy punching using our AI Face Recognition systems.</p>
                                <span className="blog-link" style={{ marginTop: '15px', display: 'inline-block' }}>Read Full Case Study <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </Link>
                    </div>

                    {/* Case Study 2 */}
                    <div className="blog-card" data-searchable="door access control case study">
                        <Link to="/blog/2" style={{ display: 'block', textDecoration: 'none' }}>
                            <div className="blog-img">
                                <span className="blog-category">Security</span>
                                <ImageWithFallback src="/assets/images/blog2.png" alt="Corporate office security" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title">Door Access Control</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Learn how integrating our centralized access control system significantly improved workplace security and streamlined visitor management.</p>
                                <span className="blog-link" style={{ marginTop: '15px', display: 'inline-block' }}>Read Full Case Study <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </Link>
                    </div>

                    {/* Case Study 3 */}
                    <div className="blog-card" data-searchable="hospital management case study">
                        <Link to="/blog/3" style={{ display: 'block', textDecoration: 'none' }}>
                            <div className="blog-img">
                                <span className="blog-category">Healthcare</span>
                                <ImageWithFallback src="/assets/images/blog3.png" alt="Hospital entrance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title">Hospital Attendance & Security</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Explore how touchless biometric systems improved staff tracking, secured sensitive wards, and maintained strict hygiene standards.</p>
                                <span className="blog-link" style={{ marginTop: '15px', display: 'inline-block' }}>Read Full Case Study <i className="fas fa-arrow-right"></i></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
