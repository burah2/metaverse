'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import {TypingText, typingText} from '../components';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const About = () => (
  <section className='{${styles.paddings} relative z-10'>
    <div className='gardient-02 z-o'>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false, amount:0.25}} className={'${styles.innerWidth} mx-auto ${styles.flexCenter} grid'}>
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <motion.p variants={fadeIn('up','tween', 0.2,1)} className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
          <span className='font-extrabold text-white'>Metaverse</span> Imagine a shared virtual universe where <span className='font-extrabold text-white'>the digital and physical fuse together </span> to create unprecedented opportunities that <span className='font-extrabold text-white'>redefine the very way we live</span>, work, play and socialize.
        </motion.p>
        <motion.img variants={fadeIn(`up`, `tween`, 0.3,1)} src='/arrow-down.svg' alt='arrow down' className='w-[18px] h-[28px] object-contain mt-[28px] mx-auto ${styles.flexCenter} grid'/>

      </motion.div>

    </div>
  
  </section>
);

export default About;
