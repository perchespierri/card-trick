import React from 'react';
import Card from './Card';

export default function Stack({ stackProp }) {
  return (
    <ul className='Stack'>
      {stackProp.map(card => (
        <Card 
          key={`${card.value} of ${card.suit}`}
          cardProp={ card }
        />
      ))}
    </ul>
  )
}
