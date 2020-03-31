import React from 'react';

import './StarScore.css';

const StarScore = ({score}) => {

  const fillStars = Array.from({ length: score }, (_, i) => <li key={i} className="star-fill"><i className="fas fa-star"></i></li>);
  const emptyStars = Array.from({ length: 5 - score }, (_, i) => <li key={ score + i} className="star-empty"><i className="fas fa-star"></i></li>);
  const stars = fillStars.concat(emptyStars);

  return (
    <ul className="item-rating">
      {stars}
      <li><span>{score}<span> / 5</span></span> </li>
    </ul>
  )
}

export default StarScore
