import React from 'react'

const Title = ({ id, level, content, visible = false }) => visible ? React.createElement(
  level,
  { id },
  content
) : null

export default Title