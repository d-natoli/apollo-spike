import { handleActions } from 'redux-actions'

const initialState = () => {
  return emptyState()
}

const emptyState = () => {
  return {
    nextPage: false
  }
}

const navigation = handleActions({
  NEXT_PAGE: (state, action) => ({
    ...state, nextPage: true
  }),

  RESET_NAVIGATION: (state, action) => {
    return emptyState()
  }
}, initialState())

export default navigation
