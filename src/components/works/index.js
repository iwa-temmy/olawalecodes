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
        <Link><FaIcons.FaFacebook /></Link>
        <Link><FaIcons.FaTwitter /></Link>
        <Link><FaIcons.FaLinkedin /></Link>
        <Link><FaIcons.FaGithub /></Link>
      </div>
    </div>
  )
}

export default Works;
