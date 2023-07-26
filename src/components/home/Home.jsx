/* eslint-disable no-unused-vars */
import React from 'react';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import './home.css';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content"  data-aos="fade-down"  data-aos-easing="ease-in-back"   data-aos-delay="100"  data-aos-offset="0" data-aos-duration="1000">
                    <Social/>

                    <Data/>
                    
                </div>
                <ScrollDown/>

            </div>
        </section>
    );
};

export default Home;