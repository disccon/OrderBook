// redux
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
// router
import { routerMiddleware } from 'connected-react-router'
// redux components
import rootSaga from '../rootSaga'
import rootReducer from '../reducers'


const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const configureStore = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
)


sagaMiddleware.run(rootSaga)
window.store = configureStore


export default configureStore
