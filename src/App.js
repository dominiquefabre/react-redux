import React from 'react'

import Title from './Title'
import Content from './Content'

const App = () => React.createElement(
  'div',
  {},
  [
    React.createElement(Title, { id: 'app-title', level: 'h2', content: 'My nice App', visible: true }),
    React.createElement(Content, {}, 'Vivamus suscipit tortor eget felis porttitor volutpat.')
  ]
)

export default App