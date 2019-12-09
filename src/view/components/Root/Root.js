import React from 'react'
import { object } from 'prop-types'
// router
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
// scss
import '../../../assets/fonts/fonts.scss'
import './reset.css'
// styled
import GlobalStyle from '../../styled/GlobalStyle'
// components
import Header from '../Header/Header'
// pages
import OrderTablePage from '../../pages/OrderTablePage/OrderTablePage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'


const Root = ({ history }) => (
  <ConnectedRouter history={history}>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path='/not-found' component={NotFoundPage} />
      <Route exact path='/' component={OrderTablePage} />
      <Redirect to='/not-found' />
    </Switch>
  </ConnectedRouter>
)


Root.propTypes = {
  history: object.isRequired,
}

export default Root
