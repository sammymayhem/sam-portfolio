import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaHome } from 'react-icons/fa';
import '../../styles/Projects2.css';


const Projects = () => {
    const projects = [
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
        {
            title: 'Team Generator',
            image: process.env.PUBLIC_URL + '/images/team-gen.png',
            description: 'Welcome to the Team Profile Generator Assembleeeee! Where you can assemble your team of earths mightiest office mates. I created this program to give a fun twist on managing your team. You will be prompted to add a Captain (or Manager) to your team and then add as many super engineers or agent interns that you need to keep track of. This project did not come without its challenges. From getting the cards to show, to getting the questions to cycle, this app really kept me on my toes. I learned quite a bit about template literals and the use of functions with the inquirer prompt. I mapped out many ways that this project could have been achieved, but landed on the function method as it is one I have used before and seemed more comfortable for me.',
            link: 'https://github.com/sammymayhem/team-profile-gen-assemble',
            repo: 'https://github.com/sammymayhem/team-profile-gen-assemble',
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
            <div className='disclmaimer'>
                <h2 className='proj-disc'>Some projects are not displayed due to the change in Heroku plans. New projects coming soon!</h2>
            </div>
            <div className="grid">{projects.map(renderProject)}</div>;
        </div>
    )
}

export default Projects;


