import React from 'react'
import Mee from "../../assets/images/animoji.PNG";
import * as FaIcons from "react-icons/fa";
import { ExternalLink } from 'react-external-link';

//Framer Motion
import { motion } from 'framer-motion/dist/framer-motion';

const Home = () => {
  return (
    <motion.div 
    className="home"
    initial={{width: 0}}
    animate={{width: "100%"}}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <section className="hero">
        <main>
          <p className="animate__animated animate__fadeInDown animate__delay-1s">Hi, I'm Olawale</p>
          <p className="animate__animated animate__fadeInDown role animate__delay-2s">Frontend Developer. Budding FullStack Developer</p>
          <p className="animate__animated animate__fadeInDown animate__delay-3s">Based In Lagos State, Nigeria.Focused on creating web applications that strike a balance between functional and aesthetic designs. Sometimes a music junkie and also a car enthusiast.</p>
        </main>
        <aside>
          <img src={Mee} alt="Iwaloye Olawale Samuel" />
        </aside>
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

export default Home;
