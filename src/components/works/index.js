import React from 'react'
import Navbar from '../navbar';
import Cards from './cards/Cards';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';

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
        <Link to={{ pathname: "https://www.facebook.com/iwaloye.olawale" }}><FaIcons.FaFacebook /></Link>
        <Link to={{ pathname: "https://twitter.com/OlawaleCodes?t=tSmL2otamYoEBNihr7e_vw&s=09" }}><FaIcons.FaTwitter /></Link>
        <Link to={{ pathname: "https://www.linkedin.com/in/olawale-iwaloye-26b80314b/" }}><FaIcons.FaLinkedin /></Link>
        <Link to={{ pathname: "https://github.com/iwa-temmy" }}><FaIcons.FaGithub /></Link>
      </div>
    </div>
  )
}

export default Works;
