import React from "react";

export default function Card({ card }) {
  return (
  <li key={card} >
    {`${card[0]} of ${card[1]}`}
  </li>)
}
