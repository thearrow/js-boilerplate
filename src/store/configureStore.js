import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import allReducers from '../reducers/index'

export default function configureStore () {
  return createStore(
     allReducers,
     compose(
       applyMiddleware(thunk),
       window.devToolsExtension ? window.devToolsExtension() : f => f
     )
   )
}
