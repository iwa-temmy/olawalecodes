import React from 'react'
import { Link } from 'react-router-dom';
import * as FiIcons from "react-icons/fi";
import * as AiIcons from 'react-icons/ai';

const Card = () => {
  return (
    <div className="card">
      <h3 className="card-title">Todo List App</h3>
      <div className="card-content">
        <p className="description">A simple todo list that helps to manage your daily tasks and retains data after reloading the page.</p>
        <ul className="stack">
          <li>Html</li>
          <li>Css</li>
          <li>Javascript</li>
        </ul>
        <div className="cta-buttons">
          <Link className="github-link" to={{ pathname: "https://github.com/iwa-temmy/todo-app" }}><AiIcons.AiOutlineGithub /></Link>
          <Link className="app-link" to={{ pathname: "https://devctodoapp.netlify.app/" }}><FiIcons.FiLink /></Link>
        </div>
      </div>
    </div>
  )
}

export default Card
