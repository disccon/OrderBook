import React from 'react'
import { array } from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
// scss
import styles from './OrderBookWrapper.module.scss'
// components
import OrderTable from '../OrderTable/OrderTable'

const cx = classNames.bind(styles)


const OrderBookWrapper = ({ bids, asks }) => (
  <div className={cx('orderTableWrapper')}>
    <OrderTable title='Buy Order' orderArr={bids} />
    <OrderTable title='Sell Order' orderArr={asks} />
  </div>
)


OrderBookWrapper.propTypes = {
  bids: array.isRequired,
  asks: array.isRequired,
}

const mapStateToProps = state => {
  const { bids, asks } = state.orderReducer
  return {
    bids, asks,
  }
}

export default connect(
  mapStateToProps,
)(OrderBookWrapper)
