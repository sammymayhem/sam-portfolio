import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <div class='footer'>
            <a class='github' href="https://github.com/sammymayhem"><FaGithub color='#ae2012' /></a>
            <a class="linked-in" href="https://www.linkedin.com/in/sam-wallace-92b6238/"><FaLinkedin /></a>
            <a class='facebook' href="https://www.facebook.com/sammymayhem/"><FaFacebook /></a>
        </div>
    );
}

export default Footer;