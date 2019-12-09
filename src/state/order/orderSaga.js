import {
  put, call, all, takeLatest, select, take, cancelled, fork,
} from 'redux-saga/effects'
// types
import * as ActionTypes from './actions'
// utils
import { countBinanceMap } from '../../utils/countBinanceMap'
import { createWebSocketConnection } from '../../utils/createWebSocketConnection'
import { createSocketChannel } from '../../utils/createSocketChannel'

// websocketChannel
let socket
let socketChannel


// saga worker
export function* fetchOrderSaga(action) {
  try {
    const selects = yield select(state => state.orderReducer.selects)
    let { depth, currencies, interval } = selects
    if (action.payload) {
      const { input, value } = action.payload
      if (input === 'depth') depth = Number(value)
      else if (input === 'currencies') currencies = value
      else if (input === 'interval') interval = value
    }
    const url = `wss://stream.binance.com:9443/ws/${currencies}@depth${depth}@${interval}`
    socket = yield call(createWebSocketConnection, { url })
    socketChannel = yield call(createSocketChannel, socket)
    while (true) {
      const payload = yield take(socketChannel)
      const { bids, asks } = payload
      yield put({
        type: ActionTypes.FETCH_ORDER__SUCCESS,
        payload: {
          bids: countBinanceMap(bids),
          asks: countBinanceMap(asks),
          selects: {
            depth, currencies, interval,
          },
          isLoading: false,
        },
      })
    }
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_ORDER__FAILURE,
      isLoading: false,
      error,
    })
  } finally {
    if (yield cancelled()) {
      socketChannel.close()
      socket.close()
    }
  }
}

export function* changeOrderBinanceSaga(action) {
  try {
    socketChannel.close()
    socket.close()
    yield put({
      type: ActionTypes.CHANGE_ORDER_BINANCE__LOADING,
      payload: {
        isLoading: true,
      },
    })
    yield fork(fetchOrderSaga, action)
  } catch (error) {
    yield put({
      type: ActionTypes.CHANGE_ORDER_BINANCE__FAILURE,
      isLoading: false,
      error,
    })
  }
}

export function* clearOrderSaga() {
  try {
    socketChannel.close()
    socket.close()
    yield put({
      type: ActionTypes.CLEAR_ORDER__SUCCESS,
    })
  } catch (error) {
    yield put({
      type: ActionTypes.CLEAR_ORDER__FAILURE,
      error,
    })
  }
}


// saga listener
export function* orderSaga() {
  yield all([
    takeLatest(ActionTypes.FETCH_ORDER, fetchOrderSaga),
    takeLatest(ActionTypes.CHANGE_ORDER_BINANCE, changeOrderBinanceSaga),
    takeLatest(ActionTypes.CLEAR_ORDER, clearOrderSaga),
  ])
}
