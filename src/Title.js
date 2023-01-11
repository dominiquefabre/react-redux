import React from 'react'

const Title = ({ id, level: Tag, content, visible = false }) => visible && (
  <Tag id={id}>
    { content }
  </Tag>
)

export default Title