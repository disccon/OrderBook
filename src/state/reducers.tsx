import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'
import { orderReducer } from './order'
import { OrderState } from './order/initialState'


export interface AppState {
  router: RouterState
  orderReducer: OrderState
}

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    orderReducer,
  })