import React from 'react';

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/kururugurugi/" className="home__social-icon" target='_blank' rel='noreferrer' title="My profile instagram">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://github.com/mshabunin97" className="home__social-icon" target='_blank' rel='noreferrer' title="My github profile">
                <i className="uil uil-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/max-shabunin/" className="home__social-icon" target='_blank' rel='noreferrer' title="My profile Linkedin">
            <i className="uil uil-linkedin"></i>
            </a>
        </div>
    );
};

export default Social;