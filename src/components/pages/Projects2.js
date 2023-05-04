import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaHome } from 'react-icons/fa';
import '../../styles/Projects2.css';


const Projects = () => {
    const projects = [
        {
            title: 'Airbnb Clone',
            image: process.env.PUBLIC_URL + '/images/airbnb-clone.png',
            description: 'This was my introduction to NextJS 13, Typescript and many of the packages that go along with making something like Airbnb function. A full description of what went into this project can be found in the README file, found  in the repo.',
            link: 'https://prop-rental-example.vercel.app/',
            repo: 'https://github.com/sammymayhem/airbnb-clone'
        },
        {
            title: 'The Many Faces of Pickles',
            image: process.env.PUBLIC_URL + '/images/pickle-faces.png',
            description: 'Welcome pickle enthusiasts and novices! The aim of my site is to show you the many joys that can come from the humble pickle. From nutritoinal facts to fun recipes, come take a look at all the ways you can dress up or dress down a pickle!',
            link: 'http://pickle-faces.s3-website-us-west-1.amazonaws.com/',
            repo: 'https://github.com/sammymayhem/pickle-faces',
        },
        {
            title: 'Simple Poke Search',
            image: process.env.PUBLIC_URL + '/images/poke-search.png',
            description: 'PokeSearch is a simple search engine. You can search for a pokemon and return their type. You can search for a move and find out information about that move for strategic advantages. You can also search any item and return some useful information reagarding said item. All in the persuit to help pokemon trainers when they just need quick simple information. This is a work in progress and in its simplest form at this time. I am hoping to improve on the design of the page as well as add more features!',
            link: 'http://react-app-poke-search.s3-website-us-west-1.amazonaws.com/',
            repo: 'https://github.com/sammymayhem/poke-search',
        },
        {
            title: 'README Generator',
            image: process.env.PUBLIC_URL + '/images/readme-gen.png',
            description: 'Greetings you awesome individual and welcome to the Positive README Generator. I dont know about you, but creating a well crafted README can be a challenge sometimes. Thats why I created the this project, I wanted to add a little spice to the process of creating a README. With the Positive README Generator you will be prompted with questions to help us build your positively fantastic README. I hope you enjoy and know that your project is amazing!',
            link: 'https://github.com/sammymayhem/positive-readme-generator',
            repo: 'https://github.com/sammymayhem/positive-readme-generator',
        },
        {
            title: 'Social Media API',
            image: process.env.PUBLIC_URL + '/images/social-media-api.png',
            description: 'Welcome to the FaceSpace Social Media API! Here at FaceSpace we strive to give everybody the best outlet to make friends and share their thoughts. The best part of it, is then your friends can share reactions to your thoughts! What an age we live in. I was motivated to create this api so that my friends and I had a space to share our thoughts and then comment on those thoughts ourselves. I enjoyed developing thie API and honing my skill with MongoDB and Mongoose.',
            link: 'https://github.com/sammymayhem/facespace-social-media-api',
            repo: 'https://github.com/sammymayhem/facespace-social-media-api',
        },
    ]

    const renderProject = (projects, index) => {
        return (
            <div className='card-container'>
                <div className='image'>
                    <Card className="text-white card proj-card" key={index}>
                        <Card.Img src={projects.image} className="card-image" alt="Card image" />
                    </Card>
                </div>
                <div className='proj-info'>
                    <h2>{projects.title}</h2>
                    <p>{projects.description}</p>
                </div>
                <div className='proj-links'>
                    <p className="show-proj web-link"><a href={projects.link}><FaHome /></a></p>
                    <p className="show-proj git-link"><a href={projects.repo}><FaGithub /></a></p>
                </div>
            </div>
        );
    };

    return (
        <div className='proj-container'>
            <div>
                <h1 className='proj-title'>Projects</h1>
            </div>
            <div className="grid">{projects.map(renderProject)}</div>;
        </div>
    )
}

export default Projects;


