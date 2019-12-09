import React from 'react'
import { render } from 'react-dom'
// redux
import { Provider } from 'react-redux'
// Root
import Root from './view/components/Root/Root'
import * as serviceWorker from './serviceWorker'

import { store, history } from './state'


render(
  <Provider store={store}>
    <Root history={history} />
  </Provider>,
  document.getElementById('root'),
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
