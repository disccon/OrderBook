export const FETCH_ORDER = 'FETCH_ORDER'
export const FETCH_ORDER__SUCCESS = 'FETCH_ORDER__SUCCESS'
export const FETCH_ORDER__FAILURE = 'FETCH_ORDER__FAILURE'

export const fetchOrder = () => (
  {
    type: FETCH_ORDER,
  })


export const CLEAR_ORDER = 'CLEAR_ORDER'
export const CLEAR_ORDER__SUCCESS = 'CLEAR_ORDER__SUCCESS'
export const CLEAR_ORDER__FAILURE = 'CLEAR_ORDER__FAILURE'

export const clearOrder = () => (
  {
    type: CLEAR_ORDER,
  })


export const CHANGE_ORDER_BINANCE = 'CHANGE_ORDER_BINANCE'
export const CHANGE_ORDER_BINANCE__LOADING = 'CHANGE_ORDER_BINANCE__LOADING'
export const CHANGE_ORDER_BINANCE__FAILURE = 'CHANGE_ORDER_BINANCE__FAILURE'

export const changeOrderBinance = (input, value) => (
  {
    type: CHANGE_ORDER_BINANCE,
    payload: {
      input, value,
    },
  })
