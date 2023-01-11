import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from './redux/actions'

const FormElement = ({ label, name, type, defaultValue }) => {

  const value = useSelector(state => state.form.data[name] || defaultValue)
  const dispatch = useDispatch()

  const handleChange = event => {
    dispatch(setData(name, event.target.value))
  }

  return (
    <label>
      { label }
      <input 
        type={type}
        name={name} 
        value={value} 
        onChange={handleChange}
      />
    </label>
  )
}

export default FormElement