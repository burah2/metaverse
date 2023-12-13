'use client';
import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      {/* Fixing the typo in 'className' */}
      <motion.div
        variants={fadeIn('right,tween,0.2,1')}
        className="flex-[0.5 lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className='feedback-gradient' /> {/* Closing tag for 'div' */}
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            samantha
          </h4>
          <p className="mt-8px font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Founder | Metaversus
          </p>
          {/* Fixing the typo in 'classname' */}
          <p className="mt-24px font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            "With the development of today's technology, metaverse is very useful for today's work, or can use it as anything"
          </p>
          <motion.div variants={fadeIn('left,tween,0.2,1')} className="relative flex-1 flex justify-end items-center">
            {/* Fixing the typo in 'classname' and closing tag for 'img' */}
            <img
              src="/planet-09.png"
              alt="planet-09"
              className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
            />
          </motion.div>
          <motion.div variants={zoomIn(0.4, 1)} className="lg:block hidden absolute-left-[10%] top-[3%]">
            {/* Fixing the typo in 'classname', closing tag for 'img', and quotes around 'w-[155px]' */}
            <img src="/stamp.png" alt="stamp" className="w-[155px] h-[155px] object-contain" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;