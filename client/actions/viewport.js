import * as types from '../constants/ActionTypes'
// import { browserHistory } from 'react-router';
// import fetch from 'isomorphic-fetch';
// import cookie from 'react-cookie';

// export function receiveAuth() {
//   const user = cookie.load('username');
//   return {
//     type: types.AUTH_LOAD_SUCCESS,
//     user
//   }
// }

// export function checkAuth() {
//   if (cookie.load('username')) {
//     return true;
//   }
//   return false;
// }

// export const initEnvironment = () => ({ type: types.AUTH_SIGNIN })

const MOBILE_VIEWPORT = 'mobile'
const DESKTOP_VIEWPORT = 'desktop'
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const getSupposedViewport = () => {
  const isMobileViewport = isMobileDevice || (document.documentElement.clientWidth < 600)

  return isMobileViewport ? MOBILE_VIEWPORT : DESKTOP_VIEWPORT
}

const updateViewport = ({ userViewport, supposedViewport, changeDialogAllowed }) => {
  let allowedChangeDialog = false

  if (userViewport === supposedViewport && !changeDialogAllowed) {
    allowedChangeDialog = true
  }

  if (allowedChangeDialog) {
    return {
      type: types.UPDATE_VIEWPORT,
      supposedViewport: getSupposedViewport(),
      changeDialogAllowed: true,
    }
  }

  return {
    type: types.UPDATE_VIEWPORT,
    supposedViewport: getSupposedViewport(),
    changeDialogAllowed,
  }
}

export function initViewport() {
  return (dispatch, getState) => {
    // const changeDialogAllowed = getState().viewport.changeDialogAllowed

    dispatch(updateViewport(getState().viewport))

    window.onresize = () => dispatch(updateViewport(getState().viewport))
  }
}

export function disallowViewportChange() {
  return {
    type: types.DISALLOW_VIEWPORT_CHANGE,
    changeDialogAllowed: false,
  }
}

export function setViewport() {
  return {
    type: types.SET_USER_VIEWPORT,
    userViewport: getSupposedViewport(),
  }
}

// export const authSignOut = () => ({ type: types.AUTH_SIGNOUT })

// export function receiveSignIn(username) {
//   const user = {
//     name: username,
//     id: Symbol(username)
//   }
//   return {
//     type: types.AUTH_SIGNIN_SUCCESS,
//     user
//   }
// }

// export function signIn(user) {
//   // return dispatch => {
//     dispatch(requestSignIn());
//     setTimeout(dispatch(receiveSignIn(user.username)), 2000);
//     //  return fetch('/api/sign_in', {
//     //   method: 'post',
//     //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'
//     //   },
//     //   body: JSON.stringify(user)
//     //   })
//     //   .then(response => {
//     //     if(response.ok) {
//     //       cookie.save('username', user.username)
//     //       dispatch(receiveSignIn(user.username));
//     //       browserHistory.push('/im');
//     //     }
//     //   })
//     //   .catch(error => {throw error});
//   // };
// }

// function requestSignOut() {
//   return {
//     type: types.AUTH_SIGNOUT
//   }
// }

// function receiveSignOut() {
//   return {
//     type: types.AUTH_SIGNOUT_SUCCESS
//   }
// }

// export function signOut() {
//   return dispatch => {
//     dispatch(requestSignOut())
//     return fetch('/api/signout')
//       .then(response => {
//         if(response.ok) {
//           cookie.remove('username')
//           dispatch(receiveSignOut())
//           browserHistory.push('/')
//         }
//       })
//       .catch(error => {throw error});
//   }
// }
