import { fork } from 'redux-saga/effects'
// modules
import { saga as order } from './order'


export default function* rootSaga() {
  yield fork(order)
}
