import React from 'react';

import './RecipeMeta.css';

const RecipeMeta = ({cooktime, owner, likes}) => {
  return (
    <ul className="entry-meta">
      <li><a href="#"><i className="fas fa-clock"></i>{cooktime} Mins</a></li>
      <li><a href="#"><i className="fas fa-user"></i>by <span>{owner}</span></a></li>
      <li><a href="#"><i className="fas fa-heart"></i><span>{likes}</span> Likes</a></li>
    </ul>
  )
}

export default RecipeMeta
