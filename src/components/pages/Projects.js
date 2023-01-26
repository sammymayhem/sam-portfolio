import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaHome } from 'react-icons/fa';
import '../../styles/Projects.css';


const Projects = () => {
    const projects = [
        {
            title: 'Simple Poke Search',
            image: process.env.PUBLIC_URL + '/images/poke-search.png',
            link: 'http://react-app-poke-search.s3-website-us-west-1.amazonaws.com/',
            repo: 'https://github.com/sammymayhem/poke-search',
        },
        {
            title: 'README Generator',
            image: process.env.PUBLIC_URL + '/images/readme-gen.png',
            link: 'https://github.com/sammymayhem/positive-readme-generator',
            repo: 'https://github.com/sammymayhem/positive-readme-generator',
        },
        {
            title: 'Social Media API',
            image: process.env.PUBLIC_URL + '/images/social-media-api.png',
            link: 'https://github.com/sammymayhem/facespace-social-media-api',
            repo: 'https://github.com/sammymayhem/facespace-social-media-api',
        },
        {
            title: 'Team Generator',
            image: process.env.PUBLIC_URL + '/images/team-gen.png',
            link: 'https://github.com/sammymayhem/team-profile-gen-assemble',
            repo: 'https://github.com/sammymayhem/team-profile-gen-assemble',
        },

    ]

    const renderProject = (projects, index) => {
        return (
            <Card className="text-white card proj-card" key={index}>
                <Card.Img src={projects.image} className="card-image" alt="Card image" />
                <Card.ImgOverlay className="proj-overlay">
                    <Card.Title className="title-text show-proj">{projects.title}</Card.Title>
                    <Card.Text className="show-proj"><a href={projects.link}><FaHome /></a></Card.Text>
                    <Card.Text className="show-proj"><a href={projects.repo}><FaGithub /></a></Card.Text>
                </Card.ImgOverlay>
            </Card>
        );
    };

    return (
        <div>
            <div className='disclmaimer'>
                <h2 className='proj-disc'>Some projects are not displayed due to the change in Heroku plans. New projects coming soon!</h2>
            </div>
            <div className="grid">{projects.map(renderProject)}</div>;
        </div>
    )
}

export default Projects;