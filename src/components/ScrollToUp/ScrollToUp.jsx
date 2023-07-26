import React, { useEffect, useState } from 'react';
import './scroll.css';

const ScrollToUp = () => {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (window.scrollY >= 770) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {showScroll && (
                <a href="#" className="scrollup" onClick={scrollToTop}>
                    <i className="uil uil-arrow-up scrollup__icon"></i>
                </a>
            )}
        </div>
    );
};

export default ScrollToUp;