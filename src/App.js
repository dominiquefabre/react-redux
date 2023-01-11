import React from 'react'

function App(props) {
  
  return React.createElement(
    'div',
    { id: props.id },
    props.children
  )
}

// const App = ({ className, id }) => React.createElement(
//   'div',
//   { id },
//   children
// )

export default App