import { createAction } from 'redux-actions'

export const NEXT_PAGE = 'NEXT_PAGE'
export const RESET_NAVIGATION = 'RESET_NAVIGATION'

export const nextPage = createAction(NEXT_PAGE)
export const resetNavigation = createAction(RESET_NAVIGATION)
