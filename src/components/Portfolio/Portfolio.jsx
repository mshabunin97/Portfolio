import React from 'react';
import AnimateHeading from '../utils/AnimateHeading';
import './portfolio.css';
import ProjectCards from './ProjectCards'
import TodoImg from './../../assets/projects/todolist.png';
import Picture from './../../assets/projects/picture.png';
import Device from './../../assets/projects/device.png';
import Hangman from './../../assets/projects/hangman.png';
import Quiz from './../../assets/projects/quiz.png';
import Movie from './../../assets/projects/movie-api.png'




const myWorks = [
    {
        id: 1,
        image: Hangman,
        title: 'Hangman game',
        description: "This is a simple implementation of the classic game 'Hangman'",
        url:'https://mshabunin97.github.io/hangman-game/',
    },
    {
        id: 2,
        image: Device,
        title: 'Device Web',
        description: "This is a multi-page website designed to provide electric scooter rental services.",
        url:'https://mshabunin97.github.io/device/',
    },
    {
        id: 3,
        image: TodoImg,
        title: 'Todo',
        description: 'This is a simple ToDo application built with React.',
        url:'https://mshabunin97.github.io/ToDo-App/',
    },
    {
        id: 4,
        image: Quiz,
        title: 'Quiz App',
        description: 'This is a web application that allows you to play an engaging quiz with various questions.',
        url:'https://mshabunin97.github.io/Quiz-App/',
    },
    {
        id: 5,
        image: Picture,
        title: 'Picture Web',
        description: 'This is a web application that allows users to order a canvas portrait from a photograph.',
        url:'https://mshabunin97.github.io/pictures/',
    },
    {
        id: 6,
        image: Movie,
        title: 'Movie',
        description: 'A simple web application for viewing information about movies. Better use VPN',
        url:'https://mshabunin97.github.io/Movie-Api/',
    },

]





const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="section__title">
                <AnimateHeading text="Portfolio" />
            </div>
            
            <div className="portfolio__container container grid" data-aos="zoom-in" data-aos-duration="700" data-aos-once="true">
                {myWorks.map((proj) => {
                    return <ProjectCards key={proj.id} title={proj.title} projImg={proj.image} projDescr={proj.description} url={proj.url}/>
                })}
            </div>

        </section>
    );
};

export default Portfolio;