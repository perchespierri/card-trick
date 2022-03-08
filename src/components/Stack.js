import React from "react";
import Card from './Card';

export default function Stack({ stackProp }) {
  return (
    <div className="deck">
      <ul>
        {stackProp.map(card => (
          <Card 
            key={`${card.CardSuit} ${card.CardValue}`}
            cardProp={ card }
          />
        ))}
      </ul>
    </div>
  )
}
