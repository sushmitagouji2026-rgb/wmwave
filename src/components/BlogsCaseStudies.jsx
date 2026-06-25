import React, { useEffect, useRef } from 'react';

const BlogsCaseStudies = () => {
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

        const elements = document.querySelectorAll('.reveal-blog');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section blogs" id="blogs">
            <div className="container">
                <h2 className="section-title reveal-blog">Case Studies</h2>
                <div className="blog-grid reveal-blog">
                    <div className="blog-card" data-searchable="biometric attendance case study">
                        <div className="blog-img">
                            <span className="blog-category">Attendance</span>
                            <img src="assets/images/blog1.png" alt="Corporate office attendance" />
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">Biometric Attendance Case Study</h3>
                            <p>Discover how a leading corporate enterprise reduced their attendance errors by 90% and eliminated buddy punching using our AI Face Recognition systems.</p>
                            <a href="#" className="blog-link">Read Case Study <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="blog-card" data-searchable="door access control case study">
                        <div className="blog-img">
                            <span className="blog-category">Security</span>
                            <img src="assets/images/blog2.png" alt="Corporate office security" />
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">Door Access Control Case Study</h3>
                            <p>Learn how integrating our centralized access control system significantly improved workplace security and streamlined visitor management.</p>
                            <a href="#" className="blog-link">Read Case Study <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="blog-card" data-searchable="hospital management case study">
                        <div className="blog-img">
                            <span className="blog-category">Healthcare</span>
                            <img src="assets/images/blog3.png" alt="Hospital entrance" />
                        </div>
                        <div className="blog-content">
                            <h3 className="blog-title">Hospital Management Case Study</h3>
                            <p>Explore how touchless biometric systems improved staff tracking, secured sensitive wards, and maintained strict hygiene standards in a major hospital.</p>
                            <a href="#" className="blog-link">Read Case Study <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsCaseStudies;
