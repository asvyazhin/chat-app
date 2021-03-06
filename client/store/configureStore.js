import { createStore, applyMiddleware } from 'redux'
// import promiseMiddleware from '../middleware/promiseMiddleware';
// import DevTools from '../containers/DevTools';

import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

// const finalCreateStore = compose(
//   applyMiddleware(thunk, promiseMiddleware),
//   DevTools.instrument()
// )(createStore);

// let store = createStore(todoApp)

export default function configureStore(initialState) {
  //   const store = finalCreateStore(rootReducer, initialState);

  //   if (module.hot) {
  //     // Enable Webpack hot module replacement for reducers
  //     module.hot.accept('../reducers', () => {
  //       const nextRootReducer = require('../reducers');
  //       store.replaceReducer(nextRootReducer);
  //     });
  //   }

  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
  )
}
