import React from 'react'
import Navbar from '../navbar';
import Mee from "../../assets/images/Mee.png";
import * as FaIcons from "react-icons/fa";
import { ExternalLink } from 'react-external-link';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <main>
          <p className="animate__animated animate__fadeInDown">Hi, I'm Olawale</p>
          <p className="animate__animated animate__fadeInDown role">Frontend Developer. Aspiring FullStack Developer</p>
          <p className="animate__animated animate__fadeInDown">Based In Lagos State, Nigeria.Focused on creating webpages that strike a balance between functional and aesthetic designs. Sometimes a music junkie and also a car enthusiast.</p>
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
    </div>
  )
}

export default Home;
