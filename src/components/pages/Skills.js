import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../../styles/Skills.css'

export const Skills = () => {
    return (
        <div className="skills">
            <h1 className="skill-title">Skills</h1>
            <div className='fe-container'>
                <ListGroup as="ul">
                    <ListGroup.Item className='fe-title' as="li" active>
                        Front End
                    </ListGroup.Item>
                    <ListGroup.Item id='fe-skill' as="li">HTML/HTML5</ListGroup.Item>
                    <ListGroup.Item id='fe-skill' as="li">CSS</ListGroup.Item>
                    <ListGroup.Item id='fe-skill' as="li">JavaScript</ListGroup.Item>
                    <ListGroup.Item id='fe-skill' as="li">jQuery</ListGroup.Item>
                    <ListGroup.Item id='fe-skill' as="li">React.js</ListGroup.Item>
                    <ListGroup.Item id='fe-skill' as="li">Bootstrap</ListGroup.Item>
                    <ListGroup.Item id='fe-skill' as="li">Tailwind CSS</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='be-container'>
                <ListGroup as="ul">
                    <ListGroup.Item className='be-title' as="li" active>
                        Back End
                    </ListGroup.Item>
                    <ListGroup.Item id='be-skill' as="li">Node.js</ListGroup.Item>
                    <ListGroup.Item id='be-skill' as="li">Express.js</ListGroup.Item>
                    <ListGroup.Item id='be-skill' as="li">MySQL/Sequelize</ListGroup.Item>
                    <ListGroup.Item id='be-skill' as="li">MongoDB/Mongoose</ListGroup.Item>
                    <ListGroup.Item id='be-skill' as="li">GraphQL/Apollo</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}

export default Skills;