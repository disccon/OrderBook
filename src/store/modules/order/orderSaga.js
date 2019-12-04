import {
  put, call, all, takeLatest, select, take, fork,
} from 'redux-saga/effects'
// types
import {
  FETCH_ORDER,
  FETCH_ORDER__SUCCESS,
  FETCH_ORDER__NOT_CHANGED,
  FETCH_ORDER__FAILURE,

  CHANGE_ORDER_BINANCE,
  CHANGE_ORDER_BINANCE__LOADING,
  CHANGE_ORDER_BINANCE__FAILURE,

  CLEAR_ORDER,
  CLEAR_ORDER__SUCCESS,
  CLEAR_ORDER__FAILURE,
} from './index'
// utils
import { initWebsocket } from '../../../utils/initWebsocket'
import { countBinanceMap } from '../../../utils/countBinanceMap'


// websocketChannel
let websocketChannel

// saga worker
export function* fetchOrderSaga(action) {
  try {
    let params; let
      paramsValue
    if (action.payload) {
      const { input, value } = action.payload
      params = input
      paramsValue = value
    }
    const depth = params === 'depth' ? Number(paramsValue) : yield select(state => state.orderReducer.depth)
    const group = params === 'group' ? paramsValue : yield select(state => state.orderReducer.group)
    const interval = params === 'interval' ? paramsValue : yield select(state => state.orderReducer.interval)
    const url = `wss://stream.binance.com:9443/ws/${group}@depth${depth}@${interval}`
    websocketChannel = yield call(initWebsocket, { url })
    while (true) {
      const websocket = yield take(websocketChannel)
      if (websocket.type === 'FETCH_ORDER__SUCCESS') {
        const { bids, asks } = websocket.data
        const bidsCount = countBinanceMap(bids)
        const asksCount = countBinanceMap(asks)
        yield put({
          type: FETCH_ORDER__SUCCESS,
          payload: {
            bids: bidsCount,
            asks: asksCount,
            depth,
            group,
            interval,
            isLoading: false,
          },
        })
      } else if (websocket.type === 'FETCH_ORDER__NOT_CHANGED') {
        yield put({
          type: FETCH_ORDER__NOT_CHANGED,
        })
      } else if (websocket.type === 'FETCH_ORDER__SUCCESS') {
        const { error } = websocket.data
        yield put({
          type: FETCH_ORDER__SUCCESS,
          payload: {
            error,
            isLoading: false,
          },
        })
      }
    }
  } catch (error) {
    yield put({
      type: FETCH_ORDER__FAILURE,
      isLoading: false,
      error,
    })
  }
}

export function* changeOrderBinanceSaga(action) {
  try {
    const websocket = yield take(websocketChannel)
    websocket.close()
    yield put({
      type: CHANGE_ORDER_BINANCE__LOADING,
      payload: {
        isLoading: true,
      },
    })
    yield fork(fetchOrderSaga, action)
  } catch (error) {
    yield put({
      type: CHANGE_ORDER_BINANCE__FAILURE,
      isLoading: false,
      error,
    })
  }
}

export function* clearOrderSaga() {
  try {
    const websocket = yield take(websocketChannel)
    websocket.close()
    yield put({
      type: CLEAR_ORDER__SUCCESS,
    })
  } catch (error) {
    yield put({
      type: CLEAR_ORDER__FAILURE,
      error,
    })
  }
}


// saga listener
export function* orderSaga() {
  yield all([
    takeLatest(FETCH_ORDER, fetchOrderSaga),
    takeLatest(CHANGE_ORDER_BINANCE, changeOrderBinanceSaga),
    takeLatest(CLEAR_ORDER, clearOrderSaga),
  ])
}
