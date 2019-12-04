import React from 'react'
import { object } from 'prop-types'
// router
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
// scss
import '../../assets/fonts/fonts.scss'
import './reset.css'
import './App.module.scss'
// components
import Header from '../Header/Header'
// pages
import OrderTablePage from '../../pages/OrderTablePage/OrderTablePage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'


const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Header />
    <Switch>
      <Route path='/not-found' component={NotFoundPage} />
      <Route exact path='/' component={OrderTablePage} />
      <Redirect to='/not-found' />
    </Switch>
  </ConnectedRouter>
)


App.propTypes = {
  history: object.isRequired,
}

export default App
