import React from 'react';
import '../styles/Card.css';

export default function Card({ card: {value, suit} }) { 
  return (
    <div role="img" aria-label={`Image of the ${value} of ${suit} card`} >
      {value}
      <div className={`Card__suit--image Card__suit--${suit}`} />
    </div>
  )
}
