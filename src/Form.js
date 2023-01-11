import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { submit } from './redux/actions'
import FormElement from './FormElement'


const Form = ({ formDefinition }) => {

  const isLoading = useSelector(state => state.form.isLoading)
  const success = useSelector(state => state.form.success)
  const fullfilled = useSelector(state => state.form.fullfilled)

  const dispatch = useDispatch()
  
  if (isLoading) {

    return 'LOADING...'
  }

  if (success) {

    return <div>Thank You !</div>
  }

  return (
    <form>
      {
        formDefinition.map(
          props => (<FormElement {...props} key={props.name} />)
        )
      }  
      <button 
        onClick={
          event => {
            event.preventDefault()
            dispatch(submit())
          }
        } 
        disabled={!fullfilled}
      >
        Send
      </button>
    </form>
  )
}

export default Form