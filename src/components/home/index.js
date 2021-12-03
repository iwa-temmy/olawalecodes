import React from 'react'
import Navbar from '../navbar';
import Mee from "../../assets/images/Mee.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <main>
          <p>Hi, I'm Olawale</p>
          <h1>Frontend Developer based In Lagos, Nigeria</h1>
          <p>Focused in creating webpages that strike a balance between functional and aesthetic designs.
            I love building websites, applications provide pixel-perfect, High quality performant experiences and solve problems.I’m always interested in hearing about new projects and opportunities.
          </p>
        </main>
        <aside>
          <img src={Mee} alt="Iwaloye Olawale Samuel" />
        </aside>
      </section>
    </div>
  )
}

export default Home;
