import React from "react";

export default function Card({ card }) { 
  return (
    <div className="card">
      <li key={card} >
        <div className={`card-value ${card[1]}`}> {`${card[0]}`} </div>
        <div className={`suit ${card[1]}`} />
      </li>
    </div>
  )
}
