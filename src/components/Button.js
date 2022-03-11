import React from 'react'

export default function Button({ value, onClick, children }) {
  return (
    <button
      className='btn'
      type='button'
      onClick={ () => onClick(value) }
    >
      { children }
    </button>
  )
}
