import React from 'react';
import AnimateHeading from '../utils/AnimateHeading';
import Frontend from './Frontend';
import OtherSkills from './OtherSkills'
import './skills.css';

const Skills = () => {
    return (
        <section className='skills section' id="skills">
            <div className="section__title">
                <AnimateHeading text="Skills" />
            </div>

            <div className="skills__container container">
                <Frontend/>
                <OtherSkills/>
            </div>
        </section>
    );
};

export default Skills;