import ReactDOM from 'react-dom/client'
import React from 'react'

import Form from './Form'
import { Provider } from 'react-redux'
import store from './redux/store'
import formDefinition from './formDefinition'

const root = ReactDOM.createRoot(document.getElementById('app-root'))

root.render(
  <Provider store={store}>
    <Form formDefinition={formDefinition}/>
  </Provider>
)