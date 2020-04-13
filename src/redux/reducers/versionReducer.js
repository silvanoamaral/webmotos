import {
  FETCH_VERSION,
  RECEIVE_VERSION,
  RECEIVE_VERSION_FAILED
} from '../actions/actionTypes'

const initialState = {
  version: {},
}

const versionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VERSION:
      return {
        ...state
      }
    case RECEIVE_VERSION:
      return {
        ...state,
        version: action.payload
      }
    case RECEIVE_VERSION_FAILED:
      return {
        ...state
      }
    default:
      return state
  }
}

export default versionReducer