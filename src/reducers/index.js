import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import navigation from './navigation'
import pokemon from './pokemon'

const loadReducers = (apolloReducer) => {
   return combineReducers({
     apollo: apolloReducer,
     navigation: navigation,
     pokemon: pokemon,
     routing: routerReducer,
  })
}

export default loadReducers
