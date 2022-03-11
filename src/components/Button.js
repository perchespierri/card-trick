import React from 'react'

export default function Button({ value, buttonText, onClick }) {
  return (
    <button
      className='btn'
      type='button'
      onClick={ () => onClick(value) }
    >
      { buttonText }
    </button>
  )
}
