export const WEBSOCKET_ORDER = 'WEBSOCKET_ORDER'
export const WEBSOCKET_ORDER_BUFFER = 'WEBSOCKET_ORDER__BUFFER'
export const WEBSOCKET_ORDER__FAILURE = 'WEBSOCKET_ORDER__FAILURE'


export const FETCH_SNAPSHOT_ORDER__SUCCESS = 'FETCH_SNAPSHOT_ORDER__SUCCESS'
export const FETCH_SNAPSHOT_ORDER__FAILURE = 'FETCH_SNAPSHOT_ORDER__FAILURE'


export const UPDATE_ORDER__SUCCESS = 'UPDATE_ORDER__SUCCESS'
export const UPDATE_ORDER__FAILURE = 'UPDATE_ORDER__FAILURE'

export const fetchOrder = (): object => (
  {
    type: WEBSOCKET_ORDER,
  })


export const CLEAR_ORDER = 'CLEAR_ORDER'
export const CLEAR_ORDER__SUCCESS = 'CLEAR_ORDER__SUCCESS'
export const CLEAR_ORDER__FAILURE = 'CLEAR_ORDER__FAILURE'

export const clearOrder = (): object => (
  {
    type: CLEAR_ORDER,
  })


export const CHANGE_ORDER_BINANCE = 'CHANGE_ORDER_BINANCE'
export const CHANGE_ORDER_BINANCE__LOADING = 'CHANGE_ORDER_BINANCE__LOADING'
export const CHANGE_ORDER_BINANCE__FAILURE = 'CHANGE_ORDER_BINANCE__FAILURE'

export const changeOrderBinance = (input: string, value: string | number): object => (
  {
    type: CHANGE_ORDER_BINANCE,
    payload: {
      input, value,
    },
  })
