/* eslint-disable react/prop-types */
import React from 'react';
import './portfolio.css';



const ProjectCards = ({title, projImg, projDescr, url,}) => { 
  return (
    <a href={url} target='_blank' rel="noreferrer" className='portfolio__item'>
      <img src={projImg} className='portfolio__img' alt="Projects"/>

      <div className="portfolio__hover">
        <h3 className="portfolio__title">{title}</h3>
        <p className='portfolio__descr'>{projDescr}</p>
      </div>

    </a>
  );
};

export default ProjectCards;