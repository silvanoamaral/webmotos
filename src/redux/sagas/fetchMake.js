import {call, put, takeEvery } from 'redux-saga/effects'
import { getMakeAPI } from '../../services/make'
import { RECEIVE_MAKE, RECEIVE_MAKE_FAILED } from '../actions/actionTypes'

function* fetchMake(action) {
  try {
    const make = yield call(getMakeAPI)
    yield put({ type: RECEIVE_MAKE, payload: make })
  } catch(e) {
    yield put({ type: RECEIVE_MAKE_FAILED, payload: [] })
  }
}

export function* watchfetchMake(){
  yield takeEvery('FETCH_MAKE', fetchMake)
}