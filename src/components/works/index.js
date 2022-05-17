import React from 'react'
import Cards from './cards/Cards';
import * as FaIcons from "react-icons/fa";
import { ExternalLink } from 'react-external-link';

//Framer Motion
import { motion } from 'framer-motion/dist/framer-motion';

const Works = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 }  }}
    >
      <h1 className="text-center">My Works</h1>
      <p className="text-center">Here are some of the projects I have worked on </p>
      <section>
        <Cards />
      </section>
      <div className="social-links">
        <ExternalLink href="https://www.facebook.com/iwaloye.olawale"><FaIcons.FaFacebook /></ExternalLink>
        <ExternalLink href="https://twitter.com/OlawaleCodes?t=tSmL2otamYoEBNihr7e_vw&s=09"><FaIcons.FaTwitter /></ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/olawale-iwaloye-26b80314b/"><FaIcons.FaLinkedin /></ExternalLink>
        <ExternalLink href="https://github.com/iwa-temmy"><FaIcons.FaGithub /></ExternalLink>
      </div>
    </motion.div>
  )
}

export default Works;
