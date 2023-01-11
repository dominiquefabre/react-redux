import React from 'react'

import Title from './Title'
import Content from './Content'


const App = () => (
  <div>
    <Title id="app-title" level="h2" content="My nice App" visible={true}/>
    <Content>Vivamus suscipit tortor eget felis porttitor volutpat.</Content>
  </div>
)

export default App