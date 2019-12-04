import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import orderReducer from './modules/order'


export default history => combineReducers({
  router: connectRouter(history),
  orderReducer,
})
