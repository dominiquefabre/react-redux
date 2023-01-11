import React, { useState } from 'react'

import Title from './Title'
import Content from './Content'


const App = () => {

  const [ bg, setBg ] = useState(undefined)

  const handleHover = (hover = true) => {
    hover ? setBg('red') : setBg()
  }

  return (
    <div style={{ backgroundColor: bg || 'transparent' }}>
      <Title id="app-title" level="h2" content="My nice App" visible={true}/>
      <Content handleHover={handleHover}>Vivamus suscipit tortor eget felis porttitor volutpat.</Content>
    </div>
  )
}

export default App