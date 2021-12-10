import React from 'react'
import { Link } from 'react-router-dom';
import * as FiIcons from "react-icons/fi";
import * as AiIcons from 'react-icons/ai';

const Card = props => {
  const { project } = props;

  const { id, title, description, stack, github_url, app_url } = project;
  return (
    <div className="card" key={id}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        <p className="description">{description}</p>
        <ul className="stack">
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="cta-buttons">
          <Link className="github-link" to={{ pathname: github_url }} target="_blank"><AiIcons.AiOutlineGithub /></Link>
          <Link className="app-link" to={{ pathname: app_url }} target="_blank"><FiIcons.FiLink /></Link>
        </div>
      </div>
    </div >
  )
}

export default Card
