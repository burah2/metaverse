'use client';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from '../constants';

const Footer = () => (
  <motion.footer variants={footerVariants} initial="hidden" whileInView="show" className={`${styles.paddings} py-8 relative`}>
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5"> {/* Add the closing angle bracket for the opening div tag */}
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the metaverse</h4>

        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">ENTER METAVERSE</span> {/* Close the span tag */}
        </button>
      </div> {/* Close the div tag for the flex container */}
      <div className="mb-[50px] h-2px bd-white opacity-10"></div> {/* Add the closing angle bracket and fix typo in className */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="font-extrabold text-[24px] text-white">METAVERSUS</h4>
        <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
        <div className="flex gap-4">
          {/* Fix the map function and provide a unique key for each social element */}
          {socials.map((social) => (
            <img key={social.name} src={social.url} alt={social.name} className="w-[24px] h-[24px] object-contain cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
    {/* Close the footer tag */}
  </motion.footer>
);

export default Footer;
