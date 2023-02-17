import '../../styles/About2.css';
import sam from '../../images/sam-cropped.png';

function About2() {
    return (
        <div className='about'>
            <div className='about-title-cont'>
                <h1 className='about-title'>About Me</h1>
            </div>
            <div className='about-cont'>
                <div className='left'>
                    <p>My name is Sam Wallace. Born and raised in San Diego, I have worn many hats in my
                        career.<br></br>
                        <br></br>
                        After spending 16 years helping the San Diego Comic-Con grow to where it is today, I decided to
                        break off and start a new path. I enojy creating and designing as well as problem solving. I'm always looking for a way to streamline processes and enjoy the challenges that come with that.<br></br>
                        <br></br>
                        Though young in my journey as a developer I am anxious to get to work and better myself in this new world. I enjoy front-end development, which I believe I have more of an aptitude for, as well as back-end development, which I am more than comfortable in as well.<br></br>
                        <br></br>
                        I hope you enjoy your time on my portfolio page!</p>
                </div>
                <div className='right'>
                    <div className='about-pic-cont'>
                        <img src={sam} alt='sam-pic' className='about-image'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About2;