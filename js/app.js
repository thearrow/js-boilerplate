import '../scss/app.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Root from './components/root'

const store = configureStore()
let container = document.getElementById('app')

render(
  <Provider store={store}>
    <Root />
  </Provider>, container
)
