import { createAction } from 'redux-actions'

export const POKEMON_SELECTED = 'POKEMON_SELECTED'
export const RESET_SELECTED = 'RESET_SELECTED'

export const pokemonSelected = createAction(POKEMON_SELECTED, payload => payload)
export const resetSelected = createAction(RESET_SELECTED)

