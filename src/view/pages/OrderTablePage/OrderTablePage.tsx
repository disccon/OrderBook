import React, { Component } from 'react'
import { connect } from 'react-redux'
// components
import OrderBookTitle from '../../components/OrderBookTitle/OrderBookTitle'
import Loader from '../../components/Loader/Loader'
import OrderBookWrapper from '../../components/OrderBookWrapper/OrderBookWrapper'
// actions
import { actions } from '../../../state'
import { AppState } from "../../../state/reducers";

const { fetchOrder, clearOrder } = actions

interface PropsFromState {
  isLoading: null | null
}

interface PropsFromDispatch {
  fetchOrder: typeof fetchOrder
  clearOrder: typeof clearOrder
}

type AllProps = PropsFromState & PropsFromDispatch


class OrderTablePage extends Component<AllProps> {
  componentDidMount() {
    this.fetchOrderTable()
  }

  componentWillUnmount() {
    const { clearOrder } = this.props
    clearOrder()
  }

  fetchOrderTable = () => {
    const { fetchOrder } = this.props
    fetchOrder()
  }

  render() {
    const { isLoading } = this.props
    return (
      <div className='container direction-column'>
        <OrderBookTitle />
        {isLoading !== null && <OrderBookWrapper />}
        {(isLoading || isLoading === null) && <Loader />}
      </div>
    )
  }
}


const mapStateToProps = ({ orderReducer}: AppState) => {
  const { isLoading } = orderReducer
  return {
    isLoading,
  }
}

export default connect(
  mapStateToProps,
  { fetchOrder, clearOrder },
)(OrderTablePage)
