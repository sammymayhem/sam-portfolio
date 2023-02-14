import { motion } from 'framer-motion';
// import sam1 from '../../images/sam-cropped.png';
import '../../styles/Home.css';

function Home() {
    return (
        <div>
            <div id='home-text'>
                <motion.div
                    initial={{ opacity: 0, x: '-100vh' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duaration: 2 }}>
                    <h1 id='home-text-1'>Sam Wallace,</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: '-100vh' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: .5, type: 'spring', duaration: 2 }}>
                    <h2 id='home-text-2'> A Front End Web Developer kinda guy.</h2>
                </motion.div>
            </div>
            {/* <div className='home-image'>
                <motion.div
                    initial={{ opacity: 0, x: '-100vh' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', duaration: 2 }}>
                    <div className='pic-bg'>
                        <div className='home-pic'>
                            <img src={sam1} alt="" id="my-image" />
                        </div>
                    </div>
                </motion.div>
            </div> */}
        </div>
    );
}

export default Home;