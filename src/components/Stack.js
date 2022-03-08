import React from "react";
import Card from './Card';

export default function Stack({stack}) {
  return (
    <div className="deck">
      <ul>
        {stack.map(card => (
          <Card 
            card={ card }
            key={`${card[1]} ${card[0]}`}
          />
        ))}
      </ul>
    </div>
  )
}
