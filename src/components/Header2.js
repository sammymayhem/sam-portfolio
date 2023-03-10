import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand className='link1' as={Link} to='/sam-portfolio'>SW</Navbar.Brand>
                <Container className='nav'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='link2' id='nav-link' as={Link} to='/about'>About</Link>
                            <Link className='link3' id='nav-link' as={Link} to='/projects'>Projects</Link>
                            <Link className='link4' id='nav-link' as={Link} to='/skills'>Skills</Link>
                            <a id='nav-link' href='https://www.dropbox.com/scl/fi/v05ii2htcjf3zc7wnruu9/Sam-Wallace-Resume.docx?dl=0&rlkey=ka9m9qpm7t5bzcmxil2lhtqbt' target='_blank' rel='noopener noreferrer'>Resume</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;