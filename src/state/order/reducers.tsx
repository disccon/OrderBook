import * as ActionTypes from './actions'
import { initialOrderState } from './initialState'



// reducer
export default function orderReducer(state = initialOrderState, action: any) {
  switch (action.type) {
    case ActionTypes.FETCH_ORDER__SUCCESS: {
      return ({
        ...state,
        bids: action.payload.bids,
        asks: action.payload.asks,
        isLoading: action.payload.isLoading,
        error: undefined,
      })
    }
    case ActionTypes.FETCH_ORDER__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case ActionTypes.CHANGE_ORDER_BINANCE__LOADING: {
      return {
        ...state,
        selects: action.payload.selects,
        isLoading: action.payload.isLoading,
        error: undefined,
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
        error: undefined,
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
