import { motion } from 'framer-motion';
import sam2 from '../../images/sam2.png';
import '../../styles/Home.css';

function Home() {
    return (
        <div className='home-cont'>
            <div className='home-left'>
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
                        transition={{ delay: .5, type: 'spring', duaration: 4 }}>
                        <h2 id='home-text-2'> A Front End Web Developer kinda guy.</h2>
                    </motion.div>
                </div>
                <div className='home-accents'>
                    <motion.div
                        initial={{ opacity: 0, x: '-100vh' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: .75, duaration: 2 }}>
                        <div className='red-bar box'></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: '-100vh' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duaration: 2 }}>
                        <div className='orange-bar box'></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: '-100vh' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.25, duaration: 2 }}>
                        <div className='yellow-bar box'></div>
                    </motion.div>
                </div>
            </div>
            <div className='home-right'>
                <motion.div
                    initial={{ opacity: 0, y: '-100vh' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, type: 'spring', duaration: 2 }}>
                    <div className='pic-cont'>
                        <img src={sam2} alt='sam-pic' className='sam-pic'></img>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;