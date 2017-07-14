import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import './App.css'
import { nextPage, resetNavigation } from '../actions/navigationActions'

class Intro extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.nextPage) {
      browserHistory.push('/pokemon')
    }
  }

  componentWillUnmount() {
    this.props.dispatch(resetNavigation())
  }

  handleClick() {
    this.props.dispatch(nextPage())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Apollo Spike!</h2>
        </div>
        <p className="App-intro">
          To get started, click the button.
        </p>
        <button type="button" onClick={this.handleClick}>Get started!</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(Intro)
