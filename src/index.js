import ReactDOM from 'react-dom/client'
import React from 'react'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('app-root'))

root.render(React.createElement(
  App,
  {id: 'app'},
  'My nice App'
))