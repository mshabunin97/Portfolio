import React, { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
    const [Toggle, showMenu] = useState(false);

    const [Scroll, setScroll] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 400) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <header className={`header ${Scroll ? 'scroll' : ''}`}>
      <nav className='nav container'>
        <a href="index.html" className='nav__logo'>Max</a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className='nav__link active-link'>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className='nav__link'>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className='nav__link'>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className='nav__link'>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contacts" className='nav__link'>
                <i className="uil uil-message nav__icon"></i> Contacts
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>

          
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps nav__toggle"></i>
          </div>
      </nav>
    </header>
  );
};

export default Header;
