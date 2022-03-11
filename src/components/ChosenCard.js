import React from 'react';
import '../styles/Card.css';

export default function Card({ card: {value, suit} }) { 
  return (
    <div className='Stack'>  
      <h1>YOU CHOSE...</h1>
      <div className={`Card Card--${suit}`}>
        {value}
        <div className={`Card__suit--image Card__suit--${suit}`} />
      </div>
      <br />
    </div>  
  )
}
