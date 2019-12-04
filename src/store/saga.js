import { fork } from 'redux-saga/effects'
// modules
import { orderSaga } from './modules/order/orderSaga'


export default function* rootSaga() {
  yield fork(orderSaga)
}
