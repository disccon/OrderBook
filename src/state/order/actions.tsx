import { action } from 'typesafe-actions'
import * as ActionTypes from './types'

export const fetchOrder = () => action(ActionTypes.WEBSOCKET_ORDER)

export const clearOrder = () => action(ActionTypes.CLEAR_ORDER)

export const changeOrderBinance = (input: string, value: string | number) => action(ActionTypes.CHANGE_BINANCE_ORDER,{input, value})

