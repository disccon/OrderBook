import React from 'react'
import { render } from 'react-dom'
// redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
// import logger from 'redux-logger'
// router
import { routerMiddleware } from 'connected-react-router'
// redux components
import rootSaga from './store/saga'
import rootReducer from './store/reducers'
// App
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
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
window.store = store

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
