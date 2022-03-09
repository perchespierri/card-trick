import React from 'react';

export default function Card({ cardProp: {value, suit} }) { 
  return (
      <li
        key={`${suit} ${value}`}
        className={`Card Card--${suit}`}
      >
        {`${value}`}
        <div className={`Card__div Card__div--${suit}`} />
      </li>
  )
}
