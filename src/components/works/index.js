import React from 'react'
import Navbar from '../navbar';
import Cards from './cards/Cards';

const Works = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">My Works</h1>
      <p className="text-center">Here are some of the projects I have worked on </p>
      <section>
        <Cards />
      </section>
    </div>
  )
}

export default Works;
