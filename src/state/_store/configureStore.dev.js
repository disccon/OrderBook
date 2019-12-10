// redux
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
// import logger from 'redux-logger'
// router
import { routerMiddleware } from 'connected-react-router'
// redux components
import rootSaga from '../rootSaga'
import { rootReducer } from '../reducers'


export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const configureStore = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      // logger,
    ),
  ),
)


sagaMiddleware.run(rootSaga)
window.store = configureStore
