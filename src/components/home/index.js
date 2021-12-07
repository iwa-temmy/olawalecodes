import React from 'react'
import Navbar from '../navbar';
import Mee from "../../assets/images/Mee.png";
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <main>
          <p className="animate__animated animate__fadeInDown">Hi, I'm Olawale</p>
          <p className="animate__animated animate__fadeInDown role">Frontend Developer. Aspiring FullStack Developer</p>
          <p className="animate__animated animate__fadeInDown">Based In Oyo State, Nigeria.Focused on creating webpages that strike a balance between functional and aesthetic designs. Sometimes a music junkie and also a car enthusiast.</p>
        </main>
        <aside>
          <img src={Mee} alt="Iwaloye Olawale Samuel" />
        </aside>
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

export default Home;
