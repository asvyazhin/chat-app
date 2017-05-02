import { AUTH_SIGNIN, AUTH_SIGNOUT } from '../constants/ActionTypes'

const initialState = {
  singedIn: false,
  username: null,
  id: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGNIN:
      return {
        ...state,
        singedIn: true
      }
    case AUTH_SIGNOUT:
      return {
        ...state,
        singedIn: false
      }
    default:
      return state
  }
}
