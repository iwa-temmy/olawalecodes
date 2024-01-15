import React from "react";
import * as FaIcons from "react-icons/fa";
import { ExternalLink } from "react-external-link";
import Mee from "../../assets/images/animoji.PNG";
//Framer Motion
import { motion } from "framer-motion/dist/framer-motion";

const About = () => {
  return (
    <motion.div
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <section className="hero">
        <main>
          <p className="role animate__animated animate__fadeInDown animate__delay-1s">
            Front-end Engineer
          </p>
          <div className="animate__animated animate__fadeInDown animate__delay-2s">
            <p>I'm Olawale Iwaloye, but you can call me Olawalecodes</p>
            <p>
              I strive to create elegant solutions that surprise and delight
              users, while keeping complex technical dependencies in mind for
              implementation, scalability and developer sanity.
            </p>
          </div>
          <div className="stack animate__animated animate__fadeInDown animate__delay-3s">
            <h3>Skills</h3>
            <ul className="flex">
              <li className="item">HTML</li>
              <li className="item">CSS</li>
              <li className="item">Javascript</li>
              <li className="item">Bootstrap</li>
              <li className="item">Jquery</li>
              <li className="item">Sass</li>
            </ul>
            <h3>Libraries</h3>
            <ul className="flex">
              <li className="item">React</li>
              <li className="item">React - Redux</li>
              <li className="item">Antd</li>
              <li className="item">Tailwind CSS</li>
              <li className="item">Material UI</li>
            </ul>
            <h3>Tools & Systems</h3>
            <ul className="flex">
              <li className="item">Git</li>
              <li className="item">Npm</li>
              <li className="item">Vscode</li>
            </ul>
          </div>
        </main>
        <aside>
          <img src={Mee} alt="Iwaloye Olawale Samuel" />
        </aside>
      </section>
      <div className="social-links">
        <ExternalLink href="https://www.facebook.com/iwaloye.olawale">
          <FaIcons.FaFacebook />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/OlawaleCodes?t=tSmL2otamYoEBNihr7e_vw&s=09">
          <FaIcons.FaTwitter />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/olawale-iwaloye-26b80314b/">
          <FaIcons.FaLinkedin />
        </ExternalLink>
        <ExternalLink href="https://github.com/iwa-temmy">
          <FaIcons.FaGithub />
        </ExternalLink>
      </div>
    </motion.div>
  );
};

export default About;
