import { handleActions } from 'redux-actions'

const initialState = () => {
  return emptyState()
}

const emptyState = () => {
  return {
    selected: null
  }
}

const pokemon = handleActions({
  POKEMON_SELECTED: (state, action) => ({
    ...state, selected: action.payload.selected
  }),

  RESET_SELECTED: (state, action) => {
    return emptyState()
  }
}, initialState())

export default pokemon
