import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducers as orderReducer } from './order'


export default history => combineReducers({
  router: connectRouter(history),
  orderReducer,
})
