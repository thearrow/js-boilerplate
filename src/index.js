import './styles/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/App/App'

const store = configureStore()
let container = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>, container
)
