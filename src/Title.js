import React from 'react'

const Title = ({ id, level: Level, content, visible = false }) => visible && (
  <Level id={id}>
    { content }
  </Level>
)

export default Title