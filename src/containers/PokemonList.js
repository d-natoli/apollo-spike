import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import './App.css'
import { pokemonSelected } from '../actions/pokemonActions'
import { nextPage, resetNavigation } from '../actions/navigationActions'

class PokemonList extends Component {
  constructor(props) {
    super(props)
    this.renderPokemon = this.renderPokemon.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pokemon.selected) {
      nextProps.dispatch(nextPage())
    }

    if (nextProps.navigation.nextPage) {
      browserHistory.push('/pokemon/show')
    }
  }

  componentWillUnmount() {
    this.props.dispatch(resetNavigation())
  }

  renderPokemon() {
    if (this.props.data.Trainer) {
      return (this.props.data.Trainer.ownedPokemons.map((pokemon) =>
        <Link onClick={this.selectPokemon.bind(this, pokemon.id)} key={pokemon.id}>
          <img src={pokemon.url} alt={pokemon.name} />
          <div>{pokemon.name}</div>
        </Link>
      ))
    } else {
      return <p>No Pokemon</p>
    }
  }

  selectPokemon(id) {
    this.props.dispatch(pokemonSelected({ selected: id}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pokemon List</h2>
        </div>
        <p className="App-intro">
          Choose a Pokemon below.
        </p>
        {this.renderPokemon()}
      </div>
    )
  }
}

const TrainerQuery = gql`
  query TrainerQuery {
    Trainer(name: "Dane Natoli") {
      name
      ownedPokemons {
        id
        name
        url
      }
    }
  }
`

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
    pokemon: state.pokemon
  }
}

const PokemonListWithData = graphql(TrainerQuery)(PokemonList)
export default connect(mapStateToProps)(PokemonListWithData)
