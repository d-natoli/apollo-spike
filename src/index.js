import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import './index.css'

import configureStore from './store'

import Intro from './containers/Intro'
import PokemonList from './containers/PokemonList'
import Pokemon from './containers/Pokemon'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj50bkw45iy2h0196aitxhp95'}),
})

const store = configureStore({}, client.reducer())

ReactDOM.render((
  <ApolloProvider store={store} client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={Intro}/>
      <Route path='/pokemon' component={PokemonList}/>
      <Route path='/pokemon/show' component={Pokemon}/>
    </Router>
  </ApolloProvider>
  ), document.getElementById('root')
)
