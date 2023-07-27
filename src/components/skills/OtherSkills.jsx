import React from "react";


const OtherSkills = () => {
  return (
    <div className="skills__content" data-aos="fade-up-left" data-aos-duration="700" data-aos-once="true">
      <div className="skills__title">Other Skills</div>
      <div className="common">
        <div className="skills__wrapper">
          <div className="skills__box">
            <div className="skills__data">
            <i className='bx bxl-git'></i>
              <div className="skills__name">Git</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__data">
            <i className='bx bxl-jquery'></i>
              <div className="skills__name">Jquery</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__data">
            <i className='bx bxl-bootstrap'></i>
              <div className="skills__name">Bootstrap</div>
            </div>
          </div>
        </div>

        <div className="skills__wrapper">
          <div className="skills__box">
            <div className="skills__data">
            <i className='bx bxl-figma'></i>
              <div className="skills__name">Figma</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__data">
                <i className='bx bxl-visual-studio'></i>
              <div className="skills__name">VS</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__data">
                <i className='bx bxl-tailwind-css'></i>
              <div className="skills__name">Tailwind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherSkills;
