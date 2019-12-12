import * as ActionTypes from './actions'
import { initialOrderState, OrderState } from './initialState'
import { Reducer } from 'redux'
import { actionInterface } from '../../Interface/actionInterface'


// reducer
const reducer: Reducer<OrderState> = (state = initialOrderState, action: actionInterface) => {
  switch (action.type) {
    case ActionTypes.FETCH_ORDER__BUFFER: {
      return ({
        ...state,
        bufferData: [
          action.payload.bufferData,
        ],
        error: null
      })
    }
    case ActionTypes.FETCH_ORDER__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case ActionTypes.FETCH_SNAPSHOT_ORDER__SUCCESS: {
      return ({
        ...state,
        snapshotAsks: action.payload.snapshotAsks,
        snapshotBids: action.payload.snapshotBids,
        lastUpdateId: action.payload.lastUpdateId,
        error: null
      })
    }
    case ActionTypes.FETCH_SNAPSHOT_ORDER__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case ActionTypes.UPDATE_ORDER__SUCCESS: {
      return ({
        ...state,
        bufferData: action.payload.bufferData,
        lastBufferData: action.payload.lastBufferData,
        snapshotAsks: action.payload.snapshotAsks,
        snapshotBids: action.payload.snapshotBids,
        lastUpdateId: action.payload.lastUpdateId,
        asks: action.payload.asks,
        bids: action.payload.bids,
        loading: action.payload.loading,
        error: null
      })
    }
    case ActionTypes.UPDATE_ORDER__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case ActionTypes.CHANGE_ORDER_BINANCE__LOADING: {
      return {
        ...state,
        selects: action.payload.selects,
        loading: action.payload.loading,
        error: null,
      }
    }

    case ActionTypes.CHANGE_ORDER_BINANCE__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case ActionTypes.CLEAR_ORDER__SUCCESS: {
      return {
        ...initialOrderState,
        error: null,
      }
    }
    case ActionTypes.CLEAR_ORDER__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    default:
      return state
  }
}

export { reducer as orderReducer }