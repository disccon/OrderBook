import React, { Component } from 'react'
import { connect } from 'react-redux'
// components
import OrderBookTitle from '../../components/OrderBookTitle/OrderBookTitle'
import Loader from '../../components/Loader/Loader'
import OrderBookWrapper from '../../components/OrderBookWrapper/OrderBookWrapper'
// actions
import { actions } from '../../../state'
import { AppState } from '../../../state/reducers'

const { fetchOrder, clearOrder } = actions

interface PropsFromState {
  loading: null | boolean
}

interface PropsFromDispatch {
  fetchOrder: typeof fetchOrder
  clearOrder: typeof clearOrder
}

type AllProps = PropsFromState & PropsFromDispatch


class OrderTablePage extends Component<AllProps> {
  componentDidMount() {
    this.fetchOrderHandler()
  }

  componentWillUnmount() {
    const { clearOrder } = this.props
    clearOrder()
  }

  fetchOrderHandler = (): void => {
    const { fetchOrder } = this.props
    fetchOrder()
  }

  render() {
    const { loading } = this.props
    return (
      <div className='container direction-column'>
        <OrderBookTitle />
        {loading !== null && <OrderBookWrapper />}
        {(loading || loading === null) && <Loader />}
      </div>
    )
  }
}


const mapStateToProps = ({ orderReducer}: AppState) => {
  const { loading } = orderReducer
  return {
    loading,
  }
}

export default connect(
  mapStateToProps,
  { fetchOrder, clearOrder },
)(OrderTablePage)
