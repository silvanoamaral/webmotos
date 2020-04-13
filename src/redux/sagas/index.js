import { fork, all } from 'redux-saga/effects'

import { watchfetchMake } from './fetchMake'
import { watchfetchModel } from './fetchModel'
import { watchfetchVersion } from './fetchVersion'

export default function* root() {
  yield all([
    fork(watchfetchMake),
    fork(watchfetchModel),
    fork(watchfetchVersion),
  ])
}