import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <a className='github' href="https://github.com/sammymayhem"><FaGithub color='#ae2012' /></a>
            <a className="linked-in" href="https://www.linkedin.com/in/sam-wallace-92b6238/"><FaLinkedin /></a>
            <a className='facebook' href="https://www.facebook.com/sammymayhem/"><FaFacebook /></a>
        </div>
    );
}

export default Footer;