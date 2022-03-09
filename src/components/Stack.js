import React from 'react';
import Card from './Card';

export default function Stack({ stack }) {
  return (
    <ul className='Stack'>
      {stack.map(card => (
        <Card 
          key={`${card.value} of ${card.suit}`}
          card={ card }
        />
      ))}
    </ul>
  )
}
