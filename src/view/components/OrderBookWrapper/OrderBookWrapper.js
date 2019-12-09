import React from 'react'
import { array } from 'prop-types'
import { connect } from 'react-redux'
// styled
import styled from 'styled-components'
// components
import OrderTable from '../OrderTable/OrderTable'

const OrderTableWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`


const OrderBookWrapper = ({ bids, asks }) => (
  <OrderTableWrapper>
    <OrderTable title='Buy Order' orderArr={bids} />
    <OrderTable title='Sell Order' orderArr={asks} />
  </OrderTableWrapper>
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
