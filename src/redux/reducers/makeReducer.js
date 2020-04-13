import {
  FETCH_MAKE,
  RECEIVE_MAKE,
  RECEIVE_MAKE_FAILED
} from '../actions/actionTypes'

const initialState = {
  make: {},
}

const makeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MAKE:
      return {
        ...state
      }
    case RECEIVE_MAKE:
      return {
        ...state,
        make: action.payload
      }
    case RECEIVE_MAKE_FAILED:
      return {
        ...state
      }
    default:
      return state
  }
}

export default makeReducer