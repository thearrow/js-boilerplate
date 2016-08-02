import './App.scss'
import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { action } from '../../actions/actions'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.example = true
  }

  componentDidMount () {
    console.log('Initialize App Here!')
  }

  handleClick = () => {
    this.props.dispatch(action())
  }

  render () {
    return (
      <div
        className='root'
        onClick={this.handleClick}>
        <Helmet
          title='App Title Here'
          meta={[
            { 'charset': 'utf-8' },
            { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1' },
          ]}/>
        <p>Hello App</p>
      </div>
    )
  }
}

export default connect(state => state)(App)
