import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import ServicesProductsNav from '../components/ServicesProductsNav';
import FAQAccordion from '../components/FAQAccordion';
import ContactForm from '../components/ContactForm';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <>
            <HeroSlider />
            <AboutSection />
            <ServicesProductsNav />
            <FAQAccordion />
            <ContactForm />
        </>
    );
};

export default Home;
