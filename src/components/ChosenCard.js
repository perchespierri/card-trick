import React from 'react';
import '../styles/Card.css';

export default function Card({ card: {value, suit} }) { 
  return (
    <div className='ChosenCard'>  
      <h1>YOU CHOSE...</h1>
      <h1>{`${value} of ${suit}`}</h1>
    </div>  
  )
}
