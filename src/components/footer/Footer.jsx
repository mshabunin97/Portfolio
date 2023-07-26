import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">Maxim Shabunin</h2>
                <div className="footer__subtitle">Frontend Developer</div>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href="#skills" className='footer__link'>Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className='footer__link'>Portfolio</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://github.com/mshabunin97" className="footer__social-icon" target='_blank' rel='noreferrer' title="My profile github">
                    <i className="uil uil-github"></i>
                </a>
                <a href="https://t.me/Max_Shabunin" className="footer__social-icon" target='_blank' rel='noreferrer' title="My Telegram">
                    <i className="uil uil-telegram"></i>
                </a>
                <a href="https://www.linkedin.com/in/max-shabunin/" className="footer__social-icon" target='_blank' rel='noreferrer' title="My profile Linkedin">
                    <i className="uil uil-linkedin"></i>
                </a> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;