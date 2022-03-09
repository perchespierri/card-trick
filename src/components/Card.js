import React from 'react';

export default function Card({ card: {value, suit} }) { 
  return (
      <li
        key={`${suit} ${value}`}
        className={`Card Card--${suit}`}
      >
        {`${value}`}
        <div className={`Card__suit--image Card__suit--${suit}`} />
      </li>
  )
}
