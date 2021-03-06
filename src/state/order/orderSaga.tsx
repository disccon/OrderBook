import {
  put, call, all, takeLatest, select, take, cancelled, fork,
} from 'redux-saga/effects'
// types
import * as ActionTypes from './types'
// utils
import { parseData } from '../../utils/parseData'
import { createWebSocketConnection } from '../../utils/createWebSocketConnection'
import { createSocketChannel } from '../../utils/createSocketChannel'
// Interface
import { actionInterface } from '../../Interface/actionInterface'
import { fetchSnapshotAxios } from '../../utils/fetchSnapshotAxios'
import { updateArrAsc, updateArrDesc } from "../../utils/updateArr"

// websocketChannel
let socket: any
let socketChannel: any


// saga worker
export function* fetchSnapshotOrderSaga() {
  try {
    const { currencies } = yield select(state => state.orderReducer.selects)
    const { depth } = yield select(state => state.orderReducer.selects)
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const URL = `https://www.binance.com/api/v3/depth?symbol=${currencies.toUpperCase()}&limit=1000`
    const { asks, bids, lastUpdateId } = yield call(fetchSnapshotAxios, {proxyURL, URL})
    yield put({
      type: ActionTypes.FETCH_SNAPSHOT_ORDER__SUCCESS,
      payload: {
        asks: parseData(asks.slice(0, depth)),
        bids: parseData(bids.slice(0, depth)),
        snapshotAsks: asks,
        snapshotBids: bids,
        lastUpdateId,
        loading: false,
      },
    })
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_SNAPSHOT_ORDER__FAILURE,
      loading: false,
      error,
    })
  }
}

export function* updateOrderSaga(action: actionInterface) {
  try {
    const { socketData } = action.payload
    const { snapshotAsks, snapshotBids, selects } = yield select(state => state.orderReducer)
    const newSnapshotAsks = updateArrAsc(snapshotAsks, socketData.a)
    const newSnapshotBids = updateArrDesc(snapshotBids, socketData.b)
    yield put({
      type: ActionTypes.UPDATE_ORDER__SUCCESS,
      payload: {
        bufferData: [],
        snapshotAsks: newSnapshotAsks,
        snapshotBids: newSnapshotBids,
        lastUpdateId: true,
        asks: parseData(newSnapshotAsks.slice(0, selects.depth)),
        bids: parseData(newSnapshotBids.slice(0, selects.depth)),
        loading: false,
      },
    })
  } catch (error) {
    yield put({
      type: ActionTypes.UPDATE_ORDER__FAILURE,
      loading: false,
      error,
    })
  }
}


export function* websocketOrderSaga() {
  try {
    let lastBufferData: any = false
    const { currencies, interval } = yield select(state => state.orderReducer.selects)
    const url = `wss://stream.binance.com:9443/ws/${currencies}@depth@${interval}`
    socket = yield call(createWebSocketConnection, {url})
    socketChannel = yield call(createSocketChannel, socket)
    yield fork(fetchSnapshotOrderSaga)
    while (true) {
      const socketData  = yield take(socketChannel)
      const { lastUpdateId, bufferData } = yield select(state => state.orderReducer)
      if (!lastUpdateId) {
        yield put({
          type: ActionTypes.WEBSOCKET_ORDER_BUFFER,
          payload: {
            bufferData: socketData,
          },
        })
      } else if (lastUpdateId && !lastBufferData) {
        const currentBuffer = [...bufferData, socketData].filter((item: any) => item.u >= lastUpdateId)
        const currentBufferData = currentBuffer.filter((item: any) => item.U <= lastUpdateId + 1 && item.u >= lastUpdateId + 1)[0]
        if (currentBufferData) {
          lastBufferData = {...socketData}
          yield fork(updateOrderSaga, { payload: {socketData: currentBufferData}})
        } else {
          yield put({
            type: ActionTypes.WEBSOCKET_ORDER__FAILURE,
            loading: false,
            error: 'nowBufferDataFilter not fount',
          })
        }
      } else if ((lastBufferData.u + 1) === socketData.U) {
        lastBufferData = {...socketData}
        yield fork(updateOrderSaga, {payload: {socketData}})
      } else {
        yield put({
          type: ActionTypes.WEBSOCKET_ORDER__FAILURE,
          loading: false,
          error: 'lastBufferData.u + 1 !== newBufferData.U',
        })
      }
    }
  } catch (error) {
    yield put({
      type: ActionTypes.WEBSOCKET_ORDER__FAILURE,
      loading: false,
      error,
    })
  } finally {
    if (yield cancelled()) {
      socketChannel.close()
      socket.close()
    }
  }
}

export function* changeOrderBinanceSaga(action: actionInterface) {
  try {
    socketChannel.close()
    const selectsState = yield select(state => state.orderReducer.selects)
    let {depth, currencies, interval} = selectsState
    const {input, value} = action.payload
    if (input === 'depth') depth = Number(value)
    else if (input === 'currencies') currencies = value
    else if (input === 'interval') interval = value
    const selects = {depth, currencies, interval}
    yield put({
      type: ActionTypes.CHANGE_BINANCE_ORDER__LOADING,
      payload: {
        selects,
        bufferData: [],
        lastUpdateId: null,
        loading: true,
      },
    })
    yield fork(websocketOrderSaga)
  } catch (error) {
    yield put({
      type: ActionTypes.CHANGE_BINANCE_ORDER__FAILURE,
      loading: false,
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
    takeLatest(ActionTypes.WEBSOCKET_ORDER, websocketOrderSaga),
    takeLatest(ActionTypes.CHANGE_BINANCE_ORDER, changeOrderBinanceSaga),
    takeLatest(ActionTypes.CLEAR_ORDER, clearOrderSaga),
  ])
}
