import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import definition from '../formDefinition'

const initialState = {
  success: false,
  isLoading: false,
  fullfilled: false,
  data: {}
}

const form = (state = initialState, { type, payload }) => {

  switch (type) {
    case 'SET_DATA':
      
      const data = {
        ...state.data,
        [payload.name]: payload.value
      }

      const fullfilled = definition.reduce(
        (acc, element) => acc && data[element.name] && data[element.name] !== element.defaultValue,
        true
      ) 

      return {
        ...state,
        data,
        fullfilled
      }
      
    case 'SET_IS_LOADING':
    case 'SET_SUCCESS':

      return {
        ...state,
        ...payload
      }
    default:
      
    return state
  }
}

const reducer = combineReducers({
  form
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
