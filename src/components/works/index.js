import React from 'react'
import Navbar from '../navbar';

const Works = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">My Works</h1>
      <p className="text-center">Here are some of the projects I have worked on </p>
      <section>
        <div className="cards">
          <div className="card">
            <h2>Project Name</h2>
            <p>Project Description</p>
            <div className="stack">
              <p>Html</p>
              <p>Css</p>
              <p>Javascript</p>
            </div>
          </div>
          <div className="card">
            <h2>Project Name</h2>
            <p>Project Description</p>
            <div className="stack">
              <p>Html</p>
              <p>Css</p>
              <p>Javascript</p>
            </div>
          </div>
          <div className="card">
            <h2>Project Name</h2>
            <p>Project Description</p>
            <div className="stack">
              <p>Html</p>
              <p>Css</p>
              <p>Javascript</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Works;
