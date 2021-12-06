import React from 'react'
import Navbar from '../navbar';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import Mee from "../../assets/images/Mee.png";

const About = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <main>
          <h1>I build solution to problems</h1>
          <p>I'm Olawale Iwaloye, but you can call me Olawalecodes</p>
          <p>I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.</p>
          <div className="stack">
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
        <Link><FaIcons.FaFacebook /></Link>
        <Link><FaIcons.FaTwitter /></Link>
        <Link><FaIcons.FaLinkedin /></Link>
        <Link><FaIcons.FaGithub /></Link>
      </div>
    </div>
  )
}

export default About;
