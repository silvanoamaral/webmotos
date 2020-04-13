import { combineReducers } from 'redux'

import makeReducer from './makeReducer'
import modelReducer from './modelReducer'
import versionReducer from './versionReducer'

const rootReducer = combineReducers({
  makeReducer,
  modelReducer,
  versionReducer
})

export default rootReducer