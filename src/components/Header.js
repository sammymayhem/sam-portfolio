import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header class='header'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand class='link1' as={Link} to='/'>SW</Navbar.Brand>
                <Container class='nav'>
                    <Nav className="justify-content-end">
                        <Link class='link2' id='nav-link' as={Link} to='/about'>About</Link>
                        <Link class='link3' id='nav-link' as={Link} to='/projects'>Projects</Link>
                        <Link class='link4' id='nav-link' as={Link} to='/skills'>Skills</Link>
                        <a id='nav-link' href='https://www.dropbox.com/s/mi2z27rvgiu77cd/Sam%20Wallace%20Resume.pdf?dl=0' target='_blank' rel='noopener noreferrer'>Resume</a>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;