import React from 'react'
import Navbar from '../navbar';
import * as FiIcons from "react-icons/fi";
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">My Works</h1>
      <p className="text-center">Here are some of the projects I have worked on </p>
      <section>
        <div className="cards">
          <div className="card">
            <h3 className="card-title">Todo List App</h3>
            <div className="card-content">
              <p className="description">A simple todo list that helps to manage your daily tasks</p>
              <ul className="stack">
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
              </ul>
              <div className="cta-buttons">
                <Link to={{ pathname: "https://github.com/iwa-temmy/todo-app" }}><AiIcons.AiOutlineGithub /></Link>
                <Link to={{ pathname: "https://devctodoapp.netlify.app/" }}><FiIcons.FiLink /></Link>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title">Todo List App</h3>
            <div className="card-content">
              <p className="description">A simple todo list that helps to manage your daily tasks</p>
              <ul className="stack">
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title">Todo List App</h3>
            <div className="card-content">
              <p className="description">A simple todo list that helps to manage your daily tasks</p>
              <ul className="stack">
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Works;
