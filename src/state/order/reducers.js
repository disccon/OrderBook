import * as ActionTypes from './actions'

export const initialCharacters = {
  isLoading: null,
  selects: {
    depth: 10,
    currencies: 'btcusdt',
    interval: '1000ms',
  },
  bids: [],
  asks: [],
}


// reducer
export default function orderReducer(state = initialCharacters, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ORDER__SUCCESS: {
      return ({
        ...state,
        bids: action.payload.bids,
        asks: action.payload.asks,
        selects: action.payload.selects,
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
        ...initialCharacters,
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
