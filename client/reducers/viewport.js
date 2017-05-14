import * as types from '../constants/ActionTypes'

const MOBILE_VIEWPORT = 'mobile'
const DESKTOP_VIEWPORT = 'desktop'
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const getSupposedViewport = () => {
  const isMobileViewport = isMobileDevice || (document.documentElement.clientWidth < 600)

  return isMobileViewport ? MOBILE_VIEWPORT : DESKTOP_VIEWPORT
}

const initialState = {
  supposedViewport: getSupposedViewport(),
  userViewport: getSupposedViewport(),
  changeDialogAllowed: true,
}

export default function viewport(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_VIEWPORT:
      return {
        ...state,
        supposedViewport: action.supposedViewport,
        changeDialogAllowed: action.changeDialogAllowed,
      }
    case types.DISALLOW_VIEWPORT_CHANGE:
      return {
        ...state,
        changeDialogAllowed: action.changeDialogAllowed,
      }
    case types.SET_USER_VIEWPORT:
      return {
        ...state,
        userViewport: action.userViewport,
      }
    default:
      return state
  }
}
