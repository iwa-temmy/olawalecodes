import React from 'react'
import Navbar from '../navbar';
import Cards from './cards/Cards';
import * as FaIcons from "react-icons/fa";
import { ExternalLink } from 'react-external-link';

const Works = () => {
  return (
    <div>
      <Navbar />
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
    </div>
  )
}

export default Works;
