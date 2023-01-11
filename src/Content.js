import React from 'react'

const Content = ({ children, handleHover }) => {

  const handleClick = e => {
    e.preventDefault()
    alert('clicked !')
  }

  return (
    <div
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover(false)}
    >
      <p>{ children }</p>
      <button 
        onClick={handleClick}
      >
        Click
      </button>
    </div>
  )
}

export default Content