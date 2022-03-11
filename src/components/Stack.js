import React from 'react';
import Card from './Card';

export default function Stack({ stack }) {
  return (
    <ul className='Stack'>
      {stack.map(card => (
        <li
        key={`${card.suit} ${card.value}`}
        className={`Card Card--${card.suit}`}
        >          
          <Card card={ card } />
        </li>
      ))}
    </ul>
  )
}
