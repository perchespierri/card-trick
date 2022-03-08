import React from "react";

export default function Card({ cardProp: {CardValue, CardSuit} }) { 
  return (
    <div className="card">
      <li key={`${CardSuit} ${CardValue}`} >
        <div className={`card-value ${CardSuit}`}>
          {`${CardValue}`}
        </div>
        <div className={`suit ${CardSuit}`} />
      </li>
    </div>
  )
}
