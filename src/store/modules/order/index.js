export const initialCharacters = {
  isLoading: null,
  depth: 10,
  group: 'btcusdt',
  interval: '100ms',
  bids: [],
  asks: [],
}

// types
export const FETCH_ORDER = 'FETCH_ORDER'
export const FETCH_ORDER__SUCCESS = 'FETCH_ORDER__SUCCESS'
export const FETCH_ORDER__NOT_CHANGED = 'FETCH_ORDER__NOT_CHANGED'
export const FETCH_ORDER__FAILURE = 'FETCH_ORDER__FAILURE'

export const CLEAR_ORDER = 'CLEAR_ORDER'
export const CLEAR_ORDER__SUCCESS = 'CLEAR_ORDER__SUCCESS'
export const CLEAR_ORDER__FAILURE = 'CLEAR_ORDER__FAILURE'

export const CHANGE_ORDER_BINANCE = 'CHANGE_ORDER_BINANCE'
export const CHANGE_ORDER_BINANCE__LOADING = 'CHANGE_ORDER_BINANCE__LOADING'
export const CHANGE_ORDER_BINANCE__FAILURE = 'CHANGE_ORDER_BINANCE__FAILURE'


// actions
export const fetchOrder = () => (
  {
    type: FETCH_ORDER,
  })

export const clearOrder = () => (
  {
    type: CLEAR_ORDER,
  })

export const changeOrderBinance = (input, value) => (
  {
    type: CHANGE_ORDER_BINANCE,
    payload: {
      input, value,
    },
  })


// reducer
export default function orderReducer(state = initialCharacters, action) {
  switch (action.type) {
    case FETCH_ORDER__SUCCESS: {
      return {
        ...state,
        bids: action.payload.bids,
        asks: action.payload.asks,
        depth: action.payload.depth,
        group: action.payload.group,
        interval: action.payload.interval,
        isLoading: action.payload.isLoading,
        error: undefined,
      }
    }
    case FETCH_ORDER__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case CHANGE_ORDER_BINANCE__LOADING: {
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: undefined,
      }
    }
    case CHANGE_ORDER_BINANCE__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }


    case CLEAR_ORDER__SUCCESS: {
      return {
        ...initialCharacters,
        error: undefined,
      }
    }
    case CLEAR_ORDER__FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    default:
      return state
  }
}
