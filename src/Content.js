import React from 'react'

// const Content = ({ children }) => (
//   <>
//     <p>{ children }</p>
//     <button 
//       onClick={e => {
//         e.preventDefault()
//         alert('clicked !')
//       }}
//     >
//       Click
//     </button>
//   </>
// )

const Content = ({ children }) => {

  const handleClick = e => {
    e.preventDefault()
    alert('clicked !')
  }

  return (
    <>
      <p>{ children }</p>
      <button 
        onClick={handleClick}
      >
        Click
      </button>
    </>
  )
}

export default Content