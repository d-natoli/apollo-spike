import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import './App.css'
import { resetSelected } from '../actions/pokemonActions'
import { nextPage, resetNavigation } from '../actions/navigationActions'

class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.pokemon.selected) {
      nextProps.dispatch(nextPage())
    }

    if (nextProps.navigation.nextPage) {
      browserHistory.push('/pokemon')
    }
  }

  componentWillUnmount() {
    this.props.dispatch(resetNavigation())
  }

  goBack() {
    this.props.dispatch(resetSelected())
  }

  render() {
    console.log(this.props)
    if (this.props.data.Pokemon) {
      return (
        <div className="App">
          <div className="App-header">
            <h2>{this.props.data.Pokemon.name}</h2>
          </div>
          <p className="App-intro">
            <img src={this.props.data.Pokemon.url} alt={this.props.data.Pokemon.name} />
          </p>
          <p>{this.props.data.Pokemon.url}</p>
          <div>
            <Link onClick={this.goBack}>Back</Link>
          </div>
        </div>
      )
    } else {
      return <p>Missing pokemon</p>
    }
  }
}

const PokemonQuery = gql`
  query PokemonQuery($id: ID!) {
    Pokemon(id: $id) {
      id
      url
      name
    }
  }
`

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
    pokemon: state.pokemon
  }
}

const PokemonWithData = graphql(PokemonQuery, {
  options: (ownProps) => {
    return {
      variables: {
        id: ownProps.pokemon.selected
      }
    }
  }
})(Pokemon)

export default connect(mapStateToProps)(PokemonWithData)
