import { combineReducers } from 'redux'
import auth from './auth'
import viewport from './viewport'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  auth,
  viewport,
  form: formReducer
})

export default rootReducer
