import React from 'react'

import Title from './Title'
import Content from './Content'

const App = () => React.createElement(
  'div',
  {},
  [
    React.createElement(Title, { id: 'app-title' }, 'My nice App'),
    React.createElement(Content, {}, 'Vivamus suscipit tortor eget felis porttitor volutpat.')
  ]
)

export default App