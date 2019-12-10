import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'
import { reducers as orderReducer } from './order'
import { OrderInterface } from './order/initialState'


export interface AppState {
  router: RouterState
  orderReducer: OrderInterface
}

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    orderReducer,
  })