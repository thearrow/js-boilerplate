import { ACTION } from '../actions/actions'

export function exampleState (state = {}, action) {
  switch (action.type) {
  case ACTION:
    return action.exampleParam
  default:
    return state
  }
}
