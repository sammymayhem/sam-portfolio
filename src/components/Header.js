import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header class='header'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand class='link1' id='nav-link' as={Link} to='/'>Sam Wallace</Navbar.Brand>
                <Container class='nav'>
                    <Nav className="justify-content-end">
                        <Link class='link3' id='nav-link' as={Link} to='/about'>About</Link>
                        <Link class='link4' id='nav-link' as={Link} to='/projects'>Projects</Link>
                        <Link class='link5' id='nav-link' as={Link} to='/contact'>Contact Me</Link>
                        <Link class='link6' id='nav-link' as={Link} to='/resume'>Resume</Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;