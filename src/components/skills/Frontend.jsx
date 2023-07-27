import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content " data-aos="fade-up-right" data-aos-duration="700" data-aos-once="true">
      <div className="skills__title">Frontend developer</div>
      <div className="common">
        <div className="skills__wrapper">
          <div className="skills__box">
            <div className="skills__data">
              <i className="bx bxl-html5"></i>
              <div className="skills__name">HTML</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__data">
              <i className="bx bxl-css3"></i>
              <div className="skills__name">CSS</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__data">
              <i className="bx bxl-javascript"></i>
              <div className="skills__name">JavaScript</div>
            </div>
          </div>
        </div>

        <div className="skills__wrapper">
          <div className="skills__box">
            <div className="skills__data">
              <i className="bx bxl-react"></i>
              <div className="skills__name">React</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__data">
            <i className='bx bxl-redux'></i>
              <div className="skills__name">Redux</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__data">
              <i className="bx bxl-sass"></i>
              <div className="skills__name">Sass/Scss</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
