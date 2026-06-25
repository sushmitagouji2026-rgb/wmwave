import React, { useState, useEffect, useRef } from 'react';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const revealRef = useRef(null);

    const faqs = [
        { q: "1. What is biometric attendance system?", a: "A biometric attendance system uses unique biological characteristics like fingerprints, face, or iris to identify employees and record their time and attendance accurately, preventing buddy punching.", keywords: "biometric attendance system" },
        { q: "2. How does fingerprint attendance work?", a: "It scans the ridges and valleys of a finger, converts this image into a mathematical algorithm (template), and stores it. When an employee clocks in, their live scan is matched against the stored template.", keywords: "fingerprint attendance work" },
        { q: "3. What is facial recognition attendance?", a: "This touchless technology uses an AI camera to map facial features and verify identity instantly. It's highly hygienic and efficient, particularly suited for large crowds or healthcare environments.", keywords: "facial recognition attendance" },
        { q: "4. What are the benefits of access control systems?", a: "They provide enhanced security by restricting unauthorized entry, eliminate the need for physical keys, allow time-based access restrictions, and provide detailed logs of who entered specific areas and when.", keywords: "benefits access control systems" },
        { q: "5. How does QR attendance work?", a: "Employees scan a dynamic, secure QR code using their mobile app, or present their personal QR code to a reader. It's a quick, contactless method ideal for modern distributed workforces.", keywords: "qr attendance work" },
        { q: "6. What is a boom barrier system?", a: "A boom barrier is an automated pole or bar that blocks vehicular access to a controlled point, such as a parking lot, toll booth, or office entrance, often integrated with RFID or LPR technology.", keywords: "boom barrier system" },
        { q: "7. What industries use biometric systems?", a: "Almost all industries use them, including corporate offices, manufacturing, healthcare, education, hospitality, and government facilities, to enhance security and streamline operations.", keywords: "industries biometric systems" },
        { q: "8. How secure is face recognition technology?", a: "Modern AI face recognition is highly secure. It uses anti-spoofing technology to distinguish between a live person and a photo or video, making unauthorized access extremely difficult.", keywords: "secure face recognition technology" },
        { q: "9. What is cloud attendance monitoring?", a: "It's a system where attendance data from biometric devices is pushed instantly to secure cloud servers, allowing administrators to view real-time reports from any location or device.", keywords: "cloud attendance monitoring" },
        { q: "10. Which attendance system is best for offices?", a: "The best system depends on specific needs. Facial recognition is best for touchless hygiene, fingerprint is highly reliable and cost-effective, while cloud-based software is essential for remote monitoring.", keywords: "attendance system best offices" }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section faq" id="faq">
            <div className="container">
                <h2 className="section-title reveal-faq" ref={revealRef}>Frequently Asked Questions</h2>
                <div className="faq-container reveal-faq">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                            data-searchable={faq.keywords}
                        >
                            <button 
                                className="accordion-header"
                                onClick={() => toggleAccordion(index)}
                            >
                                {faq.q} <i className="fas fa-chevron-down"></i>
                            </button>
                            <div 
                                className="accordion-content"
                                style={{ maxHeight: activeIndex === index ? '500px' : null }}
                            >
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
