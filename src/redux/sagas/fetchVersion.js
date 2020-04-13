import {call, put, takeEvery } from 'redux-saga/effects'
import { getVersionAPI } from '../../services/version'
import { RECEIVE_VERSION, RECEIVE_VERSION_FAILED } from '../actions/actionTypes'

function* fetchVersion(action) {
  try {
    if(action.modelId) {
      const version = yield call(getVersionAPI, action.modelId)
      yield put({ type: RECEIVE_VERSION, payload: version })
    }
  } catch(e) {
    yield put({ type: RECEIVE_VERSION_FAILED, payload: e })
  }
}

export function* watchfetchVersion(){
  yield takeEvery('FETCH_VERSION', fetchVersion)
}