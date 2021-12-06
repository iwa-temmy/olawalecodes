import React from 'react'
import Navbar from '../navbar';
import Mee from "../../assets/images/Mee.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <main>
          <p className="animate__animated animate__fadeInDown">Hi, I'm Olawale</p>
          <h1 className="animate__animated animate__fadeInDown">Frontend Developer.Aspiring FullStack Developer</h1>
          <p className="animate__animated animate__fadeInDown">Based In Oyo State, Nigeria.Focused on creating webpages that strike a balance between functional and aesthetic designs. Sometimes a music junkie and also a car enthusiast.</p>
        </main>
        <aside>
          <img src={Mee} alt="Iwaloye Olawale Samuel" />
        </aside>
      </section>
    </div>
  )
}

export default Home;
