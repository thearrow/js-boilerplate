import '../../scss/root.scss'
import React from 'react'
import { connect } from 'react-redux'
import { action } from '../actions/actions'

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.example = true
  }

  componentDidMount () {
    console.log('Initialize App Here!')
  }

  render () {
    let {
      dispatch,
    } = this.props

    return (
      <div
        className='root'
        onClick={name => dispatch(action())}>
        <p>Hello App</p>
      </div>
    )
  }
}

export default connect(state => state)(Root)
