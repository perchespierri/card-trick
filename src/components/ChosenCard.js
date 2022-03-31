import React from 'react'
import Card from './Card';

const ChosenCard = ({ card }) => {
  return (
    <div className='Stack' >
      <h1> Is this your card? </h1>
      <div className={ `Card Card--${ card.suit }` }>
        <Card card={ card } />
      </div>
    </div>
  )
}
export default ChosenCard
