import React from 'react'
import Navbar from '../navbar';
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
        </main>
        <aside>
          <img src={Mee} alt="Iwaloye Olawale Samuel" />
        </aside>
      </section>
    </div>
  )
}

export default About;
