import React, { Component } from 'react'
import {
  oneOfType, bool, oneOf, func,
} from 'prop-types'
import { connect } from 'react-redux'
import OrderBookTitle from '../../components/OrderBookTitle/OrderBookTitle'
import Loader from '../../components/Loader/Loader'
import OrderBookWrapper from '../../components/OrderBookWrapper/OrderBookWrapper'
// actions
import { actions } from '../../../state'

const { fetchOrder, clearOrder } = actions


class OrderTablePage extends Component {
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


OrderTablePage.propTypes = {
  isLoading: oneOfType([
    bool,
    oneOf([null]).isRequired,
  ]),
  fetchOrder: func,
  clearOrder: func,
}

const mapStateToProps = state => {
  const { isLoading } = state.orderReducer
  return {
    isLoading,
  }
}

export default connect(
  mapStateToProps,
  { fetchOrder, clearOrder },
)(OrderTablePage)
