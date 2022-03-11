import React from 'react'

export default function Button({ value, onClick }) {
  return (
    <button
      className='btn'
      type='button'
      onClick={ () => onClick(value) }
    >
      My card is in this stack
    </button>
  )
}
