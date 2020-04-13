import {
  FETCH_MODEL,
  RECEIVE_MODEL,
  RECEIVE_MODEL_FAILED
} from '../actions/actionTypes'

const initialState = {
  model: {},
}

const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MODEL:
      return {
        ...state
      }
    case RECEIVE_MODEL:
      return {
        ...state,
        model: action.payload
      }
    case RECEIVE_MODEL_FAILED:
      return {
        ...state
      }
    default:
      return state
  }
}

export default modelReducer