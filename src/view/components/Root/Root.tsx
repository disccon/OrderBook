import React from 'react'
// router
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom'
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


interface ComponentProps {
  history: any
}

type AllProps = ComponentProps & RouteComponentProps

const Root: React.FC<AllProps> = ({history}) => (
  <ConnectedRouter history={history}>
    <GlobalStyle/>
    <Header/>
    <Switch>
      <Route path='/not-found' component={NotFoundPage}/>
      <Route exact path='/' component={OrderTablePage}/>
      <Redirect to='/not-found'/>
    </Switch>
  </ConnectedRouter>
)


export default Root
