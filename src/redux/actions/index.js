import {
  FETCH_MAKE,
  FETCH_MODEL,
  FETCH_VERSION
} from '../actions/actionTypes'

export const makeReducer = () => ({
  type: FETCH_MAKE
})

export const modelReducer = makeId => ({
  type: FETCH_MODEL,
  makeId
})

export const versionReducer = modelId => ({
  type: FETCH_VERSION,
  modelId
})