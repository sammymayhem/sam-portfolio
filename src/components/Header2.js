import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <div class='header'>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand class='link1' as={Link} to='/sam-portfolio'>SW</Navbar.Brand>
                <Container class='nav'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link class='link2' id='nav-link' as={Link} to='/about'>About</Link>
                            <Link class='link3' id='nav-link' as={Link} to='/projects'>Projects</Link>
                            <Link class='link4' id='nav-link' as={Link} to='/skills'>Skills</Link>
                            <a id='nav-link' href='https://www.dropbox.com/s/buifgzp27qy4b7c/Sam%20Wallace%20Resume.pdf?dl=0' target='_blank' rel='noopener noreferrer'>Resume</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;