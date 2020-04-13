import {call, put, takeEvery } from 'redux-saga/effects'
import { getModelAPI } from '../../services/model'
import { RECEIVE_MODEL, RECEIVE_MODEL_FAILED, RECEIVE_VERSION } from '../actions/actionTypes'

function* fetchModel(action) {
  try {
    if(action.makeId) {
      const model = yield call(getModelAPI, action.makeId)
      yield put({ type: RECEIVE_MODEL, payload: model })
      yield put({ type: RECEIVE_VERSION, payload: {} })
    }
  } catch(e) {
    yield put({ type: RECEIVE_MODEL_FAILED, payload: [] })
    yield put({ type: RECEIVE_VERSION, payload: [] })
  }
}

export function* watchfetchModel(){
  yield takeEvery('FETCH_MODEL', fetchModel)
}