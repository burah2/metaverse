'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, TitleText, ExploreCard } from '../components';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState(2); // Initialize with the desired default value

  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title="|The World" textStyles="text-center" />
        <TitleText title={<><br className="md:block hidden" />Choose the world you want <br className="md:block hidden" /> to explore</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"> {/* Corrected 'gap-5' instead of 'gap-5' */}
          {exploreWorlds.map((world, index) => (
            <ExploreCard key={world.id} {...world} index={index} active={active} handleclick={() => setActive(index)} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;