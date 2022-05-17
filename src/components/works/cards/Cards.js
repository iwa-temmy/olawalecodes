import React from 'react'
import { projects } from '../../../database';
import Card from '../card/Card';

const Cards = () => {
  return (
    <div className="cards">
      {projects.sort((a,b) => b.id - a.id).map(project => (
        <Card project={project} key={project?.id}/>
      ))}
    </div>
  )
}

export default Cards;
