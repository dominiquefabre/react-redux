import ReactDOM from 'react-dom/client'
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById('app-root'))

root.render(React.createElement(
  'div',
  {id: 'app'},
  'My nice App'
))